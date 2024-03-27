import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Category from "@/lib/mongodb/database/models/category.models";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({searchParams}:SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
     query: searchText,
     category,
     page,
     limit: 5,
    });


  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">¡Plan your next party with Fiesta!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Fiesta is a party planning app that helps you plan your next
              party. You can create events, invite friends, and keep track of
              RSVPs.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Create Event</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Illustration of a person planning a party"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Upcoming Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search placeholder="Search events..." />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data || []}
          emptyTitle="No events found"
          emptyStateSubtext="Create an event to get started"
          collectionType="All_Events"
          limit={5}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
