import {
  IconBrandGithub,
  IconCode,
  IconPalette,
  IconPhoto,
} from "@tabler/icons-react";
import healthCare from "./src/assets/case-studies/health-care.jpg";
export const navItems = [
  {
    name: "Solutions",
    dropdown: {
      layout: {
        columnCount: 2,
        width: "900px",
        gap: "1rem",
      },
      items: [
        {
          type: "link",
          label: "Fintech",
          href: "/services/fintech",
          icon: <IconCode />,
          description: "Digital wallets, embedded finance, payment automation",
        },
        {
          type: "link",
          label: "Edtech",
          href: "/services/edtech",
          icon: <IconPalette />,
          description: "Adaptive learning, skill marketplaces, AI tutors",
        },
        {
          type: "link",
          label: "Hospitality",
          href: "/services/hospitality",
          icon: <IconPhoto />,
          description: "Smart booking, guest engagement, operational analytics",
        },
        {
          type: "link",
          label: "DOOH",
          href: "/services/dooh",
          icon: <IconBrandGithub />,
          description:
            "Streamlining inventory, operations, and campaign management",
        },
        {
          type: "link",
          label: "Agritech",
          href: "/services/agritech",
          icon: <IconCode />,
          description:
            "Precision farming, crop analytics, supply chain platforms",
        },
        {
          type: "link",
          label: "Telecom",
          href: "/services/telecom",
          icon: <IconPalette />,
          description: "Network orchestration, 5G solutions, IoT connectivity",
        },
        {
          type: "link",
          label: "Retail",
          href: "/services/retail",
          icon: <IconPalette />,
          description:
            "Omnichannel commerce, recommendation engines, inventory intelligence ",
        },
        {
          type: "link",
          label: "Medtech",
          href: "/services/medtech",
          icon: <IconPalette />,
          description: "Patient management, streamlined health records ",
        },
        // {
        //   type: "image",
        //   src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=250&h=150&fit=crop",
        //   alt: "Code example",
        //   span: "full", // This will make the image span full width
        // },
      ],
    },
  },
  {
    name: "Case studies",
    dropdown: {
      layout: {
        columnCount: 2,
        width: "900px",
        gap: "1rem",
      },
      items: [
        {
          type: "link",
          label: "Intelligent Loan Management Platform for a Leading NBFC",
          href: "/case/intelligent-loan-management",
          description:
            "Redefining lending efficiency through automation, compliance, and data intelligence ",
        },

        {
          type: "link",
          label: "Smart Food Logging & Wellness Platform",
          href: "/case/smart-food-logging",
          description:
            "Empowering users to achieve healthier lifestyles through intelligent health tracking",
        },
        {
          type: "link",
          label: "Unified Data Platform for a Telecom Enterprise ",
          href: "/case/unified-data-platform",
          description:
            "Transforming network data into actionable business intelligence",
        },
        {
          type: "link",
          label: "Agri Intelligence Platform for Sustainable Farming ",
          href: "/case/agritech-intelligence-platform",
          description:
            "Digitizing agriculture through IoT, analytics, and traceability ",
        },
        {
          type: "link",
          label: "Digital Transformation for a Manufacturing Enterprise",
          href: "/case/digital-transformation",
          description:
            "Bringing intelligence and automation to production floors",
        },
        {
          type: "link",
          label: "Retail Operations Platform for a Multi-Store Chain ",
          href: "/case/retail-operations",
          description:
            "Driving connected commerce through data and automation ",
        },
        {
          type: "link",
          label: "Healthcare Network Management System ",
          href: "/case/healthcare-network-management",
          description: "Enabling connected, data-driven healthcare delivery ",
        },
        {
          type: "link",
          label: "Smart Governance Portal for Public Institutions ",
          href: "/case/smart-governance-portal",
          description:
            "Driving transparency and efficiency in digital governance ",
        },
      ],
    },
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
];

export const sampleTechLogos = [
  {
    src: "https://dummyimage.com/80x80/ff5733/fff.png&text=HTML",
    name: "HTML",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/2965f1/fff.png&text=CSS",
    name: "CSS",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/f7df1e/000.png&text=JS",
    name: "JavaScript",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/3178c6/fff.png&text=TS",
    name: "TypeScript",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/339933/fff.png&text=Node",
    name: "Node.js",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/61dbfb/000.png&text=React",
    name: "React",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/42b883/fff.png&text=Vue",
    name: "Vue",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/dd0031/fff.png&text=Angular",
    name: "Angular",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/47a248/fff.png&text=MongoDB",
    name: "MongoDB",
    width: 80,
    height: 80,
  },
  {
    src: "https://dummyimage.com/80x80/000000/fff.png&text=Express",
    name: "Express",
    width: 80,
    height: 80,
  },
];

import {
  FaUsers,
  FaDollarSign,
  FaComments,
  FaShoppingCart,
  FaChartLine,
  FaHeart,
  FaStar,
  FaBell,
  FaGift,
} from "react-icons/fa";

// export const techAreas = [
//   {
//     name: "Cloud",
//     logo: IconCloud,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Inter, sans-serif",
//       background: "linear-gradient(90deg,#374151,#1e3a8a)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "Data Migration",
//     logo: IconDatabase,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Roboto, sans-serif",
//       background: "linear-gradient(90deg,#4b5563,#2563eb)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "AI & ML",
//     logo: IconSettingsAutomation,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Poppins, sans-serif",
//       background: "linear-gradient(90deg,#1f2937,#1e40af)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "DevOps",
//     logo: IconServer,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Inter, sans-serif",
//       background: "linear-gradient(90deg,#374151,#1e3a8a)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "Mobile App Development",
//     logo: IconDeviceMobile,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Roboto, sans-serif",
//       background: "linear-gradient(90deg,#4b5563,#3b82f6)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "Web App Development",
//     logo: IconDeviceDesktop,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Poppins, sans-serif",
//       background: "linear-gradient(90deg,#1f2937,#2563eb)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "Cloud Migration",
//     logo: IconCloud,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Inter, sans-serif",
//       background: "linear-gradient(90deg,#374151,#1e3a8a)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "API Development",
//     logo: IconApi,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Roboto, sans-serif",
//       background: "linear-gradient(90deg,#4b5563,#1e40af)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "Data Engineering",
//     logo: IconChartLine,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Poppins, sans-serif",
//       background: "linear-gradient(90deg,#1f2937,#3b82f6)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
//   {
//     name: "Enterprise Solutions",
//     logo: IconBuildingSkyscraper,
//     style: {
//       fontWeight: 200,
//       fontFamily: "Inter, sans-serif",
//       background: "linear-gradient(90deg,#374151,#2563eb)",
//       WebkitBackgroundClip: "text",
//       color: "transparent",
//     },
//   },
// ];
import {
  FaCloud,
  FaCogs,
  FaBrain,
  FaCodeBranch,
  FaProjectDiagram,
  FaPencilRuler,
  FaCubes,
  FaChartBar,
  FaLaptopCode,
} from "react-icons/fa";

export const techAreas = [
  {
    name: "Digital Platforms",
    logo: FaLaptopCode,
    style: {
      fontWeight: 600,
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(90deg,#374151,#1e3a8a)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Data Engineering & Analytics",
    logo: FaChartBar,
    style: {
      fontWeight: 600,
      fontFamily: "Roboto, sans-serif",
      background: "linear-gradient(90deg,#4b5563,#2563eb)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Cloud Engineering",
    logo: FaCloud,
    style: {
      fontWeight: 600,
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(90deg,#1f2937,#1e40af)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Managed DevOps",
    logo: FaCogs,
    style: {
      fontWeight: 200,
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(90deg,#374151,#1e3a8a)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "AI & Intelligent Systems",
    logo: FaBrain,
    style: {
      fontWeight: 200,
      fontFamily: "Roboto, sans-serif",
      background: "linear-gradient(90deg,#4b5563,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Product Modernization",
    logo: FaProjectDiagram,
    style: {
      fontWeight: 200,
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(90deg,#1f2937,#2563eb)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "UX & Product Design",
    logo: FaPencilRuler,
    style: {
      fontWeight: 200,
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(90deg,#374151,#1e3a8a)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "API & Microservices",
    logo: FaCubes,
    style: {
      fontWeight: 200,
      fontFamily: "Roboto, sans-serif",
      background: "linear-gradient(90deg,#4b5563,#1e40af)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
];
export const homeData = {
  statsData: [
    { title: "Customer Average Tenure", value: "24+ Months", icon: FaUsers },
    { title: "Experts", value: "50+", icon: FaDollarSign },
    { title: "Platforms", value: "7+", icon: FaComments },
    { title: "Products", value: "4+", icon: FaShoppingCart },
    { title: "Collective Experience", value: "20+", icon: FaChartLine },
    { title: "Globally", value: "10+ Clients", icon: FaHeart },
    {
      title: "Collaborating with industry leaders",
      value: "5+ Partners",
      icon: FaStar,
    },
    {
      title: "Expertiese across modern tech stacks",
      value: "15+ Technologies ",
      icon: FaBell,
    },
    {
      title: "Reliable and resilient solutions",
      value: "99% Uptime",
      icon: FaGift,
    },
  ],

  // productLinks: [
  //   {
  //     title: "Digital Platforms",
  //     path: "/products/digital-transformation",
  //     description: "Apps, portals, and Platforms for modern business",
  //   },
  //   {
  //     title: "Data Engineering & Analytics",
  //     path: "/products/cloud-solutions",
  //     description: "Data pipelines, dashboards, and insights",
  //   },
  //   {
  //     title: "Cloud Engineering",
  //     path: "/products/ai-ml",
  //     description: "Cloud apps, infrastructure, and scalable systems",
  //   },
  //   {
  //     title: "Managed DevOps",
  //     path: "/products/ai-ml",
  //     description: "CI/CD, automation, and deployment pipelines",
  //   },
  //   {
  //     title: "AI & Intelligent Systems",
  //     path: "/products/ai-ml",
  //     description: "Machine learning, automation & smart tools",
  //   },
  //   {
  //     title: "Product Modernization",
  //     path: "/products/ai-ml",
  //     description: "Upgraded apps, legacy systems, and digital products",
  //   },
  //   {
  //     title: "UX & Product Design",
  //     path: "/products/ai-ml",
  //     description: "Intutive interfaces, apps and experiences",
  //   },
  //   {
  //     title: "API & Microservices",
  //     path: "/products/ai-ml",
  //     description: "Modular APIs, integrations",
  //   },
  // ],
  // // Detailed page data for products
  // productPages: {
  //   "digital-transformation": {
  //     title: "Digital Transformation",
  //     subtitle: "Transform Your Business for the Digital Age",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  //     heroBackground: {
  //       type: "carousel",
  //       images: [
  //         "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
  //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
  //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  //       ],
  //       duration: 4000,
  //     },
  //     heroOverlay: "dark",
  //     sections: [
  //       {
  //         id: "overview",
  //         title: "Revolutionary Digital Solutions",
  //         content:
  //           "Our digital transformation services help businesses modernize their operations, streamline processes, and leverage cutting-edge technologies to stay competitive in today's fast-paced digital landscape.",
  //         image:
  //           "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  //         imagePosition: "right",
  //         features: [
  //           "Process Automation & Optimization",
  //           "Cloud Infrastructure Migration",
  //           "Data Analytics & Business Intelligence",
  //           "Customer Experience Enhancement",
  //           "Mobile-First Solutions",
  //         ],
  //       },
  //       {
  //         id: "benefits",
  //         title: "Why Choose Our Digital Transformation?",
  //         content:
  //           "We combine strategic thinking with technical expertise to deliver transformation that drives real business value. Our approach ensures minimal disruption while maximizing ROI.",
  //         image:
  //           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  //         imagePosition: "left",
  //         features: [
  //           "Reduced Operational Costs by 40%",
  //           "Improved Efficiency & Productivity",
  //           "Enhanced Customer Satisfaction",
  //           "Future-Proof Technology Stack",
  //           "24/7 Expert Support",
  //         ],
  //       },
  //       {
  //         id: "process",
  //         title: "Our Proven Transformation Process",
  //         content:
  //           "We follow a structured, phased approach to ensure successful digital transformation with minimal risk and maximum impact on your business operations.",
  //         image:
  //           "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  //         imagePosition: "right",
  //         features: [
  //           "Assessment & Strategy Development",
  //           "Technology Architecture Design",
  //           "Implementation & Integration",
  //           "Testing & Quality Assurance",
  //           "Training & Ongoing Support",
  //         ],
  //       },
  //     ],
  //   },
  //   "cloud-solutions": {
  //     title: "Cloud Solutions",
  //     subtitle: "Scale Your Infrastructure with Cloud Power",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  //     heroBackground: {
  //       type: "image",
  //       src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
  //     },
  //     heroOverlay: "gradient",
  //     sections: [
  //       {
  //         id: "overview",
  //         title: "Comprehensive Cloud Infrastructure",
  //         content:
  //           "Transform your business with our comprehensive cloud solutions. From migration to optimization, we provide end-to-end cloud services that scale with your growth.",
  //         image:
  //           "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  //         imagePosition: "right",
  //         features: [
  //           "Multi-Cloud Strategy & Implementation",
  //           "Cloud Migration & Modernization",
  //           "Container Orchestration",
  //           "Serverless Architecture",
  //           "Cloud Security & Compliance",
  //         ],
  //       },
  //       {
  //         id: "benefits",
  //         title: "Cloud Benefits for Your Business",
  //         content:
  //           "Experience the power of cloud computing with improved scalability, cost efficiency, and performance. Our solutions are designed to grow with your business needs.",
  //         image:
  //           "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  //         imagePosition: "left",
  //         features: [
  //           "99.9% Uptime Guarantee",
  //           "Cost Reduction up to 60%",
  //           "Instant Scalability",
  //           "Global Infrastructure",
  //           "Advanced Security Features",
  //         ],
  //       },
  //       {
  //         id: "services",
  //         title: "Our Cloud Service Portfolio",
  //         content:
  //           "From infrastructure setup to ongoing management, we provide comprehensive cloud services tailored to your specific business requirements and industry standards.",
  //         image:
  //           "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  //         imagePosition: "right",
  //         features: [
  //           "AWS, Azure & Google Cloud Expertise",
  //           "DevOps & CI/CD Implementation",
  //           "Database Migration & Optimization",
  //           "Disaster Recovery Solutions",
  //           "Performance Monitoring & Analytics",
  //         ],
  //       },
  //     ],
  //   },
  //   "ai-ml": {
  //     title: "AI & Machine Learning",
  //     subtitle: "Unlock the Power of Artificial Intelligence",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  //     heroBackground: {
  //       type: "gradient",
  //       gradient:
  //         "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  //     },
  //     heroOverlay: "secondary",
  //     sections: [
  //       {
  //         id: "overview",
  //         title: "Intelligent Solutions for Modern Business",
  //         content:
  //           "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation across your organization.",
  //         image:
  //           "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  //         imagePosition: "right",
  //         features: [
  //           "Predictive Analytics & Forecasting",
  //           "Natural Language Processing",
  //           "Computer Vision Solutions",
  //           "Recommendation Systems",
  //           "Process Automation with AI",
  //         ],
  //       },
  //       {
  //         id: "benefits",
  //         title: "Transform Your Business with AI",
  //         content:
  //           "Our AI and ML solutions help you make data-driven decisions, improve customer experiences, and optimize operations for maximum efficiency and growth.",
  //         image:
  //           "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  //         imagePosition: "left",
  //         features: [
  //           "50% Faster Decision Making",
  //           "Improved Customer Insights",
  //           "Automated Business Processes",
  //           "Enhanced Predictive Capabilities",
  //           "Competitive Advantage",
  //         ],
  //       },
  //       {
  //         id: "solutions",
  //         title: "AI Solutions We Deliver",
  //         content:
  //           "From chatbots to complex predictive models, we develop custom AI solutions that address your specific business challenges and opportunities.",
  //         image:
  //           "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
  //         imagePosition: "right",
  //         features: [
  //           "Custom ML Model Development",
  //           "AI-Powered Chatbots & Virtual Assistants",
  //           "Image & Video Analysis Systems",
  //           "Fraud Detection & Prevention",
  //           "Supply Chain Optimization",
  //         ],
  //       },
  //     ],
  //   },
  // },

  serviceLinks: [
    {
      title: "Fintech Solutions",
      path: "/services/fintech",
      description: "Digital wallets, embedded finance, and payment automation",
    },
    {
      title: "Edtech Platforms",
      path: "/services/edtech",
      description:
        "Adaptive learning systems, skill marketplaces, and AI tutors",
    },
    {
      title: "Hospitality Tech",
      path: "/services/hospitality",
      description: "Smart booking, guest engagement, and operational analytics",
    },
    {
      title: "DOOH Automation",
      path: "/services/dooh",
      description:
        "Streamlining inventory, operations, and campaign management",
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
  ],
  // Detailed page data for services
  servicePages: {
    fintech: {
      title: "fintech ",
      subtitle: "Digital wallets, embedded finance, and payment automation",
      heroImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      heroBackground: {
        type: "image",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
      },
      heroOverlay: "dark",
      sections: [
        {
          id: "overview",
          title: "Powering the Future of Financial Services",
          content: `The financial world is evolving faster than ever, and businesses need platforms that are agile, secure, and customer-centric. At Techcanopy, we design fintech solutions that streamline payments, lending, and wealth management — making finance simpler, faster, and smarter. From embedded finance and digital wallets to core banking modernization, our solutions empower institutions to operate efficiently while delighting customers. `,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Loan Origination & Servicing (LOS & LMS) – Automate lending workflows from application to approval",
            "Digital Collections & Recovery – Streamlined debt management with analytics and automation",
            "Wealth Management Dashboards & Analytics – Real-time insights for smarter financial decisions",
            "Risk Profiling & Compliance-Ready Insights – Reduce risk and ensure regulatory compliance",
            "Real-Time Payments & Settlements – Fast, secure, and transparent payment processing",
            "Automated Reconciliation & Reporting – Simplified accounting and reporting for finance teams",
            "Digital Wallets & QR Payments – Mobile-first payment solutions for modern customers",
            "Core Banking Modernization – Upgrade legacy systems for scale, reliability, and performance",
            "Open Banking APIs & Integrations – Seamless connections with third-party apps and services",
            "Embedded Finance Solutions – Integrate financial services directly into platforms and marketplaces",
          ],
        },
        {
          id: "expertise",
          title: "How We Build It Differently",
          content: `Our fintech solutions are designed for speed, security, and scalability. We combine deep domain expertise with cutting-edge technologies to deliver platforms that not only meet current needs but anticipate future trends. Every system is designed for performance, regulatory compliance, and seamless integration with existing infrastructure. 

We focus on: `,
          image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "User-centric design for effortless adoption",
            "Modular architectures for flexibility and quick feature rollout ",
            "Cloud-native, secure platforms for performance and compliance ",
            "DevOps & Agile Transformation",
            "Data-driven insights to optimize operations and customer experience ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy’s fintech expertise, financial institutions can innovate faster, reduce operational complexity, and deliver smarter financial experiences to their customers. We don’t just build software — we build the platforms that drive financial transformation",
      },
    },
    edtech: {
      title: "Edtech",
      subtitle: "Adaptive learning, skill marketplaces, and AI tutors",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      heroBackground: {
        type: "carousel",
        images: [
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop",
        ],
        duration: 5000,
      },
      heroOverlay: "primary",
      sections: [
        {
          id: "overview",
          title: "Reimagining the Future of Learning ",
          content:
            "Education is evolving at lightning speed, and learners expect personalized, engaging, and accessible experiences. At Techcanopy, we build Edtech platforms that make learning smarter, more adaptive, and more effective. From AI-powered tutors and skill marketplaces to interactive learning management systems, our solutions empower students, educators, and organizations to thrive in a digital-first learning ecosystem. We create custom software solutions that perfectly fit your business requirements. From web applications to mobile apps, we deliver high-quality, scalable solutions.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "process",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Personalized Learning Platforms & AI Tutors – Adaptive learning experiences tailored to individual needs. ",
            "Adaptive Assessment & Feedback Engines – Instant, actionable insights to guide learning journeys. ",
            "Skill Marketplaces & Credentialing Platforms – Connect learners with courses, certifications, and mentors. ",
            "Learning Analytics Dashboards & Insights – Track progress, engagement, and outcomes across platforms. ",
            "Gamification & Engagement Modules – Make learning fun, interactive, and motivating. ",
            "LMS (Learning Management Systems) Integration – Seamless deployment for institutions and corporates. ",
            "Virtual Classrooms & Collaboration Tools – Enable interactive online learning experiences. ",
            "AI-Powered Content Recommendations – Suggest learning paths based on performance and interests. ",
            "Student & Teacher Performance Tracking – Measure and improve outcomes effectively. ",
            "Mobile-First Learning Experiences – Learning anytime, anywhere, on any device. ",
          ],
        },
        {
          id: "technologies",
          title: "How We Build It Differently ",
          content: `We design Edtech solutions with learners and educators at the center. Every platform is built to be intuitive, adaptive, and scalable — combining AI, analytics, and modern UX principles. Our goal is to make education efficient, measurable, and engaging for everyone involved. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Data-driven personalization for optimized learning paths ",
            "Agile development for fast iterations and feature enhancements ",
            "Cloud-native architecture for scalability and reliability ",
            "Continuous testing and feedback loops for effective outcomes ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy, education platforms don’t just deliver content — they inspire growth, enhance learning, and prepare users for the future. We build solutions that empower educators, delight learners, and transform the way knowledge is shared. ",
      },
    },
    hospitality: {
      title: "Hospitality ",
      subtitle: "Smart booking, guest engagement, and operational analytics ",
      heroImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      },
      heroOverlay: "light",
      sections: [
        {
          id: "overview",
          title: "Redefining Guest Experiences with Technology ",
          content:
            "In hospitality, every interaction matters. At Techcanopy, we build platforms that streamline operations, enhance guest engagement, and drive smarter business decisions. From intuitive booking engines to analytics dashboards, our solutions empower hotels, resorts, and hospitality chains to deliver exceptional experiences while optimizing internal workflows. ",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "services",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Online Booking Engines & Reservations Platforms – Smooth, flexible, and reliable booking experiences. ",
            "Guest Experience & Engagement Apps – Personalized communications, loyalty programs, and real-time updates. ",
            "Revenue Management & Pricing Analytics – Data-driven strategies to maximize profitability. ",
            "Operational Dashboards & Reporting – Monitor performance, occupancy, and key metrics in real time. ",
            "Loyalty Programs & Personalized Offers – Boost repeat visits and customer satisfaction. ",
            "Multi-Property Management Systems (PMS) – Centralized management for hotels, resorts, and chains. ",
            "Contactless Check-In & Check-Out Solutions – Convenient, safe, and modern guest services. ",
            "Staff Scheduling & Workforce Management – Optimize staffing for efficiency and service quality. ",
            "Event & Conference Management Platforms – Seamless handling of bookings, schedules, and logistics. ",
            "Smart Property & Facility Automation – IoT-enabled systems to monitor, control, and optimize operations. ",
          ],
        },
        {
          id: "benefits",
          title: "How We Build It Differently ",
          content: `We combine operational expertise with cutting-edge technology to create solutions that simplify management and enhance the guest journey. Every system is designed for ease of use, scalability, and measurable impact, helping hospitality businesses stay competitive in an increasingly digital world. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "User-centric design for both staff and guests ",
            "Real-time insights to improve operations and decision-making ",
            "Modular architecture for quick adaptation and expansion ",
            "Secure and reliable platforms for seamless business continuity ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy, hospitality platforms don’t just manage operations — they elevate guest experiences, boost efficiency, and drive business growth. We turn technology into a tool for memorable stays and operational excellence. ",
      },
    },
    dooh: {
      title: "DOOH (Digital Out-of-Home)",
      subtitle: "Streamlining inventory, operations, and campaign management ",
      heroImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      },
      heroOverlay: "light",
      sections: [
        {
          id: "overview",
          title: "Making Digital Out-of-Home Smarter ",
          content:
            "DOOH advertising is dynamic, fast-moving, and data-driven. At Techcanopy, we build platforms that optimize inventory, simplify operations, and enhance campaign performance for networks of digital displays. Our solutions empower media owners and advertisers to plan, deploy, and measure campaigns efficiently, while maximizing reach and ROI. ",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "services",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Inventory Management & Asset Tracking Systems – Keep all digital assets organized and accessible. ",
            "Campaign Planning & Scheduling Tools – Plan campaigns with precision and deploy across multiple locations. ",
            "Real-Time Analytics & Reporting Dashboards – Track performance and optimize campaigns instantly. ",
            "Automated Booking & Ad Placement Systems – Simplify ad sales and placement processes. ",
            "Audience Measurement & Insights – Understand who sees your ads and how they engage. ",
            "Network Operations Monitoring – Ensure displays and systems operate flawlessly. ",
            "Digital Signage Content Management – Schedule, update, and manage content seamlessly. ",
            "API Integrations with Advertisers & Partners – Connect platforms for smoother workflows. ",
            "Predictive Maintenance & Alerts – Minimize downtime with proactive monitoring. ",
            "Multi-Location Campaign Optimization – Scale campaigns efficiently across geographies. ",
          ],
        },
        {
          id: "benefits",
          title: "How We Build It Differently ",
          content: `We design DOOH platforms with automation, scalability, and insights at the core. Our focus is on creating systems that reduce manual effort, enable smarter decision-making, and increase campaign effectiveness. Every solution is designed for operational efficiency and seamless integration with media workflows. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Data-driven decision-making to optimize ad spend ",
            "Automation-first design to reduce operational overhead ",
            "Scalable architecture for networks of any size ",
            "Real-time monitoring and alerts for uninterrupted operations ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy’s DOOH solutions, media networks don’t just manage displays — they maximize audience engagement, streamline operations, and deliver measurable impact. We make digital out-of-home advertising simpler, smarter, and more profitable. ",
      },
    },
    agritech: {
      title: "Agritech",
      subtitle:
        "Precision farming, crop analytics, and supply chain platforms ",
      heroImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      },
      heroOverlay: "light",
      sections: [
        {
          id: "overview",
          title: "Transforming Agriculture with Smart Technology ",
          content:
            "Farming is evolving, and data-driven insights are now essential for maximizing yield and efficiency. At Techcanopy, we build agritech solutions that empower farmers, agribusinesses, and cooperatives to make informed decisions, optimize operations, and modernize the entire agricultural value chain. From precision farming tools to crop analytics and supply chain platforms, our products help agriculture thrive in a digital-first world. ",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "services",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Crop Monitoring & Precision Farming Solutions – Track soil, water, and crop conditions for optimal yield. ",
            "IoT Sensor Integration for Soil & Climate – Real-time environmental monitoring for smart farming decisions. ",
            "Yield Prediction & Analytics Dashboards – Forecast production accurately and plan effectively. ",
            "Supply Chain & Logistics Platforms – Streamline farm-to-market operations and reduce wastage. ",
            "Farm-to-Consumer Traceability Systems – Ensure transparency and compliance across the supply chain. ",
            "Automated Irrigation & Resource Management – Efficiently manage water, fertilizer, and other resources. ",
            "Pest & Disease Detection Tools – Early warnings using AI and IoT for crop protection. ",
            "Farmer Marketplaces & Trading Platforms – Connect producers with buyers and suppliers digitally. ",
            "Drone & Satellite Data Integration – Advanced imaging for monitoring large-scale farms. ",
            "Sustainable Agriculture Planning – Tools for environmental-friendly and cost-effective farming. ",
          ],
        },
        {
          id: "benefits",
          title: "How We Build It Differently ",
          content: `We combine agriculture expertise with modern technology to create solutions that are actionable, scalable, and easy to adopt. Our platforms integrate IoT, analytics, and automation to help farmers make smarter decisions, increase productivity, and reduce operational costs. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Data-driven farming insights for precision decision-making ",
            "Modular platforms that scale from small farms to large agribusinesses ",
            "Cloud-enabled analytics for anytime, anywhere access ",
            "Seamless integration with existing farm workflows ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy’s Agritech solutions, farmers and agribusinesses don’t just manage operations — they optimize yield, improve sustainability, and modernize agriculture for the digital age. Our tools empower smarter decisions, healthier crops, and stronger businesses. ",
      },
    },
    telecom: {
      title: "Telecom",
      subtitle: "Network orchestration, 5G solutions, and IoT connectivity ",
      heroImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      },
      heroOverlay: "light",
      sections: [
        {
          id: "overview",
          title: "Connecting the Future of Communication ",
          content:
            "The telecom landscape is rapidly evolving, with 5G, IoT, and cloud-native networks transforming how people and devices connect. At Techcanopy, we build telecom platforms that simplify network management, optimize performance, and enable innovative services. From network orchestration tools to IoT connectivity solutions, our platforms empower operators to deliver faster, smarter, and more reliable communication experiences. ",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "services",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "5G Network Planning & Deployment Tools – Simplify rollout and optimize network coverage. ",
            "IoT Device Management Platforms – Monitor, control, and scale IoT networks efficiently. ",
            "Network Orchestration & Monitoring Systems – Automate operations and ensure uptime. ",
            "Call Detail Record (CDR) Analytics & Insights – Gain actionable intelligence from network usage. ",
            "Customer Self-Service Portals & Apps – Empower subscribers with seamless digital experiences. ",
            "Automated Billing & Payment Systems – Streamline invoicing and payment collection. ",
            "Cloud-Native Communication Platforms – Scalable and flexible infrastructure for modern telecom. ",
            "Predictive Maintenance & Performance Optimization – Reduce downtime and enhance reliability. ",
            "API & Integration Frameworks for Telecom Services – Connect internal and external systems seamlessly. ",
            "AI-Powered Network Analytics – Optimize performance and anticipate network issues. ",
          ],
        },
        {
          id: "benefits",
          title: "How We Build It Differently ",
          content: `We design telecom solutions with automation, scalability, and intelligence at the core. Our platforms integrate cloud, AI, and data analytics to streamline operations, improve customer experiences, and enable faster innovation. Every solution is built for high reliability, minimal downtime, and seamless integration. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Data-driven network management for smarter decision-making ",
            "Cloud-native architecture for scalability and flexibility ",
            "Automation-first design to reduce manual operational overhead ",
            "Continuous monitoring and analytics for proactive performance optimization ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy’s telecom solutions, operators don’t just manage networks — they unlock the full potential of connectivity, innovate faster, and deliver exceptional experiences to their subscribers. Our tools help businesses stay ahead in a rapidly evolving communications landscape. ",
      },
    },
    retail: {
      title: "Retail ",
      subtitle:
        "Omnichannel commerce, recommendation engines, and inventory intelligence ",
      heroImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      },
      heroOverlay: "light",
      sections: [
        {
          id: "overview",
          title: "Empowering Modern Retail with Technology ",
          content:
            "The retail industry is evolving faster than ever, with customers expecting seamless, personalized experiences across every channel. At Techcanopy, we build retail platforms that integrate online and offline operations, deliver smart insights, and enhance customer engagement. From omnichannel commerce solutions to intelligent inventory management, our products help retailers stay competitive and future-ready. ",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "services",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "E-Commerce & Omnichannel Platforms – Unified shopping experiences across web, mobile, and in-store. ",
            "Recommendation Engines & Personalization Modules – Deliver tailored suggestions that boost engagement and sales. ",
            "Inventory Management & Demand Forecasting – Optimize stock levels and reduce wastage. ",
            "Customer Analytics & Loyalty Programs – Understand shopper behavior and drive retention. ",
            "POS (Point of Sale) Systems & Integrations – Seamless in-store transactions and reporting. ",
            "Supply Chain Optimization Tools – Streamline operations from procurement to delivery. ",
            "Dynamic Pricing & Promotions Management – Adjust pricing in real-time for maximum impact. ",
            "Mobile Shopping & Engagement Apps – Enhance the shopping experience on-the-go. ",
            "Store Traffic & Sales Analytics – Make data-driven merchandising and operational decisions. ",
            "Returns & Reverse Logistics Automation – Simplify returns and minimize operational overhead. ",
          ],
        },
        {
          id: "benefits",
          title: "How We Build It Differently ",
          content: `We design retail solutions with customer experience and operational efficiency at the forefront. Our platforms are scalable, modular, and built with modern technology to support omnichannel strategies. By combining analytics, automation, and personalized experiences, we help retailers make smarter decisions, faster. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Data-driven personalization to increase engagement and conversion ",
            "Agile, scalable architecture for rapid growth and expansion ",
            "Real-time inventory & operational insights for optimized decision-making ",
            "Seamless integration across platforms, stores, and marketplaces ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy’s retail solutions, businesses don’t just sell — they engage customers, optimize operations, and drive growth. Our technology transforms how retailers interact with their customers and manage their operations in a competitive landscape. ",
      },
    },
    medtech: {
      title: "Medtech ",
      subtitle:
        "Patient management, streamlined health records, and digital care solutions ",
      heroImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      },
      heroOverlay: "light",
      sections: [
        {
          id: "overview",
          title: "Transforming Healthcare Through Technology ",
          content:
            "Healthcare is moving rapidly toward digital-first experiences, and accurate, accessible information is key. At Techcanopy, we build Medtech platforms that simplify patient management, enhance care delivery, and streamline health records. From EHR systems to telemedicine solutions, our products help hospitals, clinics, and healthcare providers operate efficiently while improving patient outcomes. ",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "services",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Electronic Health Records (EHR) & EMR Systems – Centralized, secure patient data management. ",
            "Patient Management & Appointment Scheduling – Simplified workflows for staff and better experiences for patients. ",
            "Telemedicine & Virtual Care Platforms – Remote consultations and healthcare delivery made easy. ",
            "Health Analytics Dashboards & Insights – Actionable insights for clinical and operational decision-making. ",
            "Prescription & Pharmacy Management Systems – Efficient, accurate, and compliant medication workflows. ",
            "Laboratory & Diagnostic Integrations – Seamless access to test results and diagnostics. ",
            "Remote Patient Monitoring Tools – Track patient health in real time, from anywhere. ",
            "AI-Assisted Diagnosis & Predictive Analytics – Improve accuracy and anticipate patient needs. ",
            "Secure Health Data Exchange & Interoperability – Enable smooth communication across healthcare providers. ",
            "Regulatory Compliance & Audit Reporting – Ensure adherence to healthcare standards and laws. ",
          ],
        },
        {
          id: "benefits",
          title: "How We Build It Differently ",
          content: `We design Medtech solutions with accuracy, reliability, and patient safety at the core. Our platforms integrate modern technology, analytics, and automation to streamline healthcare operations while supporting clinicians in delivering high-quality care. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "User-centered design for clinicians, staff, and patients ",
            "Secure, compliant systems built to meet strict healthcare standards ",
            "Scalable, modular architecture to grow with your healthcare operations ",
            "Data-driven insights for better clinical and operational decisions ",
          ],
        },
      ],
      blockquote: {
        title: "The Result",
        content:
          "With Techcanopy’s Medtech solutions, healthcare providers don’t just manage patients — they deliver smarter, safer, and more connected care. Our technology empowers providers to improve outcomes, optimize workflows, and stay ahead in a rapidly evolving healthcare landscape. ",
      },
    },
  },
  productLinks: [
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
  ],
  productPages: {
    "digital-transformation": {
      title: "Digital Platforms",
      subtitle: "Apps, portals, and platforms for modern businesses",
      heroImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      heroBackground: {
        type: "carousel",
        images: [
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        ],
        duration: 4000,
      },
      heroOverlay: "dark",
      sections: [
        {
          id: "overview",
          title: "Building the Digital Backbone of Modern Business",
          content: `In a world where digital experiences define brand success, Techcanopy builds platforms that power growth and simplify complexity. From enterprise-grade applications to customer-facing portals, we create systems that connect people, processes, and performance — seamlessly. 

Our expertise spans custom-built web and mobile apps, multi-tenant platforms, and scalable SaaS ecosystems designed to evolve with your business. Whether you’re modernizing legacy systems or building something from scratch, we engineer digital platforms that are intuitive, high-performing, and built to last. `,
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            // "Custom Web & Mobile Applications",
            // "Enterprise Portals & Dashboards",
            // "SaaS Product Development",
            // "Workflow Automation Tools",
            // "Integration Frameworks",
          ],
        },
        {
          id: "approach",
          title: "What We Offer",
          content: "",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Custom Web & Mobile Applications – Designed for performance, usability, and scale. ",
            "Enterprise Portals & Dashboards – Centralized access to data, insights, and workflows",
            "SaaS Product Development – End-to-end engineering for cloud-first business models",
            "Workflow Automation Tools – Simplify operations and reduce manual effort. ",
            "Integration Frameworks – Connect systems, APIs, and services for a unified ecosystem.",
          ],
        },
        {
          id: "future-ready",
          title: "Built for the Future",
          content:
            "At Techcanopy, we treat every platform as a product — with thoughtful architecture, smart design, and scalability at its core. We combine deep technical expertise with agile delivery to ensure faster go-to-market without compromising quality. Our approach blends : ",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Human-centered design for intuitive experiences ",
            "Modular architecture for scalability and flexibility",
            "Cloud-native development for speed and resilience",
            "Data-backed decision-making to enhance product performance",
          ],
        },
      ],
      blockquote: {
        title: "Built for future",
        content:
          "The platforms we build are not just solutions for today — they’re foundations for tomorrow. Every line of code is crafted to adapt, scale, and evolve with your vision",
      },
    },

    "data-engineering-analytics": {
      title: "Data Engineering & Analytics",
      subtitle:
        "Data pipelines, dashboards, and insights that power decisions ",
      heroImage:
        "https://images.unsplash.com/photo-1554197150-b99a580bb7a8?w=800&h=600&fit=crop",
      heroBackground: {
        type: "image",
        src: "https://images.unsplash.com/photo-1554197150-b99a580bb7a8?w=1200&h=800&fit=crop",
      },
      heroOverlay: "gradient",
      sections: [
        {
          id: "overview",
          title: "Turning Data Into Decisions",
          content: `In today’s digital world, data isn’t just an asset — it’s your competitive advantage. At Techcanopy, we help businesses harness the full potential of their data through robust engineering, intelligent analytics, and actionable insights. From building scalable data pipelines to creating intuitive dashboards, we turn raw information into strategic power.
Our expertise spans the entire data journey — from ingestion and processing to visualization and AI-driven intelligence. Whether it’s modernizing your data ecosystem or unlocking new insights, we engineer systems that make your data reliable, secure, and ready for innovation. `,
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "What We Offer ",
          content: "",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Data Pipeline Development – Seamless collection, transformation, and storage of large-scale data",
            "Data Warehousing & Lakehouse Architecture – Centralized, structured, and optimized data environments",
            "Business Intelligence Dashboards – Intuitive visualizations that enable faster, smarter decisions",
            "Data Governance & Quality Management – Ensuring consistency, accuracy, and compliance across all systems",
            "Predictive & Prescriptive Analytics – AI-driven insights that help forecast trends and guide strategy",
          ],
        },
        {
          id: "impact",
          title: "How We Build It Differently",
          content: `We go beyond traditional analytics — combining engineering excellence with modern data science to deliver intelligence that actually drives action. Our solutions are built to scale with your business, evolve with your needs, and empower every decision-maker across your organization. 

Our approach blends: `,
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "End-to-end visibility with real-time insights",
            "Cloud-native data platforms for flexibility and performance",
            "Secure and compliant frameworks to protect sensitive information",
            "AI and ML integration for next-level automation and predictions",
          ],
        },
      ],
      blockquote: {
        title: "Engineered for Intelligent Growth",
        content:
          "We believe data should do more than inform — it should transform. At Techcanopy, we build data systems that not only capture what’s happening but reveal what’s possible. ",
      },
    },

    "cloud-engineering": {
      title: "Cloud Engineering",
      subtitle:
        "Cloud apps, infrastructure, and scalable systems for the modern enterprise",
      heroImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      },
      heroOverlay: "secondary",
      sections: [
        {
          id: "overview",
          title: "Building the Future on the Cloud",
          content: `Cloud isn’t just a technology shift — it’s a business transformation. At Techcanopy, we help organizations design, build, and optimize cloud ecosystems that are agile, secure, and built for scale. From migrating legacy systems to crafting cloud-native applications, we engineer environments that keep your business fast, flexible, and future-ready. 

Our expertise covers the entire cloud lifecycle — infrastructure design, application modernization, containerization, and continuous delivery. Whether it’s AWS, Azure, or Google Cloud, we ensure your systems are optimized for performance, resilience, and cost efficiency.`,
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "How We Build It Differently",
          content: ``,
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Performance-driven engineering that minimizes latency and downtime",
            "Security-first design to safeguard data and compliance",
            "Cost optimization with intelligent resource management",
            "Continuous monitoring & automation for proactive issue resolution",
          ],
        },
        {
          id: "impact",
          title: "Scalable. Reliable. Unstoppable.",
          content: `The cloud is limitless — and so is what you can achieve with it. With Techcanopy as your engineering partner, your cloud infrastructure becomes a launchpad for innovation, speed, and sustainable growth.`,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
      ],
      blockquote: {
        title: "Scalable, Reliable & Unstoppable",
        content:
          "The cloud is limitless — and so is what you can achieve with it. With Techcanopy as your engineering partner, your cloud infrastructure becomes a launchpad for innovation, speed, and sustainable growth",
      },
    },

    "managed-devops": {
      title: "Managed DevOps",
      subtitle:
        "CI/CD, automation, and deployment pipelines that keep innovation moving",
      heroImage:
        "https://images.unsplash.com/photo-1581092795362-9e42b4b8f1a1?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
      },
      heroOverlay: "dark",
      sections: [
        {
          id: "overview",
          title: "Engineering Speed, Stability & Scale",
          content: `At Techcanopy, we make DevOps more than just a process — it’s the rhythm that drives every build, deploy, and release. Our Managed DevOps services bring together development and operations into one smooth, automated, and high-performance cycle. The result? Faster delivery, fewer errors, and products that are always ready for the next big update. 

We focus on creating seamless pipelines and cloud-native workflows that accelerate product lifecycles while improving reliability. Whether you’re scaling a SaaS platform or modernizing enterprise applications, we help your teams ship faster, smarter, and with total confidence`,
          image:
            "https://images.unsplash.com/photo-1581092795362-9e42b4b8f1a1?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "What We Offer",
          content: "",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "CI/CD Pipeline Automation – Streamlined builds, testing, and deployments with zero manual overhead",
            "Infrastructure Automation & IaC – Consistent, repeatable environments built with tools like Terraform and Ansible",
            "Monitoring & Observability – Real-time visibility into system performance, availability, and user experience",
            "Release Management & Governance – Safe, structured, and traceable deployments every time",
            "Cloud Cost & Performance Optimization – Automated scaling and resource allocation for efficiency",
          ],
        },
        {
          id: "impact",
          title: "How We Build It Differently ",
          content: `Our DevOps philosophy goes beyond automation — it’s about culture, collaboration, and continuous improvement. We help teams adopt a DevOps mindset, supported by modern tools and best practices that make engineering effortless and effective. 

Our approach includes:`,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Agile workflows that adapt to changing needs",
            "Integrated toolchains for faster feedback loops",
            "Continuous testing to catch issues before they scale",
            "Proactive monitoring that predicts and prevents disruptions",
          ],
        },
      ],
      blockquote: {
        title: "The Power of Continuous Everything",
        content:
          "With Techcanopy’s Managed DevOps, every update is smoother, every release is faster, and every product is more reliable. We don’t just maintain pipelines — we create systems that keep innovation flowing without pause",
      },
    },

    "ai-intelligent-systems": {
      title: "AI & Intelligent Systems",
      subtitle:
        "Machine learning, automation, and smart tools that redefine possibilities",
      heroImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      },
      heroOverlay: "secondary",
      sections: [
        {
          id: "overview",
          title: "Engineering Intelligence Into Every Product",
          content: `AI is no longer a futuristic idea — it’s the foundation of how modern businesses grow, compete, and scale. At Techcanopy, we bring intelligence into everyday operations by engineering AI-driven systems that automate, predict, and personalize. From recommendation engines to predictive analytics, we build smart solutions that help businesses make decisions faster and operate smarter. 

Our AI engineering practice blends cutting-edge research with real-world applications. Whether you’re automating workflows, enhancing customer experiences, or enabling data-driven decisions, we design solutions that think, learn, and evolve — just like your business. `,
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "What We Offer",
          content: "",
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Machine Learning Models – Custom models trained to deliver accurate, actionable insights",
            "AI-Powered Automation – Streamlined processes that reduce human effort and errors",
            "Predictive & Prescriptive Analytics – Data intelligence that anticipates trends and optimizes outcomes",
            "SComputer Vision & NLP Solutions – Smart systems that understand images, text, and voice",
            "Chatbots & Conversational AI – Engaging, intelligent assistants that enhance user interactions",
          ],
        },
        {
          id: "impact",
          title: "How We Build It Differently ",
          content: `We don’t just build AI — we make it usable, explainable, and scalable. Every intelligent system we design is backed by strong data engineering foundations and integrated seamlessly into your business ecosystem. Our focus is on practical innovation — building AI that delivers measurable impact, not just impressive demos. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Data-first engineering for reliable training and insights ",
            "Responsible AI frameworks for transparency and fairness ",
            "Continuous model optimization to keep intelligence relevant and adaptive",
            "Seamless integration into existing applications and workflows",
          ],
        },
      ],
      blockquote: {
        title: "Smarter Systems, Sharper Decisions & Stronger Impact",
        content:
          "With Techcanopy, AI isn’t an add-on — it’s an enabler. We build intelligent systems that elevate your products, empower your teams, and help your business stay ahead of the curve",
      },
    },

    "product-modernization": {
      title: "Product Modernization",
      subtitle: "Evolving legacy systems into future-ready digital products",
      heroImage:
        "https://images.unsplash.com/photo-1591696331119-cfc0a22b3477?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      },
      heroOverlay: "dark",
      sections: [
        {
          id: "overview",
          title: "Modern Tech for Modern Demands",
          content: `In a world where technology changes overnight, your products shouldn’t be stuck in yesterday. Techcanopy helps businesses modernize legacy applications and platforms to make them agile, scalable, and ready for tomorrow. We transform outdated systems into powerful, cloud-native, and high-performance products — without disrupting your ongoing operations. 

Our modernization services are not just about upgrading code or moving to new frameworks; they’re about reimagining your product’s potential. Whether it’s improving performance, enhancing user experience, or optimizing architecture, we ensure your product evolves in sync with your business ambitions`,
          image:
            "https://images.unsplash.com/photo-1591696331119-cfc0a22b3477?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "What We Offer",
          content: "",
          image:
            "https://images.unsplash.com/photo-1591696331119-cfc0a22b3477?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Legacy Application Re-engineering – Transform existing systems with modern architectures and frameworks",
            "Cloud Migration & Optimization – Move confidently to the cloud with secure, cost-effective strategies",
            "Microservices & API Enablement – Make products modular, scalable, and integration-friendly",
            "UI/UX Redesign – Refresh interfaces with intuitive, modern, and responsive experiences",
            "Performance Optimization – Enhance speed, stability, and reliability across platforms",
            "Security Reinforcement – Build resilience with modern security protocols and compliance-ready systems",
          ],
        },
        {
          id: "impact",
          title: "How We Build It Differently ",
          content: `We approach modernization as a business transformation — not just a technical upgrade. Our experts assess your existing ecosystem, identify what to retain, rebuild, or retire, and craft a phased roadmap that ensures minimal risk and maximum efficiency. Every decision is guided by data, ensuring that modernization aligns with your strategic goals. 

Our approach includes: `,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Architecture-driven transformation for long-term scalability  ",
            "Agile migration frameworks for faster go-live and reduced downtime  ",
            "Performance benchmarking at every stage",
            "SContinuous modernization that evolves with your growth",
          ],
        },
      ],
      blockquote: {
        title: "Revive. Reinvent. Reimagine",
        content:
          "With Techcanopy, modernization isn’t just about keeping up — it’s about moving ahead. We empower your products with future-ready technology, intuitive design, and enduring performance, ensuring you stay competitive in an ever-changing digital landscape",
      },
    },

    "ux-product-design": {
      title: "UX & Product Design",
      subtitle:
        "Intuitive interfaces, apps, and experiences that delight users",
      heroImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)",
      },
      heroOverlay: "secondary",
      sections: [
        {
          id: "overview",
          title: "Designing Products People Love",
          content: `At Techcanopy, we believe great products start with great experiences. Our UX and Product Design services focus on understanding your users, crafting interfaces that are intuitive, and creating interactions that feel effortless. From web applications to mobile platforms, we design digital products that are not just functional, but delightful, engaging, and easy to use. 

We combine research, creativity, and design thinking to ensure every screen, button, and workflow is purposeful. Whether it’s a B2B portal or a consumer app, our goal is the same — products that users actually enjoy and return to. `,
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "What We Offer",
          content: "",
          image:
            "https://images.unsplash.com/photo-1591696331119-cfc0a22b3477?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "User Research & Personas – Understand your audience deeply to design for real needs",
            "Interaction & Interface Design – Intuitive workflows and visually appealing UI that drives engagement",
            "Wireframing & Prototyping – Rapid, iterative designs to validate concepts early",
            "Usability Testing & Feedback Loops – Continuous improvement based on real user insights",
            "Design Systems & Style Guides – Consistent, scalable, and reusable design frameworks",
          ],
        },
        {
          id: "impact",
          title: "How We Build It Differently ",
          content: `We don’t just create pretty interfaces — we design experiences that work seamlessly with your business goals. Our approach blends user-centered design, agile iterations, and cross-functional collaboration to ensure that every design decision adds real value. 

Our methodology includes:  `,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Empathy-driven research to understand user motivations and pain points",
            "Data-informed design decisions for measurable impact ",
            "Iterative prototyping to test ideas quickly ",
            "Collaboration with engineering to ensure feasibility and performance ",
          ],
        },
      ],
      blockquote: {
        title: "Experience Meets Impact ",
        content:
          "With Techcanopy, UX and Product Design isn’t just about looks — it’s about building products that are easy to use, efficient, and memorable. Our designs don’t just impress; they convert, engage, and empower your users",
      },
    },

    "api-microservices": {
      title: "API & Microservices",
      subtitle: "Modular APIs, integrations, and services for scalable systems",
      heroImage:
        "https://images.unsplash.com/photo-1526378721805-04e9f76d3d1b?w=800&h=600&fit=crop",
      heroBackground: {
        type: "gradient",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      },
      heroOverlay: "dark",
      sections: [
        {
          id: "overview",
          title: "Scalable APIs & Microservices",
          content: `At Techcanopy, we design APIs and microservices that power flexible, scalable, and maintainable software architectures. Whether you’re connecting multiple systems, enabling third-party integrations, or creating modular applications, our approach ensures your products are fast, reliable, and future-ready. 

We help businesses transition from monolithic architectures to microservices-driven systems that are easier to maintain, update, and scale. With clean, well-documented APIs, your systems can communicate seamlessly, enabling innovation and faster product delivery`,
          image:
            "https://images.unsplash.com/photo-1526378721805-04e9f76d3d1b?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [],
        },
        {
          id: "approach",
          title: "What We Offer",
          content: "",
          image:
            "https://images.unsplash.com/photo-1591696331119-cfc0a22b3477?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Custom API Development – Secure, scalable, and easy-to-consume APIs tailored to your business needs",
            "Microservices Architecture – Break down applications into independent, reusable services for agility",
            "API Integration & Orchestration – Connect internal systems, third-party tools, and cloud services efficiently",
            "Performance Optimization & Monitoring – Ensure APIs are fast, reliable, and resilient under load",
            "API Documentation & Developer Portals – Simplified onboarding and collaboration for internal and external developers",
          ],
        },
        {
          id: "impact",
          title: "How We Build It Differently ",
          content: `We focus on creating APIs and microservices that aren’t just functional — they’re smart, maintainable, and ready for scale. Our approach emphasizes modularity, clean design, and strong governance, so your architecture grows with your business instead of holding it back. 

Our methodology includes: `,
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Service decomposition for independent, reusable components",
            "Secure and versioned APIs to prevent disruption and maintain consistency",
            "Automation & CI/CD pipelines for seamless deployment",
            "Monitoring & analytics to track performance and ensure reliability",
          ],
        },
      ],
      blockquote: {
        title: "Flexible, Reliable & Scaleable",
        content:
          "With Techcanopy, APIs and microservices aren’t just technical enablers — they’re the foundation for innovation. Our solutions allow your business to adapt quickly, integrate seamlessly, and deliver value faster than ever before",
      },
    },
  },
};

export const caseData = {
  "intelligent-loan-management": {
    heroTitle: "Intelligent Loan Management Platform for a Leading NBFC",
    heroSubtitle:
      "Redefining lending efficiency through automation, compliance, and data intelligence ",
    heroImg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              A fast-growing NBFC sought to digitize its loan lifecycle—from
              origination to servicing—to keep pace with market demands and
              regulatory complexity. Manual processes led to delayed disbursals,
              scattered data, and inefficient risk assessment. The absence of
              unified visibility between sales, credit, and collections teams
              hindered portfolio oversight. The vision was to build a{" "}
              <strong> scalable, compliance-ready lending platform </strong>{" "}
              that unified teams, automated decisions, and enhanced borrower
              experience.
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy architected a{" "}
              <strong>
                {" "}
                modular Loan Origination and Management Platform (LOS + LMS){" "}
              </strong>{" "}
              built on microservices and workflow orchestration. The system
              automated KYC, credit scoring, approval routing, and repayment
              tracking. Smart rule engines enabled configurable credit policies
              and compliance adherence. Integrated APIs supported PAN
              verification, CIBIL scoring, and payment gateways. The solution
              ensured audit transparency, SLA adherence, and regulatory
              readiness through real-time dashboards and alerts.
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                Borrowers initiated digital applications with real-time
                eligibility checks.
              </li>
              <li>
                Automated KYC, credit rule evaluation, and document validation
                reduced manual effort.
              </li>
              <li>
                Role-based workflows dynamically routed applications for
                approval and disbursement.
              </li>
              <li>
                Loan servicing and EMI management operated via unified
                dashboards.
              </li>
              <li>
                Management tracked delinquency, NPA risk, and performance
                metrics through analytics.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>⚙️ Frontend: Angular </li>
              <li>
                🧠 Backend: Java + Spring Boot + MySQL + Kafka + Microservices
                Architecture + REST APIs
              </li>
              <li>☁️ Cloud: AWS </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                <strong>60% faster loan disbursal cycles</strong> through
                workflow automation.
              </li>
              <li>
                <strong>40% improvement in operational productivity</strong>.
              </li>
              <li>
                <strong>100% digital audit trails</strong> and policy compliance
                readiness.
              </li>
              <li>
                <strong>Seamless scalability</strong> for new financial products
                and integrations.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "smart-food-logging": {
    heroTitle: "Smart Food Logging & Wellness Platform",
    heroSubtitle:
      "Empowering users to achieve healthier lifestyles through intelligent health tracking",
    heroImg:
      "https://images.unsplash.com/photo-1723853310545-b657f3e36396?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              A wellness startup wanted to build a holistic digital ecosystem
              combining nutrition tracking, fitness monitoring, and personalized
              recommendations. The goal was to make wellness measurable and
              intuitive while ensuring seamless integration with third-party
              wearables and food databases. Challenges included{" "}
              <strong>
                {" "}
                data accuracy, personalization at scale, and user retention{" "}
              </strong>{" "}
              in a crowded market.
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy developed a{" "}
              <strong>comprehensive health platform </strong> with AI-powered
              analytics and real-time synchronization. The system allowed users
              to log meals, calculate macronutrients, and receive smart
              recommendations. It integrated with popular fitness wearables and
              employed ML models to analyze user behavior and suggest
              personalized goals. The backend supported large-scale data
              ingestion for analytics and daily progress tracking.
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>Users logged meals via barcode scanning or voice input.</li>
              <li>
                AI calculated calories and nutrient intake, adjusting daily
                goals dynamically.
              </li>
              <li>
                Integrations synced with Fitbit, Apple Health, and Google Fit
                for holistic tracking.{" "}
              </li>
              <li>
                Personalized dashboards provided goal insights and trend
                visualizations.
              </li>
              <li>
                Coaches accessed aggregated progress analytics for guided
                interventions.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>⚙️ Frontend: React Native </li>
              <li>
                🧠 Backend: Node.js + MongoDB + AWS Lambda + Python ML APIs +
                GraphQL
              </li>
              <li>☁️ Cloud: AWS </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                <strong>75% increase in daily active users </strong>
                due to engagement gamification.{" "}
              </li>
              <li>
                <strong>50% reduction in data-entry friction </strong> with
                predictive logging.{" "}
              </li>
              <li>
                <strong>Enhanced retention</strong> through habit-tracking
                algorithms and personalized nudges.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "unified-data-platform": {
    heroTitle: "Unified Data Platform for a Telecom Enterprise ",
    heroSubtitle:
      "Transforming network data into actionable business intelligence ",
    heroImg:
      "https://images.unsplash.com/photo-1643155193188-38eb08e2b54f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              A telecom enterprise operating across multiple regions needed a
              <strong> single source of truth </strong> for network operations,
              customer service, and billing. Legacy systems generated vast but
              fragmented data, slowing down reporting and strategic decisions.
              The challenge was to consolidate multi-format data pipelines,
              automate ETL, and deliver analytics at scale.
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy engineered a{" "}
              <strong> cloud-based unified data platform </strong>
              leveraging real-time streaming, transformation pipelines, and
              advanced visualization. The solution ingested terabytes of data
              from OSS/BSS systems, normalized it using ETL workflows, and
              exposed curated datasets to business dashboards. Automated data
              quality validation and alert mechanisms ensured reliability.
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>Data ingestion from network, CRM, and billing systems. </li>
              <li>
                Kafka and Airflow pipelines processed data in near real time.
              </li>
              <li>
                Cleaned datasets stored in Redshift served analytics and
                dashboards.
              </li>
              <li>
                Power BI visualized KPIs like network uptime, ARPU, and churn
                rate.
              </li>
              <li>
                Predictive models forecasted network load and service demand.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>
                🧠 Backend: Python + Apache Kafka + AWS Redshift + Airflow +
                Power BI + S3 + Lambda
              </li>
              <li>☁️ Cloud: AWS </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                <strong>Centralized analytics</strong> delivering 360°
                operational visibility.
              </li>
              <li>
                <strong>Report generation time reduced by 85%.</strong>
              </li>
              <li>
                <strong>45% improvement in forecasting accuracy </strong>for
                capacity planning.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "agritech-intelligence-platform": {
    heroTitle: "Agri Intelligence Platform for Sustainable Farming ",
    heroSubtitle:
      "Digitizing agriculture through IoT, analytics, and traceability ",
    heroImg:
      "https://images.unsplash.com/photo-1714388870436-d1e8ee3b8c92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              An agriculture company aimed to empower farmers with{" "}
              <strong> data-driven insights </strong> for yield optimization and
              sustainable farming. Manual data collection limited visibility
              into soil health, irrigation, and pest risks. They needed an
              integrated digital ecosystem to unify sensor data, analytics, and
              supply chain visibility.{" "}
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy designed an{" "}
              <strong> IoT-enabled agritech platform </strong> that collected
              field data through soil sensors and drones, applied AI analytics
              for predictions, and offered actionable insights via a mobile
              dashboard. Farmers, distributors, and agronomists accessed
              role-specific views with localized recommendations.
              Blockchain-based traceability ensured supply chain transparency.{" "}
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                IoT sensors transmitted soil, temperature, and moisture data.
              </li>
              <li>
                AI models predicted yield patterns and irrigation schedules.
              </li>
              <li>Farmers received multilingual alerts and guidance.</li>
              <li>Market linkage module connected producers to buyers.</li>
              <li>
                Analytics dashboards visualized regional productivity trends.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>⚙️ Frontend: React </li>
              <li>
                🧠 Backend: Node.js + AWS IoT Core + TensorFlow + PostgreSQL +
                MQTT + Blockchain APIs
              </li>
              <li>☁️ Cloud: AWS </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                <strong>30% higher yield predictability.</strong>
              </li>
              <li>
                <strong>25% savings in water and resource usage.</strong>
              </li>
              <li>
                <strong>Transparent farm-to-market visibility </strong>{" "}
                improving farmer profitability.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "digital-transformation": {
    heroTitle: "Digital Transformation for a Manufacturing Enterprise",
    heroSubtitle: "Bringing intelligence and automation to production floors",
    heroImg:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              A large manufacturer struggled with disconnected systems and
              manual data collection across production lines. The lack of
              real-time insights hindered decision-making and quality control.
              They needed a{" "}
              <strong> centralized manufacturing operations platform </strong>{" "}
              that connected machines, processes, and people.
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy implemented a{" "}
              <strong> smart manufacturing solution </strong> with IoT-enabled
              tracking, automated reporting, and visual analytics. The platform
              collected shop-floor data, measured OEE, and identified
              performance anomalies. Machine data integrated directly with ERP
              for unified visibility.
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>Operators logged job cards digitally via tablets.</li>
              <li>
                IoT sensors captured runtime, temperature, and production
                counts.
              </li>
              <li>
                Dashboards monitored throughput and downtime in real time.
              </li>
              <li>
                Alerts notified supervisors of deviations and maintenance needs.
              </li>
              <li>
                Executives viewed KPIs across plants for planning and
                optimization.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>⚙️ Frontend: Angular </li>
              <li>
                🧠 Backend: Spring Boot + Azure IoT Hub + PostgreSQL + Docker +
                Power BI
              </li>
              <li>☁️ Cloud: Azure </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                <strong>50% faster performance analytics </strong> via
                automation.
              </li>
              <li>
                <strong>20% reduction in unplanned downtime </strong> through
                predictive maintenance.
              </li>
              <li>
                <strong>35% increase in production visibility </strong> across
                facilities.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "retail-operations": {
    heroTitle: "Retail Operations Platform for a Multi-Store Chain ",
    heroSubtitle: "Driving connected commerce through data and automation ",
    heroImg:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              A multi-outlet retail chain lacked unified visibility across
              sales, inventory, and customer engagement. Disconnected POS
              systems created reporting delays and stock inaccuracies. The goal
              was to{" "}
              <strong>
                {" "}
                build a centralized retail intelligence platform{" "}
              </strong>{" "}
              enabling faster decisions and personalized experiences.{" "}
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy developed a{" "}
              <strong> cloud-based retail management platform </strong>
              integrating POS, CRM, and inventory systems. Predictive models
              optimized replenishment while analytics dashboards visualized
              sales performance. Centralized APIs connected loyalty programs and
              third-party e-commerce platforms.{" "}
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>Data consolidated from POS systems across stores.</li>
              <li>
                Automated replenishment triggered based on forecast demand.
              </li>
              <li>
                Dashboards displayed sales, inventory, and profit metrics.
              </li>
              <li>
                Loyalty and promotions data linked for customer insights.{" "}
              </li>
              <li>Alerts flagged underperforming SKUs and store anomalies. </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>⚙️ Frontend: Vue.js </li>
              <li>🧠 Backend: Node.js + MySQL + AWS ECS + Power BI + Redis</li>
              <li>☁️ Cloud: AWS </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                {" "}
                <strong> 40% improvement in inventory accuracy.</strong>
              </li>
              <li>
                {" "}
                <strong> 30% faster replenishment cycles.</strong>
              </li>
              <li>
                <strong>Unified visibility across 25+ stores </strong> enhancing
                agility.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "healthcare-network-management": {
    heroTitle: "Healthcare Network Management System ",
    heroSubtitle: "Enabling connected, data-driven healthcare delivery ",
    heroImg: healthCare,
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              A healthcare network needed to modernize hospital operations while
              ensuring{" "}
              <strong>data security, interoperability, and efficiency </strong>{" "}
              . Paper-based records and siloed systems slowed down workflows and
              reduced patient satisfaction. The objective was to digitize care
              delivery through a secure, scalable platform.
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy built a comprehensive hospital management solution
              integrating patient registration, doctor scheduling, pharmacy, and
              billing. EHR modules ensured secure data exchange between
              departments, while dashboards provided administrators with
              visibility into resource utilization and care efficiency.{" "}
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>Patients booked and tracked appointments online.</li>
              <li>Doctors accessed unified health records and diagnostics.</li>
              <li>Pharmacy and billing systems updated automatically.</li>
              <li>
                Admin dashboards visualized occupancy, turnaround time, and
                performance.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>⚙️ Frontend: React </li>
              <li>🧠 Backend: Java + PostgreSQL + REST APIs + OAuth 2.0 </li>
              <li>☁️ Cloud: AWS </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                <strong>45% faster patient onboarding.</strong>
              </li>
              <li>
                <strong> 100% digital access to medical records.</strong>
              </li>
              <li>
                <strong>Streamlined coordination </strong> across departments
                and facilities.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "smart-governance-portal": {
    heroTitle: "Smart Governance Portal for Public Institutions ",
    heroSubtitle: "Driving transparency and efficiency in digital governance ",
    heroImg:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timelineData: [
      {
        title: "Vision & Challenge ",
        content: (
          <div>
            <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
              A public institution aimed to simplify citizen services and
              enhance accountability through a{" "}
              <strong>centralized digital governance system </strong> .
              Paper-based approvals and fragmented data led to inefficiency and
              poor visibility. The goal was to digitize service delivery while
              ensuring auditability and scalability.
            </p>
          </div>
        ),
      },
      {
        title: "Solution Blueprint ",
        content: (
          <div>
            <p className="mb-6 text-sm text-neutral-800 dark:text-neutral-200">
              Techcanopy developed a <strong> Smart Governance Portal </strong>{" "}
              built on a low-latency, microservices-based architecture. It
              digitized workflows, automated approvals, and provided
              administrators real-time dashboards for performance tracking.
              Citizen self-service features reduced dependency on physical
              offices.
            </p>
          </div>
        ),
      },
      {
        title: "Experience Flow",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>Citizens submitted applications and documents digitally.</li>
              <li>
                Automated validations checked completeness and compliance.
              </li>
              <li>Workflow engines routed tasks dynamically for approval.</li>
              <li>
                Real-time dashboards displayed SLA compliance and service
                trends.
              </li>
              <li>
                System generated transparent audit logs for every transaction.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technology",
        content: (
          <div>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>⚙️ Frontend: Angular </li>
              <li>
                🧠 Backend: Spring Boot + PostgreSQL + Power BI + Microservices
              </li>
              <li>☁️ Cloud: Azure </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Impact",
        content: (
          <div>
            <ul className="mb-6 list-disc pl-6 text-sm text-neutral-800 dark:text-neutral-200 space-y-2">
              <li>
                <strong> 70% reduction in service turnaround time. </strong>
              </li>
              <li>
                <strong>Full traceability </strong> for audit and compliance.
              </li>
              <li>
                <strong>Improved citizen satisfaction </strong> through
                paperless processes.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
};

// Image Carousel
// heroBackground: {
//   type: "carousel",
//   images: ["image1.jpg", "image2.jpg", "image3.jpg"],
//   duration: 4000 // 4 seconds per image
// }

// // Single Image
// heroBackground: {
//   type: "image",
//   src: "background.jpg"
// }

// // Custom Gradient
// heroBackground: {
//   type: "gradient",
//   gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
// }

// // GIF Animation
// heroBackground: {
//   type: "gif",
//   src: "animated-background.gif"
// }

// // Predefined overlays
// heroOverlay: "dark"     // Dark with secondary highlights
// heroOverlay: "light"    // Light overlay
// heroOverlay: "primary"  // Primary color overlay
// heroOverlay: "secondary" // Secondary color overlay
// heroOverlay: "gradient" // Custom gradient overlay

// // Custom overlay
// heroOverlay: {
//   custom: "bg-black/60" // Any Tailwind class
// }
