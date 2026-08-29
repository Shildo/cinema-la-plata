const navItems = [
  "Cartelera",
  "Complejos",
  "Experiencia",
  "Novedades",
  "Nosotros",
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
         <img src="/logo.png" alt="Cinema La Plata" />
      </div>

      <nav className="navbar__links">
        {navItems.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}

        <a href="#" className="navbar__account">
          Mi cuenta
          <span>→</span>
        </a>
      </nav>

      <button className="navbar__menu" aria-label="Abrir menú">
        ☰
      </button>
    </header>
  );
}