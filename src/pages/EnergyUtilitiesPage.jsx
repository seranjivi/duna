import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Battery,
  Brain,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  Lightbulb,
  Monitor,
  Network,
  RefreshCw,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Users,
  Wifi,
  Workflow,
  Zap,
  ZapOff,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "30%", label: "Reduction in grid outage duration" },
  { value: "45%", label: "Improvement in asset utilisation" },
  { value: "2x", label: "Faster fault detection and isolation" },
];

const challenges = [
  {
    category: "Ageing Infrastructure",
    icon: ZapOff,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Legacy SCADA and control systems nearing end-of-life",
      "Undocumented grid topology and asset inventory",
      "Limited real-time visibility across distribution network",
      "Insufficient disaster recovery and grid resilience",
    ],
  },
  {
    category: "Renewable Integration",
    icon: Sun,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Variable output from solar and wind resources",
      "Grid stability challenges with high renewable penetration",
      "Energy storage coordination and dispatch complexity",
      "Frequency and voltage regulation across distributed sources",
    ],
  },
  {
    category: "Cybersecurity & Compliance",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Expanding OT/IT attack surface across connected devices",
      "NERC CIP and regulatory compliance obligations",
      "Insufficient network segmentation and monitoring",
      "Workforce cybersecurity awareness gaps",
    ],
  },
];

const programmeTabs = [
  {
    label: "AMI",
    icon: Wifi,
    title: "Advanced Metering Infrastructure (AMI)",
    items: [
      "Smart meters for real-time consumption monitoring and analytics",
      "Two-way communication for remote meter reading and management",
      "Demand response and dynamic load management capabilities",
      "Theft detection and power quality measurement at the meter",
    ],
  },
  {
    label: "Distribution",
    icon: Network,
    title: "Distribution Automation",
    items: [
      "Automated switching, feeder control, and self-healing grid capabilities",
      "Fault detection, isolation, and service restoration (FDIR)",
      "Capacitor bank and transformer load management",
      "Real-time grid monitoring and optimization algorithms",
    ],
  },
  {
    label: "Analytics",
    icon: BarChart3,
    title: "Grid Analytics & Intelligence",
    items: [
      "Predictive analytics for equipment health and maintenance scheduling",
      "Load forecasting and demand prediction models",
      "Real-time decision support and economic dispatch optimization",
      "Security analysis, contingency planning, and state estimation",
    ],
  },
  {
    label: "Leadership",
    icon: TrendingUp,
    title: "Digital Transformation for Utility Leaders",
    items: [
      "Grid modernisation strategy and roadmap development",
      "Change management for digital utility transitions",
      "Regulatory compliance and stakeholder engagement",
      "Building a culture of innovation and continuous improvement",
    ],
  },
];

const learningPhases = [
  {
    step: "01",
    title: "Infrastructure Assessment",
    icon: Target,
    items: [
      "Current grid infrastructure and capability analysis",
      "Smart grid readiness and gap assessment",
      "Asset health evaluation and criticality ranking",
      "Renewable integration potential and constraints analysis",
      "Stakeholder interviews with operations and engineering teams",
      "Training needs assessment for technical and field staff",
    ],
  },
  {
    step: "02",
    title: "Solution Design",
    icon: Brain,
    items: [
      "Custom smart grid architecture and technology selection",
      "AMI deployment strategy and phased rollout planning",
      "Predictive maintenance model design and data integration",
      "Renewable integration roadmap and storage planning",
    ],
  },
  {
    step: "03",
    title: "Implementation & Support",
    icon: BarChart3,
    items: [
      "Phased deployment with pilot programs and scaling",
      "System integration and data migration management",
      "Staff training and change management programs",
      "Performance monitoring and optimization cycles",
      "Ongoing support desk and technical assistance",
      "ROI measurement and outcome reporting to leadership",
    ],
  },
];

const roiAreas = [
  {
    icon: TrendingUp,
    title: "Grid Reliability",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Self-healing grid reduces customer outage minutes",
      "Faster fault detection cuts restoration time significantly",
      "Predictive maintenance prevents unplanned equipment failures",
      "Multi-zone redundancy eliminates single points of failure",
    ],
  },
  {
    icon: Battery,
    title: "Renewable Enablement",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "MPPT and curtailment optimization maximizes renewable yield",
      "Virtual power plant coordination across distributed assets",
      "Energy storage dispatch reduces curtailment losses",
      "Dynamic line rating increases renewable hosting capacity",
    ],
  },
  {
    icon: Lightbulb,
    title: "Operational Savings",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Automated meter reading eliminates manual field visits",
      "Condition-based maintenance reduces repair costs",
      "Energy efficiency optimization lowers losses across network",
      "Remote operations reduce field crew deployment frequency",
    ],
  },
];

