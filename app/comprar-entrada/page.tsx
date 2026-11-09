"use client";

import { useEffect, useState } from "react";
import {
  getAvailableDiscounts,
  getDefaultDiscountId,
  getOnlineTicketPrice,
  getOrderTotal,
} from "../data/pricing";
import { readMockSession } from "@/lib/mock-session";
import type { MockSession } from "@/lib/mock-session";
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
  language: string | null;

  date: {
    label: string;
    fullDate: string;
  } | null;

  time: string | null;

  seats: string[];
};

export default function PurchasePage() {
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [customer, setCustomer] = useState<MockSession | null>(null);
  const [selectedDiscountId, setSelectedDiscountId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    setCustomer(readMockSession());

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

  const availableDiscounts = getAvailableDiscounts(booking);
  const { ticketPrice, serviceFee } = getOnlineTicketPrice(booking);
  const defaultDiscountId = getDefaultDiscountId(availableDiscounts);
  const activeDiscountId = selectedDiscountId === undefined
    ? defaultDiscountId
    : selectedDiscountId;
  const activeDiscount = availableDiscounts.find(({ id }) => id === activeDiscountId) ?? null;
  const regularTotal = booking.seats.length * (ticketPrice + serviceFee);
  const totalPrice = getOrderTotal(booking, availableDiscounts, activeDiscountId);

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
        {/* =========================================
            TICKET
            ========================================= */}

        <div className={styles["purchase-summary"]}>
          <div className={styles["ticket-content"]}>
            <div className={styles["ticket-header"]}>
              <span>CINEMA LA PLATA</span>
              <span>ENTRADA</span>
            </div>

            <div className={styles["ticket-movie"]}>
              <div className={styles["ticket-poster"]}>
                {booking.movie?.image && (
                  <img
                    src={booking.movie.image}
                    alt={booking.movie.title}
                  />
                )}
              </div>

              <div className={styles["ticket-movie-info"]}>
                <small>PELÍCULA</small>

                <h2>{booking.movie?.title}</h2>

                <span>
                  {booking.format}
                  {booking.language && ` · ${booking.language === "castellano" ? "Castellano" : "Inglés subtitulado"}`}
                </span>
              </div>
            </div>

            <div className={styles["ticket-details"]}>
              <div>
                <span>SEDE</span>
                <strong>{booking.site?.name}</strong>
                <small>{booking.site?.location}</small>
              </div>

              <div>
                <span>FECHA</span>
                <strong>{booking.date?.fullDate}</strong>
              </div>

              <div>
                <span>HORARIO</span>
                <strong>{booking.time}</strong>
              </div>

              <div>
                <span>BUTACAS</span>
                <strong>{booking.seats.join(" · ")}</strong>
              </div>
            </div>

            <div className={styles["ticket-footer"]}>
              <div className={styles["ticket-quantity"]}>
                <span>
                  {booking.seats.length}{" "}
                  {booking.seats.length === 1
                    ? "ENTRADA"
                    : "ENTRADAS"}
                </span>

                <small>
                  {activeDiscount
                    ? `${activeDiscount.title} aplicado`
                    : `$${ticketPrice.toLocaleString("es-AR")} + $${serviceFee.toLocaleString("es-AR")} de servicio c/u`}
                </small>
              </div>

              <div className={styles["ticket-total"]}>
                <span>TOTAL</span>

                <strong>
                  $
                  {totalPrice.toLocaleString("es-AR")}
                </strong>
                {activeDiscount ? (
                  <>
                    <small className={styles["ticket-original-total"]}>
                      Antes: ${regularTotal.toLocaleString("es-AR")}
                    </small>
                    <small className={styles["ticket-discount-status"]}>
                      DESCUENTO EN USO · {activeDiscount.title}
                    </small>
                  </>
                ) : (
                  <small>Incluye cargo de servicio</small>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            FORMULARIO
            ========================================= */}

        <div className={styles["purchase-form-wrapper"]}>
          <div className={styles["form-header"]}>
            <p>02 / PAGO</p>

            <h2>Un último paso.</h2>

            <span>
              Tu nombre y email ya están cargados desde tu cuenta. Elegí cómo querés pagar.
            </span>
          </div>

          <div className={styles["purchase-discounts"]}>
            <strong>DESCUENTOS DISPONIBLES</strong>
            {availableDiscounts.length > 0 ? (
              <>
                <p className={styles["purchase-discounts-hint"]}>
                  {activeDiscount
                    ? "El descuento más conveniente está seleccionado. Podés cambiarlo o quitarlo."
                    : "Elegí un descuento para aplicarlo al precio final."}
                </p>
                <div className={styles["purchase-discount-options"]}>
                  {availableDiscounts.map((discount) => {
                    const isSelected = activeDiscountId === discount.id;

                    return (
                      <label
                        className={`${styles["purchase-discount"]} ${isSelected ? styles["purchase-discount-active"] : ""}`}
                        key={discount.id}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(event) =>
                            setSelectedDiscountId(event.currentTarget.checked ? discount.id : null)
                          }
                          aria-label={`Usar ${discount.title}`}
                        />
                        <span className={styles["purchase-discount-copy"]}>
                          <b>{discount.title}</b>
                          <span>{discount.description}</span>
                          {isSelected && <small>En uso</small>}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </>
            ) : (
              <p>No entrás en ningún descuento para esta función.</p>
            )}
          </div>

          {customer && (
            <div className={styles["buyer-summary"]}>
              <span>COMPRANDO COMO</span>
              <strong>
                {[customer.firstName, customer.lastName].filter(Boolean).join(" ")}
              </strong>
              {customer.email && <small>{customer.email}</small>}
            </div>
          )}

          <form className={styles["purchase-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="payment">
                Medio de pago
              </label>

              <select
                id="payment"
                defaultValue=""
              >
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
