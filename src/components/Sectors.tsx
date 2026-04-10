"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Wrench, Volume2, Globe, Monitor, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./Sectors.module.css";

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

export default function Sectors() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className={`section-padding ${styles.section}`}
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className={styles.bgAccent}
        style={{
          background:
            "radial-gradient(ellipse, rgba(13,115,119,0.06) 0%, transparent 70%)",
        }}
      />

      <div className={styles.container}>
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
            What We Do
          </span>
          <h2 className={styles.title}>
            <span
              style={{
                background: "linear-gradient(135deg, #0d7377, #14919b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Sectors
            </span>
          </h2>
          <p
            className={styles.description}
            style={{ color: "#6b7280" }}
          >
            Multi-sector expertise delivering excellence across industries
          </p>
        </div>

        <div className={styles.grid}>
          {sectors.map((sector, i) => (
            <div
              key={sector.title}
              className={`hover-lift ${styles.card}`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(50px)",
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
              }}
            >
              <div
                className={styles.cardBar}
                style={{
                  background: "linear-gradient(90deg, #0d7377, #14919b, #0d7377)",
                }}
              />

              <div className={styles.cardBody}>
                <div className={styles.iconWrapper}>
                  <div
                    className={styles.iconGlow}
                    style={{ background: "linear-gradient(135deg, #0d7377, #14919b)" }}
                  />
                  <div
                    className={styles.iconBox}
                    style={{
                      backgroundColor: "rgba(13,115,119,0.1)",
                      color: "#0d7377",
                    }}
                  >
                    <sector.icon size={28} strokeWidth={1.8} />
                  </div>
                </div>

                <h3
                  className={styles.cardTitle}
                  style={{ color: "#1a1a2e" }}
                >
                  {sector.title}
                </h3>

                <ul className={styles.itemList}>
                  {sector.items.map((item) => (
                    <li key={item} className={styles.item}>
                      <CheckCircle
                        size={16}
                        strokeWidth={2}
                        className={styles.itemIcon}
                        style={{ color: "rgba(13,115,119,0.7)" }}
                      />
                      <span
                        className={styles.itemText}
                        style={{ color: "#6b7280" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
