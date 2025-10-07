import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function TechStackDraggable({
  cardWidth = "w-24 md:w-42",
  cardMinHeight = "min-h-42 md:min-h-42",
  imageSize = "h-16 w-16 md:h-20 md:w-20",
  titleSize = "text-base md:text-lg",
}) {
  const items = [
    {
      title: "React",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      title: "Next.js",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "TypeScript",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      title: "Node.js",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Express",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      title: "PostgreSQL",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    },
    {
      title: "MongoDB",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      title: "Redis",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
    },
    {
      title: "Docker",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    },
    {
      title: "Kubernetes",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      title: "AWS",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      title: "Tailwind CSS",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      title: "Vite",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
    },
    {
      title: "Prisma",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    },
    {
      title: "GraphQL",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    },
  ];

  const BASE_CARD_CLASS = `absolute ${cardWidth} ${cardMinHeight}`;
  const IMAGE_CLASS = `pointer-events-none relative z-10 mx-auto ${imageSize} object-contain`;
  const TITLE_CLASS = `mt-3 md:mt-4 text-center ${titleSize} font-semibold text-primary dark:text-neutral-300`;

  const desktopPositions = [
    "top-8 left-[15%] rotate-[-6deg]",
    "top-40 left-[22%] rotate-[8deg]",
    "top-16 left-[38%] rotate-[4deg]",
    "top-32 left-[52%] rotate-[-3deg]",
    "top-56 left-[46%] rotate-[10deg]",
    "top-20 right-[38%] rotate-[2deg]",
    "top-40 right-[28%] rotate-[-8deg]",
    "top-8 right-[18%] rotate-[6deg]",
    "top-72 left-[30%] rotate-[-5deg]",
    "top-80 left-[48%] rotate-[7deg]",
    "top-64 right-[22%] rotate-[-6deg]",
    "top-24 left-[26%] rotate-[-2deg]",
    "top-14 right-[35%] rotate-[4deg]",
    "top-40 right-[45%] rotate-[10deg]",
    "top-60 right-[10%] rotate-[-4deg]",
  ];

  const mobilePositions = [
    "top-30 left-[45%] rotate-[2deg]",
    "top-30 left-[30%] rotate-[-6deg]",
    "top-28 left-[20%] rotate-[6deg]",
    "top-55 left-[52%] rotate-[-8deg]",
    "top-40 left-[65%] rotate-[-4deg]",
    "top-56 left-[39%] rotate-[8deg]",
    "top-72 left-[22%] rotate-[-2deg]",
    "top-33 left-[75%] rotate-[6deg]",
    "top-96 left-[28%] rotate-[-5deg]",
    "top-[28rem] left-[48%] rotate-[7deg]",
    "top-[25rem] left-[22%] rotate-[-6deg]",
    "top-[15rem] left-[60%] rotate-[4deg]",
    "top-[28rem] left-[35%] rotate-[-2deg]",
    "top-[34rem] left-[42%] rotate-[10deg]",
    "top-[30rem] left-[56%] rotate-[-4deg]",
  ];

  const getPositionClasses = (index) => {
    const desktop = desktopPositions[index % desktopPositions.length];
    const mobile = mobilePositions[index % mobilePositions.length];
    return `${BASE_CARD_CLASS} ${mobile} md:${desktop.replace(/\s+/g, " md:")}`;
  };

  return (
    <section className="relative w-[screen] py-16 md:py-24 ">
      <div className="mx-auto w-full ">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Tech Stack
          </h2>
          <p className="mt-3 md:mt-4 text-foreground/70 max-w-2xl mx-auto">
            The ingredients that makes the magic happen!
          </p>
        </div>
      </div>

      <DraggableCardContainer className="relative mx-auto flex h-[110vh] md:h-[90vh] w-full items-center justify-center overflow-clip">
        <p className="pointer-events-none absolute top-1/2 z-0 mx-auto w-full -translate-y-1/2 px-6 text-center text-2xl font-black text-neutral-300 md:text-4xl dark:text-neutral-800">
          We deliver awesomeness.
        </p>
        <div className="pointer-events-none absolute inset-0 " />
        {items.map((item, index) => (
          <DraggableCardBody
            key={item.title + index}
            className={getPositionClasses(index)}
          >
            <img src={item.image} alt={item.title} className={IMAGE_CLASS} />
            <h3 className={TITLE_CLASS}>{item.title}</h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}

export default TechStackDraggable;
