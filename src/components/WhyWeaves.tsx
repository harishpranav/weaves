"use client";

import { motion } from "framer-motion";

const trustPoints = [
  { icon: "✂️", title: "Precision Craftsmanship", desc: "Every stitch reflects years of expertise and attention to detail" },
  { icon: "📦", title: "300+ Units/Week", desc: "Scalable production capacity without compromising quality" },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden costs. What you see is what you pay" },
  { icon: "⏱️", title: "On-Time Delivery", desc: "Reliable timelines that your business can count on" },
];

export default function WhyWeaves() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Why <span className="text-shimmer">Weaves</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group border border-gold/10 hover:border-gold/30 p-8 text-center transition-all duration-500"
            >
              <span className="text-4xl block mb-4">{point.icon}</span>
              <h3 className="font-display text-xl text-white italic mb-3">{point.title}</h3>
              <p className="text-beige/50 text-sm font-light leading-relaxed">{point.desc}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-0 group-hover:w-full transition-all duration-700 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}