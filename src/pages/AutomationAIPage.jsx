import React, { useState } from "react";
import {
  Terminal, Brain, GitBranch, RefreshCw, Link2, BarChart3, Code2,
  Sparkles, FileText, Search, CheckCircle2, ArrowRight, ArrowLeft,
  TrendingUp, Users, ChevronDown, ChevronUp,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const skills = [
  // ── PYTHON ──
  {
    id: "etl",
    icon: RefreshCw,
    group: "Python Automation",
    tag: "Data Engineering",
    title: "Automated ETL Pipelines",
    subtitle: "Extract · Transform · Load · Schedule · Orchestrate",
    accent: "from-sky-400 to-indigo-500",
    devValue: "Python scripts automate data extraction from multiple sources, apply transformation rules, and load into target systems — with scheduling, error handling, logging, and retry logic built in.",
    bizValue: "Eliminates manual data movement and reduces human error. Ensures consistent data availability for reporting and analytics — freeing staff for higher-value work.",
    clientValue: "Faster access to clean, reliable data. Reduced operational cost and improved data freshness for decision-making. Repeatable processes that scale with data volume growth.",
    capabilities: ["Multi-source extraction (DB, APIs, files)", "Custom transformation & business rules", "Load to SQL/NoSQL/cloud targets", "Scheduled execution with alerting", "Error handling, retry & audit trails", "Incremental & full-load strategies"],
  },
  {
    id: "validation",
    icon: CheckCircle2,
    group: "Python Automation",
    tag: "Data Quality",
    title: "Data Validation & Reconciliation",
    subtitle: "Accuracy · Consistency · Cross-Source Verification",
    accent: "from-indigo-400 to-blue-500",
    devValue: "Python-based validation frameworks compare data across sources, flag anomalies, enforce quality rules, and produce reconciliation reports for review and corrective action.",
    bizValue: "Improved data quality means better analytics, fewer downstream errors, and higher confidence in reporting. Reduces costly data remediation after issues are discovered in production.",
    clientValue: "Trust in data assets. Fewer decisions made on inaccurate information. Demonstrable data governance posture for audits and regulatory compliance reviews.",
    capabilities: ["Cross-system reconciliation checks", "Row count, value & format validation", "Anomaly detection & outlier flagging", "Automated quality reports", "Pre/post migration data verification", "Data lineage tracking & audit logging"],
  },
  {
    id: "api",
    icon: Link2,
    group: "Python Automation",
    tag: "System Integration",
    title: "API & System Integration",
    subtitle: "REST APIs · Database Connectors · Cloud SDKs",
    accent: "from-blue-400 to-cyan-500",
    devValue: "Python enables seamless connection between databases and external APIs, third-party services, and cloud platforms — using SQLAlchemy, requests, Boto3, and cloud SDKs.",
    bizValue: "Breaks down data silos and enables real-time data exchange between systems. Reduces manual data re-entry across platforms and improves cross-system operational efficiency.",
    clientValue: "Integrated technology ecosystems that share data seamlessly. Reduced duplication, faster data flows, and improved cross-system visibility for business stakeholders.",
    capabilities: ["REST & SOAP API consumption", "Database connectivity via SQLAlchemy", "Cloud SDK integration (AWS, Azure, GCP)", "Webhook handlers & event-driven triggers", "Secure credential management", "Rate limiting & response handling"],
  },
  {
    id: "reporting",
    icon: BarChart3,
    group: "Python Automation",
    tag: "Analytics Automation",
    title: "Reporting & Analytics Automation",
    subtitle: "Automated Reports · Scheduled Delivery · Data Insights",
    accent: "from-cyan-400 to-sky-500",
    devValue: "Python automates generation and distribution of reports, transforming raw data into formatted Excel, PDF, or HTML outputs with scheduling, conditional filtering, and email delivery.",
    bizValue: "Eliminates repetitive manual reporting effort, ensures consistency, and delivers timely insights to stakeholders without analyst intervention — freeing teams for analysis work.",
    clientValue: "On-time, consistent reporting without manual production costs. Stakeholders receive data when they need it — forming the basis for more advanced analytics investment.",
    capabilities: ["Automated Excel, PDF & HTML reports", "Scheduled email delivery with attachments", "Pandas & NumPy for aggregation", "Matplotlib & Seaborn for charts", "Conditional report logic & filtering", "Data warehouse query automation"],
  },
  // ── GEN AI ──
  {
    id: "sqlgen",
    icon: Code2,
    group: "Generative AI",
    tag: "SQL & Database AI",
    title: "AI-Assisted SQL Generation",
    subtitle: "Auto-Generate · Optimise · Explain · Refactor SQL",
    accent: "from-indigo-400 to-cyan-400",
    devValue: "Generative AI generates optimized SQL from natural language, suggests performance improvements for existing queries, explains complex SQL logic, and assists cross-platform dialect translation.",
    bizValue: "Faster query development, reduced debugging time, and consistent SQL standards across teams. Junior developers become productive faster with AI-guided best practices.",
    clientValue: "Faster project delivery, lower development costs, and improved query performance. Access to best-practice SQL patterns without deep specialist dependency on every engagement.",
    capabilities: ["Natural language to SQL generation", "Query performance analysis & suggestions", "Complex SQL explanation & documentation", "SQL refactoring & modernization", "Index recommendation from query patterns", "Cross-platform SQL dialect translation"],
  },
  {
    id: "copilot-ms",
    icon: Sparkles,
    group: "Generative AI",
    tag: "Microsoft Copilot",
    title: "Microsoft Copilot Workflows",
    subtitle: "Development Acceleration · Code Reviews · Knowledge Sharing",
    accent: "from-blue-500 to-indigo-500",
    devValue: "Microsoft Copilot integrated into development workflows accelerates code reviews, supports knowledge transfer, and streamlines documentation creation during development sprints.",
    bizValue: "Reduced development cycle times, improved team consistency, and faster onboarding. More features delivered with fewer resources. Teams focus on business logic, not boilerplate.",
    clientValue: "Higher-quality solutions, faster project delivery, and access to future-ready AI-augmented development practices. Directly improves client satisfaction and competitive positioning.",
    capabilities: ["AI-assisted code review & quality", "Development sprint acceleration", "Knowledge transfer support", "Legacy code understanding", "Team consistency via AI standards", "Microsoft 365 tooling integration"],
  },
  {
    id: "github-copilot",
    icon: GitBranch,
    group: "Generative AI",
    tag: "GitHub Copilot",
    title: "GitHub Copilot Code Assistance",
    subtitle: "Real-Time Suggestions · Productivity · Code Quality",
    accent: "from-cyan-400 to-sky-500",
    devValue: "GitHub Copilot provides real-time, context-aware code suggestions — reducing repetitive coding effort, minimizing errors, and accelerating development timelines across projects and teams.",
    bizValue: "Shorter development timelines, standardized coding practices, and improved code maintainability. Developers complete more work per sprint with consistent quality output.",
    clientValue: "Faster releases, better-quality codebases, and lower development costs. Teams focus on solving business problems rather than repetitive coding — increasing overall value delivery.",
    capabilities: ["Real-time code completion & suggestions", "Context-aware function generation", "Test case generation & coverage", "Code refactoring & debt reduction", "Multi-language: Python, PHP & SQL", "Inline documentation generation"],
  },
  {
    id: "documentation",
    icon: FileText,
    group: "Generative AI",
    tag: "AI Documentation",
    title: "Automated Documentation",
    subtitle: "Code Comments · Technical Docs · Knowledge Base",
    accent: "from-sky-400 to-indigo-400",
    devValue: "GenAI automatically generates inline code comments, function documentation, README files, and technical specifications from existing code — maintaining standards without manual effort.",
    bizValue: "Well-documented codebases reduce onboarding time, lower knowledge-loss risk from staff turnover, and make systems easier to audit, maintain, and extend over time.",
    clientValue: "Delivered projects include complete technical documentation — reducing client dependency on original developers and lowering long-term support and maintenance costs.",
    capabilities: ["Inline code comment generation", "Function & module docstrings", "README & technical spec drafting", "Legacy code reverse documentation", "API endpoint documentation", "Change log & release notes automation"],
  },
];

const groups = ["All", "Python Automation", "Generative AI"];

function SkillCard({ skill, isOpen, onToggle }) {
  const Icon = skill.icon;
  return (
    <div className={`overflow-hidden rounded-[28px] border transition-all duration-300 ${isOpen ? "border-[#0A2463]/20 bg-white shadow-2xl shadow-blue-900/8" : "border-slate-200 bg-white hover:shadow-md hover:-translate-y-0.5"}`}>
      <button onClick={onToggle} className="flex w-full items-center gap-5 px-7 py-6 text-left">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.accent} text-white shadow-lg`}>
          <Icon className="h-7 w-7" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{skill.tag}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">{skill.group}</span>
          </div>
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
              { label: "Development Value", icon: TrendingUp, value: skill.devValue, bg: "bg-sky-50", border: "border-sky-100", ic: "text-sky-600" },
              { label: "Business Value", icon: BarChart3, value: skill.bizValue, bg: "bg-indigo-50", border: "border-indigo-100", ic: "text-indigo-600" },
              { label: "Client Value", icon: Users, value: skill.clientValue, bg: "bg-cyan-50", border: "border-cyan-100", ic: "text-cyan-600" },
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

export default function AutomationAIPage({ onNavigate }) {
  const [openSkill, setOpenSkill] = useState("etl");
  const [activeGroup, setActiveGroup] = useState("All");

  const filtered = activeGroup === "All" ? skills : skills.filter((s) => s.group === activeGroup);

  return (
    <div className="min-h-screen bg-slate-50">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.15),transparent_30%)]" />
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-300/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-6 md:px-8">
          <button onClick={() => onNavigate && onNavigate("CatalogMain")} className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Catalog
          </button>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-100 mb-5">
                <Brain className="h-3.5 w-3.5 text-cyan-300" /> Section 02 — Automation & AI
              </div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Automation<br /><span className="text-[#A5F3FC]">& AI.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                Python-powered automation for ETL, validation, and integration — combined with
                Generative AI and Copilot capabilities that accelerate development across every stage.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[{ v: "4", l: "Python Skills" }, { v: "4", l: "AI Capabilities" }, { v: "2×", l: "Dev Speed" }, { v: "Zero", l: "Manual Overhead" }].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center backdrop-blur-md">
                    <div className="text-2xl font-bold text-white">{s.v}</div>
                    <p className="mt-1 text-[11px] text-white/55">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-[22px] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 mb-3">Python Libraries</div>
                <div className="flex flex-wrap gap-2">
                  {["Pandas", "SQLAlchemy", "Requests", "NumPy", "OpenPyXL", "Boto3", "psycopg2", "cx_Oracle"].map((l) => (
                    <span key={l} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-medium text-white/75">{l}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 mb-3">AI Tools</div>
                <div className="flex flex-wrap gap-2">
                  {["Microsoft Copilot", "GitHub Copilot", "GenAI SQL", "AI Documentation", "AI Code Review"].map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-medium text-white/75">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILL CARDS ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 style={serif} className="text-3xl font-semibold text-slate-950 md:text-4xl mb-1">Automation & AI Skills.</h2>
            <p className="text-sm text-slate-500">Filter by group — expand each skill to see full value breakdown.</p>
          </div>
          <div className="flex gap-2">
            {groups.map((g) => (
              <button key={g} onClick={() => setActiveGroup(g)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeGroup === g ? "bg-[#0A2463] text-white shadow-lg" : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"}`}>
                {g}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {filtered.map((skill) => (
            <SkillCard key={skill.id} skill={skill} isOpen={openSkill === skill.id} onToggle={() => setOpenSkill(openSkill === skill.id ? null : skill.id)} />
          ))}
        </div>
      </section>

      {/* ── BOTTOM NAV ── */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#071857] to-[#0A2463] p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p style={serif} className="text-xl font-semibold text-white">Continue Exploring</p>
                <p className="text-sm text-white/50 mt-1">Database Skills and Engagement sections available.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[{ label: "Database Skills", page: "DatabasePage" }, { label: "Engagement & Profile", page: "EngagementPage" }].map((l) => (
                  <button key={l.page} onClick={() => onNavigate && onNavigate(l.page)} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
                    {l.label} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
