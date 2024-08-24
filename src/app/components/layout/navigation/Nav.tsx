import React from "react";
import Nav_module from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import IconBtn from "../../common/iconBtn/IconBtn";

export default function Nav() {
  const links = [
    { href: "#", text: "Nos vins" },
    { href: "/histoire", text: "Histoire" },

    { href: "/", text: "Logo", src: "/Logo.svg" },
    { href: "/terroir", text: "Le terroir" },
    { href: "/piedra", text: "La Piedra" },
  ];

  const iconBtnPosition = "end";

  return (
    <div className={Nav_module.nav}>
      <div className={Nav_module.main}>
        {links.map((link: any) =>
          link.src ? (
            <a href={"/"} key={link.text + link.index}>
              <Image src={link.src} height={50} width={200} alt={link.text} />
            </a>
          ) : (
            <Link href={link.href} key={link.text + link.index}>
              <p className={Nav_module.text}>{link.text}</p>
            </Link>
          )
        )}
        <div className={Nav_module.icons}>
          <IconBtn icon={"shopping_bag"} />
        </div>
      </div>
    </div>
  );
}
