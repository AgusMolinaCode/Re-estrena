"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { IEvent } from "@/lib/mongodb/database/models/event.model";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  data: IEvent[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                {data
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .map((event) => {
                    return (
                      <li key={event._id} className="flex justify-center">
                        <div className="rounded-lg border border-gray-300 w-full bg-white">
                          <div className="flex justify-center items-center h-60 w-full">
                            <img
                              src={event.imageUrl}
                              alt={event.title}
                              className="h-60 w-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-bold">{event.title}</h3>
                            <h3 className="text-lg font-bold">
                              {new Date(event.createdAt).toLocaleString()}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EmblaCarousel;
