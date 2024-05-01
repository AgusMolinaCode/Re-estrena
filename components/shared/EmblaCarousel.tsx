"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { IEvent } from "@/lib/mongodb/database/models/event.model";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";

type PropType = {
  //slides: number[];
  data: IEvent[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 1 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.active === false
          ? autoScroll.reset
          : autoScroll.stop;

      (resetOrStop as () => void)();
      callback();
    },
    [emblaApi]
  );

  // const toggleAutoplay = useCallback(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll;
  //   if (!autoScroll) return;

  //   const playOrStop = (autoScroll.isPlaying as () => boolean)()
  //     ? autoScroll.stop
  //     : autoScroll.play;
  //   playOrStop();
  // }, [emblaApi]);

  // useEffect(() => {
  //   const autoScroll = emblaApi?.plugins()?.autoScroll;
  //   if (!autoScroll) return;

  //   setIsPlaying(autoScroll.isPlaying());
  //   emblaApi
  //     .on("autoScroll:play", () => setIsPlaying(true))
  //     .on("autoScroll:stop", () => setIsPlaying(false))
  //     .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  // }, [emblaApi]);

  return (
    <section className="embla py-8">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((event, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <li className="flex justify-center">
                    <div className="rounded-lg">
                      <Link href={`/publicaciones/${event._id}`}>
                        <div>
                          <Image
                            src={event.imageUrl}
                            alt={event.title}
                            width={400}
                            height={400}
                            className="rounded-t-lg h-[26rem]"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-center">
                            {event.title}
                          </h3>
                        </div>
                      </Link>
                    </div>
                  </li>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        {/* <button
          onClick={toggleAutoplay}
          type="button"
          className="embla__play relative h-10 w-16 overflow-hidden rounded bg-neutral-950 px-2 py-1 text-white transition-all duration-200 hover:bg-neutral-800 hover:ring-offset-2 active:ring-2 active:ring-neutral-800"
        >
          {isPlaying ? "Stop" : "Start"}
        </button> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
