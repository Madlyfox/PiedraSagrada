import React from "react";
import Card_module from "./card.module.css";

export default function Card() {
  return (
    <div className={Card_module.card}>
      <div className={Card_module.render}></div>
    </div>
  );
}
