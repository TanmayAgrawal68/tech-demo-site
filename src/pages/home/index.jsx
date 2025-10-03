import React from "react";
import Hero from "./Hero";
import Layout from "../../layout/Layout";
import { SmartImage } from "../../components/SmartImage";
import StatsGrid from "./StatBox";
import { homeData } from "../../../data";
import { StickyScrollWrapper } from "../../components/ui/aceternity/StickyScrollWrapper";
import { ImageStack } from "./CardStack";
import { Tabs } from "../../components/ui/tabs";
import { TabContent } from "../../components/ui/TabContent";
import { FeatureSection } from "./FeatureSection";
import { TechStack } from "./TechStack";
import { Team } from "./Team";
import { Testimonials } from "./Testimonials";
import Footer from "../../layout/Footer";
import {
  FaUsers,
  FaDollarSign,
  FaComments,
  FaShoppingCart,
  FaChartLine,
  FaHeart,
  FaStar,
  FaBell,
  FaGift,
} from "react-icons/fa";
import { HeroParallaxDemo } from "../../components/ui/aceternity/HeroParallaxDemo";
import { AnimatedTestimonialsDemo } from "../../components/ui/aceternity/AnimatedTestimonialDemo";

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

function Home() {
  return (
    <Layout>
      <Hero />
      <div className="mt-[-200px]">
        <SmartImage
          src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Concept car"
          initialScale={1.2}
          finalScale={1.5}
          initialWidth={5}
          finalWidth={0}
          height="420px"
        >
          <StatsGrid data={homeData.statsData} />
        </SmartImage>
      </div>
      {/* <div className="relative mt-[100px]">
        <StickyScrollWrapper>
          <section className="relative">
            <div className="min-h-[250vh]">
              <div className="sticky top-0 left-0 right-0 h-screen">
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="absolute inset-0 backdrop-blur-sm bg-background/95" />
                  <div className="relative w-full px-4 md:px-8 py-12">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
                      <div className="w-full lg:w-1/2">
                        <ImageStack />
                      </div>
                      <div className="w-full lg:w-1/2">
                        <Tabs tabs={tabs} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </StickyScrollWrapper>
      </div> */}
      <FeatureSection />
      <HeroParallaxDemo />
      <TechStack />
      <Team />
      {/* <Testimonials /> */}
      <AnimatedTestimonialsDemo />
      <Footer />
    </Layout>
  );
}

export default Home;
