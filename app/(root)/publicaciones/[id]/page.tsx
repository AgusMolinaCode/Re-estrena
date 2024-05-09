import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import MercadoPagoButton from "@/components/shared/MercadoPagoButton";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-1">
              <h2 className="h2-bold">{event.title}</h2>
              <p className="text-gray-600">
                by{" "}
                <span className="">
                  {event.organizer.firstName} {event.organizer.lastName}
                </span>
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-blue-600 rounded-full">
                    <Link href={`/collections?category=${event.category.name}`}>
                      {event.category.name}
                    </Link>
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold rounded-full text-green-700">
                    {event.isFree ? (
                      "GRATIS"
                    ) : event.price === "" ? (
                      "GRATIS"
                    ) : (
                      <>
                        <span className="text-black">$</span>
                        <span className="text-black">{event.price}</span>
                        <span className="text-xl text-gray-600"> pesos</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <MercadoPagoButton event={event} />
              <CheckoutButton event={event} />
            </div>

            <div className="flex flex-col gap-5">
              <div className="p-regular-20 flex items-center gap-1">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
              <p className="p-bold-20 text-grey-600">Talle:</p>
              <p className="text-xl">{event.talle}</p>

              </div>
              <p className="p-bold-20 text-grey-600">Descripcion:</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {event.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Publicaciones similares</h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No se encontraron publicaciones"
          emptyStateSubtext="Regresa mas tarde"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
