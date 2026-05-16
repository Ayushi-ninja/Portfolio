"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const TAGLINES = [
  "Full Stack Developer",
  "Hackathon Winner 🏆",
  "AI Enthusiast",
  "MERN Stack Builder",
  "Open Source Contributor",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const COLORS = ["#00d4ff", "#7c3aed", "#4f46e5", "#06b6d4"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Hero() {
  const tagline = useTypewriter(TAGLINES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e] grid-bg"
    >
      <ParticleCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1e]/20 to-[#0a0f1e]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block font-mono text-sm text-[#00d4ff] border border-[#00d4ff]/30 rounded-full px-4 py-1.5 bg-[#00d4ff]/5 mb-6">
            👋 Hello, World! I&apos;m
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight"
        >
          <span className="text-white">Ayushi</span>
          <br />
          <span className="gradient-text">Rajput</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-mono text-lg sm:text-2xl text-slate-300 mb-8 h-8 flex items-center justify-center gap-2"
        >
          <span className="text-[#7c3aed]">&gt;</span>
          <span>{tagline}</span>
          <span className="inline-block w-0.5 h-6 bg-[#00d4ff] animate-blink" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable web applications with the MERN stack, deploying on AWS,
          and pushing boundaries with AI/ML. B.E. CSE @ Tula&apos;s Institute &bull; Madhya Pradesh, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary font-mono text-sm">
            View Projects
          </a>
          <a href="mailto:rajputayushi979@gmail.com" className="btn-outline font-mono text-sm">
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: FiGithub, href: "https://github.com/Ayushi-ninja", label: "GitHub" },
            { icon: FiLinkedin, href: "https://linkedin.com/in/ayushi-rajput-91aa5b28b/", label: "LinkedIn" },
            { icon: FiMail, href: "mailto:rajputayushi979@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600"
        >
          <FiArrowDown size={22} />
        </motion.div>
      </div>
    </section>
  );
}
