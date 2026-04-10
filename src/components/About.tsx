"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, Package, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Operations",
    description: "Strategic presence across UAE, China, and India for seamless international trade.",
  },
  {
    icon: Zap,
    title: "Quality & Speed",
    description: "Unwavering commitment to delivering premium products with unmatched reliability.",
  },
  {
    icon: Package,
    title: "Universal Procurement",
    description: "Procure anything, anywhere — from specialized materials to industrial equipment.",
  },
  {
    icon: Users,
    title: "Trusted Partners",
    description: "A connected global network of vetted suppliers and logistics professionals.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* SVG globe with animated supply-chain arcs */
function SupplyChainGlobe() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
    >
      {/* Soft glow behind globe */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(13,115,119,0.12) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-label="Animated globe showing supply chain connections"
      >
        {/* Globe outline */}
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="rgba(13,115,119,0.15)"
          strokeWidth="1.5"
        />

        {/* Latitude lines */}
        {[-60, -30, 0, 30, 60].map((offset) => (
          <ellipse
            key={`lat-${offset}`}
            cx="200"
            cy={200 + offset}
            rx={Math.sqrt(150 * 150 - offset * offset)}
            ry="12"
            stroke="rgba(13,115,119,0.08)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        ))}

        {/* Longitude lines */}
        {[0, 45, 90, 135].map((angle) => (
          <ellipse
            key={`lon-${angle}`}
            cx="200"
            cy="200"
            rx={Math.abs(Math.cos((angle * Math.PI) / 180)) * 150 || 12}
            ry="150"
            stroke="rgba(13,115,119,0.08)"
            strokeWidth="1"
            strokeDasharray="4 6"
            transform={`rotate(${angle > 90 ? angle - 180 : 0} 200 200)`}
          />
        ))}

        {/* Rotating dotted ring — outer orbit */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="170"
            stroke="rgba(13,115,119,0.12)"
            strokeWidth="1"
            strokeDasharray="3 8"
            fill="none"
          />
        </motion.g>

        {/* Rotating dotted ring — inner orbit (reverse) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <ellipse
            cx="200"
            cy="200"
            rx="130"
            ry="60"
            stroke="rgba(20,145,155,0.18)"
            strokeWidth="1"
            strokeDasharray="5 7"
            fill="none"
            transform="rotate(-25 200 200)"
          />
        </motion.g>

        {/* Supply-chain arc: UAE → China */}
        <motion.path
          d="M 155 145 Q 200 80 280 160"
          stroke="url(#arcGrad1)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
        />

        {/* Supply-chain arc: China → India */}
        <motion.path
          d="M 280 160 Q 310 230 230 270"
          stroke="url(#arcGrad2)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Supply-chain arc: India → UAE */}
        <motion.path
          d="M 230 270 Q 140 280 155 145"
          stroke="url(#arcGrad3)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 1.2, ease: "easeInOut" }}
        />

        {/* Location nodes */}
        {[
          { cx: 155, cy: 145, label: "UAE" },
          { cx: 280, cy: 160, label: "China" },
          { cx: 230, cy: 270, label: "India" },
        ].map((node, i) => (
          <g key={node.label}>
            {/* Pulse ring */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              fill="none"
              stroke="rgba(13,115,119,0.3)"
              strokeWidth="1"
              animate={{ r: [12, 20, 12], opacity: [0.4, 0, 0.4] }}
              transition={{
                duration: 2.5,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Core dot */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="5"
              fill="#0d7377"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            {/* Inner highlight */}
            <circle cx={node.cx - 1} cy={node.cy - 1} r="2" fill="#14919b" />
            {/* Label */}
            <text
              x={node.cx}
              y={node.cy - 16}
              textAnchor="middle"
              fill="rgba(13,115,119,0.7)"
              fontSize="11"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Travelling dot on UAE→China arc */}
        <motion.circle
          r="3"
          fill="#14919b"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          style={{ offsetPath: "path('M 155 145 Q 200 80 280 160')" }}
        />

        {/* Travelling dot on China→India arc */}
        <motion.circle
          r="3"
          fill="#14919b"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
          style={{ offsetPath: "path('M 280 160 Q 310 230 230 270')" }}
        />

        {/* Travelling dot on India→UAE arc */}
        <motion.circle
          r="3"
          fill="#14919b"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 3 }}
          style={{ offsetPath: "path('M 230 270 Q 140 280 155 145')" }}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="arcGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d7377" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#14919b" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="arcGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14919b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0d7377" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="arcGrad3" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0d7377" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#14919b" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(13,115,119,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Who We Are
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="gradient-text">About ACEMACAN</span>
          </h2>
        </motion.div>

        {/* Two-column layout: text + globe */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-lg leading-relaxed text-muted sm:text-xl">
              At ACEMACAN, we connect businesses with trusted global suppliers
              and deliver high-quality products with unmatched speed and
              reliability. Operating across UAE, China, and India, we enable
              seamless procurement for MEP, safety, acoustics, digital services,
              and specialized materials. We procure all kinds of goods worldwide.
            </p>

            {/* Accent divider */}
            <div className="my-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
              <span className="text-xs font-semibold tracking-widest text-primary/50 uppercase">
                Our Edge
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
            </div>

            {/* Feature cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass-card hover-lift group rounded-2xl p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <feat.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="font-heading mb-1 text-sm font-bold text-secondary">
                    {feat.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-muted">
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — animated globe */}
          <div className="order-first lg:order-last">
            <SupplyChainGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
