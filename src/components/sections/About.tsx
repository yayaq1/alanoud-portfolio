"use client";

import { motion } from "framer-motion";
import { Brain, Code, Sparkles, Zap } from "lucide-react";
import ParticleSystem from "@/components/effects/ParticleSystem";

const stats = [
  { icon: Brain, label: "AI Projects", value: "25+" },
  { icon: Code, label: "Lines of Code", value: "100K+" },
  { icon: Sparkles, label: "Models Trained", value: "50+" },
  { icon: Zap, label: "Years Experience", value: "4+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-background-dark">
      {/* Particle Background */}
      <ParticleSystem particleCount={40} connectionDistance={120} />

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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-accent-purple mx-auto" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-light/90 text-lg leading-relaxed mb-6">
              I&apos;m an AI Engineer passionate about pushing the boundaries of what&apos;s possible with artificial intelligence. 
              My journey in AI started with a fascination for how machines can learn and adapt, and has evolved into building 
              production-ready systems that solve real-world problems.
            </p>
            <p className="text-text-light/90 text-lg leading-relaxed mb-6">
              With expertise in machine learning, deep learning, and natural language processing, I specialize in creating 
              intelligent solutions that bridge the gap between cutting-edge research and practical applications.
            </p>
            <p className="text-text-light/90 text-lg leading-relaxed">
              When I&apos;m not training models or optimizing algorithms, you&apos;ll find me exploring the latest AI research 
              papers, contributing to open-source projects, or mentoring aspiring AI engineers.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="glass-effect rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary-blueLight" />
                  <p className="text-3xl font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-text-light/70 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

