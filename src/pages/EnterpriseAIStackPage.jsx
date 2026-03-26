import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitMerge,
  Globe2,
  Layers3,
  Network,
  Package,
  RefreshCw,
  Server,
  Shield,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "10x", label: "Faster process analysis vs. manual methods" },
  { value: "70%", label: "Reduction in manual process discovery effort" },
  { value: "40%", label: "Improvement in automation ROI with AI-guided deployment" },
];

const challenges = [
  {
    category: "Platform Fragmentation",
    icon: Layers3,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Disconnected AI, RPA, and analytics tools with no unified layer",
      "Model management and versioning not governed centrally",
      "Process mining outputs not connected to automation platforms",
      "Duplicate data infrastructure across different tool sets",
    ],
  },
  {
    category: "Scaling Barriers",
    icon: TrendingUp,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "AI models performing well in pilot but failing at production scale",
      "RPA bots without governance becoming unmanageable at volume",
      "Analytics infrastructure not built for real-time streaming data",
      "Cloud costs spiralling without proper governance and optimisation",
    ],
  },
  {
    category: "Value Realisation",
    icon: BarChart3,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Technology investment without measurable process improvement outcomes",
      "AI models deployed without feedback loops or performance tracking",
      "Automation without process mining creating misaligned automation targets",
      "No what-if simulation capability before committing to improvement paths",
    ],
  },
];

const stackTabs = [
  {
    label: "Process Mining",
    icon: GitMerge,
    title: "Process Mining & Discovery Platforms",
    items: [
      "Celonis, ProcessGold, and Minit for automated process map generation",
      "Bottleneck, variation, and compliance deviation detection at scale",
      "API and database connector configuration for enterprise system access",
      "Real-time conformance checking against target process models",
    ],
  },
  {
    label: "AI & ML",
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    items: [
      "Azure AI, AWS Machine Learning, and Google Cloud AI platform deployment",
      "MLflow, TensorFlow, and PyTorch for custom model development and training",
      "Model versioning, A/B testing, and production deployment lifecycle management",
      "Predictive and prescriptive analytics for proactive process optimisation",
    ],
  },
  {
    label: "Automation",
    icon: Bot,
    title: "RPA & Workflow Orchestration",
    items: [
      "UiPath, Automation Anywhere, and Blue Prism RPA platform implementation",
      "Cloud-native RPA deployment for scalability and reduced infrastructure overhead",
      "Centralised bot management, performance monitoring, and security controls",
      "BPM suite integration coordinating human and automated tasks in unified workflows",
    ],
  },
  {
    label: "Analytics",
    icon: BarChart3,
    title: "Analytics & Business Intelligence Infrastructure",
    items: [
      "Real-time analytics on streaming process data with sub-second latency",
      "Executive dashboards to frontline operational metrics on one platform",
      "Simulation and what-if modelling for improvement scenario evaluation",
      "Predictive alerting for performance degradation and anomaly detection",
    ],
  },
];

const architecturePhases = [
  {
    step: "01",
    title: "Stack Assessment & Design",
    icon: Cpu,
    items: [
      "Current technology inventory and gap analysis",
      "Platform selection across process mining, AI, RPA, and analytics",
      "Integration architecture design connecting all stack components",
      "Cloud infrastructure sizing, cost modelling, and governance framework",
    ],
  },
  {
    step: "02",
    title: "Platform Build & Integration",
    icon: Code2,
    items: [
      "Process mining platform deployment and enterprise system connection",
      "AI/ML model development, training, and production deployment",
      "RPA bot development, testing, and governance control setup",
      "Analytics dashboards and real-time monitoring infrastructure",
    ],
  },
  {
    step: "03",
    title: "Scale & Continuous Optimisation",
    icon: TrendingUp,
    items: [
      "Enterprise-wide rollout with change management support",
      "AI model performance monitoring and retraining cycle management",
      "RPA fleet governance and expansion programme management",
      "Stack performance review and technology roadmap evolution",
    ],
  },
];

const stackBenefits = [
  {
    icon: Brain,
    title: "Intelligence at Scale",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Objective, data-driven process maps replacing assumption-based analysis",
      "AI-generated improvement recommendations across all process variants",
      "Predictive failure detection before issues impact customers",
      "Continuous learning models improving accuracy over time",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Efficiency",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "End-to-end automation across human and system process steps",
      "RPA fleet operating 24/7 with centralised governance and monitoring",
      "Workflow orchestration adapting to exceptions in real time",
      "40% improvement in automation ROI through AI-guided targeting",
    ],
  },
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Cloud-native architecture scaling with improvement programme growth",
      "Multi-cloud flexibility avoiding single-vendor lock-in",
      "Auto-scaling cost governance preventing cloud spend overruns",
      "Enterprise-grade security and compliance across all stack layers",
    ],
  },
];

export default function EnterpriseAIStackPage() {
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
            <a href="/technology-stack" className="text-white hover:text-blue-200 transition-colors">Technology Stack</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Enterprise AI-Powered Technology Stack</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Enterprise AI Stack{" "}
                <span className="text-[#A5F3FC]">Building the technology infrastructure for AI-powered process improvement.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Modern process improvement requires sophisticated technology infrastructure integrating
                process mining, artificial intelligence, automation, and analytics. Organisations
                achieving breakthrough results leverage comprehensive technology stacks that provide
                scalability, reliability, and advanced intelligence capabilities.
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
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80"
                  alt="AI enterprise technology stack"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">Stack components</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Process Mining", "Azure / AWS AI", "UiPath RPA", "MLflow", "Real-Time Analytics", "Workflow BPM"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for CTOs, enterprise architects, and digital transformation leaders
                        building AI-powered operational improvement at enterprise scale.
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
                Three technology stack challenges blocking AI-powered improvement.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Most enterprises have the ambition for AI-powered process improvement — but lack the
                integrated technology infrastructure to make it real at scale and with sustainable governance.
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

      {/* ── STACK COMPONENTS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Four integrated stack components for enterprise AI improvement.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Process mining, AI/ML, automation, and analytics — each component amplifies the others
              when designed as an integrated architecture rather than standalone tools.
            </p>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {stackTabs.map((tab, i) => {
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
          {stackTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Component {String(i + 1).padStart(2, "0")}</div>
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

      {/* ── ARCHITECTURE PHASES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase journey from assessment to enterprise-wide AI improvement.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base whitespace-normal">
              Our architecture methodology ensures the right platforms are selected, properly integrated,
              and governed — delivering a compounding improvement capability that scales across the enterprise.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {architecturePhases.map((phase, i) => {
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
              What a well-built AI technology stack delivers.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {stackBenefits.map((area) => {
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
                  A comprehensive AI technology stack gives process improvement the intelligence required for enterprise-scale transformation
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that integrate process mining, AI, automation, and analytics into a unified stack are far more likely to achieve breakthrough operational results, scalable automation, and sustainable competitive advantage.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <a href="/process-technology-integration" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Previous page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Process Improvement Technology Integration
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                    View Page <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
                <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Enterprise AI-Powered Technology Stack
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
