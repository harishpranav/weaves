"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Amina Rahman",
    role: "Bridal Client",
    text: "They transformed my wedding dress vision into reality. The attention to detail was extraordinary — every stitch was perfect.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
  },
  {
    name: "Farhan Khan",
    role: "Business Owner",
    text: "We order 200+ pieces monthly for our boutique. Consistent quality, on-time delivery, and prices that make sense.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    role: "Regular Customer",
    text: "My kids outgrow clothes fast, but finding quality stitching at fair prices was always hard. Now I bring everything here.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
    rating: 5,
  },
  {
    name: "Omar Malik",
    role: "Wholesale Buyer",
    text: "Professional, reliable, and the stitching quality rivals brands that charge triple the price. I've been working with them for 2 years.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 md:px-12 relative overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')] bg-cover bg-center opacity-[0.03]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Client Stories
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            What They Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-black border border-gold/10 p-10 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-shimmer text-lg">★</span>
                ))}
              </div>

              <p className="text-beige/70 text-base leading-relaxed italic font-light">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <p className="text-white font-display text-lg italic">{testimonial.name}</p>
                  <p className="text-gold/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
