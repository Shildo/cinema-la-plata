"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  MOCK_SESSION_EVENT,
  readMockSession,
  saveMockSession,
} from "@/lib/mock-session";
import styles from "./page.module.css";

type ResultState = "success" | "warning" | null;

export default function RegisterPage() {
  const [registeredName, setRegisteredName] = useState<string | null>(null);
  const [promoOptIn, setPromoOptIn] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [resultState, setResultState] = useState<ResultState>(null);
  const [resultMessage, setResultMessage] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const syncSession = () => setRegisteredName(readMockSession()?.firstName ?? null);
    syncSession();
    window.addEventListener(MOCK_SESSION_EVENT, syncSession);
    window.addEventListener("storage", syncSession);
    return () => {
      window.removeEventListener(MOCK_SESSION_EVENT, syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setResultMessage("");
    setFormError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!firstName) {
      setFormError("Ingresá tu nombre para continuar.");
      setSubmitting(false);
      return;
    }

    try {
      saveMockSession(firstName);
      setRegisteredName(firstName);

      if (!promoOptIn) {
        setResultState("success");
        setResultMessage("Tu cuenta se creó correctamente");
        return;
      }

      setResultMessage("Tu cuenta está lista. Estamos enviando el mail promocional…");

      const response = await fetch("/api/send-promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setResultState("warning");
        setResultMessage(
          `Tu cuenta se creó correctamente, pero no pudimos enviar el mail. ${result.error ?? "Intentá nuevamente más tarde."}`,
        );
        return;
      }

      setResultState("success");
      setResultMessage(`Tu cuenta se creó correctamente y enviamos el mail a ${email}`);
    } catch {
      const activeSession = readMockSession();
      setRegisteredName(activeSession?.firstName ?? null);
      if (activeSession) {
        setResultState("warning");
        setResultMessage("Tu cuenta se creó correctamente, pero no pudimos confirmar el envío del mail. Podés cerrar la sesión e intentar nuevamente.");
      } else {
        setFormError("No pudimos crear tu cuenta. Intentá nuevamente.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  const localDate = new Date();
  const today = `${localDate.getFullYear()}-${String(localDate.getMonth() + 1).padStart(2, "0")}-${String(localDate.getDate()).padStart(2, "0")}`;

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.ambient} aria-hidden="true" />
        <section className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>TU CUENTA</p>
            <h1>Tu próxima función empieza <em>acá</em></h1>
            <p className={styles.lead}>
              Creá tu cuenta de Cinema La Plata y preparate para disfrutar cada estreno
            </p>
          </div>

          <section className={styles.card} aria-labelledby="register-title">
            {registeredName ? (
              <div className={styles.result} role="status">
                <p className={styles.cardEyebrow}>CINEMA LA PLATA</p>
                <h2 id="register-title">¡Hola, {registeredName}!</h2>
                <p className={styles.resultMessage}>{resultMessage || "Tu sesión está activa. ¡Seguí disfrutando de Cinema La Plata!"}</p>
                {resultState === "warning" && <p className={styles.warning}>Podés cerrar la sesión y volver a intentar el registro</p>}
                <Link className={styles.secondaryButton} href="/#cartelera">
                  Ir a la cartelera
                </Link>
              </div>
            ) : (
              <>
                <div className={styles.cardHeader}>
                  <p className={styles.cardEyebrow}>REGISTRO DE CLIENTE</p>
                  <h2 id="register-title">Creá tu cuenta</h2>
                  <p>Completá tus datos para continuar</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.fields}>
                    <div className={styles.field}>
                      <label htmlFor="firstName">Nombre</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Tu nombre"
                        minLength={2}
                        maxLength={60}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="lastName">Apellido</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Tu apellido"
                        minLength={2}
                        maxLength={60}
                        required
                      />
                    </div>
                    <div className={`${styles.field} ${styles.fullWidth}`}>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="tu@email.com"
                        maxLength={254}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="dni">DNI</label>
                      <input
                        id="dni"
                        name="dni"
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        placeholder="Sin puntos"
                        pattern="[0-9]{7,8}"
                        title="Ingresá un DNI de 7 u 8 números"
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone">Teléfono</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="Ej. 221 555 1234"
                        minLength={8}
                        maxLength={24}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="birthDate">Fecha de nacimiento</label>
                      <input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        autoComplete="bday"
                        max={today}
                        onClick={(event) => {
                          try {
                            event.currentTarget.showPicker();
                          } catch {
                            event.currentTarget.focus();
                          }
                        }}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="password">Contraseña</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Mínimo 8 caracteres"
                        minLength={8}
                        required
                      />
                    </div>
                  </div>

                  <label className={styles.consent}>
                    <input
                      type="checkbox"
                      name="promoConsent"
                      checked={promoOptIn}
                      onChange={(event) => setPromoOptIn(event.target.checked)}
                    />
                    <span>Quiero recibir el mail promocional de Cinema La Plata.</span>
                  </label>

                  {formError && <p className={styles.error} role="alert">{formError}</p>}

                  <button className={styles.submit} type="submit" disabled={submitting}>
                    {submitting ? "Creando cuenta…" : "Registrarme"}
                    <span aria-hidden="true">→</span>
                  </button>

                </form>
              </>
            )}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
