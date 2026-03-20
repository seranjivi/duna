import React from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  ChevronDown,
  Clock3,
  Cpu,
  Factory,
  HeartPulse,
  Landmark,
  LineChart,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const heroStats = [
  { label: "Faster project timelines", value: "40–50%" },
  { label: "Better root-cause accuracy", value: "+60%" },
  { label: "Higher sustainability", value: "+35%" },
];

const comparisonCards = [
  {
    title: "Traditional Lean Six Sigma",
    tone: "traditional",
    icon: Target,
    intro:
      "A proven model built on DMAIC discipline, statistical rigor, and structured improvement governance.",
    points: [
      "Strong in stable environments with clear process definitions",
      "Works well where teams can dedicate time to detailed manual analysis",
      "Delivers measurable results through a disciplined methodology",
      "Often slowed by manual data collection and periodic review cycles",
      "Can struggle with high data volume, complex interdependencies, and delayed insight",
    ],
  },
  {
    title: "LSS+AI Methodology",
    tone: "modern",
    icon: BrainCircuit,
    intro:
      "A hybrid model that preserves Lean Six Sigma rigor while adding AI-enabled speed, intelligence, and predictive control.",
    points: [
      "Retains structured problem solving and statistical foundations",
      "Automates data collection, monitoring, and routine analysis",
      "Detects patterns across many variables beyond human analytical limits",
      "Supports real-time insight, faster action, and proactive risk prevention",
      "Allows experts to focus on decisions, strategy, and implementation",
    ],
  },
];

const metricRows = [
  {
    metric: "Implementation speed",
    traditional: "3–6 months in many projects due to manual collection, analysis, and staged reviews.",
    ai: "2–4 months with faster data processing, automated analysis, and live monitoring.",
    icon: Clock3,
  },
  {
    metric: "Resource requirements",
    traditional: "High human effort for gathering, cleaning, and interpreting data.",
    ai: "Routine analysis is automated so experts can focus on decisions and execution.",
    icon: Workflow,
  },
  {
    metric: "Analytical depth",
    traditional: "Limited by human capacity to evaluate large variable sets and complex dependencies.",
    ai: "Machine learning can surface hidden correlations and multi-variable relationships.",
    icon: BarChart3,
  },
  {
    metric: "Operating model",
    traditional: "Largely reactive, with issues addressed after they affect performance.",
    ai: "Shifts improvement toward predictive and preventive process management.",
    icon: TrendingUp,
  },
  {
    metric: "Sustainability of gains",
    traditional: "Improvements can degrade without frequent intervention and manual follow-up.",
    ai: "Continuous monitoring and recommendation engines improve long-term stability.",
    icon: ShieldCheck,
  },
];

const pillars = [
  {
    title: "Speed and efficiency",
    icon: Zap,
    description:
      "AI-powered collection and analysis reduce manual effort and compress improvement cycles without sacrificing methodological rigor.",
  },
  {
    title: "Accuracy and insight",
    icon: Cpu,
    description:
      "Machine learning identifies patterns and relationships that human review alone may never surface.",
  },
  {
    title: "Predictive capability",
    icon: LineChart,
    description:
      "Organizations move from reacting to performance issues toward anticipating and preventing them earlier.",
  },
];

const industries = [
  {
    title: "Manufacturing excellence",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
    text:
      "AI-enhanced Lean Six Sigma helps optimize production conditions by analyzing equipment, quality, and environmental variables together.",
  },
  {
    title: "Healthcare optimization",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    text:
      "Healthcare teams benefit from real-time adaptation across patient demand, clinical protocols, and resource availability.",
  },
  {
    title: "Financial services transformation",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
    text:
      "Financial institutions use LSS+AI for fraud detection, risk review, compliance support, and customer experience improvement.",
  },
];

