import {
  IconBrandGithub,
  IconCode,
  IconPalette,
  IconPhoto,
} from "@tabler/icons-react";
export const navItems = [
  {
    name: "Features",
    dropdown: {
      layout: {
        columnCount: 2,
        width: "600px",
        gap: "1rem",
      },
      items: [
        {
          type: "link",
          label: "Development",
          href: "#development",
          icon: <IconCode />,
          description: "Build your next project with our tools",
        },
        {
          type: "link",
          label: "Design",
          href: "#design",
          icon: <IconPalette />,
          description: "Create beautiful user interfaces",
        },
        {
          type: "link",
          label: "Analytics",
          href: "#analytics",
          icon: <IconPhoto />,
          description: "Track your application performance",
        },
        {
          type: "link",
          label: "Security",
          href: "#security",
          icon: <IconBrandGithub />,
          description: "Keep your application secure",
        },
        {
          type: "link",
          label: "Hosting",
          href: "#hosting",
          icon: <IconCode />,
          description: "Deploy your application",
        },
        {
          type: "link",
          label: "Database",
          href: "#database",
          icon: <IconPalette />,
          description: "Store your application data",
        },
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=250&h=150&fit=crop",
          alt: "Code example",
          span: "full", // This will make the image span full width
        },
      ],
    },
  },
  {
    name: "Resources",
    dropdown: [
      {
        type: "link",
        label: "GitHub",
        href: "https://github.com",
        icon: <IconBrandGithub />,
      },
      {
        type: "link",
        label: "Gallery",
        href: "#gallery",
        icon: <IconPhoto />,
      },
    ],
  },
  {
    name: "Contact",
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
      fontWeight: 200,
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
      fontWeight: 200,
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
      fontWeight: 200,
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
      path: "/products/digital-transformation",
      description: "Digital wallets, embedded finance, and payment automation",
    },
    {
      title: "Edtech Platforms",
      path: "/products/cloud-solutions",
      description:
        "Adaptive learning systems, skill marketplaces, and AI tutors",
    },
    {
      title: "Hospitality Tech",
      path: "/products/ai-ml",
      description: "Smart booking, guest engagement, and operational analytics",
    },
    {
      title: "DOOH Automation",
      path: "/products/ai-ml",
      description:
        "Streamlining inventory, operations, and campaign management",
    },
    {
      title: "Agritech Systems",
      path: "/products/ai-ml",
      description:
        "Precision farming, crop analytics, and supply chain platforms",
    },
    {
      title: "Telecom Innovation",
      path: "/products/ai-ml",
      description: "Network orchestration, 5G enablement, and IoT connectivity",
    },
    {
      title: "Retail Intelligence",
      path: "/products/ai-ml",
      description:
        "Omnichannel commerce, recommendation engines, and smart inventory",
    },
    {
      title: "Medtech Solutions",
      path: "/products/ai-ml",
      description: "Patient management and streamlined health records",
    },
  ],
  // Detailed page data for services
  servicePages: {
    consulting: {
      title: "IT Consulting",
      subtitle: "Strategic Technology Guidance for Your Success",
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
          title: "Expert Technology Consulting",
          content:
            "Our experienced IT consultants provide strategic guidance to help you make informed technology decisions that align with your business goals and drive growth.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Technology Strategy & Planning",
            "Digital Transformation Roadmap",
            "IT Infrastructure Assessment",
            "Security & Compliance Review",
            "Cost Optimization Analysis",
          ],
        },
        {
          id: "approach",
          title: "Our Consulting Methodology",
          content:
            "We follow a proven consulting approach that combines industry expertise with deep technical knowledge to deliver actionable recommendations and strategic insights.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Comprehensive Business Analysis",
            "Technology Gap Assessment",
            "Risk Evaluation & Mitigation",
            "Implementation Planning",
            "Change Management Support",
          ],
        },
        {
          id: "expertise",
          title: "Areas of Expertise",
          content:
            "Our consulting team brings deep expertise across multiple technology domains, ensuring you get the right guidance for your specific industry and business needs.",
          image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Cloud Architecture & Migration",
            "Data Strategy & Analytics",
            "Cybersecurity & Risk Management",
            "DevOps & Agile Transformation",
            "Enterprise Software Selection",
          ],
        },
      ],
    },
    development: {
      title: "Custom Development",
      subtitle: "Tailored Software Solutions for Your Unique Needs",
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
          title: "Bespoke Software Development",
          content:
            "We create custom software solutions that perfectly fit your business requirements. From web applications to mobile apps, we deliver high-quality, scalable solutions.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Web Application Development",
            "Mobile App Development",
            "API Development & Integration",
            "Database Design & Optimization",
            "Third-Party System Integration",
          ],
        },
        {
          id: "process",
          title: "Our Development Process",
          content:
            "We follow agile development methodologies to ensure transparent communication, rapid delivery, and high-quality results that exceed your expectations.",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Requirements Analysis & Planning",
            "UI/UX Design & Prototyping",
            "Agile Development & Testing",
            "Quality Assurance & Deployment",
            "Ongoing Maintenance & Support",
          ],
        },
        {
          id: "technologies",
          title: "Technologies We Master",
          content:
            "Our development team is proficient in the latest technologies and frameworks, ensuring your solution is built with modern, scalable, and maintainable technologies.",
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "React, Vue.js, Angular",
            "Node.js, Python, Java",
            "AWS, Azure, Google Cloud",
            "Docker, Kubernetes",
            "MongoDB, PostgreSQL, MySQL",
          ],
        },
      ],
    },
    managed: {
      title: "Managed Services",
      subtitle: "24/7 IT Support and Infrastructure Management",
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
          title: "Comprehensive IT Management",
          content:
            "Our managed services provide round-the-clock support and proactive management of your IT infrastructure, ensuring maximum uptime and optimal performance.",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "24/7 Monitoring & Support",
            "Proactive Maintenance",
            "Security Management",
            "Backup & Disaster Recovery",
            "Performance Optimization",
          ],
        },
        {
          id: "services",
          title: "Managed Service Offerings",
          content:
            "We offer comprehensive managed services that cover all aspects of your IT infrastructure, from basic support to advanced security and compliance management.",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Infrastructure Monitoring",
            "Security Operations Center (SOC)",
            "Database Administration",
            "Cloud Infrastructure Management",
            "Help Desk & User Support",
          ],
        },
        {
          id: "benefits",
          title: "Why Choose Our Managed Services",
          content:
            "Our managed services help you focus on your core business while we handle the complexity of IT management, providing cost-effective and reliable solutions.",
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Reduced IT Costs",
            "Improved System Reliability",
            "Enhanced Security Posture",
            "Scalable Support Model",
            "Expert Technical Team",
          ],
        },
      ],
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
