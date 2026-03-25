import React, { useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronDown,
  Clock,
  Database,
  DollarSign,
  FileText,
  Globe2,
  Heart,
  Layers3,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Network,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  Clock3,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const challenges = [
  {
    category: "Usability Issues",
    icon: Monitor,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Complex navigation and user interfaces",
      "Excessive clicks and screen transitions",
      "Poor integration between modules",
      "Inadequate mobile accessibility",
    ],
  },
  {
    category: "Workflow Disruption",
    icon: Workflow,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Interruption of natural clinical processes",
      "Increased documentation time",
      "Reduced face-to-face patient interaction",
      "Administrative burden on clinicians",
    ],
  },
  {
    category: "Data Management",
    icon: Database,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Information silos and lack of integration",
      "Inconsistent data entry and quality",
      "Difficulty accessing relevant information",
      "Limited analytics and reporting capabilities",
    ],
  },
];

const efficiencyTabs = [
  {
    label: "Templates",
    icon: FileText,
    title: "Template & Form Optimization",
    items: [
      "Customized documentation templates for different specialties",
      "Smart phrases and text shortcuts",
      "Auto-population of routine information",
      "Streamlined order sets and protocols",
    ],
  },
  {
    label: "Automation",
    icon: Zap,
    title: "Workflow Automation",
    items: [
      "Automated clinical reminders and alerts",
      "Prescription refill automation",
      "Lab result routing and notifications",
      "Appointment scheduling optimization",
    ],
  },
  {
    label: "UI Design",
    icon: LayoutDashboard,
    title: "User Interface Customization",
    items: [
      "Personalized dashboards and views",
      "Specialty-specific screen layouts",
      "Quick access to frequently used functions",
      "Mobile-optimized interfaces",
    ],
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Current State Assessment",
    icon: Activity,
    items: [
      "Time and motion studies of clinical processes",
      "User satisfaction surveys and feedback",
      "System utilization analytics",
      "Performance bottleneck identification",
    ],
  },
  {
    step: "02",
    title: "Future State Design",
    icon: Brain,
    items: [
      "Streamlined workflow mapping",
      "Technology-enabled process optimization",
      "Role-based task optimization",
      "Exception handling procedures",
    ],
  },
  {
    step: "03",
    title: "Change Management",
    icon: Users,
    items: [
      "Phased implementation approach",
      "Comprehensive training programs",
      "Ongoing support and optimization",
      "Performance monitoring and adjustment",
    ],
  },
];

const roiAreas = [
  {
    icon: DollarSign,
    title: "Revenue Cycle Optimization",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Automated coding and billing processes",
      "Reduced claim denials and rejections",
      "Improved charge capture accuracy",
      "Faster reimbursement cycles",
    ],
  },
  {
    icon: TrendingUp,
    title: "Cost Reduction Initiatives",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Reduced paper and storage costs",
      "Decreased transcription expenses",
      "Minimized duplicate testing",
      "Optimized staff productivity",
    ],
  },
  {
    icon: Shield,
    title: "Quality Improvement Benefits",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Enhanced patient safety through alerts",
      "Improved care coordination",
      "Better chronic disease management",
      "Evidence-based care delivery",
    ],
  },
];

const techSolutions = [
  {
    icon: Brain,
    title: "Clinical Decision Support",
    items: [
      "Evidence-based treatment recommendations",
      "Drug interaction and allergy alerts",
      "Clinical guideline integration",
      "Risk assessment tools",
    ],
  },
  {
    icon: Network,
    title: "Interoperability Enhancement",
    items: [
      "Health information exchange (HIE) connectivity",
      "API-based system integration",
      "Standardized data formats and protocols",
      "Real-time data synchronization",
    ],
  },
];

const stats = [
  { value: "40%", label: "Reduction in documentation time" },
  { value: "3x", label: "Faster information retrieval" },
  { value: "25%", label: "Improvement in claim acceptance" },
];

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

