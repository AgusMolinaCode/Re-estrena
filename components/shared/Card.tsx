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

  console.log("event", event);

  return (
    <div>
      <div>
        <div className="grid-cols-3">
          <div>
            <Link href={`/events/${event._id}`}>
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={200}
                height={200}
              />
            </Link>
          </div>

          {isEventCreator && !hidePrice && (
            <div>
              <Link href={`/events/${event._id}/update`}>
                <span className="bg-blue-500 p-1 px-3 rounded-3xl">Edit</span>
              </Link>

              <DeleteConfirmation eventId={event._id} />
            </div>
          )}

          <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{formatDateTime(event.startDateTime).dateTime}</p>
            {!hidePrice && <p>{event.price}</p>}
            {event.isFree && <p>Free</p>}
            {hasOrderLink && (
              <Link href={`/orders?eventId=${event._id}`}>
                <p>Order</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
