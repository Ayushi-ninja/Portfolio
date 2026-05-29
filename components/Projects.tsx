"use client";
import { motion } from "framer-motion";
import { FiGithub, FiStar } from "react-icons/fi";

const projects = [
 
  {
    title: "KINDBITE",
    subtitle: "AI + IoT Food Waste Monitor",
    description:
      "Smart food waste monitoring system combining AI predictions with IoT hardware. ESP32 microcontroller sends real-time data to Firebase; Django REST API + React frontend provides waste analytics and reduction insights.",
    tags: ["ESP32", "Firebase", "Django REST", "React", "TailwindCSS", "IoT", "AI"],
    github: "https://github.com/Ayushi-ninja",
    featured: true,
    color: "#34d399",
    emoji: "🌱",
  },
  {
    title: "Ecotrack",
    subtitle: "CO₂/CH₄ Emission Predictor",
    description:
      "Machine learning-powered emission tracking platform. Flask API serves regression ML models to predict CO₂ and methane emissions, achieving 18% optimization in emission reduction recommendations. ReactJS frontend.",
    tags: ["Flask", "ML", "Python", "ReactJS", "Regression", "Data Science"],
    github: "https://github.com/Ayushi-ninja",
    featured: false,
    color: "#a78bfa",
    emoji: "🌍",
  },
  {
  title: "CAREER MENTORSHIP WEBRTC",
  subtitle: "Real-time Video Call Platform",
  description:
    "Full-stack video conferencing platform for career mentorship sessions. Features WebRTC peer-to-peer video calling with screen sharing, real-time chat with emoji support, typing indicators, and session management. Supabase handles real-time signaling, chat persistence, and room state management with auto-timeout functionality.",
  tags: ["Next.js", "React", "WebRTC", "Supabase", "TypeScript", "Real-time", "Screen Sharing"],
  github: "https://github.com/Ayushi-ninja",
  featured: true,
  color: "#3b82f6",
  emoji: "🎥",
}
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#00d4ff]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm mb-2">// projects.build()</p>
          <h2 className="section-title">Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`card-glow rounded-2xl p-6 flex flex-col group relative overflow-hidden ${
                p.featured ? "md:col-span-1" : ""
              }`}
            >
              {p.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-yellow-400 text-xs font-mono">
                  <FiStar size={10} />
                  <span>Featured</span>
                </div>
              )}

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${p.color}05, transparent 40%)`,
                }}
              />

              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{p.emoji}</span>
                <div>
                  <h3 className="font-mono text-lg font-bold text-white">{p.title}</h3>
                  <p style={{ color: p.color }} className="text-xs font-mono font-semibold">
                    {p.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md border text-slate-400"
                    style={{
                      borderColor: `${p.color}25`,
                      backgroundColor: `${p.color}06`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-mono transition-colors border border-slate-700/50 rounded-lg px-3 py-1.5 hover:border-slate-500"
                >
                  <FiGithub size={13} />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Ayushi-ninja"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline font-mono text-sm inline-flex items-center gap-2"
          >
            <FiGithub size={15} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
