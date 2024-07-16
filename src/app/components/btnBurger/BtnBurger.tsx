import React from "react";
import BtnBurger_module from "./btnBurger.module.css";
import Link from "next/link";
Link;

function BtnBurger({ icon }: { icon: string }) {
  return (
    <div className={BtnBurger_module.link}>
      <Link href="">
        <span className="material-icons">{icon}</span>
      </Link>
    </div>
  );
}

export default BtnBurger;
