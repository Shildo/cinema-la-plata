"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { readMockSession } from "@/lib/mock-session";

import { cinemaRooms, roomLayouts } from "../../../app/data/cinemaRooms";
import AsientoButaca from "../../../public/svg/AsientoButaca";
import CirculoButaca from "../../../public/svg/CirculoButaca";
import Pantalla from "../../../public/svg/Pantalla";

import styles from "./MovieBooking.module.css";

type Site = {
  number: string;
  name: string;
  location: string;
  imgURL: string;
  rooms: string;
  locationURL: string;
  cinemaID: "rocha" | "ocho";
};

type Movie = {
  slug: string;
  title: string;
  meta: string;
  synopsis: string;
  image: string;
  trailer: string;
  duration: string;
  genre: string;
  formats: string[];
  languages: ("castellano" | "subtitulada")[];
  siteNumbers?: string[];
};

type MovieBookingProps = {
  sites: Site[];
  movie: Movie;
};

const showtimes = [
  {
    date: "LUN 31",
    fullDate: "31 de agosto",
    times: ["16:30", "19:00", "21:30"],
  },
  {
    date: "MAR 01",
    fullDate: "1 de septiembre",
    times: ["15:00", "18:00", "20:30", "23:00"],
  },
  {
    date: "MIÉ 02",
    fullDate: "2 de septiembre",
    times: ["16:00", "18:30", "21:00"],
  },
  {
    date: "JUE 03",
    fullDate: "3 de septiembre",
    times: ["15:30", "18:00", "20:30", "22:45"],
  },
  {
    date: "VIE 04",
    fullDate: "4 de septiembre",
    times: ["14:30", "17:00", "19:30", "22:00"],
  },
];

function scrollIntoViewOnMobile(
  element: HTMLElement | null,
  block: ScrollLogicalPosition = "start"
) {
  if (!element || !window.matchMedia("(max-width: 1024px)").matches) return;

  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

  window.requestAnimationFrame(() => {
    if (element.isConnected) element.scrollIntoView({ behavior, block });
  });
}

