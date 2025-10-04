"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import {
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  motion,
} from "motion/react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible ? "var(--shadow-lg)" : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex",
        visible && "bg-background/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavDropdown = ({ children, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Extract layout configuration from items, defaulting to single column
  const layout = items.layout || {
    columnCount: 1,
    width: "200px",
    gap: "0.5rem",
  };
  const dropdownItems = items.items || items;

  return (
    <motion.div
      className={cn("relative", className)}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-1">
        {children}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <IconChevronDown size={16} className="text-foreground" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              width: layout.width,
              display: "grid",
              gridTemplateColumns: `repeat(${layout.columnCount}, minmax(0, 1fr))`,
              gap: layout.gap,
              left: `calc(50% - ${parseInt(layout.width) / 2}px)`,
              transform: "translateX(-50%)",
            }}
            className="fixed mt-2 rounded-lg bg-popover p-4 shadow-lg dark:bg-popover"
          >
            {dropdownItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={cn(
                  "relative rounded-md",
                  item.span === "full" && `col-span-${layout.columnCount}`
                )}
                onHoverStart={() => setHoveredItem(idx)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {item.type === "link" ? (
                  <a
                    href={item.href}
                    className="group relative flex flex-col gap-1 rounded-md p-3 text-sm text-popover-foreground transition-colors"
                  >
                    <div className="flex items-center gap-2 hover:text-secondary">
                      {item.icon && (
                        <motion.span
                          className="text-lg text-muted-foreground"
                          animate={
                            hoveredItem === idx
                              ? {
                                  scale: [1, 1.2, 1, 1.1, 1],
                                  rotate: [0, -10, 10, -5, 0],
                                  color: "var(--secondary)",
                                }
                              : {
                                  scale: 1,
                                  rotate: 0,
                                  color: "currentColor",
                                }
                          }
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                          }}
                        >
                          {item.icon}
                        </motion.span>
                      )}
                      <span className="font-medium relative">
                        {item.label}
                        <motion.span
                          className="absolute bottom-0 left-0 h-[2px] w-0 bg-secondary"
                          initial={false}
                          animate={{
                            width: hoveredItem === idx ? "100%" : "0%",
                          }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      </span>
                    </div>
                    {item.description && (
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                  </a>
                ) : item.type === "image" ? (
                  <motion.div
                    className="overflow-hidden rounded-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-md font-medium text-foreground transition duration-200 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) =>
        item.dropdown ? (
          <NavDropdown
            key={`dropdown-${idx}`}
            items={item.dropdown}
            className="relative px-4 py-2 text-foreground"
          >
            <span className="relative z-20">{item.name}</span>
          </NavDropdown>
        ) : (
          <a
            key={`link-${idx}`}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative px-4 py-2 text-foreground"
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-muted"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        )
      )}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible ? "var(--shadow-lg)" : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-background/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavAccordion = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-muted">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground"
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground"
        >
          <IconChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.1, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.1 },
              },
            }}
            className="overflow-hidden bg-muted/50"
          >
            <div className="flex flex-col gap-1 px-2 pb-3">
              {items.map((item, idx) =>
                item.type === "link" ? (
                  <a
                    key={`accordion-item-${idx}`}
                    href={item.href}
                    className="flex items-center gap-2 rounded-md px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                  >
                    {item.icon && (
                      <span className="text-muted-foreground">{item.icon}</span>
                    )}
                    {item.label}
                  </a>
                ) : item.type === "image" ? (
                  <div key={`accordion-image-${idx}`} className="px-4 py-2">
                    <img src={item.src} alt={item.alt} className="rounded-md" />
                  </div>
                ) : null
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-popover px-4 py-8 shadow-lg",
            className
          )}
        >
          {React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              typeof child.props === "object"
            ) {
              const { item } = child.props;
              if (item?.dropdown) {
                return (
                  <MobileNavAccordion
                    key={`mobile-accordion-${item.name}`}
                    label={item.name}
                    items={item.dropdown}
                  />
                );
              }
            }
            return child;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-foreground" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-foreground" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <img
        src="https://www.techcanopy.com/wp-content/uploads/2024/05/tec-log.svg"
        alt="logo"
        width={180}
        height={100}
      />
      {/* <span className="font-medium text-foreground">Startup</span> */}
    </a>
  );
};

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: "bg-secondary text-primary-foreground shadow-lg",
    secondary: "bg-transparent text-foreground",
    dark: "bg-background text-foreground shadow-lg",
    gradient:
      "bg-gradient-to-b from-primary to-secondary text-primary-foreground shadow-lg",
  };

  return (
    <a
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
};
