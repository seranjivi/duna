import React, { useState } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitMerge,
  Globe2,
  Layers3,
  Lock,
  Network,
  Package,
  RefreshCw,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
  BarChart3,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "60%", label: "Faster data processing with integrated stacks" },
  { value: "45%", label: "Reduction in integration maintenance costs" },
  { value: "3x", label: "Faster deployment with modern orchestration" },
];

const pillars = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Process mining, predictive models, and automated decision-making powered by leading cloud AI services.",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    desc: "BPM suites and RPA platforms that coordinate activity across systems, people, and automated tasks.",
  },
  {
    icon: Database,
    title: "Data Architecture",
    desc: "Data lakes, warehouses, and master data management providing a single source of truth for analytics.",
  },
  {
    icon: Network,
    title: "API Integration",
    desc: "API-first connectivity with governance, rate limiting, and monitoring across all enterprise systems.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "End-to-end encryption, role-based access, audit trails, and regulatory compliance built into the stack.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Multi-cloud and hybrid architectures with auto-scaling, load balancing, and cost governance.",
  },
];

const techServices = [
  {
    href: "/tech-process-integration",
    icon: GitMerge,
    accent: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    label: "Process Improvement Technology Integration",
    tag: "API · Data Integration · Security",
    heading: "Connect every system into a coherent, high-performance process improvement architecture.",
    body:
      "Technology integration complexity determines the success or failure of process improvement initiatives. Our integration practice connects legacy systems, cloud platforms, and modern SaaS tools into unified architectures that deliver comprehensive process visibility and real-time performance data.",
    bullets: [
      "API-first integration architecture and governance",
      "Real-time and batch data integration patterns",
      "Master data management and data quality frameworks",
      "Security, compliance, and audit trail implementation",
    ],
  },
  {
    href: "/tech-ai-stack",
    icon: Brain,
    accent: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    label: "Enterprise AI-Powered Technology Stack",
    tag: "AI · Process Mining · RPA · Analytics",
    heading: "Build the technology infrastructure that makes AI-powered improvement possible at scale.",
    body:
      "Modern process improvement requires sophisticated technology stacks integrating process mining, AI, automation, and analytics. We design, implement, and govern enterprise technology architectures that deliver breakthrough operational results.",
    bullets: [
      "Process mining platform selection and deployment",
      "AI/ML model development, training, and production deployment",
      "RPA and workflow orchestration platform implementation",
      "Real-time analytics and predictive intelligence infrastructure",
    ],
  },
];

const integrationLayers = [
  {
    icon: Database,
    title: "Data Layer",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Data lake and warehouse architecture",
      "Master data management and governance",
      "Real-time streaming and batch pipelines",
      "Data quality monitoring and cleansing",
    ],
  },
  {
    icon: Network,
    title: "Integration Layer",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "API management and developer portal",
      "Enterprise service bus connectivity",
      "Event-driven microservices architecture",
      "Legacy system adapters and middleware",
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Process mining and discovery platforms",
      "AI/ML model lifecycle management",
      "Predictive and prescriptive analytics",
      "Real-time dashboards and alerting",
    ],
  },
];

export default function TechnologyStackPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <a href="/" className="text-white hover:text-blue-200 transition-colors">Home</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Technology Stack</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 mb-4">
                <Sparkles className="h-3.5 w-3.5" /> Integration · AI · Automation · Analytics
              </div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Technology Stack{" "}
                <span className="text-[#A5F3FC]">The infrastructure behind breakthrough process improvement.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Duanamize designs and implements enterprise technology stacks that integrate process
                mining, AI, automation, and analytics into coherent, scalable architectures — giving
                organisations the platform to achieve and sustain operational excellence.
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                  alt="Enterprise technology infrastructure"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Technology stack layers
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Process Mining", "AI & ML", "RPA Automation", "API Integration", "Data Lakes", "Cloud Infrastructure"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for CTOs, enterprise architects, and technology leaders building
                        the platform for scalable operational improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK CAPABILITIES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                From fragmented tools to a unified technology architecture.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Organisations with well-integrated technology stacks achieve superior process improvement
                outcomes. Fragmented, siloed systems create data blind spots, manual handoffs, and
                bottlenecks that limit what's possible. We close that gap.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "End-to-end process visibility across all enterprise systems",
                  "Real-time data flow replacing batch and manual data collection",
                  "AI and analytics on unified, governed data foundations",
                  "Scalable architecture that grows with your improvement ambition",
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
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2463] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-slate-950">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK SERVICES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Technology Stack
            </p>
          </div>
          <div className="mb-8">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Two specialisations. One complete technology foundation.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Integration architecture and AI-powered technology infrastructure, working in concert
              to enable the full potential of modern process improvement.
            </p>
          </div>

          {/* Screenshot-style link row */}
          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            {techServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <a
                  key={svc.label}
                  href={svc.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-[#1a3a8f]/30 bg-[#0A2463]/80 px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0d2e7a] hover:border-cyan-400/40 sm:flex-1"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-cyan-300 shrink-0" />
                    <span>{svc.label}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>

          {/* Detail cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {techServices.map((svc) => {
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
                  </div>
                  <a href={svc.href} className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#0A2463] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d2e7a]">
                    Explore {svc.label} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE LAYERS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Three architectural layers that underpin enterprise improvement at scale.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Data, integration, and intelligence — each layer must be designed and governed carefully
              to deliver the performance and reliability enterprise improvement demands.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {integrationLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div key={layer.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${layer.accent} text-white shadow-lg shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{layer.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {layer.items.map((item) => (
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
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 style={serif} className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Build the technology platform your improvement ambitions deserve.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-base">
                  Duanamize's technology stack practice designs, implements, and governs the enterprise
                  architecture that turns process improvement from a project into a permanent capability.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Request an architecture review <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:selvan@duanamize.org" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  Email Duanamize
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
