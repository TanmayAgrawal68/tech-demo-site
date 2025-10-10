import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TeamCard } from "@/components/ui/team/TeamCard";

export function TeamMarquee({ items = [], speed = 50, onSelect }) {
  const DUPLICATION = 3;
  const loopItems = useMemo(
    () =>
      Array.from({ length: DUPLICATION }).flatMap((_, k) =>
        items.map((it, i) => ({ ...it, __k: `${k}-${i}` }))
      ),
    [items]
  );

  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  const xOffset = useRef(0); // current x in px
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  // Compute card width
  const cardWidth = useRef(0);
  useEffect(() => {
    if (marqueeRef.current && marqueeRef.current.children.length > 0) {
      cardWidth.current =
        marqueeRef.current.children[0].offsetWidth +
        parseInt(
          getComputedStyle(marqueeRef.current.children[0]).marginRight,
          10
        );
    }
  }, [loopItems]);

  // Auto-scroll using requestAnimationFrame
  useEffect(() => {
    let rafId;
    let lastTime;

    const step = (time) => {
      if (!lastTime) lastTime = time;
      const elapsed = (time - lastTime) / 1000; // seconds
      lastTime = time;

      if (!isDragging.current) {
        xOffset.current -= speed * elapsed; // move left
        if (
          Math.abs(xOffset.current) >=
          (cardWidth.current || 1) * items.length
        ) {
          // loop back seamlessly
          xOffset.current += (cardWidth.current || 1) * items.length;
        }
        if (marqueeRef.current)
          marqueeRef.current.style.transform = `translateX(${xOffset.current}px)`;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed, items.length]);

  // Drag events
  const onPointerDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    if (marqueeRef.current) marqueeRef.current.style.transition = "none";
  };

  const onPointerMove = (e) => {
    if (!isDragging.current || !marqueeRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = clientX - dragStartX.current;
    dragStartX.current = clientX;

    xOffset.current += delta; // move marquee with pointer
    marqueeRef.current.style.transform = `translateX(${xOffset.current}px)`;
  };

  const onPointerUp = () => {
    isDragging.current = false;
    if (marqueeRef.current) marqueeRef.current.style.transition = "";
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden cursor-grab"
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={isDragging.current ? onPointerUp : undefined}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
    >
      <div
        ref={marqueeRef}
        className="flex gap-6 md:gap-10 will-change-transform"
      >
        {loopItems.map((m, i) => {
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
      </div>
    </div>
  );
}

export default TeamMarquee;
