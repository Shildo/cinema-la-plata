import Link from "next/link";
import { ArrowRight, CupSoda, Popcorn, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const candyBarMoments = [
  {
    id: "pochoclos",
    title: "El clásico de siempre",
    description:
      "Pochoclos para acompañar los avances, la primera escena y todo lo que viene después.",
    icon: Popcorn,
  },
  {
    id: "bebidas",
    title: "Algo fresco para la función",
    description:
      "Elegí tu bebida favorita y disfrutá la película con todo el plan resuelto.",
    icon: CupSoda,
  },
  {
    id: "combos",
    title: "Un plan para compartir",
    description:
      "Combiná tus elegidos y sumá ese momento de Candy Bar a tu salida al cine.",
    icon: Sparkles,
  },
];

export default function CandyBarPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>CANDY BAR · CINEMA LA PLATA</p>
            <h1>
              La función
              <br />
              <span>empieza antes.</span>
            </h1>
            <p className={styles.heroDescription}>
              Pochoclos, bebidas y algo rico para acompañar tu película favorita.
              Porque venir al cine también es disfrutar todo lo que pasa antes de entrar a la sala.
            </p>
            <Link className={styles.primaryLink} href="/#cartelera">
              Elegí tu próxima película <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.heroVisual}>
            <img
              className={styles.candyBarPhoto}
              src="/backgrounds/candybar.webp"
              alt="Mostrador del Candy Bar de Cinema La Plata"
            />
            <div className={styles.photoCaption}>
              <span>UN CLÁSICO DE CADA VISITA</span>
              <strong>Nos vemos en el Candy</strong>
            </div>
            <img className={styles.popcornDecoration} src="/popcorn-candybar.svg" alt="" aria-hidden="true" />
          </div>
        </section>

        <section className={styles.moments} aria-labelledby="moments-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>EL PLAN COMPLETO</p>
            <h2 id="moments-title">Elegí con qué acompañar la historia.</h2>
          </div>

          <div className={styles.momentGrid}>
            {candyBarMoments.map(({ id, title, description, icon: Icon }, index) => (
              <article className={styles.momentCard} key={id}>
                <div className={styles.momentVisual}>
                  <Icon size={50} strokeWidth={1.35} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.promoBanner}>
          <div>
            <p className={styles.eyebrow}>UN BENEFICIO PARA TU VISITA</p>
            <h2>¿Ya conocés las promociones del Candy Bar?</h2>
          </div>
          <Link className={styles.secondaryLink} href="/promociones">
            Ver promociones <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
