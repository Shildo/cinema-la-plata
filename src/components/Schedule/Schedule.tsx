const dates = [
  { day: "HOY", date: "29 AGO" },
  { day: "DOM", date: "30 AGO" },
  { day: "LUN", date: "31 AGO" },
  { day: "MAR", date: "01 SEP" },
  { day: "MIÉ", date: "02 SEP" },
];

const movies = [
  {
    title: "Spider-Man",
    format: "2D · CASTELLANO",
    times: ["14:30", "17:00", "19:30", "22:00"],
  },
  {
    title: "Película destacada",
    format: "2D · SUBTITULADA",
    times: ["15:15", "18:00", "20:45", "23:15"],
  },
];

export default function Schedule() {
  return (
    <section className="schedule-section" id="cartelera">
      <div className="schedule-intro">
        <p className="hero__eyebrow">
          <span />
          FUNCIONES
        </p>

        <h2>
          Elegí qué
          <br />
          querés ver.
        </h2>

        <p>
          Consultá las películas, formatos y horarios disponibles en nuestros
          complejos de La Plata.
        </p>
      </div>

      <div className="date-tabs" aria-label="Seleccionar fecha">
        {dates.map((date, index) => (
          <button
            key={date.date}
            type="button"
            className={index === 0 ? "active" : ""}
          >
            <span>{date.day}</span>
            <small>{date.date}</small>
          </button>
        ))}
      </div>

      <div className="showtimes">
        {movies.map((movie) => (
          <article className="showtime" key={movie.title}>
            <div className="showtime-title">
              <span>{movie.title}</span>
              <small>{movie.format}</small>
            </div>

            <div className="showtime-options">
              {movie.times.map((time) => (
                <button key={time} type="button">
                  {time}
                  <span>Disponible</span>
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
