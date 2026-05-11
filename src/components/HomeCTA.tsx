"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase block mb-6">
            Ready to Start?
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white italic mb-6">
            Your Next Step
          </h2>
          <p className="text-beige/50 font-light max-w-lg mx-auto mb-12">
            Get pricing charts instantly or begin your custom design journey with Weaves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 overflow-hidden shimmer-border"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-bright shimmer" />
            <span className="relative z-10 text-black font-medium tracking-wide uppercase text-sm">
              💬 Get Pricing Chart
            </span>
          </a>
          <Link
            href="/boutique"
            className="px-10 py-4 border border-gold/50 text-gold hover:bg-gold/10 transition-all duration-300 tracking-wide uppercase text-sm gold-glow"
          >
            Start My Custom Design
          </Link>
        </motion.div>
      </div>
    </section>
  );
}