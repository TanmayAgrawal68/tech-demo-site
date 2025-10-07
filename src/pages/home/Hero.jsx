import React, { useState, useCallback, useRef, useEffect } from "react";
import { AnimatePresence, motion as M } from "motion/react";
import { NavbarButton } from "../../components/ui/resizable-navbar";
import { FlipWordsDemo } from "../../components/ui/aceternity/FlipWordsDemo";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { HoverBorderGradientDemo } from "../../components/ui/aceternity/HoverButtonGradientDemo";
import { Button } from "@/components/ui/button";
import { CtaHeroButton } from "../../components/ui/aceternity/CtaHeroButton";
import { CtaHeroButtonSecondary } from "../../components/ui/aceternity/CtaHeroButtonSecondary";
import { HeroText } from "./HeroText";
import { Meteors } from "../../components/ui/meteors";
import { InfiniteLogoCarousel } from "../../components/ui/InfiniteLogoCorousal";
import { sampleTechLogos, techAreas } from "../../../data";
import { BookMeetingModal } from "../../components/BookMeeting";

function Hero() {
  const heroRef = useRef(null);
  const defaultPosition = {
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  };

  const [mousePosition, setMousePosition] = useState(defaultPosition);
  const [isHovering, setIsHovering] = useState(false);
  const [meetingModal, setMeetingModal] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (!isHovering) {
        setMousePosition({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isHovering]);

  useEffect(() => {
    // Set initial spotlight position at center of hero section
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  }, []);

  const moveToCenter = useCallback(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const spotlight = heroRef.current.querySelector(".spotlight");
      if (spotlight) {
        spotlight.style.transition =
          "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
        spotlight.style.transform = `translate3d(${rect.width / 2 - 1000}px, ${
          rect.height / 2 - 1000
        }px, 0)`;

        setTimeout(() => {
          spotlight.style.transition = "none";
        }, 1200);
      }
      setMousePosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="hero-section relative min-h-[1200px] w-full overflow-hidden bg-background mt-[-100px]"
      onMouseMove={(e) => {
        if (!heroRef.current) return;

        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Only update if mouse is within hero section bounds
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          const spotlight = heroRef.current.querySelector(".spotlight");
          if (spotlight) {
            spotlight.style.transition = "none";
            spotlight.style.transform = `translate3d(${x - 1000}px, ${
              y - 1000
            }px, 0)`;
          }
          setMousePosition({ x, y });
        }
      }}
      onMouseLeave={moveToCenter}
    >
      {/* Spotlight background */}
      <div
        className="spotlight pointer-events-none absolute top-0 left-0"
        style={{
          width: "2000px",
          height: "2000px",
          background: `radial-gradient(
            50% 50% at 50% 50%,
            var(--secondary) 0%,
            transparent 60%
          )`,
          opacity: 0.4,
          transform: `translate3d(${mousePosition.x - 1000}px, ${
            mousePosition.y - 1000
          }px, 0)`,
        }}
      />
      <AnimatePresence>
        {meetingModal && (
          <BookMeetingModal onClose={() => setMeetingModal(false)} />
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center ">
        {/* <FlipWordsDemo /> */}
        <HeroText />
        <div className="pt-8 pb-6 flex flex-col md:flex-row justify-center items-center md: gap-10 w-full ">
          {/* <Button variant="secondary">Book a meeting</Button> */}
          <CtaHeroButton
            text="Book a meeting"
            handleClick={() => setMeetingModal(true)}
          />
          <CtaHeroButtonSecondary text="Explore " />
        </div>
      </div>
      {/* logo corousal */}
      <div className="w-full mt-[-120px] ">
        <InfiniteLogoCarousel items={techAreas} />
      </div>
    </div>
  );
}

export default Hero;