export default function MovieBooking({ sites, movie }: MovieBookingProps) {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);

  const bookingContentRef = useRef<HTMLDivElement>(null);
  const [stepScrollRequest, setStepScrollRequest] = useState(0);
  const siteContinueRef = useRef<HTMLButtonElement>(null);
  const [siteContinueScrollRequest, setSiteContinueScrollRequest] = useState(0);
  const formatContinueRef = useRef<HTMLButtonElement>(null);
  const [formatContinueScrollRequest, setFormatContinueScrollRequest] = useState(0);
  const languageContinueRef = useRef<HTMLButtonElement>(null);
  const [languageContinueScrollRequest, setLanguageContinueScrollRequest] = useState(0);
  const showtimesRef = useRef<HTMLDivElement>(null);
  const [showtimesScrollRequest, setShowtimesScrollRequest] = useState(0);
  const showtimeContinueRef = useRef<HTMLButtonElement>(null);
  const [showtimeContinueScrollRequest, setShowtimeContinueScrollRequest] = useState(0);

  useEffect(() => {
    scrollIntoViewOnMobile(bookingContentRef.current, "start");
  }, [stepScrollRequest]);
  useEffect(() => {
    scrollIntoViewOnMobile(siteContinueRef.current, "nearest");
  }, [siteContinueScrollRequest]);

  useEffect(() => {
    if (formatContinueScrollRequest > 0) {
      scrollIntoViewOnMobile(formatContinueRef.current, "nearest");
    }
  }, [formatContinueScrollRequest]);

  useEffect(() => {
    if (languageContinueScrollRequest > 0) {
      scrollIntoViewOnMobile(languageContinueRef.current, "nearest");
    }
  }, [languageContinueScrollRequest]);

  useEffect(() => {
    if (selectedDate) scrollIntoViewOnMobile(showtimesRef.current, "start");
  }, [showtimesScrollRequest, selectedDate]);

  useEffect(() => {
    if (selectedTime) scrollIntoViewOnMobile(showtimeContinueRef.current, "nearest");
  }, [showtimeContinueScrollRequest, selectedTime]);
  const handleStepClick = (step: number) => {
    setCurrentStep(step);
    setStepScrollRequest((request) => request + 1);
  };

  const availableSites = movie.siteNumbers
    ? sites.filter((site) => movie.siteNumbers?.includes(site.number))
    : sites;

  const availableFormats = movie.formats.filter((format) => {
    if (format !== "ATMOS" && format !== "4D") return true;

    return availableSites.some((site) =>
      cinemaRooms.some(
        (room) =>
          room.cinema === site.cinemaID &&
          room.specialFormats?.includes(format) &&
          room.siteNumbers?.includes(site.number)
      )
    );
  });

  const availableSitesForFormat = selectedFormat
    ? availableSites.filter((site) => {
        if (selectedFormat !== "ATMOS" && selectedFormat !== "4D") return true;

        return cinemaRooms.some(
          (room) =>
            room.cinema === site.cinemaID &&
            room.specialFormats?.includes(selectedFormat) &&
            room.siteNumbers?.includes(site.number)
        );
      })
    : [];

  const selectedSiteData = sites.find(
    (site) => site.number === selectedSite
  );

  const availableRooms = cinemaRooms.filter(
    (room) => room.cinema === selectedSiteData?.cinemaID
  );

  const selectedDay = showtimes.find((day) => day.date === selectedDate);

  const selectedTimeIndex =
    selectedDay?.times.indexOf(selectedTime ?? "") ?? -1;

  // ATMOS y 4D quedan fijados a su sala; los demás formatos rotan entre salas.
  const selectedSpecialRoom = availableRooms.find(
    (room) =>
      room.specialFormats?.includes(selectedFormat ?? "") &&
      room.siteNumbers?.includes(selectedSiteData?.number ?? "")
  );

  const selectedRoom =
    selectedFormat === "ATMOS" || selectedFormat === "4D"
      ? selectedSpecialRoom
      : availableRooms.length > 0 && selectedTimeIndex >= 0
        ? availableRooms[selectedTimeIndex % availableRooms.length]
        : undefined;

  const selectedLayout = roomLayouts.find(
    (layout) => layout.id === selectedRoom?.layoutId
  );

  const canSelectLanguage = selectedFormat !== null;
  const canSelectShowtime = selectedFormat !== null && selectedLanguage !== null;
  const canSelectSite = canSelectShowtime && selectedDate !== null && selectedTime !== null;
  const canSelectSeats =
    selectedSite !== null &&
    selectedFormat !== null &&
    selectedLanguage !== null &&
    selectedDate !== null &&
    selectedTime !== null &&
    selectedRoom !== undefined;

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((current) =>
      current.includes(seatId)
        ? current.filter((seat) => seat !== seatId)
        : [...current, seatId]
    );
  };

  const handleSiteSelect = (siteNumber: string) => {
    setSelectedSite(siteNumber);
    setSelectedSeats([]);
    setSiteContinueScrollRequest((request) => request + 1);
  };

  const handleFormatSelect = (format: string) => {
    setSelectedFormat(format);
    setSelectedLanguage(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedSite(null);
    setSelectedSeats([]);
    setFormatContinueScrollRequest((request) => request + 1);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedSite(null);
    setSelectedSeats([]);
    setLanguageContinueScrollRequest((request) => request + 1);
  };

  const renderSeatRange = (
    rowLabel: string,
    start: number,
    count: number
  ) =>
    Array.from({ length: count }, (_, index) => {
      const seatNumber = start + index;
      const seatId = `${rowLabel}${seatNumber}`;
      const isSelected = selectedSeats.includes(seatId);

      return (
        <button
          type="button"
          key={seatId}
          className={`${styles["seat"]} ${
            isSelected ? styles.selected : ""
          }`}
          onClick={() => toggleSeat(seatId)}
          aria-label={`Butaca ${rowLabel} ${seatNumber}`}
          aria-pressed={isSelected}
        >
          <AsientoButaca
            number={seatNumber}
            className={styles["seat-icon"]}
          />
        </button>
      );
    });

  const handleContinueToPurchase = () => {
    const bookingData = {
      movie: {
        slug: movie.slug,
        title: movie.title,
        image: movie.image,
      },

      site: selectedSiteData
        ? {
            number: selectedSiteData.number,
            name: selectedSiteData.name,
            location: selectedSiteData.location,
          }
        : null,

      format: selectedFormat,
      language: selectedLanguage,

      date: selectedDay
        ? {
            label: selectedDay.date,
            fullDate: selectedDay.fullDate,
          }
        : null,

      time: selectedTime,
      seats: selectedSeats,

      room: selectedRoom
        ? {
            id: selectedRoom.id,
            name: selectedRoom.name,
            layoutId: selectedRoom.layoutId,
          }
        : null,
    };

    sessionStorage.setItem("movieBooking", JSON.stringify(bookingData));
    if (!readMockSession()) {
      setLoginPromptOpen(true);
      return;
    }

    router.push("/comprar-entrada");
  };

  return (
    <section className={styles["booking-section"]}>
      <div className={styles["booking-steps"]}>
        <button
          type="button"
          className={`${styles["booking-step"]} ${
            currentStep === 0 ? styles.active : ""
          }`}
          onClick={() => handleStepClick(0)}
        >
          <span>01</span>
          <strong>Elegí el formato</strong>
        </button>

        <button
          type="button"
          disabled={!canSelectLanguage}
          className={`${styles["booking-step"]} ${
            currentStep === 1 ? styles.active : ""
          } ${!canSelectLanguage ? styles.disabled : ""}`}
          onClick={() => handleStepClick(1)}
        >
          <span>02</span>
          <strong>Elegí el idioma</strong>
        </button>

        <button
          type="button"
          disabled={!canSelectShowtime}
          className={`${styles["booking-step"]} ${
            currentStep === 2 ? styles.active : ""
          } ${!canSelectShowtime ? styles.disabled : ""}`}
          onClick={() => handleStepClick(2)}
        >
          <span>03</span>
          <strong>Elegí día y hora</strong>
        </button>

        <button
          type="button"
          disabled={!canSelectSite}
          className={`${styles["booking-step"]} ${
            currentStep === 3 ? styles.active : ""
          } ${!canSelectSite ? styles.disabled : ""}`}
          onClick={() => handleStepClick(3)}
        >
          <span>04</span>
          <strong>Elegí dónde</strong>
        </button>

        <button
          type="button"
          disabled={!canSelectSeats}
          className={`${styles["booking-step"]} ${
            currentStep === 4 ? styles.active : ""
          } ${!canSelectSeats ? styles.disabled : ""}`}
          onClick={() => handleStepClick(4)}
        >
          <span>05</span>
          <strong>Seleccioná tus butacas</strong>
        </button>
      </div>

      {currentStep === 0 && (
        <div className={styles["booking-content"]} ref={bookingContentRef}>
          <div className={styles["booking-heading"]}>
            <p>01 / FORMATO</p>
            <h3>¿Cómo querés verla?</h3>
            <span>Elegí el formato que preferís para disfrutar la película.</span>
          </div>

          <div className={styles["format-grid"]}>
            {availableFormats.map((format) => (
              <button
                type="button"
                key={format}
                className={`${styles["format-card"]} ${
                  selectedFormat === format ? styles.selected : ""
                }`}
                onClick={() => handleFormatSelect(format)}
              >
                <strong>{format}</strong>
                <small>
                  {format === "HD" && "Alta definición"}
                  {format === "3D" && "Experiencia 3D"}
                  {format === "4D" && "Experiencia inmersiva · Cinema City, Sala 1"}
                  {format === "ATMOS" && "Sonido envolvente · Cinema Rocha, Sala 1"}
                </small>
              </button>
            ))}
          </div>

          <div className={styles["booking-navigation"]}>
            <button
              type="button"
              className="button button--primary"
              disabled
            >
              ← Volver
            </button>
            <button
              type="button"
              ref={formatContinueRef}
              className="button button--primary"
              disabled={!selectedFormat}
              onClick={() => handleStepClick(1)}
            >
              Continuar →
            </button>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className={styles["booking-content"]} ref={bookingContentRef}>
          <div className={styles["booking-heading"]}>
            <p>02 / IDIOMA</p>
            <h3>¿En qué idioma querés verla?</h3>
            <span>Elegí una de las opciones disponibles para esta película.</span>
          </div>

          <div className={styles["format-grid"]}>
            {movie.languages.map((language) => (
              <button
                type="button"
                key={language}
                className={`${styles["format-card"]} ${
                  selectedLanguage === language ? styles.selected : ""
                }`}
                onClick={() => handleLanguageSelect(language)}
              >
                <strong>
                  {language === "castellano" ? "Castellano" : "Inglés subtitulado"}
                </strong>
                <small>
                  {language === "castellano"
                    ? "Audio en español"
                    : "Audio en inglés con subtítulos en español"}
                </small>
              </button>
            ))}
          </div>

          <div className={styles["booking-navigation"]}>
            <button
              type="button"
              className="button button--primary"
              onClick={() => handleStepClick(0)}
            >
              ← Volver
            </button>

            {selectedLanguage && (
              <button
                type="button"
                ref={languageContinueRef}
                className="button button--primary"
                onClick={() => handleStepClick(2)}
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className={styles["booking-content"]} ref={bookingContentRef}>
          <div className={styles["booking-heading"]}>
            <p>03 / DÍA Y HORA</p>
            <h3>¿Cuándo querés verla?</h3>
            <span>Elegí el día y horario que mejor te quede.</span>
          </div>

          <div className={styles["date-grid"]}>
            {showtimes.map((day) => (
              <button
                type="button"
                key={day.date}
                className={`${styles["date-card"]} ${
                  selectedDate === day.date ? styles.selected : ""
                }`}
                onClick={() => {
                  setSelectedDate(day.date);
                  setSelectedTime(null);
                  setSelectedSite(null);
                  setSelectedSeats([]);
                  setShowtimesScrollRequest((request) => request + 1);
                }}
              >
                <span>{day.date.split(" ")[0]}</span>
                <strong>{day.date.split(" ")[1]}</strong>
                <small>{day.fullDate}</small>
              </button>
            ))}
          </div>

          {selectedDate && (
            <div className={styles["showtimes"]} ref={showtimesRef}>
              <div className={styles["showtimes-heading"]}>
                <span>HORARIOS DISPONIBLES</span>
                <strong>{selectedDay?.fullDate}</strong>
              </div>

              <div className={styles["showtime-grid"]}>
                {selectedDay?.times.map((time) => (
                  <button
                    type="button"
                    key={time}
                    className={`${styles["showtime"]} ${
                      selectedTime === time ? styles.selected : ""
                    }`}
                    onClick={() => {
                      setSelectedTime(time);
                      setSelectedSite(null);
                      setSelectedSeats([]);
                      setShowtimeContinueScrollRequest((request) => request + 1);
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={styles["booking-navigation"]}>
            <button
              type="button"
              className="button button--primary"
              onClick={() => handleStepClick(1)}
            >
              ← Volver
            </button>

            {selectedTime && (
              <button
                type="button"
                ref={showtimeContinueRef}
                className="button button--primary"
                onClick={() => handleStepClick(3)}
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className={styles["booking-content"]} ref={bookingContentRef}>
          <div className={styles["booking-heading"]}>
            <p>04 / SEDE</p>
            <h3>¿Dónde querés ver la película?</h3>
            <span>Elegí una sede disponible para el formato seleccionado.</span>
          </div>

          <div className={styles["site-grid"]}>
            {availableSitesForFormat.map((site) => (
              <button
                type="button"
                key={site.number}
                className={`${styles["site-card"]} ${
                  selectedSite === site.number ? styles.selected : ""
                }`}
                onClick={() => handleSiteSelect(site.number)}
              >
                <div className={styles["site-image"]}>
                  <img src={site.imgURL} alt={site.name} />
                </div>

                <div className={styles["site-info"]}>
                  <div>
                    <h4>{site.name}</h4>
                    <p>{site.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className={styles["booking-navigation"]}>
            <button
              type="button"
              className="button button--primary"
              onClick={() => handleStepClick(2)}
            >
              ← Volver
            </button>

            {selectedSite && (
              <button
                type="button"
                ref={siteContinueRef}
                className="button button--primary"
                onClick={() => handleStepClick(4)}
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className={styles["booking-content"]} ref={bookingContentRef}>
          <div className={styles["booking-heading"]}>
            <p>05 / BUTACAS</p>
            <h3>¿Dónde querés sentarte?</h3>
            <span>
              Seleccioná las butacas que quieras ocupar para continuar.
            </span>
          </div>

          <div className={styles["cinema-room"]}>
            <div className={styles["cinema-room__canvas"]}>
              <h4 className={styles["room-title"]}>{selectedRoom?.name}</h4>

              <div className={styles["screen-container"]}>
                <span>PANTALLA</span>
                <Pantalla
                  className={styles["screen"]}
                  aria-label="Pantalla"
                />
              </div>

              <div className={styles["seat-map"]}>
                {selectedLayout?.rows.map((row) => {
                // Las filas con seatGroups usan el diseño especial de Rocha sala 1.
                if (row.seatGroups) {
                  const [leftCount, middleCount, rightCount] = row.seatGroups;
                  const middleStart = leftCount + 1;
                  const rightStart = leftCount + middleCount + 1;

                  return (
                    <div className={styles["seat-row-rocha"]} key={row.label}>
                      <div className={`${styles["seat-group"]} ${styles["seat-group-left"]}`}>
                        {renderSeatRange(row.label, 1, leftCount)}
                      </div>

                      <CirculoButaca
                        label={row.label}
                        className={styles["row-label-inline"]}
                      />

                      <div className={`${styles["seat-group"]} ${styles["seat-group-middle"]}`}>
                        {renderSeatRange(row.label, middleStart, middleCount)}
                      </div>

                      <CirculoButaca
                        label={row.label}
                        className={styles["row-label-inline"]}
                      />

                      <div className={`${styles["seat-group"]} ${styles["seat-group-right"]}`}>
                        {renderSeatRange(row.label, rightStart, rightCount)}
                      </div>
                    </div>
                  );
                }

                // Las filas de las otras salas siguen con su diseño normal.
                return (
                  <div className={styles["seat-row"]} key={row.label}>
                    <CirculoButaca
                      label={row.label}
                      className={styles["row-label"]}
                    />

                    <div
                      className={`${styles["seats"]} ${
                        row.align === "start" ? styles["seats-start"] : ""
                      }`}
                    >
                      {renderSeatRange(row.label, 1, row.seatCount)}
                    </div>

                    <CirculoButaca
                      label={row.label}
                      className={styles["row-label"]}
                    />
                  </div>
                );
                })}
              </div>

              <p className={styles["room-capacity"]}>
                Capacidad:{" "}
                {selectedLayout?.rows.reduce(
                  (total, row) => total + row.seatCount,
                  0
                ) ?? 0}
              </p>
            </div>
          </div>

          {selectedSeats.length > 0 && (
            <div className={styles["selected-seats"]}>
              <span>BUTACAS SELECCIONADAS</span>
              <strong>{selectedSeats.join(" · ")}</strong>
            </div>
          )}

          <div className={styles["booking-navigation"]}>
            <button
              type="button"
              className="button button--primary"
              onClick={() => handleStepClick(3)}
            >
              ← Volver
            </button>

            {selectedSeats.length > 0 && (
              <button
                type="button"
                className="button button--primary"
                onClick={handleContinueToPurchase}
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      )}

      {loginPromptOpen && (
        <div
          className={styles["login-prompt-overlay"]}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLoginPromptOpen(false);
          }}
        >
          <section
            className={styles["login-prompt"]}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="login-prompt-title"
            aria-describedby="login-prompt-description"
          >
            <p className={styles["login-prompt__eyebrow"]}>UN PASO MÁS</p>
            <h2 id="login-prompt-title">Iniciá sesión para continuar.</h2>
            <p id="login-prompt-description">
              El formato, idioma, función y butacas que elegiste quedan guardados mientras ingresás a tu cuenta.
            </p>
            <button
              type="button"
              className={`${styles["login-prompt__action"]} button button--primary`}
              onClick={() => router.push("/ingresar?next=%2Fcomprar-entrada")}
            >
              Iniciar sesión <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className={styles["login-prompt__cancel"]}
              onClick={() => setLoginPromptOpen(false)}
            >
              Seguir eligiendo
            </button>
          </section>
        </div>
      )}
    </section>
  );
}
