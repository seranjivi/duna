import React, { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  Monitor,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Zap,
  ShieldCheck,
  BarChart3,
  Factory,
  Cpu,
  Globe2,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "500+", label: "Professionals trained annually" },
  { value: "95%", label: "Learner satisfaction rate" },
  { value: "40+", label: "Specialised training modules" },
];

const pillars = [
  {
    icon: Target,
    title: "Role-Based Learning Paths",
    desc: "Structured curricula mapped to specific job roles — from frontline staff to senior leadership.",
  },
  {
    icon: Monitor,
    title: "Blended Delivery",
    desc: "Instructor-led, self-paced eLearning, and hands-on simulation — all on one platform.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    desc: "Pre/post assessments, competency tracking, and reporting dashboards for managers.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    desc: "Training content aligned to industry regulations, accreditation standards, and audit requirements.",
  },
  {
    icon: Brain,
    title: "AI-Assisted Personalisation",
    desc: "Adaptive learning that adjusts content difficulty and pacing based on individual performance.",
  },
  {
    icon: Users,
    title: "Team & Cohort Management",
    desc: "Enrol teams, track cohort progress, and generate completion certificates at scale.",
  },
];

// ── TRAINING SERVICE CARDS ── one per industry/domain
const trainingServices = [
  {
    href: "/training-healthcare",
    icon: Stethoscope,
    accent: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    label: "Healthcare Training Services",
    tag: "EHR · Clinical Workflows · Compliance",
    heading: "Empower clinical and administrative teams with technology-first training.",
    body:
      "From EHR system adoption and clinical workflow optimisation to regulatory compliance and patient data governance — our healthcare training programmes are built for the complexity of modern care environments.",
    bullets: [
      "EHR system onboarding and advanced user training",
      "Clinical documentation best practices",
      "HIPAA compliance and data privacy programmes",
      "Change management for digital transformation",
    ],
  }
];

const deliveryFormats = [
  { icon: Monitor, label: "Live Virtual", desc: "Instructor-led online sessions with live Q&A and breakout exercises." },
  { icon: BookOpen, label: "Self-Paced eLearning", desc: "On-demand modules learners complete at their own pace anytime." },
  { icon: Users, label: "On-Site Classroom", desc: "In-person training at your facility with tailored content and materials." },
  { icon: Lightbulb, label: "Simulation & Labs", desc: "Hands-on practice environments mirroring real production systems." },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function TrainingServicesPage() {
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
            <span className="text-white">Training Services</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Training Services{" "}
                <span className="text-[#A5F3FC]">Build workforce capability that drives real operational results.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Duanamize delivers structured, outcome-focused training programmes across healthcare, manufacturing,
                and energy sectors — helping organisations close the skills gap between technology investment
                and workforce capability.
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
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional training"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Training domains
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Healthcare", "Manufacturing", "Energy & Utilities", "EHR Systems", "DevOps", "Smart Grid"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for L&amp;D managers, department heads, and HR leaders seeking
                        training programmes with measurable, lasting impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DUANAMIZE TRAINING ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Training built around your industry, your systems, your people.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Generic training rarely sticks. Our programmes are developed in direct partnership with
                subject matter experts from each sector — so the content reflects real workflows,
                real tools, and real challenges your teams face every day.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Industry-specific content — not generic courseware",
                  "Mapped to actual tools and systems in use",
                  "Flexible delivery: virtual, on-site, or self-paced",
                  "Completion tracking and certification included",
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

      {/* ── TRAINING SERVICES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-4">
            {/* ── "ADDITIONAL INDUSTRIES" style label ── */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Training Services
            </p>
          </div>
          <div className="mb-8">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Industry-specific training programmes.
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-600 text-justify">
                Three focused practice areas, each developed with deep domain expertise, so your teams receive training that is immediately applicable on the job. Our comprehensive training programmes combine theoretical foundations with hands-on practical exercises, ensuring participants gain both knowledge and confidence to implement solutions effectively. We work closely with industry experts to continuously update our curriculum, incorporating the latest best practices, emerging technologies, and regulatory requirements. Whether you are modernizing healthcare systems, optimizing manufacturing processes, or managing energy infrastructure, our training solutions are designed to accelerate adoption, reduce implementation risks, and maximize your technology investments.
              </p>
            </div>
          </div>

          {/* ── Expanded detail cards with image ── */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            {/* Card */}
            <div className="rounded-[32px] border border-cyan-100 bg-cyan-50 p-7 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-cyan-400 to-sky-500 text-white shadow-lg">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">EHR · Clinical Workflows · Compliance</div>
                    <h3 style={serif} className="text-lg font-semibold text-slate-950 leading-tight">Healthcare Training Services</h3>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug mb-2">Empower clinical and administrative teams with technology-first training.</p>
                <p className="text-sm leading-relaxed text-slate-600">From EHR system adoption and clinical workflow optimisation to regulatory compliance and patient data governance — our healthcare training programmes are built for the complexity of modern care environments.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-xs text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                    EHR system onboarding and advanced user training
                  </li>
                  <li className="flex items-start gap-2 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-xs text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                    Clinical documentation best practices
                  </li>
                  <li className="flex items-start gap-2 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-xs text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                    HIPAA compliance and data privacy programmes
                  </li>
                  <li className="flex items-start gap-2 rounded-xl border border-white/80 bg-white/60 px-3 py-2 text-xs text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                    Change management for digital transformation
                  </li>
                </ul>
                <a href="/industries-healthcare-training" className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A2463] hover:border-[#0A2463]/30 hover:bg-blue-50/60 transition">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" 
                alt="Healthcare training" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY FORMATS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1600&q=80"
                alt="Training delivery"
                className="h-full min-h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/90 via-[#071857]/65 to-[#071857]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Star className="h-3.5 w-3.5" /> Flexible Delivery
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    Training delivered the way your teams learn best.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Every organisation learns differently. We offer four delivery modalities
                    that can be mixed and matched to suit your team's schedule, location, and learning preferences.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["Live Virtual Sessions", "On-Site Classroom", "Self-Paced eLearning", "Simulation & Labs"].map((item) => (
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
                Four delivery formats. One consistent learning experience.
              </h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed md:text-base">
                Whether your team is distributed across time zones or co-located on a single site,
                we configure the right blend of formats to maximise engagement and knowledge retention.
              </p>
              <div className="mt-6 grid gap-4">
                {deliveryFormats.map((fmt) => {
                  const Icon = fmt.icon;
                  return (
                    <div key={fmt.label} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-950">{fmt.label}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{fmt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}

    </div>
  );
}
