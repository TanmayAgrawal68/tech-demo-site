import React, { useRef, useEffect, useState } from "react";

export function InfiniteLogoCarousel({ items, speed = 0.8 }) {
  const containerRef = useRef();
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    let repeatedItems = [];
    let totalWidth = 0;

    while (totalWidth < containerWidth * 2) {
      for (let item of items) {
        repeatedItems.push(item);
        totalWidth += 220; // estimated width including spacing
      }
    }
    setVisibleItems(repeatedItems);
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let pos = 0;

    const animate = () => {
      pos -= speed;
      if (container.scrollWidth / 2 + pos <= 0) pos = 0;
      container.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [visibleItems, speed]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex items-center space-x-28"
        style={{ whiteSpace: "nowrap" }}
      >
        {visibleItems.map((item, idx) => {
          const Logo = item.logo; // Treat logo as a React component
          return (
            <div
              key={idx}
              className=" flex-shrink-0 flex items-center space-x-2 text-xl md:text-2xl lg:text-4xl  transition-transform duration-500 ease-in-out hover:scale-110  "
            >
              {/* Render logo if present */}
              {Logo && <Logo className="h-6 w-6 sm:h-6 sm:w-6 text-gray-700" />}
              {/* Render text */}
              <span style={item.style}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
