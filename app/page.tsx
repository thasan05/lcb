"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Calendar, Users, Sparkles } from "lucide-react";

const stats = [
  ["12K+", "Members"], ["80+", "Events"], ["45", "Campus Ambassadors"], ["4M+", "Reach"], ["300+", "Success Stories"]
];

const events = [1,2,3].map((i)=>({title:`LinkedIn Growth Sprint ${i}`,desc:"Hands-on sessions to grow profile, content and network.",date:"Jun 2026",speaker:"Top Voices BD"}));

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] opacity-20" />
      <section className="section relative pt-28 pb-20">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center">
          <p className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm"><Sparkles size={14}/> Bangladesh's LinkedIn Movement</p>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">Building Bangladesh's Most <span className="gradient-text">Impactful LinkedIn Community</span></h1>
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">Empowering students, creators, and professionals with personal branding, networking and career opportunities.</p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-xl bg-brand text-white px-6 py-3 font-medium shadow-glow">Join Community</button>
            <button className="rounded-xl glass px-6 py-3 font-medium">Explore Events</button>
          </div>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-5 gap-4">{stats.map(([v,l])=><div key={l} className="glass rounded-2xl p-4 text-center"><p className="text-2xl font-bold text-brand">{v}</p><p className="text-sm">{l}</p></div>)}</div>
      </section>

      <section className="section py-16">
        <h2 className="text-3xl font-semibold">About LinkedIn Community BD</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {['What we are','Mission','Vision'].map((t,i)=><article key={t} className="glass rounded-2xl p-6"><h3 className="font-semibold">{t}</h3><p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{i===0?'A high-energy ecosystem where Bangladeshi talent grows visibility and opportunities.':i===1?'Democratize access to personal branding and professional mentorship for every campus.':'Build the most trusted youth-professional bridge in Bangladesh through community learning.'}</p></article>)}
        </div>
      </section>

      <section className="section py-16">
        <h2 className="text-3xl font-semibold">Events</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">{events.map((event)=><motion.article whileHover={{y:-8}} key={event.title} className="glass rounded-2xl overflow-hidden"><Image src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200" alt="Event" width={1200} height={800} className="h-40 w-full object-cover"/><div className="p-5"><h3 className="font-semibold">{event.title}</h3><p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{event.desc}</p><p className="mt-3 text-sm flex gap-3"><span className="inline-flex items-center gap-1"><Calendar size={14}/>{event.date}</span><span>{event.speaker}</span></p><button className="mt-4 inline-flex items-center gap-1 text-brand">Register <ArrowRight size={14}/></button></div></motion.article>)}</div>
      </section>

      <section className="section py-16">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">{["I landed my first internship through community mentoring.","My LinkedIn profile impressions grew 10x.","Finally found a student tribe serious about growth."].map((q,i)=><div key={i} className="glass rounded-2xl p-6"><p>“{q}”</p><p className="mt-4 text-sm text-brand">— Member {i+1}</p></div>)}</div>
      </section>

      <section className="section py-16">
        <h2 className="text-3xl font-semibold">Campus Leads</h2>
        <div className="grid md:grid-cols-4 gap-4 mt-6">{['Ayesha','Rahim','Nabil','Tanjim'].map((n)=><div className="glass rounded-2xl p-5" key={n}><div className="h-36 rounded-xl bg-gradient-to-br from-brand/40 to-cyan-300/40"/><h3 className="mt-4 font-semibold">{n}</h3><p className="text-sm">Campus Lead</p><button className="mt-3 inline-flex items-center gap-2 text-brand"><Linkedin size={14}/> LinkedIn</button></div>)}</div>
      </section>

      <section className="section py-16">
        <h2 className="text-3xl font-semibold">Gallery</h2>
        <div className="columns-2 md:columns-4 gap-4 mt-6 space-y-4">{Array.from({length:8}).map((_,i)=><Image key={i} src={`https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=${800+i}`} alt="gallery" width={600} height={700} className="rounded-xl w-full"/>)}</div>
      </section>

      <section className="section py-16"><h2 className="text-3xl font-semibold">Partners</h2><div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">{['Tech Co','Edu Partner','Career Hub','Startup BD','Media X'].map(p=><div key={p} className="glass rounded-xl py-6 text-center font-medium">{p}</div>)}</div></section>

      <section className="section py-16 grid md:grid-cols-2 gap-4">
        {['Networking','Personal Branding','LinkedIn Optimization','Career Opportunities','Workshops','Mentorship'].map((b)=><div key={b} className="glass rounded-xl p-5 inline-flex items-center gap-3"><Users size={18} className="text-brand"/>{b}</div>)}
      </section>

      <section className="section py-16"><h2 className="text-3xl font-semibold">FAQ</h2><div className="mt-6 space-y-3">{['Who can join?','Is it free?','How do events work?'].map(q=><details key={q} className="glass rounded-xl p-4"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Students, creators and professionals across Bangladesh are welcome.</p></details>)}</div></section>

      <section className="section py-20"><div className="glass rounded-3xl p-10 text-center"><h2 className="text-4xl font-bold">Join the movement</h2><p className="mt-3">Get event drops, playbooks, and mentorship opportunities.</p><button className="mt-6 rounded-xl bg-brand px-6 py-3 text-white">Join Newsletter</button></div></section>
      <footer className="section py-12 border-t border-slate-200/20"><div className="flex flex-col md:flex-row justify-between gap-4"><p>© 2026 LinkedIn Community BD</p><p>hello@linkedincommunitybd.org</p></div></footer>
    </main>
  );
}
