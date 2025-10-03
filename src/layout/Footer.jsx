import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-24">
      <div className="absolute inset-x-0 -top-6 flex justify-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1 rounded-full bg-muted text-foreground/80 text-xs"
        >
          {" "}
        </motion.div> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold">TechCanopy</h3>
            <p className="mt-2 text-sm text-foreground/70 max-w-xs">
              We design and build scalable digital products and platforms.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Stay up to date</h4>
            <form className="mt-3 flex flex-col md:flex-row items-center gap-2">
              <input
                className="flex-1 rounded-xl border border-border bg-card text-card-foreground px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring/50"
                placeholder="Enter your email"
                type="email"
                aria-label="Email"
              />
              <button
                type="submit"
                className="rounded-xl px-4 py-2 bg-secondary text-secondary-foreground hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} TechCanopy. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-secondary">
              Privacy
            </a>
            <a href="#" className="hover:text-secondary">
              Terms
            </a>
            <a href="#" className="hover:text-secondary">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
