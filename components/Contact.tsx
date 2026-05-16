"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rajputayushi979@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Hi Ayushi,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#00d4ff]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00d4ff] text-sm mb-2">// reach_out()</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mt-3" />
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm">
            Open to internships, full-time roles, and exciting projects. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="card-glow rounded-2xl p-6 space-y-5">
              <h3 className="font-mono text-white font-bold text-lg">Contact Info</h3>
              {[
                { icon: FiMail, label: "Email", value: "rajputayushi979@gmail.com", href: "mailto:rajputayushi979@gmail.com", color: "#00d4ff" },
                { icon: FiPhone, label: "Phone", value: "+91 8085301168", href: "tel:+918085301168", color: "#7c3aed" },
                { icon: FiMapPin, label: "Location", value: "Madhya Pradesh, India", href: "#", color: "#34d399" },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a key={label} href={href} className="flex items-center gap-3 group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono">{label}</p>
                    <p className="text-slate-200 text-sm group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="card-glow rounded-2xl p-6">
              <h3 className="font-mono text-white font-bold text-base mb-4">Connect</h3>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: "https://github.com/Ayushi-ninja", label: "GitHub", color: "#00d4ff" },
                  { icon: FiLinkedin, href: "https://linkedin.com/in/ayushi-rajput-91aa5b28b/", label: "LinkedIn", color: "#7c3aed" },
                  { icon: FiMail, href: "mailto:rajputayushi979@gmail.com", label: "Email", color: "#34d399" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ backgroundColor: `${color}10`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-glow rounded-2xl p-6 space-y-4">
              <h3 className="font-mono text-white font-bold text-lg mb-5">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-mono mb-1.5 block">Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-[#0a0f1e] border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 text-sm font-mono placeholder:text-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-mono mb-1.5 block">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-[#0a0f1e] border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 text-sm font-mono placeholder:text-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs font-mono mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project inquiry / Hiring / Collaboration"
                  className="w-full bg-[#0a0f1e] border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 text-sm font-mono placeholder:text-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-mono mb-1.5 block">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[#0a0f1e] border border-slate-700/50 rounded-xl px-4 py-3 text-slate-200 text-sm font-mono placeholder:text-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm"
              >
                <FiSend size={15} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-24 border-t border-slate-800/50 pt-8 text-center">
        <p className="font-mono text-slate-600 text-xs">
          Built with <span className="text-[#00d4ff]">Next.js</span> + <span className="text-[#7c3aed]">Tailwind CSS</span> + <span className="text-[#34d399]">Framer Motion</span> &mdash; by Ayushi Rajput
        </p>
      </div>
    </section>
  );
}
