import React from "react";
import { auth } from "@clerk/nextjs";
import Collection from "@/components/shared/Collection";
import { getEventsByUser } from "@/lib/actions/event.actions";

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 });
//   const events = await getEventsByUser({ userId, page: 1 });

  return (
    <>
      <h1>My tickets</h1>

      <section>
        {/* <Collection
          data={events?.data}
          emptyTitle="No Events Tickets purchase yet"
          emptyStateSubtext="No events tickets purchase yet."
          collectionType="My_Tickets"
          limit={3}
          page={1}
          totalPages={2}
          urlParamName="ordersPage"
        /> */}
      </section>

      <h1>mis eventos organizados</h1>

      <section>
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No Events fueros creatos"
          emptyStateSubtext="crea algunos ahora"
          collectionType="Events_Organized"
          limit={3}
          page={1}
          totalPages={2}
          urlParamName="eventsPage"
        />
      </section>
    </>
  );
};

export default ProfilePage;
