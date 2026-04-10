"use client";

import { useState, useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {children}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 50,
              display: "flex",
              height: 48,
              width: 48,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
              cursor: "pointer",
              backgroundColor: "#0d7377",
            }}
          >
            <ArrowUp style={{ height: 20, width: 20, color: "white" }} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
