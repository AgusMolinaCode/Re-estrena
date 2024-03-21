import { IEvent } from "@/lib/mongodb/database/models/event.model";
import Image from "next/image";
import React from "react";
import Card from "./Card";

export interface CollectionProps {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
  urlParamName?: string;
  page: number | string;
  totalPages?: number;
  limit: number;
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  urlParamName,
  page,
  totalPages = 0,
}: CollectionProps) => {
  return (
    <div>
      <div>
        {data.length > 0 ? (
          <div className="grid sm:grid-cols-3 gap-3">
            {data.map((event) => {
              const hasOrderLink = collectionType === "Events_Organized";
              const hidePrice = collectionType === "My_Tickets";

              return (
                <>
                  <div key={event.id} className="">
                    <Card event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>{emptyTitle}</h1>
            <p>{emptyStateSubtext}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
