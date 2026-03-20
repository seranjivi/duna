import React from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronDown,
  AlertCircle,
  CloudCog,
  Database,
  Gauge,
  GitBranch,
  Landmark,
  Layers3,
  Lock,
  Mail,
  Menu,
  Network,
  Phone,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const serif = {
  fontFamily:
    '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const heroStats = [
  { value: "60%+", label: "Failure risk when AI starts without readiness assessment" },
  { value: "90%", label: "Implementation success with structured readiness planning" },
  { value: "5", label: "Core readiness dimensions assessed before scaling" },
];

const readinessDimensions = [
  {
    title: "Data Foundation",
    score: 86,
    accent: "from-cyan-400 to-sky-500",
    note: "Quality, governance, accessibility, integration readiness",
    icon: Database,
  },
  {
    title: "Technical Capability",
    score: 74,
    accent: "from-sky-500 to-indigo-500",
    note: "Infrastructure, cloud, model support, internal skills",
    icon: CloudCog,
  },
  {
    title: "Business Value",
    score: 81,
    accent: "from-indigo-500 to-blue-500",
    note: "Use case clarity, ROI logic, measurable success criteria",
    icon: BarChart3,
  },
  {
    title: "Operating Readiness",
    score: 68,
    accent: "from-blue-500 to-cyan-400",
    note: "Leadership commitment, change readiness, adoption model",
    icon: Users,
  },
  {
    title: "Governance & Risk",
    score: 79,
    accent: "from-cyan-400 to-emerald-400",
    note: "Security, privacy, bias control, explainability, compliance",
    icon: ShieldCheck,
  },
];

const failureCards = [
  {
    title: "Poor data quality",
    text: "Inconsistent, incomplete, or inaccessible data undermines model reliability before value can be proven.",
    icon: Database,
  },
  {
    title: "Weak business case",
    text: "AI initiatives lose momentum when goals are vague, metrics are unclear, and use cases are not prioritized by value and feasibility.",
    icon: Target,
  },
  {
    title: "Low organizational adoption",
    text: "Even technically strong solutions underperform when leadership sponsorship, change support, and role clarity are missing.",
    icon: AlertCircle,
  },
];

const maturityLevels = [
  {
    level: "01",
    name: "Ad hoc",
    text: "Isolated experiments, fragmented data, no clear governance or enterprise AI direction.",
  },
  {
    level: "02",
    name: "Emerging",
    text: "Initial use cases identified, selective pilots begin, readiness gaps become visible.",
  },
  {
    level: "03",
    name: "Operational",
    text: "Foundational data, infrastructure, and change support are in place for repeatable delivery.",
  },
  {
    level: "04",
    name: "Scaled",
    text: "Standards, platforms, and governance support broader rollout across functions and processes.",
  },
  {
    level: "05",
    name: "Intelligent enterprise",
    text: "AI becomes a governed operating capability with continuous optimization and measurable business impact.",
  },
];

const useCaseCriteria = [
  {
    title: "Business impact",
    text: "How strongly the use case improves cost, speed, quality, compliance, or customer experience.",
    icon: Target,
  },
  {
    title: "Data suitability",
    text: "Whether the required data is available, structured, trustworthy, and connected enough to support AI decisions.",
    icon: Database,
  },
  {
    title: "Implementation complexity",
    text: "Architecture, integration, security, and operating model demands required to deliver safely.",
    icon: Layers3,
  },
  {
    title: "Adoption feasibility",
    text: "Stakeholder alignment, workflow fit, and the likelihood of sustained usage after go-live.",
    icon: Workflow,
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Assess the current state",
    text: "Establish the baseline across data, technology, people, governance, and leadership commitment.",
    icon: Radar,
  },
  {
    step: "02",
    title: "Prioritize use cases",
    text: "Focus on high-value, low-complexity opportunities that can prove value while building capability.",
    icon: Target,
  },
  {
    step: "03",
    title: "Design the architecture",
    text: "Define the platform, integration, security, model lifecycle, and operating controls needed for delivery.",
    icon: Network,
  },
  {
    step: "04",
    title: "Pilot, govern, and scale",
    text: "Validate through pilots, strengthen adoption, and expand with monitoring, controls, and ROI discipline.",
    icon: GitBranch,
  },
];

