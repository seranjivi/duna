import React from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Layers3,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  GraduationCap,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
} from "lucide-react";

const serif = {
  fontFamily:
    '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const heroStats = [
  { value: "3", label: "Core resistance triggers to address early" },
  { value: "3", label: "Stakeholder layers that shape adoption" },
  { value: "2", label: "Measurement lenses for sustained change" },
];

const resistanceCards = [
  {
    title: "Fear of job displacement",
    icon: AlertTriangle,
    text: "Automation and optimization can trigger concern that efficiency gains may reduce roles or relevance.",
  },
  {
    title: "Loss of expertise and identity",
    icon: Lightbulb,
    text: "Experienced teams may feel standardization weakens the value of hard-earned process knowledge.",
  },
  {
    title: "Implementation overload",
    icon: RefreshCw,
    text: "Employees often carry current workload while learning new systems, which creates stress and negative perception.",
  },
];

const stakeholderRows = [
  {
    title: "Executive leadership",
    subtitle: "Set the vision and visibly sponsor the transformation",
    accent: "from-cyan-400 to-blue-500",
    points: [
      "Communicate why the change matters now",
      "Allocate resources and remove structural blockers",
      "Demonstrate commitment during difficult implementation phases",
    ],
  },
  {
    title: "Middle management",
    subtitle: "Translate strategy into real adoption on the ground",
    accent: "from-blue-500 to-indigo-500",
    points: [
      "Convert executive intent into practical action",
      "Balance priorities and resolve day-to-day conflicts",
      "Provide feedback from frontline operations to leadership",
    ],
  },
  {
    title: "Frontline employees",
    subtitle: "Bring process knowledge, credibility, and real-world insight",
    accent: "from-indigo-500 to-cyan-400",
    points: [
      "Shape better solutions through hands-on knowledge",
      "Improve acceptance through involvement in design and testing",
      "Reinforce new behaviors when metrics and rewards align",
    ],
  },
];

const enablementBlocks = [
  {
    title: "Communication strategy",
    icon: MessageSquare,
    text: "Use multi-channel communication that addresses both rational concerns and emotional reactions, while keeping messaging consistent across audiences.",
    bullets: [
      "Executive summaries for leadership",
      "Detailed training content for users",
      "Frequent updates during critical rollout windows",
    ],
  },
  {
    title: "Training and capability building",
    icon: GraduationCap,
    text: "Role-based learning and realistic simulations help employees build confidence before the new process affects live operations.",
    bullets: [
      "Role-specific training design",
      "Hands-on scenarios in safe environments",
      "Peer support, refreshers, and ongoing reinforcement",
    ],
  },
];

