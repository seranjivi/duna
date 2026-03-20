import React from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Cpu,
  Gauge,
  GitBranch,
  GraduationCap,
  Landmark,
  Layers3,
  LineChart,
  Lock,
  Mail,
  Menu,
  Network,
  Phone,
  Radar,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TestTube2,
  Users,
  Workflow,
} from "lucide-react";

const serif = {
  fontFamily:
    '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const heroStats = [
  { value: "85%", label: "AI project success rate with structured best-practice execution" },
  { value: "60–80%", label: "Typical pilot effort focused on data preparation and readiness work" },
  { value: "4", label: "Core implementation motions: align, pilot, scale, govern" },
];

const strategyCards = [
  {
    title: "Business objective alignment",
    text: "AI must solve specific business challenges with measurable outcomes—not broad ambitions that sound innovative but lack ownership.",
    icon: Target,
  },
  {
    title: "Investment realism",
    text: "Successful programs budget for infrastructure, capability building, external expertise, and the long tail of monitoring and optimization.",
    icon: LineChart,
  },
  {
    title: "Architecture fit",
    text: "AI should extend enterprise architecture, not create disconnected experiments that weaken scale, security, and value realization.",
    icon: Network,
  },
  {
    title: "Differentiation focus",
    text: "The highest-value implementations strengthen customer experience, decision quality, or operating speed in ways competitors cannot easily copy.",
    icon: Sparkles,
  },
];

const pilotPrinciples = [
  {
    title: "Choose high-impact, low-complexity pilots",
    text: "Early wins should prove value, build confidence, and expose operating realities without overloading the organization.",
    icon: TestTube2,
  },
  {
    title: "Define measurable success criteria",
    text: "Pilot metrics should combine technical performance with business impact so the case for scaling is objective and defensible.",
    icon: Gauge,
  },
  {
    title: "Use agile delivery with review loops",
    text: "Frequent iteration prevents drift, keeps stakeholder trust high, and allows solution design to adapt to real operational learning.",
    icon: GitBranch,
  },
  {
    title: "Validate models for real-world conditions",
    text: "Testing must cover varied scenarios, imperfect data, and production realities—not only ideal laboratory performance.",
    icon: BrainCircuit,
  },
];

const scaleSteps = [
  {
    step: "01",
    title: "Stabilize the pilot operating model",
    text: "Document what worked, where the friction appeared, and what governance, people, and platform conditions are now non-negotiable.",
    icon: CheckCircle2,
  },
  {
    step: "02",
    title: "Create enterprise standards",
    text: "Establish common architecture patterns, controls, delivery methods, and reusable components for consistent rollout quality.",
    icon: Layers3,
  },
  {
    step: "03",
    title: "Build a center of excellence",
    text: "Provide governance, support, knowledge capture, and expert guidance while enabling business-led adoption at scale.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Expand with phased deployment",
    text: "Roll out sequentially so each wave improves the next, maintains continuity, and strengthens internal AI capability over time.",
    icon: Workflow,
  },
];

const capabilityCards = [
  {
    title: "AI literacy for business teams",
    text: "Build enough understanding for leaders and users to adopt solutions confidently, challenge assumptions, and measure value appropriately.",
    icon: Users,
  },
  {
    title: "Advanced skills for technical teams",
    text: "Develop internal capability in data science, model operations, validation, monitoring, and architecture to reduce long-term dependency.",
    icon: Cpu,
  },
  {
    title: "Career paths and retention",
    text: "Treat AI talent as a strategic capability with growth paths, recognition, and meaningful work that sustains commitment.",
    icon: GraduationCap,
  },
  {
    title: "Knowledge management systems",
    text: "Capture lessons, reusable assets, risk patterns, and successful approaches so each implementation improves the next one.",
    icon: Radar,
  },
];