const architectureCards = [
  {
    title: "Platform evaluation",
    text: "Select platforms based on scalability, support quality, integration depth, cost model, and strategic fit.",
    icon: Building2,
  },
  {
    title: "Data flow design",
    text: "Map how enterprise data moves into AI services and back into user workflows with the right security controls.",
    icon: Network,
  },
  {
    title: "Model lifecycle control",
    text: "Set up testing, deployment, monitoring, and retraining disciplines so models remain reliable over time.",
    icon: BrainCircuit,
  },
  {
    title: "Operational monitoring",
    text: "Track usage, drift, performance, and business outcomes so value can be sustained and improved continuously.",
    icon: Gauge,
  },
];

const governanceCards = [
  {
    title: "Ethical AI and bias control",
    text: "Evaluate decisions for fairness, detect unintended bias, and build routines to test and correct issues early.",
    icon: ShieldCheck,
  },
  {
    title: "Explainability and transparency",
    text: "Make AI decisions understandable to business teams, leadership, customers, and regulators where required.",
    icon: Sparkles,
  },
  {
    title: "Regulatory and privacy readiness",
    text: "Align AI with sector regulations and data privacy obligations before scaling automated decision-making.",
    icon: Landmark,
  },
  {
    title: "Cybersecurity resilience",
    text: "Protect models, data pipelines, and connected systems from vulnerabilities that can amplify operational risk.",
    icon: Lock,
  },
];

