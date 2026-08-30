export default function About() {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-image">
        <img
          src="/backgrounds/family-ocho.PNG"
          alt="Familia disfrutando una experiencia en Cinema La Plata"
          style={{scale: 1.2}}
        />
      </div>

      <div className="about-copy">
        <p className="about-eyebrow">
          NOSOTROS
        </p>

        <h2>
          El cine que siempre 
          <br />
          te acompaña.
        </h2>

        <p>
          En Cinema La Plata llevamos décadas acompañando a la ciudad y siendo parte indispensable del ritual de ir al cine. Nacimos con la vocación de reunir a las personas frente a la pantalla grande y, a lo largo de los años, nos hemos transformado para ofrecer una experiencia cinematográfica moderna, diversa e inmersiva. Somos más que un espacio de proyección: somos un punto de encuentro donde convergen historias de todo el mundo, la emoción del entretenimiento de vanguardia y el sentido de comunidad que hace única a La Plata.
        </p>

        <a className="button button--terciary" href="#contacto">
          Conocé nuestra historia
        </a>
      </div>
    </section>
  );
}