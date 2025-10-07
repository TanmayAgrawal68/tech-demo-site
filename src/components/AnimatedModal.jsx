import { FaTimes } from "react-icons/fa";
import { useResponsiveAnimation } from "../hooks/ResponsiveHook";
import { motion } from "framer-motion";
export const AnimatedModal = ({ children, onClose }) => {
  const isMobile = useResponsiveAnimation();
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`relative ${
          isMobile ? "w-full max-w-none rounded-t-3xl" : "max-w-lg rounded-2xl"
        } w-[90%] bg-background p-6 shadow-xl`}
        initial={
          isMobile
            ? { y: "100%", opacity: 0 }
            : { y: 50, opacity: 0, scale: 0.95 }
        }
        animate={
          isMobile ? { y: 0, opacity: 1 } : { y: 0, opacity: 1, scale: 1 }
        }
        exit={
          isMobile
            ? { y: "100%", opacity: 0 }
            : { y: 30, opacity: 0, scale: 0.9 }
        }
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition"
        >
          <FaTimes size={18} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};
