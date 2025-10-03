import React from "react";
import { InfiniteLogoCarousel } from "../../components/ui/InfiniteLogoCorousal";
import { sampleTechLogos, techAreas } from "../../../data";

export function TechStack() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Our Tech Stack
          </h2>
          <p className="mt-3 md:mt-4 text-foreground/70 max-w-2xl mx-auto">
            Trusted technologies we use to craft scalable solutions.
          </p>
        </div>
        <div className="w-full">
          <InfiniteLogoCarousel items={techAreas} />
        </div>
      </div>
    </section>
  );
}

export default TechStack;


