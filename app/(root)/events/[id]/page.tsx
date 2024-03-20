import { getEventById } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);
  console.log("event", event);
  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex flex-col w-full gap-8 p-5 md-10">
            <h1 className="h1-bold">{event.title}</h1>
            <p className="text-lg">{event.description}</p>
            <div className="flex justify-between items-center">
                <p className="text-lg">{event.date}</p>
                <p className="text-lg">{event.location}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
