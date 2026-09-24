import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroPortrait({ src, alt }) {
  const frameRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handlePointerMove = (event) => {
    const bounds = frameRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="hero-portrait">
      <div className="hero-portrait-glow" aria-hidden="true"></div>
      <div className="hero-portrait-ring" aria-hidden="true"></div>

      <motion.div
        ref={frameRef}
        className="hero-portrait-frame"
        style={{ rotateX, rotateY }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src={src} alt={alt} />
      </motion.div>
    </div>
  );
}
