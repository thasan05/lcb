"use client";

import Image from "next/image";
import { type MouseEvent, useMemo } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Linkedin, Sparkles, Users, Zap } from "lucide-react";
import { events, stats, testimonials } from "@/lib/content";

function Count({ value, suffix }: { value: number; suffix: string }) {
  const formatted = useMemo(() => (value % 1 === 0 ? value.toLocaleString() : value.toFixed(1)), [value]);
  return <>{formatted}{suffix}</>;
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {body ? <p className="section-subtitle">{body}</p> : null}
    </div>
  );
}

export function HomeSections() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const cursorGlow = useMotionTemplate`radial-gradient(450px at ${x}px ${y}px, rgba(56,189,248,.2), transparent 72%)`;
  const meshShift = useTransform(y, [0, 900], [16, -16]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <main className="relative overflow-hidden" onMouseMove={onMove}>
      <div className="hero-aurora" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <motion.div className="cursor-glow" style={{ background: cursorGlow }} />

      <section className="section relative pt-28 pb-24 md:pt-36 md:pb-28">
        <motion.div style={{ y: meshShift }} className="floating-orb" />
        <div className="hero-shell">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 30 }} className="text-center max-w-5xl mx-auto relative z-10">
            <p className="pill mx-auto mb-8"><Sparkles size={14} /> Bangladesh&apos;s premier LinkedIn growth movement</p>
            <h1 className="display-title">Building Bangladesh&apos;s <span className="gradient-text">Most Impactful</span> LinkedIn Community</h1>
            <p className="lead mt-8">A next-generation ecosystem helping students, creators, and professionals become discoverable, trusted, and globally opportunity-ready.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="btn-primary">Join Community <ArrowRight size={16} /></button>
              <button className="btn-secondary">Explore Events</button>
            </div>
          </motion.div>

          <div className="mt-14 grid lg:grid-cols-5 gap-5 relative z-10">
            <article className="premium-card p-6 lg:col-span-3 overflow-hidden">
              <p className="eyebrow">Live Community Pulse</p>
              <h3 className="text-2xl md:text-3xl font-semibold mt-3">Where ambition meets execution — campus leaders, creators, and professionals building career momentum together.</h3>
            </article>
            <article className="premium-card p-6 lg:col-span-2">
              <p className="text-sm text-slate-400">This week&apos;s momentum</p>
              <p className="mt-2 text-5xl font-bold gradient-text">+3,214</p>
              <p className="mt-3 text-sm text-slate-300">Profile visits generated through LCB playbooks and peer-led accountability sprints.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section py-16 grid md:grid-cols-5 gap-4">
        {stats.map((item, i) => (
          <motion.article key={item.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, type: "spring", stiffness: 100, damping: 30 }} className="premium-card stat-card p-5">
            <p className="text-2xl font-bold text-brand"><Count value={item.value} suffix={item.suffix} /></p>
            <p className="mt-1 font-medium">{item.label}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{item.note}</p>
          </motion.article>
        ))}
      </section>

      <section className="section py-24">
        <SectionHeading eyebrow="Mission" title="A movement unfolding in three stages" body="We don&apos;t just teach LinkedIn tactics. We design identity, credibility, and long-term network leverage." />
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {[
            ["01", "Discover", "Find your narrative edge and professional voice."],
            ["02", "Build", "Create a profile and content system that compounds trust."],
            ["03", "Lead", "Become a connector and multiplier for your campus community."]
          ].map(([step, title, text], i) => (
            <motion.article key={step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, type: "spring", stiffness: 100, damping: 30 }} className="premium-card p-7 timeline-card">
              <p className="text-sm text-cyan-300">{step}</p>
              <h3 className="text-2xl font-semibold mt-2">{title}</h3>
              <p className="mt-3 text-sm text-slate-300">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section py-24">
        <SectionHeading eyebrow="Events" title="Premium sessions engineered for real outcomes" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <motion.article key={event.title} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: "spring", stiffness: 100, damping: 30 }} className="premium-card overflow-hidden group">
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
        <SectionHeading eyebrow="Social Proof" title="Stories of transformation" />
        <div className="marquee mt-8"><div className="marquee-track">{[...testimonials, ...testimonials].map((q, i) => <article key={i} className="premium-card px-6 py-5 min-w-[320px]"><p className="text-sm">“{q}”</p><p className="mt-3 text-xs text-cyan-300">Verified LCB member</p></article>)}</div></div>
      </section>

      <section className="section py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {["High-intent networking", "Personal branding systems", "Opportunity pipeline access", "Live workshops and critiques", "Mentorship from operators", "Campus leadership tracks"].map((benefit) => (
          <article key={benefit} className="premium-card p-6 hover-lift"><p className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" />{benefit}</p></article>
        ))}
      </section>

      <section className="section py-24"><div className="premium-cta p-12 text-center"><h2 className="text-4xl font-bold">Join the movement shaping Bangladesh&apos;s digital careers</h2><p className="mt-4 text-slate-300">Weekly playbooks, events, mentorship, and opportunity drops.</p><button className="btn-primary mx-auto mt-8">Join Newsletter <Zap size={16} /></button></div></section>
      <footer className="section py-12 border-t border-white/10"><div className="flex flex-col md:flex-row gap-3 justify-between"><p>© 2026 LinkedIn Community BD</p><p className="inline-flex items-center gap-2"><Linkedin size={14} />linkedin.com/company/linkedincommunitybd</p></div></footer>
    </main>
  );
}
