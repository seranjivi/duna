import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  DollarSign,
  FileBarChart,
  Gauge,
  Heart,
  LineChart,
  Package,
  RefreshCw,
  Shield,
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
  { value: "300%", label: "Average ROI from structured frameworks" },
  { value: "60%", label: "More benefit sources captured vs. basic tracking" },
  { value: "2x", label: "Faster payback period identification" },
];

const challenges = [
  {
    category: "Value Undercount",
    icon: DollarSign,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Only direct cost savings measured — revenue and avoided costs missed",
      "Capacity creation and throughput gains left unquantified",
      "Stakeholder benefits excluded from business cases",
      "Double-counting across initiatives inflates or distorts results",
    ],
  },
  {
    category: "Measurement Gaps",
    icon: BarChart3,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Baselines not established before improvement begins",
      "Statistical significance of changes not validated",
      "No process for capturing non-financial value",
      "Improvement results not tracked beyond initial measurement",
    ],
  },
  {
    category: "Stakeholder Alignment",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "ROI reports not credible to finance without rigorous methodology",
      "Employee and customer impact not included in value cases",
      "Leadership unable to compare improvement vs. alternative investments",
      "No ongoing reporting to sustain executive sponsorship",
    ],
  },
];

const roiTabs = [
  {
    label: "Financial Value",
    icon: DollarSign,
    title: "Financial Impact Quantification",
    items: [
      "Direct cost savings: labour, materials, operational expense reduction",
      "Revenue enhancement from improved customer satisfaction and throughput",
      "Avoided costs: regulatory fines, rework, and process failure prevention",
      "Traditional ROI, NPV, and payback period calculation methodology",
    ],
  },
  {
    label: "Operational Value",
    icon: Gauge,
    title: "Operational Performance Metrics",
    items: [
      "Cycle time and throughput measurement and improvement tracking",
      "Resource utilisation analysis and capacity creation quantification",
      "Quality metrics: defect rates, error reduction, and compliance scores",
      "Customer satisfaction and effort score improvement measurement",
    ],
  },
  {
    label: "KPI Framework",
    icon: Target,
    title: "Value Measurement Framework Design",
    items: [
      "Leading and lagging indicator selection for balanced measurement",
      "Balanced scorecard across financial, operational, customer, and employee lenses",
      "Accurate baseline establishment with historical data and variance accounting",
      "Statistically rigorous target-setting with stretch and achievable ranges",
    ],
  },
  {
    label: "Continuous Value",
    icon: RefreshCw,
    title: "Continuous Value Optimisation",
    items: [
      "Real-time dashboards tracking improvement results vs. projected benefits",
      "Trend and variance analysis with early warning on deteriorating results",
      "Best practice sharing across business units to accelerate value replication",
      "Technology enhancement identification to compound existing improvement gains",
    ],
  },
];

const roiPhases = [
  {
    step: "01",
    title: "Baseline & Value Definition",
    icon: FileBarChart,
    items: [
      "Historical performance data collection and analysis",
      "Value dimension mapping: financial, operational, customer, employee",
      "Benefit quantification approach agreed with finance stakeholders",
      "ROI target-setting and investment cost cataloguing",
    ],
  },
  {
    step: "02",
    title: "Measurement Implementation",
    icon: BarChart3,
    items: [
      "KPI instrumentation and data pipeline setup",
      "Cost-benefit analysis model build and validation",
      "Stakeholder reporting templates and cadence definition",
      "Leading indicator tracking for proactive value management",
    ],
  },
  {
    step: "03",
    title: "Value Realisation & Reporting",
    icon: TrendingUp,
    items: [
      "Monthly ROI reporting with variance to business case",
      "Non-financial value assessment: NPS, employee engagement, retention",
      "Continuous improvement opportunity identification from variance data",
      "Executive and board-level value realisation presentations",
    ],
  },
];

const valueBreakdown = [
  {
    icon: DollarSign,
    title: "Financial Components",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Reduced labour costs from automation and efficiency",
      "Decreased material waste and operational expense",
      "Revenue uplift from faster, higher-quality delivery",
      "Avoided regulatory fines and rework costs",
    ],
  },
  {
    icon: Zap,
    title: "Operational Components",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Cycle time reduction across core business processes",
      "Throughput and capacity improvement metrics",
      "Defect and error rate reduction tracking",
      "Compliance improvement and audit readiness",
    ],
  },
  {
    icon: Heart,
    title: "Stakeholder Components",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Customer satisfaction and Net Promoter Score gains",
      "Employee productivity and engagement improvements",
      "Retention and turnover cost reduction measurement",
      "Brand and competitive positioning value",
    ],
  },
];

export default function ROIFrameworkPage() {
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
            <a href="/outcomes-framework" className="text-white hover:text-blue-200 transition-colors">Outcomes Framework</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Process Improvement ROI Framework</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                ROI Framework{" "}
                <span className="text-[#A5F3FC]">Your complete guide to process improvement value realisation.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Measuring return on investment for process improvement requires sophisticated frameworks
                that capture financial and operational benefits while providing actionable insights for
                ongoing optimisation and value enhancement.
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
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
                  alt="ROI and financial analysis"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    ROI framework components
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Cost-Benefit Analysis", "NPV Calculation", "Payback Period", "Operational Metrics", "Stakeholder Value", "Value Tracking"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for CFOs, programme directors, and operational excellence leads
                        who need business cases that stand up to finance scrutiny.
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
                Three ROI measurement failures that undermine improvement programmes.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Incomplete ROI measurement doesn't just misrepresent value — it puts future investment
                at risk. These are the most common gaps organisations leave in their measurement approach.
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

      {/* ── ROI FRAMEWORK TABS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Four framework components. Complete ROI coverage.
            </h2>
            <p className="mt-3 max-w-none text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              Our ROI framework addresses financial quantification, operational metrics, KPI design, and continuous value tracking — ensuring no value source goes unmeasured.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {roiTabs.map((tab, i) => {
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

          {roiTabs.map((tab, i) => {
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
              Three phases from baseline to ongoing value realisation.
            </h2>
            <p className="mt-3 max-w-none text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              Our ROI implementation methodology is structured to build credibility with finance, capture value comprehensively, and sustain improvement momentum.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {roiPhases.map((phase, i) => {
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
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUE BREAKDOWN ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The complete value spectrum financial, operational, and human.
            </h2>
            <p className="mt-3 w-full text-sm leading-6 text-slate-600 md:text-base whitespace-normal break-words" style={{ wordWrap: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>
              Process improvement delivers value far beyond cost reduction. Our framework systematically captures every component so your business case tells the full story.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {valueBreakdown.map((area) => {
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
                  A structured ROI framework provides the financial rigor and measurement discipline needed for sustained improvement investment
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that implement comprehensive ROI measurement, value quantification, and continuous tracking are far more likely to secure executive sponsorship, demonstrate business impact, and achieve breakthrough operational excellence results.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <a href="/performance-measurement" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Previous page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Performance Measurement
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                    View Page <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
                <a href="/performance-measurement" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Process Improvement ROI Framework
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
    
    </div>
  );
}
