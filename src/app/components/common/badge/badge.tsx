import React from "react";
import style from "./index.module.css";

export default function Badge({
  type,
  text,
  icon,
}: {
  type: "clear" | "dark";
  text: string;
  icon?: string;
}) {
  return (
    <div className={` ${style.badge} ${type ? style[type] : ""}`}>{text}</div>
  );
}
