"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

// Deterministic particle positions to avoid hydration mismatches
const particles = [
  { x: 5, y: 12, size: 3, delay: 0, duration: 6.2 },
  { x: 92, y: 8, size: 2, delay: 0.5, duration: 7.1 },
  { x: 18, y: 78, size: 4, delay: 1.2, duration: 5.8 },
  { x: 73, y: 25, size: 2, delay: 0.8, duration: 6.9 },
  { x: 45, y: 90, size: 3, delay: 1.5, duration: 7.5 },
  { x: 88, y: 65, size: 2, delay: 0.3, duration: 6.4 },
  { x: 30, y: 45, size: 3, delay: 2.0, duration: 5.5 },
  { x: 62, y: 72, size: 4, delay: 1.0, duration: 7.8 },
  { x: 10, y: 35, size: 2, delay: 1.8, duration: 6.1 },
  { x: 80, y: 88, size: 3, delay: 0.6, duration: 5.9 },
  { x: 50, y: 15, size: 2, delay: 2.2, duration: 7.3 },
  { x: 25, y: 60, size: 4, delay: 0.9, duration: 6.7 },
  { x: 95, y: 42, size: 2, delay: 1.4, duration: 5.6 },
  { x: 38, y: 28, size: 3, delay: 1.7, duration: 7.0 },
  { x: 68, y: 55, size: 2, delay: 0.4, duration: 6.3 },
  { x: 15, y: 92, size: 3, delay: 2.5, duration: 5.4 },
  { x: 55, y: 40, size: 4, delay: 1.1, duration: 7.6 },
  { x: 82, y: 18, size: 2, delay: 0.7, duration: 6.8 },
];

export default function Hero() {
  const handleCTAClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.querySelector("#sectors")?.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  return (
    <section
      id="hero"
      className={styles.section}
      style={{ backgroundColor: "#0f0f0f" }}
    >
      {/* Animated grid pattern */}
      <div
        className={styles.gridOverlay}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className={styles.radialOverlay}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(13,115,119,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: "#14919b",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0.15, 0.4, 0],
              y: [0, -30, -15, -35, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Content - visible by default, enhanced with animation */}
      <div
        className={styles.content}
      >
        {/* Tagline */}
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={styles.heading}
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #0d7377, #14919b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Diverse Solutions.
          </span>
          <br />
          <span className={styles.headingWhite}>One Standard.</span>
        </motion.h1>

        {/* Subline */}
        <p
          className={styles.subline}
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Engineering trust. Delivering excellence.
        </p>

        {/* Regions */}
        <p
          className={styles.regions}
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Operating across UAE &bull; China &bull; India
        </p>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a
            href="#sectors"
            onClick={handleCTAClick}
            className={styles.ctaButton}
            style={{
              backgroundColor: "#0d7377",
              boxShadow: "0 10px 40px rgba(13,115,119,0.25)",
            }}
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.scrollLink}
          style={{ color: "rgba(255,255,255,0.3)" }}
          aria-label="Scroll down"
        >
          <span className={styles.scrollText}>Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
