"use client";

import { useState } from "react";
import { MapPin } from "lucide-react"
import { Tickets } from "lucide-react";
import { Clock9 } from "lucide-react";

const complexes = [
  {
    number: "01",
    name: "Cinema City",
    location: "Calle 50 entre 9 y 10.",
    imgURL: "/sedes/city.JPEG",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/JCh4EGS9Bo3hhXwg6"
  },  
  {
    number: "02",
    name: "Cinema Paradiso",
    location: "Calle 46 entre 10 y 11.",
    imgURL: "/sedes/paradiso.JPEG",
    rooms: "Sala 1, 2, 3 y 4.",
    locationURL: "https://maps.app.goo.gl/9pcaCXtL7LStEbJu9"
  },
  {
    number: "03",
    name: "Cinema Ocho",
    location: "Calle 8 entre 51 y 53.",
    imgURL: "/sedes/ocho.jpeg",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/YN8YFMhX47n3wSyD6"
  },
  {
    number: "04",
    name: "Cinema Rocha",
    location: "Calle 49 entre 7 y 8.",
    imgURL: "/sedes/rocha.JPEG",
    rooms: "Sala 1, 2 y 3.",
    locationURL: "https://maps.app.goo.gl/AMKFx3ypYin7Cx517"
  },
  {
    number: "05",
    name: "Cinema San Martín",
    location: "Avenida 7 entre 50 y 51.",
    imgURL: "/sedes/san-martin.JPEG",
    rooms: "Sala 1, 2, 3 y 4.",
    locationURL: "https://maps.app.goo.gl/LrjGXcBWd9sDJcMn8"
  },
];

export default function ComplexSection() {
  const [selectedComplex, setSelectedComplex] = useState(complexes[0]);

  return (
    <section className="complex-section" id="complejos">
      <div className="complex-side">
        <p className="section-eyebrow">COMPLEJOS</p>

        <h2>
          Conocé nuestras
          <br />
          sedes.
        </h2>

        <div className="complex-list">
          {complexes.map((complex) => (
            <button
              key={complex.number}
              className={
                selectedComplex.number === complex.number ? "active" : ""
              }
              onClick={() => setSelectedComplex(complex)}
            >
              <span></span>

              {complex.name}

            </button>
          ))}
        </div>
      </div>

      <div className="complex-detail">
        <div className="complex-image">
          <img
            src={selectedComplex.imgURL}
            alt={selectedComplex.name}
          />
        </div>

        <div className="complex-card">
          <h3>{selectedComplex.name}</h3>

          <div className="complex-facts">
            <div>
              <span>
                <MapPin />
              </span>
              <small>UBICACIÓN</small>
              <strong>{selectedComplex.location}</strong>
            </div>

            <div>
              <span>
                <Tickets />
              </span>
              <small>SALAS</small>
              <strong>{selectedComplex.rooms}</strong>
            </div>

            <div>
              <span>
                <Clock9 />
              </span>
              <small>HORARIO</small>
              <strong>11:00 - 00:30</strong>
            </div>
          </div>

          <a href={selectedComplex.locationURL} target="_blank" rel="noopener noreferrer" className="button button--secondary see-location-button">
            Ver ubicación
          </a>
        </div>
      </div>
    </section>
  );
}