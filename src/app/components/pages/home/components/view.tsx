"use client";
import React, { useState } from "react";
import style from "../index.module.scss";
import { Section } from "@/app/components/layout/section";
import { Container } from "@/app/components/layout/container";
import Link from "next/link";
import Terroir from "./terroir";
import Piedra from "./piedra";
import Famille from "./famille";
import Navigation from "@/app/components/display/contact";
import Contact from "@/app/components/display/contact";

export default function View() {
  const [path, setPath] = useState("");

  const list = [
    {
      label: "Une Famille engage",
      name: "famille",
    },
    {
      label: "Un terroir au Pied des Andes",
      name: "terroir",
    },
    {
      label: "Piedra Sagrada",
      name: "piedra",
    },
  ];

  return (
    <Container>
      <Contact />
      <ul className={style.btn}>
        {list.map((e: any) => (
          <li>
            <h1>{e.label}</h1>
            <Link href={`#${e.name}`}>
              <button onClick={() => setPath(e.name)}> </button>
            </Link>
          </li>
        ))}
      </ul>
      <Container flex flexDirection="column" className={style.scroll_snap}>
        {path == "terroir" ? (
          <Terroir />
        ) : path == "piedra" ? (
          <Piedra />
        ) : path == "famille" ? (
          <Famille />
        ) : (
          ""
        )}
      </Container>
    </Container>
  );
}
