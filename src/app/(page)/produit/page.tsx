import Details from "@/app/components/details/Details";
import Nav from "@/app/components/layout/navigation/Nav";
import React from "react";
Nav;

export default function page() {
  const data = [
    {
      title: "Cuvée Prestige Don Arturo Perez Rojas 2015",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas, nisi veritatis, iste magnam doloribus laudantium adipisci ipsa eos in, commodi placeat voluptas modi saepe maiores debitis voluptatibus illum deserunt.",
    },
    {
      title: "Cuvée Prestige Don Arturo Perez Rojas 2016",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas, nisi veritatis, iste magnam doloribus laudantium adipisci ipsa eos in, commodi placeat voluptas modi saepe maiores debitis voluptatibus illum deserunt.",
    },
    {
      title: "Cuvée Prestige Don Arturo Perez Rojas 2017",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas, nisi veritatis, iste magnam doloribus laudantium adipisci ipsa eos in, commodi placeat voluptas modi saepe maiores debitis voluptatibus illum deserunt.",
    },
    {
      title: "Cuvée Prestige Don Arturo Perez Rojas 2018",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas, nisi veritatis, iste magnam doloribus laudantium adipisci ipsa eos in, commodi placeat voluptas modi saepe maiores debitis voluptatibus illum deserunt.",
    },
    {
      title: "Cuvée Prestige Don Arturo Perez Rojas 2019",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas, nisi veritatis, iste magnam doloribus laudantium adipisci ipsa eos in, commodi placeat voluptas modi saepe maiores debitis voluptatibus illum deserunt.",
    },
  ];

  return (
    <>
      {/* <Details /> */}
      <Nav />
    </>
  );
}
