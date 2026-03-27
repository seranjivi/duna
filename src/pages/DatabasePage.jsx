import React, { useState } from "react";
import {
  Database, Server, Layers3, Cloud, Activity, ArrowRight, ArrowLeft,
  CheckCircle2, ChevronDown, ChevronUp, TrendingUp, BarChart3, Users,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const dbSkills = [
  {
    id: "oracle",
    icon: Database,
    tag: "Enterprise · Mission-Critical",
    title: "Oracle PL/SQL",
    subtitle: "Advanced PL/SQL Development & Performance Optimization",
    accent: "from-cyan-400 to-sky-500",
    useCases: ["Financial Systems", "ERP Platforms", "Large-Scale Enterprise", "Compliance-Driven"],
    devValue: "Sophisticated stored procedures, functions, packages, and triggers that encapsulate complex business logic within the database layer — minimizing data transfer and maximizing efficiency using bulk collects, cursor optimization, and AWR-based tuning.",
    bizValue: "High reliability, scalability, and transactional integrity ideal for financial systems and ERP platforms. Reduced defects lower maintenance overhead and improve uptime. Centralizing logic reduces application defects and eases upgrades.",
    clientValue: "Faster transaction processing, fewer production incidents, improved data accuracy, and easier long-term upgrades. Systems that handle large transaction volumes while meeting compliance and audit requirements.",
    capabilities: [
      "Stored procedures, packages, functions & triggers",
      "Performance tuning via execution plans & AWR reports",
      "Bulk collects, cursor optimization & index strategy",
      "Schema refactoring & data migration support",
      "Robust exception handling & logging frameworks",
      "Query acceleration & batch job optimization",
    ],
  },
  {
    id: "sqlserver",
    icon: Server,
    tag: "Microsoft Ecosystem · Enterprise",
    title: "Microsoft SQL Server",
    subtitle: "T-SQL Development & Enterprise SQL Server Support",
    accent: "from-sky-500 to-indigo-500",
    useCases: ["Business Intelligence", ".NET Applications", "Enterprise Reporting", "Mid-to-Large Orgs"],
    devValue: "T-SQL expertise for stored procedures, views, functions, and triggers. SQL Server Management Studio enables effective administration, debugging, and monitoring — supporting efficient development and troubleshooting workflows.",
    bizValue: "Tight integration with Power BI, SSRS, and .NET applications enabling advanced analytics and reporting. High availability, failover clustering, and enterprise-ready security features ensure system resilience.",
    clientValue: "Reliable reporting, improved visibility into business metrics, and dependable transactional performance. Predictable licensing, strong vendor support, and enterprise-ready security for growing organizations.",
    capabilities: [
      "T-SQL stored procedures, views & functions",
      "Indexing strategies & execution plan analysis",
      "Power BI, SSRS & .NET application integration",
      "High availability & failover clustering support",
      "Data integrity through constraint & transaction design",
      "SQL Server Management Studio administration",
    ],
  },
  {
    id: "db2",
    icon: Layers3,
    tag: "IBM · Mainframe & Distributed",
    title: "IBM DB2",
    subtitle: "Mission-Critical & High-Performance Workloads",
    accent: "from-indigo-500 to-blue-600",
    useCases: ["Banking & Insurance", "Telecommunications", "Healthcare", "Government Systems"],
    devValue: "Advanced SQL processing, optimized indexing, and efficient handling of high-volume transactional workloads. Full support for both mainframe and distributed DB2 environments across diverse enterprise infrastructures.",
    bizValue: "Data integrity, disaster recovery, and high availability for banking, insurance, and telecommunications. Regulatory compliance built-in. Mature tooling reduces long-term operational risk and supports business continuity.",
    clientValue: "Exceptional stability, predictable performance, and minimal downtime. Systems designed to handle peak loads without degradation — ensuring customer-facing applications remain responsive under pressure.",
    capabilities: [
      "Advanced SQL development & query optimization",
      "Mainframe & distributed DB2 environment support",
      "Performance analysis & optimization identification",
      "Schema, query & dependency analysis for migration",
      "Modernization readiness assessment",
      "Disaster recovery & business continuity planning",
    ],
  },
  {
    id: "postgresql",
    icon: Cloud,
    tag: "Open Source · Cloud-Ready",
    title: "PostgreSQL",
    subtitle: "Open-Source, Secure & Cloud-Ready Databases",
    accent: "from-blue-500 to-cyan-500",
    useCases: ["Cloud-Native Apps", "Microservices", "SaaS Platforms", "Cost-Conscious Enterprises"],
    devValue: "Custom functions, triggers, extensions, and complex queries for flexible data solutions. Strong ACID compliance ensures data consistency. PL/pgSQL for advanced stored procedures and vacuum strategies for performance.",
    bizValue: "Reduced licensing costs, vendor independence, and suitability for cloud-native architectures. Supports microservices and hybrid deployments. Rich community support and continual innovation ensure sustainability.",
    clientValue: "Lower total cost of ownership without compromising performance. Scalable, secure platforms that evolve with business needs while avoiding vendor lock-in. Long-term sustainability and community backing.",
    capabilities: [
      "Custom PL/pgSQL functions, triggers & extensions",
      "Vacuum strategies & advanced indexing methods",
      "Migration from Oracle / SQL Server to PostgreSQL",
      "Cloud-native & microservices architecture support",
      "Strong ACID compliance & consistency guarantees",
      "High-concurrency workload optimization",
    ],
  },
  {
    id: "mysql",
    icon: Activity,
    tag: "Web & App Workloads",
    title: "MySQL",
    subtitle: "High-Speed Transactional Processing & Web Optimization",
    accent: "from-teal-400 to-cyan-500",
    useCases: ["Web Applications", "E-Commerce", "App-Driven Environments", "Rapid Deployment"],
    devValue: "Efficient schema design, query optimization, replication setup, and backend integration for web-based and application-driven workloads. Broad ecosystem support makes development fast and maintainable.",
    bizValue: "Cost-effective deployment with widespread ecosystem support and fast time-to-market. High-speed transactional processing and replication support growing workloads without proportional cost increases.",
    clientValue: "Reliable, fast web applications at lower infrastructure cost. Wide compatibility with hosting providers and frameworks means lower operational complexity and faster delivery for client projects.",
    capabilities: [
      "Schema design & query optimization",
      "Replication, clustering & backup strategies",
      "Performance tuning for high-concurrency workloads",
      "Index optimization & query profiling",
      "Web application backend integration",
      "Migration planning & cross-platform support",
    ],
  },
  {
    id: "sybase",
    icon: Database,
    tag: "Legacy OLTP · Financial Systems",
    title: "Sybase",
    subtitle: "High-Speed OLTP & Legacy Financial System Support",
    accent: "from-sky-400 to-indigo-400",
    useCases: ["Financial Legacy Systems", "High-Speed OLTP", "System Continuity", "Phased Modernization"],
    devValue: "SQL development, performance analysis, and routine maintenance to ensure ongoing stability of Sybase environments. Schema and dependency analysis to prepare for future migration or modernization initiatives.",
    bizValue: "Operational continuity for mission-critical financial systems with minimal disruption. Structured optimization and documentation practices extend system life while reducing operational complexity.",
    clientValue: "Stable operations, predictable performance, and risk reduction while enabling gradual modernization. Clients can protect existing investments while transitioning to modern architectures at a managed pace.",
    capabilities: [
      "Sybase OLTP performance analysis & tuning",
      "SQL development & stored procedure maintenance",
      "Legacy system maintenance & stability support",
      "Schema & dependency analysis for migration",
      "Risk-managed modernization planning",
      "Operational documentation & knowledge transfer",
    ],
  },
];

function SkillCard({ skill, isOpen, onToggle }) {
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
          <div className="flex flex-wrap gap-2 mb-6">
            {skill.useCases.map((u) => (
              <span key={u} className={`rounded-full bg-gradient-to-r ${skill.accent} px-3 py-1 text-xs font-semibold text-white`}>{u}</span>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {[
              { label: "Development Value", icon: TrendingUp, value: skill.devValue, bg: "bg-cyan-50", border: "border-cyan-100", ic: "text-cyan-600" },
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

export default function DatabasePage({ onNavigate }) {
  const [openSkill, setOpenSkill] = useState("oracle");

  return (
    <div className="min-h-screen bg-slate-50">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-6 md:px-8">
          
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-100 mb-5">
                <Database className="h-3.5 w-3.5 text-cyan-300" /> Section 01 — Database Skills
              </div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                Database<br /><span className="text-[#A5F3FC]">Expertise.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                Enterprise-grade and open-source database expertise spanning 6 platforms —
                covering development, performance tuning, migration, and legacy modernization.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[{ v: "6", l: "DB Platforms" }, { v: "All", l: "Major Vendors" }, { v: "Legacy+Modern", l: "Coverage" }].map((s) => (
                  <div key={s.v} className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center backdrop-blur-md">
                    <div className="text-xl font-bold text-white">{s.v}</div>
                    <p className="mt-1 text-[11px] text-white/55">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 mb-4">Platforms Covered</div>
              <div className="space-y-3">
                {[
                  { name: "Oracle PL/SQL", tag: "Enterprise", color: "from-cyan-400 to-sky-500" },
                  { name: "Microsoft SQL Server", tag: "Enterprise", color: "from-sky-400 to-indigo-500" },
                  { name: "IBM DB2", tag: "Mission-Critical", color: "from-indigo-400 to-blue-600" },
                  { name: "PostgreSQL", tag: "Open Source", color: "from-blue-400 to-cyan-500" },
                  { name: "MySQL", tag: "Web & App", color: "from-teal-400 to-sky-500" },
                  { name: "Sybase", tag: "Legacy OLTP", color: "from-sky-400 to-indigo-400" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${p.color} shrink-0`} />
                    <span className="text-sm font-medium text-white">{p.name}</span>
                    <span className="ml-auto rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/45">{p.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILL CARDS ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="mb-8">
          <h2 style={serif} className="text-3xl font-semibold text-slate-950 md:text-4xl mb-2">Skill Deep-Dive.</h2>
          <p className="text-sm text-slate-500">Click any platform to expand — development value, business value, client value & capabilities.</p>
        </div>
        <div className="space-y-4">
          {dbSkills.map((skill) => (
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
                <p className="text-sm text-white/50 mt-1">Automation & AI and Engagement sections available.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[{ label: "Automation & AI", page: "AutomationAIPage" }, { label: "Engagement & Profile", page: "EngagementPage" }].map((l) => (
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
