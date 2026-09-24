"use client";

import { useState } from "react";
import styles from "./page.module.css";

const mockTickets = [
  {
    codigo: "CINE-2026-001",
    dni: "40123456",
    pelicula: "Spider-Man",
    poster: "/peliculas/aficheSpiderman.jpeg",
    fecha: "22 de septiembre",
    horario: "20:30",
    sala: "Sala 3",
    asiento: "F12",
    cantidad: 1,
  },
  {
    codigo: "CINE-2026-002",
    dni: "38987654",
    pelicula: "Minions",
    poster: "/peliculas/aficheMinions.jpeg",
    fecha: "22 de septiembre",
    horario: "18:00",
    sala: "Sala 1",
    asiento: "C08",
    cantidad: 2,
  },
  {
    codigo: "CINE-2026-003",
    dni: "42156789",
    pelicula: "Toy Story 5",
    poster: "/peliculas/aficheToystory5.jpeg",
    fecha: "23 de septiembre",
    horario: "16:30",
    sala: "Sala 2",
    asiento: "B14",
    cantidad: 3,
  },
  {
    codigo: "CINE-2026-004",
    dni: "37654321",
    pelicula: "Narciso",
    poster: "/peliculas/aficheNarciso.jpeg",
    fecha: "23 de septiembre",
    horario: "21:00",
    sala: "Sala 4",
    asiento: "G07",
    cantidad: 1,
  },
];

export default function RetirarEntradaPage() {
  const [search, setSearch] = useState("");
  const [ticket, setTicket] = useState<
    (typeof mockTickets)[number] | null
  >(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
  if (!search.trim()) {
    return;
  }

  const number = parseInt(search, 10);
  const ticketIndex = number % mockTickets.length;

  setTicket(mockTickets[ticketIndex]);
  setSearched(true);
};

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className={styles.retirar}>
      <div className={styles.retirarHeader}>
        <a href="/totem" className={styles.retirarBack}>
          ← Volver
        </a>

        <h1>Retirá tu entrada</h1>

        <p>
          Ingresá el código de compra o tu DNI para encontrar tu entrada.
        </p>
      </div>

      <div className={styles.retirarContent}>
        <section className={styles.retirarSearch}>
          <label htmlFor="ticket-search">
            Código de compra o DNI
          </label>

          <input
            id="ticket-search"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={search}
            onChange={(event) => {
              const value = event.target.value.replace(/\D/g, "");
              setSearch(value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
              handleSearch();
              }
            }}
            placeholder="Ingresá tu DNI"
          />

          <button
            type="button"
            onClick={handleSearch}
          >
            Buscar entrada
          </button>

          {searched && !ticket && (
            <p className={styles.retirarError}>
              No encontramos una entrada con esos datos.
            </p>
          )}

        </section>

        <section className={styles.retirarPreview}>
          {ticket ? (
            <>
              <div className={styles.ticket}>
                <div className={styles.ticketPoster}>
                  <img
                    src={ticket.poster}
                    alt={`Afiche de ${ticket.pelicula}`}
                  />
                </div>

                <div className={styles.ticketInfo}>
                  <span className={styles.ticketEyebrow}>
                    CINEMA LA PLATA
                  </span>

                  <h2>{ticket.pelicula}</h2>

                  <div className={styles.ticketDetails}>
                    <div>
                      <span>Fecha</span>
                      <strong>{ticket.fecha}</strong>
                    </div>

                    <div>
                      <span>Horario</span>
                      <strong>{ticket.horario}</strong>
                    </div>

                    <div>
                      <span>Sala</span>
                      <strong>{ticket.sala}</strong>
                    </div>

                    <div>
                      <span>Asiento</span>
                      <strong>{ticket.asiento}</strong>
                    </div>
                  </div>

                  <div className={styles.ticketCode}>
                    <span>Código de compra</span>
                    <strong>{ticket.codigo}</strong>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={styles.retirarPrint}
                onClick={handlePrint}
              >
                Imprimir entrada
              </button>
            </>
          ) : (
            <div className={styles.retirarEmpty}>
              <h2>
                Tu entrada aparecerá acá
              </h2>

              <p>
                Buscá tu compra para visualizarla antes de imprimirla.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}