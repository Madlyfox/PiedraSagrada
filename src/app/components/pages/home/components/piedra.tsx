import { Container } from "@/app/components/layout/container";
import style from "./index.module.scss";
import React from "react";
import Image from "next/image";
import { Section } from "@/app/components/layout/section";

function Piedra() {
  return (
    <div className={style.scroller}>
      <Section flex>
        <Container flex justified aligned>
          <Image
            src={"/draw_piedra.png"}
            width={600}
            height={500}
            alt="drawn piedra sagrada"
          />
        </Container>
        <Container flex flexDirection="column" justified id="piedra">
          <div className={style.paragraphe}>
            <h1>La Pierre sacrée</h1>
            <p>
              Piedra Sagrada est le lien perceptible entre celui qui a planté
              avec audace son vignoble dans un terroir suspendu entre des brises
              andines et des eaux pures de la fonte des glaciers millénaires, et
              le créateur du vin qui poursuit une quête d’authenticité et de
              pureté.
            </p>
            <p>
              Piedra Sagrada se distingue par son incroyable potentiel de garde,
              mais surtout par sa délicatesse en bouche qui procure une émotion
              indélébile.
            </p>
          </div>
        </Container>
      </Section>
      <section>
        <Container className={style.banner}>
          <Image
            src={"/wine_bg.png"}
            width={1200}
            height={1200}
            alt="wine_bg"
          />
          <div className={style.hover_text}>
            <h1>PIEDRA SAGRADA</h1>
            <h2>Un vin chilien crée par Éric Verdier</h2>
          </div>
        </Container>
      </section>
      <section>
        <Container flex flexDirection="column" aligned>
          <h1>Eric Verdier</h1>
          <Container flex flexDirection="row" justified id="terroir">
            <div className={style.paragraphe}>
              <p>
                Les jus des 7 micro-parcelles qui composent notre terroir de 3,8
                hectares sont dégustés par Éric Verdier, qui réalise une
                sélection drastique et détermine l'assemblage final mis en fûts
                de chêne français neufs, et l'élevage qui s’en suit : un long
                processus qui peut durer plus de 5 ans, avant que le millésime
                advienne caractérisé par son nez et fine texture au palais.
              </p>
              <p>
                Éric Verdier est spécialiste en analyse sensorielle comparative
                des grands vins, expert en classification de terroir viticole.
                Ce fut Jacques Luxey, fondateur des dégustations du Grand Jury,
                qui a détecté son don unique et l'a rendu célèbre ; il écrit à
                son propos : « Un don exceptionnel et rare, une passion
                dévorante, une conscience et une application de chaque instant,
                font d'Eric Verdier sans doute le plus grand dégustateur du
                monde ».
              </p>
            </div>
            <div className={style.paragraphe}>
              <p>
                A 21 ans, il est sélectionné parmi les 40 meilleurs dégustateurs
                du monde pour participer à la prestigieuse dégustation des plus
                grands millésimes de Petrus de 1926 à 1976. Confronté aux
                célébrités de la profession, il est classé 2ème. En 1988, il
                publie son premier dossier de dégustation dans lequel il parle
                de molécules, d'acidité, d'ions, d'anions, de levures... ; c'est
                le début d'une carrière dédiée à l'analyse fine et précise des
                grands vins les plus prestigieux. Il bénéficie du soutien des
                plus grands noms de la viticulture française : Émile Peynaud,
                Jean-Paul Gardère (Château Latour), Henri Jayer (Vosne-Romanée),
                Comte Alexandre de Lur Saluces (Château Yquem), Didier Cuvelier
                (Château Léoville Poyferré), Marcel Guigal, Claude Ricard
                (Domaine Chevalier), Jean Lenoir (Le Nez du vin)...
              </p>
            </div>
          </Container>
        </Container>
      </section>
      <section>
        <Container className={`${style.banner} ${style.bg_white}`}>
          <div className={style.paragraphe}>
            <h1>PIEDRA SAGRADA, UNE PRODUCTION LIMITÉE </h1>
            <h2>
              Notre production oscille entre 3000 à 8000 bouteilles par an.
              Notre engagement, proposer chaque année aux amateurs l’expérience
              unique d’un millésime singulier
            </h2>
          </div>
        </Container>
      </section>
      <section>
        <Container flex flexDirection="column" justified>
          <div className={style.paragraphe}>
            <h1>PIEDRA SAGRADA, UN VIN POUR LES ETOILES</h1>
            <p>
              Piedra Sagrada se déguste au Chili et en Europe où nous sommes
              extrêmement fiers d’être le seul vin chilien présent dans des
              restaurants étoilés du guide Michelin à Paris. Ainsi, durant des
              périodes plus au moins longues, Piedra Sagrada a été présent au
              prestigieux restaurant Le Jules Verne situé au deuxième étage de
              la tour Eiffel, dirigé par Frederic Anton ; à La Dame de Pic,
              dirigé par Anne-Sophie Pic ; et au restaurant Divellec, dirigé par
              Mathieu Pacaud. Cette prouesse confirme le statut un fine wine
              chilien.
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container flex flexDirection="column" justified>
          <div className={style.paragraphe}>
            <h1>UNE PIEDRA SAGRADA, UN PATRIMOINE ANCESTRAL</h1>
            <p>
              En 2010 à l’occasion de la construction de notre chai fut
              découverte une pierre d’environ 2m avec 2 parfaits orifices.
              Rapidement des recherches ont identifié une « piedra tacita »,
              pierre sacrée des chasseurs-cueilleurs amérindiens qui en
              intégrant dans leur périple ces mortiers inamovibles ont fixé des
              territoires et des civilisations Les « pierres tacites » ont été
              reconnues et resignifiées par distincts peuples originaires du
              Chili qui aujourd’hui se mobilisent pour reconnaître la valeur
              culturelle et spirituelle à ces objets sacrés enracinés dans le
              territoire, la terre et la biodiversité. Nous aimons entretenir le
              mythe que celles-ci se remplissaient d’eau pour observer les
              étoiles, mais surtout que cette pierre sacré transmet une force et
              une pulsation particulière à notre terre. Avec grand respect, ce
              mystère a donné le nom à notre vin
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container flex flexDirection="column" justified>
          <div className={style.paragraphe}>
            <h1>UNE MARQUE HOMMAGE</h1>
            <p>
              Les étiquettes de Piedra Sagrada ont un commun le profil d’Arturo
              Pérez Rojas, créateur du vignoble qui porte son nom. L’étiquette
              blanche enlace la bouteille et permet à Arturo Pérez Rojas de
              contempler la côte chilienne imagée par une découpe franche et
              symbolique. Cette délicate étiquette de l’illustrateur Cédric
              Nagau nécessite une pose à la main Le design de l’étiquette rose,
              œuvre de l’artiste Carlin Diaz, est un kaléidoscope composé de
              quatre profils d’Arturo Pérez Rojas, qui se projette à l’infini
              dans son terroir qui a le goût de l’éternel. Cette étiquette est
              l’hommage de ses quatre enfants et a déjà emportée un prix à Tokyo
              L’alternative de l’étiquette ne répond à aucun critère de
              dégustation, il permet juste un choix artistique.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Piedra;
