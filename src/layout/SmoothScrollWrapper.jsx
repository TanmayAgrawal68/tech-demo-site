import React, { useEffect, useMemo, useRef, useState } from "react";

function SmoothScrollWrapper({ children }) {
  const [sectionIndex, setSectionIndex] = useState(0);
  const rafIdRef = useRef(null);
  const prevScrollBehaviorRef = useRef("");

  // Curated set of high-end light gradients (very subtle)
  const gradients = useMemo(
    () => [
      "linear-gradient(135deg, #ffffff 0%, #f7f7f5 100%)",
      "linear-gradient(135deg, #f9fafb 0%, #eef2f3 100%)",
      "linear-gradient(135deg, #fdfcfb 0%, #e8edf2 100%)",
      "linear-gradient(135deg, #fffdf7 0%, #f5f7fa 100%)",
      "linear-gradient(135deg, #fafafa 50%, #f2f0ec 100%)",
    ],
    []
  );

  // Crossfade uses layered gradients; no single background variable needed

  useEffect(() => {
    // Enable smooth scrolling globally and restore on cleanup
    const root = document.documentElement;
    prevScrollBehaviorRef.current = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";

    return () => {
      root.style.scrollBehavior = prevScrollBehaviorRef.current || "";
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      rafIdRef.current = requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight || 1;
        const y = window.scrollY || window.pageYOffset || 0;
        const index = Math.round(y / viewportHeight);
        setSectionIndex((prev) => (prev !== index ? index : prev));
        ticking = false;
      });
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        zIndex: 0,
        minHeight: "100%",
        width: "100%",
        // Create a new stacking context so fixed bg can sit behind content
        isolation: "isolate",
      }}
    >
      {/* Crossfading gradient layers */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {gradients.map((gradient, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              inset: 0,
              background: gradient,
              opacity: idx === sectionIndex % gradients.length ? 1 : 0,
              transition: "opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "opacity",
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

export default SmoothScrollWrapper;
