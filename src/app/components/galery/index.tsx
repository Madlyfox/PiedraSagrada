import React from "react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import style from "./index.module.scss";

function Galery() {
  const sections = [
    { label: "Actualité" },
    { label: "Histoire" },
    { label: "Terroire" },
    { label: "Piedra Sagrada" },
  ];
  return (
    <Container className={style.holder}>
      <Container className={style.sections}>
        <ul>
          {sections.map((e: any) => (
            <li>
              <p>{e.label}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Container className={style.container}>
        <Container flex flexDirection="row" className={style.galery}>
          <div className={style.img}>
            <span>
              <p>24/06/2022</p>
            </span>
            <div className={style.content}></div>
            <span>
              <p>Lorem ipsum Dolor stitr amet</p>
            </span>
          </div>
          <div className={style.img}>
            <span>
              <p>24/06/2022</p>
            </span>
            <div className={style.content}></div>
            <span>
              <p>Lorem ipsum Dolor stitr amet</p>
            </span>
          </div>
          <div className={style.img}>
            <span>
              <p>24/06/2022</p>
            </span>
            <div className={style.content}></div>
            <span>
              <p>Lorem ipsum Dolor stitr amet</p>
            </span>
          </div>
          <div className={style.img}>
            <span>
              <p>24/06/2022</p>
            </span>
            <div className={style.content}></div>
            <span>
              <p>Lorem ipsum Dolor stitr amet</p>
            </span>
          </div>
          <div className={style.img}>
            <span>
              <p>24/06/2022</p>
            </span>
            <div className={style.content}></div>
            <span>
              <p>Lorem ipsum Dolor stitr amet</p>
            </span>
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default Galery;
