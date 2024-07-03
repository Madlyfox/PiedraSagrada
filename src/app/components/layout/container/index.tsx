import { FC } from "react";
import containerModule from "./index.module.css";
import { ContainerProps } from "./type";

export const Container: FC<ContainerProps> = ({
  children,
  className,
  flex,
  flexDirection,
  overflowHidden,
  grid,
  aligned,
  hide,
  justified,
}) => {
  const classNames = `${containerModule.body} ${flex ? "flex" : ""} ${
    justified ? "justified" : ""
  } ${aligned ? "aligned" : ""} ${grid ? "grid" : ""} ${hide ? "hide" : ""} ${
    flexDirection ? flexDirection : ""
  }
  ${overflowHidden ? "overflow-hidden" : ""} ${className ? className : ""}`;

  return <div className={classNames}>{children}</div>;
};
