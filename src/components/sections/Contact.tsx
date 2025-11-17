"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-background-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-darker via-transparent to-background-darker pointer-events-none" />

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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-accent-purple mx-auto mb-8" />
          <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-light mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-text-light/70 mb-8">
                Whether you have a question, a project idea, or just want to say hello, 
                feel free to reach out. I&apos;m always open to discussing new opportunities 
                and innovative AI solutions.
              </p>
            </div>

            <AnimatedCard delay={0.2} tiltEffect={false}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-blue/20 rounded-lg">
                  <Mail className="text-primary-blueLight" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-light mb-1">Email</h4>
                  <a 
                    href="mailto:alanoud@example.com"
                    className="text-text-light/70 hover:text-primary-blueLight transition-colors"
                  >
                    alanoud@example.com
                  </a>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} tiltEffect={false}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-purple/20 rounded-lg">
                  <MapPin className="text-accent-purpleLight" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-light mb-1">Location</h4>
                  <p className="text-text-light/70">Remote / Global</p>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedCard delay={0} tiltEffect={false}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-light mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-text-light/70">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                    >
                      <AlertCircle size={16} />
                      {error}
                    </motion.div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-text-light mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text-light placeholder-text-light/40 focus:outline-none focus:border-primary-blue transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-text-light mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text-light placeholder-text-light/40 focus:outline-none focus:border-primary-blue transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-light mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-text-light placeholder-text-light/40 focus:outline-none focus:border-primary-blue transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-3 bg-primary-blue hover:bg-primary-blueLight disabled:bg-primary-blue/50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

