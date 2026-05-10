"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Share your vision, measurements, and style preferences. We listen carefully and offer expert advice on fabric, cut, and design.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Measurement",
    description:
      "Precise measurements taken for the perfect fit. We account for every detail — posture, comfort preferences, and body shape.",
    icon: "📏",
  },
  {
    number: "03",
    title: "Crafting",
    description:
      "Your garment comes to life with careful stitching, finishing, and quality control at every stage. Made to last.",
    icon: "🧵",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Final fitting, adjustments if needed, and delivery. Your satisfaction is our standard — guaranteed.",
    icon: "✨",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-32 px-6 md:px-12 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Simple & Transparent
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            How It Works
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-gold via-gold-bright to-gold"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 md:text-right">
                <span className="text-gold/10 font-display text-7xl">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl text-white mt-2 italic">
                  {step.title}
                </h3>
                <p className="text-beige/50 text-sm mt-3 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-black border-2 border-gold/30 flex items-center justify-center text-2xl gold-glow">
                {step.icon}
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
