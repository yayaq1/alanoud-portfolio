"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills, skillCategories } from "@/data/skills";
import AnimatedCard from "@/components/ui/AnimatedCard";
import NeuralNetwork from "@/components/effects/NeuralNetwork";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-background-darker">
      {/* Neural Network Background */}
      <NeuralNetwork nodeCount={25} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-accent-purple mx-auto mb-8" />
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks for building intelligent systems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {["All", ...skillCategories].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-blue text-white glow-blue"
                  : "glass-effect text-text-light hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <AnimatedCard
              key={skill.name}
              delay={index * 0.05}
              tiltEffect={true}
              className="group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-text-light group-hover:text-primary-blueLight transition-colors">
                  {skill.name}
                </h3>
                <span className="text-primary-blue font-bold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-blue to-accent-purple rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.1 
                  }}
                />
              </div>

              {/* Category Tag */}
              <div className="mt-3">
                <span className="text-xs text-text-light/50 font-mono">
                  {skill.category}
                </span>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

