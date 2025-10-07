import React, { useRef } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Linkedin, Twitter, Github, Dribbble, Globe } from "lucide-react";
import { IconBrandBehance } from "@tabler/icons-react";
import { motion } from "framer-motion";
import TyperWriterParagraph from "../../TypeWriterParagraph";
import CustomTextAnimation from "../../CustomTextAnimation";

export function TeamModal({ open, onClose, member }) {
  const cardX = useMotionValue(0.5);
  const cardY = useMotionValue(0.5);
  const sx = useSpring(cardX, { stiffness: 300, damping: 28 });
  const sy = useSpring(cardY, { stiffness: 300, damping: 28 });
  // Reduce/disable tilt so images are not slanted
  const rotateX = useTransform(sy, [0, 1], [2, -2]);
  const rotateY = useTransform(sx, [0, 1], [-2, 2]);

  const stackRef = useRef(null);
  function onMove(e) {
    if (!stackRef.current) return;
    const r = stackRef.current.getBoundingClientRect();
    cardX.set((e.clientX - r.left) / r.width);
    cardY.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    cardX.set(0.5);
    cardY.set(0.5);
  }

  const social = member?.socials || [];
  const about = member?.aboutLong || member?.about;
  const quote = member?.quote || "";
  const signature = member?.signature || member?.name || "";

  return (
    <AnimatePresence>
      {open && (
        <Motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <Motion.div
            className="relative z-10 w-[min(94vw,980px)] rounded-2xl border border-border bg-card text-card-foreground shadow-xl overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 220 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
                <div
                  ref={stackRef}
                  onMouseMove={onMove}
                  onMouseLeave={onLeave}
                  className="relative w-full aspect-[3/4] perspective-[1200px]"
                >
                  <Motion.div
                    className="absolute inset-0 rounded-xl overflow-hidden shadow-xl"
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-0 rounded-xl translate-z-[60px] border border-border bg-transparent">
                      <img
                        src={member?.avatar}
                        alt={member?.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-xl translate-z-[40px] border border-border bg-transparent" />
                    <div className="absolute inset-0 rounded-xl translate-z-[20px] border border-border bg-transparent" />
                  </Motion.div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {member?.name}
                  </h3>
                  <p className="text-sm text-foreground/70">{member?.role}</p>
                  {social.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {social.map((s, i) => {
                        const label = (s.label || "").toLowerCase();
                        const Icon = label.includes("linkedin")
                          ? Linkedin
                          : label.includes("twitter") || label === "x"
                          ? Twitter
                          : label.includes("github")
                          ? Github
                          : label.includes("dribbble")
                          ? Dribbble
                          : label.includes("behance")
                          ? IconBrandBehance
                          : Globe;
                        return (
                          <a
                            key={`${s.href}-${i}`}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs hover:bg-accent transition-colors"
                          >
                            <Icon className="w-4 h-4" aria-hidden="true" />
                            <span>{s.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-3 p-6 mt-4 md:p-8">
                {about && (
                  <div className="text-md leading-relaxed text-foreground/80 whitespace-pre-wrap">
                    <CustomTextAnimation
                      text={about}
                      speed={0.01}
                      type="fadeIn"
                    />
                  </div>
                )}
                {quote && (
                  <div className="mt-6 border-l-2 border-border pl-4 italic text-secondary font-bold">
                    <CustomTextAnimation
                      text={quote}
                      speed={0.1}
                      type="bounceIn"
                      className=""
                    />
                  </div>
                )}
                <div className="mt-8 flex items-center justify-between">
                  <div className="text-xs text-foreground/60">
                    {/* Click outside or press Esc to close */}
                  </div>
                  <div
                    className="text-5xl underline underline-offset-10 text-secondary tracking-tight rotate-[-12deg] "
                    style={{ fontFamily: "var(--font-signature)" }}
                  >
                    {" "}
                    <TyperWriterParagraph
                      speed={0.15}
                      about={signature}
                      className="text-secondary"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 rounded-full h-9 w-9 grid place-items-center border border-border text-sm hover:bg-accent"
              aria-label="Close"
            >
              ✕
            </button>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

export default TeamModal;
