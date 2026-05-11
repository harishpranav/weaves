"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const capabilities = [
  { icon: "🏭", title: "300+ Units/Week", desc: "Scalable production capacity for bulk orders" },
  { icon: "✅", title: "Quality Assurance", desc: "Every batch passes multi-point quality checks" },
  { icon: "💰", title: "Wholesale Rates", desc: "Competitive pricing far below market rates" },
  { icon: "⏱️", title: "Reliable Timelines", desc: "On-time delivery you can plan around" },
];

const samplingSteps = [
  { step: "1st & 2nd Sample", cost: "FREE", desc: "First two production samples at no charge" },
  { step: "3rd Sample Onwards", cost: "50%", desc: "Half the actual price for additional samples" },
];

const bulkPricing = [
  { category: "Women's Kurtis", unit: "₹480/unit" },
  { category: "Women's Suits", unit: "₹620/unit" },
  { category: "Men's Shirts", unit: "₹250/unit" },
  { category: "Men's Kurtas", unit: "₹279/unit" },
  { category: "School Uniforms", unit: "₹449–679/unit" },
  { category: "Custom Orders", unit: "Quote-based" },
];

export default function GarmentHubPage() {
  const [formState, setFormState] = useState({ name: "", email: "", company: "", quantity: "", garmentType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
    <Navigation />
    <main className="relative bg-black min-h-screen pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Bulk Manufacturing</span>
          <h1 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Garment <span className="text-shimmer">Hub</span>
          </h1>
          <p className="text-beige/50 mt-4 max-w-lg mx-auto font-light text-lg">
            Bulk services fitting your firm&apos;s budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-gold/10 hover:border-gold/30 p-8 text-center transition-all duration-500"
            >
              <span className="text-4xl block mb-4">{cap.icon}</span>
              <h3 className="font-display text-xl text-white italic mb-2">{cap.title}</h3>
              <p className="text-beige/50 text-sm font-light">{cap.desc}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-0 group-hover:w-full transition-all duration-700 mt-6" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Wholesale Pricing</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mt-6 italic">
            Transparent <span className="text-shimmer">Rates</span>
          </h2>
          <p className="text-beige/40 mt-4 max-w-lg mx-auto font-light">
            No hidden costs. Clear pricing so you can plan with confidence.
          </p>
        </motion.div>

        <div className="border border-gold/20 overflow-hidden mb-20">
          <div className="bg-gradient-to-r from-gold/10 via-transparent to-gold/10 px-6 py-4 flex items-center justify-between border-b border-gold/10">
            <span className="text-xs text-shimmer uppercase tracking-widest">Category</span>
            <span className="text-xs text-beige/40 uppercase tracking-wider">Wholesale Rate</span>
          </div>
          {bulkPricing.map((item) => (
            <div
              key={item.category}
              className="px-6 py-4 flex items-center justify-between hover:bg-gold/5 transition-colors duration-300 border-b border-gold/10 last:border-0"
            >
              <span className="text-beige/70 font-light text-sm">{item.category}</span>
              <span className="text-gold font-display text-lg">{item.unit}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Sampling Policy</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-4 italic mb-8">
              Free Samples, <span className="text-shimmer">Guaranteed</span>
            </h2>
            <div className="space-y-4">
              {samplingSteps.map((s) => (
                <div key={s.step} className="border border-gold/20 p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">{s.step}</h4>
                    <p className="text-beige/40 text-sm font-light">{s.desc}</p>
                  </div>
                  <span className="text-gold font-display text-2xl italic">{s.cost}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Why Weaves</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-4 italic mb-8">
              Built for <span className="text-shimmer">Business</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Market-Beating Prices", desc: "Our wholesale rates consistently undercut market averages while maintaining premium quality." },
                { title: "Scalable Production", desc: "From 50 to 500+ units — same quality, same attention, reliable timeline." },
                { title: "Dedicated Account Manager", desc: "A single point of contact who understands your brand and requirements." },
                { title: "Quality Control Promise", desc: "Multi-stage inspection ensures every batch meets your standards before shipping." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-gold/30 pl-4">
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-beige/40 text-sm font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-32 px-6 md:px-12 bg-black border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-shimmer tracking-[0.4em] text-xs uppercase">Get Started</span>
            <h2 className="font-display text-4xl md:text-6xl text-white mt-6 italic">
              Request a <span className="text-shimmer">Production Quote</span>
            </h2>
          </motion.div>

          {submitted ? (
            <div className="text-center py-12 border border-gold/20">
              <span className="text-6xl block mb-6">✨</span>
              <h3 className="font-display text-3xl text-white mb-4 italic">Quote Request Received!</h3>
              <p className="text-beige/50 font-light">Our team will contact you within 24 hours with a detailed production quote.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="border border-gold/20 p-10 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                    placeholder="business@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Company</label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Estimated Quantity</label>
                  <select
                    value={formState.quantity}
                    onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                  >
                    <option value="" className="bg-black">Select range</option>
                    <option value="50-100" className="bg-black">50–100 units</option>
                    <option value="100-300" className="bg-black">100–300 units</option>
                    <option value="300+" className="bg-black">300+ units</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">Garment Type & Details</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors resize-none font-light"
                  placeholder="Describe your order — garment type, fabric, quantities, timeline..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-black font-medium hover:bg-gold-light transition-colors duration-300 tracking-widest uppercase shimmer"
              >
                Request a Production Quote
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}