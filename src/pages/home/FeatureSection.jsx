import React from "react";
import { StickyScrollWrapper } from "../../components/ui/aceternity/StickyScrollWrapper";
import { ImageStack } from "./CardStack";
import { Tabs } from "../../components/ui/tabs";
import { TabContent } from "../../components/ui/TabContent";
import { homeData } from "../../../data";
import { TextAnimate } from "../../components/ui/TextAnimate";
import CustomTextAnimation from "../../components/CustomTextAnimation";
const tabs = [
  {
    title: "Product Engineering",
    value: "product",
    content: <TabContent links={homeData.productLinks} />,
  },
  {
    title: "Domain",
    value: "services",
    content: <TabContent links={homeData.serviceLinks} />,
  },
];

export function FeatureSection() {
  return (
    <section id="feature-section" className="relative   mt-[300px] mb-24 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <div className="title-main font-semibold tracking-tight text-foreground flex justify-center">
            <CustomTextAnimation
              text="Powerful features to grow with you"
              type="whipIn"
              speed={0.1}
            />
          </div>
          <CustomTextAnimation
            text=" Explore our product capabilities and service offerings in a single, delightful interface."
            type="whipIn"
            speed={0.1}
            className="title-main-sub"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-36  ">
          <div className="w-full ">
            <ImageStack />
          </div>
          <div className="w-full mt-[-56px] md:mt-[-48px] ">
            <Tabs
              tabs={tabs}
              containerClassName="gap-3"
              tabClassName="text-sm md:text-base hover:bg-secondary/50 "
              activeTabClassName="bg-muted"
              contentClassName="overflow-scroll scrollbar-hide max-h-[80vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
