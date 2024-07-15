"use client";
import React, { useState } from "react";
import { Container } from "../../layout/container";
import "material-icons/iconfont/material-icons.css";
import style from "./index.module.css";

function Wrapper({ title, content }: { title: string; content: string }) {
  const [isVisible, setVisibility] = useState(false);

  function handleDropdown() {
    setVisibility(!isVisible);
  }

  return (
    <Container flex flexDirection="column" className={style.accordeon}>
      <div onClick={handleDropdown} className={style.title}>
        <p>{title}</p>

        <span className="material-icons">keyboard_arrow_down</span>
      </div>
      {isVisible == true ? <div className={style.content}>{content}</div> : ""}
    </Container>
  );
}

export default Wrapper;
