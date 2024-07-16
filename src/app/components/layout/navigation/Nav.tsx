"use client";
import React, { useState, useEffect } from "react";
import Nav_module from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import IconBtn from "../../common/iconBtn/IconBtn";
import { allowedNodeEnvironmentFlags } from "process";
import Icon from "../../common/iconBtn/IconBtn";

export default function Nav() {
  const links = [
    { href: "#", text: "Accueil" },
    { href: "#", text: "Nos vins" },
    { href: "#", text: "Logo", src: "/Logo.svg" },
    { href: "#", text: "History" },
    { href: "#", text: "Contact" },
  ];

  return (
    <div className={Nav_module.nav}>
      <div className={Nav_module.main}>
        <div className={Nav_module.iconsMenu}>
          <Icon icon={"menu"} />
          <div className={Nav_module.icons}>
            <Link href={"#"}>
              <Icon icon={"person_outline"} />
            </Link>
            <Link href={"#"}>
              <Icon icon={"shopping_bag"} />
            </Link>
          </div>
        </div>

        <nav className={Nav_module.links}>
          {links.map((link, index) =>
            link.src ? (
              <Link href={link.href} key={link.text + index}>
                <Image src={link.src} height={50} width={200} alt={link.text} />
              </Link>
            ) : (
              <Link href={link.href} key={link.text + index}>
                <p className={Nav_module.text}>{link.text}</p>
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  );
}

{
  /* <div className={Nav_module.main}>
        {links.map((link: any) =>
          link.src ? (
            <Link href={"#"} key={link.text + link.index}>
              <Image src={link.src} height={50} width={200} alt={link.text} />
            </Link>
          ) : (
            <Link href={"#"} key={link.text + link.index}>
              <p className={Nav_module.text}>{link.text}</p>
            </Link>
          )
        )}
        <div className={Nav_module.icons}>
          <IconBtn icon={"person_outline"} />
          <IconBtn icon={"shopping_bag"} />
        </div>
      </div> */
}
