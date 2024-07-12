import React from "react";
import Nav_module from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import IconBtn from "../../common/iconBtn/IconBtn";

export default function Nav() {
  const links = [
    { href: "#", text: "Accueil" },
    { href: "#", text: "Nos vins" },
    { href: "#", text: "Logo", src: "/Logo.svg" },
    { href: "#", text: "History" },
    { href: "#", text: "Contact" },
  ];

  const iconBtnPosition = "end";

  return (
    <div className={Nav_module.nav}>
      {/* si link est inferieur a 512 alors
      modifier le menu en burger 
      sinon rien  */}
      <div className={Nav_module.main}>
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
      </div>
      {/* <div className={Nav_module.main}>
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
      </div> */}
    </div>
  );
}