const measurementCards = [
  {
    title: "Leading indicators",
    tone: "light",
    icon: TrendingUp,
    points: [
      "Training completion rates",
      "System utilization metrics",
      "Process adherence levels",
      "Engagement pulse checks and feedback sessions",
    ],
  },
  {
    title: "Lagging indicators",
    tone: "dark",
    icon: BarChart3,
    points: [
      "Business performance improvement",
      "Employee retention and satisfaction",
      "Stability of behavior change over time",
      "Readiness for future transformation programs",
    ],
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Diagnose human impact",
    text: "Assess how process redesign affects role clarity, workload, confidence, and perceived security before rollout begins.",
  },
  {
    step: "02",
    title: "Activate the right stakeholders",
    text: "Build visible leadership support, equip middle managers, and involve frontline teams in shaping the future state.",
  },
  {
    step: "03",
    title: "Enable adoption deliberately",
    text: "Use communication, role-based training, support, and reinforcement to make the change feel practical and achievable.",
  },
  {
    step: "04",
    title: "Measure and sustain",
    text: "Track behavioral and business outcomes together so early warning signs can be addressed before performance slips.",
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
      <p className={`mt-3 ${align === "center" ? "mx-auto" : ""} max-w-3xl text-sm leading-relaxed md:text-lg ${light ? "text-blue-100/85" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071857]">
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_10%_18%,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_65%_78%,rgba(255,255,255,0.07),transparent_35%)]" />
      <div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#071857] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
              <span>Approach</span>
              <span>•</span>
              <span>Our Process</span>
              <span>•</span>
              <span className="text-white">Change Management Guide</span>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
              <HeartHandshake className="h-3.5 w-3.5 text-cyan-300" />
              Human-centered transformation
            </div>

            <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Mastering Change Management in Process Improvement
              <span className="mt-2 block text-cyan-200">your complete implementation guide</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
              Strong process design alone does not guarantee transformation success. Sustainable improvement happens when people understand the change, trust the intent, and feel equipped to succeed in the new way of working.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#journey" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                Explore the framework <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#measure" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                View success measures
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

          <div className="relative min-h-[560px]">
            <div className="absolute right-0 top-0 h-[360px] w-[82%] overflow-hidden rounded-[34px] border border-white/10 bg-white/10 shadow-2xl shadow-blue-950/35 backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Change management workshop"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071857]/85 via-[#071857]/20 to-transparent" />
            </div>

            <div className="absolute left-0 top-24 w-[56%] rounded-[28px] border border-white/12 bg-slate-950/40 p-5 backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">What fails most often</div>
              <h3 style={serif} className="mt-3 text-2xl font-semibold leading-tight text-white">
                Technical change without human adoption
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/82">
                Resistance, uncertainty, and mixed signals can slow or even reverse otherwise strong improvement programs.
              </p>
            </div>

            <div className="absolute bottom-5 right-4 grid w-[74%] gap-3">
              {[
                "Visible leadership support",
                "Role-based communication and training",
                "Reinforcement through metrics and support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-xl">
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

function ResistanceSection() {
  return (
    <section className="relative bg-white">
      <div className="absolute left-0 top-0 hidden h-full w-28 bg-[linear-gradient(180deg,rgba(10,36,99,0.04),rgba(10,36,99,0))] lg:block" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Understanding the human side"
          title="Why people resist process change even when the logic is sound"
          description="Change management starts by recognizing that resistance is not irrational. It usually reflects uncertainty, perceived loss, or pressure created by the transition itself."
        />

        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                alt="Team discussing transformation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-slate-950/35 p-5 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Core principle</div>
                <div className="mt-2 text-xl font-semibold text-white">Resistance is often a signal, not an obstacle to ignore.</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
            {resistanceCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 style={serif} className="text-2xl font-semibold leading-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
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

function StakeholderSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Stakeholder engagement and buy-in"
          title="Adoption accelerates when every layer knows its role"
          description="Successful change does not depend on one announcement or one workshop. It depends on coordinated engagement across leadership, managers, and frontline teams."
        />

        <div className="space-y-4">
          {stakeholderRows.map((row, index) => (
            <div key={row.title} className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative p-6 md:p-8">
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${row.accent}`} />
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Layer 0{index + 1}</div>
                  <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                    {row.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                    {row.subtitle}
                  </p>
                </div>
                <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-8 lg:border-l lg:border-t-0">
                  <div className="grid gap-3">
                    {row.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-500" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnablementSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
          <div>
            <SectionHeader
              eyebrow="Communication and capability development"
              title="Change becomes practical when teams know what to expect and how to succeed"
              description="Multi-channel communication, role-based training, realistic practice environments, and post-launch support create confidence that carries adoption beyond go-live."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {enablementBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <div key={block.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 style={serif} className="mt-5 text-3xl font-semibold leading-tight text-slate-950">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{block.text}</p>
                    <div className="mt-4 space-y-2">
                      {block.bullets.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[580px]">
            <div className="absolute left-0 right-10 top-0 h-[270px] overflow-hidden rounded-[34px] border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1400&q=80"
                alt="Training and enablement session"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[88%] rounded-[30px] border border-slate-200 bg-[#071857] p-6 text-white shadow-xl md:p-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                <Layers3 className="h-3.5 w-3.5" />
                Reinforcement matters
              </div>
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Training is not the finish line
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-blue-100/85 md:text-base">
                Sustained change requires help-desk support, refresher learning, peer mentoring, and early performance monitoring so teams can recover quickly when adoption starts to dip.
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Support employees beyond initial rollout",
                  "Celebrate early adopters and peer champions",
                  "Intervene quickly when behavior change stalls",
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

function JourneySection() {
  return (
    <section id="journey" className="relative overflow-hidden bg-[#061650]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.16),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          light
          eyebrow="Implementation journey"
          title="A simple four-step change management path for process improvement"
          description="This guide can be applied as a practical operating sequence before, during, and after rollout so adoption is built deliberately rather than left to chance."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {journeySteps.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">Step {item.step}</div>
              <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/82">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeasureSection() {
  return (
    <section id="measure" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <SectionHeader
          eyebrow="Measuring success"
          title="Track behavior change and business results together"
          description="Behavioral indicators reveal whether adoption is building. Business indicators confirm whether the change is producing durable value. Both matter."
          align="center"
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {measurementCards.map((card) => {
            const Icon = card.icon;
            const dark = card.tone === "dark";
            return (
              <div key={card.title} className={`overflow-hidden rounded-[30px] border shadow-sm ${dark ? "border-slate-900 bg-slate-950" : "border-slate-200 bg-slate-50"}`}>
                <div className={`p-6 md:p-7 ${dark ? "border-b border-white/10" : "border-b border-slate-200 bg-white"}`}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${dark ? "border-white/10 bg-white/5 text-cyan-300" : "border-blue-200 bg-blue-50 text-[#0A2463]"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 style={serif} className={`mt-4 text-3xl font-semibold leading-tight ${dark ? "text-white" : "text-slate-950"}`}>
                    {card.title}
                  </h3>
                </div>
                <div className="p-6 md:p-7">
                  <div className="grid gap-3">
                    {card.points.map((point) => (
                      <div key={point} className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-relaxed ${dark ? "border-white/10 bg-white/5 text-blue-50" : "border-slate-200 bg-white text-slate-700"}`}>
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

        <div className="mt-8 rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463] shadow-sm">
                <Target className="h-3.5 w-3.5" />
                Final takeaway
              </div>
              <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                Effective change management turns improvement into organizational capability
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                When people are engaged, supported, and measured thoughtfully, process improvement stops being a one-time technical exercise and becomes a repeatable transformation capability.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  Mastering Change Management in Process Improvement
                </div>
              </a>
              <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Next page</div>
                <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                  The Complete Guide to Process Improvement Implementation: A Proven 4-Phase Framework
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                  Continue to next page <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ChangeManagementGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <ResistanceSection />
      <StakeholderSection />
      <EnablementSection />
      <JourneySection />
      <MeasureSection />
    </div>
  );
}
