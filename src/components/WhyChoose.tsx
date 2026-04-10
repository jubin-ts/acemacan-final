"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Globe, Zap, Layers, Shield, Award, Users } from "lucide-react";
import styles from "./WhyChoose.module.css";

const features = [
  {
    icon: Globe,
    title: "Global Supplier Network",
    description:
      "Connected to trusted suppliers across continents for seamless sourcing",
  },
  {
    icon: Zap,
    title: "Reliable & Fast Procurement",
    description:
      "Swift procurement cycles with guaranteed timelines and delivery",
  },
  {
    icon: Layers,
    title: "Multi-Sector Expertise",
    description:
      "Expertise spanning MEP, acoustics, safety, and digital services",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage of the supply chain",
  },
  {
    icon: Award,
    title: "Professional Service",
    description:
      "Dedicated team ensuring personalized attention to every project",
  },
  {
    icon: Users,
    title: "Trusted by Global Clients",
    description:
      "Proven track record with clients across the UAE, Asia, and beyond",
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className={styles.section}
      style={{ backgroundColor: "#0f0f0f", color: "#ffffff" }}
    >
      <div className={styles.container}>
        {/* Section header */}
        <div
          className={styles.header}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2
            className={styles.title}
            style={{
              background: "linear-gradient(135deg, #0d7377, #14919b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose ACEMACAN
          </h2>
          <p className={styles.subtitle}>
            Delivering excellence through a trusted global network and
            unwavering commitment to quality.
          </p>
        </div>

        {/* Feature grid */}
        <div className={styles.grid}>
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const delay = i * 0.12;
            return (
              <div
                key={feature.title}
                className={styles.card}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
                }}
              >
                {/* Icon */}
                <div
                  className={styles.iconWrapper}
                  style={{ backgroundColor: "#0d7377" }}
                >
                  <Icon className={styles.icon} />
                </div>

                {/* Title */}
                <h3 className={styles.featureTitle}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
