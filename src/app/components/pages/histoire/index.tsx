import { Container } from "@/app/components/layout/container";
import style from "./index.module.scss";
import React from "react";
import Image from "next/image";
import { Section } from "@/app/components/layout/section";
import Galery from "@/app/components/galery";

export default function Histoire() {
  return (
    <div className={style.scroller}>
      <section id="famille">
        <Container flex justified aligned>
          <div className={style.hover_text_middle}>
            <h3>
              « Cher ami, je vous félicite pour votre documentée et belle Revue.
              La vigne et le vin sont l’une des richesses essentielles du Chili.
              Je constate, à travers votre initiative que, pour la première
              fois, est abordée avec sérieux cette bénédiction territoriale, sa
              culture, son travail, son art et sa science ».
            </h3>
            <p>
              C’est Pablo Neruda, Prix Nobel de Littérature, qui s’adresse ainsi
              à Arturo Pérez Rojas, le 31 mars 1973.
            </p>
          </div>
        </Container>
      </section>
      <Section flex>
        <Container flex justified aligned>
          <Image
            src={"/draw_piedra.png"}
            width={600}
            height={500}
            alt="drawn piedra sagrada"
          />
        </Container>
        <Container flex flexDirection="column" justified>
          <div className={style.paragraphe}>
            <h1>ARTURO PÉREZ ROJAS, UN PROFESSIONNEL ENGAGÉ</h1>
            <p>
              Rarement un vin aura porté le goût du tragique, du souvenir, de
              l’amour, comme Piedra Sagrada. Il aura fallu attendre plus de
              quarante ans, que l’Histoire passe, que les hommes aient fini de
              pleurer, avant que le vin d’Arturo Pérez Rojas soit tiré de cette
              terre d’exception, serrée entre l’Océan Pacifique, la Cordillère
              des Andes.
            </p>
            <p>
              Au début des années 70, Arturo Pérez Rojas, ingénieur agronome,
              œnologue, dirigeait les premières réformes pour la protection et
              le développement des vignobles chiliens. Son exil forcé, après le
              coup d’État du 11 septembre 1973, ne fit qu’accentuer son
              attachement à cette passion.
            </p>
            <p>
              En France, pendant trente ans, il a bien évidemment continué
              d’apprendre, et c’est à la fois en expert, en homme de science et
              en enfant prodigue qu’il a choisi ces trois hectares et demi de la
              vallée d’Alto Maipo, berceau des plus grands vins chiliens, pour y
              planter ses pieds de cabernet sauvignon. Il savait que pouvait
              naître de cette terre l’un des meilleurs vins du monde. Il a mis
              toute son énergie, son intelligence, sa foi dans la création de ce
              vignoble au milieu de duquel, peut-être en hommage à la France qui
              l’avait accueilli, lui et sa famille, il a voulu faire construire
              une tour, évocation d’un des plus célèbres vignobles de Bordeaux.
              C’est dire s’il plaçait la barre haut.
            </p>
          </div>
        </Container>
      </Section>

      <section>
        <Container flex flexDirection="row" justified>
          <div className={style.paragraphe}>
            <h1>SON RÊVE, NOTRE HÉRITAGE</h1>

            <p>
              Faire famille autour de l’ambition de notre père est notre
              héritage. Partager des émotions et des valeurs, nous souvenir de
              sa philosophie de vie, être surpris par sa vision, être à la
              hauteur de sa détermination et de son exigence, honorer sa passion
              pour la vigne et le respect de la nature.
            </p>
            <p>
              Le fruit de son voyage de retour au Chili est Piedra Sagrada, un
              vin enraciné dans son pays, un vin autochtone de Pirque et qui
              bénéficie d’une French Touch grâce à sa double expertise viticole,
              chilienne et française. Un vin qui transmet année après année la
              justesse de son travail.
            </p>
            <p>
              Arturo Pérez Rojas a imaginé son vignoble en choisissant chaque
              pied de vigne, une sélection massale de cabernet sauvignon franc
              de pied. La structure du vignoble lui permet de recevoir la
              radiation solaire intense de Pirque tout le long de la journée, Il
              songea à arroser ses terres avec précaution, goutte à goutte, et à
              les protéger du gel avec un contrôle par aspersion. Pour cela il a
              doté sa propriété d’un puits profond qui inspire aujourd’hui
              admiration et sérénité.
            </p>
            <p>
              C’est cette terre, ce climat, cette histoire, qui inspire
              aujourd'hui Éric Verdier, spécialiste en analyse sensorielle, qui
              détermine la tonalité unique de chaque Piedra Sagrada. Éric
              rejoint la famille dans cette incroyable aventure. Il partage avec
              notre père un dialogue magique, et guide nos pas avec amour et
              passion, dans notre objectif d'excellence pour produire au fil des
              ans un grand vin issu d’un terroir unique au monde.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Galery />
      </section>
    </div>
  );
}
