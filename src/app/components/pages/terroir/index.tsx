import { Container } from "@/app/components/layout/container";
import style from "./index.module.scss";
import React from "react";
import Image from "next/image";
import { Section } from "@/app/components/layout/section";

export default function Terroir() {
  return (
    <div className={style.scroller}>
      <Section flex className={style.section_triple} id="terroir">
        <Container flex className={style.justified_left}>
          <div className={style.title}>
            <h1>
              Nous revendiquons être un vin de terroir et sommes engagés à ce
              titre dans le respect et protection de ce lieu unique considéré
              parmi les cinquante meilleurs terroirs de vin rouge au monde,
              selon le magazine Culture et Goût en 2017.
            </h1>
          </div>
        </Container>
        <Container flex className={style.map}>
          <Image src={"/chile_good.png"} width={400} height={800} alt="chile" />
        </Container>
        <Container flex flexDirection="column" justified>
          <div className={style.paragraphe}>
            <h1>UN MICROCLIMAT SOUS L'INFLUENCE COSMIQUE DES ANDES </h1>
            <p>
              Notre terroir se trouve sur les contreforts de la cordillère des
              Andes au cœur de la région viticole la plus prestigieuse du Chili,
              Alto Maipo. A 650 mètres d'altitude, situé dans la partie la plus
              froide de Pirque, dans ce que les météorologues appellent un trou
              à froid, notre terroir bénéficie d’un microclimat influencé tous
              les soirs par une brise descendant de la cordillère. Les
              températures nocturnes peuvent ainsi être jusqu'à 20°C inférieures
              à celles de la journée. En période de maturation cette singularité
              favorise un développement lent du raisin avec des arômes fruités
              complexes, tout en conservant son acidité, ce qui donnera au vin
              son extraordinaire potentiel de garde. D’une manière générale,
              nous dirons que le climat est méditerranéen semi-aride. Les étés
              sont chauds et secs avec des températures diurnes entre 20°et
              34°C. Les hivers sont courts et froids avec une faible
              pluviométrie annuelle.
            </p>
          </div>
        </Container>
      </Section>

      <Section flex>
        <Container flex flexDirection="column" justified>
          <div className={style.paragraphe}>
            <h1>L’eau des profondeurs d’une source souteraine</h1>
            <p>
              En plus des riches eaux minérales du rio Maipo, Piedra Sagrada est
              autosuffisant en eau grâce à un puits creusé à plus de 100 mètres
              de profondeur, ce qui contribue, sans aucun doute, à la complexité
              de ce vin."
            </p>
            <p>
              A 650 mètres d'altitude, il bénéficie de l'influence magique de la
              cordillère des Andes : des hivers froids et pluvieux et, pendant
              la période de maturation, des brises fraîches avec une grande
              amplitude de températures entre le jour et la nuit.
            </p>
          </div>
        </Container>
      </Section>

      <Section flex>
        <Container flex flexDirection="column" justified aligned>
          <div className={style.paragraphe}>
            <h1>UN SOL PIERREUX AU SERVICE DE LA PRÉCISION</h1>
            <p>
              Au cours des quatre périodes de glaciation, des glissements de
              terrain extrêmement violents ont créé un cône alluvial avec quatre
              terrasses très différentes les unes des autres. Notre terroir se
              situe sur la 4ème terrasse ; la plus ancienne.
            </p>
            <p>
              Il s'agit d'un sol pauvre, avec une fine couche de limon à faible
              teneur en matière organique. Un peu plus en profondeur, entre 50
              et 120 cm de la surface, commencent à apparaitre les fameux «
              bolones », pierres arrondies de différentes tailles trainées là
              par les anciens glaciers, ainsi que des proportions considérables
              d'argile. Le drainage et la porosité sont excellents ; la teneur
              élevée en oxygène permet une très bonne infiltration de l'eau et
              favorise le développement de racines profondes. L'apport d'argile
              est quant à lui important pour ralentir la perte d'humidité. Ce
              sont des conditions que le cabernet sauvignon apprécie.{" "}
            </p>
          </div>
        </Container>
      </Section>

      <Section flex>
        <Container flex flexDirection="column" justified aligned>
          <div className={`${style.paragraphe} ${style.thin}`}>
            <h1>DES VENDANGES SÉLECTIVES ET PERSONNALISÉES</h1>
            <p>
              Mais ce qui différencie ce spot, cette veine unique des terrains
              avoisinants, c’est qu’il est composé de 12 zones distinctes
              déterminées chacune par la profondeur à laquelle apparaissent les
              « bolones ». Sachant que plus les « bolones » sont profonds, plus
              la chaleur se diffuse lentement, il n’est pas rare que nous
              vendangions nos 3,8ha sur une durée de plus d’un mois, soulignant
              ainsi le fait d’une maturation différenciée.
            </p>
          </div>
        </Container>
        <Container flex flexDirection="column" justified>
          <div className={`${style.paragraphe} ${style.thin}`}>
            <p>
              Ainsi, nos vendanges sont tardives par rapport aux vignes
              environnantes, et personnalisées en fonction du degré Brix de
              chacune de nos 7 micro-parcelles. L’expérience nous a montré que
              nos baies ont besoin de 24° à 24,6° Brix pour que notre cabernet
              sauvignon exprime toute la richesse de ce terroir.
            </p>
            <p>
              Il peut s’écouler plusieurs jours entre nos différentes
              cueillettes, qui sont toujours à l’aube, manuelles et délicates
              avec des petites caisses de récolte de 12Kg.
            </p>
          </div>
        </Container>
      </Section>
      <Section flex>
        <Container flex flexDirection="column" justified aligned>
          <div className={style.paragraphe}>
            <h1>UN VIGNOBLE AU DESIGN VISIONNAIRE</h1>
            <p>
              Le vignoble qu’Arturo Pérez Rojas a planté il y a plus de trente
              ans, et qui aujourd’hui porte son nom est visionnaire. Les vignes
              sont espaces d’environ un mètre, l’exposition au soleil est
              parfaite. En été, le vignoble bénéficie de l’apport en eaux
              souterraines issues de la fonte de glaciers millénaires grâce à
              d’un puits creusé à plus de 100 mètres de profondeur, propre au
              domaine. Par le control strict d’une irrigation goutte à goutte
              l’eau pure profite à une plante moins énergivore produisant de
              baies plus petites et plus concentrées qui donneront à notre vin
              des tanins fermes et puissants.
            </p>
          </div>
        </Container>
      </Section>
      <Section flex>
        <Container flex flexDirection="column" justified aligned>
          <div className={style.paragraphe}>
            <h1>UN CABERNET SAUVIGNON, VECTEUR D’IDENTITÉ </h1>
            <p>
              Notre cépage est une sélection massale de cabernet sauvignon en
              franc-de-pied. Vecteur d’identité, sa singularité exprime celle du
              terroir où il s’épanoui avec un impact certain sur complexité de
              notre vin : son profil aromatique, sa texture, sa couleur et son
              potentiel de vieillissement.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
