import { AuroraBackgroundDemo } from "@/components/shared/AuroraBackgroundDemo";
import { BentoGridSecondDemo } from "@/components/shared/BentoGridSecondDemo";
import HeroInfo from "@/components/shared/HeroInfo";
import { SearchParamProps } from "@/types";

import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {

  return (
    <>
      <section className="bg-white md:py-8">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-3">
          <AuroraBackgroundDemo />
          <div className="rounded-2xl border border-gray-300 relative w-full bg-white">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] rounded-2xl"></div>
            <div className="flex flex-col md:justify-center items-center h-full w-full mt-6 mb-6 md:mt-0 md:mb-0">
              <h1 className="text-6xl xl:text-9xl font-bold bg-gradient-to-bl from-gray-900 to-gray-600 bg-gradient-to-r inline-block text-transparent bg-clip-text">
                Re-Estrena
              </h1>
              <p className="text-xl my-4 md:my-6 px-2 text-gray-500 text-center max-w-xl">
                Re-estreba es una plataforma para comprar y vender ropa de
                segunda mano, donde puedes encontrar ropa de calidad a precios
                accesibles. ¡Únete a la comunidad!
              </p>
              <Link href="/collections">
                <button className="group relative inline-flex h-14 w-32 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] text-2xl">
                  Ver Más!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div className="flex gap-2 items-center">
          <h2 className="h2-bold">colecciones populares</h2>
          <Link href="/collections">
                <button className="group relative inline-flex h-14 w-32 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] text-2xl">
                  Ver todo
                </button>
              </Link>
        </div>
        

        <BentoGridSecondDemo />

        <HeroInfo
          searchParams={searchParams}
          params={{
            id: "",
          }}
        />
      </section>
    </>
  );
}
