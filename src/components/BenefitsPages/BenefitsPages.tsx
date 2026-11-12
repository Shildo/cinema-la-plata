import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgePercent, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { DISCOUNT_CATALOG } from "../../../app/data/pricing";
import { PROMOTIONS } from "../../../app/data/promotions";
import styles from "./BenefitsPages.module.css";

type BenefitsView = "hub" | "discounts" | "promotions";

const viewContent = {
  hub: {
    eyebrow: "BENEFICIOS CINEMA",
    title: "Elegí cómo disfrutar más",
    description: "Conocé los descuentos vigentes y las promociones de Cinema La Plata.",
  },
  discounts: {
    eyebrow: "BENEFICIOS · DESCUENTOS",
    title: "Más cine, mejores precios",
    description: "Revisá los descuentos disponibles según el día, el horario y el formato de la función.",
  },
  promotions: {
    eyebrow: "BENEFICIOS · PROMOCIONES",
    title: "Promociones para disfrutar más",
    description: "Conocé los beneficios de nuestros bancos, comercios aliados y comunidades.",
  },
} satisfies Record<BenefitsView, { eyebrow: string; title: string; description: string }>;

export default function BenefitsPages({ view }: { view: BenefitsView }) {
  const content = viewContent[view];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.content}>
          {view !== "hub" && (
            <Link className={styles.backLink} href="/beneficios">
              <ArrowLeft size={16} /> Volver a beneficios
            </Link>
          )}

          <header className={styles.header}>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className={styles.description}>{content.description}</p>
          </header>

          {view === "hub" && (
            <section className={styles.choiceGrid} aria-label="Elegí qué beneficios consultar">
              <Link className={styles.choiceCard} href="/descuentos">
                <span className={styles.choiceIcon}><BadgePercent size={28} /></span>
                <span className={styles.choiceCopy}>
                  <strong>Descuentos</strong>
                  <small>2 x 1 y precios especiales para tus entradas.</small>
                </span>
                <ArrowRight className={styles.choiceArrow} size={22} />
              </Link>

              <Link className={styles.choiceCard} href="/promociones">
                <span className={styles.choiceIcon}><Sparkles size={28} /></span>
                <span className={styles.choiceCopy}>
                  <strong>Promociones</strong>
                  <small>Conocé las propuestas especiales de Cinema La Plata.</small>
                </span>
                <ArrowRight className={styles.choiceArrow} size={22} />
              </Link>
            </section>
          )}

          {view === "discounts" && (
            <section className={styles.discountGrid} aria-label="Descuentos vigentes">
              {DISCOUNT_CATALOG.map((discount, index) => (
                <article className={styles.discountCard} key={discount.id}>
                  <span className={styles.discountNumber}>0{index + 1}</span>
                  <p className={styles.discountSchedule}>{discount.schedule}</p>
                  <h2>{discount.name}</h2>
                  <p className={styles.discountDescription}>{discount.description}</p>
                  <p className={styles.discountFormats}>Formatos: {discount.formats.join(" · ")}</p>
                </article>
              ))}
            </section>
          )}

          {view === "promotions" && (
            <section className={styles.promotionGrid} aria-label="Promociones vigentes">
              {PROMOTIONS.map((promotion, index) => (
                <article
                  className={`${styles.promotionCard} ${promotion.schedule ? styles.promotionCardWithSchedule : ""}`}
                  key={promotion.id}
                >
                  <div className={styles.promotionCardTop}>
                    <span className={styles.discountNumber}>0{index + 1}</span>
                    <span className={styles.promotionBadge}>{promotion.badge}</span>
                  </div>
                  {promotion.schedule && (
                    <p className={styles.discountSchedule}>{promotion.schedule}</p>
                  )}
                  <h2>{promotion.title}</h2>
                  <p className={styles.promotionDescription}>{promotion.description}</p>
                  {promotion.terms && (
                    <ul className={styles.promotionTerms}>
                      {promotion.terms.map((term) => <li key={term}>{term}</li>)}
                    </ul>
                  )}
                  {promotion.contactEmail && (
                    <a
                      className={styles.promotionEmail}
                      href={`mailto:${promotion.contactEmail}?subject=${encodeURIComponent(promotion.contactSubject ?? "")}`}
                    >
                      {promotion.contactEmail} <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </article>
              ))}
            </section>
          )}

          {view !== "hub" && (
            <Link className={styles.homeLink} href="/#experiencia">
              Volver a Experiencia <ArrowRight size={17} />
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
