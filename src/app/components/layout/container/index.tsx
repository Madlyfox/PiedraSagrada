import React, { FC, forwardRef } from "react";
import containerModule from "./index.module.css";
import { ContainerProps } from "./type";

// Adjust the Container component to forward refs
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      className,
      flex,
      id,
      flexDirection,
      overflowHidden,
      grid,
      aligned,
      hide,
      justified,
    },
    ref // ref is passed as the second argument
  ) => {
    const classNames = `${containerModule.body} ${flex ? "flex" : ""} ${
      justified ? "justified" : ""
    } ${aligned ? "aligned" : ""} ${grid ? "grid" : ""} ${hide ? "hide" : ""} ${
      flexDirection ? flexDirection : ""
    } ${overflowHidden ? "overflow-hidden" : ""} ${className ? className : ""}`;

    const ids = id ? id : "";

    return (
      <div className={classNames} id={ids} ref={ref}>
        {" "}
        {/* Attach the ref here */}
        {children}
      </div>
    );
  }
);

Container.displayName = "Container"; // This is necessary to give the component a name in React DevTools
