import React from "react";
import Hero from "./Hero";
import { SmartImage } from "../../components/SmartImage";
import StatsGrid from "./StatBox";
import { homeData } from "../../../data";
import { StickyScrollWrapper } from "../../components/ui/aceternity/StickyScrollWrapper";
import { ImageStack } from "./CardStack";
import { Tabs } from "../../components/ui/tabs";
import { TabContent } from "../../components/ui/TabContent";
import { FeatureSection } from "./FeatureSection";
import { TechStack } from "./TechStack";
import { TechStackDraggable } from "./TechStackDraggable";
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
import { DraggableCardDemo } from "../../components/ui/aceternity/DraggableCardDemo";
import InfiniteTextCorousal from "../../components/InfiniteTextCorousal";
import team from "../../assets/team.webp";
// tabs section reserved for future use
import CustomTextAnimation from "../../components/CustomTextAnimation";
function Home() {
  return (
    <>
      <Hero />
      <div className="mt-[-100px]">
        <SmartImage
          src={team}
          initialScale={1}
          finalScale={1.3}
          initialWidth={5}
          finalWidth={0}
          height="420px"
        >
          <div className="hidden md:block ">
            <StatsGrid data={homeData.statsData} />
          </div>
        </SmartImage>
      </div>
      <div className="flex items-center mt-16 justify-center  md:hidden mt">
        <StatsGrid data={homeData.statsData} />
      </div>
      <FeatureSection />
      <HeroParallaxDemo />
      {/* <TechStack /> */}
      <TechStackDraggable />
      <Team />
      {/* Removed demo from production UI */}
      {/* <Testimonials /> */}
      <div className="mt-28 mb-20 flex justify-center items-center flex-col">
        <CustomTextAnimation
          text="Hear the Buzz"
          type="fadeIn"
          className="text-primary font-bold text-xl md:text-4xl lg:text-5xl"
        />
        <CustomTextAnimation
          type="whipIn"
          text="Stories from the Frontline"
          className="mt-2 text-primary/80"
        />

        <AnimatedTestimonialsDemo />
      </div>
      <div className="pt-10 pb-12 mt-20 mb-22">
        <InfiniteTextCorousal
          text={
            <p>
              <span className="text-gray-500">Empowering</span> Customers,
              <span className="text-gray-500">Elevating</span> Success
            </p>
          }
          speed="normal"
          loop={true}
          gapPx={100}
          direction="left"
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-secondary"
          fontFamily="'Inter', sans-serif"
        ></InfiniteTextCorousal>
      </div>
      <Footer />
    </>
  );
}

export default Home;
