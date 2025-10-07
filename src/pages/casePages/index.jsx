import React from "react";
import TabPageLayout from "../../layout/TabPageLayout";
import { Timeline } from "../../components/ui/timeline";
import { caseData } from "../../../data";

import { useParams } from "react-router-dom";

// src/components/HeroSection.jsx
export function HeroSection({
  title,
  subtitle,
  bgImage,
  overlayColor = "rgba(0,0,0,0.6)", // default dark overlay
  className = "",
}) {
  return (
    <section
      className={`relative w-full ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-base text-white/90 max-w-lg mx-auto md:mx-0">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

function CaseStudies() {
  const { slug } = useParams();
  const { heroTitle, heroSubtitle, heroImg, timelineData } = caseData[slug];
  console.log("hero : ", heroTitle);
  return (
    <TabPageLayout>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        bgImage={heroImg}
        overlayColor="rgba(0,0,0,0.5)"
      />
      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </TabPageLayout>
  );
}

export default CaseStudies;
