import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cog,
  Factory,
  GitMerge,
  Globe2,
  Layers3,
  Package,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
  CloudCog,
  Cpu,
  BarChart3,
  RefreshCw,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "60%", label: "Reduction in deployment downtime" },
  { value: "4x", label: "Faster release cycles" },
  { value: "35%", label: "Lower infrastructure costs" },
];

const pillars = [
  {
    icon: Cpu,
    title: "Smart Factory Enablement",
    desc: "Connecting machines, sensors, and software for real-time operational intelligence across the shop floor.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Integration",
    desc: "Automating build, test, and delivery pipelines so engineering teams ship reliable updates without friction.",
  },
  {
    icon: Globe2,
    title: "Cloud-First Infrastructure",
    desc: "Migrating legacy systems to scalable cloud environments that flex with production demand.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Embedding governance and audit controls directly into pipelines and infrastructure provisioning.",
  },
  {
    icon: BarChart3,
    title: "Operational Visibility",
    desc: "Unified dashboards and monitoring that surface KPIs from factory floor to board room.",
  },
  {
    icon: Package,
    title: "Supply Chain Integration",
    desc: "API-driven connectivity across suppliers, logistics platforms, and ERP systems.",
  },
];

const services = [
  {
    href: "/industries-devops",
    icon: GitMerge,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
    accent: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    label: "DevOps Automation",
    tag: "CI/CD · Pipelines · Automation",
    heading: "Build, test, and ship manufacturing software with confidence.",
    body:
      "Our DevOps automation practice installs CI/CD pipelines, automated testing frameworks, and deployment orchestration tailored to the complexity of industrial software environments — from SCADA integrations to IoT firmware.",
    bullets: [
      "Automated build & deployment pipelines",
      "Quality gates and security scanning",
      "Blue-green and canary release strategies",
      "Infrastructure as Code (IaC) for every environment",
    ],
  },
  {
    href: "/industries-cloud",
    icon: CloudCog,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    accent: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    label: "Cloud Migration",
    tag: "AWS · Azure · Infrastructure Automation",
    heading: "Migrate legacy plant systems to resilient cloud infrastructure.",
    body:
      "We assess, plan, and execute cloud migrations for manufacturers moving off on-premise infrastructure — preserving uptime, reducing cost, and unlocking cloud-native capabilities like auto-scaling and managed databases.",
    bullets: [
      "Current-state assessment and migration roadmap",
      "AWS & Azure architecture design",
      "Lift-and-shift to cloud-native refactoring",
      "Terraform / CloudFormation IaC provisioning",
    ],
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-blue-100/70">
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white">•</span>
            <span className="text-white">Technology</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Technology built for{" "}
                <span className="text-[#A5F3FC]">modern manufacturing.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Manufacturing organisations face unprecedented pressure to digitise operations, reduce downtime,
                and ship software faster than ever. Duanamize partners with industrial teams to deploy DevOps
                automation and cloud infrastructure that drives measurable results on the factory floor and beyond.
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

            {/* Visual card */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80"
                  alt="Manufacturing technology"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Technology practice areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["DevOps Automation", "Cloud Migration", "IaC", "CI/CD Pipelines", "AWS & Azure", "Infrastructure Monitoring"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Cog className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for engineering leaders, plant IT managers, and operations teams seeking digital
                        transformation that sticks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Bridging the gap between industrial operations and modern software delivery.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Manufacturing businesses run on a unique blend of legacy OT systems, real-time data, and
                increasingly complex software layers. Our technology practice is built around this reality —
                not generic enterprise IT.
              </p>
              <div className="mt-6 space-y-3">
                {["Legacy system modernisation without disruption", "OT/IT convergence expertise", "Regulated-industry deployment experience", "End-to-end from pipeline to production floor"].map((item) => (
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

      {/* ── SERVICE PAGES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-12 text-left">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Our manufacturing technology services.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Two focused practice areas that together deliver the automation and infrastructure backbone every modern manufacturer needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.label}
                  className={`rounded-[32px] border ${svc.border} ${svc.bg} p-8 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div>
                    <img
                      src={svc.image}
                      alt={svc.label}
                      className="w-full h-48 object-cover rounded-[16px] mb-5"
                    />
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br ${svc.accent} text-white shadow-lg`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{svc.tag}</div>
                        <h3 style={serif} className="text-xl font-semibold text-slate-950">{svc.label}</h3>
                      </div>
                    </div>
                    <p className="text-base font-semibold text-slate-900 leading-snug mb-3">{svc.heading}</p>
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
                  <a
                    href={svc.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5 hover:shadow-md self-start"
                  >
                    Learn more <span>→</span>
                  </a>
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
