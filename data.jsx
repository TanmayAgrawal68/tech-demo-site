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
  IconCloud,
  IconDatabase,
  IconDeviceMobile,
  IconBrandJavascript,
  IconServer,
  IconSettingsAutomation,
  IconApi,
  IconChartLine,
  IconDeviceDesktop,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

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

  productLinks: [
    {
      title: "Digital Transformation",
      path: "/products/digital-transformation",
      description:
        "Modernize your business with cutting-edge digital solutions",
    },
    {
      title: "Cloud Solutions",
      path: "/products/cloud-solutions",
      description: "Scale your infrastructure with powerful cloud technologies",
    },
    {
      title: "AI & Machine Learning",
      path: "/products/ai-ml",
      description: "Leverage AI to unlock insights and automation",
    },
  ],

  serviceLinks: [
    {
      title: "IT Consulting",
      path: "/services/consulting",
      description: "Strategic technology consulting for your business growth",
    },
    {
      title: "Custom Development",
      path: "/services/development",
      description: "Tailored software solutions for your unique needs",
    },
    {
      title: "Managed Services",
      path: "/services/managed",
      description: "24/7 support and maintenance for your IT infrastructure",
    },
  ],

  // Detailed page data for products
  productPages: {
    "digital-transformation": {
      title: "Digital Transformation",
      subtitle: "Transform Your Business for the Digital Age",
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
          title: "Revolutionary Digital Solutions",
          content:
            "Our digital transformation services help businesses modernize their operations, streamline processes, and leverage cutting-edge technologies to stay competitive in today's fast-paced digital landscape.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Process Automation & Optimization",
            "Cloud Infrastructure Migration",
            "Data Analytics & Business Intelligence",
            "Customer Experience Enhancement",
            "Mobile-First Solutions",
          ],
        },
        {
          id: "benefits",
          title: "Why Choose Our Digital Transformation?",
          content:
            "We combine strategic thinking with technical expertise to deliver transformation that drives real business value. Our approach ensures minimal disruption while maximizing ROI.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "Reduced Operational Costs by 40%",
            "Improved Efficiency & Productivity",
            "Enhanced Customer Satisfaction",
            "Future-Proof Technology Stack",
            "24/7 Expert Support",
          ],
        },
        {
          id: "process",
          title: "Our Proven Transformation Process",
          content:
            "We follow a structured, phased approach to ensure successful digital transformation with minimal risk and maximum impact on your business operations.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Assessment & Strategy Development",
            "Technology Architecture Design",
            "Implementation & Integration",
            "Testing & Quality Assurance",
            "Training & Ongoing Support",
          ],
        },
      ],
    },
    "cloud-solutions": {
      title: "Cloud Solutions",
      subtitle: "Scale Your Infrastructure with Cloud Power",
      heroImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      heroBackground: {
        type: "image",
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
      },
      heroOverlay: "gradient",
      sections: [
        {
          id: "overview",
          title: "Comprehensive Cloud Infrastructure",
          content:
            "Transform your business with our comprehensive cloud solutions. From migration to optimization, we provide end-to-end cloud services that scale with your growth.",
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Multi-Cloud Strategy & Implementation",
            "Cloud Migration & Modernization",
            "Container Orchestration",
            "Serverless Architecture",
            "Cloud Security & Compliance",
          ],
        },
        {
          id: "benefits",
          title: "Cloud Benefits for Your Business",
          content:
            "Experience the power of cloud computing with improved scalability, cost efficiency, and performance. Our solutions are designed to grow with your business needs.",
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "99.9% Uptime Guarantee",
            "Cost Reduction up to 60%",
            "Instant Scalability",
            "Global Infrastructure",
            "Advanced Security Features",
          ],
        },
        {
          id: "services",
          title: "Our Cloud Service Portfolio",
          content:
            "From infrastructure setup to ongoing management, we provide comprehensive cloud services tailored to your specific business requirements and industry standards.",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "AWS, Azure & Google Cloud Expertise",
            "DevOps & CI/CD Implementation",
            "Database Migration & Optimization",
            "Disaster Recovery Solutions",
            "Performance Monitoring & Analytics",
          ],
        },
      ],
    },
    "ai-ml": {
      title: "AI & Machine Learning",
      subtitle: "Unlock the Power of Artificial Intelligence",
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
          title: "Intelligent Solutions for Modern Business",
          content:
            "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation across your organization.",
          image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Predictive Analytics & Forecasting",
            "Natural Language Processing",
            "Computer Vision Solutions",
            "Recommendation Systems",
            "Process Automation with AI",
          ],
        },
        {
          id: "benefits",
          title: "Transform Your Business with AI",
          content:
            "Our AI and ML solutions help you make data-driven decisions, improve customer experiences, and optimize operations for maximum efficiency and growth.",
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          imagePosition: "left",
          features: [
            "50% Faster Decision Making",
            "Improved Customer Insights",
            "Automated Business Processes",
            "Enhanced Predictive Capabilities",
            "Competitive Advantage",
          ],
        },
        {
          id: "solutions",
          title: "AI Solutions We Deliver",
          content:
            "From chatbots to complex predictive models, we develop custom AI solutions that address your specific business challenges and opportunities.",
          image:
            "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
          imagePosition: "right",
          features: [
            "Custom ML Model Development",
            "AI-Powered Chatbots & Virtual Assistants",
            "Image & Video Analysis Systems",
            "Fraud Detection & Prevention",
            "Supply Chain Optimization",
          ],
        },
      ],
    },
  },

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
