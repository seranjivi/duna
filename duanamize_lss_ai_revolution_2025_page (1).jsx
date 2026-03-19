import React from "react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Cpu,
  Database,
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
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const headlineStats = [
  { label: "Faster improvement cycles", value: "40%" },
  { label: "More accurate root-cause identification", value: "60%" },
  { label: "Greater sustainability of improvements", value: "35%" },
];

const evolutionBlocks = [
  {
    title: "Traditional Lean Six Sigma",
    tag: "Proven foundation",
    text:
      "Built on DMAIC structure, statistical discipline, and expert-led analysis. Strong for controlled environments, but slower when process data is fragmented or complex.",
  },
  {
    title: "What changed in 2025",
    tag: "New business reality",
    text:
      "Organizations now operate with higher data volume, more process interdependencies, tighter margins, and less time for manual analysis. Improvement teams need faster insight and stronger prediction.",
  },
  {
    title: "LSS+AI Methodology",
    tag: "Next evolution",
    text:
      "AI strengthens Lean Six Sigma with automated data processing, machine-driven pattern detection, and predictive optimization—while retaining human judgment and governance.",
  },
];

const coreComponents = [
  {
    title: "Automated data collection and processing",
    icon: Database,
    description:
      "AI-powered systems continuously gather and process data from enterprise platforms, reducing manual effort and improving process visibility.",
    bullets: [
      "Cuts manual collection time and errors",
      "Creates live visibility across process steps",
      "Surfaces trends and anomalies earlier",
    ],
  },
  {
    title: "Intelligent root-cause analysis",
    icon: BrainCircuit,
    description:
      "Machine learning evaluates many correlations at once, uncovering multi-variable dependencies that human analysis alone may miss.",
    bullets: [
      "Improves analytical depth",
      "Finds hidden drivers across variables",
      "Supports higher confidence diagnosis",
    ],
  },
  {
    title: "Predictive process optimization",
    icon: LineChart,
    description:
      "Instead of waiting for issues to happen, AI models forecast risk and recommend preventive action, shifting improvement from reactive to proactive.",
    bullets: [
      "Predicts likely performance issues",
      "Supports preventive intervention",
      "Strengthens control over long-term outcomes",
    ],
  },
];

const comparisonRows = [
  {
    metric: "Data handling",
    traditional: "Periodic, manual, sample-based analysis",
    ai: "Continuous, automated, multi-source processing",
  },
  {
    metric: "Insight generation",
    traditional: "Dependent on analyst time and experience",
    ai: "Pattern recognition across large variable sets",
  },
  {
    metric: "Problem solving style",
    traditional: "Reactive after performance decline",
    ai: "Predictive and preventive before impact escalates",
  },
  {
    metric: "Speed to action",
    traditional: "Slower due to collection and interpretation effort",
    ai: "Faster due to automation and live intelligence",
  },
  {
    metric: "Sustainability",
    traditional: "Requires periodic manual follow-up",
    ai: "Strengthened through monitoring and adaptive recommendations",
  },
];

const caseStudies = [
  {
    title: "Global manufacturing",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
    result: "$18M annual savings",
    text:
      "A manufacturing organization used LSS+AI to identify production parameters that manual analysis had not detected, improving overall equipment effectiveness by 25% within six months.",
  },
  {
    title: "Regional healthcare system",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    result: "45% lower ED wait times",
    text:
      "A hospital system used AI-enhanced flow optimization to reduce emergency department wait times while raising patient satisfaction by 22 points through real-time operational adjustments.",
  },
  {
    title: "Complex service operations",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
    result: "Higher decision quality",
    text:
      "Organizations in regulated and high-volume environments are using LSS+AI to strengthen compliance checks, service performance, and resource allocation with greater speed and consistency.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Assess data readiness",
    text:
      "Establish data quality, completeness, and access across systems before introducing AI models into the improvement lifecycle.",
  },
  {
    number: "02",
    title: "Pilot targeted use cases",
    text:
      "Start where measurable pain points exist—high manual effort, slow diagnosis, unstable process performance, or recurring variation.",
  },
  {
    number: "03",
    title: "Prepare teams for adoption",
    text:
      "Use change management to position AI as an enhancement to expert capability, not a replacement for Lean Six Sigma practitioners.",
  },
  {
    number: "04",
    title: "Train for hybrid capability",
    text:
      "Combine Lean Six Sigma knowledge with AI literacy so teams understand how to interpret, govern, and act on machine-generated insight.",
  },
];