const monitorCards = [
  {
    title: "Model performance tracking",
    text: "Monitor accuracy, precision, reliability, latency, and business-facing quality indicators together—not in isolation.",
    icon: Gauge,
  },
  {
    title: "Data drift detection",
    text: "Identify when production data shifts far enough from training conditions to threaten performance and decision quality.",
    icon: RefreshCcw,
  },
  {
    title: "Business impact measurement",
    text: "Tie AI outcomes back to cycle time, cost, quality, risk, conversion, or service metrics so value remains visible.",
    icon: LineChart,
  },
  {
    title: "Continuous experimentation",
    text: "Use A/B testing and structured feedback loops to improve algorithms safely while learning from users and operations.",
    icon: TestTube2,
  },
];

const governanceCards = [
  {
    title: "Technical risk mitigation",
    text: "Validation, backup, recovery, and resilience planning ensure AI services remain dependable under real operating pressure.",
    icon: ShieldCheck,
  },
  {
    title: "Security and privacy protection",
    text: "Protect models, prompts, datasets, integrations, and outputs across development and production with enterprise-grade controls.",
    icon: Lock,
  },
  {
    title: "Operational change management",
    text: "AI must fit real workflows. Adoption fails when people, roles, escalation paths, and accountability are not redesigned with care.",
    icon: Users,
  },
  {
    title: "Regulatory and vendor oversight",
    text: "Assess third-party providers, maintain compliance visibility, and prepare for evolving regulatory expectations as AI expands.",
    icon: Landmark,
  },
];

