"use client";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    rank: "Rank 1",
    title: "Build With Gemini Hackathon",
    org: "Google × Unstop × PhysicsWallah",
    venue: "University of Delhi",
    detail: "50+ competing teams. Built an AI-powered career guidance platform using Google Gemini.",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/30",
    badge: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    badgeText: "1st Place",
  },
  {
    icon: "🥉",
    rank: "3rd Runner-Up",
    title: "Innovate or Evaporate",
    org: "Tula's Institute",
    venue: "24-Hour Hackathon",
    detail: "30 teams competed. Developed IoT-based food waste monitoring system with AI integration.",
    color: "from-orange-500/15 to-rose-500/10",
    border: "border-orange-500/30",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    badgeText: "3rd Place",
  },
  {
    icon: "💻",
    rank: "Rank 143",
    title: "Unstop Weekly Coding Challenge #46",
    org: "Unstop Platform",
    venue: "National Level",
    detail: "Certificate of Excellence awarded for competitive programming performance.",
    color: "from-cyan-500/15 to-blue-500/10",
    border: "border-[#00d4ff]/30",
    badge: "bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30",
    badgeText: "Excellence",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0d1530] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm mb-2">// my_wins[]</p>
          <h2 className="section-title">Achievements</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl border ${a.border} bg-gradient-to-br ${a.color} backdrop-blur-sm p-6 card-glow group`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{a.icon}</span>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${a.badge} font-semibold`}>
                  {a.badgeText}
                </span>
              </div>
              <div className="font-mono text-2xl font-bold text-white mb-1">{a.rank}</div>
              <div className="text-slate-200 font-semibold text-base mb-1">{a.title}</div>
              <div className="text-[#00d4ff] text-xs font-mono mb-1">{a.org}</div>
              <div className="text-slate-500 text-xs mb-3">{a.venue}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
