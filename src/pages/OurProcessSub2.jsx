import React from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Lightbulb,
  Mail,
  Menu,
  Network,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const serif = {
  fontFamily:
    '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const heroStats = [
  { value: "4", label: "Implementation phases across the program lifecycle" },
  { value: "40–60%", label: "Process variation often uncovered during discovery" },
  { value: "95%", label: "Project success rate with structured execution" },
];

const phaseCards = [
  {
    step: "01",
    title: "Discovery",
    duration: "Foundation phase",
    icon: Search,
    accent: "from-cyan-400 to-blue-500",
    summary:
      "Assess the real process, validate data quality, and prioritize improvement opportunities using evidence rather than assumptions.",
    bullets: [
      "AI-powered process assessment and current-state mapping",
      "Cross-system data collection, validation, and governance checks",
      "Opportunity sizing across cost, cycle time, quality, and experience",
    ],
  },
  {
    step: "02",
    title: "Solution Design",
    duration: "Future-state phase",
    icon: Layers3,
    accent: "from-blue-500 to-indigo-500",
    summary:
      "Convert opportunities into a practical future-state design with workshops, architecture decisions, simulation, and feasibility validation.",
    bullets: [
      "Collaborative design workshops and future-state process definition",
      "Technology architecture, controls, and implementation constraints",
      "Scenario simulation and validation before rollout begins",
    ],
  },
  {
    step: "03",
    title: "Implementation",
    duration: "Deployment phase",
    icon: Rocket,
    accent: "from-indigo-500 to-cyan-400",
    summary:
      "Deploy in controlled increments, enable adoption with training and change support, and monitor performance during rollout.",
    bullets: [
      "Agile delivery, pilots, and phased expansion",
      "Change management, communication, and role-based training",
      "Live monitoring to protect continuity and adjust quickly",
    ],
  },
  {
    step: "04",
    title: "Optimization",
    duration: "Sustainment phase",
    icon: BarChart3,
    accent: "from-cyan-400 to-emerald-400",
    summary:
      "Track outcomes in real time, stabilize the gains, and keep identifying new improvement opportunities as the system matures.",
    bullets: [
      "Automated KPI dashboards and balanced scorecards",
      "Continuous improvement culture and performance reviews",
      "Expansion roadmap for the next wave of enhancements",
    ],
  },
];

const blueprintMetrics = [
  {
    label: "Discovery inputs",
    value: "Assessment, data, opportunities",
    icon: Database,
  },
  {
    label: "Design outputs",
    value: "Future state, architecture, validation",
    icon: Layers3,
  },
  {
    label: "Implementation controls",
    value: "Pilots, training, phased rollout",
    icon: Workflow,
  },
  {
    label: "Optimization signals",
    value: "KPIs, alerts, continuous improvement",
    icon: Gauge,
  },
];

const discoveryDesignBlocks = [
  {
    eyebrow: "Phase 1",
    title: "Discovery builds the truth baseline",
    tone: "light",
    icon: Search,
    text:
      "The strongest implementations start by revealing how work actually flows. Process mining, system data, and current-state evidence expose variation that interviews alone rarely capture.",
    bullets: [
      "Real workflows instead of idealized documentation",
      "Data quality, standardization, and integration review",
      "Prioritized opportunity list with impact and feasibility scoring",
    ],
  },
  {
    eyebrow: "Phase 2",
    title: "Solution design turns insight into an executable blueprint",
    tone: "dark",
    icon: Layers3,
    text:
      "Design must do more than imagine a better process. It must define a future state that is technically viable, operationally sound, and ready to move into controlled implementation.",
    bullets: [
      "Collaborative workshops across process, business, and technology teams",
      "Future-state mapping with practical delivery constraints",
      "Simulation and digital testing before live deployment",
    ],
  },
];

const implementationTracks = [
  {
    title: "Agile deployment model",
    icon: GitBranch,
    text:
      "Roll out value in increments so the organization learns, adapts, and keeps business continuity intact.",
  },
  {
    title: "Pilot-first risk control",
    icon: Target,
    text:
      "Use controlled environments to validate fit, build confidence, and refine the solution before full-scale expansion.",
  },
  {
    title: "Change and capability enablement",
    icon: Lightbulb,
    text:
      "Support adoption through communication, training, and visible leadership sponsorship during the rollout window.",
  },
  {
    title: "Live performance monitoring",
    icon: Activity,
    text:
      "Track implementation health in real time so teams can intervene quickly when performance drifts or adoption slows.",
  },
];

