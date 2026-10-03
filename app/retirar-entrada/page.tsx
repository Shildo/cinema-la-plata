"use client";

import { useState } from "react";
import styles from "./page.module.css";

const mockTickets = [
  {
    codigo: "CINE-2026-001",
    dni: "40123456",
    pelicula: "Spider-Man",
    poster: "/peliculas/aficheSpiderman.jpeg",
    fecha: "22/09/2026",
    horario: "20:30",
    sala: "Sala 3",
    cine: "Cinema City",
    asiento: "F12",
    formato: "ATMOS",
    logo: "/sedes/citylogoblack.png"
  },
  {
    codigo: "CINE-2026-002",
    dni: "38987654",
    pelicula: "Minions",
    poster: "/peliculas/aficheMinions.jpeg",
    fecha: "22/09/2026",
    horario: "18:00",
    sala: "Sala 1",
    cine: "Cinema Paradiso",
    asiento: "C08",
    formato: "3D",
    logo: "/sedes/paradisologoblack.png"
  },
  {
    codigo: "CINE-2026-003",
    dni: "42156789",
    pelicula: "Toy Story 5",
    poster: "/peliculas/aficheToystory5.jpeg",
    fecha: "23/09/2026",
    horario: "16:30",
    sala: "Sala 2",
    cine: "Cinema Ocho",
    asiento: "B14",
    cantidad: 3,
    formato: "HD",
    logo: "/sedes/ochologoblack.png"
  },
  {
    codigo: "CINE-2026-004",
    dni: "37654321",
    pelicula: "Narciso",
    poster: "/peliculas/aficheNarciso.jpeg",
    fecha: "23/09/2026",
    horario: "21:00",
    sala: "Sala 4",
    cine: "Cinema San Martín",
    asiento: "G07",
    formato: "HD",
    logo: "/sedes/san-martinlogoblack.png"
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


                <div className={styles.ticketInfo}>
                  <img className={styles.ticketLogo} src={ticket.logo} alt={ticket.logo} />

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

                    <div>
                      <span>Formato</span>
                      <strong>{ticket.formato}</strong>
                    </div>
                  </div>

                </div>
                <div className={styles.ticketPoster}>
                  <img
                    src={ticket.poster}
                    alt={`Afiche de ${ticket.pelicula}`}
                  />
                </div>
              </div>

              <div className={styles.ticketReceipt}>
                <div className={styles.receiptMain}>
                  <header className={styles.receiptHeader}>
                    <img className={styles.ticketLogo} src={ticket.logo} alt={ticket.logo} />
                  </header>
                  <h2>{ticket.pelicula}</h2>
                  <div className={styles.receiptDetails}>
                    <div><span>Fecha</span>{ticket.fecha}</div>
                    <div><span>Hora</span>{ticket.horario}</div>
                    <div><span>Sala</span>{ticket.sala}</div>
                    <div><span>Formato</span>{ticket.formato}</div>
                    <div><span style={{ fontWeight: 700 }}>Asiento</span><strong style={{ fontWeight: 700 }}>{ticket.asiento}</strong></div>
                  </div>
                  <div style={{ textAlign: "center", margin: "1rem" }}>
                    <strong>$8.000</strong>
                  </div>
                  <footer className={styles.receiptFooter}>Talón para espectador</footer>
                </div>
                

                <aside className={styles.receiptStub}>
                  <strong className={styles.receiptStubTitle}>CONTROL</strong>
                  <strong className={styles.receiptStubMovie}>{ticket.pelicula}</strong>
                  <span>{ticket.cine}</span>
                  <div>
                    <span>FUNCIÓN</span>
                    <strong>{ticket.fecha}</strong>
                    <strong>{ticket.horario}</strong>
                  </div>
                  <div>
                    <span>SALA / ASIENTO</span>
                    <strong className={styles.receiptStubSeat}>{ticket.sala} · {ticket.asiento}</strong>
                  </div>
                  <strong className={styles.receiptStubFormat}>{ticket.formato}</strong>
                  <svg className={styles.receiptBarcode} viewBox="0 0 120 40" role="img" aria-label={`Código de control ${ticket.codigo}`} preserveAspectRatio="none">
                    {Array.from(ticket.codigo).flatMap((character, characterIndex) => character.charCodeAt(0).toString(2).padStart(7, "0").split("").map((bit, bitIndex) => bit === "1" ? <rect key={`${characterIndex}-${bitIndex}`} x={characterIndex * 8 + bitIndex} y="0" width="1" height="40" fill="black" /> : null))}
                  </svg>
                  <small className={styles.receiptBarcodeCode}>{ticket.codigo}</small>
                  <footer className={styles.receiptFooter}>Talón para empleado</footer>
                </aside>
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