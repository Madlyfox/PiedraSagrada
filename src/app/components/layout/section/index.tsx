import React, { FC } from "react";
import Section_module from "./index.module.css";

const parseSectionClassName = (props: any) => {
  return `${Section_module.body} ${props.flex ? "flex" : ""} ${
    props.className ? props.className : ""
  } ${props.type ? Section_module[props.type] : ""}`;
};

const parseSectionid = (props: any) => {
  return `${props.id ? props.id : ""}`;
};

export const Section = (props: {
  className?: string;
  flex?: boolean;
  children?: React.ReactNode;
  type?: "platform" | "admin";
  id?: string;
}) => {
  const classNames = parseSectionClassName(props);
  const id = parseSectionid(props);

  return (
    <section className={`${classNames}`} id={`${id}`}>
      {props.children}
    </section>
  );
};
