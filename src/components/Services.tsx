"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Custom Stitching",
    description:
      "Personalized garments crafted to your exact measurements and style preferences. Every stitch made with precision and care.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c73779587ccf?w=800&q=80",
    category: "Men, Women & Kids",
  },
  {
    number: "02",
    title: "Wholesale Orders",
    description:
      "Bulk stitching for boutiques, retailers, and businesses. Consistent quality at scale with competitive pricing.",
    image:
      "https://images.unsplash.com/photo-1558171813-61f7c68b3b1d?w=800&q=80",
    category: "Business Partners",
  },
  {
    number: "03",
    title: "Boutique Collection",
    description:
      "Exclusive handcrafted pieces for those who appreciate premium quality and unique designs. Limited editions available.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Premium Segment",
  },
  {
    number: "04",
    title: "Alterations & Repairs",
    description:
      "Restore and adjust your existing garments to fit perfectly. We bring new life to your wardrobe favorites.",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80",
    category: "All Garments",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              <div className="absolute top-4 right-4">
                <span className="text-[10px] text-shimmer uppercase tracking-widest border border-gold/20 px-3 py-1.5 bg-black/50 backdrop-blur-sm">
                  {service.category}
                </span>
              </div>

              <div className="p-8 relative">
                <span className="text-gold/20 font-display text-6xl">
                  {service.number}
                </span>
                <h3 className="font-display text-2xl text-white mt-2 italic">
                  {service.title}
                </h3>
                <p className="text-beige/50 text-sm mt-3 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
