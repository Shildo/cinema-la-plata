"use client";

import { CircleUserRound, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Cartelera", href: "/#peliculas" },
  { label: "Complejos", href: "/#complejos" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Novedades", href: "/#novedades" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  
  const handleNavClick = () => {
    setMenuOpen(false);
  };
  
  return (
    <header className="navbar fixed">
      <a href="/" className="navbar__logo">
        <img src="/logo.png" alt="Cinema La Plata" />
      </a>

      {/* Desktop */}
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
            Mi cuenta
            <CircleUserRound />
          </button>

          {accountOpen && (
            <div className="navbar__account-menu">
              <a href="/ingresar">Ingresar</a>
              <a href="/registrarse">Registrarse</a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile */}
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
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="navbar__mobile-account">
            <a href="/ingresar" onClick={handleNavClick}>
              Ingresar
            </a>

            <a href="/registrarse" onClick={handleNavClick}>
              Registrarse
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}