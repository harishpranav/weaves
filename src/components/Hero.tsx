"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

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
          className="font-display text-6xl md:text-[5rem] lg:text-[7rem] text-white mb-8 leading-[0.95] tracking-tight"
        >
          Crafted for <span className="text-shimmer italic">You</span>
          <br />
          <span className="font-light text-beige/90">Scaled for Business</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-beige/60 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light"
        >
          Whether you need a single custom piece or bulk production at scale — Weaves delivers quality, precision, and value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          <Link
            href="/boutique"
            className="group relative px-8 py-6 overflow-hidden border border-gold/30 hover:border-gold/60 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-xs text-beige/40 uppercase tracking-widest block mb-2">Funnel A</span>
              <span className="text-shimmer text-lg md:text-xl font-display italic block mb-2">Get Your Dress Customized</span>
              <span className="text-beige/50 text-xs">Custom tailoring for individuals →</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-0 group-hover:w-full transition-all duration-700 absolute bottom-0" />
          </Link>

          <Link
            href="/garment-hub"
            className="group relative px-8 py-6 overflow-hidden border border-gold/30 hover:border-gold/60 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="text-xs text-beige/40 uppercase tracking-widest block mb-2">Funnel B</span>
              <span className="text-shimmer text-lg md:text-xl font-display italic block mb-2">Bulk Inquiry / B2B</span>
              <span className="text-beige/50 text-xs">Wholesale & manufacturing →</span>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-0 group-hover:w-full transition-all duration-700 absolute bottom-0" />
          </Link>
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