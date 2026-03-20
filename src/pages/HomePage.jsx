import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Clock3,
  Cpu,
  Factory,
  Globe,
  HeartPulse,
  Landmark,
  Mail,
  Network,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const insights = [
  {
    category: "Industries",
    sub: "Manufacturing",
    date: "Jul 18, 2025",
    title: "Smart Manufacturing Revolution: Industry 4.0 Transformation for Production Excellence",
    readType: "5 min read",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Industries",
    sub: "Financial Services",
    date: "Jul 18, 2025",
    title: "Banking Digital Transformation: Leading the Fintech Innovation Revolution",
    readType: "6 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Industries",
    sub: "Healthcare",
    date: "Jul 18, 2025",
    title: "EHR Optimization: Maximizing Clinical Productivity and Efficiency",
    readType: "Case Study",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Industries",
    sub: "Healthcare",
    date: "Jul 18, 2025",
    title: "AI-Powered Healthcare Automation for Patient Care and Clinical Excellence",
    readType: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Industries",
    sub: "Energy & Utilities",
    date: "Jul 18, 2025",
    title: "Smart Grid Technology for Sustainable Power Management",
    readType: "4 min read",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Industries",
    sub: "Retail",
    date: "Jul 18, 2025",
    title: "Retail Digital Transformation Through Experience-Led E-commerce Innovation",
    readType: "6 min read",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Industries",
    sub: "Financial Compliance",
    date: "Jul 17, 2025",
    title: "AI-Powered RegTech for Risk, Controls, and Compliance Operations",
    readType: "7 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Approach",
    sub: "Technology Stack",
    date: "Jul 17, 2025",
    title: "System Integration Best Practices for Process Improvement Success",
    readType: "Guide",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Approach",
    sub: "Technology Stack",
    date: "Jul 17, 2025",
    title: "Building Your Enterprise Technology Stack for AI-Powered Operations",
    readType: "8 min read",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  },
];

const serviceCards = [
  {
    title: "Approach",
    desc: "LSS + AI delivery model with structured assessment, roadmap, implementation, and optimization cycles.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    icon: BarChart3,
  },
  {
    title: "Solutions",
    desc: "Automation, analytics, AI assistants, integration, and digital operating model modernization.",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    icon: Cpu,
  },
  {
    title: "Industries",
    desc: "Manufacturing, BFSI, healthcare, energy, retail, and shared enterprise capabilities.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    icon: Globe,
  },
  {
    title: "Results",
    desc: "Outcome narratives, KPI-based case studies, and transformation evidence for executive buyers.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    icon: ShieldCheck,
  },
];

const industryCards = [
  {
    title: "Manufacturing & Industry 4.0",
    desc: "Connected operations, predictive maintenance, and production intelligence.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    icon: Factory,
  },
  {
    title: "Financial Services",
    desc: "AI-led risk, compliance, decisioning, and process modernization.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    desc: "Clinical workflow automation, EHR optimization, and analytics enablement.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    icon: HeartPulse,
  },
  {
    title: "Energy & Utilities",
    desc: "Operational visibility, asset management, and resilient grid workflows.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    icon: Zap,
  },
  {
    title: "Retail & E-commerce",
    desc: "Customer journey transformation and intelligent digital operations.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    icon: ShoppingBag,
  },
  {
    title: "Enterprise Shared Services",
    desc: "PMO, finance, HR, and service desk workflow modernization at scale.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    icon: Building2,
  },
];

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 style={serif} className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm md:text-lg text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-lg shadow-blue-900/30 ring-1 ring-white/25">
        <div className="absolute inset-1 rounded-full border border-white/30" />
        <div className="absolute inset-0 grid place-items-center text-white font-black text-lg">D</div>
      </div>
      <div>
        <div className="text-white font-semibold tracking-wide leading-tight">DUANAMIZE</div>
        <div className="text-[11px] text-blue-100/80 tracking-[0.18em]">GLOBAL SERVICES</div>
      </div>
    </div>
  );
}

