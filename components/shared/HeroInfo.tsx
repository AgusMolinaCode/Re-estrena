import React from "react";

import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import CollectionSwiper from "./CollectionSwiper";
import EmblaCarousel from "./EmblaCarousel";

const HeroInfo = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <div>
      <h2 className="h2-bold">Ultimas publicaciones</h2>
      {/* <CollectionSwiper data={events?.data || []} /> */}
      <EmblaCarousel
        //slides={[1, 2, 3, 4, 5]}
        options={{ loop: true }}
        data={events?.data || []}
      />
    </div>
  );
};

export default HeroInfo;
