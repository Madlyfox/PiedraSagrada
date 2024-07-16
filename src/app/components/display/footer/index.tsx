import React from "react";
import { Container } from "../../layout/container";
import "material-icons/iconfont/material-icons.css";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const nav = [
    {
      label: "Acceuil",
      href: "/acceuil",
    },
    {
      label: "Histoire",
      href: "/histoire",
    },
    {
      label: "Nos vins",
      href: "/nos-vins",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const legal = [
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Terms of service",
      href: "/nos-vins",
    },
  ];

  const contact = [
    {
      label: "Adresse",
      href: "#",
    },
    {
      label: "Phone",
      href: "#",
    },
    {
      label: "Email",
      href: "#",
    },
  ];
  return (
    <Container className={style.footer}>
      <Container className={style.main} aligned>
        <div className={style.desc}>
          <Image src={"/Logo.svg"} width={200} height={80} alt="Logo" />
          <p>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div>
            <span className="material-icons">link</span>
            <span className="material-icons">link</span>
            <span className="material-icons">link</span>
          </div>
        </div>
        <div className={style.lists}>
          <div>
            <h3>Navigation Links</h3>
            <ul>
              {nav.map((e: any) => (
                <li>
                  <Link href={e.href}>{e.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Legal Information</h3>
            <ul>
              {legal.map((e: any) => (
                <li>
                  <Link href={e.href}>{e.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact Information</h3>
            <ul>
              {contact.map((e: any) => (
                <li>
                  <Link href={e.href}>{e.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Footer;