const implementationSignals = [
  "AI programs deliver more value when business goals and success criteria are defined before tools are chosen.",
  "Pilot design should prove business relevance while building the confidence, patterns, and operating capability needed for scale.",
  "Scaling depends as much on governance, skills, and platform standards as on model performance itself.",
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
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_12%_18%,rgba(45,212,191,0.16),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(59,130,246,0.2),transparent_26%),radial-gradient(circle_at_58%_82%,rgba(255,255,255,0.07),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-35" />
      <div className="absolute -left-12 top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
              <span>Solutions</span>
              <span>•</span>
              <span>Agentic Automation</span>
              <span>•</span>
              <span className="text-white">AI Implementation Best Practices</span>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
              <Bot className="h-3.5 w-3.5 text-cyan-300" />
              Enterprise implementation playbook
            </div>

            <h1
              style={serif}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
            >
              AI Implementation Best Practices
              <span className="mt-2 block text-cyan-200">proven strategies for enterprise success</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
              Enterprise AI succeeds when strategy, pilots, scaling discipline, monitoring, and governance work together as one operating model. This page turns that implementation logic into an executive-ready visual blueprint.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#strategy"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5"
              >
                Explore the implementation framework <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#governance"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Review governance essentials
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
            <div className="grid gap-4 md:grid-cols-[1.02fr_0.98fr]">
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/35 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                  alt="AI implementation team planning session"
                  className="h-full min-h-[410px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white/15 bg-slate-950/40 p-5 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/85">Implementation principle</div>
                  <div className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    AI is not a single deployment. It is a managed sequence of aligned decisions, operating change, and controlled scale.
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-lg shadow-blue-950/25 backdrop-blur-xl">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                    alt="Enterprise digital control room"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/70">Command view</div>
                    <div className="mt-2 text-lg font-semibold text-white">From pilot signal to enterprise operating model</div>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-slate-950/35 p-5 shadow-lg shadow-blue-950/25 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Blueprint layers</div>
                      <div className="mt-1 text-lg font-semibold text-white">Execution stack</div>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                      <Cloud className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["01", "Align strategy", "Link AI to business priorities, success metrics, and architecture direction."],
                      ["02", "Pilot with intent", "Prove value in controlled use cases with strong validation and stakeholder support."],
                      ["03", "Scale deliberately", "Standardize platforms, build capabilities, and expand through phased rollout."],
                      ["04", "Govern continuously", "Monitor performance, manage risk, and optimize AI as a living enterprise capability."],
                    ].map(([n, title, text]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex gap-4">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-semibold text-white">
                            {n}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{title}</div>
                            <div className="mt-1 text-sm leading-relaxed text-blue-100/78">{text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
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

function StrategySection() {
  return (
    <section id="strategy" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
          <div>
            <SectionHeader
              eyebrow="Strategic planning for AI implementation"
              title="Start where value, architecture, and investment logic meet"
              description="Random experimentation rarely creates durable business value. High-performing organizations begin with strategic clarity, realistic resourcing, and a clear view of where AI will strengthen enterprise differentiation."
            />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-[430px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                  alt="Technology strategy and enterprise analytics"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/18 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/85">Strategic signal</div>
                  <div className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    The strongest AI roadmaps are business-led, technically grounded, and explicitly designed for scale from the start.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {strategyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
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

function PilotSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Pilot project strategy and execution"
          title="Pilots should build momentum, not just prototypes"
          description="A strong pilot balances business impact, feasibility, stakeholder support, and disciplined measurement. It is where the organization learns how AI will actually work in its environment."
          align="center"
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_0.92fr] xl:items-start">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Pilot selection matrix</div>
                <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Prioritize use cases that can prove value quickly and credibly
                </h3>
              </div>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                <Target className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[26px] border border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#eef7ff_55%,#ffffff_100%)] p-5">
              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="rounded-[24px] border border-slate-200 bg-white p-4">
                  <div className="grid grid-cols-[48px_1fr] gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-slate-200" />
                      <div className="absolute bottom-0 left-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 [-writing-mode:vertical-rl] rotate-180">
                        Business impact
                      </div>
                    </div>
                    <div className="grid h-[270px] grid-cols-2 grid-rows-2 gap-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Low impact / low complexity</div>
                        <div className="mt-3 text-sm text-slate-600">Use selectively for fast learning, but do not over-invest.</div>
                      </div>
                      <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 shadow-sm">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">High impact / low complexity</div>
                        <div className="mt-3 text-sm text-slate-700">Best pilot zone for early enterprise momentum and business confidence.</div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Low impact / high complexity</div>
                        <div className="mt-3 text-sm text-slate-600">Usually defer until stronger value logic or platform maturity exists.</div>
                      </div>
                      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 shadow-sm">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">High impact / high complexity</div>
                        <div className="mt-3 text-sm text-slate-700">Pursue after pilot learning stabilizes the operating model.</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pl-12 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Complexity →
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-semibold text-slate-950">Success metrics must be explicit</div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-600">Define what success means across adoption, quality, speed, cost, or risk before implementation begins.</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-semibold text-slate-950">Data work is the hidden effort</div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-600">Preparation, cleansing, and validation often absorb the majority of pilot effort and must be planned realistically.</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-semibold text-slate-950">Stakeholder champions accelerate scale</div>
                    <div className="mt-1 text-sm leading-relaxed text-slate-600">The right sponsors and pilot advocates help translate local wins into enterprise-wide confidence.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            {pilotPrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-blue-900/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 style={serif} className="text-2xl font-semibold leading-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{item.text}</p>
                    </div>
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

function ScaleSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[0.98fr_1.02fr] xl:items-start">
          <div>
            <SectionHeader
              eyebrow="Scaling AI across the enterprise"
              title="What works in one pilot must become repeatable across the business"
              description="Enterprise scale requires phased rollout, standards, a center of excellence, and disciplined capability building. Without these, successful pilots remain isolated wins."
            />

            <div className="space-y-4">
              {scaleSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className={`absolute left-0 top-0 h-full w-1.5 rounded-l-[28px] ${
                      index === 0
                        ? "bg-gradient-to-b from-cyan-400 to-sky-500"
                        : index === 1
                        ? "bg-gradient-to-b from-sky-500 to-indigo-500"
                        : index === 2
                        ? "bg-gradient-to-b from-indigo-500 to-blue-500"
                        : "bg-gradient-to-b from-blue-500 to-cyan-400"
                    }`} />
                    <div className="ml-3 flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step {item.step}</div>
                        <h3 style={serif} className="mt-2 text-2xl font-semibold leading-tight text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
                  alt="Global enterprise AI scaling network"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/15 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/85">Scale lens</div>
                  <div className="mt-2 text-lg font-semibold text-white md:text-xl">
                    Scaling is an enterprise design challenge—not only a model deployment exercise.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 style={serif} className="mt-5 text-2xl font-semibold leading-tight text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MonitoringSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
          <div className="rounded-[32px] border border-slate-200 bg-[#071857] p-6 text-white shadow-sm md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">Performance monitoring and optimization</div>
                <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Once live, AI must be observed like a critical business system
                </h3>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                <Gauge className="h-5 w-5" />
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/82 md:text-base">
              Monitoring should connect technical signals to business outcomes. That means watching data drift, model behavior, adoption patterns, and actual operational impact together.
            </p>

            <div className="mt-6 grid gap-4 xl:grid-cols-[0.96fr_1.04fr]">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/70">Operational dashboard snapshot</div>
                <div className="mt-5 space-y-4">
                  {[
                    ["Model health", "94%", "Stable and within tolerance"],
                    ["Data drift", "Low", "No material divergence detected"],
                    ["Business uplift", "+18%", "Measured improvement versus baseline"],
                    ["User adoption", "82%", "Strong usage with targeted support needed"],
                  ].map(([label, value, note]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-white">{label}</div>
                          <div className="mt-1 text-sm text-blue-100/75">{note}</div>
                        </div>
                        <div className="text-2xl font-semibold text-cyan-200">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/70">Continuous improvement loop</div>
                <div className="mt-5 grid gap-3">
                  {[
                    "Monitor model and process behavior in production",
                    "Detect drift, exceptions, or degraded business outcomes",
                    "Retrain, tune, or test new approaches safely",
                    "Capture user feedback and operational insight",
                    "Re-release improvements with measurable controls",
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-semibold text-white">
                        {index + 1}
                      </div>
                      <div className="text-sm leading-relaxed text-blue-50">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Optimization essentials"
              title="Continuous improvement keeps AI relevant, accurate, and valuable"
              description="Enterprise AI is not static. Business conditions change, data changes, and user expectations evolve. Strong optimization disciplines keep the solution aligned to reality."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              {monitorCards.map((card) => {
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section id="governance" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(10,36,99,0.05)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Risk management and governance"
          title="Enterprise trust is built through control, resilience, and accountability"
          description="Governance is what allows AI to move safely from innovation agenda to operating backbone. It protects performance, privacy, compliance, continuity, and decision quality."
          align="center"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {governanceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-100/50 blur-2xl" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A2463] to-[#0f4c81] text-white shadow-lg shadow-blue-900/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 style={serif} className="mt-5 text-2xl font-semibold leading-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-[34px] border border-slate-200 bg-[linear-gradient(135deg,#071857_0%,#0b2d7e_55%,#0f4c81_100%)] shadow-2xl shadow-blue-900/10">
          <div className="grid gap-8 px-6 py-8 md:px-8 md:py-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Scale className="h-3.5 w-3.5 text-cyan-300" /> Governance signal
              </div>
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                The organizations that scale AI well govern it like enterprise infrastructure—not like experimental software.
              </h3>
            </div>
            <div className="grid gap-3">
              {implementationSignals.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-3 text-sm text-blue-50">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan-200 font-semibold">
                    0{index + 1}
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 px-6 py-8 md:px-8 md:py-10 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0A2463]">
                <Sparkles className="h-3.5 w-3.5" /> Next step with Duanamize
              </div>
              <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Turn AI ambition into a scalable implementation roadmap
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-lg">
                Duanamize helps enterprises align AI with business priorities, design the right pilot strategy, build implementation capability, and establish governance that supports confident scale.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-950">What this engagement can unlock</div>
                <div className="mt-3 grid gap-3">
                  {[
                    "A structured AI implementation roadmap grounded in business value",
                    "Pilot opportunities prioritized by impact, feasibility, and stakeholder readiness",
                    "Governance, monitoring, and capability-building plans designed for enterprise scale",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A2463] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Explore Agentic Automation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DuanamizeAiImplementationBestPracticesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <StrategySection />
      <PilotSection />
      <ScaleSection />
      <MonitoringSection />
      <GovernanceSection />
      <CTASection />
    </div>
  );
}
