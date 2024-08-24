import React from "react";
import { Container } from "../../layout/container";
import style from "./index.module.css";
import Link from "next/link";
import Wrapper from "../wrapper";

function Policy() {
  return (
    <div className={style.container}>
      <Container>
        <p className={`${style.title} ${style.red}`}>
          Livraison gratuite dès 39,00 €
        </p>
        <p>Expédition Standard Livraison : 8-11 jours ouvrés</p>
      </Container>
      <Container className={style.second}>
        <p className={style.title}>Politique de retour</p>
        <p>
          Les retours peuvent être effectués pendant 45 jours après la date
          d’achat.
        </p>
        <Link href={"#"} className={style.link}>
          en savoir plus
        </Link>
      </Container>
      <Container>
        <p className={style.title}>Sécurité des achats</p>
        <ul>
          <li>Paiements sécurisés</li>
          <li>Logistique Sécutitée</li>
          <li>Service Clientèle</li>
        </ul>
      </Container>
    </div>
  );
}

export default Policy;
