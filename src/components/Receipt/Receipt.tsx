import { getOnlineTicketPrice } from "../../../app/data/pricing";
import styles from "./Receipt.module.css";

export type ReceiptTicket = {
  pelicula: string;
  logo: string;
  cine: string;
  fecha: string;
  horario: string;
  dia: string;
  sala: string;
  formato: string;
  asiento: string;
};

function getTicketPrice(ticket: ReceiptTicket) {
  const { ticketPrice } = getOnlineTicketPrice({
    format: ticket.formato,
    date: { label: ticket.dia },
    time: ticket.horario,
    seats: [ticket.asiento],
  });

  return ticketPrice;
}

const formatPrice = (value: number) => `$${value.toLocaleString("es-AR")}`;

export default function Receipt({ ticket }: { ticket: ReceiptTicket }) {
  const price = formatPrice(getTicketPrice(ticket));

  return (
    <div className={styles.ticketReceipt}>
      <div className={styles.receiptMain}>
        <header className={styles.receiptHeader}>
          <img className={styles.receiptLogo} src={ticket.logo} alt={ticket.cine} />
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
          <strong>{price}</strong>
        </div>
        <footer className={styles.receiptFooter}>
          <p>Talón para espectador</p>
          <span>INCAA - Lima 319</span>
        </footer>
      </div>

      <aside className={styles.receiptStub}>
        <header className={styles.receiptHeader}>
          <img className={styles.receiptLogo} src={ticket.logo} alt={ticket.cine} />
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
          <strong>{price}</strong>
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
  );
}