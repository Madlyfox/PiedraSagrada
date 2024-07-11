import React from "react";
import Button_module from "./button.module.css";

function Button({
  text,
  onClick,
  disabled,
  value,
  large,
  type,
  tier,
}: {
  text?: string;
  onClick?: (e: React.UIEvent) => void;
  disabled?: boolean;
  large?: boolean;
  tier: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit";
  value?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${Button_module.button}  ${
        tier ? Button_module[tier] : ""
      }  ${large ? Button_module.large : ""}`}
      disabled={disabled}
      value={value}
    >
      {text && <span className={Button_module.text}> {text}</span>}
    </button>
  );
}

export default Button;
