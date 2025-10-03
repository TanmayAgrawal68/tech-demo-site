import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "TechCanopy transformed our legacy systems into a modern, scalable platform.",
    author: "Priya Sharma",
    role: "COO, Acme Corp",
  },
  {
    quote: "Their team delivered on time with exceptional attention to detail.",
    author: "Rahul Verma",
    role: "Head of Engineering, Nimbus",
  },
  {
    quote: "A partner you can trust for complex cloud and data projects.",
    author: "Ananya Gupta",
    role: "CTO, NovaTech",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            What our clients say
          </h2>
          <p className="mt-3 md:mt-4 text-foreground/70 max-w-2xl mx-auto">
            Stories from teams who built with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card text-card-foreground rounded-2xl p-6 md:p-8 border border-border shadow-sm"
            >
              <p className="text-lg md:text-xl leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-foreground/70">
                — {t.author}, {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


