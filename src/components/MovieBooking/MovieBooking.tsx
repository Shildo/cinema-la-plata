"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./MovieBooking.module.css";

type Site = {
  number: string;
  name: string;
  location: string;
  imgURL: string;
  rooms: string;
  locationURL: string;
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

const seatRows = [
  { row: "A", seats: 8 },
  { row: "B", seats: 8 },
  { row: "C", seats: 10 },
  { row: "D", seats: 10 },
  { row: "E", seats: 10 },
  { row: "F", seats: 12 },
  { row: "G", seats: 12 },
  { row: "H", seats: 12 },
];

export default function MovieBooking({ sites, movie }: MovieBookingProps) {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  const toggleSeat = (seat: string) => {
  setSelectedSeats((current) =>
    current.includes(seat)
      ? current.filter((selected) => selected !== seat)
      : [...current, seat]
  );
};

  const handleSiteSelect = (siteNumber: string) => {
    setSelectedSite(siteNumber);
  };

  const handleContinueToPurchase = () => {
    const selectedSiteData = sites.find(
      (site) => site.number === selectedSite
    );

    const selectedDay = showtimes.find(
      (day) => day.date === selectedDate
    );

    const bookingData = {
      movie: movie
        ? {
            slug: movie.slug,
            title: movie.title,
            image: movie.image,
          }
        : null,

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
    };

    sessionStorage.setItem(
      "movieBooking",
      JSON.stringify(bookingData)
    );

    router.push("/comprar-entrada");
  };

  const canSelectFormat = selectedSite !== null;
  const canSelectShowtime =
    selectedSite !== null && selectedFormat !== null;
  const canSelectSeats =
    selectedSite !== null &&
    selectedFormat !== null &&
    selectedDate !== null &&
    selectedTime !== null;

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

            <span>
              Seleccioná uno de nuestros complejos para continuar.
            </span>
          </div>

          <div className={styles["site-grid"]}>
            {sites.map((site) => (
              <button
                type="button"
                key={site.number}
                className={`${styles["site-card"]} ${
                  selectedSite === site.number
                    ? styles.selected
                    : ""
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
            {["HD", "3D", "4D", "ATMOS"].map((format, index) => {
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
                    if (isAvailable) {
                      setSelectedFormat(format);
                    }
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

      <span>
        Elegí el día y horario que mejor te quede.
      </span>
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
          <strong>
            {showtimes.find((day) => day.date === selectedDate)?.fullDate}
          </strong>
        </div>

        <div className={styles["showtime-grid"]}>
          {showtimes
            .find((day) => day.date === selectedDate)
            ?.times.map((time) => (
              <button
                type="button"
                key={time}
                className={`${styles["showtime"]} ${
                  selectedTime === time ? styles.selected : ""
                }`}
                onClick={() => setSelectedTime(time)}
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
      <div className={styles["screen"]}>
        PANTALLA
      </div>

      <div className={styles["seat-map"]}>
        {seatRows.map((row) => (
          <div className={styles["seat-row"]} key={row.row}>
            <span className={styles["row-label"]}>
              {row.row}
            </span>

            <div className={styles["seats"]}>
              {Array.from({ length: row.seats }, (_, index) => {
                const seatNumber = index + 1;
                const seatId = `${row.row}${seatNumber}`;

                return (
                  <button
                    type="button"
                    key={seatId}
                    className={`${styles["seat"]} ${
                      selectedSeats.includes(seatId)
                        ? styles.selected
                        : ""
                    }`}
                    onClick={() => toggleSeat(seatId)}
                    aria-label={`Butaca ${seatId}`}
                    aria-pressed={selectedSeats.includes(seatId)}
                  >
                    {seatNumber}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className={styles["seat-legend"]}>
        <div>
          <span className={styles["seat-legend__available"]} />
          <small>Disponible</small>
        </div>

        <div>
          <span className={styles["seat-legend__selected"]} />
          <small>Seleccionada</small>
        </div>
      </div>
    </div>

    {selectedSeats.length > 0 && (
      <div className={styles["selected-seats"]}>
        <span>
          BUTACAS SELECCIONADAS
        </span>

        <strong>
          {selectedSeats.join(" · ")}
        </strong>
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