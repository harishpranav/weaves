"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-shimmer tracking-[0.5em] text-xs md:text-sm uppercase mb-8 font-light tracking-widest">
            Premium Stitching Services
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display text-7xl md:text-[5rem] lg:text-[8rem] text-white mb-8 leading-[0.9] tracking-tight"
        >
          <span className="text-shimmer italic">Weaves</span>
          <br />
          <span className="font-light text-beige/90">of Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-beige/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Handcrafted tailoring for men, women, and kids. Wholesale and boutique
          quality at prices that respect your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#pricing"
            className="group relative px-10 py-4 overflow-hidden shimmer-border"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-bright shimmer" />
            <span className="relative z-10 text-black font-medium tracking-wide uppercase text-sm">
              View Pricing
            </span>
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-gold/50 text-gold hover:bg-gold/10 transition-all duration-300 tracking-wide uppercase text-sm gold-glow"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border border-gold/40 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gold rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
