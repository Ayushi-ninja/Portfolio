"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: "rgba(0,212,255,0.1)",
            border: "1px solid rgba(0,212,255,0.25)",
            boxShadow: "0 4px 20px rgba(0,212,255,0.15)",
          }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={16} className="text-[#00d4ff]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
