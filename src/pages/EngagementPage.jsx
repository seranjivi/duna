import React, { useState } from "react";
import {
  Users, Globe, Lock, Cpu, Zap, Layers3, Monitor, Shield,
  CheckCircle2, ArrowRight, ArrowLeft, TrendingUp, BarChart3,
  Briefcase, Award, Star, ChevronDown, ChevronUp,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const engagementModels = [
  {
    icon: Zap,
    title: "Short-Term Task-Based",
    desc: "Rapid, focused engagements for specific challenges — performance tuning, schema review, automation scripts, or quick diagnostic work.",
    gradient: "from-cyan-400 to-sky-500",
    examples: ["DB performance audit", "ETL script development", "Query optimization sprint"],
  },
  {
    icon: Briefcase,
    title: "Long-Term Projects",
    desc: "End-to-end project delivery covering design, development, testing, and deployment across database or automation initiatives.",
    gradient: "from-sky-500 to-indigo-500",
    examples: ["Database migration projects", "Full ETL pipeline build", "System modernization"],
  },
  {
    icon: Shield,
    title: "Production Support",
    desc: "Ongoing maintenance, monitoring, and incident response to keep critical database systems stable, performant, and available.",
    gradient: "from-indigo-500 to-blue-600",
    examples: ["24/7 DB monitoring", "Incident response", "Patch & maintenance"],
  },
  {
    icon: Star,
    title: "Consulting & Advisory",
    desc: "Strategic guidance on modernization, AI adoption, cloud migration, and technology selection aligned with business objectives.",
    gradient: "from-blue-500 to-cyan-500",
    examples: ["Cloud migration strategy", "AI readiness assessment", "Tech stack advisory"],
  },
];

const phpSkills = [
  {
    id: "secure",
    icon: Lock,
    tag: "Security · Data Protection",
    title: "Secure Query Handling",
    subtitle: "SQL Injection Prevention · Parameterized Queries · Safe Data Access",
    accent: "from-teal-400 to-cyan-500",
    devValue: "Implementing parameterized queries, prepared statements, and input validation in PHP applications to prevent SQL injection and protect sensitive data from unauthorized access.",
    bizValue: "Reduced risk of data breaches and security incidents. Compliance with data protection regulations. Lower liability exposure from application vulnerabilities in production.",
    clientValue: "Protected client data, reduced security audit risk, and assurance that web applications follow industry best practices — critical for trust and regulatory compliance.",
    capabilities: ["Parameterized queries & prepared statements", "Input sanitization & validation", "SQL injection prevention patterns", "Auth & session security best practices", "Data access control enforcement", "Security testing & vulnerability review"],
  },
  {
    id: "logic",
    icon: Cpu,
    tag: "Application Development",
    title: "Backend Business Logic",
    subtitle: "PHP Business Rules · Database Integration · Core Application Layer",
    accent: "from-cyan-400 to-sky-500",
    devValue: "Using PHP to implement core business rules that interact efficiently with relational databases — clean, maintainable backend logic that drives consistent application behavior.",
    bizValue: "Business rules enforced consistently at the application layer, reducing data errors and ensuring uniform behavior across all user interactions with the system.",
    clientValue: "Applications that behave as expected, enforce business policies automatically, and are maintainable by future development teams — reducing long-term technical debt.",
    capabilities: ["Business rule & workflow logic", "Database-driven application layer", "MVC & clean architecture", "Transaction management", "Custom API endpoint development", "Configuration & environment handling"],
  },
  {
    id: "performance",
    icon: Zap,
    tag: "Optimization",
    title: "PHP Performance Optimization",
    subtitle: "Query Optimization · Caching · Response Time · Scalability",
    accent: "from-sky-400 to-indigo-500",
    devValue: "Optimizing database queries, implementing caching strategies, profiling PHP execution, and reducing response times for database-driven web applications operating under load.",
    bizValue: "Faster application response times improve user experience, reduce server infrastructure costs, and support business growth without proportional increases in hosting spend.",
    clientValue: "Responsive web applications that perform well under load. Higher user volumes supported without scaling cost penalties. Users experience faster, smoother interactions.",
    capabilities: ["Database query optimization", "PHP opcode caching & tuning", "Redis / Memcached integration", "Profiling & bottleneck identification", "Lazy loading & pagination", "CDN & static asset guidance"],
  },
  {
    id: "webapps",
    icon: Monitor,
    tag: "Full-Stack Web",
    title: "Database-Driven Web Applications",
    subtitle: "End-to-End Development · CRUD · Dynamic Content · Scalable Architecture",
    accent: "from-indigo-400 to-blue-500",
    devValue: "Building complete database-backed web applications using PHP and relational databases — from schema design through backend logic to frontend data delivery with clean separation of concerns.",
    bizValue: "Rapid delivery of functional web applications serving business needs. Cost-effective development using proven, widely-supported technology with large developer communities.",
    clientValue: "Reliable, maintainable web applications supporting digital engagement. Handles business data correctly and can be maintained or extended by future development teams.",
    capabilities: ["Full CRUD application development", "Dynamic content from DB sources", "User auth & authorization systems", "File upload & storage integration", "Search & filtering systems", "Admin panel & content management"],
  },
];

const valuePillars = [
  {
    icon: TrendingUp,
    label: "Development Value",
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    points: [
      "Clean, optimized, maintainable code built to enterprise standards",
      "Performance-first approach — tuned queries and efficient logic",
      "Documented, handover-ready deliverables",
      "Best-practice patterns applied across all technology stacks",
    ],
  },
  {
    icon: BarChart3,
    label: "Business Value",
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    points: [
      "Measurable reductions in query latency and system downtime",
      "Lower infrastructure and operational costs through optimization",
      "Faster delivery timelines through Python automation and AI tools",
      "Improved data quality and reliability for business decision-making",
    ],
  },
  {
    icon: Users,
    label: "Client Value",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    points: [
      "Trusted partnerships with transparent communication throughout",
      "Knowledge transfer built into every engagement",
      "Systems that outlast the engagement — built for long-term use",
      "Flexible engagement models that match client needs and budgets",
    ],
  },
];

function PhpSkillCard({ skill, isOpen, onToggle }) {
  const Icon = skill.icon;
  return (
    <div className={`overflow-hidden rounded-[28px] border transition-all duration-300 ${isOpen ? "border-[#0A2463]/20 bg-white shadow-2xl shadow-blue-900/8" : "border-slate-200 bg-white hover:shadow-md hover:-translate-y-0.5"}`}>
      <button onClick={onToggle} className="flex w-full items-center gap-5 px-7 py-6 text-left">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.accent} text-white shadow-lg`}>
          <Icon className="h-7 w-7" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-1">{skill.tag}</div>
          <div style={serif} className="text-xl font-semibold text-slate-950">{skill.title}</div>
          <div className="text-sm text-slate-500 mt-0.5">{skill.subtitle}</div>
        </div>
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen ? "bg-[#0A2463] text-white" : "bg-slate-100 text-slate-500"}`}>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>
      {isOpen && (
        <div className="border-t border-slate-100 px-7 pb-8 pt-6">
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {[
              { label: "Development Value", icon: TrendingUp, value: skill.devValue, bg: "bg-teal-50", border: "border-teal-100", ic: "text-teal-600" },
              { label: "Business Value", icon: BarChart3, value: skill.bizValue, bg: "bg-sky-50", border: "border-sky-100", ic: "text-sky-600" },
              { label: "Client Value", icon: Users, value: skill.clientValue, bg: "bg-indigo-50", border: "border-indigo-100", ic: "text-indigo-600" },
            ].map((v) => {
              const VI = v.icon;
              return (
                <div key={v.label} className={`rounded-2xl border ${v.border} ${v.bg} p-4`}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <VI className={`h-3.5 w-3.5 ${v.ic}`} />
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{v.label}</div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{v.value}</p>
                </div>
              );
            })}
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">Key Capabilities</div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {skill.capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                <span className="text-sm text-slate-700">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function EngagementPage({ onNavigate }) {
  const [openPhp, setOpenPhp] = useState("secure");

  return (
    <div className="min-h-screen bg-slate-50">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.15),transparent_30%)]" />
        <div className="absolute -left-10 top-10 h-80 w-80 rounded-full bg-sky-300/8 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-6 md:px-8">
           <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75 mb-4">
                <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
                <span>•</span>
                <a href="/catalog" className="hover:text-blue-200 transition-colors">Catalog</a>
                <span>•</span>
                <span className="text-white">Engangment & Profile</span>
              </div>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Engagement<br /><span className="text-[#A5F3FC]">& Profile.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                Professional value proposition, flexible engagement models, PHP web backend
                capabilities, and the measurable outcomes delivered across every engagement.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[{ v: "4", l: "Engagement Types" }, { v: "3", l: "Value Pillars" }, { v: "4", l: "PHP Skills" }, { v: "∞", l: "Flexibility" }].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center backdrop-blur-md">
                    <div className="text-2xl font-bold text-white">{s.v}</div>
                    <p className="mt-1 text-[11px] text-white/55">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 mb-4">PHP Tech Stack</div>
              <div className="grid grid-cols-2 gap-2">
                {[{ n: "PHP 8.x", u: "Core runtime" }, { n: "PDO / MySQLi", u: "Secure DB access" }, { n: "Laravel / Slim", u: "Framework support" }, { n: "Composer", u: "Dependencies" }, { n: "Redis", u: "Caching & sessions" }, { n: "MySQL / PostgreSQL", u: "Backend DB" }, { n: "REST APIs", u: "Service integration" }, { n: "PHPUnit", u: "Testing & QA" }].map((p) => (
                  <div key={p.n} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                    <div className="text-sm font-semibold text-white">{p.n}</div>
                    <div className="text-[11px] text-white/40 mt-0.5">{p.u}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE PILLARS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">The Value Framework</p>
            <h2 style={serif} className="text-3xl font-semibold text-slate-950 md:text-4xl">
              Development, Business & Client Value.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              Every engagement is measured against three value dimensions — ensuring technical excellence
              translates to real business outcomes and lasting client satisfaction.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {valuePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className={`rounded-[28px] border ${p.border} ${p.bg} p-7`}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-lg mb-5`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 style={serif} className="text-xl font-semibold text-slate-950 mb-4">{p.label}</h3>
                  <ul className="space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                        <span className="text-sm leading-relaxed text-slate-700">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">How We Work</p>
            <h2 style={serif} className="text-3xl font-semibold text-slate-950 md:text-4xl">
              Flexible Engagement Models.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
              Designed to align with diverse business needs — from targeted quick wins to long-term transformation.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((em) => {
              const Icon = em.icon;
              return (
                <div key={em.title} className="rounded-[28px] bg-[#071857] p-6 shadow-lg shadow-blue-950/20 hover:-translate-y-1 hover:shadow-xl transition-all">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${em.gradient} text-white shadow-lg mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{em.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-4">{em.desc}</p>
                  <div className="space-y-1.5">
                    {em.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2 text-xs text-white/40">
                        <div className="h-1 w-1 rounded-full bg-cyan-300/60 shrink-0" />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHP WEB BACKEND ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">Web & Backend</p>
            <h2 style={serif} className="text-3xl font-semibold text-slate-950 md:text-4xl mb-2">PHP Backend Skills.</h2>
            <p className="text-sm text-slate-500">Secure, performant PHP backend development integrated tightly with relational databases.</p>
          </div>
          <div className="space-y-4">
            {phpSkills.map((skill) => (
              <PhpSkillCard key={skill.id} skill={skill} isOpen={openPhp === skill.id} onToggle={() => setOpenPhp(openPhp === skill.id ? null : skill.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
 
    </div>
  );
}
