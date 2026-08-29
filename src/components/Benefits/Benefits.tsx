const benefits = [
  {
    number: "01",
    title: "2x1",
    description:
      "Creá, editá o reemplazá aquí el detalle de la promoción vigente.",
  },
  {
    number: "02",
    title: "Descuentos",
    description:
      "Reservá este espacio para descuentos por día, función o sala.",
  },
  {
    number: "03",
    title: "Promociones bancarias",
    description:
      "Mostrá medios de pago adheridos sin alterar la lectura principal.",
  },
  {
    number: "04",
    title: "Comunidad",
    description:
      "Beneficios para jubilados, estudiantes y grupos culturales.",
  },
];

export default function Benefits() {
  return (
    <section className="benefit-section" id="beneficios">
      <div className="benefit-ribbon">
        <p>
          Beneficios que se ven mejor en
          <br />
          pantalla grande.
        </p>

        <a href="#contacto">
          Conocelos
          <span>→</span>
        </a>
      </div>

      <div className="benefit-content">
        <div className="benefit-intro">
          <p className="benefit-eyebrow">BENEFICIOS</p>

          <h2>
            Tu entrada
            <br />
            puede abrir
            <br />
            más puertas.
          </h2>
        </div>

        <div className="benefit-list">
          {benefits.map((benefit) => (
            <article key={benefit.number}>
              <span>{benefit.number}</span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}