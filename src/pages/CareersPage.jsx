import React, { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Cpu,
  Globe,
  TrendingUp,
  BookOpen,
  Award,
  Users,
  Star,
  Sparkles,
  CheckCircle2,
  Heart,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const whyReasons = [
  {
    icon: Cpu,
    title: "Innovation Leadership",
    desc: "Work with cutting-edge LSS+AI technology at the frontier of business transformation.",
    gradient: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Globe,
    title: "Global Impact",
    desc: "Deliver breakthrough results for Fortune 500 clients across 15+ countries.",
    gradient: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Accelerated advancement opportunities in the fastest-growing segment of consulting.",
    gradient: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "World-class training, certifications, and professional development programs.",
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Award,
    title: "Competitive Package",
    desc: "Industry-leading compensation, benefits, and performance incentives.",
    gradient: "from-cyan-500 to-teal-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Star,
    title: "Recognition Culture",
    desc: "Merit-based advancement and celebration of achievements and innovations.",
    gradient: "from-sky-400 to-cyan-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
];

const values = [
  { icon: Star, label: "Excellence", desc: "We relentlessly pursue the highest standards in everything we deliver." },
  { icon: Lightbulb, label: "Innovation", desc: "We continuously push boundaries to discover what's possible." },
  { icon: Users, label: "Collaboration", desc: "We succeed through teamwork and strategic partnerships." },
  { icon: Shield, label: "Integrity", desc: "We always do the right thing for our clients, colleagues, and communities." },
];

const testimonials = [
  {
    quote: "Working at Duanamize has accelerated my career beyond expectations. The exposure to cutting-edge AI technology and Fortune 500 clients is unmatched.",
    name: "Priya Sharma",
    role: "Senior Consultant",
    initials: "PS",
    color: "from-cyan-400 to-sky-500",
  },
  {
    quote: "The learning opportunities are incredible. I've gained Master Black Belt certification and AI expertise that makes me highly sought after in the market.",
    name: "Rajesh Kumar",
    role: "Principal Consultant",
    initials: "RK",
    color: "from-sky-500 to-indigo-500",
  },
  {
    quote: "The culture of innovation and collaboration makes every day exciting. We're truly shaping the future of business transformation.",
    name: "Sarah Mitchell",
    role: "Associate Director",
    initials: "SM",
    color: "from-indigo-500 to-blue-600",
  },
];

const openRoles = [
  { title: "Senior LSS+AI Consultant", location: "London · Hybrid", type: "Full-time" },
  { title: "AI Solutions Architect", location: "Singapore · Remote", type: "Full-time" },
  { title: "Process Intelligence Analyst", location: "New York · Hybrid", type: "Full-time" },
  { title: "Change Management Lead", location: "Dubai · On-site", type: "Full-time" },
  { title: "Training & Certification Specialist", location: "Bangalore · Hybrid", type: "Full-time" },
];

export default function CareersPage({ onNavigate }) {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 mt-5 text-sm">
          
            <a href="/more" className="text-white hover:text-blue-200 transition-colors">More</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Careers</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Build Your Future with Us and be part of a journey that{" "}
                <span className="text-[#A5F3FC]"> transforms ideas into powerful, future-ready solutions.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Shape the future of business transformation while building a rewarding career
                with the pioneers of LSS+AI methodology. Make an impact that matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Duanamize team"
                  className="h-64 w-full object-cover"
                />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70 mb-3">
                    What we offer
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["LSS+AI Certification", "Fortune 500 Clients", "15+ Countries", "Remote Friendly", "Fast Progression"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1 text-xs font-semibold text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DUANAMIZE ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Why Choose Duanamize?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              We empower you with cutting-edge technology, global opportunities, and a culture that
              values innovation, learning, and recognition — helping you grow while making a real impact.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyReasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className={`rounded-[28px] border ${r.border} ${r.bg} p-6 transition hover:-translate-y-1 hover:shadow-lg`}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${r.gradient} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-950">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CULTURE & VALUES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Our Culture & Values.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                Our values guide every decision as we transform organizations worldwide, driving
                innovation and building lasting relationships based on trust and exceptional results.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <button
                      key={v.label}
                      onClick={() => setActiveValue(i)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        activeValue === i
                          ? "bg-[#0A2463] text-white shadow-lg"
                          : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {v.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 rounded-[22px] border border-slate-200 bg-white p-5">
                <p className="text-sm leading-relaxed text-slate-700">{values[activeValue].desc}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((t) => (
                <div key={t.name} className={`rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm ${t.name === "Sarah Mitchell" ? "sm:col-span-2" : ""}`}>
                  <p className="text-sm leading-relaxed text-slate-700 italic">"{t.quote}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-950">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Open Roles.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Join a team of pioneers transforming organizations worldwide with LSS+AI methodology.
            </p>
          </div>
          <div className="space-y-3">
            {openRoles.map((role) => (
              <div key={role.title} className="group flex items-center justify-between rounded-[22px] border border-slate-200 bg-slate-50 px-6 py-4 transition hover:border-[#0A2463]/30 hover:bg-white hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2463] text-white">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-950">{role.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{role.location} · {role.type}</div>
                  </div>
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-[#0A2463] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#071857] group-hover:gap-2.5">
                  Apply <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

       
        </div>
      </section>
    </div>
  );
}
