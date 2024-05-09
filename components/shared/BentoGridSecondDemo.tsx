import React from "react";

// import {cn} from '../../utils/cn';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-[100rem] mx-auto md:auto-rows-[20rem]">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          header={item.header}
          title={item.title}
          className={item.className}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Camperas",
    header: (
      <img
        className="object-cover w-full h-full scale-105 transition-transform duration-300 ease-in-out"
        src="assets/images/camperas.jpg"
        alt="Camperas"
      />
    ),
    className: "md:col-span-1",
    link: "/collections?category=Campera"
  },
  {
    title: "Jeans",
    header: (
      <img
        className="object-cover w-full h-full scale-105 transition-transform duration-300 ease-in-out"
        src="assets/images/jeans2.jpg"
        alt="Jeans"
      />
    ),
    className: "md:col-span-2",
    link: "/collections?category=Jean"
  },
  {
    title: "Remeras",
    header: (
      <img
        className="object-cover w-full h-full scale-105 transition-transform duration-300 ease-in-out"
        src="assets/images/remeras.jpg"
        alt="Remeras"
      />
    ),
    className: "md:col-span-2",
    link: "/collections?category=Remera"
  },
  {
    title: "Camisas",
    header: (
      <img
        className="object-cover w-full h-full scale-105 transition-transform duration-300 ease-in-out"
        src="assets/images/camisas1.avif"
        alt="Camisas"
      />
    ),
    className: "md:col-span-1",
    link: "/collections?category=Camisa"
  }
];
