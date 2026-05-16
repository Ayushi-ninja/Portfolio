"use client";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certs = [
  { title: "DSA with Python", issuer: "NPTEL", color: "#00d4ff", emoji: "🐍" },
  { title: "Software Engineering", issuer: "NPTEL", color: "#7c3aed", emoji: "⚙️" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", color: "#f59e0b", emoji: "☁️" },
  { title: "Google AI Agents", issuer: "Kaggle", color: "#34d399", emoji: "🤖" },
  { title: "Meta Full Stack Dev", issuer: "Meta / Coursera", color: "#3b82f6", emoji: "🔵" },
  { title: "ML with Python", issuer: "IBM", color: "#a78bfa", emoji: "🧠" },
  { title: "Intro to Software Eng.", issuer: "IBM", color: "#fb7185", emoji: "💻" },
  { title: "E-Cell Ambassador", issuer: "IIT Bhubaneswar", color: "#fbbf24", emoji: "🏛️" },
  { title: "Intel Participation", issuer: "Intel", color: "#00d4ff", emoji: "🔷" },
  { title: "AI-ML Workshop", issuer: "Tula's Institute", color: "#7c3aed", emoji: "🎓" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#0d1530] relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm mb-2">// certs.verified()</p>
          <h2 className="section-title">Certifications</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-3" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="card-glow rounded-xl p-4 flex flex-col items-center text-center gap-2 cursor-pointer group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-1"
                style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
              >
                {cert.emoji}
              </div>
              <div className="flex items-center gap-1">
                <FiAward size={9} style={{ color: cert.color }} />
                <span style={{ color: cert.color }} className="text-xs font-mono font-bold">
                  Certified
                </span>
              </div>
              <p className="text-slate-200 text-xs font-semibold leading-tight">{cert.title}</p>
              <p className="text-slate-500 text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
