'use client'

import { IEvent } from "@/lib/mongodb/database/models/event.model";
import React from "react";

type CollectionProps = {
  data: IEvent[];
};

const CollectionSwiper = ({ data }: CollectionProps) => {
  return (
    <>
      <div>
        {data.length > 0 ? (
          <div className="flex flex-col items-center gap-10">
            <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {data
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                // .slice(0, 6)
                .map((event) => {
                  return (
                    <li key={event._id} className="flex justify-center">
                      <div className="rounded-lg border border-gray-300 w-full bg-white">
                        <div className="flex justify-center items-center h-60 w-full">
                          <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="h-60 w-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold">{event.title}</h3>
                          <h3 className="text-lg font-bold">
                            {new Date(event.createdAt).toLocaleString()}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
            <h3 className="p-bold-20 md:h5-bold">
              No se encontro indumentaria
            </h3>
            <p className="p-regular-14">
              Crear una publicacion para que otros puedan ver tus productos.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CollectionSwiper;
