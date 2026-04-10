"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark"
    >
      {/* Animated grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(13,115,119,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-primary-light"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
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

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">Diverse Solutions.</span>
          <br />
          <span className="text-white">One Standard.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          variants={fadeUpVariants}
          className="font-body mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl lg:text-2xl"
        >
          Engineering trust. Delivering excellence.
        </motion.p>

        {/* Regions */}
        <motion.p
          variants={fadeUpVariants}
          className="font-body mt-4 text-sm tracking-widest text-white/35 uppercase sm:text-base"
        >
          Operating across UAE &bull; China &bull; India
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeUpVariants} className="mt-10">
          <a
            href="#sectors"
            onClick={handleCTAClick}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-light hover:shadow-primary-light/30 sm:text-base"
          >
            Explore Our Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/30 transition-colors duration-300 hover:text-white/60"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
