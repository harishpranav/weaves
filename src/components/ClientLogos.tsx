"use client";

import { motion } from "framer-motion";

const brands = [
  "Fashion House Co.",
  "Elite Stitches",
  "Urban Thread",
  "Royal Fabrics",
  "StyleCraft",
  "ThreadLine",
];

export default function ClientLogos() {
  return (
    <section className="py-20 px-6 md:px-12 bg-black border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-beige/40 text-xs uppercase tracking-[0.3em]">
            Brands that are already out there
          </span>
        </motion.div>

        <div className="overflow-hidden relative">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-beige/20 font-display text-2xl italic tracking-wider flex-shrink-0"
              >
                {brand}
              </span>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}