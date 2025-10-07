import { motion } from "framer-motion";

/* animation variants (same set you had) */
const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  appear: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  },
  whipIn: {
    hidden: { opacity: 0, x: -50, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  },
  rollIn: {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
  },
};

const CustomTextAnimation = ({
  text = "",
  type = "fadeIn",
  speed = 0.03,
  className = "",
  once = true,
  delay = 0,
  wrap = true, // keeps normal wrapping behavior by default
}) => {
  // split into tokens that include whitespace so we can render spaces normally
  const tokens = text.split(/(\s+)/); // e.g. ["Hello", " ", "world", "\n", "foo"]

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const child = animationVariants[type] || animationVariants.fadeIn;

  return (
    <motion.div
      className={`${
        wrap
          ? "whitespace-normal"
          : "whitespace-nowrap overflow-hidden text-ellipsis"
      } ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {tokens.map((tok, i) => {
        // if it's purely whitespace (spaces/newlines), render it as plain text span.
        if (/^\s+$/.test(tok)) {
          // preserve newlines and normal spacing behavior
          return (
            <span key={i} aria-hidden="true">
              {tok}
            </span>
          );
        }

        // word token -> animate as a single unit and prevent internal breaking with inline-block
        return (
          <motion.span
            key={i}
            className="inline-block" // prevents the browser from breaking the word across lines
            variants={child}
            style={{ display: "inline-block" }}
          >
            {tok}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default CustomTextAnimation;
