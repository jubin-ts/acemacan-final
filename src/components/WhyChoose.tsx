"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Globe, Zap, Layers, Shield, Award, Users } from "lucide-react";

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
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#0f0f0f", color: "#ffffff" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className="mb-16 text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{
              background: "linear-gradient(135deg, #0d7377, #14919b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose ACEMACAN
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Delivering excellence through a trusted global network and
            unwavering commitment to quality.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const delay = i * 0.12;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-shadow duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(13,115,119,0.25)]"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#0d7377" }}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400">
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
