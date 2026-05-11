"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const garmentTypes = [
  { name: "Kurtis & Suits", icon: "👗", desc: "Short kurtis, salwar suits, anarkalis" },
  { name: "Lehengas", icon: "✨", desc: "Bridal & party lehanga sets" },
  { name: "Blouses", icon: "🪡", desc: "Designer & regular blouses" },
  { name: "Men's Wear", icon: "👔", desc: "Shirts, kurtas, sherwanis, pants" },
  { name: "Kids' Wear", icon: "👶", desc: "School uniforms & casual" },
  { name: "Alterations", icon: "🔧", desc: "Repairs, resizing, refitting" },
];

const steps = [
  { number: "01", title: "Pick Your Style", desc: "Browse categories or upload a reference image from Pinterest, Instagram, or anywhere." },
  { number: "02", title: "Share Measurements", desc: "Follow our guided measurement video to ensure the perfect fit." },
  { number: "03", title: "Design Sketch", desc: "Get a professional sketch for just ₹120 — see your garment before it's made." },
  { number: "04", title: "Receive & Wear", desc: "Your handcrafted garment is delivered to your door, tailored to perfection." },
];

export default function BoutiquePage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", garmentType: "", reference: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
    <Navigation />
    <main className="relative bg-black min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Custom Tailoring</span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Weaves <span className="text-shimmer">Boutique</span>
          </h1>
          <p className="text-beige/50 mt-4 max-w-lg mx-auto font-light text-lg">
            Perfect fit at a pocket-friendly budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {garmentTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-gold/10 hover:border-gold/30 p-8 text-center transition-all duration-500"
            >
              <span className="text-4xl block mb-4">{type.icon}</span>
              <h3 className="font-display text-xl text-white italic mb-2">{type.name}</h3>
              <p className="text-beige/40 text-sm font-light">{type.desc}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-0 group-hover:w-full transition-all duration-700 mt-6" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">How It Works</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mt-6 italic">Your Custom Journey</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gold/10 p-8 relative"
            >
              <span className="text-gold/10 font-display text-6xl">{step.number}</span>
              <h3 className="font-display text-xl text-white mt-2 italic">{step.title}</h3>
              <p className="text-beige/50 text-sm mt-3 leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Reference Tool</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-4 italic mb-4">
              Upload Your <span className="text-shimmer">Inspiration</span>
            </h2>
            <p className="text-beige/50 font-light leading-relaxed mb-6">
              Found something you love on Pinterest, Instagram, or elsewhere? Upload the reference image and our designers will craft your vision into reality. Share any design, pattern, or silhouette that inspires you.
            </p>
            <div className="border border-gold/20 border-dashed p-8 text-center">
              <span className="text-4xl block mb-3">📎</span>
              <p className="text-beige/30 text-sm">Upload feature coming soon — message us directly on WhatsApp for now</p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 border border-gold/30 text-xs text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-widest uppercase"
              >
                Share on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Measurement Guide</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-4 italic mb-4">
              Perfect <span className="text-shimmer">Measurements</span>
            </h2>
            <p className="text-beige/50 font-light leading-relaxed mb-6">
              Our guided measurement video ensures you provide accurate sizing from the comfort of your home. No guesswork, no misfits.
            </p>
            <div className="border border-gold/20 p-8 aspect-video flex items-center justify-center bg-gold/[0.02]">
              <div className="text-center">
                <span className="text-6xl block mb-4">🎬</span>
                <p className="text-beige/30 text-sm">Measurement video coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-gold/20 p-8 mb-8 text-center"
        >
          <span className="text-4xl block mb-4">✏️</span>
          <h3 className="font-display text-2xl text-white italic mb-3">Design Sketch Service</h3>
          <p className="text-beige/50 font-light mb-2">
            Not sure about the design? Let our professional designers sketch it for you.
          </p>
          <span className="text-gold font-display text-3xl italic">₹120</span>
          <p className="text-beige/30 text-xs mt-2">per sketch • applied toward your final order</p>
        </motion.div>
      </div>

      <section className="py-32 px-6 md:px-12 bg-black border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Start Your Design</span>
            <h2 className="font-display text-4xl md:text-6xl text-white mt-6 italic">
              Get Custom <span className="text-shimmer">Tailored</span>
            </h2>
          </motion.div>

          {submitted ? (
            <div className="text-center py-12 border border-gold/20">
              <span className="text-6xl block mb-6">✨</span>
              <h3 className="font-display text-3xl text-white mb-4 italic">Request Received!</h3>
              <p className="text-beige/50 font-light">We&apos;ll reach out within 24 hours to discuss your custom order.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="border border-gold/20 p-10 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Name</label>
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
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Email</label>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Phone</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Garment Type</label>
                  <select
                    value={formState.garmentType}
                    onChange={(e) => setFormState({ ...formState, garmentType: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                  >
                    <option value="" className="bg-black">Select garment type</option>
                    {garmentTypes.map((g) => (
                      <option key={g.name} value={g.name} className="bg-black">{g.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Describe Your Design</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors resize-none font-light"
                  placeholder="Tell us about your dream garment..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-black font-medium hover:bg-gold-light transition-colors duration-300 tracking-widest uppercase shimmer"
              >
                Start My Custom Design
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}