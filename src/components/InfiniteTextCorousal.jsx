// // src/components/InfiniteTextCorousal.jsx
// import React, { useEffect, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";
// import clsx from "clsx";

// /**
//  * InfiniteTextCorousal Component
//  *
//  * Props:
//  * @param {string} text - The text to display
//  * @param {string} className - Custom text styling
//  * @param {string} fontFamily - Font family (default: inherit)
//  * @param {string | number} speed - Speed of scroll (default: "normal" = 50s)
//  * @param {boolean} loop - Whether to loop infinitely
//  * @param {"left" | "right"} direction - Scroll direction
//  */
// const InfiniteTextCorousal = ({
//   text = "TechCanopy brings innovation alive 🚀",
//   className = "",
//   fontFamily = "inherit",
//   speed = "normal",
//   loop = true,
//   direction = "left",
// }) => {
//   const marqueeRef = useRef(null);
//   const controls = useAnimation();

//   const speedMap = {
//     slow: 80,
//     normal: 50,
//     fast: 25,
//   };

//   const duration = typeof speed === "number" ? speed : speedMap[speed] || 50;

//   const motionVariants = {
//     animate: {
//       x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
//       transition: {
//         x: {
//           repeat: loop ? Infinity : 0,
//           repeatType: "loop",
//           ease: "linear",
//           duration,
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     controls.start("animate");
//   }, [controls, direction, loop, duration]);

//   return (
//     <div
//       className={clsx(
//         "relative overflow-hidden w-full flex items-center",
//         "bg-transparent",
//         "dark:text-white text-black"
//       )}
//       style={{ fontFamily }}
//     >
//       <motion.div
//         ref={marqueeRef}
//         variants={motionVariants}
//         animate={controls}
//         className={clsx(
//           "whitespace-nowrap flex gap-8 min-w-max px-4",
//           className
//         )}
//       >
//         {/* Duplicate text for seamless looping */}
//         <span>{text}</span>
//         <span>{text}</span>
//       </motion.div>
//     </div>
//   );
// };

// export default InfiniteTextCorousal;
// src/components/InfiniteTextCorousal.jsx
// src/components/InfiniteTextCorousal.jsx
import React, { useLayoutEffect, useRef, useState } from "react";

/**
 * InfiniteTextCorousal (Tailwind-only)
 *
 * Props:
 *  - text: string
 *  - className: tailwind classes for text styling
 *  - fontFamily: string (e.g. "'Inter', sans-serif")
 *  - speed: "slow" | "normal" | "fast" | number (seconds per item-shift)
 *  - direction: "left" | "right"
 *  - gapPx: number (optional extra gap between items, default 16 -> px-4)
 */
export default function InfiniteTextCorousal({
  text = "TechCanopy builds intelligent SaaS experiences 🚀",
  className = "",
  fontFamily = "inherit",
  speed = "normal",
  direction = "left",
  gapPx = 32,
}) {
  const containerRef = useRef(null);
  const itemRef = useRef(null); // used for measuring one item
  const [itemWidth, setItemWidth] = useState(0);
  const [repeats, setRepeats] = useState(2);

  const speedMap = { slow: 80, normal: 50, fast: 25 };
  const duration =
    typeof speed === "number" ? speed : speedMap[speed] ?? speedMap.normal;
  const animationName = direction === "left" ? "marquee" : "marquee-rev";

  // measure and compute number of repeats
  useLayoutEffect(() => {
    function measure() {
      if (!containerRef.current || !itemRef.current) return;
      const containerW = containerRef.current.clientWidth || 0;
      const singleW = itemRef.current.clientWidth || 0;

      if (!singleW) {
        setRepeats(2);
        setItemWidth(0);
        return;
      }

      // ensure the repetitions cover the viewport + one extra copy
      const needed = Math.ceil(containerW / singleW) + 2;
      setRepeats(Math.max(2, needed));
      setItemWidth(singleW);
    }

    // measure now, then observe/reattach
    measure();

    // re-measure when fonts load (important for webfonts)
    if (document?.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (itemRef.current) ro.observe(itemRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
    // re-run when text/font/className changes
  }, [text, fontFamily, className, gapPx]);

  // dynamic keyframes string (uses CSS var --marquee-distance which is set inline)
  const keyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-1 * var(--marquee-distance))); }
    }
    @keyframes marquee-rev {
      0% { transform: translateX(calc(-1 * var(--marquee-distance))); }
      100% { transform: translateX(0); }
    }
  `;

  // Compose the repeated items. We use inline-block with a fixed gap (gapPx)
  const itemClass = `inline-block px-[${gapPx}px] ${className}`; // px via arbitrary value

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full select-none"
      style={{ fontFamily }}
      aria-hidden={false}
    >
      {/* inject dynamic keyframes (small inline style) */}
      <style>{keyframes}</style>

      <div
        className="flex whitespace-nowrap items-center p-2"
        style={{
          // CSS var used by keyframes. must include px unit.
          "--marquee-distance": `${itemWidth}px`,
          animation: `${animationName} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {/* render repeated copies (first itemRef used to measure) */}
        {Array.from({ length: repeats }).map((_, i) => (
          <span
            key={i}
            ref={i === 0 ? itemRef : null}
            className={`inline-block ${className}`}
            style={{ paddingLeft: gapPx, paddingRight: gapPx }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
