"use client";

import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 bg-black/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Weaves logo"
            width={42}
            height={42}
            className="h-10 w-10 rounded-full object-cover border border-gold/30"
            priority
          />
          <span className="font-display text-2xl text-shimmer italic tracking-wider">Weaves</span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-beige/60 hover:text-shimmer transition-all duration-300 tracking-widest uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:block px-6 py-2.5 border border-gold/40 text-xs text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-widest uppercase shimmer-border"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
