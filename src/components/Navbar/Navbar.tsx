"use client";

import { CircleUserRound, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { clearMockSession, MOCK_SESSION_EVENT, readMockSession } from "@/lib/mock-session";
import type { MockSession } from "@/lib/mock-session";

const navItems = [
  { label: "Cartelera", href: "/#peliculas" },
  { label: "Complejos", href: "/#complejos" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Novedades", href: "/#novedades" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const router = useRouter();
  const [accountOpen, setAccountOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mockSession, setMockSession] = useState<MockSession | null>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncMockSession = () => setMockSession(readMockSession());
    syncMockSession();
    window.addEventListener("storage", syncMockSession);
    window.addEventListener(MOCK_SESSION_EVENT, syncMockSession);

    return () => {
      window.removeEventListener("storage", syncMockSession);
      window.removeEventListener(MOCK_SESSION_EVENT, syncMockSession);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  const handleLogout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    clearMockSession();
    setAccountOpen(false);
    setMenuOpen(false);
    router.push("/");
  };

  return (
    <>
      <header className="navbar fixed">
        <a href="/" className="navbar__logo">
          <img src="/logo.png" alt="Cinema La Plata" />
        </a>

        <nav className="navbar__links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}

          <div className="navbar__account-wrapper" ref={accountRef}>
            <button
              type="button"
              className="navbar__account"
              onClick={() => setAccountOpen(!accountOpen)}
              aria-expanded={accountOpen}
            >
              {mockSession ? `Hola, ${mockSession.firstName}` : "Mi cuenta"}
              <CircleUserRound />
            </button>

            {accountOpen && (
              <div className="navbar__account-menu">
                {mockSession ? (
                  <>
                    <a href="#cerrar-sesion" onClick={handleLogout}>Cerrar sesión</a>
                  </>
                ) : (
                  <>
                    <a href="/ingresar">Ingresar</a>
                    <a href="/registrarse">Registrarse</a>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>

        <button
          type="button"
          className="navbar__menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {menuOpen && (
          <nav className="navbar__mobile-menu">
            <div className="navbar__mobile-links">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="navbar__mobile-account">
              {mockSession ? (
                <>
                  <span className="navbar__mobile-greeting">Hola, {mockSession.firstName}</span>
                  <a href="#cerrar-sesion" onClick={handleLogout}>Cerrar sesión</a>
                </>
              ) : (
                <>
                  <a href="/ingresar" onClick={handleNavClick}>Ingresar</a>
                  <a href="/registrarse" onClick={handleNavClick}>Registrarse</a>
                </>
              )}
            </div>
          </nav>
        )}
      </header>

    </>
  );
}



