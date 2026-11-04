"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  MOCK_SESSION_EVENT,
  readMockProfile,
  readMockSession,
  saveMockSession,
} from "@/lib/mock-session";
import styles from "../registrarse/page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [signedInName, setSignedInName] = useState<string | null>(null);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const syncSession = () => setSignedInName(readMockSession()?.firstName ?? null);
    syncSession();
    window.addEventListener(MOCK_SESSION_EVENT, syncSession);
    window.addEventListener("storage", syncSession);
    return () => {
      window.removeEventListener(MOCK_SESSION_EVENT, syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const emailName = email.split("@")[0]?.split(/[._-]/)[0] ?? "";
    const firstName = emailName
      ? emailName.charAt(0).toLocaleUpperCase("es") + emailName.slice(1)
      : "Cliente";

    if (!email || !formData.get("password")) {
      setFormError("Completá tu email y contraseña para continuar.");
      return;
    }

    const profile = readMockProfile(email);
    const session = saveMockSession(profile ?? { firstName, email });
    setSignedInName(session.firstName);

    const nextPath = new URLSearchParams(window.location.search).get("next");
    if (nextPath === "/comprar-entrada") {
      router.push(nextPath);
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>TU CUENTA</p>
            <h1>Qué bueno verte <em>de nuevo</em></h1>
            <p className={styles.lead}>
              Ingresá a tu cuenta y seguí disfrutando de todo lo que Cinema La Plata tiene para vos
            </p>
          </div>

          <section className={styles.card} aria-labelledby="login-title">
            {signedInName ? (
              <div className={styles.result} role="status">
                <p className={styles.cardEyebrow}>CINEMA LA PLATA</p>
                <h2 id="login-title">¡Hola, {signedInName}!</h2>
                <p className={styles.resultMessage}>
                  Iniciaste sesión correctamente. ¡Seguí disfrutando de Cinema La Plata!
                </p>
                <Link className={styles.secondaryButton} href="/#cartelera">
                  Ir a la cartelera
                </Link>
              </div>
            ) : (
              <>
                <div className={styles.cardHeader}>
                  <p className={styles.cardEyebrow}>BIENVENIDO DE NUEVO</p>
                  <h2 id="login-title">Iniciá sesión</h2>
                  <p>Ingresá tus datos para acceder a tu cuenta</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.fields}>
                    <div className={`${styles.field} ${styles.fullWidth}`}>
                      <label htmlFor="login-email">Email</label>
                      <input
                        id="login-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="tu@email.com"
                        maxLength={254}
                        required
                      />
                    </div>
                    <div className={`${styles.field} ${styles.fullWidth}`}>
                      <label htmlFor="login-password">Contraseña</label>
                      <input
                        id="login-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Tu contraseña"
                        required
                      />
                    </div>
                  </div>

                  {formError && <p className={styles.error} role="alert">{formError}</p>}

                  <button className={styles.submit} type="submit">
                    Iniciar sesión <span aria-hidden="true">→</span>
                  </button>
                </form>

                <p className={styles.accountPrompt}>
                  ¿Todavía no tenés una cuenta? <Link href="/registrarse">Registrate</Link>
                </p>
              </>
            )}
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
