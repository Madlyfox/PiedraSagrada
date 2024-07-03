import Details from "@/app/components/pages/details/Details";
import Display from "@/app/components/display/display";
import React from "react";

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
      <Display items={data} />
    </>
  );
}
