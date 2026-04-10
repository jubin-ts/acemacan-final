"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING_DOT = { damping: 25, stiffness: 700, mass: 0.5 };
const SPRING_RING = { damping: 20, stiffness: 150, mass: 0.8 };

export default function CursorFollow() {
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, SPRING_DOT);
  const dotY = useSpring(cursorY, SPRING_DOT);

  const ringX = useSpring(cursorX, SPRING_RING);
  const ringY = useSpring(cursorY, SPRING_RING);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (e: MediaQueryList | MediaQueryListEvent) => {
      setVisible(e.matches);
    };

    handleMediaChange(mq);
    mq.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      mq.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#0d7377",
          pointerEvents: "none",
          zIndex: 50,
          mixBlendMode: "difference",
        }}
      />

      {/* Larger ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(13, 115, 119, 0.35)",
          pointerEvents: "none",
          zIndex: 50,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
