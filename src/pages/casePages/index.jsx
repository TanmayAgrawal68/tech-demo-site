import React from "react";
import TabPageLayout from "../../layout/TabPageLayout";
import { Timeline } from "../../components/ui/timeline";
import { caseData } from "../../../data";
const data = [
  {
    title: "Vision & Challenge",
    content: (
      <div>
        <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
          In early 2024, a growing community of educators faced a recurring
          challenge — their achievements, projects, and student impact stories
          were scattered across spreadsheets, drive folders, and chat
          screenshots. There was no unified platform to capture an educator’s
          journey or showcase the success stories of their students.
        </p>

        <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
          Our goal was ambitious yet simple —{" "}
          <span className="font-semibold">create a mobile-first ecosystem</span>
          that empowers educators to record, visualize, and share their
          professional growth, while helping students track their learning
          journey and connect with mentors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=800&auto=format&fit=crop"
            alt="Educator problem brainstorming"
            className="h-44 w-full rounded-xl object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
            alt="Educators discussing challenges"
            className="h-44 w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Solution Blueprint",
    content: (
      <div>
        <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
          We conceptualized <span className="font-semibold">“Mentra”</span> — an
          integrated portfolio and mentorship platform that allows educators to
          build verified portfolios, track student growth, and foster a
          collaborative learning community.
        </p>
        <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
          Each educator gets a digital profile showcasing their milestones,
          workshops, success stories, and analytics of student outcomes —
          essentially their teaching journey turned into a living, breathing
          story.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1602526215433-ff2b69b3bb87?q=80&w=800&auto=format&fit=crop"
            alt="Solution wireframes"
            className="h-44 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1581091870627-3f89c06f1d9d?q=80&w=800&auto=format&fit=crop"
            alt="App interface preview"
            className="h-44 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Experience Flow",
    content: (
      <div>
        <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
          Our design philosophy revolved around storytelling and clarity. We
          applied{" "}
          <span className="font-semibold">Design Thinking principles</span> —
          empathize, define, ideate, prototype, test — to craft an experience
          that feels personal yet powerful.
        </p>
        <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
          The UI blends clean minimalism with human warmth: soft gradients,
          timeline-based journeys, and shareable “success story cards” for each
          milestone.
        </p>

        <div className="grid grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1629909613684-6464c61e15ab?q=80&w=800&auto=format&fit=crop"
            alt="UI moodboard"
            className="h-40 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1616627560224-23b40c0072b1?q=80&w=800&auto=format&fit=crop"
            alt="Prototype sketches"
            className="h-40 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1600267165490-094d3f6a27de?q=80&w=800&auto=format&fit=crop"
            alt="Design presentation"
            className="h-40 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Technology",
    content: (
      <div>
        <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
          The app was built with scalability and real-time data sync in mind. We
          used a modern cross-platform stack that ensures smooth performance
          across devices.
        </p>
        <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
          <li>⚙️ Frontend: React Native + Vite + Tailwind</li>
          <li>🧠 Backend: Node.js + Express + MongoDB (Atlas)</li>
          <li>☁️ Cloud: AWS Amplify + S3 for file storage</li>
          <li>🔒 Authentication: Firebase Auth + Role-based Access</li>
          <li>📈 Analytics: Custom dashboard using Recharts</li>
        </ul>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1603570419873-325a6805b21d?q=80&w=800&auto=format&fit=crop"
            alt="Tech diagram"
            className="h-44 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=800&auto=format&fit=crop"
            alt="Development team setup"
            className="h-44 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Impact",
    content: (
      <div>
        <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
          Within six months of launch,{" "}
          <span className="font-semibold">Mentra</span> onboarded over 10,000
          educators and 80,000 students across 200 institutions.
        </p>
        <p className="mb-4 text-sm text-neutral-800 dark:text-neutral-200">
          Educators reported a 45% increase in visibility and recognition for
          their achievements. Students now maintain a living timeline of their
          growth, achievements, and skill progression.
        </p>
        <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
          The platform is now expanding into global markets, building a verified
          network of educators, institutions, and learners — redefining how
          academic journeys are documented and shared.
        </p>

        <div className="grid grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            alt="User testimonials"
            className="h-40 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=800&auto=format&fit=crop"
            alt="Team success celebration"
            className="h-40 w-full rounded-lg object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
            alt="Mentorship session"
            className="h-40 w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    ),
  },
];
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
