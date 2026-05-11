"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Boutique", href: "/boutique" },
  { label: "Garment Hub", href: "/garment-hub" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 bg-black/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Weaves logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs text-beige/60 hover:text-shimmer transition-all duration-300 tracking-widest uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-6 py-2.5 border border-gold/40 text-xs text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-widest uppercase shimmer-border"
          >
            Book Now
          </Link>
        </div>

        <button
          className="lg:hidden text-beige/60 hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gold/10 mt-5 -mx-6 md:-mx-12 px-6 py-8">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-beige/60 hover:text-shimmer transition-all duration-300 tracking-widest uppercase block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-8 px-6 py-2.5 border border-gold/40 text-xs text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-widest uppercase shimmer-border"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}