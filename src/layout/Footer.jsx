import React from "react";
import { motion } from "framer-motion";
import techcanopy from "../assets/tec-log.svg";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
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
            <img alt="techcanopy" src={techcanopy} height={100} width={200} />
            <p className="text-sm mt-4 text-primary max-w-xs">
              A product Engineering Company.
            </p>
            <a href="https://www.google.com/maps/place/Techcanopy+Software+Labs/@12.9189023,77.5091907,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3e566fb5c549:0xf725e53d7ffbdeb8!8m2!3d12.9189023!4d77.5091907!16s%2Fg%2F11fnl50x51?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D">
              <p className="whitespace-pre-wrap text-primary/80">
                1st Floor, No-03, Survey no: 2/4, Remco Bhel Layout,
                Pattanagere, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
              </p>
            </a>
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
            {/* <form className="mt-3 flex flex-col md:flex-row items-center gap-2">
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
            </form> */}
            {/* social */}
            <div className="flex justify-center text-primary/90 mt-5  items-center gap-6 mb-6 py-4 rounded-xl bg-gradient-to-br from-secondary/50 to-100% ">
              <a
                href="https://www.instagram.com/techcanopysl?igsh=MW0xa2EzYmg5M295cA=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:scale-110 transition" size={22} />
              </a>
              {/* <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="hover:scale-110 transition" size={22} />
        </a> */}
              <a
                href="https://www.linkedin.com/company/techcanopysl/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:scale-110 transition" size={22} />
              </a>
              <a
                href="https://x.com/techcanopysl?s=21"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="hover:scale-110 transition" size={22} />
              </a>
              <a href="mailto:interact@techcanopy.com">
                <FaEnvelope className="hover:scale-110 transition" size={22} />
              </a>
            </div>
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
