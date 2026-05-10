"use client";

const footerLinks = {
  Services: ["Custom Stitching", "Wholesale Orders", "Boutique Collection", "Alterations"],
  Quick: ["Home", "Pricing", "Gallery", "Contact"],
  Support: ["FAQ", "Size Guide", "Care Instructions", "Terms"],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">✂️</span>
              <span className="font-display text-2xl text-shimmer italic">Weaves</span>
            </div>
            <p className="text-beige/30 text-sm leading-relaxed font-light">
              Handcrafted stitching for every occasion. Quality you can feel,
              prices that make sense.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-shimmer text-xs uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-beige/30 text-sm hover:text-gold transition-colors font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-beige/20 text-xs">
            © {new Date().getFullYear()} Weaves. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-beige/20 text-xs hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="text-beige/20 text-xs hover:text-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
