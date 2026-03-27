import React, { useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Cog,
  GitBranch,
  GitMerge,
  Layers3,
  LayoutDashboard,
  Package,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "80%", label: "Reduction in manual deployment effort" },
  { value: "5x", label: "Faster time to production" },
  { value: "99.9%", label: "Pipeline reliability target" },
];

const challenges = [
  {
    category: "Collaboration Gaps",
    icon: Users,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Siloed development and operations teams",
      "Lack of shared responsibility and accountability",
      "Opaque communication between departments",
      "No structured feedback loops for improvement",
    ],
  },
  {
    category: "Manual Processes",
    icon: Cog,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Error-prone hand-crafted deployments",
      "Inconsistent build and test environments",
      "Slow, unrepeatable release procedures",
      "Inadequate monitoring and alerting setup",
    ],
  },
  {
    category: "Quality & Security",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Insufficient automated test coverage",
      "Security scanning outside the pipeline",
      "No defined quality thresholds or gates",
      "Limited visibility into code health metrics",
    ],
  },
];

const ciTabs = [
  {
    label: "Source Control",
    icon: GitBranch,
    title: "Source Code Management",
    items: [
      "Version control integration with Git and SVN",
      "Branching strategy and workflow management",
      "Automated code review and approval gates",
      "Merge conflict detection and resolution workflows",
    ],
  },
  {
    label: "Build Automation",
    icon: Package,
    title: "Build & Packaging Automation",
    items: [
      "Automated compilation and dependency resolution",
      "Reproducible build environments via containers",
      "Artifact generation, versioning, and secure storage",
      "Build matrix across multiple target environments",
    ],
  },
  {
    label: "Testing",
    icon: TestTube2,
    title: "Automated Testing Frameworks",
    items: [
      "Unit and integration test execution on every commit",
      "Code coverage measurement and threshold enforcement",
      "Performance and load testing in pipeline stages",
      "SAST/DAST security scanning integrated automatically",
    ],
  },
];

const pipelineStages = [
  {
    step: "01",
    title: "Continuous Integration",
    icon: GitMerge,
    items: [
      "Frequent, small code commits to shared trunk",
      "Automated build on every push",
      "Test suite execution with pass/fail gating",
      "Instant developer feedback on quality",
    ],
  },
  {
    step: "02",
    title: "Continuous Delivery",
    icon: Workflow,
    items: [
      "Always-deployable software in every branch",
      "Environment provisioning via Infrastructure as Code",
      "Automated staging deployments and smoke tests",
      "Release orchestration and approval workflows",
    ],
  },
  {
    step: "03",
    title: "Continuous Deployment",
    icon: Zap,
    items: [
      "Fully automated production releases on merge",
      "Blue-green and canary deployment strategies",
      "Automated rollback on health-check failure",
      "Post-deploy monitoring and alerting",
    ],
  },
];

const roiAreas = [
  {
    icon: TrendingUp,
    title: "Speed & Frequency",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Multiple daily releases without instability",
      "Reduced lead time from commit to production",
      "Faster hotfix and emergency patch delivery",
      "Improved feature throughput per sprint",
    ],
  },
  {
    icon: Shield,
    title: "Reliability & Safety",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Consistent, repeatable deployments every time",
      "Automated rollback eliminates prolonged outages",
      "Security embedded from first commit onward",
      "Audit-ready pipeline logs and change history",
    ],
  },
  {
    icon: BarChart3,
    title: "Visibility & Control",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Real-time dashboards across all pipeline stages",
      "Metrics-driven optimisation and bottleneck alerts",
      "Team-wide transparency on build and release health",
      "DORA metric tracking for continuous improvement",
    ],
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function DevOpsAutomationPage() {
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
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-blue-100/70">
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white">•</span>
            <a href="/technology" className="text-white hover:text-blue-200 transition-colors">Technology</a>
            <span className="text-white">•</span>
            <span className="text-white">DevOps Automation</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                DevOps Automation{" "}
                <span className="text-[#A5F3FC]">Mastering CI/CD pipeline optimisation for software excellence.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                DevOps automation bridges the gap between development and operations by implementing
                automated processes that ensure consistent, repeatable, and reliable software delivery
                throughout the manufacturing development lifecycle.
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
                  src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80"
                  alt="DevOps CI/CD pipeline"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    DevOps focus areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["CI/CD Pipelines", "Build Automation", "Automated Testing", "Infrastructure as Code", "Quality Gates", "Deployment Strategies"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for engineering leads, DevOps teams, and CTOs seeking faster, safer,
                        and more reliable software delivery pipelines.
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
                Three barriers that slow software delivery in manufacturing.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Manufacturing software teams face unique blockers rooted in legacy workflows, siloed
                toolchains, and pressure to maintain operational continuity while shipping faster.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {challenges.map((ch) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.category} className={`rounded-[28px] border ${ch.border} ${ch.bg} p-5 transition hover:-translate-y-1 hover:shadow-lg`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${ch.color} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{ch.category}</h3>
                    <ul className="mt-3 space-y-2">
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

      {/* ── CI STRATEGIES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Continuous integration best practices for engineering teams.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Strategic CI approaches that reduce integration problems, surface quality issues early, and keep every branch in a deployable state.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {ciTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === i
                      ? "bg-[#0A2463] text-white shadow-lg"
                      : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {ciTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Component {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{tab.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
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

      {/* ── PIPELINE PHASES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase pipeline from commit to production.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              CI/CD pipeline architecture forms the backbone of modern software delivery — enabling teams to integrate code continuously and deploy with confidence at any cadence.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pipelineStages.map((stage, i) => {
              const Icon = stage.icon;
              const active = activeStep === i;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(i)}
                  className="text-left rounded-[28px] bg-[#0A2463] p-6 shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">
                        Phase {stage.step}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-white">{stage.title}</div>
                    </div>
                  </div>
                    <ul className="mt-4 space-y-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-blue-100/85">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The measurable return on DevOps automation investment.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Automation delivers compounding returns across speed, reliability, and engineering visibility — from the first pipeline to organisation-wide adoption.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {roiAreas.map((area) => {
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
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Cloud infrastructure and migration services that modernize your technology foundation.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that migrate to the cloud with proper planning and architecture achieve higher scalability, reduced operational costs, and improved business agility through elastic infrastructure and managed services.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
                <a href="/industries-devops" className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md block">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Current Page</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    DevOps Automation
                  </div>
                  <div className="mt-1 text-sm text-slate-500">CI/CD pipelines and automation</div>
                </a>
                <a href="/industries-cloud" className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md block">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Next Page</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    Cloud Migration
                  </div>
                  <div className="mt-1 text-sm text-slate-500">Infrastructure and cloud services</div>
                  <div className="mt-3 text-sm font-semibold text-[#0A2463] flex items-center gap-1">
                    View Page <span>→</span>
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
