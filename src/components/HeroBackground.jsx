import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroBackground = ({ background, overlay = "dark" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image carousel
  useEffect(() => {
    if (background?.type === "carousel" && background.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === background.images.length - 1 ? 0 : prev + 1
        );
      }, background.duration || 5000);

      return () => clearInterval(interval);
    }
  }, [background]);

  const renderBackground = () => {
    if (!background) {
      // Default gradient background
      return (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
        </div>
      );
    }

    switch (background.type) {
      case "gradient":
        return (
          <div
            className="absolute inset-0"
            style={{
              background:
                background.gradient ||
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          />
        );

      case "image":
        return (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${background.src})`,
            }}
          />
        );

      case "gif":
        return (
          <div className="absolute inset-0">
            <img
              src={background.src}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        );

      case "carousel":
        return (
          <div className="absolute inset-0">
            {background.images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${image})`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentImageIndex ? 1 : 0,
                }}
                transition={{ duration: 1 }}
              />
            ))}
          </div>
        );

      case "video":
        return (
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={background.src} type="video/mp4" />
            </video>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
          </div>
        );
    }
  };

  const renderOverlay = () => {
    if (!overlay || overlay === "none") return null;

    const overlayStyles = {
      dark: "bg-black/50",
      light: "bg-white/30",
      primary: "bg-primary/40",
      secondary: "bg-secondary/40",
      gradient: "bg-gradient-to-br from-black/60 via-black/40 to-black/60",
      custom: overlay.custom || "bg-black/50",
    };

    const overlayClass =
      typeof overlay === "string"
        ? overlayStyles[overlay] || overlayStyles.dark
        : overlayStyles.custom;

    return (
      <div className={`absolute inset-0 ${overlayClass}`}>
        {/* Secondary color highlights */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
      </div>
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {renderBackground()}
      {renderOverlay()}

      {/* Animated background elements for extra visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-accent/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};

export default HeroBackground;
