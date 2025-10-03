import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export const CardStack = ({ items, offset = 10, scaleFactor = 0.1 }) => {
  const [cards, setCards] = useState(items || []);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()); // move last card to front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-full  h-full flex justify-center items-center">
      {cards?.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute h-[80%] aspect-[3/4] bg-white dark:bg-black rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
            {card.content}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
