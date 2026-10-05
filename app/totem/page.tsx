import "./totem.css";

export default function TotemPage() {
  return (
    <main className="totem">
      <img className="totem__background" src="/logo.png" alt="Cinema La Plata" />

      <div className="totem__overlay" />

      <div className="totem__buttons">
        <a
          href="/retirar-entrada"
          className="totem__button"
        >Retirar entrada</a>
      </div>
    </main>
  );
}