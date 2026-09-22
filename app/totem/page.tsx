import "./totem.css";

export default function TotemPage() {
  return (
    <main className="totem">
      <video
        className="totem__background"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/logo-animation.mp4" type="video/mp4" />
      </video>

      <div className="totem__overlay" />

      <div className="totem__buttons">
        <a
          href="/#peliculas"
          className="totem__button"
        >Comprar entrada</a>

        <a
          href="/retirar-entrada"
          className="totem__button"
        >Retirar entrada</a>
      </div>
    </main>
  );
}