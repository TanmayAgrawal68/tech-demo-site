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

// tabs section reserved for future use

function Home() {
  return (
    <>
      <Hero />
      <div className="mt-[-100px]">
        <SmartImage
          src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Concept car"
          initialScale={1}
          finalScale={1.3}
          initialWidth={5}
          finalWidth={0}
          height="420px"
        >
          <StatsGrid data={homeData.statsData} />
        </SmartImage>
      </div>
      <FeatureSection />
      <HeroParallaxDemo />
      {/* <TechStack /> */}
      <TechStackDraggable />
      <Team />
      {/* Removed demo from production UI */}
      {/* <Testimonials /> */}
      <AnimatedTestimonialsDemo />
      <Footer />
    </>
  );
}

export default Home;
