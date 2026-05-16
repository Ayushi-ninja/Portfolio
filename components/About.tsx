"use client";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiBook } from "react-icons/fi";

const stats = [
  { label: "CGPA", value: "7.09/10" },
  { label: "Hackathons", value: "2+ Won" },
  { label: "Projects", value: "10+" },
  { label: "Certifications", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-DEFAULT/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm mb-2">// get_to_know_me()</p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#0d1530] to-[#111827] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-mono text-8xl font-bold gradient-text opacity-20 select-none">
                      AR
                    </div>
                  </div>
                </div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 border-2 border-[#00d4ff]/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-mono text-3xl font-bold gradient-text">AR</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-white">Ayushi Rajput</div>
                  <div className="text-[#00d4ff] text-sm mt-1">Full Stack Developer</div>
                  <div className="mt-4 flex flex-col gap-2 text-left">
                    {[
                      { icon: FiMapPin, text: "Madhya Pradesh, India" },
                      { icon: FiMail, text: "rajputayushi979@gmail.com" },
                      { icon: FiPhone, text: "+91 8085301168" },
                      { icon: FiBook, text: "B.E. CSE, 2023–2027" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <Icon size={12} className="text-[#7c3aed] flex-shrink-0" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00d4ff]/50 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#7c3aed]/50 rounded-bl-lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="font-mono text-[#00d4ff] text-sm">const ayushi = &#123;</div>
            <div className="pl-4 space-y-3 text-slate-300 leading-relaxed font-body">
              <p>
                I&apos;m a passionate <span className="text-[#00d4ff]">Full Stack Developer</span> and
                B.E. CSE student at <span className="text-[#7c3aed]">Tula&apos;s Institute</span> (2023–2027),
                specializing in building end-to-end web applications with the MERN stack.
              </p>
              <p>
                I architect <span className="text-[#00d4ff]">RESTful APIs</span>, deploy on{" "}
                <span className="text-[#7c3aed]">AWS</span>, implement{" "}
                <span className="text-[#00d4ff]">JWT/OAuth authentication</span>, and integrate
                AI/ML models to build intelligent products.
              </p>
              <p>
                Winner of the <span className="text-yellow-400 font-semibold">Google &times; Unstop Build With Gemini Hackathon</span> (Rank 1, 50+ teams)
                and a researcher at <span className="text-[#7c3aed]">LNM Institute of IT, Jaipur</span>.
              </p>
            </div>
            <div className="font-mono text-[#00d4ff] text-sm">&#125;;</div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-glow rounded-xl p-3 text-center"
                >
                  <div className="font-mono text-xl font-bold gradient-text">{s.value}</div>
                  <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
