"use client";

import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
import { Container } from "../../layout/container";
import { Section } from "../../layout/section";
import Badge from "../../common/badge/badge";
import Button from "../../common/button";
import { RadioInputField } from "../../form/fields/radio";
import { NumberInputField } from "../../form/fields/number";
import Image from "next/image";
import Policy from "../../common/policy";
import "material-icons/iconfont/material-icons.css";
import Wrapper from "../../common/wrapper";

export default function Details() {
  const details = [
    { label: "Cépage", value: "Merlot" },
    { label: "Millésime", value: "2015" },
    { label: "Région", value: "Chili" },
    { label: "Teneur en alcool", value: "13.5%" },
    { label: "Volume", value: "750ml" },
  ];

  return (
    <Section flex className={style.main}>
      <Container flex className={style.view}>
        <div className={style.bottleRender}>
          <div className={style.img_cont}>
            <Image
              src={"/wine.png"}
              width={770}
              height={1033}
              alt="wine bottle"
            />
          </div>
          <div className={style.details}>
            {details?.map((e: any) => (
              <div className={style.type} key={e.label}>
                <span className="material-icons">add</span>
                <p>{e.label}</p>
                <p>{e.value}</p>
              </div>
            ))}
          </div>

          <Wrapper title="Condition climatiques">
            Hiver sec, avec seulement 240 mm de précipitations entre mai et
            septembre 2014. Octobre et début novembre fut chaud, sec, et
            ensoleillé. Mais entre mi-novembre et mi-décembre les températures
            ont baissé et le ciel a été particulièrement nuageux. Un été
            particulièrement chaud et sec avec des températures élevées entre la
            mi-décembre et la troisième semaine de mars. La véraison a débuté
            plus tôt que prévu.
          </Wrapper>
          <Wrapper title="Condition climatiques">
            Hiver sec, avec seulement 240 mm de précipitations entre mai et
            septembre 2014. Octobre et début novembre fut chaud, sec, et
            ensoleillé. Mais entre mi-novembre et mi-décembre les températures
            ont baissé et le ciel a été particulièrement nuageux. Un été
            particulièrement chaud et sec avec des températures élevées entre la
            mi-décembre et la troisième semaine de mars. La véraison a débuté
            plus tôt que prévu.{" "}
          </Wrapper>
          <Wrapper title="Condition climatiques">
            Hiver sec, avec seulement 240 mm de précipitations entre mai et
            septembre 2014. Octobre et début novembre fut chaud, sec, et
            ensoleillé. Mais entre mi-novembre et mi-décembre les températures
            ont baissé et le ciel a été particulièrement nuageux. Un été
            particulièrement chaud et sec avec des températures élevées entre la
            mi-décembre et la troisième semaine de mars. La véraison a débuté
            plus tôt que prévu.{" "}
          </Wrapper>
        </div>

        <Container className={style.info}>
          <Container className={style.info_content}>
            <Container className={style.desc}>
              <h1>Château Margaux 2015</h1>
              <p>2016 une lumière.</p>
              <p>
                Un millésime épouvantble par les pluies torrentielles au moment
                des vendanges.
              </p>
              <p>Nous avons fait une micro-vendange.</p>
              <p>
                De ce fait, 2016 est issu d'une seule parcelle sur les 7
                micro-parcelles de Piedra Sagrada, nous avons éliminé presque
                tout et n'avons gardé que ce vin. 2016 est une seule lumière de
                ce terroir, comme un Richebourg, comme un Cros Parantoux du
                regretté Henri Jayer.
              </p>
              <ul>
                <li>
                  <p>
                    Robe rubis brillante qui scintille et reflète la lumière tel
                    un joyau précieux.
                  </p>
                </li>
                <li>
                  <p>
                    Nez extraordinaire qui évoque les fragrances d’un
                    Richebourg, la cerise et l’eau de vie de framboise du Case
                    Basse de Soldera, le cru Asili en Barbaresco de Giacosa, le
                    bouquet légèrement marqué par des notes de torréfaction du
                    château Cheval Blanc à Saint-Emilion (1964), mais peut-être
                    plus encore la violette pâtissière du Château Margaux 1990.
                    Bref un bouquet de grande classe.
                  </p>
                </li>
                <li>
                  <p>
                    La bouche est à l’instar du nez ; velouté, suave, sans
                    manquer d’ampleur ni de persistance. Un florilège de goûts
                    compliqués qui évoluent tout au long de la dégustation.
                  </p>
                </li>
              </ul>
              <p>
                Un vin voluptueux qui aura lentement fixé et métabolisé durant
                42 mois d’élevage sous barriques neuves ( à 80%) les multiples
                facettes de sa terre nourricière.
              </p>
              <p>
                Un vin remarquable qui se goûte admirablement maintenant et qui
                bien évidemment comblera le gourmet durant la prochaine
                décennie... Eric Verdier
              </p>
            </Container>

            <Container className={style.taste}>
              <p>Notes de dégustation :</p>
              <div className={style.tags}>
                <Badge text="fruits noirs" type="clear" />
                <Badge text="vanille" type="clear" />
                <Badge text="floral" type="clear" />
              </div>
            </Container>

            <Container className={style.buy}>
              <span>
                <h3>250.00 €</h3>
                <p>/Unité</p>
              </span>
              <p>Quantités disponibles: 21</p>
              <Container>
                <form action="submit" className={style.form}>
                  <RadioInputField
                    name={"choice"}
                    text={"Caisse ( 6 bouteilles )"}
                    id={"caisse"}
                    checked
                  />
                  <NumberInputField name={"choice"} id={"caisse"} />
                  <span className={style.separator}></span>

                  <Container className={style.buttons}>
                    <Button
                      text="Ajouter au panier"
                      type="button"
                      tier="primary"
                      large
                    />
                    <Button
                      text="Passer commande"
                      type="submit"
                      tier="secondary"
                      large
                    />
                  </Container>
                </form>
                <Policy />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Section>
  );
}
