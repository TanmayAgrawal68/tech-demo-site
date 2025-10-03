import React from "react";
import { FlipWords } from "../flip-words";
import { Highlight } from "../hero-highlight";

export function FlipWordsDemo() {
  const words = ["smarter", "secure", "scalable", "innovative"];

  return (
    <div className="flex flex-col   justify-center items-center text-2xl  font-normal text-primary dark:text-neutral-400 ">
      <div className="text-6xl max-w-[900px] flex flex-col justify-center items-center">
        At Techcanopy we engineer <b>{<FlipWords words={words} />}</b>
      </div>
      <div className="mt-8">
        fintech and <Highlight> digital products</Highlight> that fuel business
        growth.
      </div>
    </div>
  );
}
