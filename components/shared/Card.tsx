import { IEvent } from "@/lib/mongodb/database/models/event.model";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { DeleteConfirmation } from "./DeleteConfirmation";

export interface CardProps {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div>
      <div>
        <div className="grid-cols-3">
          <div className="bg-[#F6F6F6] rounded-3xl relative">
            <Link href={`/publicaciones/${event._id}`}>
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={500}
                height={500}
                className=" object-center rounded-3xl cursor-pointer "
              />
            </Link>

            <div className="absolute bottom-1 left-2">
              {isEventCreator && !hidePrice && (
                <div className="my-3">
                  <Link href={`/publicaciones/${event._id}/update`}>
                    <span className="text-[#542b17] text-lg bg-orange-200 p-1 rounded-lg border border-orange-300">
                      Editar
                    </span>
                  </Link>
                  {"  -  "}
                  <DeleteConfirmation eventId={event._id} />
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl">{event.title}</h3>
            <p className="text-gray-500">
              {truncate(event.description as string, 100)}
            </p>
            {/* <p>{formatDateTime(event.startDateTime).dateTime}</p> */}
            {/* {!hidePrice && } */}
            {event.isFree
                      ? <p className="text-2xl">GRATIS</p>
                      : event.price === ""
                      ? <p className="text-2xl">GRATIS</p>
                      : `$${event.price}`}
            {hasOrderLink && (
              <Link href={`/orders?eventId=${event._id}`}>
                <p className="text-lg text-black underline">orden</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
