import React from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  LineChart,
  Menu,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Cpu,
  Building2,
  Mail,
  Phone,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "40–50%", label: "Faster improvement cycles" },
  { value: "+60%", label: "Better root-cause accuracy" },
  { value: "+35%", label: "Stronger sustainability" },
];

const methodologyPillars = [
  {
    icon: Target,
    title: "Lean Six Sigma discipline",
    text: "Structured problem solving, process rigor, and measurable control remain at the core.",
  },
  {
    icon: BrainCircuit,
    title: "AI-powered intelligence",
    text: "Automated analysis, pattern detection, and predictive insight accelerate decisions.",
  },
  {
    icon: LineChart,
    title: "Business impact at scale",
    text: "Faster execution, sharper diagnostics, and more sustainable results across operations.",
  },
];

const featureCards = [
  {
    title: "LSS+AI vs Traditional Lean Six Sigma",
    // label: "Comparison page",
    description:
      "A concise side-by-side view of why modern organizations are moving from manual, reactive improvement to hybrid intelligence.",
    href: "/lsssub1",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "How AI-Enhanced Lean Six Sigma is Revolutionizing Process Improvement in 2025",
    // label: "Thought leadership page",
    description:
      "A modern executive narrative on how AI is changing speed, accuracy, and the future of operational excellence.",
    href: "/lsssub2",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
];

const flowSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Map current-state processes and identify hidden friction across systems and teams.",
  },
  {
    step: "02",
    title: "Diagnose",
    text: "Use AI-assisted analysis to uncover patterns, anomalies, and root causes faster.",
  },
  {
    step: "03",
    title: "Improve",
    text: "Prioritize high-value actions that reduce waste, improve quality, and accelerate flow.",
  },
  {
    step: "04",
    title: "Sustain",
    text: "Monitor performance continuously and keep gains stable with data-driven control.",
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
      {/* <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${light ? "border-white/20 bg-white/10 text-blue-100" : "border-blue-200 bg-white text-[#0A2463]"}`}>
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div> */}
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

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-4 md:px-8 md:pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
            <span>Approach</span>
            <span>•</span>
            <span className="text-white">LSS+AI Methodology</span>
          </div>

          {/* <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
            <BrainCircuit className="h-3.5 w-3.5 text-cyan-300" />
            Signature methodology
          </div> */}

          <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            LSS+AI Methodology
            <span className="mt-2 block text-cyan-200">where process rigor meets intelligent execution</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Duanamize combines the proven discipline of Lean Six Sigma with AI-powered insight to help organizations improve faster, diagnose deeper, and sustain results with greater confidence.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                <div className="text-2xl font-semibold text-white md:text-3xl">{item.value}</div>
                <div className="mt-1 text-sm leading-relaxed text-blue-100/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
                alt="Leadership and transformation workshop"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/30 to-transparent" />

              <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">Methodology view</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Discipline", "Lean Six Sigma"],
                    ["Intelligence", "AI-assisted"],
                    ["Outcome", "Sustained value"],
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
                    <div className="text-[10px] uppercase tracking-[0.16em] text-cyan-100/80">Why it works</div>
                    <div className="mt-2 text-lg font-semibold text-white">Human expertise stays central</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-blue-100/70">What changes</div>
                    <div className="mt-2 text-lg font-semibold text-white">Analysis becomes faster and smarter</div>
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

function PillarsSection() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          // eyebrow="Methodology foundation"
          title="A short view of the model"
          description="LSS+AI is not a replacement for Lean Six Sigma. It is an evolution that strengthens improvement programs with automation, intelligence, and predictive capability."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {methodologyPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 style={serif} className="mt-5 text-3xl font-semibold leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-8 md:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="How it is applied"
            title="How it is applied"
            description="The methodology keeps the discipline of structured improvement while using AI to shorten the path from issue discovery to measurable impact."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {flowSteps.map((item) => (
              <div key={item.step} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step {item.step}</div>
                <h3 style={serif} className="mt-2 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="relative h-full min-h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Team planning process improvement"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

            <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                <Workflow className="h-3.5 w-3.5" />
                Improvement orchestration
              </div>
              <p className="mt-3 text-sm leading-relaxed text-blue-50/90">
                AI supports the work. Lean Six Sigma governs the work. Business outcomes validate the work.
              </p>
            </div>

            <div className="absolute bottom-5 left-5 right-5 grid gap-3">
              {[
                "Faster issue identification",
                "Sharper root-cause diagnosis",
                "More confident prioritization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/35 px-4 py-3 text-sm text-white backdrop-blur-xl">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
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

function FeaturePages() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Explore this methodology"
          title="Explore This Methodology"
          description="This overview keeps things intentionally brief, with detailed insights covered in the focused pages below. Dive deeper to understand the approach, intelligence, and business impact behind the model."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {featureCards.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                {/* <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"> */}
                  {item.label}
                {/* </div> */}
              </div>

              <div className="p-6">
                <h3 style={serif} className="text-3xl font-semibold leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.description}</p>

                <Link
                  to={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#061650]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.16),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeader
                light
                eyebrow="Executive takeaway"
                title="A methodology designed for modern complexity"
                description="For organizations dealing with fragmented data, rising expectations, and pressure to deliver faster, LSS+AI provides a more intelligent path to operational excellence."
              />
            </div>

            <div className="grid gap-3">
              {[
                { icon: Cpu, text: "Continuous intelligence across processes" },
                { icon: ShieldCheck, text: "Governed, measurable improvement" },
                { icon: Clock3, text: "Faster speed from analysis to action" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4 text-sm text-white">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-4.5 w-4.5 text-cyan-300" />
                    </div>
                    <span>{item.text}</span>
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

export default function LssAiMethodologyOverviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <PillarsSection />
      <FlowSection />
      <FeaturePages />
      <CTASection />
    </div>
  );
}
