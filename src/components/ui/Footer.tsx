"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/alanoud" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/alanoud" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/alanoud" },
  { name: "Email", icon: Mail, href: "mailto:alanoud@example.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background-darker border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            className="text-text-light/60 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Alanoud. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light/60 hover:text-primary-blueLight transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Made with love */}
          <motion.p
            className="text-text-light/60 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Built with <span className="text-primary-blue">Next.js</span> & <span className="text-accent-purple">AI</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

