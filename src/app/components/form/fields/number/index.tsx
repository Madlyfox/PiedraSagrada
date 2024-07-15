"use client";
import React, { useState } from "react";
import "material-icons/iconfont/material-icons.css";
import style from "./index.module.css";

export function NumberInputField({
  name,
  id,
  checked,
}: {
  name: string;
  id: string;
  checked?: boolean;
}) {
  const [count, setCount] = useState<number>(0);

  const increment = (e: any) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrement = (e: any) => {
    e.preventDefault();
    if (count >= 2) {
      setCount(count - 1);
    }
  };
  return (
    <div className={style.counter}>
      <button onClick={decrement}>
        <span className="material-icons-round">horizontal_rule</span>
      </button>
      <p>{count > 0 ? count : 1}</p>
      <button onClick={increment}>
        <span className="material-icons">add</span>
      </button>
      <input
        className={style.input}
        type="number"
        id={id}
        name={name}
        value={count}
        defaultValue={1}
        defaultChecked={checked ? true : false}
      />
    </div>
  );
}
