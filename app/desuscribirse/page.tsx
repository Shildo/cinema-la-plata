"use client";

import Link from "next/link";
import { Check, MailQuestion } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function UnsubscribePage() {
  const [unsubscribed, setUnsubscribed] = useState(false);

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.ambient} aria-hidden="true" />
        <section className={styles.card} aria-labelledby="unsubscribe-title">
          <div className={styles.checkIcon} aria-hidden="true">
            {unsubscribed ? (
              <Check size={30} strokeWidth={2.5} />
            ) : (
              <MailQuestion size={30} strokeWidth={1.8} />
            )}
          </div>
          <p className={styles.eyebrow}>CINEMA LA PLATA</p>
          {unsubscribed ? (
            <>
              <h1 id="unsubscribe-title">¡Listo! Ya no recibirás nuestros mails promocionales.</h1>
              <p className={styles.description}>
                Tu solicitud de baja fue confirmada. Gracias por habernos acompañado.
              </p>
              <Link className={styles.homeButton} href="/">
                Volver a Cinema La Plata <span aria-hidden="true">→</span>
              </Link>
            </>
          ) : (
            <>
              <h1 id="unsubscribe-title">¿Querés dejar de recibir nuestros mails promocionales?</h1>
              <p className={styles.description}>
                Si confirmás, dejarás de recibir novedades y promociones de Cinema La Plata.
              </p>
              <div className={styles.actions}>
                <button
                  className={styles.homeButton}
                  type="button"
                  onClick={() => setUnsubscribed(true)}
                >
                  Confirmar baja <span aria-hidden="true">→</span>
                </button>
                <Link className={styles.cancelButton} href="/">
                  Conservar suscripción
                </Link>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
