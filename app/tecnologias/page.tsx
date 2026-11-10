import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TechnologyCarousel from "@/components/TechnologyCarousel/TechnologyCarousel";
import styles from "./page.module.css";

export default function TechnologiesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.ambient} aria-hidden="true" />
        <div className={styles.layout}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>EXPERIENCIA CINEMA</p>
            <h1>La tecnología también es parte de la historia.</h1>
            <p className={styles.description}>
              Conocé los formatos y espacios de cada complejo. Pasá de una sede a otra para encontrar la experiencia que buscás.
            </p>
          </header>
          <TechnologyCarousel />
        </div>
      </main>
      <Footer />
    </>
  );
}
