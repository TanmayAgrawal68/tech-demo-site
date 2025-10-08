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
      className="bg-gray-200/90 text-primary dark:bg-primary-dark/30 p-4 border-1 border-secondary  flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
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
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="max-w-[360px] bg-gray-200/90  p-6 pl-7 rounded-r-sm md:ml-[-30px] ">
        <p className="text-sm text-primary  p-1 leading-[17px] ">
          {/* Founded in 2019,{" "}
          <span className="text-primary font-bold"> Techcanopy</span> brings
          together a team of experienced engineers, designers, and innovators that help businesses grow and adapt in a rapidly
          evolving digital world. <br />
          <br /> From conceptualization to launch, we focus on creating apps,
          tools, and systems that are reliable, scalable, and impactful. Over
          the years, we’ve delivered multiple products and supported clients
          across industries, combining technical expertise with a deep
          understanding of business needs. */}
          Founded in 2019,{" "}
          <span className="text-primary font-bold">Techcanopy</span> is a{" "}
          <span className="font-semibold">Product Engineering</span> company
          that brings together experienced engineers, designers, and innovators
          to help businesses grow and adapt in a rapidly evolving digital world.
          <br />
          <br />
          From conceptualization to launch, our focus is on{" "}
          <span className="text-primary font-bold">
            {" "}
            building reliable, scalable, and impactful products.
          </span>{" "}
          We specialize in turning ideas into market-ready solutions through
          end-to-end Product Engineering — blending technical excellence with a
          deep understanding of business needs.
          <br />
          <br />
          Over the years, we’ve delivered multiple products and supported
          clients across diverse industries, driving innovation and sustainable
          growth.
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3  p-2">
        {data.map((item, idx) => (
          <StatBox
            key={idx}
            title={item.title}
            icon={item.icon}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}
