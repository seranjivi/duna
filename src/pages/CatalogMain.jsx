import React from "react";
import {
  Database, Cpu, Users, ArrowRight, Sparkles, CheckCircle2,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const profileStats = [
  { value: "6+", label: "Database Platforms" },
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "AI & Copilot Tools" },
  { value: "360°", label: "Data Engineering" },
];

const sections = [
  {
    id: "database",
    icon: Database,
    tag: "Section 01",
    title: "Database Skills",
    subtitle: "Oracle · SQL Server · IBM DB2 · PostgreSQL · MySQL · Sybase",
    desc: "Enterprise-grade and open-source database expertise spanning 6 platforms — covering PL/SQL development, T-SQL, performance tuning, schema migration, and legacy modernization.",
    highlights: [
      "Oracle PL/SQL — stored procedures, tuning, AWR",
      "SQL Server — T-SQL, Power BI & .NET integration",
      "IBM DB2 — mainframe & distributed environments",
      "PostgreSQL — cloud-ready, ACID, open-source",
      "MySQL & Sybase — web workloads & legacy OLTP",
    ],
    accent: "from-cyan-400 to-sky-500",
    darkBg: "from-[#071857] to-[#0c2d7a]",
    page: "DatabasePage",
  },
  {
    id: "automation",
    icon: Cpu,
    tag: "Section 02",
    title: "Automation & AI",
    subtitle: "Python · ETL · GenAI · Microsoft Copilot · GitHub Copilot",
    desc: "Python-powered automation for ETL pipelines, data validation, and API integration — combined with Generative AI and Copilot capabilities that accelerate development and reduce manual effort.",
    highlights: [
      "Python ETL pipelines — extract, transform, load",
      "Data validation, reconciliation & quality checks",
      "API & system integration scripting",
      "AI-assisted SQL generation & code reviews",
      "GitHub Copilot & Microsoft Copilot workflows",
    ],
    accent: "from-indigo-400 to-cyan-400",
    darkBg: "from-[#071857] to-[#102070]",
    page: "AutomationAIPage",
  },
  {
    id: "engagement",
    icon: Users,
    tag: "Section 03",
    title: "Engagement & Profile",
    subtitle: "Value Proposition · Engagement Models · PHP Web Backend",
    desc: "Professional profile, flexible engagement models, PHP web backend capabilities, and the measurable development, business, and client value delivered across all skill areas.",
    highlights: [
      "Short-term, long-term & advisory engagements",
      "PHP secure backend & database-driven web apps",
      "Development, business & client value framework",
      "Cross-platform expertise & delivery approach",
      "Production support & consulting roles",
    ],
    accent: "from-sky-400 to-indigo-500",
    darkBg: "from-[#071857] to-[#0e2868]",
    page: "EngagementPage",
  },
];

const techStack = [
  "Oracle PL/SQL", "MS SQL Server", "IBM DB2", "PostgreSQL",
  "MySQL", "Sybase", "Python", "PHP", "GitHub Copilot",
  "Microsoft Copilot", "GenAI", "ETL Pipelines", "REST APIs",
];

export default function CatalogMain({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.05),transparent_40%)]" />
        <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-12 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-100 mb-6 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                Database · Automation · GenAI · Web Backend
              </div>
              <h1 style={serif} className="text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-7xl">
                Damodharan<br />
                <span className="text-[#A5F3FC]">Devan</span>
              </h1>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/40">
                Skill & Service Catalog
              </p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                Database, Automation & GenAI Specialist — delivering measurable development,
                business, and client value across enterprise and modern data platforms.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {profileStats.map((s) => (
                  <div key={s.value} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-md text-center">
                    <div className="text-3xl font-bold text-white">{s.value}</div>
                    <p className="mt-1.5 text-[11px] leading-snug text-white/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 mb-4">Full Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs font-medium text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 mb-3">Value Delivered</div>
                <div className="space-y-2.5">
                  {[
                    { label: "Development Value", desc: "Clean, optimized, maintainable code built to scale" },
                    { label: "Business Value", desc: "Reduced downtime, lower costs, faster delivery" },
                    { label: "Client Value", desc: "Trusted partnerships with transparent results" },
                  ].map((v) => (
                    <div key={v.label} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                      <div>
                        <span className="text-xs font-semibold text-white">{v.label} — </span>
                        <span className="text-xs text-white/50">{v.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 SECTION CARDS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">Catalog Sections</p>
              <h2 style={serif} className="text-3xl font-semibold text-slate-950 md:text-5xl">
                Explore the Catalog.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Three focused sections covering skills, automation, AI tools, and engagement models.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <button
                  key={sec.id}
                  onClick={() => onNavigate && onNavigate(sec.page)}
                  className="group text-left overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/12"
                >
                  <div className={`relative bg-gradient-to-br ${sec.darkBg} p-7 pb-8`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.1),transparent_50%)]" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-5">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">{sec.tag}</div>
                        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${sec.accent} text-white shadow-lg`}>
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 style={serif} className="text-2xl font-semibold text-white md:text-3xl">{sec.title}</h3>
                      <p className="mt-1.5 text-xs text-white/45 leading-relaxed">{sec.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-7 pt-6">
                    <p className="text-sm leading-relaxed text-slate-600 mb-5">{sec.desc}</p>
                    <div className="space-y-2 mb-7">
                      {sec.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                          {h}
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463] group-hover:gap-3 transition-all duration-200">
                      Open Section <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-50 pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-10 shadow-2xl shadow-blue-900/20">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 style={serif} className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Ready to discuss an engagement?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                  Database optimization, Python automation, GenAI integration, or legacy system support —
                  let's explore how this expertise can deliver value for your team.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="mailto:damodharan@example.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 whitespace-nowrap">
                  Download Catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