const proofPoints = [
  "Readiness assessment prevents expensive experimentation without business value.",
  "Phased implementation reduces technical and organizational risk while building confidence.",
  "Strong governance allows AI to scale as an enterprise capability rather than a one-off pilot.",
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

function SectionHeader({ eyebrow, title, description, light = false, align = "left" }) {
  return (
    <div className={`mb-8 md:mb-10 ${align === "center" ? "text-center" : ""}`}>
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
      <h2
        style={serif}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-3xl text-sm leading-relaxed md:text-lg ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "text-blue-100/85" : "text-slate-600"}`}
      >
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071857]">
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_56%_72%,rgba(255,255,255,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:84px_84px] opacity-40" />
      <div className="absolute -left-20 top-14 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
              <span>Solutions</span>
              <span>•</span>
              <span>Process Intelligence</span>
              <span>•</span>
              <span className="text-white">AI Readiness Assessment</span>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
              <Radar className="h-3.5 w-3.5 text-cyan-300" />
              Process Intelligence capability
            </div>

            <h1
              style={serif}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            >
              AI Readiness Assessment
              <span className="mt-2 block text-cyan-200">your complete framework for implementation success</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
              Successful AI programs begin long before model selection. They start with a clear view of organizational maturity, data readiness, technical capability, governance discipline, and adoption potential.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#framework"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5"
              >
                Explore the readiness framework <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                View the implementation roadmap
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <div className="text-2xl font-semibold text-white md:text-3xl">{item.value}</div>
                  <div className="mt-1 text-sm leading-relaxed text-blue-100/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/35 p-5 shadow-2xl shadow-blue-950/35 backdrop-blur-xl">
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Assessment command center</div>
                    <div className="mt-1 text-lg font-semibold text-white">Enterprise readiness snapshot</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-blue-100">
                    Pre-implementation view
                  </div>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[30px] border border-cyan-300/20 bg-cyan-300/10 p-5">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/85">Readiness score</div>
                    <div className="mt-3 flex items-end gap-3">
                      <div className="text-5xl font-semibold text-white">78</div>
                      <div className="pb-2 text-sm text-blue-100/80">of 100</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
                      Strong strategic potential, with the biggest uplift opportunity in operating readiness and internal capability development.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                      {[
                        ["Fastest path to value", "Pilot-ready use cases with high impact and manageable complexity"],
                        ["Critical dependency", "Data governance and integration discipline before scale"],
                      ].map(([title, text]) => (
                        <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                          <div className="text-sm font-semibold text-white">{title}</div>
                          <div className="mt-1 text-sm leading-relaxed text-blue-100/78">{text}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[30px] border border-white/10 bg-[#06123f]/90 p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/70">Dimension analysis</div>
                      <div className="inline-flex items-center gap-2 text-xs text-cyan-100/75">
                        <Bot className="h-3.5 w-3.5" /> AI assessment lens
                      </div>
                    </div>
                    <div className="space-y-4">
                      {readinessDimensions.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3">
                                <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-blue-950/25`}>
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white">{item.title}</div>
                                  <div className="mt-1 text-xs leading-relaxed text-blue-100/72">{item.note}</div>
                                </div>
                              </div>
                              <div className="text-sm font-semibold text-cyan-100">{item.score}%</div>
                            </div>
                            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${item.accent}`}
                                style={{ width: `${item.score}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FailureSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div>
            <SectionHeader
              eyebrow="Why AI initiatives stall"
              title="Most failures begin before implementation starts"
              description="AI programs do not fail only because of technology choices. They fail when data foundations are weak, value logic is unclear, and the organization is not prepared to adopt a new operating model."
            />

            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
                  alt="Enterprise AI assessment workshop"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/85">Strategic lesson</div>
                  <div className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    Readiness assessment turns AI from a risky experiment into a structured value program.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
            {failureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 style={serif} className="text-2xl font-semibold leading-tight text-slate-950">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{card.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-[28px] border border-blue-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)] p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A2463]">Without assessment vs with assessment</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold text-slate-950">Unstructured approach</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">Starts with tools, discovers blockers late, and struggles to prove business value.</div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <div className="text-sm font-semibold text-slate-950">Structured readiness</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">Aligns capability, governance, and use-case priorities before investment scales.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkSection() {
  return (
    <section id="framework" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Organizational maturity framework"
          title="Five dimensions define whether AI can move from pilot to performance"
          description="A credible readiness assessment looks beyond technical enthusiasm. It evaluates the operating conditions that determine whether AI can be adopted safely, scaled efficiently, and measured rigorously."
        />

        <div className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Assessment model</div>
                <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Maturity grows in levels, not in isolated purchases
                </h3>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                <Radar className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {maturityLevels.map((item, index) => (
                <div key={item.name} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start gap-4">
                    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-sm font-semibold ${
                      index === 4
                        ? "bg-gradient-to-br from-cyan-400 to-emerald-400 text-white"
                        : "border border-slate-200 bg-white text-[#0A2463]"
                    }`}>
                      {item.level}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-950">{item.name}</div>
                      <div className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {readinessDimensions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-blue-900/20`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {item.score}% readiness
                    </div>
                  </div>
                  <h3 style={serif} className="mt-5 text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.note}</p>
                  <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.accent}`} style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessCaseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <div>
            <SectionHeader
              eyebrow="Business case and ROI planning"
              title="Readiness includes knowing where AI should start and why"
              description="Not every process needs AI first. Strong programs begin with use cases that combine meaningful business value, clean enough data, realistic implementation effort, and a high chance of adoption."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {useCaseCriteria.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 style={serif} className="mt-4 text-2xl font-semibold leading-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sticky top-6 rounded-[32px] border border-slate-200 bg-[#071857] p-6 text-white shadow-sm md:p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/85">Use-case prioritization board</div>
            <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
              Start with high-impact, low-complexity opportunities
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-blue-100/82 md:text-base">
              Pilot projects should prove real value, build internal confidence, and strengthen the operating model required for broader rollout.
            </p>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
              <div className="grid grid-cols-[1fr_auto] gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/70">
                <span>Opportunity</span>
                <span>Priority</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Decision support for repetitive approvals", "High"],
                  ["Predictive risk alerts in key workflows", "High"],
                  ["Knowledge retrieval across siloed teams", "Medium"],
                  ["Enterprise-wide autonomous operations", "Later"],
                ].map(([title, priority]) => (
                  <div key={title} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                    <div className="text-sm leading-relaxed text-white">{title}</div>
                    <div className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      priority === "High"
                        ? "bg-cyan-400/15 text-cyan-100"
                        : priority === "Medium"
                        ? "bg-blue-400/15 text-blue-100"
                        : "bg-white/10 text-blue-100"
                    }`}>
                      {priority}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["ROI logic", "Connect value to cycle time, cost, risk, throughput, or experience."],
                ["Resource plan", "Budget for data work, skills uplift, external expertise, and ongoing operations."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-blue-100/76">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Implementation roadmap"
          title="A readiness-first path from assessment to scale"
          description="The objective is not to spend months evaluating without action. It is to sequence action intelligently so the organization learns, proves value, and expands with control."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {roadmapSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className={`absolute inset-x-0 top-0 h-1.5 ${
                  index === 0
                    ? "bg-gradient-to-r from-cyan-400 to-sky-500"
                    : index === 1
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500"
                    : index === 2
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                    : "bg-gradient-to-r from-blue-500 to-cyan-400"
                }`} />
                <div className="flex items-start justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step {item.step}</div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 style={serif} className="mt-5 text-2xl font-semibold leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div>
            <SectionHeader
              eyebrow="Technology selection and architecture"
              title="The right platform is the one your organization can govern, integrate, and scale"
              description="AI platform decisions should follow readiness findings. Scalability, integration depth, support quality, security posture, and long-term operating fit matter as much as raw model capability."
            />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                  alt="Enterprise AI architecture and analytics"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/85">Architecture principle</div>
                  <div className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    Data flow, model operations, security, and user experience must work as one operating system.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {architectureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 style={serif} className="mt-5 text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section className="relative overflow-hidden bg-[#071857]">
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.14),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_60%_70%,rgba(255,255,255,0.06),transparent_34%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Governance and risk management"
          title="AI readiness is incomplete without trust, control, and accountability"
          description="As AI begins to influence decisions, operations, and customer outcomes, governance becomes a core capability rather than a final compliance step."
          light
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {governanceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 style={serif} className="mt-5 text-2xl font-semibold leading-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blue-100/80">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-start">
          <div>
            <SectionHeader
              eyebrow="What successful organizations do differently"
              title="They treat AI readiness as an executive discipline, not a technical checklist"
              description="The organizations that convert AI into measurable business impact are deliberate about readiness, prioritization, governance, and the operating model required for adoption."
            />
          </div>

          <div className="space-y-4">
            {proofPoints.map((item, index) => (
              <div key={item} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <div className="flex items-start gap-4">
                  <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-sm font-semibold ${
                    index === 0
                      ? "bg-gradient-to-br from-cyan-400 to-sky-500 text-white"
                      : index === 1
                      ? "bg-gradient-to-br from-sky-500 to-indigo-500 text-white"
                      : "bg-gradient-to-br from-indigo-500 to-cyan-400 text-white"
                  }`}>
                    0{index + 1}
                  </div>
                  <div className="text-base leading-relaxed text-slate-700">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-[linear-gradient(135deg,#071857_0%,#0b2d7e_55%,#0f4c81_100%)] shadow-2xl shadow-blue-900/10">
          <div className="grid gap-8 px-6 py-8 md:px-8 md:py-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> Next step with Duanamize
              </div>
              <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Build your AI roadmap on readiness, not assumptions
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-100/85 md:text-lg">
                Duanamize helps organizations assess maturity, prioritize high-value use cases, design the right architecture, and establish the governance needed for confident AI implementation.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur-xl">
                <div className="text-sm font-semibold text-white">What this engagement can clarify</div>
                <div className="mt-3 grid gap-3">
                  {[
                    "Where your largest AI readiness gaps actually are",
                    "Which use cases should start first and why",
                    "What architecture, governance, and skills are required to scale",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3 text-sm text-blue-50">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5"
                >
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Explore Process Intelligence
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionsProcessIntelligencePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <FailureSection />
      <FrameworkSection />
      <BusinessCaseSection />
      <RoadmapSection />
      <ArchitectureSection />
      <GovernanceSection />
      <ProofSection />
      <CTASection />
    </div>
  );
}
