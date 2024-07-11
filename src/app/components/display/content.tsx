import React from "react";

export default function Content({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <div className="content">
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={href}>En savoir plus</a>
    </div>
  );
}
