import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Compass,
  Cpu,
  Gauge,
  Globe,
  Layers3,
  Leaf,
  LineChart,
  Mail,
  Menu,
  Milestone,
  Mountain,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const heroStats = [
  { value: "2–5 yrs", label: "Program narrative horizon" },
  { value: "4 phases", label: "Battle-tested delivery model" },
  { value: "Lagging → Leading", label: "Capability progression arc" },
  { value: "ROI-led", label: "Value tracked throughout journey" },
];

const journeyLenses = [
  {
    id: "programs",
    eyebrow: "Journey lens 01",
    title: "Multi-year, multi-phase programs",
    short: "Structured transformation programs that build value in waves instead of one-off initiatives.",
    description:
      "Duanamize shapes end-to-end transformation as a sequence of practical phases. Each stage produces visible business value while also preparing the operating model, leadership system, and technology stack for the next level of maturity.",
    bullets: [
      "Detailed program narratives spanning 2–5 years",
      "Structured phase sequencing for maximum impact",
      "Expert navigation of organizational dynamics",
      "Continuous stakeholder engagement and support",
    ],
    highlights: [
      { label: "Program model", value: "Wave-based" },
      { label: "Time horizon", value: "2–5 years" },
      { label: "Leadership mode", value: "Hands-on" },
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80",
    accent: "from-cyan-400 via-sky-400 to-blue-500",
    icon: Milestone,
  },
  {
    id: "maturity",
    eyebrow: "Journey lens 02",
    title: "Capability maturity progression",
    short: "A visible evolution from today’s baseline to industry-leading performance and internal capability strength.",
    description:
      "Transformation is not only about delivering a solution. It is about lifting the organization’s operating maturity. Duanamize benchmarks current capabilities, tracks progression against structured maturity criteria, and builds lasting sophistication across people, process, technology, and governance.",
    bullets: [
      "Baseline assessment against industry standards",
      "Progressive capability maturation tracking",
      "Transformation from lagging to leading performance",
      "Enhanced operational and technological sophistication",
    ],
    highlights: [
      { label: "Starting point", value: "Benchmarked" },
      { label: "Progress style", value: "Measured" },
      { label: "Outcome", value: "Self-sustaining" },
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
    accent: "from-indigo-400 via-blue-500 to-cyan-400",
    icon: TrendingUp,
  },
  {
    id: "roadmaps",
    eyebrow: "Journey lens 03",
    title: "Technology adoption roadmaps",
    short: "Pragmatic roadmaps that move from current-state systems to scalable future-state architecture.",
    description:
      "Rather than pushing technology for its own sake, Duanamize aligns AI, automation, and integration decisions to the operating model and business objectives. The result is a phased technology path that is practical, scalable, and enterprise-ready.",
    bullets: [
      "Comprehensive current-state assessment",
      "Future-state architecture design",
      "Iterative deployment of AI and automation solutions",
      "Seamless integration with existing enterprise systems",
    ],
    highlights: [
      { label: "Architecture style", value: "Future-fit" },
      { label: "Deployment model", value: "Iterative" },
      { label: "Integration", value: "Enterprise-ready" },
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80",
    accent: "from-emerald-400 via-cyan-400 to-blue-500",
    icon: Cpu,
  },
];

const deliveryPhases = [
  {
    step: "01",
    title: "Discovery & Analysis",
    duration: "1–2 weeks",
    description:
      "Deep dive into your business processes, requirements, and existing technology stack.",
    deliverables: [
      "Current state assessment",
      "Gap analysis report",
      "Technology audit",
      "Stakeholder interviews",
    ],
    outcome: "Clear understanding of project scope and requirements",
    icon: Compass,
  },
  {
    step: "02",
    title: "Solution Design",
    duration: "2–3 weeks",
    description:
      "Custom solution architecture and detailed project roadmap tailored to your needs.",
    deliverables: [
      "Technical architecture",
      "Project timeline",
      "Resource allocation plan",
      "Risk assessment",
    ],
    outcome: "Comprehensive project blueprint and implementation strategy",
    icon: Layers3,
  },
  {
    step: "03",
    title: "Development & Implementation",
    duration: "8–16 weeks",
    description:
      "Agile development with weekly sprints, continuous testing, and regular stakeholder updates.",
    deliverables: [
      "MVP development",
      "Testing & QA",
      "Documentation",
      "Team training",
    ],
    outcome: "Fully functional solution with trained team",
    icon: Workflow,
  },
  {
    step: "04",
    title: "Optimization & Transfer",
    duration: "4–8 weeks",
    description:
      "Performance monitoring, optimization, and knowledge transfer to your internal team.",
    deliverables: [
      "Performance optimization",
      "Knowledge transfer",
      "Handover documentation",
      "Ongoing support plan",
    ],
    outcome: "Self-sustaining solution with internal team ownership",
    icon: Target,
  },
];

const maturityLevels = [
  {
    level: "01",
    title: "Baseline visibility",
    text: "Current-state processes, systems, and performance are assessed against industry standards.",
  },
  {
    level: "02",
    title: "Structured improvement",
    text: "Priority gaps are translated into sequenced initiatives, governance, and measurable targets.",
  },
  {
    level: "03",
    title: "Scaled implementation",
    text: "AI, automation, and redesigned workflows are deployed through controlled delivery waves.",
  },
  {
    level: "04",
    title: "Embedded capability",
    text: "Teams adopt new ways of working, internal ownership increases, and performance becomes more stable.",
  },
  {
    level: "05",
    title: "Leading performance",
    text: "The organization operates with stronger sophistication, continuous optimization, and measurable strategic advantage.",
  },
];

const signatureJourneys = [
  {
    id: "healthcare",
    eyebrow: "Signature journey",
    title: "Healthcare system transformation",
    summary:
      "A leading healthcare provider used the Duanamize approach to improve care delivery speed and quality through a structured transformation journey.",
    description:
      "This journey demonstrates how multi-phase transformation can improve operational flow, clinical responsiveness, and sustained performance in complex healthcare environments. The result is not only a better system outcome, but a stronger internal operating capability.",
    bullets: [
      "40% faster patient care",
      "25% higher quality",
      "Operating-model redesign paired with LSS+AI",
      "Sustained improvement through structured delivery",
    ],
    highlights: [
      { label: "Journey type", value: "Healthcare transformation" },
      { label: "Speed improvement", value: "40% faster" },
      { label: "Quality uplift", value: "+25%" },
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80",
    accent: "from-cyan-400 via-sky-400 to-blue-500",
    icon: Activity,
  },
  {
    id: "financial",
    eyebrow: "Signature journey",
    title: "Financial services modernization",
    summary:
      "A regional bank’s 2.5-year transformation accelerated processing and lowered cost while modernizing operations.",
    description:
      "The financial services journey shows how Duanamize connects delivery structure, automation, and technology roadmap thinking over a multi-year arc. Instead of isolated digitization, the program builds better decision speed, lower operating cost, and stronger long-term capability.",
    bullets: [
      "2.5-year modernization journey",
      "50% reduction in loan processing time",
      "30% reduction in costs",
      "Clear phased sequencing across business and technology change",
    ],
    highlights: [
      { label: "Program duration", value: "2.5 years" },
      { label: "Cycle-time gain", value: "50% faster" },
      { label: "Cost impact", value: "-30%" },
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=80",
    accent: "from-indigo-400 via-blue-500 to-cyan-400",
    icon: LineChart,
  },
  {
    id: "manufacturing",
    eyebrow: "Signature journey",
    title: "Manufacturing excellence program",
    summary:
      "A global manufacturer’s 4-year excellence journey raised equipment effectiveness and reduced defects through progressive capability building.",
    description:
      "This program represents long-horizon transformation at enterprise scale. Duanamize combines maturity progression, technology adoption, and continuous optimization to move manufacturing operations toward more intelligent and reliable performance over time.",
    bullets: [
      "4-year excellence program",
      "35% improvement in equipment effectiveness",
      "45% reduction in defects",
      "Continuous capability lift across operations and technology",
    ],
    highlights: [
      { label: "Program duration", value: "4 years" },
      { label: "OEE uplift", value: "+35%" },
      { label: "Defect reduction", value: "-45%" },
    ],
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=80",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    icon: Gauge,
  },
];

const valueAnchors = [
  {
    title: "Deep industry expertise",
    text: "Specialized knowledge across healthcare, financial services, manufacturing, and technology sectors.",
    icon: Globe,
  },
  {
    title: "Sustainable results",
    text: "Build internal capabilities that ensure transformation benefits continue long after engagement completion.",
    icon: Mountain,
  },
  {
    title: "End-to-end support",
    text: "Complete guidance from initial assessment through full implementation and ongoing optimization.",
    icon: Users,
  },
  {
    title: "Measurable ROI",
    text: "Clear metrics and KPIs demonstrate tangible value and return on investment throughout your journey.",
    icon: BarChart3,
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-lg shadow-blue-900/30 ring-1 ring-white/25">
        <div className="absolute inset-1 rounded-full border border-white/30" />
        <div className="absolute inset-0 grid place-items-center text-lg font-black text-white">D</div>
      </div>
      <div>
        <div className="leading-tight font-semibold tracking-wide text-white">DUANAMIZE</div>
        <div className="text-[11px] tracking-[0.18em] text-blue-100/80">GLOBAL SERVICES</div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description, light = false, center = false }) {
  return (
    <div className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${
            light ? "border-white/20 bg-white/10 text-blue-100" : "border-blue-200 bg-white text-[#0A2463]"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      )}
      <h2
        style={serif}
        className={`${eyebrow ? "mt-4" : "mt-1"} text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-3xl text-sm leading-relaxed md:text-lg ${center ? "mx-auto" : ""} ${
          light ? "text-blue-100/85" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function JourneyMapCard({ onOpen }) {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-white/10 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(34,211,238,0.16),transparent_26%),radial-gradient(circle_at_55%_75%,rgba(59,130,246,0.16),transparent_35%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">Transformation map</div>
            <div className="mt-1 text-xl font-semibold text-white">From discovery to self-sustaining ownership</div>
          </div>
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white">Roadmap-led</div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/35 p-4 backdrop-blur-xl md:p-5">
          <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100/65">
            <span>Phase sequence</span>
            <span>Clear timelines</span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {deliveryPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={phase.step} className="relative rounded-[24px] border border-white/10 bg-white/5 p-4">
                  {index < deliveryPhases.length - 1 ? (
                    <div className="absolute right-[-12px] top-1/2 hidden h-px w-6 bg-white/20 md:block" />
                  ) : null}
                  <div className="flex items-center justify-between gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-semibold text-cyan-200">{phase.duration}</div>
                  </div>
                  <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100/60">Step {phase.step}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{phase.title}</div>
                  <div className="mt-2 text-xs leading-relaxed text-blue-100/74">{phase.outcome}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {journeyLenses.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onOpen(item)}
                className="group rounded-[24px] border border-white/10 bg-slate-950/35 p-4 text-left backdrop-blur-xl transition hover:bg-slate-950/45"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-slate-900/25`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-semibold text-white">{item.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-blue-100/76">{item.short}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200">
                  Open details <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LensCard({ item, onOpen }) {
  const Icon = item.icon;
  return (
    <button
      onClick={() => onOpen(item)}
      className="group rounded-[30px] border border-slate-200 bg-white p-6 text-left shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
    >
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-slate-900/20`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.eyebrow}</div>
      <h3 style={serif} className="mt-2 text-3xl font-semibold leading-tight text-slate-950">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.short}</p>

      <div className="mt-5 grid gap-3">
        {item.bullets.slice(0, 3).map((bullet) => (
          <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
            <div className="text-sm leading-relaxed text-slate-700">{bullet}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <div className="text-sm font-semibold text-slate-700">View modal details</div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0A2463] transition group-hover:border-[#0A2463]/20 group-hover:bg-blue-50">
          Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}

function ProgramCard({ item, onOpen }) {
  const Icon = item.icon;
  return (
    <button
      onClick={() => onOpen(item)}
      className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white text-left shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
    >
      <div className="relative h-72 overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/24 to-transparent" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-slate-950/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-50 backdrop-blur-xl">
          <Icon className="h-3.5 w-3.5" /> {item.eyebrow}
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white/12 bg-slate-950/40 p-5 backdrop-blur-xl">
          <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/82">{item.summary}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {item.highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4">
              <div className="text-lg font-semibold text-slate-950">{highlight.value}</div>
              <div className="mt-1 text-xs leading-relaxed text-slate-500">{highlight.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <div className="text-sm font-medium text-slate-600">Explore the full journey</div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0A2463] transition group-hover:border-[#0A2463]/20 group-hover:bg-blue-50">
            Open modal <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </button>
  );
}

function DetailModal({ item, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const Icon = item.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-slate-950/75 px-4 py-6 backdrop-blur-md md:px-8 md:py-8"
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative max-h-full w-full overflow-hidden rounded-[36px] border border-white/10 bg-white shadow-2xl shadow-black/30"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/40 text-white backdrop-blur-xl transition hover:bg-slate-950/60"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid max-h-[88vh] overflow-y-auto lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-slate-950">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071857]/92 via-[#071857]/48 to-transparent" />

                <div className="absolute inset-x-6 top-6 rounded-[24px] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-slate-900/30`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">{item.eyebrow}</div>
                      <div className="mt-1 text-2xl font-semibold text-white">{item.title}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/10 bg-slate-950/40 p-6 backdrop-blur-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-50">
                    Journey detail view
                  </div>
                  <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                    {item.summary}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span key={highlight.label} className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {highlight.value} {highlight.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 md:p-8">
                <div className="grid gap-5">
                  <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Overview</div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-700">{item.description}</p>
                  </div>

                  <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">What this journey includes</div>
                      <div className="mt-4 grid gap-3">
                        {item.bullets.map((point) => (
                          <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <div className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br ${item.accent} text-white`}>
                              <ArrowRight className="h-4 w-4" />
                            </div>
                            <div className="text-sm leading-relaxed text-slate-700">{point}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-5">
                      {item.highlights.map((highlight) => (
                        <div key={highlight.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{highlight.label}</div>
                          <div className="mt-3 text-2xl font-semibold text-slate-950">{highlight.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[30px] border border-[#0A2463]/10 bg-gradient-to-br from-[#0A2463] to-[#0E2F82] p-6 text-white shadow-xl shadow-blue-900/20">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                          <Leaf className="h-3.5 w-3.5" /> Next conversation
                        </div>
                        <h4 style={serif} className="mt-3 text-3xl font-semibold leading-tight">
                          Want a transformation journey designed around your organization’s maturity, roadmap, and ROI goals?
                        </h4>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100/82">
                          Duanamize connects Lean Six Sigma discipline, AI-enabled capability, and structured implementation to create measurable transformation over time.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                          Talk to Duanamize
                        </button>
                        <button className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                          Explore more results
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <button aria-label="Close overlay" onClick={onClose} className="absolute inset-0 -z-10 cursor-default" />
      </motion.div>
    </AnimatePresence>
  );
}

export default function DuanamizeTransformationJourneysPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeJourney, setActiveJourney] = useState(journeyLenses[0].id);

  const activeJourneyData = useMemo(
    () => journeyLenses.find((item) => item.id === activeJourney) || journeyLenses[0],
    [activeJourney]
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_16%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_34%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 md:px-8 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
                <span>Results</span>
                <span>•</span>
                <span className="text-white">Transformation Journeys</span>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Milestone className="h-3.5 w-3.5 text-cyan-300" /> Program roadmaps, maturity progression, and proof-led transformation
              </div>

              <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Transformation journeys,
                <span className="mt-2 block text-cyan-200">designed as long-range value maps rather than one-off project pages</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
                This page turns the Duanamize framework into a premium journey-led experience: multi-year program thinking,
                maturity progression, technology adoption roadmaps, and a clear four-phase delivery path that moves from
                discovery to internal ownership.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedItem(journeyLenses[0])}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5"
                >
                  Open journey framework <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#signature-journeys"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Browse signature journeys
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                    <div className="text-2xl font-semibold text-white md:text-3xl">{item.value}</div>
                    <div className="mt-1 text-sm leading-relaxed text-blue-100/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <JourneyMapCard onOpen={setSelectedItem} />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-2 xl:grid-cols-4 md:px-8">
          {valueAnchors.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 shadow-sm shadow-slate-200/40">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-lg font-semibold text-slate-950">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="journeys" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeader
            title="Three ways to understand the transformation path"
            description="The page is intentionally structured around three complementary lenses. Together they show how Duanamize frames long-horizon programs, tracks maturity progression, and aligns AI and automation adoption to business reality."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {journeyLenses.map((item) => (
              <LensCard key={item.id} item={item} onOpen={setSelectedItem} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                title="A visible climb from baseline state to leading performance"
                description="Instead of treating transformation as a one-time intervention, Duanamize frames it as capability growth. This stepped model makes the journey feel cumulative, strategic, and measurable over time."
              />

              <div className="flex flex-wrap gap-2">
                {journeyLenses.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveJourney(item.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      activeJourney === item.id
                        ? "border-[#0A2463] bg-[#0A2463] text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-[#0A2463]/20 hover:text-[#0A2463]"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <div className="flex items-center gap-3">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${activeJourneyData.accent} text-white`}>
                    <activeJourneyData.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Active lens</div>
                    <div className="mt-1 text-xl font-semibold text-slate-950">{activeJourneyData.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{activeJourneyData.description}</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-300/20 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_16%,rgba(14,47,130,0.06),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_50%_88%,rgba(15,23,42,0.05),transparent_32%)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Progression path</div>
                    <div style={serif} className="mt-2 text-3xl font-semibold text-slate-950">Capability maturity climb</div>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">Lagging → Leading</div>
                </div>

                <div className="mt-8 grid gap-4">
                  {maturityLevels.map((level, index) => (
                    <div
                      key={level.level}
                      className="relative rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 shadow-sm"
                      style={{ marginLeft: `${index * 10}px` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#0A2463] text-sm font-semibold text-white">
                          {level.level}
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-950">{level.title}</div>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{level.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeader
            title="A 4-phase rail built for clarity, momentum, and internal ownership"
            description="The methodology section is visualized as a horizontal delivery rail so visitors can quickly understand sequence, timing, deliverables, and the outcome of each phase without reading dense text blocks."
          />

          <div className="grid gap-6 xl:grid-cols-4">
            {deliveryPhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.step} className="relative rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0A2463] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">{phase.duration}</div>
                  </div>

                  <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Step {phase.step}</div>
                  <h3 style={serif} className="mt-2 text-3xl font-semibold leading-tight text-slate-950">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{phase.description}</p>

                  <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Deliverables</div>
                    <div className="mt-3 grid gap-2">
                      {phase.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-[24px] border border-[#0A2463]/10 bg-gradient-to-br from-[#0A2463] to-[#0E2F82] p-4 text-white shadow-lg shadow-blue-900/15">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">Key outcome</div>
                    <div className="mt-2 text-sm leading-relaxed text-blue-50">{phase.outcome}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="signature-journeys" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeader
            title="Signature transformation journeys that make the framework tangible"
            description="These proof-point cards translate the framework into concrete transformation narratives across healthcare, financial services, and manufacturing. Each card opens a modal for richer context and value framing."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {signatureJourneys.map((item) => (
              <ProgramCard key={item.id} item={item} onOpen={setSelectedItem} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionHeader
                // eyebrow="Why this page reads differently"
                title="Designed as a transformation map, not another templated results page"
                description="The page avoids generic stock-layout repetition by using a roadmap-led hero, stepped maturity visualization, program cards, and on-demand modal detail. It stays inside the Duanamize brand system while giving Results a new identity."
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Program thinking",
                  text: "The page emphasizes long-range transformation design rather than isolated project wins.",
                  icon: Milestone,
                },
                {
                  title: "Maturity visibility",
                  text: "Visitors can understand how capability evolves over time, not just what gets delivered.",
                  icon: TrendingUp,
                },
                {
                  title: "Technology realism",
                  text: "AI and automation appear as part of a pragmatic roadmap, not abstract innovation language.",
                  icon: BrainCircuit,
                },
                {
                  title: "Executive scanability",
                  text: "Short blocks, visual rails, and modal depth keep the experience strategic and easy to absorb.",
                  icon: BarChart3,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/40">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-lg font-semibold text-slate-950">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] border border-[#0A2463]/10 bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                  <Leaf className="h-3.5 w-3.5" /> Transformation to partnership
                </div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Ready to shape your own transformation journey with clearer phases, stronger capability growth, and measurable ROI?
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-lg">
                  Duanamize combines Lean Six Sigma rigor, AI-powered operational intelligence, and enterprise delivery discipline to move organizations from assessment to sustained performance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Start Your Journey
                </button>
                <button className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  Talk to Duanamize
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedItem ? <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} /> : null}
    </div>
  );
}
