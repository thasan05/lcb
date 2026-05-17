"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Linkedin, Sparkles, Users, Zap } from "lucide-react";
import { events, stats, testimonials } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { type: "spring", stiffness: 100, damping: 30 }
};

function Count({ value, suffix }: { value: number; suffix: string }) {
  const formatted = value % 1 === 0 ? Intl.NumberFormat("en-US").format(value) : value.toFixed(1);
  return <>{formatted}{suffix}</>;
}

export function HomeSections() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const glow = useMotionTemplate`radial-gradient(420px at ${smoothX}px ${smoothY}px, rgba(34,211,238,.22), transparent 70%)`;
  const yFloat = useTransform(smoothY, [0, 900], [12, -12]);

  const handlePointer = (e: MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <main className="relative overflow-hidden" onMouseMove={handlePointer}>
      <div className="hero-aurora" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <motion.div className="cursor-glow" style={{ background: glow }} />

      <section className="section pt-28 pb-20 md:pt-36 md:pb-24 relative">
        <motion.div style={{ y: yFloat }} className="floating-orb" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-center max-w-5xl mx-auto relative z-10">
          <p className="pill mx-auto mb-8"><Sparkles size={14} /> Bangladesh&apos;s fastest-growing LinkedIn movement</p>
          <h1 className="display-title">Building Bangladesh&apos;s <span className="gradient-text">Most Impactful</span> LinkedIn Community</h1>
          <p className="lead mt-8">A premium growth ecosystem helping students and professionals become visible, credible, and opportunity-ready through mentorship, playbooks, and execution culture.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="btn-primary">Join Community <ArrowRight size={16} /></button>
            <button className="btn-secondary">Explore Events</button>
          </div>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-12 gap-5 items-stretch">
          <article className="premium-card p-6 lg:col-span-7 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/15 via-transparent to-brand/20" />
            <p className="eyebrow relative">Live Community Pulse</p>
            <h3 className="text-2xl md:text-3xl font-semibold mt-3 relative">Career conversations, creator momentum, and campus leadership — all in one movement.</h3>
          </article>
          <article className="premium-card p-6 lg:col-span-5">
            <p className="text-sm text-slate-400">Today&apos;s momentum</p>
            <p className="text-4xl font-bold mt-2 gradient-text">+3,214</p>
            <p className="mt-2 text-sm text-slate-300">Weekly profile visits generated from community-led strategies.</p>
            <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-brand to-cyan-300" /></div>
          </article>
        </div>
      </section>

      <section className="section py-16 grid md:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <motion.article key={s.label} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="premium-card stat-card p-5">
            <p className="text-2xl font-bold text-brand"><Count value={s.value} suffix={s.suffix} /></p>
            <p className="mt-1 font-medium">{s.label}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{s.note}</p>
          </motion.article>
        ))}
      </section>

      <section className="section py-24">
        <h2 className="section-title">A movement unfolding across Bangladesh</h2>
        <p className="section-subtitle">An intentional progression from hidden potential to visible leadership.</p>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {["Discover", "Build", "Lead"].map((t, i) => (
            <motion.article key={t} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }} className="premium-card p-7 timeline-card">
              <p className="eyebrow">0{i + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-sm text-slate-300">{i === 0 ? "Discover what makes you professionally memorable." : i === 1 ? "Build a credible digital identity with repeatable systems." : "Lead peer communities and become a visible force."}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section py-24">
        <h2 className="section-title">Events that feel like premium career accelerators</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <motion.article key={event.title} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 100, damping: 30 }} className="premium-card group overflow-hidden">
              <div className="relative overflow-hidden">
                <Image src={event.image} alt={event.title} width={1600} height={900} className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 group-hover:blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/85 to-transparent" />
              </div>
              <div className="p-6">
                <span className="tag">{event.tag}</span>
                <h3 className="mt-3 text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{event.desc}</p>
                <p className="mt-4 text-sm inline-flex items-center gap-2"><Calendar size={14} />{event.date}</p>
                <p className="mt-2 text-sm inline-flex items-center gap-2"><Users size={14} />{event.speaker}</p>
                <button className="register-link mt-5">Register now <ArrowRight size={14} /></button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section py-20">
        <h2 className="section-title">Stories of transformation</h2>
        <div className="marquee mt-8"><div className="marquee-track">{[...testimonials, ...testimonials].map((q, i) => <article key={i} className="premium-card px-6 py-5 min-w-[320px]"><p className="text-sm">“{q}”</p><p className="mt-3 text-xs text-cyan-300">Verified LCB member</p></article>)}</div></div>
      </section>

      <section className="section py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {["Networking with high-intent peers", "Personal branding execution", "Opportunity pipeline access", "Workshops and live critiques", "Mentorship from operators", "Campus leadership opportunities"].map((b) => <article key={b} className="premium-card p-6 hover-lift"><p className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" />{b}</p></article>)}
      </section>

      <section className="section py-24"><div className="premium-cta p-12 text-center"><h2 className="text-4xl font-bold">Join the movement shaping Bangladesh&apos;s digital careers</h2><p className="mt-4 text-slate-300">Weekly playbooks, events, mentorship, and opportunity drops.</p><button className="btn-primary mx-auto mt-8">Join Newsletter <Zap size={16} /></button></div></section>
      <footer className="section py-12 border-t border-white/10"><div className="flex flex-col md:flex-row gap-3 justify-between"><p>© 2026 LinkedIn Community BD</p><p className="inline-flex items-center gap-2"><Linkedin size={14} />linkedin.com/company/linkedincommunitybd</p></div></footer>
    </main>
  );
}