const readinessChecks = [
  "Reliable enterprise data sources are available",
  "Improvement teams are open to AI-assisted analysis",
  "Business stakeholders support pilot-led rollout",
  "Governance exists for model review and decision ownership",
  "KPIs are defined for speed, quality, cost, and sustainability",
  "Executive sponsors want proactive—not only reactive—process control",
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

function Header() {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 md:px-8">
      <LogoMark />

      <nav className="hidden items-center gap-6 text-sm text-blue-50/90 lg:flex">
        <a href="#" className="transition-colors hover:text-white">Home</a>
        <a href="#" className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-white">
          Approach <ChevronDown className="h-3.5 w-3.5" />
        </a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">
          Solutions <ChevronDown className="h-3.5 w-3.5" />
        </a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">
          Industries <ChevronDown className="h-3.5 w-3.5" />
        </a>
        <a href="#" className="transition-colors hover:text-white">Results</a>
        <a href="#" className="transition-colors hover:text-white">About Us</a>
      </nav>

      <div className="flex items-center gap-2">
        <button className="hidden rounded-full border border-white/25 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 md:inline-flex">
          Contact Us
        </button>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
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

      <Header />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-4 md:px-8 md:pb-20 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
            <span>Approach</span>
            <span>•</span>
            <span>LSS+AI Methodology</span>
            <span>•</span>
            <span className="text-white">How AI-Enhanced Lean Six Sigma is Revolutionizing Process Improvement in 2025</span>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
            <BrainCircuit className="h-3.5 w-3.5 text-cyan-300" />
            2025 Perspective
          </div>

          <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            How AI-Enhanced Lean Six Sigma
            <span className="mt-2 block text-cyan-200">is revolutionizing process improvement</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Lean Six Sigma remains a proven improvement framework. In 2025, its next leap comes from AI—bringing faster analysis, stronger diagnosis, predictive control, and a more scalable path to operational excellence.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {headlineStats.map((item) => (
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
                alt="AI-enhanced process improvement"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/35 to-transparent" />

              <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">
                  <span>Operational intelligence view</span>
                  <span className="rounded-full border border-white/15 px-2 py-1 text-[10px] text-white">2025 model</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Collect", "Automated"],
                    ["Analyze", "AI-assisted"],
                    ["Act", "Predictive"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-white/10 bg-white/10 p-3">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-blue-100/70">{k}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-cyan-100/80">Traditional limit</div>
                    <div className="mt-2 text-lg font-semibold text-white">Human-led, periodic insight</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-blue-100/70">LSS+AI advantage</div>
                    <div className="mt-2 text-lg font-semibold text-white">Continuous and predictive improvement</div>
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

function EvolutionSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="The evolution beyond traditional Lean Six Sigma"
          title="From structured improvement to intelligent improvement"
          description="Traditional Lean Six Sigma has served organizations well for decades. What is changing is not the need for discipline—it is the need for more speed, more analytical depth, and more predictive capability in increasingly complex operating environments."
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {evolutionBlocks.map((item, index) => (
            <div key={item.title} className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="absolute right-4 top-3 text-7xl font-semibold text-slate-100">0{index + 1}</div>
              <div className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.tag}</div>
              <h3 style={serif} className="relative z-10 mt-3 text-3xl font-semibold leading-tight text-slate-950">
                {item.title}
              </h3>
              <p className="relative z-10 mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreComponentsSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Core components of LSS+AI integration"
          title="Three capabilities that change how improvement teams operate"
          description="The strength of LSS+AI lies in how it embeds intelligence directly into the Lean Six Sigma lifecycle—automating what is slow, revealing what is hidden, and predicting what comes next."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {coreComponents.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-[linear-gradient(135deg,#0A2463_0%,#10317a_55%,#0f4c81_100%)] p-6 text-white">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 style={serif} className="mt-5 text-3xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100/85">{item.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {item.bullets.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
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

function ComparisonSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="What changes in practice"
          title="Traditional LSS and LSS+AI compared in an executive-friendly view"
          description="This is where the difference becomes clear. LSS+AI does not abandon Lean Six Sigma fundamentals. It changes the speed, scale, and intelligence with which they are applied."
        />

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[220px_1fr_1fr] border-b border-slate-200 bg-slate-50 lg:grid">
            <div className="p-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Dimension</div>
            <div className="border-l border-slate-200 p-5 text-sm font-semibold text-slate-900">Traditional Lean Six Sigma</div>
            <div className="border-l border-slate-200 bg-blue-50/60 p-5 text-sm font-semibold text-[#0A2463]">AI-Enhanced Lean Six Sigma</div>
          </div>

          <div>
            {comparisonRows.map((row, index) => (
              <div
                key={row.metric}
                className={`grid lg:grid-cols-[220px_1fr_1fr] ${index !== comparisonRows.length - 1 ? "border-b border-slate-200" : ""}`}
              >
                <div className="bg-slate-50 p-5 text-base font-semibold text-slate-900">{row.metric}</div>
                <div className="border-t border-slate-200 p-5 text-sm leading-relaxed text-slate-600 lg:border-l lg:border-t-0 lg:border-slate-200">
                  {row.traditional}
                </div>
                <div className="border-t border-slate-200 bg-blue-50/40 p-5 text-sm leading-relaxed text-slate-700 lg:border-l lg:border-t-0 lg:border-slate-200">
                  {row.ai}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsVisualSection() {
  return (
    <section className="bg-slate-100/70">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Results at a glance"
          title="A visual view of where AI creates measurable lift"
          description="The chart below is a directional visualization to make the message more consumable for executive readers. It highlights where LSS+AI typically outperforms traditional Lean Six Sigma in modern data-rich environments."
        />

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 xl:grid-cols-[320px_1fr]">
            <div className="border-b border-slate-200 bg-[#071857] p-6 text-white xl:border-b-0 xl:border-r">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">Performance lens</div>
              <h3 style={serif} className="mt-4 text-4xl font-semibold leading-tight text-white">
                Traditional vs LSS+AI
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-blue-100/85">
                Relative scoring across areas leaders care about most: speed, analytical depth, proactive control, and sustainability.
              </p>
            </div>

            <div className="p-6 md:p-8">
              {[ 
                { label: "Improvement cycle speed", traditional: 52, ai: 86 },
                { label: "Root-cause precision", traditional: 58, ai: 90 },
                { label: "Real-time process visibility", traditional: 42, ai: 92 },
                { label: "Predictive capability", traditional: 30, ai: 88 },
                { label: "Sustainability of gains", traditional: 60, ai: 84 },
              ].map((item) => (
                <div key={item.label} className="mb-5 last:mb-0">
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-semibold text-slate-800">{item.label}</span>
                    <span className="text-slate-500">Relative performance</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                        <span>Traditional</span>
                        <span>{item.traditional}</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-100">
                        <div className="h-3 rounded-full bg-slate-400" style={{ width: `${item.traditional}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                        <span>LSS+AI</span>
                        <span>{item.ai}</span>
                      </div>
                      <div className="h-3 rounded-full bg-blue-50">
                        <div className="h-3 rounded-full bg-gradient-to-r from-[#0A2463] to-cyan-400" style={{ width: `${item.ai}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Real-world implementation success"
          title="Examples that make the shift tangible"
          description="LSS+AI produces practical business results when it is applied with clear use cases, strong data, and disciplined rollout."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {caseStudies.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <Icon className="h-3.5 w-3.5" />
                    Case example
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {item.result}
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

function FrameworkSection() {
  return (
    <section className="relative overflow-hidden bg-[#061650]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.16),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          light
          eyebrow="Implementation framework for success"
          title="A practical path to adopting LSS+AI"
          description="Successful adoption depends on more than technology. It requires sound data, strong change management, skill building, and phased implementation with measurable outcomes."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {implementationSteps.map((step) => (
            <div key={step.number} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Step {step.number}</div>
              <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/82">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Change management reminder</div>
            <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
              AI should augment expertise, not replace it
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-blue-100/85 md:text-base">
              The strongest LSS+AI programs position AI as a force multiplier for practitioners. Human expertise remains central for framing the problem, validating insight, making trade-off decisions, and governing implementation.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Readiness checklist</div>
            <div className="mt-4 grid gap-3">
              {readinessChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
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

function ClosingSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463] shadow-sm">
                <TrendingUp className="h-3.5 w-3.5" />
                Final takeaway
              </div>
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                The future of process improvement belongs to hybrid intelligence
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                Organizations that combine Lean Six Sigma discipline with AI-driven analysis are better positioned to improve faster, diagnose deeper, and sustain gains more effectively. LSS+AI is not a departure from operational excellence. It is the next stage of it.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Previous page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  LSS+AI vs Traditional Lean Six Sigma: The Ultimate Comparison for Modern Organizations
                </div>
              </a>
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  How AI-Enhanced Lean Six Sigma is Revolutionizing Process Improvement in 2025
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                  In this section <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr_1fr] md:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Leading technology and management consulting firm specializing in AI, blockchain, Industry 4.0, and process optimization for global enterprises.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <Building2 className="h-3.5 w-3.5" /> 24/7 Global Support
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["Home", "Approach", "Solutions", "Industries", "Case Studies"].map((x) => (
              <li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["About Us", "Careers", "Client Stories", "Partner Inquiries", "FAQ"].map((x) => (
              <li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Useful Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["Privacy Policy", "Terms and Conditions", "Disclaimer", "Contact Us"].map((x) => (
              <li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact Us</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>+91 9884919972</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>selvan@duanamize.org</span>
            </li>
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>Duanamize Global Services Private Limited</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <div>© {new Date().getFullYear()} Duanamize Global Services Private Limited. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Privacy-conscious delivery</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Global support model</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LssAiRevolution2025Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <EvolutionSection />
      <CoreComponentsSection />
      <ComparisonSection />
      <ResultsVisualSection />
      <CaseStudiesSection />
      <FrameworkSection />
      <ClosingSection />
      <Footer />
    </div>
  );
}
