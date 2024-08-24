import React from "react";
import Bouton_module from "./bouton.module.css";
import Link from "next/link";

function Bouton({ href, text }: { href: string; text: string }) {
  return (
    <div className={Bouton_module.btnContainer}>
      <Link href={href}>{text}</Link>
    </div>
  );
}

export default Bouton;
