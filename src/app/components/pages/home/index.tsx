import React from "react";
import { Container } from "../../layout/container";
import { Section } from "../../layout/section";
import style from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import View from "./components/view";
import Contact from "../../display/contact";

function Home() {
  const list = [
    {
      label: "Un vin d'exception",
      name: "histoire",
    },
    {
      label: "Un des meilleurs terroir",
      name: "terroir",
    },
    {
      label: "Piedra Sagrada",
      name: "piedra",
    },
  ];

  return (
    <Container className={style.main}>
      <Container className={style.hero}>
        <Image
          className={style.hero_bg}
          src={"/chile.png"}
          width={1500}
          height={1500}
          alt="hero"
        />
        <div className={style.galery}>
          <p>Galerie</p>
        </div>
        <div className={style.shop_btn}>
          <div className={style.hovered}></div>
          <p>Acceder à nos millésimes</p>
        </div>
        <Image
          src={"/Piedra.png"}
          className={style.logo}
          width={500}
          height={200}
          alt="piedra_sagrada"
        />
        <Contact />
        <ul className={style.btn}>
          {list.map((e: any) => (
            <li>
              <p>{e.label}</p>
              <Link href={`./${e.name}`}>
                <button> </button>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
}

export default Home;
