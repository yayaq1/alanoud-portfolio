"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import MatrixRain from "@/components/effects/MatrixRain";
import GlitchText from "@/components/effects/GlitchText";

export default function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "AI Engineer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 400);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
      {/* Matrix Rain Background */}
      <MatrixRain opacity={0.15} speed={50} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-primary-blueLight text-lg mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            &lt;Hello, World! /&gt;
          </motion.p>

          {/* Name with Glitch Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <GlitchText
              text="Hassan"
              className="text-gradient"
              isGlitching={isGlitching}
            />
          </h1>

          {/* Typed Title */}
          <motion.div
            className="text-2xl md:text-4xl text-text-light mb-8 h-12 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="text-gradient font-bold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-text-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Crafting intelligent solutions with machine learning, deep learning, and cutting-edge AI technologies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-blue hover:bg-primary-blueLight text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:glow-blue"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-effect hover:bg-white/10 text-text-light rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {[
              { icon: Github, href: "https://github.com/alanoud" },
              { icon: Linkedin, href: "https://linkedin.com/in/alanoud" },
              { icon: Mail, href: "mailto:alanoud@example.com" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light/60 hover:text-primary-blueLight transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-text-light/60 hover:text-primary-blueLight transition-colors cursor-pointer"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

