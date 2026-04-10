"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, Package, Users } from "lucide-react";
import styles from "./About.module.css";

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

/* SVG globe with animated supply-chain arcs */
function SupplyChainGlobe() {
  return (
    <div className={styles.globeWrapper}>
      {/* Soft glow behind globe */}
      <div
        className={styles.globeGlow}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(13,115,119,0.12) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.globeSvg}
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

        {/* Supply-chain arcs (visible by default) */}
        <path
          d="M 155 145 Q 200 80 280 160"
          stroke="url(#arcGrad1)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 280 160 Q 310 230 230 270"
          stroke="url(#arcGrad2)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 230 270 Q 140 280 155 145"
          stroke="url(#arcGrad3)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
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
            <circle
              cx={node.cx}
              cy={node.cy}
              r="5"
              fill="#0d7377"
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
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={styles.section}
      style={{ backgroundColor: "#ffffff", padding: "120px 0" }}
    >
      {/* Subtle background accent */}
      <div
        className={styles.bgAccent}
        style={{
          background:
            "radial-gradient(circle, rgba(13,115,119,0.06) 0%, transparent 70%)",
        }}
      />

      <div className={styles.container}>
        {/* Section header */}
        <div
          className={styles.header}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span
            className={styles.subtitle}
            style={{ color: "#0d7377" }}
          >
            Who We Are
          </span>
          <h2
            className={styles.title}
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
              About ACEMACAN
            </span>
          </h2>
        </div>

        {/* Two-column layout: text + globe */}
        <div className={styles.grid}>
          {/* Left — text content */}
          <div
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <p
              className={styles.description}
              style={{ color: "#6b7280", fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              At ACEMACAN, we connect businesses with trusted global suppliers
              and deliver high-quality products with unmatched speed and
              reliability. Operating across UAE, China, and India, we enable
              seamless procurement for MEP, safety, acoustics, digital services,
              and specialized materials. We procure all kinds of goods worldwide.
            </p>

            {/* Accent divider */}
            <div className={styles.divider}>
              <div className={styles.dividerLine} style={{ background: "linear-gradient(to right, rgba(13,115,119,0.3), transparent)" }} />
              <span
                className={styles.dividerLabel}
                style={{ color: "rgba(13,115,119,0.5)" }}
              >
                Our Edge
              </span>
              <div className={styles.dividerLine} style={{ background: "linear-gradient(to left, rgba(13,115,119,0.3), transparent)" }} />
            </div>

            {/* Feature cards */}
            <div className={styles.featuresGrid}>
              {features.map((feat, i) => (
                <div
                  key={feat.title}
                  className={`${styles.featureCard} hover-lift`}
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(13,115,119,0.1)",
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(40px)",
                    transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
                  }}
                >
                  <div
                    className={styles.iconWrapper}
                    style={{ backgroundColor: "rgba(13,115,119,0.1)", color: "#0d7377" }}
                  >
                    <feat.icon size={20} strokeWidth={2} />
                  </div>
                  <h3
                    className={styles.featureTitle}
                    style={{ color: "#1a1a2e", fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className={styles.featureDescription}
                    style={{ color: "#6b7280" }}
                  >
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated globe */}
          <div className={styles.globeColumn}>
            <SupplyChainGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
