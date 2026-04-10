"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
      className="section-padding relative overflow-hidden bg-white"
    >
      {/* Decorative background accent */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(13,115,119,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div
          className="mb-12 text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span
            className="mb-3 inline-block text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: "#0d7377" }}
          >
            Case Studies
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
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
            className="font-body mx-auto mt-4 max-w-2xl text-lg leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            Delivering excellence across every sector
          </p>
        </div>

        {/* Filter buttons */}
        <div
          className="mb-12 flex flex-wrap justify-center gap-3"
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
                className="relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none"
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
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
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
                className="group relative flex min-h-[320px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(13,115,119,0.10) 0%, rgba(20,145,155,0.04) 50%, transparent 100%)",
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                {/* Gradient top border */}
                <div
                  className="absolute top-0 left-0 h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #0d7377, #14919b, #0d7377)",
                  }}
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm"
                    style={{ background: "rgba(13,115,119,0.85)" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Decorative pattern */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]">
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
                <div className="relative z-10 p-6 transition-transform duration-400 group-hover:-translate-y-2">
                  <h3
                    className="font-heading mb-2 text-lg font-bold transition-colors duration-300 group-hover:text-white"
                    style={{ color: "#1a1a2e" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80"
                    style={{ color: "#6b7280" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Hover zoom effect via inner scale layer */}
                <div className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
