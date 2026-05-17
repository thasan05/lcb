"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Linkedin,
  Sparkles,
  Users2,
  Rocket,
  BadgeCheck,
  Globe2
} from "lucide-react";

const stats = [
  { value: "18,500+", label: "Active Members" },
  { value: "120+", label: "Events Hosted" },
  { value: "64", label: "Campus Ambassadors" },
  { value: "7.2M+", label: "Annual Reach" },
  { value: "560+", label: "Career Success Stories" }
];

const benefits = [
  "High-signal networking with founders, recruiters, and creators",
  "Profile audits and personal branding workshops",
  "LinkedIn content systems to build visibility",
  "Internship and job access through community referrals",
  "Career mentorship from industry professionals",
  "Campus-led learning circles across Bangladesh"
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 grid-overlay opacity-40" />

      <section className="section section-pad relative pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-medium glow-ring">
            <Sparkles size={14} className="text-cyan-300" />
            The movement redefining professional growth in Bangladesh
          </p>

          <h1 className="mt-7 text-5xl md:text-7xl tracking-tight font-semibold leading-[1.06]">
            Building Bangladesh&apos;s Most{" "}
            <span className="gradient-text">
              Impactful LinkedIn Community
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We help students, job seekers, creators, and professionals build
            visibility, credibility, and opportunities through modern LinkedIn
            strategy, practical events, and peer-powered growth.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-brand px-7 py-3.5 text-white font-medium glow-ring hover:-translate-y-0.5 transition">
              Join Community
            </button>

            <button className="rounded-xl glass px-7 py-3.5 font-medium hover:bg-white/90 dark:hover:bg-white/10 transition inline-flex items-center gap-2">
              Explore Events <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass glow-ring rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-semibold gradient-text">
                {s.value}
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section">
        <div className="section-divider" />
      </div>

      <section className="section section-pad grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand font-medium">
            About LinkedIn Community BD
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            A career acceleration ecosystem for the next generation.
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
            LinkedIn Community BD is the largest LinkedIn-focused community in
            Bangladesh, built to close the gap between ambition and opportunity.
            We turn campus energy into professional momentum through high-impact
            events, mentorship, storytelling, and practical career frameworks.
          </p>
        </div>

        <div className="space-y-4">
          {[
            "Mission: democratize personal branding education for every student in Bangladesh.",
            "Vision: create a globally competitive talent pipeline from Bangladeshi campuses.",
            "Impact: thousands of members gained internships, jobs, and opportunities via stronger digital presence."
          ].map((item) => (
            <div
              key={item}
              className="glass rounded-2xl p-6 glow-ring"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section section-pad">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Featured Events
          </h2>

          <p className="text-slate-600 dark:text-slate-300">
            Workshops, founder talks, and practical growth sprints.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.article
              whileHover={{ y: -9, scale: 1.01 }}
              key={i}
              className="glass rounded-2xl overflow-hidden glow-ring transition"
            >
              <Image
                src={`https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=${
                  1200 + i
                }`}
                alt="Event"
                width={1200}
                height={800}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <div className="inline-flex items-center gap-2 text-xs rounded-full bg-brand/10 text-brand px-3 py-1">
                  Growth Sprint #{i}
                </div>

                <h3 className="mt-3 text-xl font-semibold">
                  LinkedIn Personal Brand Launchpad
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Hands-on frameworks for profile authority, content hooks, and
                  network strategy tailored to Bangladeshi students and early
                  professionals.
                </p>

                <div className="mt-4 text-sm flex items-center justify-between">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={14} />
                    June {8 + i}, 2026
                  </span>

                  <span>Speaker: Top Voice BD</span>
                </div>

                <button className="mt-5 inline-flex items-center gap-2 text-brand font-medium">
                  Register now <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section-pad">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Stories of Transformation
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            "After 2 profile clinics, I got interview calls from 3 startups.",
            "I grew from 600 to 9,000 impressions weekly and landed a remote role.",
            "This community gave me direction, mentors, and confidence to show up."
          ].map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 glow-ring hover:-translate-y-1 transition"
            >
              <BadgeCheck className="text-cyan-300" size={20} />

              <p className="mt-3">“{t}”</p>

              <p className="mt-4 text-sm text-brand">
                Member Story {i + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-pad">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Campus Leads
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Ayesha Rahman",
            "Nabil Hasan",
            "Farzana Islam",
            "Tanjim Kabir"
          ].map((n) => (
            <div
              key={n}
              className="glass rounded-2xl p-5 glow-ring hover:-translate-y-1 transition"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-brand/35 via-cyan-300/30 to-slate-400/20" />

              <h3 className="mt-4 font-semibold">{n}</h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                Campus Growth Lead
              </p>

              <button className="mt-3 inline-flex items-center gap-2 text-brand">
                <Linkedin size={15} />
                Connect
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-pad">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Why People Join
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div
              key={b}
              className="glass rounded-xl p-5 inline-flex gap-3 items-start"
            >
              <Users2 className="text-brand mt-0.5" size={18} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-pad">
        <div className="glass rounded-3xl p-10 md:p-14 text-center glow-ring">
          <Rocket className="mx-auto text-cyan-300" />

          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
            Join the Growth Movement
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Get weekly playbooks, event invites, mentorship opportunities, and
            direct access to a high-ambition network building the future of
            Bangladesh.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="rounded-xl bg-brand px-7 py-3.5 text-white font-medium">
              Join Community
            </button>

            <button className="rounded-xl glass px-7 py-3.5 font-medium inline-flex items-center gap-2">
              View Community Deck <Globe2 size={16} />
            </button>
          </div>
        </div>
      </section>

      <footer className="section py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-4 justify-between text-sm">
          <p>
            © 2026 LinkedIn Community BD — Built for students, creators, and
            professionals.
          </p>

          <p>hello@linkedincommunitybd.org</p>
        </div>
      </footer>
    </main>
  );
}