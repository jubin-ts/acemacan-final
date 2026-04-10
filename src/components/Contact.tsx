"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
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

const inputClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-secondary outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-[#0d7377] focus:ring-2 focus:ring-[#0d7377]/10";

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase">
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
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="font-heading text-2xl font-bold text-secondary sm:text-3xl">
              Let&apos;s Build Something Great
            </h3>
            <p className="font-body mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Ready to streamline your procurement or elevate your digital
              presence? Reach out to us.
            </p>

            {/* Office locations */}
            <div className="mt-8 space-y-5">
              {offices.map((office, i) => (
                <motion.div
                  key={office.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-secondary">
                      {office.label}
                    </p>
                    <p className="font-body text-sm text-muted">
                      {office.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-8 space-y-4">
              <motion.a
                href="mailto:info@acemacan.ae"
                custom={3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center gap-4 transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={20} strokeWidth={2} />
                </div>
                <span className="font-body text-sm text-secondary">
                  info@acemacan.ae
                </span>
              </motion.a>

              <motion.a
                href="tel:+971542112328"
                custom={4}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center gap-4 transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <span className="font-body text-sm text-secondary">
                  +971 54 211 2328
                </span>
              </motion.a>
            </div>

            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/971542112328"
              target="_blank"
              rel="noopener noreferrer"
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} strokeWidth={2} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-card rounded-2xl p-8 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs font-semibold tracking-wide text-secondary uppercase"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClasses}
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
                  className="mb-1.5 block text-xs font-semibold tracking-wide text-secondary uppercase"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  className={inputClasses}
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
                  className="mb-1.5 block text-xs font-semibold tracking-wide text-secondary uppercase"
                >
                  Subject
                </label>
                <select
                  id="contact-subject"
                  className={inputClasses}
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
                  className="mb-1.5 block text-xs font-semibold tracking-wide text-secondary uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your project…"
                  className={`${inputClasses} resize-none`}
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
          </motion.div>
        </div>

        {/* Decorative location bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20"
        >
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
            <motion.circle
              cx="250"
              cy="32"
              r="8"
              fill="#0d7377"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <circle cx="250" cy="32" r="4" fill="#14919b" />
            <motion.circle
              cx="250"
              cy="32"
              r="14"
              fill="none"
              stroke="rgba(13,115,119,0.3)"
              strokeWidth="1"
              animate={{ r: [14, 22, 14], opacity: [0.4, 0, 0.4] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
            <motion.circle
              cx="550"
              cy="32"
              r="8"
              fill="#0d7377"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <circle cx="550" cy="32" r="4" fill="#14919b" />
            <motion.circle
              cx="550"
              cy="32"
              r="14"
              fill="none"
              stroke="rgba(13,115,119,0.3)"
              strokeWidth="1"
              animate={{ r: [14, 22, 14], opacity: [0.4, 0, 0.4] }}
              transition={{
                duration: 2.5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
            <motion.circle
              cx="800"
              cy="32"
              r="8"
              fill="#0d7377"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <circle cx="800" cy="32" r="4" fill="#14919b" />
            <motion.circle
              cx="800"
              cy="32"
              r="14"
              fill="none"
              stroke="rgba(13,115,119,0.3)"
              strokeWidth="1"
              animate={{ r: [14, 22, 14], opacity: [0.4, 0, 0.4] }}
              transition={{
                duration: 2.5,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
        </motion.div>
      </div>
    </section>
  );
}
