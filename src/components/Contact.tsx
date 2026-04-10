"use client";

import { useRef, useState, type FormEvent } from "react";
import { useInView } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Send } from "lucide-react";

const offices = [
  { label: "UAE Office (HQ)", location: "Dubai, United Arab Emirates" },
  { label: "China Office", location: "Guangzhou, China" },
  { label: "India Office", location: "Kerala, India" },
];

const subjectOptions = [
  "General Inquiry",
  "MEP Products",
  "Acoustic Solutions",
  "Procurement",
  "Digital Marketing",
];

const inputClasses =
  "w-full rounded-xl bg-white px-4 py-3 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-[#0d7377]/10";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* Background accents */}
      <div
        className="pointer-events-none absolute -top-40 left-0 h-[500px] w-[500px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(13,115,119,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(20,145,155,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div
          className="mb-16 text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span
            className="mb-3 inline-block text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: "#0d7377" }}
          >
            Contact &amp; Locations
          </span>
          <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span
              style={{
                background: "linear-gradient(135deg, #0d7377, #14919b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Contact info */}
          <div
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-40px)",
              transition:
                "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <h3
              className="font-heading text-2xl font-bold sm:text-3xl"
              style={{ color: "#1a1a2e" }}
            >
              Let&apos;s Build Something Great
            </h3>
            <p
              className="font-body mt-4 text-base leading-relaxed sm:text-lg"
              style={{ color: "#6b7280" }}
            >
              Ready to streamline your procurement or elevate your digital
              presence? Reach out to us.
            </p>

            {/* Office locations */}
            <div className="mt-8 space-y-5">
              {offices.map((office) => (
                <div
                  key={office.label}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "rgba(13,115,119,0.1)",
                      color: "#0d7377",
                    }}
                  >
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p
                      className="font-heading text-sm font-bold"
                      style={{ color: "#1a1a2e" }}
                    >
                      {office.label}
                    </p>
                    <p
                      className="font-body text-sm"
                      style={{ color: "#6b7280" }}
                    >
                      {office.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-8 space-y-4">
              <a
                href="mailto:info@acemacan.ae"
                className="flex items-center gap-4"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "rgba(13,115,119,0.1)",
                    color: "#0d7377",
                  }}
                >
                  <Mail size={20} strokeWidth={2} />
                </div>
                <span
                  className="font-body text-sm"
                  style={{ color: "#1a1a2e" }}
                >
                  info@acemacan.ae
                </span>
              </a>

              <a
                href="tel:+971542112328"
                className="flex items-center gap-4"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "rgba(13,115,119,0.1)",
                    color: "#0d7377",
                  }}
                >
                  <Phone size={20} strokeWidth={2} />
                </div>
                <span
                  className="font-body text-sm"
                  style={{ color: "#1a1a2e" }}
                >
                  +971 54 211 2328
                </span>
              </a>
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/971542112328"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} strokeWidth={2} />
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT — Contact form */}
          <div
            className="glass-card rounded-2xl p-8 sm:p-10"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(40px)",
              transition:
                "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "#1a1a2e" }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClasses}
                  style={{
                    color: "#1a1a2e",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#e5e7eb",
                  }}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "#1a1a2e" }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  className={inputClasses}
                  style={{
                    color: "#1a1a2e",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#e5e7eb",
                  }}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "#1a1a2e" }}
                >
                  Subject
                </label>
                <select
                  id="contact-subject"
                  className={inputClasses}
                  style={{
                    color: "#1a1a2e",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#e5e7eb",
                  }}
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, subject: e.target.value }))
                  }
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "#1a1a2e" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your project…"
                  className={`${inputClasses} resize-none`}
                  style={{
                    color: "#1a1a2e",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#e5e7eb",
                  }}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #0d7377, #14919b)",
                }}
              >
                <Send size={16} strokeWidth={2} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Decorative location bar */}
        <div className="mt-20">
          <svg
            viewBox="0 0 1000 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            aria-label="Office locations map bar showing Dubai, Guangzhou, and Kerala"
          >
            {/* Background gradient bar */}
            <rect
              x="0"
              y="30"
              width="1000"
              height="4"
              rx="2"
              fill="url(#locationBarGrad)"
            />

            {/* Dubai */}
            <circle cx="250" cy="32" r="8" fill="#0d7377" />
            <circle cx="250" cy="32" r="4" fill="#14919b" />
            <circle
              cx="250"
              cy="32"
              r="14"
              fill="none"
              stroke="rgba(13,115,119,0.3)"
              strokeWidth="1"
              opacity="0.4"
            />
            <text
              x="250"
              y="60"
              textAnchor="middle"
              fill="#0d7377"
              fontSize="11"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              Dubai, UAE
            </text>

            {/* Guangzhou */}
            <circle cx="550" cy="32" r="8" fill="#0d7377" />
            <circle cx="550" cy="32" r="4" fill="#14919b" />
            <circle
              cx="550"
              cy="32"
              r="14"
              fill="none"
              stroke="rgba(13,115,119,0.3)"
              strokeWidth="1"
              opacity="0.4"
            />
            <text
              x="550"
              y="60"
              textAnchor="middle"
              fill="#0d7377"
              fontSize="11"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              Guangzhou, China
            </text>

            {/* Kerala */}
            <circle cx="800" cy="32" r="8" fill="#0d7377" />
            <circle cx="800" cy="32" r="4" fill="#14919b" />
            <circle
              cx="800"
              cy="32"
              r="14"
              fill="none"
              stroke="rgba(13,115,119,0.3)"
              strokeWidth="1"
              opacity="0.4"
            />
            <text
              x="800"
              y="60"
              textAnchor="middle"
              fill="#0d7377"
              fontSize="11"
              fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
            >
              Kerala, India
            </text>

            <defs>
              <linearGradient
                id="locationBarGrad"
                x1="0"
                y1="0"
                x2="1000"
                y2="0"
              >
                <stop offset="0%" stopColor="#0d7377" stopOpacity="0.1" />
                <stop offset="25%" stopColor="#0d7377" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#14919b" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#0d7377" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#14919b" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