const serif2 = { fontFamily: '"Playfair Display", Georgia, serif' };


function SectionBadge({ text, light }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${light ? "border-white/20 bg-white/10 text-blue-100" : "border-blue-200 bg-white text-[#0A2463]"}`}>
      <Sparkles className="h-3.5 w-3.5" />
      {text}
    </div>
  );
}


// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function EHROptimizationPage() {
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
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
                <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a><span className="text-white">•</span>
                <a href="/industries-healthcare" className="text-white hover:text-blue-200 transition-colors">Healthcare</a><span className="text-white">•</span>
                <span className="text-white">EHR Optimization</span>
              </div>
              <h1 style={serif} className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                EHR Optimization <span className="text-[#A5F3FC]">Unlock the full value of your electronic health records.</span> 
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
                Despite widespread EHR adoption, many healthcare providers struggle to realize the full potential
                of their systems. Duanamize's optimization strategies address both technical and workflow dimensions
                to dramatically improve clinical efficiency and care delivery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare EHR optimization"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Optimization focus areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Templates & Forms", "Workflow Automation", "UI Customization", "Interoperability", "Clinical Decision Support", "ROI Maximization"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for CIOs, CMIOs, clinical informatics teams, and healthcare operations leaders
                        seeking measurable improvement from existing EHR investments.
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
              <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Three challenge categories that block clinical efficiency.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-lg">
                EHR systems often present barriers that impact clinical efficiency and user satisfaction.
                Understanding these patterns is essential before optimization can begin.
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

      {/* ── EFFICIENCY STRATEGIES ── */}
      <section id="efficiency" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Best practices for dramatic efficiency improvement.
            </h2>
            <p className="mt-3 whitespace-normal text-sm leading-relaxed text-slate-600 md:text-lg">
              Strategic optimization approaches that address both technical and workflow aspects of EHR implementation.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-start gap-2">
            {efficiencyTabs.map((tab, i) => {
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

          {efficiencyTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="text-left rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Strategy {String(i + 1).padStart(2, "0")}</div>
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
                alt="Healthcare technology integration"
                className="h-full min-h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/90 via-[#071857]/65 to-[#071857]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Network className="h-3.5 w-3.5" /> Integrated Technology
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    Healthcare technology optimization beyond the EHR.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    True optimization extends to all connected systems and technologies that support clinical care delivery —
                    not just the core EHR platform.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["HIE Connectivity", "API Integration", "Data Standardization", "Real-time Sync"].map((item) => (
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
              <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Clinical decision support and interoperability at scale.
              </h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed md:text-base">
                Connecting clinical intelligence and data exchange capabilities creates a unified foundation
                for better outcomes and operational efficiency.
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

      {/* ── WORKFLOW IMPROVEMENT ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A systematic three-phase approach to workflow transformation.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-lg">
              Analyzing current processes, identifying inefficiencies, and implementing targeted solutions that enhance
              both clinician experience and patient care outcomes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {workflowSteps.map((step, i) => {
              const Icon = step.icon;
              const active = activeStep === i;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(i)}
                  className="text-left rounded-[28px] border-[#0A2463]/20 bg-[#0A2463] p-6 shadow-sm shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">
                        Phase {step.step}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-white">{step.title}</div>
                    </div>
                  </div>
                  {active && (
                    <ul className="mt-4 space-y-2">
                      {step.items.map((item) => (
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
      <section id="roi" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Maximizing the financial and operational return on your EHR investment.
            </h2>
            <p className="mt-3 whitespace-normal text-sm leading-relaxed text-slate-600 md:text-lg">
              Strategic improvements and efficiency gains across revenue, cost, and quality dimensions.
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
                  <ul className="mt-3 space-y-2">
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
                
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Transform your EHR from a burden into a clinical performance engine.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-lg">
                  Duanamize's EHR optimization framework addresses usability, workflow, data quality, and ROI in a
                  structured, clinician-centred engagement model.
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
