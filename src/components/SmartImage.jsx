import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function SmartImage({
  children,
  src,
  alt = "",
  initialWidth = 15, // curtain start %
  finalWidth = 0, // curtain fully open %
  initialScale = 0.7,
  finalScale = 1.4,
  height = "300px",
  hoverOverlayColor = "rgba(2,6,23,0.85)", // darker/primary color
  borderRadius = "2rem",
  overlayThreshold = 0.9, // curtain % open before overlay allowed
}) {
  const containerRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  // motion values for curtain
  const clipLeft = useMotionValue(initialWidth);
  const clipRight = useMotionValue(initialWidth);
  const scale = useMotionValue(initialScale);

  const [hovered, setHovered] = useState(false);
  const [overlayReady, setOverlayReady] = useState(false);

  // watch clipLeft for progress
  useEffect(() => {
    const denom = Math.abs(initialWidth - finalWidth) || 1;
    const unsub = clipLeft.onChange((val) => {
      const prog = (initialWidth - val) / denom;
      const clamped = Math.max(0, Math.min(1, prog));
      setOverlayReady(clamped >= overlayThreshold);
    });
    return () => unsub();
  }, [clipLeft, initialWidth, finalWidth, overlayThreshold]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const start = windowHeight * 0.6;
      const end = windowHeight * 0.2;

      const clampedTop = Math.min(Math.max(rect.top, end), start);
      let progress = (start - clampedTop) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      const targetLeft = initialWidth - (initialWidth - finalWidth) * progress;
      const targetRight = initialWidth - (initialWidth - finalWidth) * progress;

      const containerWidth = containerRef.current.offsetWidth || 1;
      const maxScale = Math.min(finalScale, window.innerWidth / containerWidth);
      const targetScale = initialScale + (maxScale - initialScale) * progress;

      animate(clipLeft, targetLeft, { duration: 0.5, ease: "easeOut" });
      animate(clipRight, targetRight, { duration: 0.5, ease: "easeOut" });
      animate(scale, targetScale, { duration: 0.5, ease: "easeOut" });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    initialWidth,
    finalWidth,
    initialScale,
    finalScale,
    windowHeight,
    clipLeft,
    clipRight,
    scale,
  ]);

  const clipPath = useTransform(
    [clipLeft, clipRight],
    ([l, r]) => `inset(0 ${r}% 0 ${l}% round ${borderRadius})`
  );

  const overlayVisible = hovered && overlayReady;

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden mx-auto"
      style={{
        width: "100%",
        maxWidth: "1000px",
        height,
        scale,
        WebkitTapHighlightColor: "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Curtain mask */}
      <motion.div
        className="relative w-full h-full overflow-hidden"
        style={{ clipPath }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ borderRadius }}
          draggable={false}
        />
      </motion.div>

      {/* Overlay (opaque right → transparent left), clipped to rounded border */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: overlayVisible ? "0%" : "100%",
          opacity: overlayVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.8, 0.5, 1] }}
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${hoverOverlayColor} 100%)`,
          borderRadius,
          clipPath, // match curtain rounded mask
        }}
      />

      {/* Stats / children */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-end p-4"
        initial={{ opacity: 0, y: 12 }}
        animate={overlayVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{
          duration: 0.36,
          ease: "easeOut",
          delay: overlayVisible ? 0.1 : 0,
        }}
        style={{ pointerEvents: overlayVisible ? "auto" : "none" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
