import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import React from "react";

const page = async ({ searchParams }: SearchParamProps) => {
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
      <h1 className="font-bold text-4xl py-6">Coleccion</h1>
      <div className="flex w-full flex-col gap-5 md:flex-row max-w-xl">
        <Search placeholder="Buscar publicaciones..." />
        <CategoryFilter />
      </div>

      <Collection
        data={events?.data || []}
        emptyTitle="No se encontro indumentaria"
        emptyStateSubtext="Crear una publicacion para que otros puedan ver tus productos."
        collectionType="All_Events"
        limit={6}
        page={page}
        totalPages={events?.totalPages}
      />
    </div>
  );
};

export default page;
