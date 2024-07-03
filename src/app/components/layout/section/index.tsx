import React, { FC } from "react";
import Section_module from "./index.module.css";

const parseSectionClassName = (props: any) => {
  return `${Section_module.body} ${props.flex ? "flex" : ""} ${
    props.className ? props.className : ""
  } ${props.type ? Section_module[props.type] : ""}`;
};

export const Section = (props: {
  className?: string;
  flex?: boolean;
  children?: React.ReactNode;
  type?: "platform" | "admin";
}) => {
  const classNames = parseSectionClassName(props);
  return <section className={`${classNames}`}>{props.children}</section>;
};
