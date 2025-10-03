import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { TeamCard } from "@/components/ui/team/TeamCard";

export function TeamMarquee({ items = [], speed = 90, onSelect }) {
  const controls = useAnimationControls();
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate items sufficiently to ensure seamless loop
  const DUPLICATION = 3;
  const loopItems = useMemo(
    () =>
      Array.from({ length: DUPLICATION }).flatMap((_, k) =>
        items.map((it, i) => ({ ...it, __k: `${k}-${i}` }))
      ),
    [items]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const start = () => {
      // Animate continuously from 0% to -33.333% (since we duplicate 3x) for a seamless loop
      controls.start({
        x: ["0%", "-33.333%"],
        transition: { ease: "linear", duration: speed, repeat: Infinity },
      });
    };
    if (!isHovering) start();
    return () => controls.stop();
  }, [controls, isHovering, speed]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseEnter={() => {
        setIsHovering(true);
        controls.stop();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <motion.div
        className="flex gap-6 md:gap-10 will-change-transform"
        animate={controls}
        initial={{ x: "0%" }}
      >
        {loopItems.map((m, i) => {
          // Keep cards perfectly upright in the carousel
          const t = (i % items.length) / items.length - 0.5;
          const arcDepth = 0;
          const y = arcDepth * (1 - Math.cos(t));
          return (
            <div
              key={`${m.name}-${m.__k}-${i}`}
              style={{ transform: `translateY(${y}px)` }}
            >
              <TeamCard
                member={m}
                onClick={() => onSelect?.(m)}
                interactive={false}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TeamMarquee;
