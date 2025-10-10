import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import techcanopy from "../assets/tec-log.svg";

const productEngineeringSolutions = [
  {
    title: "Fintech Solutions",
    path: "/services/fintech",
    description: "Digital wallets, embedded finance, and payment automation",
  },
  {
    title: "Edtech Platforms",
    path: "/services/edtech",
    description: "Adaptive learning systems, skill marketplaces, and AI tutors",
  },
  {
    title: "Hospitality Tech",
    path: "/services/hospitality",
    description: "Smart booking, guest engagement, and operational analytics",
  },
  {
    title: "DOOH Automation",
    path: "/services/dooh",
    description: "Streamlining inventory, operations, and campaign management",
  },
  {
    title: "Agritech Systems",
    path: "/services/agritech",
    description:
      "Precision farming, crop analytics, and supply chain platforms",
  },
  {
    title: "Telecom Innovation",
    path: "/services/telecom",
    description: "Network orchestration, 5G enablement, and IoT connectivity",
  },
  {
    title: "Retail Intelligence",
    path: "/services/retail",
    description:
      "Omnichannel commerce, recommendation engines, and smart inventory",
  },
  {
    title: "Medtech Solutions",
    path: "/services/medtech",
    description: "Patient management and streamlined health records",
  },
];

const productLinks = [
  {
    title: "Digital Platforms",
    path: "/products/digital-transformation",
    description: "Apps, portals, and platforms for modern businesses",
  },
  {
    title: "Data Engineering & Analytics",
    path: "/products/data-engineering-analytics",
    description:
      "Data pipelines, dashboards, and insights that power decisions",
  },
  {
    title: "Cloud Engineering",
    path: "/products/cloud-engineering",
    description: "Cloud apps, infrastructure, and scalable systems",
  },
  {
    title: "Managed DevOps",
    path: "/products/managed-devops",
    description: "CI/CD, automation, and deployment pipelines",
  },
  {
    title: "AI & Intelligent Systems",
    path: "/products/ai-intelligent-systems",
    description: "Machine learning, automation, and smart tools",
  },
  {
    title: "Product Modernization",
    path: "/products/product-modernization",
    description: "Upgraded apps, legacy systems, and digital products",
  },
  {
    title: "UX & Product Design",
    path: "/products/ux-product-design",
    description: "Intuitive interfaces, apps, and experiences",
  },
  {
    title: "API & Microservices",
    path: "/products/api-microservices",
    description: "Modular APIs and integrations for scalable systems",
  },
];

export default function Footer() {
  return (
    <footer className="relative  overflow-hidden bg-gradient-to-b from-#f2f0ec to-secondary/10 text-gray-700">
      {/* 🌊 Wavy Bezier Divider */}
      <div className="absolute top-0 left-0 w-full h-[100px] overflow-hidden pointer-events-none z-10">
        <svg
          className="w-[200%] h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d8e8d8" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#cde0c8" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#eef0ec" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#f2f0ec" stopOpacity="0" />
            </linearGradient>
          </defs>

          <g className="waveSlow">
            <path
              d="M0 40 C 150 80 350 0 600 40 C 850 80 1050 0 1200 40 V120 H0 Z"
              fill="url(#waveGrad)"
            />
            <path
              d="M0 40 C 150 80 350 0 600 40 C 850 80 1050 0 1200 40 V120 H0 Z"
              fill="url(#waveGrad)"
              transform="translate(1200,0)"
            />
          </g>
        </svg>
      </div>

      <div className="relative mt-20 z-10 max-w-7xl mx-auto px-6 md:px-12 py-20   ">
        {/* Fade-up animation container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div>
            <img src={techcanopy} alt="TechCanopy Logo" className="h-10" />
            <p className="mt-4 text-sm text-gray-600 font-semibold">
              A Product Engineering Company.
            </p>
            <a
              href="https://www.google.com/maps/place/Techcanopy+Software+Labs"
              className="mt-4 block text-sm text-gray-500 hover:text-secondary transition-colors leading-relaxed"
              target="_blank"
              rel="noreferrer"
            >
              1st Floor, No-03, Survey no: 2/4, Remco Bhel Layout, Pattanagere,
              Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
            </a>
          </div>

          {/* Product Engineering */}
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Product Engineering
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {productEngineeringSolutions.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className="hover:text-secondary transition-colors flex flex-col"
                  >
                    <span>{item.title}</span>
                    <span className="text-xs text-gray-500">
                      {item.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Solutions */}
          <div>
            <h4 className="font-semibold text-gray-800 text-lg">
              Engineering Solutions
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {productLinks.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className="hover:text-secondary transition-colors flex flex-col"
                  >
                    <span>{item.title}</span>
                    <span className="text-xs text-gray-500">
                      {item.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-800 text-lg text-center md:text-left">
              Stay Connected
            </h4>
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              {[
                {
                  icon: <FaInstagram size={22} />,
                  link: "https://www.instagram.com/techcanopysl?igsh=MW0xa2EzYmg5M295cA==",
                },
                {
                  icon: <FaLinkedin size={22} />,
                  link: "https://www.linkedin.com/company/techcanopysl/",
                },
                {
                  icon: <FaTwitter size={22} />,
                  link: "https://x.com/techcanopysl?s=21",
                },
                {
                  icon: <FaEnvelope size={22} />,
                  link: "mailto:interact@techcanopy.com",
                },
              ].map(({ icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-secondary transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-12"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500"
        >
          <p>© {new Date().getFullYear()} Techcanopy. All rights reserved.</p>
          <div className="flex items-center gap-5 mt-3 md:mt-0">
            {["Privacy", "Terms", "Security"].map((label) => (
              <a
                key={label}
                href="#"
                className="hover:text-secondary transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
