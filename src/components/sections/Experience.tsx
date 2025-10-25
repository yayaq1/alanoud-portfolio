"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-background-darker">
      {/* Gradient Background */}
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
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-accent-purple mx-auto mb-8" />
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            My professional journey in artificial intelligence and machine learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-accent-purple to-primary-blue transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-12 md:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary-blue rounded-full border-4 border-background-darker transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-primary-blue rounded-full animate-ping opacity-75" />
              </div>

              {/* Content Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <AnimatedCard delay={0} tiltEffect={false} className="relative">
                  {/* Period Badge */}
                  <div className="absolute -top-3 right-6 bg-accent-purple px-4 py-1 rounded-full">
                    <span className="text-xs font-mono text-white">{exp.period}</span>
                  </div>

                  {/* Header */}
                  <div className="mb-4 pt-2">
                    <h3 className="text-2xl font-bold text-text-light mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col gap-2 text-text-light/70">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-primary-blue" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent-purple" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-text-light/70 text-sm flex gap-2">
                        <span className="text-primary-blue mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primary-blue/10 text-primary-blueLight rounded-full border border-primary-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

