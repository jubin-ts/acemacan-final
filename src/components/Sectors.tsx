"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wrench, Volume2, Globe, Monitor, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Sector {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const sectors: Sector[] = [
  {
    icon: Wrench,
    title: "MEP Products",
    items: [
      "Cable Management Systems",
      "Electrical Accessories",
      "Switchgear & Control Components",
      "Industrial Hardware",
      "Fire Alarm Systems",
      "Safety Gear (Helmets, Coveralls, Gloves, Goggles)",
    ],
  },
  {
    icon: Volume2,
    title: "Acoustic Solutions",
    items: [
      "Acoustic Wall Panels",
      "Ceiling Systems",
      "Noise Control Products",
      "Specialized Acoustic Materials",
    ],
  },
  {
    icon: Globe,
    title: "Global Sourcing & Procurement",
    items: [
      "Supplier Identification",
      "China–UAE–India Procurement",
      "Quality Control & Inspection",
      "Door-to-door Logistics",
      "Worldwide Sourcing Capability",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Marketing & IT Services",
    items: [
      "Branding",
      "Social Media Marketing",
      "Website Design",
      "SEO",
      "Digital Growth Strategies",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Sectors() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: "#f8f9fa" }}
    >
      {/* Decorative background accents */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(13,115,119,0.06) 0%, transparent 70%)",
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
            What We Do
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="gradient-text">Our Sectors</span>
          </h2>
          <p className="font-body mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Multi-sector expertise delivering excellence across industries
          </p>
        </motion.div>

        {/* Sector cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-400 hover:shadow-2xl"
            >
              {/* Gradient top border */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: "linear-gradient(90deg, #0d7377, #14919b, #0d7377)",
                }}
              />

              <div className="p-8">
                {/* Icon with animated background */}
                <div className="relative mb-6 inline-flex">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-40"
                    style={{ background: "linear-gradient(135deg, #0d7377, #14919b)" }}
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg">
                    <sector.icon size={28} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading mb-4 text-xl font-bold text-secondary">
                  {sector.title}
                </h3>

                {/* Sub-items */}
                <ul className="space-y-2.5">
                  {sector.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={16}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-primary/70"
                      />
                      <span className="font-body text-sm leading-relaxed text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