function HeroSculpture() {
  return (
    <div className="relative h-[380px] w-full">
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-950/30" />
      <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300/35 via-blue-400/20 to-indigo-500/20 blur-2xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20"
      />

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-[15%] top-[15%] h-20 w-20 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md"
      />
      <motion.div
        animate={{ y: [0, 8, 0], x: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute right-[14%] top-[18%] h-16 w-16 rounded-full border border-cyan-200/20 bg-cyan-300/10 backdrop-blur-md"
      />
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        className="absolute bottom-[18%] left-[18%] h-14 w-28 rounded-full border border-white/10 bg-white/10 backdrop-blur-md"
      />

      <div className="absolute inset-x-6 top-6 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
        <div className="flex items-center justify-between text-xs text-blue-100/80">
          <span>Enterprise Transformation Command View</span>
          <span className="rounded-full border border-white/10 px-2 py-0.5">Live</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Programs", "18"],
            ["Automation", "64"],
            ["ROI Index", "+27%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/10 bg-slate-950/30 px-2 py-2">
              <div className="text-[10px] uppercase tracking-[0.14em] text-blue-200/70">{k}</div>
              <div className="mt-1 text-sm font-semibold text-white">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-6 right-6 rounded-xl border border-white/10 bg-slate-950/35 p-4 backdrop-blur">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-cyan-200/90">
          <Network className="h-3.5 w-3.5" /> Connected delivery model
        </div>
        <div className="mt-1 grid grid-cols-4 items-center gap-2 text-[11px] text-blue-100/80">
          {["Assess", "Design", "Implement", "Scale"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-white/15 bg-white/10 text-white">
                {i + 1}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DuanamizeHomepage() {
  const heroWords = useMemo(() => ["Excellence", "Resilience", "Scale", "Innovation"], []);
  const [heroWordIndex, setHeroWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, [heroWords.length]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top hero shell */}
      <div className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.20),transparent_32%),radial-gradient(circle_at_45%_75%,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <section className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 pb-14 pt-4 md:px-8 md:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={serif}
              className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            >
              Transform Your Business with
              <span className="block mt-1 text-cyan-200">AI-Powered</span>
              <span className="relative inline-flex h-[1.1em] overflow-hidden align-top">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroWords[heroWordIndex]}
                    initial={{ y: 38, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -38, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
                  >
                    {heroWords[heroWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg"
            >
              Partner with Duanamize for intelligent automation, data-driven insights, and sustainable operational
              transformation that delivers measurable ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {[
                { label: "Focus Areas", value: "AI • Process • Data" },
                { label: "Delivery Model", value: "Consult + Build + Scale" },
                { label: "Operating Style", value: "Executive / Outcome-led" },
                { label: "Coverage", value: "24/7 Global Support" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-blue-200/80">{s.label}</div>
                  <div className="mt-1 text-sm font-medium text-white">{s.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <HeroSculpture />
          </motion.div>
        </section>
      </div>

      {/* What we do */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow=""
              title="Consulting, Engineering, and Digital Transformation — One Unified Operating Model"
              desc="We combine strategy, technology, and execution in a seamless approach.
Simplifying complexity, accelerating growth, and delivering measurable results."
              
            />
             {/* <button className="inline-flex items-center gap-2 rounded-xl bg-[#0A2463] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0b2d7e] transition">
              Get Started Today <ArrowRight className="h-4 w-4" />
            </button> */}
           
          </div>

          {/* polished visual instead of text-only feel */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="relative h-64 overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(140deg,#0A2463_0%,#102f79_45%,#123a8f_100%)]">
              <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_25%_20%,rgba(45,212,191,0.25),transparent_35%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.12),transparent_38%)]" />
              <div className="absolute left-6 top-6 max-w-xs">
                <div className="text-xs uppercase tracking-[0.18em] text-blue-100/80">Transformation architecture</div>
                <div style={serif} className="mt-2 text-2xl font-semibold leading-tight text-white">
                  Strategy → Delivery → Value Realization
                </div>
                <div className="mt-2 text-sm text-blue-100/80">
                  A visual frame to communicate how Duanamize connects consulting and execution.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="relative h-28 overflow-hidden border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover saturate-75 grayscale-[15%] transition duration-500 group-hover:scale-105 group-hover:saturate-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/55 via-[#0A2463]/20 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white backdrop-blur">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
                    Capability
                  </div>
                </div>
                <div className="p-4">
                  <h3 style={serif} className="text-2xl leading-none font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0A2463] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Industries */}
      <section className="mt-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader
            eyebrow="Industry Coverage"
            title="Built for Your Industry, Not Generic Solutions"
            desc="We understand the unique workflows, compliance requirements, and operational challenges of every sector—delivering practical, scalable solutions designed for real-world execution."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover saturate-75 grayscale-[14%] transition duration-500 group-hover:scale-105 group-hover:saturate-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                      <Icon className="h-3.5 w-3.5" />
                      {c.title.split(' ')[0]}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 style={serif} className="text-2xl leading-none font-semibold text-slate-900">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                    <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0A2463] group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
          <SectionHeader
            eyebrow="A four-phase delivery model that executive sponsors understand"
            desc="This approach replaces generic promises with a structured delivery model—assess, design, implement, and scale-driven by clear milestones and measurable KPIs."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "01",
                "Assess",
                "Discover current-state process, data, and controls. Outcome: prioritized opportunity map with feasibility, effort, and risk.",
                "Baseline KPI",
              ],
              [
                "02",
                "Design",
                "Prioritize use cases and define future-state architecture. Outcome: approved roadmap with target ROI, timeline, and governance controls.",
                "Target ROI Plan",
              ],
              [
                "03",
                "Implement",
                "Launch pilots, integrations, controls, and adoption. Outcome: cycle-time reduction, automation coverage, and measurable service uplift.",
                "Pilot to Production",
              ],
              [
                "04",
                "Scale",
                "Expand across teams and optimize performance. Outcome: recurring value realization model with KPI reporting and continuous improvement.",
                "Value Realization",
              ],
            ].map(([num, title, desc, tag]) => (
              <div key={num} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="pointer-events-none absolute right-2 top-0 text-7xl font-semibold text-slate-100">{num}</div>
                <div className="relative z-10 text-xs font-semibold tracking-[0.18em] text-[#0A2463]">PHASE {num}</div>
                <h3 style={serif} className="relative z-10 mt-2 text-3xl font-semibold text-slate-900 leading-none">
                  {title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                <div className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-[#0A2463]">
                  <Workflow className="h-3.5 w-3.5" /> {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Insights grid */}
      <section className="border-y border-slate-200 bg-slate-100/70">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
          <SectionHeader
            eyebrow="Insights & Articles"
            title="Modern Content Hub for Your Insights"
            desc="Leverage your existing categories and articles with an enhanced layout featuring rich visuals, reading time indicators, and a more structured content experience."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: i * 0.02 }}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover saturate-75 grayscale-[14%] transition duration-500 group-hover:scale-105 group-hover:saturate-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {post.category}
                  </div>
                  <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
                    <Clock3 className="h-3 w-3" /> {post.readType}
                  </div>
                  <div className="absolute left-3 bottom-3 rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
                    {post.sub}
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-xs text-slate-500">admin • {post.date}</div>
                  <h3 className="mt-2 min-h-[64px] text-base font-semibold leading-snug tracking-tight text-slate-900">
                    {post.title}
                  </h3>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A2463] group-hover:border-[#0A2463]/30 group-hover:bg-blue-50/60 transition">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`h-10 w-10 rounded-full border text-sm font-semibold ${
                  n === 1
                    ? "border-[#0A2463] bg-[#0A2463] text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {n}
              </button>
            ))}
            <button className="h-10 rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#061650]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                  Ready to Accelerate Your Digital Journey?
                </div> */}
                <h3 style={serif} className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                  Ready to Accelerate Your Digital Journey?
                </h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-blue-100/85">
                  Partner with experts to unlock faster, smarter transformation through proven methodologies and advanced technology—delivering measurable results from day one.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] hover:bg-blue-50">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15">
                  Inquire <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
