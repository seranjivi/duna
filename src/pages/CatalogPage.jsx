import React from "react";
import {
  Database,
  Cpu,
  Briefcase,
  ArrowRight,
  Sparkles,
  Server,
  Terminal,
  Globe,
  CheckCircle2,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const catalogSections = [
  {
    id: "database",
    title: "Database Skills",
    icon: Database,
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    description:
      "Enterprise-grade and open-source database expertise spanning 6 platforms — covering development, performance tuning, migration, and legacy modernization.",
    highlights: [
      "Oracle PL/SQL & Microsoft SQL Server",
      "IBM DB2 & PostgreSQL",
      "MySQL & Sybase Support",
      "Performance Tuning & Migration",
    ],
    stats: { value: "6", label: "Database Platforms" },
    path: "/databaseskills",
  },
  {
    id: "automation",
    title: "Automation & AI",
    icon: Cpu,
    accent: "from-indigo-400 via-purple-500 to-pink-500",
    description:
      "Cutting-edge automation and artificial intelligence capabilities that transform operations through intelligent process automation, predictive analytics, and AI-driven insights.",
    highlights: [
      "Agentic AI & Intelligent Automation",
      "Process Intelligence & Analytics",
      "Machine Learning Integration",
      "Workflow Optimization",
    ],
    stats: { value: "40%", label: "Faster Results" },
    path: "/automation",
  },
  {
    id: "engagement",
    title: "Engagement & Profile",
    icon: Briefcase,
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
    description:
      "Comprehensive engagement models and capability profiles designed for enterprise transformation, partnership collaboration, and capability building initiatives.",
    highlights: [
      "Enterprise Engagement Models",
      "Partnership Frameworks",
      "Capability Building Programs",
      "Strategic Advisory Services",
    ],
    stats: { value: "3+", label: "Years Excellence" },
    path: "/engagement",
  },
];

function CatalogCard({ section }) {
  const Icon = section.icon;
  return (
    <a
      href={section.path}
      className="group block rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${section.accent} text-white shadow-lg shadow-slate-900/10`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-slate-950">{section.stats.value}</div>
          <div className="text-xs text-slate-500">{section.stats.label}</div>
        </div>
      </div>

      <h3 style={serif} className="mt-5 text-2xl font-semibold text-slate-950">
        {section.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {section.description}
      </p>

      <div className="mt-5 space-y-2">
        {section.highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-500" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0A2463] group-hover:gap-3 transition-all">
        Learn more
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_34%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-6 md:px-8 md:pb-20">
         <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#071857] mb-4">
            Catalog
          </div>
          <div className="text-sm text-blue-100/80">
            <a href="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Home
            </a>
            {" / Catalog"}
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>

              <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Explore Our<br />
                <span className="text-[#A5F3FC]">Service Catalog</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Discover Duanamize's comprehensive service portfolio across database expertise, 
                intelligent automation, and strategic engagement models designed for enterprise transformation.
              </p>

             
            </div>

            <div className="hidden lg:block">
              <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Database className="mx-auto h-8 w-8 text-cyan-300" />
                    <div className="mt-2 text-2xl font-bold text-white">6</div>
                    <div className="text-xs text-blue-100/70">DB Platforms</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Terminal className="mx-auto h-8 w-8 text-purple-300" />
                    <div className="mt-2 text-2xl font-bold text-white">AI</div>
                    <div className="text-xs text-blue-100/70">Automation</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Globe className="mx-auto h-8 w-8 text-emerald-300" />
                    <div className="mt-2 text-2xl font-bold text-white">3+</div>
                    <div className="text-xs text-blue-100/70">Years</div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm text-white/90">Enterprise-grade solutions across technology and transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATALOG SECTIONS ── */}
      <section id="sections" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12">
            <h2 style={serif} className="text-3xl font-semibold text-slate-950 md:text-4xl">
              Three Core Capability Areas
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Each catalog section represents deep expertise and proven methodologies 
              for enterprise transformation and operational excellence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {catalogSections.map((section) => (
              <CatalogCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative overflow-hidden bg-[#061650]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h3 style={serif} className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                  Ready to Accelerate Your Digital Journey?
                </h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-blue-100/85">
                  Partner with experts to unlock faster, smarter transformation through proven methodologies and advanced technology—delivering measurable results from day one.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] hover:bg-blue-50 transition">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
