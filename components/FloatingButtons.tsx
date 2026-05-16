"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {[
        { icon: FiGithub, href: "https://github.com/Ayushi-ninja", label: "GitHub", color: "#00d4ff" },
        { icon: FiLinkedin, href: "https://linkedin.com/in/ayushi-rajput-91aa5b28b/", label: "LinkedIn", color: "#7c3aed" },
      ].map(({ icon: Icon, href, label, color }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, scale: 0, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.15, y: -2 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200"
          style={{
            backgroundColor: `${color}15`,
            border: `1px solid ${color}35`,
            boxShadow: `0 4px 20px ${color}20`,
          }}
        >
          <Icon size={20} style={{ color }} />
        </motion.a>
      ))}
    </div>
  );
}
