import React from "react";
import { motion, useMotionValue, animate } from "framer-motion";

// Single Stat Box Component
function StatBox({ title, icon: Icon, value }) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState(value || 0);

  React.useEffect(() => {
    if (typeof value === "number") {
      const controls = animate(motionValue, value, {
        duration: 1.5,
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
      return () => controls.stop();
    } else {
      setDisplayValue(value);
    }
  }, [value, motionValue]);

  return (
    <motion.div
      className="bg-secondary/80 text-primary-foreground dark:bg-primary-dark/30 p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      {Icon && <Icon className="w-6 h-6 mb-2" />}
      <span className="font-bold text-sm">{displayValue}</span>
      {title && <span className="text-sm text-center">{title}</span>}
    </motion.div>
  );
}

// Stats Grid Component
export default function StatsGrid({ data }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
      {data.map((item, idx) => (
        <StatBox
          key={idx}
          title={item.title}
          icon={item.icon}
          value={item.value}
        />
      ))}
    </div>
  );
}
