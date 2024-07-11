import React from "react";
import Details_module from "./details.module.css";
import Nav from "../../layout/navigation/Nav";
import Carousel from "../../common/carousel/Carousel";

export default function Details() {
  return (
    <div className={Details_module.main}>
      <Nav />
      <div className={Details_module.render}>
        <img src="./wine.png" alt="untitled" />
      </div>
      <div className={Details_module.content}>
        <div className={Details_module.title}>
          <h1>Domaine de la Piedra Sagrada 2014</h1>
        </div>
        <div className={Details_module.text}>
          <div className={Details_module.paragraph}>
            <p>
              <span className={Details_module.capitalized}>U</span>
              <span>
                n Cabernet Sauvignon raffiné par Eric Verdier, incarne
                l'élégance de Maipo Andes.
              </span>
            </p>
            <p>
              <span>
                Élevé 42 mois en fûts de chêne, ce vin sélect (3300 bouteilles)
                offre une robe rubis et un palais complexe. Il promet une
                dégustation exquise, atteignant son apogée de 2025 à 2030.
              </span>
            </p>
          </div>
          <div className={Details_module.paragraph}>
            <p></p>
          </div>
        </div>
        <div className={Details_module.carousel}>
          {/* <Carousel items={data} /> */}
        </div>
      </div>
    </div>
  );
}
