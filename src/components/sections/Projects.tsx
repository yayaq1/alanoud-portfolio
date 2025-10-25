"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects, allTags } from "@/data/projects";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { ExternalLink, Github, Star } from "lucide-react";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filteredProjects = selectedTag === "All"
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-background-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-darker via-background-dark to-background-darker pointer-events-none" />

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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-accent-purple mx-auto mb-8" />
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            Innovative AI solutions that push the boundaries of what&apos;s possible
          </p>
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {["All", ...allTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-primary-blue text-white glow-blue"
                  : "glass-effect text-text-light hover:bg-white/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <AnimatedCard
                  key={project.id}
                  delay={index * 0.1}
                  className="flex flex-col h-full group relative overflow-hidden"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 bg-accent-purple/20 backdrop-blur-sm px-3 py-1 rounded-full border border-accent-purple/30">
                      <Star size={14} className="text-accent-purple fill-accent-purple" />
                      <span className="text-xs text-accent-purpleLight font-medium">Featured</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-text-light mb-3 group-hover:text-primary-blueLight transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-light/70 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-primary-blue/20 text-primary-blueLight rounded-full border border-primary-blue/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <motion.a
                        href={project.github || "#"}
                        className="flex items-center gap-2 text-text-light/70 hover:text-primary-blueLight transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo || "#"}
                        className="flex items-center gap-2 text-text-light/70 hover:text-accent-purpleLight transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              className="text-2xl font-bold text-text-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <AnimatedCard
                  key={project.id}
                  delay={index * 0.1}
                  tiltEffect={false}
                  className="group"
                >
                  <h3 className="text-lg font-bold text-text-light mb-2 group-hover:text-primary-blueLight transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-light/70 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-white/5 text-text-light/60 rounded border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

