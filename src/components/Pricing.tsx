"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const womenWearEasy = [
  { name: "Short Kurti", d2c: 249 },
  { name: "Kurti", d2c: 339 },
  { name: "Kurti Sets", d2c: 480 },
  { name: "Salwar / Anarkali Suits", d2c: 620 },
  { name: "Co-Ords / Fusions", d2c: 483 },
  { name: "Leggings / Inskirts", d2c: 197 },
  { name: "Skirt", d2c: 299 },
  { name: "Blouse", d2c: 310 },
  { name: "Designer / Blouse", d2c: 569 },
  { name: "Innerwears", d2c: 272 },
  { name: "T-shirts", d2c: 219 },
  { name: "Shots", d2c: 249 },
  { name: "Trousers / Track Pants", d2c: 304 },
  { name: "Formal Shirts & Pants Set", d2c: 1000 },
  { name: "Nightwear / Loungewear", d2c: 399 },
  { name: "Lehanga Set", d2c: 1299 },
  { name: "Half Saree", d2c: 999 },
];

const menWearEasy = [
  { name: "Shirt", d2c: 250 },
  { name: "T-Shirt", d2c: 180 },
  { name: "Vest", d2c: 100 },
  { name: "Dhoti", d2c: 100 },
  { name: "Kurta (Basic)", d2c: 279 },
  { name: "Kurta (Premium)", d2c: 459 },
  { name: "Sherwani (Basic)", d2c: 1599 },
  { name: "Sherwani (Premium)", d2c: 2100 },
  { name: "Pant (Basic)", d2c: 380 },
  { name: "Pant (Premium)", d2c: 450 },
  { name: "Shot / Trousers (Basic)", d2c: 199 },
  { name: "Shot / Trousers (Premium)", d2c: 235 },
];

const kidsWearEasy = [
  { name: "School Uniform (Girls)", d2c: 499 },
  { name: "School Uniform (Boys)", d2c: 449 },
  { name: "Uniform - Men", d2c: 679 },
  { name: "Uniform - Women", d2c: 599 },
];

const categories = [
  { name: "Women's Wear", data: womenWearEasy, icon: "👗" },
  { name: "Men's Wear", data: menWearEasy, icon: "👔" },
  { name: "Kids' Wear", data: kidsWearEasy, icon: "👶" },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Transparent Pricing
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Our Pricing
          </h2>
          <p className="text-beige/40 mt-4 max-w-lg mx-auto font-light">
            Quality stitching at prices that respect your budget. No hidden costs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, index) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
                activeTab === index
                  ? "bg-gold text-black font-medium"
                  : "border border-gold/20 text-beige/60 hover:border-gold/50 hover:text-gold"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-gold/20 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-gold/10 via-transparent to-gold/10 px-6 py-4 flex items-center justify-between border-b border-gold/10">
            <span className="text-xs text-shimmer uppercase tracking-widest">
              {categories[activeTab].icon} {categories[activeTab].name}
            </span>
            <span className="text-xs text-beige/40 uppercase tracking-wider">
              D2C Price
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/10">
            {categories[activeTab].data.map((item) => (
              <div
                key={item.name}
                className="px-6 py-4 flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <span className="text-beige/70 font-light text-sm">
                  {item.name}
                </span>
                <span className="text-gold font-display text-lg">
                  ₹{item.d2c.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-beige/30 text-xs tracking-wider uppercase">
            Wholesale & Bulk Orders — Custom Pricing Available
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-3 border border-gold/30 text-gold text-sm hover:bg-gold hover:text-black transition-all duration-300 tracking-widest uppercase shimmer-border"
          >
            Request Wholesale Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
