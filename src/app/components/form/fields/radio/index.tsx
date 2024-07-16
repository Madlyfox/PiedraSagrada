import React from "react";
import FieldModule from "./index.module.css";

export function RadioInputField({
  name,
  text,
  id,
  checked,
}: {
  name: string;
  text: string;
  id: string;
  checked?: boolean;
}) {
  return (
    <label className={FieldModule.label} htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        defaultChecked={checked ? true : false}
      />
      <p>{text}</p>
    </label>
  );
}
