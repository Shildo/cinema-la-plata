"use client";

import { useState } from "react";
import { getOnlineTicketPrice } from "../data/pricing";
import styles from "./page.module.css";

const mockTickets = [
  {
    codigo: "CINE-2026-001",
    dni: "40123456",
    pelicula: "Spider-Man",
    poster: "/peliculas/aficheSpiderman.jpeg",
    fecha: "22/09/26",
    horario: "20:30",
    dia: "MAR",
    sala: "1",
    cine: "Cinema Rocha",
    asiento: "F12",
    formato: "ATMOS",
    logo: "/sedes/citylogoblack.png"
  },
  {
    codigo: "CINE-2026-002",
    dni: "38987654",
    pelicula: "Minions",
    poster: "/peliculas/aficheMinions.jpeg",
    fecha: "04/09/26",
    horario: "17:00",
    dia: "VIE",
    sala: "2",
    cine: "Cinema City",
    asiento: "M10",
    formato: "4D",
    logo: "/sedes/paradisologoblack.png"
  },
  {
    codigo: "CINE-2026-003",
    dni: "37654321",
    pelicula: "Yo, Narciso",
    poster: "/peliculas/aficheNarciso.jpeg",
    fecha: "03/09/26",
    horario: "18:00",
    dia: "JUE",
    sala: "3",
    cine: "Cinema San Martín",
    asiento: "L6",
    formato: "HD",
    logo: "/sedes/san-martinlogoblack.png"
  },
  {
    codigo: "CINE-2026-004",
    dni: "42156789",
    pelicula: "Agente Secreto",
    poster: "/peliculas/aficheElAgenteSecreto.jpeg",
    fecha: "31/08/26",
    horario: "19:00",
    dia: "LUN",
    sala: "1",
    cine: "Cinema Paradiso",
    asiento: "G8",
    formato: "HD",
    logo: "/sedes/paradisologoblack.png"
  },
  {
    codigo: "CINE-2026-005",
    dni: "42156789",
    pelicula: "Toy Story",
    poster: "/peliculas/aficheToystory5.jpeg",
    fecha: "04/09/26",
    horario: "17:00",
    dia: "VIE",
    sala: "1",
    cine: "Cinema Ocho",
    asiento: "H11",
    formato: "3D",
    logo: "/sedes/ochologoblack.png"
  },
];

type Ticket = (typeof mockTickets)[number];

function getTicketPrice(ticket: Ticket) {
  const { ticketPrice } = getOnlineTicketPrice({
    format: ticket.formato,
    date: { label: ticket.dia },
    time: ticket.horario,
    seats: [ticket.asiento],
  });

  return ticketPrice;
}

const formatPrice = (value: number) => `$${value.toLocaleString("es-AR")}`;

export default function RetirarEntradaPage() {
  const [search, setSearch] = useState("");
  const [ticket, setTicket] = useState<Ticket | null>(null);
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
                    <div><span>Horario</span>{ticket.horario}</div>
                    <div><span>Sala</span>{ticket.sala}</div>
                    <div><span>Formato</span>{ticket.formato}</div>
                    <div><span style={{ fontWeight: 700 }}>Asiento</span><strong style={{ fontWeight: 700 }}>{ticket.asiento}</strong></div>
                  </div>
                  <div className={styles.receiptPrice}>
                    <strong>{formatPrice(getTicketPrice(ticket))}</strong>
                  </div>
                  <footer className={styles.receiptFooter}>
                    <p>Talón para espectador</p>
                    <span>INCAA - Lima 319</span>
                  </footer>
                </div> 
                

                <aside className={styles.receiptStub}>
                  <header className={styles.receiptHeader}>
                    <img className={styles.ticketLogo} src={ticket.logo} alt={ticket.logo} />
                  </header>
                  <h2>{ticket.pelicula}</h2>
                  <div className={styles.receiptDetails}>
                    <div><span>Fecha</span>{ticket.fecha}</div>
                    <div><span>Horario</span>{ticket.horario}</div>
                    <div><span>Sala</span>{ticket.sala}</div>
                    <div><span>Formato</span>{ticket.formato}</div>
                    <div><span>Asiento</span>{ticket.asiento}</div>
                  </div>
                  <div className={styles.stubReceiptPrice}>
                    <strong>{formatPrice(getTicketPrice(ticket))}</strong>
                    <div><span>Exhib</span>600159</div>
                    <div><span>CUIT</span>30-54223624-4</div>
                    <div><span>Cod Sala</span>010471</div>
                  </div>
                  <footer className={styles.receiptFooter}>
                    <p>Talón para Empleado</p>
                    <span>INCAA - Lima 319</span>
                  </footer>
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