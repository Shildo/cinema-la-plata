"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import styles from "./PromoEmailModal.module.css";

type Props = { onClose: () => void };

export default function PromoEmailModal({ onClose }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    emailRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, website }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "No pudimos enviar la promoción.");
      }

      setSuccess(true);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Intentá nuevamente.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        aria-describedby="promo-description"
      >
        <button
          className={styles.close}
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
        >
          ×
        </button>

        {success ? (
          <div className={styles.result} role="status">
            <span className={styles.eyebrow}>CINEMA LA PLATA</span>
            <h2 id="promo-title">¡Listo!</h2>
            <p id="promo-description">
              Enviamos esta promoción única a <strong>{email}</strong>.
            </p>
            <button className={styles.submit} type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <span className={styles.eyebrow}>CINEMA LA PLATA</span>
            <h2 id="promo-title">Recibí la promoción</h2>
            <p id="promo-description">
              Dejanos tu correo y te enviaremos esta promoción de cumpleaños una sola vez.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="promo-email">Correo electrónico donde enviarla</label>
              <input
                ref={emailRef}
                id="promo-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nombre@correo.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="promo-website">Dejá este campo vacío</label>
                <input
                  id="promo-website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <label className={styles.consent}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  required
                />
                <span>
                  Autorizo a Cinema La Plata a enviarme esta promoción por correo una sola vez.
                </span>
              </label>

              {message && (
                <p className={styles.error} role="alert">
                  {message}
                </p>
              )}

              <button
                className={styles.submit}
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Enviando..." : "Confirmar y enviar promoción"}
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}