const rolloutSteps = [
  {
    number: "01",
    title: "Start with focused pilots",
    description:
      "Choose high-value use cases where AI can demonstrate faster analysis, stronger diagnosis, and visible business impact.",
  },
  {
    number: "02",
    title: "Build confidence through change management",
    description:
      "Position AI as an enhancement to expert capability, not a replacement for process excellence teams.",
  },
  {
    number: "03",
    title: "Develop dual capability",
    description:
      "Train teams on both Lean Six Sigma fundamentals and practical AI literacy so adoption is grounded and sustainable.",
  },
  {
    number: "04",
    title: "Scale with governance",
    description:
      "Expand after pilots using defined metrics, operational controls, and clear ownership of business outcomes.",
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

function SectionHeader({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-8 md:mb-10">
      <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${light ? "border-white/20 bg-white/10 text-blue-100" : "border-blue-200 bg-white text-[#0A2463]"}`}>
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2
        style={serif}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      <p className={`mt-3 max-w-3xl text-sm leading-relaxed md:text-lg ${light ? "text-blue-100/85" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071857]">
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.20),transparent_32%),radial-gradient(circle_at_45%_75%,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-4 md:px-8 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
            <span>Approach</span>
            <span>•</span>
            <span>LSS+AI Methodology</span>
            <span>•</span>
            <span className="text-white">Comparison</span>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
            <BrainCircuit className="h-3.5 w-3.5 text-cyan-300" />
            LSS+AI Methodology
          </div>

          <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            LSS+AI vs Traditional Lean Six Sigma
            <span className="mt-2 block text-cyan-200">The ultimate comparison for modern organizations</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Organizations today must decide whether to remain with traditional Lean Six Sigma alone or evolve toward an
            AI-enhanced operating model. This page compares both approaches across speed, insight, resource effort,
            sustainability, and predictive capability.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                <div className="text-2xl font-semibold text-white md:text-3xl">{item.value}</div>
                <div className="mt-1 text-sm leading-relaxed text-blue-100/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
            <div className="relative h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                alt="AI-enabled process excellence"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/35 to-transparent" />

              <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">
                  <span>Transformation view</span>
                  <span className="rounded-full border border-white/15 px-2 py-1 text-[10px] text-white">Live comparison</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-blue-100/70">Traditional model</div>
                    <div className="mt-1 text-sm font-semibold text-white">Structured and proven</div>
                    <div className="mt-1 text-xs text-blue-100/75">Strong rigor, slower execution</div>
                  </div>
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-cyan-100/80">LSS+AI model</div>
                    <div className="mt-1 text-sm font-semibold text-white">Faster and predictive</div>
                    <div className="mt-1 text-xs text-blue-100/75">Live insight, proactive control</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-blue-100/70">Speed</div>
                    <div className="mt-2 text-lg font-semibold text-white">Automated analysis</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-blue-100/70">Insight</div>
                    <div className="mt-2 text-lg font-semibold text-white">Multi-variable pattern detection</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-blue-100/70">Operating model</div>
                    <div className="mt-2 text-lg font-semibold text-white">Reactive to predictive</div>
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

function OpeningSummary() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Executive summary"
            title="Why organizations are moving beyond traditional Lean Six Sigma"
            description="Traditional Lean Six Sigma has delivered real value for decades through structured DMAIC thinking and statistical discipline. Yet modern organizations now operate in faster, more interconnected environments where data volume, complexity, and timing demand greater analytical speed and intelligence."
          />
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0A2463]">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 style={serif} className="mt-4 text-2xl font-semibold text-slate-950">Traditional challenge</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Manual data collection can consume 40–60% of project time, while human analysis alone can miss hidden
                drivers across thousands of variables.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50 to-cyan-50 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 style={serif} className="mt-4 text-2xl font-semibold text-slate-950">LSS+AI response</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                AI strengthens Lean Six Sigma by accelerating analysis, improving root-cause precision, and enabling
                proactive intervention before issues damage performance.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Bottom line</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
              LSS+AI does not replace Lean Six Sigma. It modernizes it. The methodology keeps the proven structure of
              traditional improvement while adding the speed, depth, and predictive capability required for today’s
              complex business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonOverview() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Side-by-side overview"
          title="Two methodologies, very different operating realities"
          description="Both approaches share process improvement intent, but they differ sharply in how they handle data, speed, complexity, and decision support in modern enterprise environments."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {comparisonCards.map((card) => {
            const Icon = card.icon;
            const modern = card.tone === "modern";
            return (
              <div
                key={card.title}
                className={`overflow-hidden rounded-[30px] border shadow-sm ${modern ? "border-cyan-200 bg-[linear-gradient(180deg,#f8fdff_0%,#eef9ff_100%)]" : "border-slate-200 bg-white"}`}
              >
                <div className={`p-6 md:p-7 ${modern ? "bg-[linear-gradient(135deg,#0A2463_0%,#10317a_55%,#0f4c81_100%)] text-white" : "bg-slate-50"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${modern ? "text-cyan-100/85" : "text-slate-500"}`}>
                        {modern ? "AI-enhanced model" : "Established model"}
                      </div>
                      <h3 style={serif} className={`mt-2 text-3xl font-semibold leading-tight ${modern ? "text-white" : "text-slate-950"}`}>
                        {card.title}
                      </h3>
                    </div>
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl border ${modern ? "border-white/15 bg-white/10 text-white" : "border-slate-200 bg-white text-[#0A2463]"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className={`mt-4 max-w-2xl text-sm leading-relaxed ${modern ? "text-blue-100/85" : "text-slate-600"}`}>
                    {card.intro}
                  </p>
                </div>
                <div className="p-6 md:p-7">
                  <div className="space-y-3">
                    {card.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                        <div className={`mt-1 h-2.5 w-2.5 rounded-full ${modern ? "bg-cyan-500" : "bg-[#0A2463]"}`} />
                        <div>{point}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PerformanceTable() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Comparative analysis"
          title="Key performance indicators that matter to leadership"
          description="The most meaningful difference is not cosmetic. It is operational. LSS+AI changes how quickly teams can diagnose issues, how deeply they can analyze complexity, and how sustainably they can hold gains over time."
        />

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[230px_1fr_1fr] border-b border-slate-200 bg-slate-50 lg:grid">
            <div className="p-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Metric</div>
            <div className="border-l border-slate-200 p-5 text-sm font-semibold text-slate-900">Traditional Lean Six Sigma</div>
            <div className="border-l border-slate-200 bg-blue-50/60 p-5 text-sm font-semibold text-[#0A2463]">LSS+AI Methodology</div>
          </div>

          <div>
            {metricRows.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.metric}
                  className={`grid lg:grid-cols-[230px_1fr_1fr] ${index !== metricRows.length - 1 ? "border-b border-slate-200" : ""}`}
                >
                  <div className="flex items-start gap-3 border-b border-slate-200 bg-slate-50 p-5 lg:border-b-0">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-white text-[#0A2463]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Metric</div>
                      <div className="mt-1 text-base font-semibold text-slate-900">{row.metric}</div>
                    </div>
                  </div>
                  <div className="p-5 text-sm leading-relaxed text-slate-600 lg:border-l lg:border-slate-200">{row.traditional}</div>
                  <div className="bg-blue-50/40 p-5 text-sm leading-relaxed text-slate-700 lg:border-l lg:border-slate-200">{row.ai}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdvantagePillars() {
  return (
    <section className="bg-slate-100/70">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Why LSS+AI is different"
          title="Three reasons the hybrid model outperforms traditional approaches"
          description="The superiority of LSS+AI comes from combining process discipline with intelligence at scale rather than choosing one over the other."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 style={serif} className="mt-5 text-3xl font-semibold leading-tight text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryApplications() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Industry-specific applications"
          title="Where the difference becomes most visible"
          description="LSS+AI becomes especially powerful where processes are high-volume, highly variable, or dependent on many moving parts that traditional analysis alone cannot easily absorb."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <Icon className="h-3.5 w-3.5" />
                    Industry use case
                  </div>
                </div>
                <div className="p-6">
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImplementationStrategy() {
  return (
    <section className="relative overflow-hidden bg-[#061650]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.16),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          light
          eyebrow="Implementation strategy considerations"
          title="How organizations should transition from traditional LSS to LSS+AI"
          description="The best path is phased, practical, and confidence-building. Organizations should prove value through pilots, support teams through change, and scale with training and governance rather than attempting a disruptive leap all at once."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {rolloutSteps.map((step) => (
            <div key={step.number} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Step {step.number}</div>
              <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/82">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Leadership takeaway</div>
              <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                The evidence supports LSS+AI as the stronger model for modern process improvement
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/85 md:text-base">
                For organizations operating in complex, data-driven environments, LSS+AI offers a more capable model than
                traditional Lean Six Sigma alone. It preserves rigor, improves speed, enhances analytical depth, and creates
                a path from reactive correction to predictive performance management.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-slate-950/30 p-5">
              <div className="grid gap-3">
                {[
                  "Stronger speed-to-value",
                  "Better decision support",
                  "Higher sustainability of outcomes",
                  "More scalable process intelligence",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
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

function RelatedNavigation() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463] shadow-sm">
                <Building2 className="h-3.5 w-3.5" />
                Related content
              </div>
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                Continue exploring the LSS+AI Methodology section
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                This comparison page is part of the broader LSS+AI Methodology stream under the Approach section.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  LSS+AI vs Traditional Lean Six Sigma: The Ultimate Comparison for Modern Organizations
                </div>
              </a>
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Next page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  How AI-Enhanced Lean Six Sigma is Revolutionizing Process Improvement in 2025
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                  View page <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LssAiComparisonPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <OpeningSummary />
      <ComparisonOverview />
      <PerformanceTable />
      <AdvantagePillars />
      <IndustryApplications />
      <ImplementationStrategy />
      <RelatedNavigation />
    </div>
  );
}
