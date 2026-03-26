import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  CheckCircle2,
  Code2,
  Database,
  GitMerge,
  Globe2,
  Lock,
  Network,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "60%", label: "Faster data processing post-integration" },
  { value: "45%", label: "Reduction in integration maintenance costs" },
  { value: "99.9%", label: "Data consistency target across systems" },
];

const challenges = [
  {
    category: "Data Silos",
    icon: Database,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Legacy systems with no modern integration capabilities",
      "Data format inconsistencies across enterprise platforms",
      "Real-time requirements exceeding batch integration capacity",
      "No comprehensive visibility into end-to-end process data",
    ],
  },
  {
    category: "Performance Constraints",
    icon: Zap,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Integration architectures that can't scale with data volume",
      "Peak load failures disrupting business operations",
      "Error handling gaps causing silent data loss",
      "No integration performance monitoring or alerting",
    ],
  },
  {
    category: "Security & Governance",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Sensitive data transmitted without adequate encryption",
      "No role-based access control on integration endpoints",
      "Insufficient audit trails for compliance and forensics",
      "Integration security not reviewed against current threat landscape",
    ],
  },
];

const integrationTabs = [
  {
    label: "API Architecture",
    icon: Code2,
    title: "API-First Integration Architecture",
    items: [
      "RESTful API design with versioning and developer documentation",
      "Centralised API management platform with usage analytics",
      "Rate limiting, throttling, and SLA enforcement",
      "Security: OAuth2, API keys, and data encryption at every layer",
    ],
  },
  {
    label: "Data Patterns",
    icon: Database,
    title: "Data Integration Strategies & Patterns",
    items: [
      "Real-time event streaming with Apache Kafka and equivalents",
      "Hybrid real-time and batch integration for cost-optimised performance",
      "Event sourcing patterns providing full audit and reconstruction capability",
      "Microservices architecture reducing coupling and enabling independent scaling",
    ],
  },
  {
    label: "Data Governance",
    icon: Shield,
    title: "Master Data Management & Governance",
    items: [
      "Data profiling and quality assessment before integration deployment",
      "Centralised reference data repositories for customers, products, and structures",
      "Ongoing data quality monitoring with alerting on emerging issues",
      "Versioning and change management for point-in-time accuracy",
    ],
  },
  {
    label: "Performance",
    icon: TrendingUp,
    title: "Performance Optimisation & Monitoring",
    items: [
      "Real-time performance dashboards: throughput, latency, error rates",
      "Auto-scaling integration resources based on live demand signals",
      "Load balancing across processing nodes with fault tolerance",
      "Bottleneck identification and resolution process with capacity forecasting",
    ],
  },
];

const implementationPhases = [
  {
    step: "01",
    title: "Integration Architecture Design",
    icon: Network,
    items: [
      "Current-state system inventory and connectivity mapping",
      "Integration pattern selection: API, event-driven, or batch",
      "Security architecture and compliance requirement definition",
      "Performance SLA definition and capacity planning",
    ],
  },
  {
    step: "02",
    title: "Build & Deployment",
    icon: GitMerge,
    items: [
      "API development, testing, and documentation delivery",
      "Data pipeline construction and quality validation",
      "Security controls, encryption, and access policy implementation",
      "Monitoring, alerting, and error-handling system setup",
    ],
  },
  {
    step: "03",
    title: "Governance & Optimisation",
    icon: RefreshCw,
    items: [
      "Integration performance monitoring and ongoing tuning",
      "Data quality reporting and anomaly resolution",
      "Security assessment and vulnerability remediation cycles",
      "Scalability review aligned to business growth trajectory",
    ],
  },
];

const benefitAreas = [
  {
    icon: Zap,
    title: "Speed & Agility",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Real-time data availability for AI and analytics platforms",
      "New integration requirements delivered in days, not months",
      "Automated error recovery reducing manual intervention",
      "60% faster data processing vs. point-to-point approaches",
    ],
  },
  {
    icon: Shield,
    title: "Security & Trust",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "End-to-end encryption across all integration paths",
      "Full audit trail for every data movement event",
      "Role-based access control with least-privilege enforcement",
      "Regulatory compliance across healthcare, financial, and industrial sectors",
    ],
  },
  {
    icon: TrendingUp,
    title: "Reliability & Scale",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "45% reduction in integration maintenance overhead",
      "Auto-scaling prevents overload during peak demand",
      "Fault-tolerant architecture with graceful degradation",
      "Consistent data quality across all connected systems",
    ],
  },
];

export default function ProcessTechnologyIntegrationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <a href="/approach" className="text-white hover:text-blue-200 transition-colors">Approach</a>
            <span className="text-white/40">•</span>
            <a href="/technology-stack" className="text-white hover:text-blue-200 transition-colors">Technology Stack</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Process Improvement Technology Integration</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Technology Integration{" "}
                <span className="text-[#A5F3FC]">System integration best practices for process improvement success.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Technology integration complexity often determines the success or failure of process
                improvement initiatives. Organisations with well-integrated architectures deliver
                superior results — those with fragmented systems struggle to achieve comprehensive
                process visibility.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80"
                  alt="System integration architecture"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">Integration capabilities</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["REST APIs", "Event Streaming", "Master Data Mgmt", "Data Quality", "Security Controls", "Performance Monitoring"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Network className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for enterprise architects, integration leads, and CIOs building
                        reliable, secure, and scalable connectivity across complex system landscapes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Three integration challenges that block process improvement.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Most enterprises run dozens of systems that were never designed to communicate.
                These integration failures limit what process improvement can achieve — regardless
                of how good the improvement methodology is.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {challenges.map((ch) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.category} className={`rounded-[28px] border ${ch.border} ${ch.bg} p-5 transition hover:-translate-y-1 hover:shadow-lg`}>
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${ch.color} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-950">{ch.category}</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {ch.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATION CAPABILITIES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Four integration capabilities that unify your enterprise technology.
            </h2>
            <p className="mt-3 max-w-none text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              From API architecture through data governance to security and performance — our integration practice covers every layer needed to support modern process improvement at scale.
            </p>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {integrationTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === i ? "bg-[#0A2463] text-white shadow-lg" : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
          {integrationTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Capability {String(i + 1).padStart(2, "0")}</div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{tab.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {tab.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                      <div className="text-sm leading-relaxed text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PHASES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase path from fragmented systems to unified architecture.
            </h2>
            <p className="mt-3 max-w-none text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              Our integration methodology is designed to minimise disruption to running operations while progressively building the connectivity that process improvement depends on.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {implementationPhases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.step}
                  className="text-left rounded-[28px] bg-[#0A2463] p-6 shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">Phase {phase.step}</div>
                      <div className="mt-1 text-xl font-semibold text-white">{phase.title}</div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-blue-100/85">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The measurable return on a unified integration architecture.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {benefitAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.accent} text-white shadow-lg shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTINUE EXPLORING ── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Continue exploring the Technology Stack section
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  This Process Improvement Technology Integration page is part of the broader Technology Stack stream under the main Technology Stack section.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Process Improvement Technology Integration
                  </div>
                </a>
                <a href="/enterprise-ai-stack" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Next page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Enterprise AI-Powered Technology Stack
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                    View page <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
