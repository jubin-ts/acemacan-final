"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  category: string;
  description: string;
}

const filters = ["All", "MEP", "Safety", "Acoustics", "Sourcing", "Digital Marketing"] as const;

const projects: Project[] = [
  {
    title: "MEP Installation — Dubai Marina Tower",
    category: "MEP",
    description: "Full-scale mechanical, electrical & plumbing fit-out for a 52-storey residential tower.",
  },
  {
    title: "Fire Safety Systems — Abu Dhabi Mall",
    category: "Safety",
    description: "End-to-end fire alarm and suppression system deployment across 120,000 sq ft of retail space.",
  },
  {
    title: "Acoustic Panels — Marriott Conference Hall",
    category: "Acoustics",
    description: "Custom acoustic wall and ceiling panel installation for premium hospitality venues.",
  },
  {
    title: "China-UAE Procurement — Steel Components",
    category: "Sourcing",
    description: "Cross-border sourcing and quality-controlled delivery of structural steel components.",
  },
  {
    title: "Digital Rebrand — Al Raha Industries",
    category: "Digital Marketing",
    description: "Complete digital identity overhaul including website, SEO, and social media strategy.",
  },
  {
    title: "Switchgear Supply — Sharjah Industrial",
    category: "MEP",
    description: "Procurement and delivery of LV/MV switchgear for a large-scale industrial facility.",
  },
];

/* cardVariants removed — cards use inline initial/animate/exit for SSR-safe rendering */

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`section-padding ${styles.section}`}
    >
      {/* Decorative background accent */}
      <div
        className={styles.bgAccent}
        style={{
          background:
            "radial-gradient(ellipse, rgba(13,115,119,0.06) 0%, transparent 70%)",
        }}
      />

      <div className={styles.container}>
        {/* Section header */}
        <div
          className={styles.header}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span
            className={styles.subtitle}
            style={{ color: "#0d7377" }}
          >
            Case Studies
          </span>
          <h2 className={styles.title}>
            <span
              style={{
                background: "linear-gradient(135deg, #0d7377, #14919b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Projects
            </span>
          </h2>
          <p
            className={styles.description}
            style={{ color: "#6b7280" }}
          >
            Delivering excellence across every sector
          </p>
        </div>

        {/* Filter buttons */}
        <div
          className={styles.filterBar}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s",
          }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={styles.filterButton}
                style={{
                  background: isActive ? "#0d7377" : "#f1f5f9",
                  color: isActive ? "#ffffff" : "#334155",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project cards grid */}
        <motion.div
          layout
          className={styles.grid}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className={styles.card}
                style={{
                  background:
                    "linear-gradient(160deg, rgba(13,115,119,0.10) 0%, rgba(20,145,155,0.04) 50%, transparent 100%)",
                }}
              >
                {/* Hover overlay */}
                <div className={styles.cardOverlay} />

                {/* Gradient top border */}
                <div
                  className={styles.cardBorder}
                  style={{
                    background:
                      "linear-gradient(90deg, #0d7377, #14919b, #0d7377)",
                  }}
                />

                {/* Category badge */}
                <div className={styles.badgeWrapper}>
                  <span
                    className={styles.badge}
                    style={{ background: "rgba(13,115,119,0.85)" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Decorative pattern */}
                <div className={styles.decorPattern}>
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="#0d7377"
                      strokeWidth="0.5"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="60"
                      stroke="#0d7377"
                      strokeWidth="0.5"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="40"
                      stroke="#0d7377"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>

                {/* Content at bottom */}
                <div className={styles.cardContent}>
                  <h3
                    className={styles.cardTitle}
                    style={{ color: "#1a1a2e" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={styles.cardDescription}
                    style={{ color: "#6b7280" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Hover zoom effect via inner scale layer */}
                <div className={styles.cardZoom} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
