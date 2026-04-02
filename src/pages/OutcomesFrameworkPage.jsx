import React, { useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  DollarSign,
  FileBarChart,
  Gauge,
  Heart,
  Layers3,
  LineChart,
  Monitor,
  RefreshCw,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "300%", label: "Average ROI from outcomes frameworks" },
  { value: "25%", label: "Faster improvement identification" },
  { value: "35%", label: "Reduction in measurement costs" },
];

const pillars = [
  {
    icon: Target,
    title: "Strategic Alignment",
    desc: "Metrics cascade from enterprise objectives to team-level KPIs — so everyone pulls in the same direction.",
  },
  {
    icon: LineChart,
    title: "Leading & Lagging Indicators",
    desc: "Predictive insights alongside outcome validation, giving you both foresight and proof.",
  },
  {
    icon: Monitor,
    title: "Real-Time Dashboards",
    desc: "Executive and operational views with mobile access, threshold alerts, and drill-down capability.",
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    desc: "Statistical trend analysis and forecasting that surfaces issues before they hit business results.",
  },
  {
    icon: BarChart3,
    title: "Benchmarking",
    desc: "Industry, functional, and competitive comparison to identify gaps and best-practice opportunities.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    desc: "Feedback loops and review cycles that keep measurement systems relevant and improvement-focused.",
  },
];

const outcomeServices = [
  {
    href: "/performance-measurement",
    icon: Gauge,
    accent: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    label: "Operational Excellence Performance Measurement",
    tag: "KPIs · Dashboards · Benchmarking",
    heading: "Transform operational excellence from concept into concrete, measurable results.",
    body:
      "Effective performance measurement tracks, analyses, and optimizes key performance indicators across all business dimensions — ensuring every improvement initiative delivers validated, quantifiable value.",
    bullets: [
      "Hierarchical KPI design from enterprise to frontline",
      "Real-time dashboards and threshold-based alerting",
      "Predictive analytics and trend forecasting",
    ],
  },
  {
    href: "/outcomes-roi-framework",
    icon: DollarSign,
    accent: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    label: "Process Improvement ROI Framework",
    tag: "ROI · Value Realization · Financial Analysis",
    heading: "Capture the full financial and operational return on every improvement initiative.",
    body:
      "Our ROI framework goes beyond simple cost reduction to measure revenue enhancement, avoided costs, capacity creation, and stakeholder impact — building business cases that justify continued investment.",
    bullets: [
      "Cost-benefit analysis and NPV calculation",
      "Operational efficiency and quality metrics",
      "Customer and employee impact assessment",
    ],
  },
];

const valueAreas = [
  {
    icon: DollarSign,
    title: "Financial Value",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Direct cost savings from operational improvements",
      "Revenue enhancement through better customer outcomes",
      "Avoided costs: fines, rework, and process failures",
      "Productivity improvement and capacity creation",
    ],
  },
  {
    icon: Activity,
    title: "Operational Value",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Cycle time reduction and throughput improvement",
      "Quality enhancement and defect rate reduction",
      "Resource utilisation optimization",
      "Compliance risk reduction and audit readiness",
    ],
  },
  {
    icon: Users,
    title: "Stakeholder Value",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Customer satisfaction and Net Promoter Score gains",
      "Employee engagement and productivity improvements",
      "Retention improvements and reduced turnover costs",
      "Cultural shift toward data-driven decision-making",
    ],
  },
];

export default function OutcomesFrameworkPage() {
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
            <span className="text-white">Outcomes Framework</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Outcomes Framework{" "}
                <span className="text-[#A5F3FC]">Measure what matters. Prove what works.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Duanamize's Outcomes Framework gives organizations the measurement infrastructure to
                track operational excellence performance and quantify the ROI of every process
                improvement initiative — from initial investment to sustained value realisation.
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Outcomes measurement dashboard"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Framework focus areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["KPI Design", "Real-Time Monitoring", "Predictive Analytics", "ROI Calculation", "Benchmarking", "Value Tracking"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for COOs, CFOs, operational excellence leads, and performance management
                        teams who need proof — not just progress.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY OUTCOMES MATTER ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                What gets measured gets managed and improved.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Most improvement programmes stall because they lack the measurement infrastructure
                to prove value, sustain momentum, or justify further investment. Our Outcomes Framework
                solves all three — systematically.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Balanced scorecards: financial, operational, customer, and employee",
                  "Leading indicators for proactive management — not reactive reporting",
                  "Measurement frameworks scaled from team to enterprise level",
                  "Stakeholder-ready reporting that translates data into decisions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2463] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-950">{p.title}</h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES FRAMEWORK SERVICES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Outcomes Framework
            </p>
          </div>
          <div className="mb-8">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Two frameworks. Complete coverage of outcomes and value.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              Together, our Performance Measurement and ROI frameworks provide end-to-end visibility
              from operational metrics to financial returns.
            </p>
          </div>

          
          {/* Detail cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {outcomeServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.label} className={`rounded-[32px] border ${svc.border} ${svc.bg} p-8 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl`}>
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br ${svc.accent} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{svc.tag}</div>
                        <h3 style={serif} className="text-xl font-semibold text-slate-950 leading-tight">{svc.label}</h3>
                      </div>
                    </div>
                    <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200">
                      <img
                        src={svc.label === "Operational Excellence Performance Measurement" 
                          ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"}
                        alt={svc.label}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-900 leading-snug mb-2">{svc.heading}</p>
                    <p className="text-sm leading-relaxed text-slate-600">{svc.body}</p>
                    <ul className="mt-5 space-y-2">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 rounded-xl border border-white/80 bg-white/60 px-4 py-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a 
                        href={svc.href}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] hover:bg-blue-50"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUE DIMENSIONS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Value captured across three dimensions financial, operational, and human.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              True outcomes measurement goes beyond spreadsheets. Our framework captures the complete
              picture of improvement value across every stakeholder group.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {valueAreas.map((area) => {
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

      {/* ── CTA ── */}
    </div>
  );
}
