"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

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
      <div
        className={styles.container}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className={styles.grid}>
          <div>
            <span
              className={styles.brandName}
              style={{
                background: "linear-gradient(135deg, #0d7377, #14919b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ACEMACAN
            </span>
            <p className={styles.tagline}>
              Diverse Solutions. One Standard.
            </p>
            <p className={styles.description}>
              Connecting businesses with trusted global suppliers.
            </p>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>
              Quick Links
            </h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={styles.link}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>
              Our Sectors
            </h4>
            <ul className={styles.linkList}>
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className={styles.sectorItem}
                >
                  {sector}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>
              Contact Info
            </h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                Dubai, UAE
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <a
                  href="mailto:info@acemacan.ae"
                  className={styles.contactLink}
                >
                  info@acemacan.ae
                </a>
              </li>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <a
                  href="tel:+971542112328"
                  className={styles.contactLink}
                >
                  +971 54 211 2328
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.smallText}>
            © 2024 ACEMACAN FZ LLC. All rights reserved.
          </p>
          <p className={styles.smallText}>Designed with excellence</p>
        </div>
      </div>
    </footer>
  );
}
