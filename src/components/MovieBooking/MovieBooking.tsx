"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function MovieBooking({ sites, movie }: MovieBookingProps) {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const selectedSiteData = sites.find(
    (site) => site.number === selectedSite
  );

  const availableRooms = cinemaRooms.filter(
    (room) => room.cinema === selectedSiteData?.cinemaID
  );

  const selectedDay = showtimes.find((day) => day.date === selectedDate);

  const selectedTimeIndex =
    selectedDay?.times.indexOf(selectedTime ?? "") ?? -1;

  // Asignación provisoria: reparte los horarios entre las salas del cine.
  const selectedRoom =
    availableRooms.length > 0 && selectedTimeIndex >= 0
      ? availableRooms[selectedTimeIndex % availableRooms.length]
      : undefined;

  const selectedLayout = roomLayouts.find(
    (layout) => layout.id === selectedRoom?.layoutId
  );

  const canSelectFormat = selectedSite !== null;
  const canSelectShowtime =
    selectedSite !== null && selectedFormat !== null;
  const canSelectSeats =
    selectedSite !== null &&
    selectedFormat !== null &&
    selectedDate !== null &&
    selectedTime !== null;

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((current) =>
      current.includes(seatId)
        ? current.filter((seat) => seat !== seatId)
        : [...current, seatId]
    );
  };

  const handleSiteSelect = (siteNumber: string) => {
    setSelectedSite(siteNumber);
    setSelectedFormat(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedSeats([]);
  };

  const handleFormatSelect = (format: string) => {
    setSelectedFormat(format);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedSeats([]);
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
          onClick={() => setCurrentStep(0)}
        >
          <span>01</span>
          <strong>Seleccioná tu sede</strong>
        </button>

        <button
          type="button"
          disabled={!canSelectFormat}
          className={`${styles["booking-step"]} ${
            currentStep === 1 ? styles.active : ""
          } ${!canSelectFormat ? styles.disabled : ""}`}
          onClick={() => setCurrentStep(1)}
        >
          <span>02</span>
          <strong>Elegí el formato</strong>
        </button>

        <button
          type="button"
          disabled={!canSelectShowtime}
          className={`${styles["booking-step"]} ${
            currentStep === 2 ? styles.active : ""
          } ${!canSelectShowtime ? styles.disabled : ""}`}
          onClick={() => setCurrentStep(2)}
        >
          <span>03</span>
          <strong>Elegí tu función</strong>
        </button>

        <button
          type="button"
          disabled={!canSelectSeats}
          className={`${styles["booking-step"]} ${
            currentStep === 3 ? styles.active : ""
          } ${!canSelectSeats ? styles.disabled : ""}`}
          onClick={() => setCurrentStep(3)}
        >
          <span>04</span>
          <strong>Seleccioná tus butacas</strong>
        </button>
      </div>

      {currentStep === 0 && (
        <div className={styles["booking-content"]}>
          <div className={styles["booking-heading"]}>
            <p>01 / SEDE</p>
            <h3>¿Dónde querés ver la película?</h3>
            <span>Seleccioná uno de nuestros complejos para continuar.</span>
          </div>

          <div className={styles["site-grid"]}>
            {sites.map((site) => (
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

          {selectedSite && (
            <div className={styles["booking-next"]}>
              <button
                type="button"
                className="button button--primary"
                onClick={() => setCurrentStep(1)}
              >
                Continuar →
              </button>
            </div>
          )}
        </div>
      )}

      {currentStep === 1 && (
        <div className={styles["booking-content"]}>
          <div className={styles["booking-heading"]}>
            <p>02 / FORMATO</p>
            <h3>¿Cómo querés verla?</h3>
            <span>
              Elegí el formato que preferís para disfrutar la película.
            </span>
          </div>

          <div className={styles["format-grid"]}>
            {["HD", "3D", "4D", "ATMOS"].map((format) => {
              const isAvailable = movie.formats.includes(format);

              return (
                <button
                  type="button"
                  key={format}
                  disabled={!isAvailable}
                  className={`${styles["format-card"]} ${
                    selectedFormat === format ? styles.selected : ""
                  } ${!isAvailable ? styles.disabled : ""}`}
                  onClick={() => {
                    if (isAvailable) handleFormatSelect(format);
                  }}
                >
                  <strong>{format}</strong>

                  <small>
                    {format === "HD" && "Alta definición"}
                    {format === "3D" && "Experiencia 3D"}
                    {format === "4D" && "Experiencia inmersiva"}
                    {format === "ATMOS" && "Sonido envolvente"}
                  </small>
                </button>
              );
            })}
          </div>

          <div className={styles["booking-navigation"]}>
            <button
              type="button"
              className="button button--primary"
              onClick={() => setCurrentStep(0)}
            >
              ← Volver
            </button>

            {selectedFormat && (
              <button
                type="button"
                className="button button--primary"
                onClick={() => setCurrentStep(2)}
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className={styles["booking-content"]}>
          <div className={styles["booking-heading"]}>
            <p>03 / FUNCIÓN</p>
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
                  setSelectedSeats([]);
                }}
              >
                <span>{day.date.split(" ")[0]}</span>
                <strong>{day.date.split(" ")[1]}</strong>
                <small>{day.fullDate}</small>
              </button>
            ))}
          </div>

          {selectedDate && (
            <div className={styles["showtimes"]}>
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
                      setSelectedSeats([]);
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
              onClick={() => setCurrentStep(1)}
            >
              ← Volver
            </button>

            {selectedTime && (
              <button
                type="button"
                className="button button--primary"
                onClick={() => setCurrentStep(3)}
              >
                Continuar →
              </button>
            )}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className={styles["booking-content"]}>
          <div className={styles["booking-heading"]}>
            <p>04 / BUTACAS</p>
            <h3>¿Dónde querés sentarte?</h3>
            <span>
              Seleccioná las butacas que quieras ocupar para continuar.
            </span>
          </div>

          <div className={styles["cinema-room"]}>
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
              onClick={() => setCurrentStep(2)}
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
    </section>
  );
}