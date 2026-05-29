"use client";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Shrishivom Technologies",
    period: "June 2025 – July 2025",
    type: "Internship",
    color: "#00d4ff",
    points: [
      "Developed full-stack web applications using React and Node.js",
      "Built RESTful APIs with Express.js and integrated MongoDB databases",
      "Implemented JWT-based authentication and authorization systems",
      "Deployed applications on AWS with CI/CD pipelines",
    ],
  },
  {
    role: "Summer Research Intern",
    company: "LNM Institute of Information Technology, Jaipur",
    period: "May 2025 – July 2025",
    type: "Research",
    color: "#7c3aed",
    points: [
      "Conducted research under Dr. Bharat Verma in robotics & reinforcement learning",
      "Implemented ROS (Robot Operating System) for autonomous robot control",
      "Developed reinforcement learning algorithms for robot self-balancing",
      "Integrated sensor feedback systems for real-time balance correction",
    ],
  },
  {
    role: "Developer",
    company: "Clario — AI Career Guidance Platform",
    period: "Oct 2025 – Nov 2025",
    type: "Project Lead",
    color: "#34d399",
    points: [
      "Developed Mock test feature for students",
      "Developed Webrtc based 1:1 mentor-student video calling system",
      "Added Drag and drop feature in job traker"
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d1530] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00d4ff]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm mb-2">// work_history.filter()</p>
          <h2 className="section-title">Experience</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-3" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#7c3aed] to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    borderColor: exp.color,
                    backgroundColor: `${exp.color}20`,
                    boxShadow: `0 0 12px ${exp.color}40`,
                  }}
                />

                <div className="card-glow rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FiBriefcase size={14} style={{ color: exp.color }} />
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded-full border"
                          style={{
                            color: exp.color,
                            borderColor: `${exp.color}30`,
                            backgroundColor: `${exp.color}10`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-mono font-bold text-white text-lg">{exp.role}</h3>
                      <p style={{ color: exp.color }} className="text-sm font-semibold mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 border border-slate-700/50 rounded-lg px-3 py-1.5 bg-slate-800/30">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-slate-400 text-sm">
                        <span style={{ color: exp.color }} className="mt-1.5 text-xs flex-shrink-0">
                          ▸
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
