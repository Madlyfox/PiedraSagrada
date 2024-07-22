import React from "react";
import style from "./index.module.css";
import { Container } from "../../layout/container";
import { Section } from "../../layout/section";
import Badge from "../../common/badge/badge";
import Button from "../../common/button";
import { RadioInputField } from "../../form/fields/radio";
import { NumberInputField } from "../../form/fields/number";
import Image from "next/image";
import Policy from "../../common/policy";
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
      <Container className={style.view} flex flexDirection="row">
        <Container className={style.bottleRender} flex justified>
          <div className={style.medals}>
            <Image src={"/medales.png"} width={62} height={200} alt="medals" />
            <Image src={"/medal2.png"} width={130} height={135} alt="medals" />
          </div>
          <Image src={"/wine.png"} width={270} height={633} alt="wine bottle" />
        </Container>
        <Container className={style.info}>
          <Container className={style.desc}>
            <h1>Château Margaux 2015</h1>
            <p>
              Un vin rouge riche et corsé avec des notes de mûre et de chêne.
              Noté 95 points par Wine Spectator et a reçu une médaille d'or au
              International Wine Challenge. Bordeaux offre un bouquet complexe
              de fruits noirs, des touches de vanille et une finale lisse et
              persistante.
            </p>
          </Container>
          <Container className={style.taste} flex flexDirection="row" aligned>
            <p>Notes de dégustation : </p>
            <div className={style.tags}>
              <Badge text="fruits noirs" type="clear" />
              <Badge text="vanille" type="clear" />
              <Badge text="floral" type="clear" />
            </div>
          </Container>
          <Container className={style.buy} flex flexDirection="column">
            <span>
              <h3>250.00 €</h3> <p>/Unité</p>
            </span>
            <p>Quantités disponibles: 21</p>
            <Container>
              <form action="submit" className={style.form}>
                <div>
                  <RadioInputField
                    name={"choice"}
                    text={"Bouteille"}
                    id={"bouteille"}
                  />
                  <RadioInputField
                    name={"choice"}
                    text={"Caisse"}
                    id={"caisse"}
                    checked
                  />
                </div>
                <NumberInputField name={"choice"} id={"caisse"} />
                <span className={style.separator}></span>

                <div className={style.details}>
                  {details?.map((e: any) => (
                    <div className={style.type}>
                      <p>{e.label}</p>
                      <p>{e.value}</p>
                    </div>
                  ))}
                </div>
                <Container className={style.buttons} flex flexDirection="row">
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
            <Wrapper
              title="Description du millésime"
              content="Les vignes du Château Margaux sont travaillées avec le plus grand soin, à la main. Les cépages typiques du Médoc sont travaillés avec une majorité de cabernet sauvignon. Les vignes utilisées dans le grand vin sont âgées de 20 ans au minimum. Une équipe de 200 vendangeurs est nécessaire pour assurer la récolte chaque année. "
            />
          </Container>
        </Container>
      </Container>
    </Section>
  );
}
