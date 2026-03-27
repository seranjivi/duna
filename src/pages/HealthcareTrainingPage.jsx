import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  Heart,
  Layers3,
  Lightbulb,
  Lock,
  Monitor,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
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
  { value: "30%", label: "Faster EHR system adoption" },
  { value: "50%", label: "Reduction in documentation errors" },
  { value: "92%", label: "Compliance pass rate post-training" },
];

const challenges = [
  {
    category: "System Adoption",
    icon: Monitor,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Low clinician confidence with EHR interfaces",
      "Inconsistent usage across departments and roles",
      "High error rates during system transitions",
      "Resistance to new digital workflows",
    ],
  },
  {
    category: "Workflow Knowledge",
    icon: Workflow,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Poor understanding of optimised clinical workflows",
      "Inefficient documentation habits post go-live",
      "Lack of role-specific system customisation skills",
      "Disconnected training from real-world tasks",
    ],
  },
  {
    category: "Compliance Gaps",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Insufficient HIPAA and data privacy awareness",
      "Inconsistent audit trail and documentation standards",
      "Gaps in informed consent and records management",
      "Outdated compliance knowledge across staff",
    ],
  },
];

const programmeTabs = [
  {
    label: "EHR Training",
    icon: Monitor,
    title: "EHR System Onboarding & Advanced Use",
    items: [
      "Role-specific EHR onboarding for clinical and admin staff",
      "Navigation, order entry, and documentation workflows",
      "Advanced features: smart phrases, templates, and shortcuts",
      "Specialist workflows for physicians, nurses, and allied health",
      "Mobile EHR access and point-of-care documentation training",
    ],
  },
  {
    label: "Clinical Workflows",
    icon: ClipboardList,
    title: "Clinical Workflow Optimisation Training",
    items: [
      "Patient intake, triage, and discharge process optimisation",
      "Electronic prescribing and medication reconciliation",
      "Lab order management and result review workflows",
      "Handover documentation and care coordination practices",
    ],
  },
  {
    label: "Compliance",
    icon: ShieldCheck,
    title: "Healthcare Compliance & Data Privacy",
    items: [
      "HIPAA Privacy and Security Rule fundamentals",
      "Patient data access controls and audit trail management",
      "Breach notification procedures and incident response",
      "Consent management and records retention policies",
    ],
  },
  {
    label: "Leadership",
    icon: TrendingUp,
    title: "Change Management for Healthcare Leaders",
    items: [
      "Digital transformation leadership and communication",
      "Managing clinical staff through system transitions",
      "Adoption metrics and performance monitoring",
      "Building a culture of continuous digital improvement",
    ],
  },
];

const learningPhases = [
  {
    step: "01",
    title: "Needs Assessment",
    icon: Target,
    items: [
      "Role-based skill gap analysis across departments",
      "Current EHR usage and adoption benchmarking",
      "Compliance audit to identify training priorities",
      "Learning objectives and success metric definition",
      "Stakeholder interviews to understand workflow challenges",
      "Training schedule alignment with clinical operations",
    ],
  },
  {
    step: "02",
    title: "Programme Design",
    icon: Brain,
    items: [
      "Custom curriculum mapped to your EHR system and version",
      "Blended delivery design: live, eLearning, and simulation",
      "Content review and sign-off with clinical stakeholders",
      "LMS setup, course enrolment, and cohort management",
    ],
  },
  {
    step: "03",
    title: "Delivery & Evaluation",
    icon: BarChart3,
    items: [
      "Phased rollout with go-live support integration",
      "Pre/post assessment and competency tracking",
      "Manager dashboards and completion reporting",
      "Post-programme review and optimisation cycle",
      "Ongoing support desk and refresher training access",
      "ROI measurement and outcome reporting to leadership",
    ],
  },
];

const roiAreas = [
  {
    icon: TrendingUp,
    title: "Operational Efficiency",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Faster clinician onboarding onto EHR systems",
      "Reduced time spent on documentation and data entry",
      "Lower IT helpdesk tickets related to system misuse",
      "Improved throughput and patient flow metrics",
    ],
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Reduced risk of HIPAA violations and data breaches",
      "Consistent audit-ready documentation practices",
      "Lower rates of clinical documentation errors",
      "Stronger readiness for accreditation inspections",
    ],
  },
  {
    icon: Heart,
    title: "Staff & Patient Outcomes",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Higher clinician satisfaction and reduced burnout",
      "More time with patients — less time on screens",
      "Improved care coordination and handover quality",
      "Better patient safety through accurate documentation",
    ],
  },
];

const moduleHighlights = [
  { icon: Stethoscope, label: "Physician EHR Mastery" },
  { icon: Heart, label: "Nursing Documentation" },
  { icon: FileText, label: "Medical Coding Basics" },
  { icon: Lock, label: "HIPAA Essentials" },
  { icon: ClipboardList, label: "Clinical Audit Prep" },
  { icon: Users, label: "Team-Based Care Workflows" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HealthcareTrainingPage() {
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
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white/40">•</span>
            <a href="/training" className="text-white hover:text-blue-200 transition-colors">Training Services</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Healthcare Training Services</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Healthcare Training{" "}
                <span className="text-[#A5F3FC]">Empowering clinical teams to work smarter with technology.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                From EHR onboarding and clinical workflow optimisation to HIPAA compliance and
                digital change management — our healthcare training programmes close the gap between
                technology capability and real-world clinical performance.
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

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare training"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Programme highlights
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {moduleHighlights.map((m) => {
                      const Icon = m.icon;
                      return (
                        <span key={m.label} className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                          <Icon className="h-3 w-3 text-cyan-300" />
                          {m.label}
                        </span>
                      );
                    })}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for healthcare leaders seeking measurable EHR adoption and compliance improvements.
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
                Three training challenges blocking healthcare technology ROI.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Even the best EHR systems fail to deliver value when clinical teams lack the knowledge,
                skills, and confidence to use them effectively in daily practice.
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

      {/* ── PROGRAMME MODULES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Four programme tracks for every healthcare role.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Each track is designed to address a distinct dimension of healthcare technology capability — from hands-on system usage to strategic digital leadership.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {programmeTabs.map((tab, i) => {
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

          {programmeTabs.map((tab, i) => {
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
                      Track {String(i + 1).padStart(2, "0")}
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

      {/* ── DELIVERY METHODOLOGY ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase approach from assessment to measurable outcomes.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Our structured methodology ensures training is grounded in your specific system, your workflows, and your compliance obligations — with results you can report on.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 items-stretch">
            {learningPhases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <button
                  key={phase.step}
                  className="text-left rounded-[28px] bg-[#0A2463] p-6 shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl h-full"
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

      {/* ── ROI ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The measurable return on healthcare training investment.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Well-trained clinical and administrative teams drive efficiency gains, reduce compliance risk, and improve the working environment — all directly measurable post-programme.
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
      <section className="bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Healthcare training completes the capability building trilogy by empowering clinical teams with the digital skills needed for modern care delivery
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that invest in comprehensive healthcare technology training achieve higher EHR adoption rates, improved compliance scores, and better patient outcomes through more confident and capable clinical staff.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-1 max-w-sm mx-auto">
                <a href="/industries-healthcare-training" className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Current Page</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    Healthcare Training Services
                  </div>
                  <div className="mt-1 text-sm text-slate-500">Part of Industries Training Solutions</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
