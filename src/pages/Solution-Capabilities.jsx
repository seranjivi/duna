import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Database,
  Globe2,
  Layers3,
  Leaf,
  Menu,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users2,
  Zap,
  AlertTriangle,
  BarChart3,
  Brain,
  Building2,
  Clock3,
  Lock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const failureReasons = [
  {
    icon: Database,
    title: "Poor Data Quality",
    text: "Inadequate or inconsistent data undermines even sophisticated ML algorithms. Most orgs discover issues only after major investment.",
    accent: "from-rose-400 to-orange-400",
  },
  {
    icon: Target,
    title: "No Clear Objectives",
    text: "Without specific, measurable goals, AI projects become expensive experiments rather than value-generating investments.",
    accent: "from-amber-400 to-yellow-400",
  },
  {
    icon: Users2,
    title: "Poor Change Management",
    text: "Employee resistance and perceived job threat undermine implementation success even when solutions deliver technically.",
    accent: "from-purple-400 to-indigo-400",
  },
];

const maturityDimensions = [
  {
    icon: Database,
    title: "Data Infrastructure",
    items: [
      "Completeness, accuracy & consistency audits",
      "Data governance for privacy & compliance",
      "Integration architecture evaluation",
    ],
  },
  {
    icon: Brain,
    title: "Technical Capabilities",
    items: [
      "Cloud-native architecture readiness",
      "Internal ML & data science skills gap analysis",
      "Cybersecurity posture for AI workloads",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Case & ROI",
    items: [
      "High-impact, low-complexity use case selection",
      "Process suitability & automation potential",
      "Value quantification & ROI modeling",
    ],
  },
  {
    icon: Shield,
    title: "Governance & Ethics",
    items: [
      "Bias detection & mitigation frameworks",
      "Transparency & explainability by design",
      "GDPR & industry-specific compliance planning",
    ],
  },
];

const roadmapPhases = [
  {
    step: "01",
    title: "Assess & Diagnose",
    text: "Comprehensive evaluation of data quality, technical skills, cultural readiness, and leadership commitment across the enterprise.",
    icon: Target,
  },
  {
    step: "02",
    title: "Prioritize Use Cases",
    text: "Identify high-impact, low-complexity AI opportunities with clear value propositions and technical feasibility validation.",
    icon: Layers3,
  },
  {
    step: "03",
    title: "Select & Architect",
    text: "Technology selection aligned to org capabilities, scalability requirements, and long-term strategic objectives.",
    icon: Network,
  },
  {
    step: "04",
    title: "Pilot & Scale",
    text: "Phased deployment starting with pilots that demonstrate value, building skills and confidence for enterprise-wide rollout.",
    icon: TrendingUp,
  },
];

const stats = [
  { value: "60%+", label: "Failure rate for orgs without structured assessment" },
  { value: "90%", label: "Success rate with comprehensive readiness framework" },
  { value: "40%", label: "Success rate without structured planning" },
];

const serviceTags = [
  "Data Quality Assessment",
  "ML Infrastructure",
  "Governance Frameworks",
  "Change Management",
  "ROI Modeling",
  "Pilot Design",
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, description, light = false, center = false }) {
  return (
    <div className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${
            light
              ? "border-white/20 bg-white/10 text-blue-100"
              : "border-blue-200 bg-white text-[#0A2463]"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      )}
      <h2
        style={serif}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 whitespace-normal text-sm leading-relaxed md:text-lg ${center ? "mx-auto" : ""} ${
          light ? "text-blue-100/85" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function AICapabilityPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-blue-100/75">
                <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
                <span>•</span>
                <a href="/capability-building" className="hover:text-white transition-colors">Capability Building</a>
                <span>•</span>
                <span className="text-white">AI Capability Development</span>
              </div>

              <h1 style={serif} className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                AI Capability Development <span className="text-[#A5F3FC]">build the skills that power transformation.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
                Organizations rushing into AI without proper readiness assessment face failure rates exceeding 60%.
                Duanamize's structured framework evaluates your maturity across data, technology, culture, and
                governance before a single model is trained.
              </p>


              {/* Stats */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual panel */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 bg-white/10 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80"
                  alt="AI strategy planning"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />

                <div className="p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Assessment dimensions
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceTags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for enterprise transformation leaders, operations heads, and technology decision-makers
                        preparing for their AI journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAILURE MODES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionHeader
                title="60% of AI implementations fail without structured assessment."
                description="Understanding the root causes of failure is the first step to avoiding them. These three failure patterns account for the overwhelming majority of unsuccessful AI deployments."
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {failureReasons.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-slate-900/20`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-rose-400" />
                        <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── MATURITY FRAMEWORK ── */}
      <section id="framework" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeader
            title="Four dimensions that determine your AI readiness."
            description="Comprehensive organizational assessment evaluates readiness across data infrastructure, technical capabilities, cultural readiness, and leadership commitment."
            left
          />

          {/* Tab navigation */}
          <div className="mb-8 flex flex-wrap justify-start gap-2">
            {maturityDimensions.map((dim, i) => (
              <button
                key={dim.title}
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === i
                    ? "bg-[#0A2463] text-white shadow-lg shadow-blue-900/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#0A2463]/20 hover:text-slate-900"
                }`}
              >
                {dim.title}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          {maturityDimensions.map((dim, i) => {
            const Icon = dim.icon;
            if (i !== activeTab) return null;
            return (
              <div key={dim.title} className="text-left rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Dimension {String(i + 1).padStart(2, "0")}</div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{dim.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {dim.items.map((item) => (
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

      {/* ── ROADMAP ── */}
      <section id="roadmap" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionHeader
                title="A phased approach that reduces risk while building capability."
                description="Pilot projects demonstrate AI value while developing the skills and confidence necessary for scaled enterprise deployment."
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {roadmapPhases.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                    {index < roadmapPhases.length - 1 && (
                      <div className="absolute right-[-16px] top-1/2 hidden h-px w-8 bg-slate-300 lg:block" />
                    )}
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Phase {item.step}
                      </div>
                    </div>
                    <div className="mt-5 text-base font-semibold text-slate-950">{item.title}</div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-300/20">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"
                alt="AI governance and security"
                className="h-full min-h-[480px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/88 via-[#071857]/65 to-[#071857]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Leaf className="h-3.5 w-3.5" /> Governance & Risk
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    AI governance is not optional — it is foundational.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    Ethical AI frameworks, bias mitigation, and regulatory compliance must be built in from day one —
                    not bolted on after deployment.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Shield, label: "Bias detection & mitigation" },
                      { icon: Lock, label: "GDPR & data privacy compliance" },
                      { icon: Zap, label: "Explainability by design" },
                      { icon: Building2, label: "Industry-specific regulation" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                          <Icon className="h-4 w-4 text-cyan-300" />
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader
                title="Ethical AI principles built into every layer of your implementation."
                description="Industry-specific regulations in healthcare, financial services, and other regulated sectors impose requirements that must be addressed at the architecture stage — not after go-live."
              />
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    icon: Shield,
                    title: "Bias Detection",
                    text: "Regular testing across populations to ensure fair, unbiased AI decisions at every layer.",
                  },
                  {
                    icon: Zap,
                    title: "Explainability",
                    text: "Every automated decision must be explainable to stakeholders and regulators.",
                  },
                  {
                    icon: Lock,
                    title: "Data Privacy",
                    text: "GDPR-aligned data handling, storage, and processing for all AI workloads.",
                  },
                  {
                    icon: Network,
                    title: "Compliance Planning",
                    text: "Current and anticipated future regulatory requirements addressed proactively.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-base font-semibold text-slate-950">{item.title}</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
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
                  Capability Building completes the solutions trilogy by establishing the organizational and individual competencies needed for sustained AI success
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that invest in comprehensive capability building programs are far more likely to achieve AI adoption at scale, maintain competitive advantage, and realize the full potential of their technology investments.
                </p>
              </div>

              <a href="/solutions-capability" className="rounded-[24px] border border-slate-200 bg-white p-6 max-w-sm mx-auto block">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Current Page</div>
                <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                  AI Capability Development
                </div>
                <div className="mt-1 text-sm text-slate-500">Part of Capability Building solutions</div>
              </a>
            </div>
          </div>
        </div>
      </section>
   

    </div>
  );
}
