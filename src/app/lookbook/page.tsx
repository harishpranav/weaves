"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const categories = [
  { key: "men", label: "Men" },
  { key: "women", label: "Women" },
  { key: "kids", label: "Kids" },
  { key: "uniforms", label: "Uniforms" },
];

const tabs = [
  { key: "boutique", label: "Boutique Showcases" },
  { key: "bulk", label: "Bulk Gallery" },
];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1594938298603-c73779587ccf?w=800&q=80", alt: "Women's formal stitching", category: "women", type: "boutique" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", alt: "Men's traditional wear", category: "men", type: "boutique" },
  { src: "https://images.unsplash.com/photo-1558171813-61f7c68b3b1d?w=800&q=80", alt: "Wholesale collection", category: "women", type: "bulk" },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Boutique pieces", category: "men", type: "boutique" },
  { src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80", alt: "Kids collection", category: "kids", type: "boutique" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Custom embroidery", category: "women", type: "bulk" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", alt: "Uniform stitching", category: "uniforms", type: "bulk" },
  { src: "https://images.unsplash.com/photo-1594938298603-c73779587ccf?w=800&q=80", alt: "Bridal work", category: "women", type: "boutique" },
  { src: "https://images.unsplash.com/photo-1558171813-61f7c68b3b1d?w=800&q=80", alt: "School uniforms", category: "uniforms", type: "bulk" },
  { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", alt: "Kids formal", category: "kids", type: "bulk" },
  { src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80", alt: "Men bulk order", category: "men", type: "bulk" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Custom piece", category: "women", type: "boutique" },
];

export default function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState("men");
  const [activeTab, setActiveTab] = useState("boutique");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = galleryItems.filter(
    (item) => item.category === activeCategory && item.type === activeTab
  );

  return (
    <>
    <Navigation />
    <main className="relative bg-black min-h-screen pt-28 pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Visual Evidence
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Lookbook
          </h1>
          <p className="text-beige/50 mt-4 max-w-lg mx-auto font-light">
            Browse our work — from bespoke boutique pieces to large-scale bulk orders.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gold text-black font-medium"
                  : "border border-gold/20 text-beige/60 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.key
                  ? "border-b-2 border-gold text-gold"
                  : "text-beige/40 hover:text-gold border-b-2 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={`${item.src}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden aspect-[3/4] border border-gold/10 hover:border-gold/40 transition-colors duration-300"
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-beige/30 text-lg font-light">Coming soon — samples are being prepared.</p>
          </div>
        )}
      </div>

      <section className="py-32 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
              The Craft
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white mt-6 italic">
              Before & After
            </h2>
            <p className="text-beige/40 mt-4 max-w-lg mx-auto font-light">
              See the transformation — from sketch to finished garment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", after: "https://images.unsplash.com/photo-1594938298603-c73779587ccf?w=800&q=80", label: "Custom Kurti" },
              { before: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80", after: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", label: "Formal Shirt" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 text-[10px] text-shimmer uppercase tracking-widest bg-black/70 px-2 py-1">Before / Sketch</div>
                  <img src={item.before} alt={`${item.label} before`} className="w-full aspect-[3/4] object-cover border border-gold/20" />
                </div>
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 text-[10px] text-shimmer uppercase tracking-widest bg-black/70 px-2 py-1">After / Final</div>
                  <img src={item.after} alt={`${item.label} after`} className="w-full aspect-[3/4] object-cover border border-gold/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </main>
    <Footer />
    </>
  );
}