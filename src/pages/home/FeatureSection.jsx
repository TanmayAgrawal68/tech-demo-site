import React from "react";
import { StickyScrollWrapper } from "../../components/ui/aceternity/StickyScrollWrapper";
import { ImageStack } from "./CardStack";
import { Tabs } from "../../components/ui/tabs";
import { TabContent } from "../../components/ui/TabContent";
import { homeData } from "../../../data";

const tabs = [
  {
    title: "Product",
    value: "product",
    content: <TabContent links={homeData.productLinks} />,
  },
  {
    title: "Services",
    value: "services",
    content: <TabContent links={homeData.serviceLinks} />,
  },
];

export function FeatureSection() {
  return (
    <section className="relative   mt-[300px] ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Powerful features to grow with you
          </h2>
          <p className="mt-3 md:mt-4 text-foreground/70 max-w-2xl mx-auto">
            Explore our product capabilities and service offerings in a single,
            delightful interface.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-36 ">
          <div className="w-full ">
            <ImageStack />
          </div>
          <div className="w-full">
            <Tabs
              tabs={tabs}
              containerClassName="gap-3"
              tabClassName="text-sm md:text-base"
              activeTabClassName="bg-muted"
              contentClassName=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;


