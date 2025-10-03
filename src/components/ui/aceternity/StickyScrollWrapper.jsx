import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScrollWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const linearGradients = [
    "linear-gradient(to bottom, var(--background), #f3f3f3)",
    "linear-gradient(to bottom, #f3f3f3, #a3a3a3)",
    "linear-gradient(to bottom, #a3a3a3, #cfcfcf)",
    "linear-gradient(to bottom, #cfcfcf, #e5e5e5)",
    "linear-gradient(to bottom, #e5e5e5, var(--background))",
  ];

  const backgroundColors = [
    "var(--background)",
    "#f3f3f3",
    "#a3a3a3",
    "#cfcfcf",
    "var(--background)",
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionCount = React.Children.count(children);
    const sectionBreakpoints = Array.from(
      { length: sectionCount },
      (_, i) => i / sectionCount
    );

    const closestIndex = sectionBreakpoints.reduce((acc, point, i) => {
      const dist = Math.abs(latest - point);
      return dist < Math.abs(latest - sectionBreakpoints[acc]) ? i : acc;
    }, 0);

    setActiveSection(closestIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(
      linearGradients[activeSection % linearGradients.length]
    );
  }, [activeSection, linearGradients]);

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor:
          backgroundColors[activeSection % backgroundColors.length],
        backgroundImage: backgroundGradient,
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(
        "relative w-full min-h-screen overflow-hidden scrollbar-hide",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
