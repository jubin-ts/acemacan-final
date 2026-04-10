"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectors = [
  "MEP Products",
  "Acoustic Solutions",
  "Global Sourcing",
  "Digital Marketing",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={ref} style={{ backgroundColor: "#0f0f0f" }}>
      <motion.div
        className="mx-auto max-w-7xl px-6 pt-16 pb-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Four-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <span
              className="text-2xl font-bold tracking-wider"
              style={{
                background: "linear-gradient(135deg, #0d7377, #14919b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ACEMACAN
            </span>
            <p className="mt-3 text-sm font-medium text-white/80">
              Diverse Solutions. One Standard.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Connecting businesses with trusted global suppliers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-white/90 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Sectors */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-white/90 uppercase">
              Our Sectors
            </h4>
            <ul className="space-y-2">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="text-sm text-white/50"
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-widest text-white/90 uppercase">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                Dubai, UAE
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="mailto:info@acemacan.ae"
                  className="transition-colors duration-200 hover:text-white"
                >
                  info@acemacan.ae
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="tel:+971542112328"
                  className="transition-colors duration-200 hover:text-white"
                >
                  +971 54 211 2328
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2024 ACEMACAN FZ LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Designed with excellence</p>
        </div>
      </motion.div>
    </footer>
  );
}
