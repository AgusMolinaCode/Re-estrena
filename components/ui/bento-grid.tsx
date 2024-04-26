import clsx from "clsx";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[12rem] sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-6 overflow-hidden",
        className
      )}
    >
      <div
        className={clsx("w-full h-full flex justify-center overflow-hidden", {
          "items-center": className?.includes("col-span-2"),
        })}
      >
        <Link href={`/collections/${title}`}>
          <div className="relative object-center object-cover w-full h-full">
            {header}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-200" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <button className="group relative inline-flex h-14 w-32 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-black/70 hover:bg-black/90 duration-200 px-6 font-medium text-white transition-all [box-shadow:5px_5px_rgb(242_242_233)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(255_255_115)] text-2xl sm:text-4xl">
                {title}
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
