import React from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "../../components/ui/TextAnimate";
import HeroBackground from "../../components/HeroBackground";

const DetailPage = ({ pageData }) => {
  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-foreground/70">
            The requested page could not be found.
          </p>
        </div>
      </div>
    );
  }

  const { title, subtitle, sections, heroBackground, heroOverlay } = pageData;

  return (
    <div className="bg-background">
      {/* Hero Section with Flexible Background */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <HeroBackground
          background={heroBackground}
          overlay={heroOverlay || "dark"}
        />

        <div className="relative z-10 text-center text-foreground max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextAnimate
              text={title}
              type="fadeInUp"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2 bg-gradient-to-r from-white to-secondary/90 bg-clip-text text-transparent leading-tight"
            />
            <TextAnimate
              text={subtitle}
              type="fadeInUp"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto px-2 leading-relaxed"
              delay={0.3}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Content Sections with Zig-Zag Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            className={`mb-16 sm:mb-20 md:mb-24 lg:mb-32 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex flex-col lg:flex items-start lg:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Content */}
            <div className="flex-1 space-y-4 sm:space-y-6 max-w-lg lg:max-w-xl xl:max-w-2xl min-w-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <motion.h2
                  className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight break-words hyphens-auto overflow-wrap-anywhere"
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                    hyphens: "auto",
                    WebkitHyphens: "auto",
                    msHyphens: "auto",
                    display: "block",
                    overflow: "visible",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h2>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed break-words"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {section.content}
              </motion.p>

              {/* Features List */}
              <motion.div
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {section.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-start sm:items-center space-x-2 sm:space-x-3"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + featureIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0 mt-1.5 sm:mt-0" />
                    <span className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              className="flex-1 w-full min-w-0 lg:min-w-[400px] xl:min-w-[500px]"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 overflow-hidden"
                  style={{
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Call to Action Section */}
      <motion.section
        className="bg-muted/50 py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <TextAnimate
            text="Ready to Get Started?"
            type="fadeInUp"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
          />
          <motion.p
            className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help transform your business with our
            solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DetailPage;
