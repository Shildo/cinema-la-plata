const navItems = [
  { label: "Cartelera", href: "#peliculas" },
  { label: "Complejos", href: "#complejos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Novedades", href: "#novedades" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__logo">
        <img src="/logo.png" alt="Cinema La Plata" />
      </a>

      <nav className="navbar__links">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
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
