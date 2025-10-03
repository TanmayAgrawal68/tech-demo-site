import React from "react";
import { FlipWords } from "../../components/ui/flip-words";
import { Highlight } from "../../components/ui/hero-highlight";
import { PointerHighlight } from "../../components/ui/pointer-highlight";

export function HeroText() {
  const words = ["smarter", "secure", "scalable", "innovative"];

  return (
    <div className="flex flex-col justify-center items-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary dark:text-neutral-400 px-4 text-center">
      <div className="max-w-[900px] flex flex-col justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        At Techcanopy we engineer{" "}
        <b>
          <FlipWords words={words} />
        </b>
      </div>
      <div className="mt-6 sm:mt-8 flex gap-2 text-sm sm:text-base md:text-lg lg:text-xl">
        fintech and{" "}
        <PointerHighlight>
          {" "}
          <b className="text-primary p-2">digital products</b>{" "}
        </PointerHighlight>{" "}
        that fuel business growth.
      </div>
    </div>
  );
}
