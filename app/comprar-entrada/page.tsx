"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

type BookingData = {

  movie: {
	slug: string;
	title: string;
	image: string;
  } | null;

  site: {
    number: string;
    name: string;
    location: string;
  } | null;

  format: string | null;

  date: {
    label: string;
    fullDate: string;
  } | null;

  time: string | null;

  seats: string[];
};

export default function PurchasePage() {
  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    const storedBooking = sessionStorage.getItem("movieBooking");

    if (storedBooking) {
      setBooking(JSON.parse(storedBooking));
    }
  }, []);

  if (!booking) {
    return (
      <main className={styles["purchase-page"]}>
        <div className={styles["purchase-empty"]}>
          <h1>No hay una reserva seleccionada.</h1>

          <p>
            Volvé a la cartelera para seleccionar una película y
            comenzar tu compra.
          </p>

          <a
            href="/"
            className="button button--primary"
          >
            Volver al inicio →
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className={styles["purchase-page"]}>
      <section className={styles["purchase-header"]}>
        <p className={styles["eyebrow"]}>
          COMPRA DE ENTRADAS
        </p>

        <h1>Confirmá tu función.</h1>

        <p>
          Revisá los datos de tu selección y completá tus datos
          para continuar.
        </p>
      </section>

      <section className={styles["purchase-layout"]}>
        <div className={styles["purchase-summary"]}>
          <div className={styles["summary-header"]}>
            <p>RESUMEN</p>

            <span>01</span>
          </div>

          	<div className={styles["summary-movie"]}>
            	<div className={styles["summary-poster"]}>
					{booking.movie?.image && (
						<img
							src={booking.movie.image}
							alt={booking.movie.title}
						/>
					)}
            	</div>
				<div>
				<small>PELÍCULA</small>
				<h2>{booking.movie?.title}</h2>
				</div>
          	</div>

          <div className={styles["summary-details"]}>
            <div>
              <span>SEDE</span>

              <strong>
                {booking.site?.name}
              </strong>

              <small>
                {booking.site?.location}
              </small>
            </div>

            <div>
              <span>FORMATO</span>

              <strong>
                {booking.format}
              </strong>
            </div>

            <div>
              <span>FECHA</span>

              <strong>
                {booking.date?.fullDate}
              </strong>
            </div>

            <div>
              <span>HORARIO</span>

              <strong>
                {booking.time}
              </strong>
            </div>

            <div>
              <span>BUTACAS</span>

              <strong>
                {booking.seats.join(" · ")}
              </strong>
            </div>
          </div>

          <div className={styles["summary-total"]}>
            <span>
              {booking.seats.length}{" "}
              {booking.seats.length === 1
                ? "ENTRADA"
                : "ENTRADAS"}
            </span>

            <strong>
              A confirmar
            </strong>
          </div>
        </div>

        <div className={styles["purchase-form-wrapper"]}>
          <div className={styles["form-header"]}>
            <p>02 / DATOS</p>

            <h2>Completá tus datos.</h2>

            <span>
              Los necesitamos para finalizar la reserva.
            </span>
          </div>

          <form className={styles["purchase-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">
                Nombre completo
              </label>

              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="phone">
                Teléfono
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="11 1234 5678"
              />
            </div>

            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="dni">
                  DNI
                </label>

                <input
                  id="dni"
                  type="text"
                  placeholder="Tu DNI"
                />
              </div>

              <div className={styles["form-group"]}>
                <label htmlFor="quantity">
                  Entradas
                </label>

                <input
                  id="quantity"
                  type="number"
                  value={booking.seats.length}
                  readOnly
                />
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="payment">
                Medio de pago
              </label>

              <select id="payment" defaultValue="">
                <option value="" disabled>
                  Seleccioná un medio de pago
                </option>

                <option value="card">
                  Tarjeta de crédito / débito
                </option>

                <option value="mercadopago">
                  Mercado Pago
                </option>
              </select>
            </div>

            <button
              type="button"
              className="button button--primary"
            >
              Confirmar compra →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}