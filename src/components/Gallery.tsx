"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1594938298603-c73779587ccf?w=800&q=80", alt: "Women's formal stitching", category: "Women" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", alt: "Men's traditional wear", category: "Men" },
  { src: "https://images.unsplash.com/photo-1558171813-61f7c68b3b1d?w=800&q=80", alt: "Wholesale collection", category: "Wholesale" },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Boutique pieces", category: "Boutique" },
  { src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80", alt: "Kids collection", category: "Kids" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Custom embroidery", category: "Custom" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", alt: "Formal suits", category: "Men" },
  { src: "https://images.unsplash.com/photo-1594938298603-c73779587ccf?w=800&q=80", alt: "Bridal stitching", category: "Women" },
];

const categories = ["All", "Men", "Women", "Kids", "Wholesale", "Boutique"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Our Work
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Gallery
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-black"
                  : "border border-gold/20 text-beige/60 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer overflow-hidden aspect-square border border-gold/10 hover:border-gold/40 transition-colors duration-300"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest border border-white/50 px-4 py-2">
                  View
                </span>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] text-shimmer uppercase tracking-widest bg-black/70 px-2 py-1">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-beige/60 hover:text-gold text-4xl transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain border border-gold/20"
          />
        </motion.div>
      )}
    </section>
  );
}
