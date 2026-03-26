import React, { useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  CheckCircle2,
  Compass,
  DollarSign,
  Gauge,
  Globe2,
  LineChart,
  Monitor,
  RefreshCw,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "25%", label: "Faster improvement identification" },
  { value: "35%", label: "Reduction in measurement costs" },
  { value: "4x", label: "More actionable insights vs. traditional reporting" },
];

const challenges = [
  {
    category: "Measurement Design",
    icon: Target,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Metrics that don't connect to strategic objectives",
      "Overload of data with no actionable insights",
      "No balance between leading and lagging indicators",
      "Excessive measurement costs with little return",
    ],
  },
  {
    category: "Visibility Gaps",
    icon: Monitor,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Delayed reporting that misses real-time issues",
      "No escalation for critical performance threshold breaches",
      "Dashboards built for IT — not operations teams",
      "Poor mobile access to performance data",
    ],
  },
  {
    category: "Improvement Stagnation",
    icon: RefreshCw,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Inability to identify root causes behind metrics",
      "No systematic feedback loop from data to action",
      "Benchmarking gaps — no external reference points",
      "Measurement systems that don't evolve with the business",
    ],
  },
];

const measurementTabs = [
  {
    label: "Framework Design",
    icon: Compass,
    title: "Measurement Framework Architecture",
    items: [
      "Hierarchical KPI design cascading from enterprise to frontline",
      "Strategic alignment ensuring metrics drive the right behaviours",
      "Metric selection criteria: relevance, actionability, measurability",
      "Balanced scorecard design across financial, operational, customer, and employee dimensions",
    ],
  },
  {
    label: "Real-Time Monitoring",
    icon: Monitor,
    title: "Real-Time Performance Monitoring",
    items: [
      "Executive dashboards with drill-down to operational detail",
      "Mobile-friendly designs for field and remote team access",
      "Threshold-based alerting with escalation procedures",
      "Contextual notifications with suggested corrective actions",
    ],
  },
  {
    label: "Predictive Analytics",
    icon: Brain,
    title: "Predictive Performance Analytics",
    items: [
      "Statistical trend analysis identifying gradual performance shifts",
      "Predictive modelling for future result forecasting",
      "Scenario analysis evaluating different improvement strategies",
      "Leading indicator development for proactive management",
    ],
  },
  {
    label: "Benchmarking",
    icon: Globe2,
    title: "Benchmarking & Comparative Analysis",
    items: [
      "Industry-specific benchmarks accounting for sector characteristics",
      "Functional benchmarking across industries for best-practice identification",
      "Competitive benchmarking against direct market peers",
      "Gap analysis with implementation feasibility assessment",
    ],
  },
];

const implementationPhases = [
  {
    step: "01",
    title: "Measurement System Design",
    icon: Compass,
    items: [
      "Business objective mapping and metric selection",
      "Leading and lagging indicator definition",
      "Data collection architecture and tooling setup",
      "Stakeholder alignment on targets and thresholds",
    ],
  },
  {
    step: "02",
    title: "Dashboard & Analytics Build",
    icon: Monitor,
    items: [
      "Executive and operational dashboard development",
      "Alert and escalation workflow configuration",
      "Predictive model training on historical data",
      "Mobile and cross-device access deployment",
    ],
  },
  {
    step: "03",
    title: "Continuous Improvement Integration",
    icon: RefreshCw,
    items: [
      "Regular performance review cadence establishment",
      "Root cause analysis process integration",
      "Benchmarking cycle and best practice identification",
      "Measurement system evolution and governance",
    ],
  },
];

const roiAreas = [
  {
    icon: TrendingUp,
    title: "Speed of Insight",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Issues surfaced in real time — not end-of-month reports",
      "25% faster identification of improvement opportunities",
      "Proactive alerts prevent problems reaching customers",
      "Predictive analytics enable pre-emptive intervention",
    ],
  },
  {
    icon: DollarSign,
    title: "Measurement Efficiency",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "35% reduction in measurement and reporting costs",
      "Automated data collection replacing manual effort",
      "Single source of truth across all business units",
      "Reduced stakeholder time spent in reporting cycles",
    ],
  },
  {
    icon: Shield,
    title: "Sustained Improvement",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Feedback loops that prevent improvement decay",
      "Benchmarking keeps targets competitive and relevant",
      "Measurement frameworks that adapt as the business evolves",
      "Board-ready reporting that justifies future investment",
    ],
  },
];

export default function PerformanceMeasurementPage() {
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
            <a href="/" className="text-white hover:text-blue-200 transition-colors">Home</a>
            <span className="text-white/40">•</span>
            <a href="/outcomes-framework" className="text-white hover:text-blue-200 transition-colors">Outcomes Framework</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Performance Measurement</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Performance Measurement{" "}
                <span className="text-[#A5F3FC]">Best practices for operational excellence programmes.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Effective performance measurement transforms operational excellence from abstract concept
                into concrete business results — through systematic tracking, analysis, and optimisation
                of key performance indicators across every business dimension.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Performance analytics dashboard"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Measurement capabilities
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["KPI Architecture", "Real-Time Dashboards", "Predictive Analytics", "Benchmarking", "Alert Systems", "Value Tracking"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for COOs, operational excellence leads, and performance management
                        teams who need timely, actionable measurement — not more data.
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
                Three measurement failures that stall operational excellence.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Most organisations have data — but not measurement systems. The difference is
                whether that data drives decisions, surfaces issues early, and validates improvement value.
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

      {/* ── MEASUREMENT CAPABILITIES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Four measurement capabilities that power operational excellence.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              From designing the right metrics to predicting future performance and benchmarking
              against the best our framework covers the complete measurement lifecycle.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {measurementTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <div
                  key={tab.label}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-[#0A2463] text-white shadow-lg`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </div>
              );
            })}
          </div>

          <div className="grid gap-6">
            {measurementTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <div key={tab.label} className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Capability {String(i + 1).padStart(2, "0")}
                      </div>
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
        </div>
      </section>

      {/* ── IMPLEMENTATION PHASES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase path to world-class performance measurement.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              From framework design through dashboard deployment to continuous improvement integration
              each phase builds on the last to create a measurement system that compounds in value.
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

      {/* ── ROI ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The return on building the right measurement system.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              A well-designed measurement system pays for itself quickly by surfacing improvement
              opportunities faster, reducing reporting overhead, and sustaining excellence long-term.
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

      {/* ── NAVIGATION ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  A comprehensive performance measurement system gives operational excellence the visibility required for sustained success
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that implement systematic KPI tracking, real-time monitoring, and predictive analytics are far more likely to achieve breakthrough operational results, continuous improvement, and competitive advantage.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <a href="/outcomes-roi-framework" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Previous page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Process Improvement ROI Framework
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                    View Page <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
                <a href="/enterprise-ai-stack" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Next page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Enterprise AI Stack
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                    View Page <ArrowRight className="h-4 w-4" />
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
