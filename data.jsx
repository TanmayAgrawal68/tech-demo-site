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

export const techAreas = [
  {
    name: "Cloud",
    logo: IconCloud,
    style: {
      fontWeight: 200,
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(90deg,#374151,#1e3a8a)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Data Migration",
    logo: IconDatabase,
    style: {
      fontWeight: 200,
      fontFamily: "Roboto, sans-serif",
      background: "linear-gradient(90deg,#4b5563,#2563eb)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "AI & ML",
    logo: IconSettingsAutomation,
    style: {
      fontWeight: 200,
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(90deg,#1f2937,#1e40af)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "DevOps",
    logo: IconServer,
    style: {
      fontWeight: 200,
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(90deg,#374151,#1e3a8a)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Mobile App Development",
    logo: IconDeviceMobile,
    style: {
      fontWeight: 200,
      fontFamily: "Roboto, sans-serif",
      background: "linear-gradient(90deg,#4b5563,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Web App Development",
    logo: IconDeviceDesktop,
    style: {
      fontWeight: 200,
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(90deg,#1f2937,#2563eb)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Cloud Migration",
    logo: IconCloud,
    style: {
      fontWeight: 200,
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(90deg,#374151,#1e3a8a)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "API Development",
    logo: IconApi,
    style: {
      fontWeight: 200,
      fontFamily: "Roboto, sans-serif",
      background: "linear-gradient(90deg,#4b5563,#1e40af)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Data Engineering",
    logo: IconChartLine,
    style: {
      fontWeight: 200,
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(90deg,#1f2937,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
  {
    name: "Enterprise Solutions",
    logo: IconBuildingSkyscraper,
    style: {
      fontWeight: 200,
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(90deg,#374151,#2563eb)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
  },
];

export const homeData = {
  statsData: [
    { title: "Users", value: 1200, icon: FaUsers },
    { title: "Revenue", value: 55000, icon: FaDollarSign },
    { title: "Messages", value: 342, icon: FaComments },
    { title: "Orders", value: 98, icon: FaShoppingCart },
    { title: "Growth", value: "25%", icon: FaChartLine },
    { title: "Likes", value: 1023, icon: FaHeart },
    { title: "Reviews", value: 87, icon: FaStar },
    { title: "Notifications", value: "∞", icon: FaBell },
    { title: "Gifts", value: 12, icon: FaGift },
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
};
