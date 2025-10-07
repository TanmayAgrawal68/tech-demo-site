import { motion } from "framer-motion";

const TyperWriterParagraph = ({
  about,
  className = "",
  speed = 0.03, // seconds between characters
  wrap = true, // if false → prevents text wrapping
}) => {
  const letters = Array.from(about);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: speed, // controls typing speed
        delayChildren: 0.1 * i,
      },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: { duration: 0.05 },
    },
  };

  return (
    <motion.div
      className={`text-md leading-relaxed text-foreground/80 ${className} ${
        wrap
          ? "whitespace-normal break-words"
          : "whitespace-nowrap overflow-hidden text-ellipsis"
      }`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TyperWriterParagraph;
