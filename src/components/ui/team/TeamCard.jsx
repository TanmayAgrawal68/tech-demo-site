import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function TeamCard({ member, onClick, className, interactive = true }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 300, damping: 26 });
  const sy = useSpring(y, { stiffness: 300, damping: 26 });
  const rotateX = useTransform(sy, [0, 1], [6, -6]);
  const rotateY = useTransform(sx, [0, 1], [-8, 8]);
  const glowOpacity = useTransform(sx, [0, 0.5, 1], [0.0, 0.2, 0.0]);
  const glowX = useTransform(sx, [0, 1], ["10%", "90%"]);

  function onMove(e) {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative w-[300px] h-[420px] md:w-[320px] md:h-[460px] rounded-2xl",
        "border border-border bg-card text-card-foreground shadow-lg overflow-hidden",
        "cursor-pointer select-none",
        className
      )}
      style={
        interactive
          ? { rotateX, rotateY, transformStyle: "preserve-3d" }
          : { transformStyle: "preserve-3d" }
      }
      onMouseMove={interactive ? onMove : undefined}
      onMouseLeave={interactive ? onLeave : undefined}
      whileHover={interactive ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={onClick}
    >
      <img
        src={member.avatar}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "translateZ(0)" }}
      />
      {interactive ? (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(400px 200px at var(--gx,50%) 50%, transparent, transparent 60%)",
            opacity: glowOpacity,
            "--gx": glowX,
          }}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-lg text-accent-foreground font-bold leading-tight">
          {member.name}
        </div>
        <div className="text-md italic  text-accent-foreground">
          {member.role}
        </div>
      </div>
    </motion.div>
  );
}

export default TeamCard;