const optimizationSignals = [
  {
    metric: "Financial impact",
    note: "Cost reduction, ROI capture, avoided cost, and value realization",
    width: "88%",
  },
  {
    metric: "Operational performance",
    note: "Cycle time, throughput, quality, adherence, and service consistency",
    width: "82%",
  },
  {
    metric: "Customer outcomes",
    note: "Experience improvements, resolution speed, and response quality",
    width: "72%",
  },
  {
    metric: "Workforce adoption",
    note: "Training completion, utilization, behavior change, and engagement",
    width: "78%",
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

function SectionHeader({ eyebrow, title, description, light = false, align = "left" }) {
  return (
    <div className={`mb-8 md:mb-10 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${light ? "border-white/20 bg-white/10 text-blue-100" : "border-blue-200 bg-white text-[#0A2463]"}`}>
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      )}
      <h2
        style={serif}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      <p className={`mt-3 ${align === "center" ? "mx-auto" : ""} text-sm leading-relaxed md:text-lg whitespace-normal ${light ? "text-blue-100/85" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071857]">
      <div className="absolute inset-0 opacity-90 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(45,212,191,0.16),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_65%_78%,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#071857] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.02fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
              <span>Approach</span>
              <span>•</span>
              <span>Our Process</span>
              <span>•</span>
              <span className="text-white">4-Phase Framework</span>
            </div>

            {/* <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
              <Network className="h-3.5 w-3.5 text-cyan-300" />
              Structured implementation system
            </div> */}

            <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              The Complete Guide to Process Improvement Implementation
              <span className="mt-2 block text-cyan-200">a proven 4-phase framework</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
              Breakthrough results rarely come from isolated tools or one-off workshops. They come from a disciplined implementation architecture that moves from discovery to design, deployment, and optimization with clear control at every stage.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#roadmap" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                View the 4-phase roadmap <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#signals" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                See optimization signals
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
              <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Program blueprint</div>
                    <div className="mt-1 text-lg font-semibold text-white">Implementation control map</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-blue-100">Operational view</div>
                </div>

                <div className="relative mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/85">Entry condition</div>
                    <div className="mt-2 text-lg font-semibold text-white">Validated current-state evidence</div>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/80">Assessment, data integrity, and prioritized opportunities define what enters the framework.</p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-blue-100/75">Exit condition</div>
                    <div className="mt-2 text-lg font-semibold text-white">Sustained performance improvement</div>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/80">KPI visibility, reinforced adoption, and ongoing optimization keep gains from degrading.</p>
                  </div>
                </div>

                <div className="relative mt-6 rounded-[30px] border border-white/10 bg-[#06123f]/80 p-5">
                  <div className="absolute left-8 right-8 top-[72px] hidden h-px bg-gradient-to-r from-cyan-400/40 via-blue-300/60 to-cyan-400/40 lg:block" />
                  <div className="grid gap-4 lg:grid-cols-4">
                    {phaseCards.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.step} className="relative rounded-[24px] border border-white/10 bg-white/5 p-4">
                          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-cyan-900/20`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/65">Phase {item.step}</div>
                          <div className="mt-1 text-lg font-semibold text-white">{item.title}</div>
                          <div className="mt-1 text-xs text-cyan-100/75">{item.duration}</div>
                          <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2 text-xs text-blue-100/80">
                            {item.title === "Discovery" && "Assess"}
                            {item.title === "Solution Design" && "Architect"}
                            {item.title === "Implementation" && "Deploy"}
                            {item.title === "Optimization" && "Sustain"}
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
    </section>
  );
}

function BlueprintSection() {
  return (
    <section className="relative border-b border-slate-200 bg-white">
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(10,36,99,0.05),rgba(10,36,99,0))]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          // eyebrow="Framework architecture"
          title="Structured Framework Architecture"
          description="Turning structured insight into reliable outcomes This framework ensures a seamless progression from insight to execution. Each phase is clearly defined with specific objectives, deliverables, and transition points enabling controlled implementation that is both repeatable and scalable across initiatives."
        />

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid gap-0 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="border-b border-slate-200 bg-[#071857] p-6 text-white xl:border-b-0 xl:border-r md:p-8">
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                <Cpu className="h-3.5 w-3.5" />
                Control logic
              </div> */}
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Every phase feeds the next with a clearer operating signal
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-blue-100/85 md:text-base">
                Discovery clarifies the truth, design defines the future state, implementation activates the change, and optimization keeps the value alive through continuous visibility.
              </p>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              {blueprintMetrics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`p-6 md:p-7 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"} ${index < 2 ? "border-b border-slate-200" : ""} ${index % 2 === 0 ? "md:border-r" : ""} border-slate-200`}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
                    <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">{item.value}</div>
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

function DiscoveryDesignSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <div className="space-y-6">
            {discoveryDesignBlocks.map((block) => {
              const Icon = block.icon;
              const dark = block.tone === "dark";
              return (
                <div key={block.title} className={`overflow-hidden rounded-[30px] border shadow-sm ${dark ? "border-slate-900 bg-slate-950" : "border-slate-200 bg-white"}`}>
                  <div className={`p-6 md:p-7 ${dark ? "border-b border-white/10" : "border-b border-slate-200 bg-slate-50"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-cyan-200/80" : "text-slate-500"}`}>{block.eyebrow}</div>
                        <h3 style={serif} className={`mt-3 text-3xl font-semibold leading-tight ${dark ? "text-white" : "text-slate-950"}`}>
                          {block.title}
                        </h3>
                      </div>
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${dark ? "border-white/10 bg-white/5 text-white" : "border-blue-200 bg-white text-[#0A2463]"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <p className={`mt-4 text-sm leading-relaxed md:text-base ${dark ? "text-white" : "text-slate-600"}`}>{block.text}</p>
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="grid gap-3">
                      {block.bullets.map((point) => (
                        <div key={point} className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-relaxed ${dark ? "border-white/10 bg-white/5 text-blue-50" : "border-slate-200 bg-slate-50 text-slate-700"}`}>
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 ${dark ? "text-cyan-300" : "text-cyan-500"}`} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative min-h-[760px]">
            <div className="sticky top-6 rounded-[34px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="overflow-hidden rounded-[28px] border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
                  alt="Business team designing future-state process"
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="mt-5 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why these two phases matter most</div>
                <div className="mt-3 grid gap-3">
                  {[
                    "Without strong discovery, the project solves the wrong problem.",
                    "Without disciplined design, the future state remains conceptual rather than deployable.",
                    "Together, these phases convert ambiguity into an executable improvement plan.",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[28px] border border-blue-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A2463]">Design validation lens</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Business fit", "Does the future state solve the right operational pain points?"],
                    ["Technical fit", "Can the architecture and data ecosystem support it safely?"],
                    ["Adoption fit", "Can teams learn and operate the change realistically?"],
                    ["Scale fit", "Can the model expand beyond the first pilot site or team?"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-blue-100 bg-white px-4 py-3">
                      <div className="text-sm font-semibold text-slate-950">{title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-slate-600">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="relative overflow-hidden bg-[#061650]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.16),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          light
          // eyebrow="4-phase roadmap"
          title="A milestone-driven implementation sequence"
          description="The handoff between phases is where many programs fail. This roadmap makes those transitions explicit so the organization always knows what has been established, what is being activated, and what must be monitored next."
        />

        <div className="relative mt-10">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 xl:block" />
          <div className="space-y-6">
            {phaseCards.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;
              return (
                <div key={item.step} className="grid gap-4 xl:grid-cols-2 xl:gap-12 xl:items-center">
                  <div className={`${left ? "xl:pr-8" : "xl:order-2 xl:pl-8"}`}>
                    <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Phase {item.step}</div>
                          <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">{item.title}</h3>
                          <div className="mt-2 text-sm text-blue-100/75">{item.duration}</div>
                        </div>
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-cyan-900/25`}>
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-white md:text-base">{item.summary}</p>

                      <div className="mt-5 grid gap-3">
                        {item.bullets.map((point) => (
                          <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-blue-50">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`hidden xl:flex ${left ? "justify-start" : "order-1 justify-end"}`}>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_0_10px_rgba(255,255,255,0.03)]">
                      <div className="text-lg font-semibold text-white">{item.step}</div>
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

function ImplementationSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div>
            <SectionHeader
              // eyebrow="Phase 3 in focus"
              title="Implementation succeeds when deployment and adoption move together"
              description="Technical rollout alone is not enough. Modern implementation requires phased delivery, pilot control, business continuity, training, and real-time performance visibility throughout the rollout window."
            />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="grid gap-0 md:grid-cols-2">
                {implementationTracks.map((track, index) => {
                  const Icon = track.icon;
                  return (
                    <div
                      key={track.title}
                      className={`p-6 md:p-7 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "md:border-r" : ""} border-slate-200`}
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 style={serif} className="mt-4 text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
                        {track.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{track.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative min-h-[620px]">
            <div className="absolute left-0 top-0 h-[280px] w-[78%] overflow-hidden rounded-[34px] border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                alt="Implementation and rollout workshop"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[88%] rounded-[32px] border border-slate-200 bg-[#071857] p-6 text-white shadow-xl md:p-7">
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                <Workflow className="h-3.5 w-3.5" />
                Deployment governance
              </div> */}
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Controlled rollout is what turns a design into a reliable operating model
              </h3>
              <div className="mt-5 grid gap-3">
                {[
                  "Use pilots to de-risk scale-up decisions before enterprise deployment.",
                  "Sequence rollout in manageable increments so teams can adapt with confidence.",
                  "Protect business continuity with monitoring, escalation paths, and rapid adjustment.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-blue-50">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OptimizationSection() {
  return (
    <section id="signals" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          // eyebrow="Phase 4 in focus"
          title="Optimization is where the value becomes durable"
          description="The framework does not end at go-live. Optimization keeps improvement visible, measurable, and extensible through balanced monitoring across financial, operational, customer, and workforce dimensions."
        />

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0A2463]">
              <Gauge className="h-3.5 w-3.5" />
              Monitoring design
            </div> */}
            <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
              Real-time visibility is the control system for sustained improvement
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Dashboards, alerts, scorecards, and review cadences make it possible to protect the gains, respond to drift quickly, and identify the next improvement wave before momentum is lost.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                "Align KPIs directly to business objectives rather than reporting for reporting’s sake.",
                "Use balanced scorecards to combine financial, operational, customer, and employee measures.",
                "Embed continuous improvement routines so optimization becomes part of normal management.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-[#071857] p-6 text-white md:p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">Optimization signal board</div>
              <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Four measurement lenses for value realization
              </h3>
            </div>
            <div className="p-6 md:p-7">
              <div className="space-y-5">
                {optimizationSignals.map((item) => (
                  <div key={item.metric}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-slate-900">{item.metric}</span>
                      <span className="text-slate-500">Priority visibility</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div className="h-3 rounded-full bg-gradient-to-r from-[#0A2463] via-blue-500 to-cyan-400" style={{ width: item.width }} />
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463] shadow-sm">
                <Target className="h-3.5 w-3.5" />
                Final perspective
              </div> */}
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                A proven framework gives process improvement the structure required for enterprise-grade execution
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                Organizations that sequence discovery, design, implementation, and optimization deliberately are far more likely to achieve sustained performance gains, lower risk, and measurable business value.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Previous page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  Mastering Change Management in Process Improvement
                </div>
                 <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                  View Page <ArrowRight className="h-4 w-4" />
                </div>
              </a>
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  The Complete Guide to Process Improvement Implementation
                </div>
                {/* <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                  4-phase framework view <ArrowRight className="h-4 w-4" />
                </div> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProcessImprovementImplementationFrameworkPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <BlueprintSection />
      <DiscoveryDesignSection />
      <RoadmapSection />
      <ImplementationSection />
      <OptimizationSection />
      <ClosingSection />
    </div>
  );
}
