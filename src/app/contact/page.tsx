"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    { name: "Instagram", icon: "IG", url: "#" },
    { name: "Facebook", icon: "FB", url: "#" },
    { name: "WhatsApp", icon: "WA", url: "https://wa.me/923001234567" },
  ];

  return (
    <>
    <Navigation />
    <main className="relative bg-black min-h-screen pt-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Get in Touch
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Contact
          </h1>
          <p className="text-beige/50 mt-4 max-w-lg mx-auto font-light">
            Ready to start? Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-black border border-gold/20 p-10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-6xl block mb-6">✨</span>
                <h3 className="font-display text-3xl text-white mb-4 italic">
                  Message Received!
                </h3>
                <p className="text-beige/50 font-light">
                  We&apos;ll get back to you within 24 hours. Thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                    Inquiry Type
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                  >
                    <option value="" className="bg-black">Select inquiry type</option>
                    <option value="boutique" className="bg-black">Custom Tailoring (Boutique)</option>
                    <option value="bulk" className="bg-black">Bulk Order (Garment Hub)</option>
                    <option value="general" className="bg-black">General Inquiry</option>
                    <option value="pricing" className="bg-black">Pricing Chart Request</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors resize-none font-light"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="py-4 bg-gold text-black font-medium hover:bg-gold-light transition-colors duration-300 tracking-widest uppercase shimmer"
                  >
                    Send Message
                  </button>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 border border-gold/40 text-gold text-center hover:bg-gold hover:text-black transition-all duration-300 tracking-widest uppercase text-sm gold-glow"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-black border border-gold/20 p-8">
              <h3 className="font-display text-xl text-white mb-6 italic">Direct Access</h3>
              <div className="space-y-4">
                <a href="https://wa.me/923001234567" className="flex items-center gap-4 text-beige/60 hover:text-shimmer transition-colors font-light">
                  <span className="text-lg">💬</span>
                  <span>+92 300 123 4567</span>
                </a>
                <a href="tel:+923001234567" className="flex items-center gap-4 text-beige/60 hover:text-shimmer transition-colors font-light">
                  <span className="text-lg">📞</span>
                  <span>Call Us</span>
                </a>
                <a href="mailto:hello@weaves.com" className="flex items-center gap-4 text-beige/60 hover:text-shimmer transition-colors font-light">
                  <span className="text-lg">✉️</span>
                  <span>hello@weaves.com</span>
                </a>
              </div>
            </div>

            <div className="bg-black border border-gold/20 p-8">
              <h3 className="font-display text-xl text-white mb-6 italic">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-14 h-14 bg-black border border-gold/20 flex items-center justify-center text-xs text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-wider"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 p-8">
              <h3 className="font-display text-xl text-white mb-3 italic">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-gold hover:text-gold-bright transition-colors text-sm font-light"
                >
                  → Get Pricing Chart
                </a>
                <a
                  href="/boutique"
                  className="block py-2 text-gold hover:text-gold-bright transition-colors text-sm font-light"
                >
                  → Start My Custom Design
                </a>
                <a
                  href="/garment-hub"
                  className="block py-2 text-gold hover:text-gold-bright transition-colors text-sm font-light"
                >
                  → Request Production Quote
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}