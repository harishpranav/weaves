"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  { name: "Instagram", icon: "IG", url: "#" },
  { name: "Facebook", icon: "FB", url: "#" },
  { name: "WhatsApp", icon: "WA", url: "#" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-shimmer tracking-[0.4em] text-xs uppercase">
            Let&apos;s Create Together
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-6 italic">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-black border border-gold/20 p-10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-6xl block mb-6">✨</span>
                <h3 className="font-display text-3xl text-white mb-4 italic">
                  Message Received!
                </h3>
                <p className="text-beige/50 font-light">
                  We&apos;ll get back to you within 24 hours. Thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                      Service
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors font-light"
                    >
                      <option value="" className="bg-black">Select a service</option>
                      <option value="custom" className="bg-black">Custom Stitching</option>
                      <option value="wholesale" className="bg-black">Wholesale Order</option>
                      <option value="boutique" className="bg-black">Boutique Collection</option>
                      <option value="alteration" className="bg-black">Alteration / Repair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-shimmer uppercase tracking-widest mb-3 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-gold/20 py-3 text-beige focus:border-gold focus:outline-none transition-colors resize-none font-light"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-black font-medium hover:bg-gold-light transition-colors duration-300 tracking-widest uppercase shimmer"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-black border border-gold/20 p-8">
              <h3 className="font-display text-xl text-white mb-6 italic">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <a href="https://wa.me/923001234567" className="flex items-center gap-4 text-beige/60 hover:text-shimmer transition-colors font-light">
                  <span className="text-lg">💬</span>
                  <span>+92 300 123 4567</span>
                </a>
                <a href="tel:+923001234567" className="flex items-center gap-4 text-beige/60 hover:text-shimmer transition-colors font-light">
                  <span className="text-lg">📞</span>
                  <span>+92 300 123 4567</span>
                </a>
                <a href="mailto:hello@weaves.com" className="flex items-center gap-4 text-beige/60 hover:text-shimmer transition-colors font-light">
                  <span className="text-lg">✉️</span>
                  <span>hello@weaves.com</span>
                </a>
              </div>
            </div>

            <div className="bg-black border border-gold/20 p-8">
              <h3 className="font-display text-xl text-white mb-6 italic">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-14 h-14 bg-black border border-gold/20 flex items-center justify-center text-xs text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-wider"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-black border border-gold/20 p-8">
              <h3 className="font-display text-xl text-white mb-3 italic">Location</h3>
              <p className="text-beige/40 text-sm leading-relaxed font-light">
                Serving clients online and in-person.
                <br />
                Contact us to arrange a visit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
