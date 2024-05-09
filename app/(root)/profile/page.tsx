import React from "react";
import { auth } from "@clerk/nextjs";
import Collection from "@/components/shared/Collection";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { IOrder } from "@/lib/mongodb/database/models/order.model";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchParamProps } from "@/types";
import { getOrdersByUser } from "@/lib/actions/order.actions";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Mis compras</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">ver mas publicaciones</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No has comprado ninguna prenda aun"
          emptyStateSubtext="Compra una prenda para poder disfrutar de los eventos!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Publicaciones creadas
          </h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/publicaciones/create">Crear nueva publicacion</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No se creado ninguna publicacion aun"
          emptyStateSubtext="Crea una publicacion para que otros puedan disfrutar de tus eventos!"
          collectionType="Mis_Publicaciones"
          limit={3}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
