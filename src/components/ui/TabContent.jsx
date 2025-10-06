import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const TabContent = ({ links = [] }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full relative  p-6 md:p-10 text-card-foreground">
      <div className="flex flex-col gap-6 md:gap-8">
        {links?.map((link) => (
          <motion.div
            key={link.title}
            className="group cursor-pointer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => handleClick(link.path)}
          >
            <div className="block text-lg md:text-2xl font-semibold transition-colors text-card-foreground group-hover:text-secondary">
              {link.title}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-secondary" />
            </div>
            {link.description && (
              <p className="text-sm md:text-base text-card-foreground/70 mt-1">
                {link.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
