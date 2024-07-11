import React from "react";
import Nav_module from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import IconBtn from "../../iconBtn/IconBtn";

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
      <div className={Nav_module.main}>
        {links.map((link: any) =>
          link.src ? (
            <Link href={"#"} key={link.text + link.index}>
              <Image src={link.src} height={50} width={200} alt={link.text} />
            </Link>
          ) : (
            <Link href={"#"} key={link.text + link.index}>
              <p>{link.text}</p>
            </Link>
          )
        )}
        <div className={Nav_module.icons}>
          <IconBtn icon={"person_outline"} />
          <IconBtn icon={"shopping_bag"} />
        </div>
      </div>
    </div>
  );
}
