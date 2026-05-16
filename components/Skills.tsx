"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    color: "#00d4ff",
    skills: ["React", "Next.js", "HTML5", "JavaScript", "TailwindCSS", "Firebase"],
  },
  {
    category: "Backend",
    color: "#7c3aed",
    skills: ["Node.js", "Express.js", "Django", "Flask", "Supabase"],
  },
  {
    category: "Databases",
    color: "#06b6d4",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Convex"],
  },
  {
    category: "Languages",
    color: "#a78bfa",
    skills: ["Python", "C++", "Java", "TypeScript"],
  },
  {
    category: "Cloud / DevOps",
    color: "#34d399",
    skills: ["AWS", "GitHub Actions", "Linux/UNIX", "Docker"],
  },
  {
    category: "AI / ML",
    color: "#f59e0b",
    skills: ["LangChain", "Google Gemini", "Azure Computer Vision", "ML", "OCR"],
  },
  {
    category: "Tools & IoT",
    color: "#fb7185",
    skills: ["Git", "Postman", "ROS (Robot OS)", "ESP32", "IoT", "Blynk"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm mb-2">// tech_stack.map()</p>
          <h2 className="section-title">Skills</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="card-glow rounded-2xl p-5"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: group.color }}
                />
                <h3
                  className="font-mono text-sm font-bold"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.04 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg border text-slate-300 cursor-default transition-all duration-200"
                    style={{
                      borderColor: `${group.color}30`,
                      backgroundColor: `${group.color}08`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