const moduleHighlights = [
  { icon: Wifi, label: "Smart Grid" },
  { icon: Battery, label: "AMI & Meters" },
  { icon: Network, label: "Distribution" },
  { icon: Sun, label: "Renewables" },
  { icon: BarChart3, label: "Analytics" },
  { icon: ShieldCheck, label: "Security" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function EnergyUtilitiesPage() {
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
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white/40">•</span>
            <a href="/additional-industries" className="text-white hover:text-blue-200 transition-colors">Additional Industries</a>
            <span className="text-white/40">•</span>
            <span className="text-white/70">Energy & Utilities Automation</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 mb-4">
                <Sparkles className="h-3.5 w-3.5" /> Smart Grid · IoT · Digital Transformation
              </div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Energy & Utilities Automation{" "}
                <span className="text-[#A5F3FC]">Smart grid technology for sustainable power management.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Energy utilities automation is transforming the power industry by integrating advanced
                technologies, AI, and IoT solutions to create intelligent, efficient, and sustainable
                energy systems — from generation through to the customer meter.
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
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
                  alt="Smart grid energy automation"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Energy automation focus areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Smart Grid", "AMI", "Distribution Automation", "Renewable Integration", "EMS", "Utility IoT"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for utility CIOs, grid operations leaders, and digital transformation teams
                        driving the transition to intelligent energy infrastructure.
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
                Three critical challenges blocking utility transformation.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Utilities operate infrastructure built over decades, now under pressure to integrate
                renewables, harden cybersecurity, and meet customer expectations simultaneously.
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

      {/* ── SMART GRID COMPONENTS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Smart grid components that power utility transformation.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Smart grid technology modernises traditional electrical grids through digital communication,
              automated control systems, and real-time analytics to improve efficiency and reliability.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {smartGridTabs.map((tab, i) => {
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

          {smartGridTabs.map((tab, i) => {
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

      {/* ── TECHNOLOGY SOLUTIONS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
                alt="Renewable energy grid"
                className="h-full min-h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/90 via-[#071857]/65 to-[#071857]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Sun className="h-3.5 w-3.5" /> Renewable Integration
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    Managing variability across solar, wind, and storage at grid scale.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    Renewable automation optimizes the integration and dispatch of variable generation
                    while maintaining frequency, voltage, and grid stability across all operating conditions.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["MPPT Optimization", "Virtual Power Plants", "Islanding Protection", "V2G & Storage Dispatch"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                        <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                EMS and IoT solutions that connect every asset on the network.
              </h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed md:text-base">
                Centralised energy management combined with millions of edge-connected devices delivers
                the operational intelligence utilities need to run reliably and efficiently.
              </p>
              <div className="mt-6 grid gap-4">
                {techSolutions.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <div key={sol.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-950">{sol.title}</h3>
                      </div>
                      <div className="grid gap-2">
                        {sol.items.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-600" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION PHASES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase framework for utility digital transformation.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              From infrastructure modernisation through operational excellence to customer and market
              transformation — a sequenced approach that manages risk and delivers value at each stage.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {transformationPhases.map((phase, i) => {
              const Icon = phase.icon;
              const active = activeStep === i;
              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveStep(i)}
                  className="text-left rounded-[28px] bg-[#0A2463] p-6 shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">
                        Phase {phase.step}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-white">{phase.title}</div>
                    </div>
                  </div>
                  {active && (
                    <ul className="mt-4 space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-blue-100/85">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The operational and financial return on grid modernisation.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Smart grid investment pays back through reliability improvements, renewable enablement,
              and sustained operational cost reductions across the network.
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
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 style={serif} className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Transform your grid from reactive to intelligent.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-base">
                  Duanamize's energy automation framework delivers smart grid modernisation, renewable
                  integration, and IoT-enabled operations — built for utilities navigating the energy transition.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Request assessment <ArrowRight className="h-4 w-4" />
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
