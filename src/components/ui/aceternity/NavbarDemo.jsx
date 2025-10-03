"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavAccordion,
} from "@/components/ui/resizable-navbar";
import { navItems } from "../../../../data";

export function NavbarDemo({ children }) {
  // const navItems = [
  //   {
  //     name: "Features",
  //     dropdown: {
  //       layout: {
  //         columnCount: 2,
  //         width: "600px",
  //         gap: "1rem",
  //       },
  //       items: [
  //         {
  //           type: "link",
  //           label: "Development",
  //           href: "#development",
  //           icon: <IconCode />,
  //           description: "Build your next project with our tools",
  //         },
  //         {
  //           type: "link",
  //           label: "Design",
  //           href: "#design",
  //           icon: <IconPalette />,
  //           description: "Create beautiful user interfaces",
  //         },
  //         {
  //           type: "link",
  //           label: "Analytics",
  //           href: "#analytics",
  //           icon: <IconPhoto />,
  //           description: "Track your application performance",
  //         },
  //         {
  //           type: "link",
  //           label: "Security",
  //           href: "#security",
  //           icon: <IconBrandGithub />,
  //           description: "Keep your application secure",
  //         },
  //         {
  //           type: "link",
  //           label: "Hosting",
  //           href: "#hosting",
  //           icon: <IconCode />,
  //           description: "Deploy your application",
  //         },
  //         {
  //           type: "link",
  //           label: "Database",
  //           href: "#database",
  //           icon: <IconPalette />,
  //           description: "Store your application data",
  //         },
  //         {
  //           type: "image",
  //           src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=250&h=150&fit=crop",
  //           alt: "Code example",
  //           span: "full", // This will make the image span full width
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     name: "Resources",
  //     dropdown: [
  //       {
  //         type: "link",
  //         label: "GitHub",
  //         href: "https://github.com",
  //         icon: <IconBrandGithub />,
  //       },
  //       {
  //         type: "link",
  //         label: "Gallery",
  //         href: "#gallery",
  //         icon: <IconPhoto />,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Contact",
  //     link: "#contact",
  //   },
  // ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="sticky top-0 z-50 p-0 m-0">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.dropdown ? (
                  <AccordionItem item={item} />
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative block px-4 py-2 text-foreground"
                  >
                    {item.name}
                  </a>
                )}
              </React.Fragment>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="mt-0">{children}</div>
    </div>
  );
}

// Add AccordionItem component
const AccordionItem = ({ item }) => (
  <MobileNavAccordion
    label={item.name}
    items={item.dropdown.items || item.dropdown}
  />
);
