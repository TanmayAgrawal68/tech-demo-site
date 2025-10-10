"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [activeTab, setActiveTab] = useState(propTabs[0]);
  const [hovering, setHovering] = useState(false);

  return (
    <>
      {/* Tab headers with stacking effect */}
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full ",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
              transform: hovering ? `translateZ(${-idx * 10}px)` : "none",
            }}
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="activeTab"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content - simple fade transition */}
      <motion.div
        key={activeTab.value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "mt-2  bg-none  from-card  to-100% rounded-md  ",
          contentClassName
        )}
      >
        {activeTab.content}
      </motion.div>
    </>
  );
};
