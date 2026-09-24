import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RoleRotator({ roles, interval = 2800 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, interval);

    return () => clearInterval(id);
  }, [roles, interval]);

  return (
    <span className="role-rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="role-rotator-word"
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
