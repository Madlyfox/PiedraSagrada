import React from "react";
import Nav_module from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={Nav_module.nav}>
      <div className={Nav_module.menu}>
        <Link href={"#"}>Menu</Link>
      </div>
      <div className={Nav_module.logo}>
        <img src="./Logo.svg" alt="Pedra Sagrada Logo" />
      </div>
      <div className={Nav_module.links}>
        <div className={Nav_module.link}>
          <Link href={"#"}>Panier</Link>
        </div>
        <div className={Nav_module.link}>
          <Link href={"#"}>Compte</Link>
        </div>
      </div>
    </div>
  );
}
