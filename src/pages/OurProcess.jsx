import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Compass,
  GitBranch,
  HeartHandshake,
  Layers3,
  Menu,
  Network,
  PlayCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const serif = {
  fontFamily:
    '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const childPages = [
  {
    title:
      "Mastering Change Management in Process Improvement: Your Complete Implementation Guide",
    label: "Human adoption guide",
    href: "/our-process/change-management",
    icon: HeartHandshake,
    accent: "from-cyan-400 via-sky-400 to-blue-500",
    summary:
      "A people-centered guide focused on resistance, stakeholder engagement, communication, training, and long-term adoption.",
    bullets: [
      "Understand resistance and human impact",
      "Engage leadership, managers, and frontline teams",
      "Build adoption through communication and training",
    ],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title:
      "The Complete Guide to Process Improvement Implementation: A Proven 4-Phase Framework",
    label: "Execution framework",
    href: "/our-process/implementation-framework",
    icon: Route,
    accent: "from-indigo-500 via-blue-500 to-cyan-400",
    summary:
      "A structured implementation view covering discovery, solution design, deployment, and optimization for scalable transformation.",
    bullets: [
      "Build the evidence base in discovery",
      "Translate insight into executable solution design",
      "Deploy, stabilize, and continuously optimize",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
];

const ecosystemNodes = [
  {
    title: "Change Enablement",
    text: "Communication, buy-in, capability building, reinforcement",
    icon: HeartHandshake,
    tone: "light",
  },
  {
    title: "Execution Framework",
    text: "Discovery, design, implementation, optimization",
    icon: Workflow,
    tone: "dark",
  },
  {
    title: "Governance & Visibility",
    text: "KPIs, progress controls, stakeholder alignment, value tracking",
    icon: ShieldCheck,
    tone: "light",
  },
];

const phaseFlow = [
  {
    step: "01",
    title: "Discover",
    text: "Establish the current-state truth and identify the right opportunities.",
  },
  {
    step: "02",
    title: "Design",
    text: "Shape the future state with practical architecture, feasibility, and alignment.",
  },
  {
    step: "03",
    title: "Implement",
    text: "Deploy with controlled change, stakeholder activation, and live support.",
  },
  {
    step: "04",
    title: "Optimize",
    text: "Sustain gains through monitoring, learning, and continuous refinement.",
  },
];

const trustPoints = [
  "Navigation-led overview rather than a text-heavy article page",
  "Distinct visual identity from the individual child pages",
  "One gateway that connects people, process, and execution logic",
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
            light
              ? "border-white/20 bg-white/10 text-blue-100"
              : "border-blue-200 bg-white text-[#0A2463]"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      )}
      <h2
        style={serif}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 text-sm leading-relaxed md:text-lg whitespace-normal break-words ${
          center ? "mx-auto" : ""
        } ${light ? "text-blue-100/85" : "text-slate-600"}`}
      >
        {description}
      </p>
    </div>
  );
}

function HeroEcosystemVisual() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[620px]">
      <div className="absolute inset-0 rounded-[34px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl" />
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/15" />
      <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300/25 via-blue-400/20 to-indigo-500/15 blur-sm" />

      <div className="absolute left-1/2 top-1/2 grid h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-slate-950/45 text-center backdrop-blur-xl">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/85">Our Process</div>
          <div className="mt-2 text-lg font-semibold text-white">Gateway Hub</div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="absolute left-8 top-12 w-[220px] rounded-[26px] border border-white/12 bg-slate-950/40 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-900/25">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/80">Human side</div>
            <div className="text-base font-semibold text-white">Change Management</div>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-blue-100/78">
          Adoption, communication, stakeholder alignment, and capability building.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="absolute right-8 top-20 w-[230px] rounded-[26px] border border-white/12 bg-white/10 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-blue-900/25">
            <Workflow className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/70">Execution side</div>
            <div className="text-base font-semibold text-white">4-Phase Framework</div>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-blue-100/78">
          Structured implementation from discovery through optimization.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.16 }}
        className="absolute bottom-10 left-1/2 w-[78%] -translate-x-1/2 rounded-[28px] border border-white/12 bg-slate-950/35 p-5 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
          <Network className="h-3.5 w-3.5" /> Process ecosystem at a glance
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {phaseFlow.map((item) => (
            <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-[0.16em] text-blue-100/65">{item.step}</div>
              <div className="mt-1 text-sm font-semibold text-white">{item.title}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ChildCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
          <div className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-xl">
            {item.label}
          </div>
          <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-blue-950/25`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <h3 style={serif} className="max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-[1.02fr_0.98fr] md:p-7">
        <div>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">{item.summary}</p>
          <Link
            to={item.href}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0A2463] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0b2d7e]"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">What this page covers</div>
          <div className="mt-3 space-y-3">
            {item.bullets.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-500" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DuanamizeOurProcessLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_12%_20%,rgba(45,212,191,0.18),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(59,130,246,0.20),transparent_28%),radial-gradient(circle_at_58%_78%,rgba(255,255,255,0.06),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
                <span>Approach</span>
                <span>•</span>
                <span className="text-white">Our Process</span>
              </div>

              {/* <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Compass className="h-3.5 w-3.5 text-cyan-300" />
                Gateway to implementation thinking
              </div> */}

              <h1
                style={serif}
                className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
              >
                Our Process
                <span className="mt-2 block text-cyan-200">the operating path behind sustainable transformation</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
                This page is designed as an overview hub. It gives leaders a clear entry point into how Duanamize approaches process improvement through both disciplined implementation and human-centered change enablement.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#pages"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5"
                >
                  Explore child pages <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  View process ecosystem <PlayCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-blue-50/90 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <HeroEcosystemVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <SectionHeader
            // eyebrow="Overview"
            title="Two focused paths, one connected transformation model"
            description="The purpose of this landing page is not to repeat the full article content. It is to help visitors understand the two complementary dimensions of process improvement work: the human adoption path and the structured execution path."
          />

          <div id="pages" className="grid gap-6 xl:grid-cols-2">
            {childPages.map((item, index) => (
              <ChildCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <SectionHeader
            // eyebrow="Process ecosystem"
            title="A summary visual that connects people, execution, and value realization"
            description="Rather than presenting another dense article block, this section visualizes how the broader process ecosystem works together. Change management creates adoption, structured implementation creates momentum, and governance ensures the gains are sustained."
          />

          <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 xl:grid-cols-[0.78fr_1.22fr]">
              <div className="border-b border-slate-200 bg-[#071857] p-6 text-white xl:border-b-0 xl:border-r md:p-8">
                {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  <Layers3 className="h-3.5 w-3.5" />
                  Summary view
                </div> */}
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Process improvement succeeds when the system is designed as a whole
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-blue-100/82 md:text-base">
                  Technical redesign alone is not enough. A durable operating model links implementation phases, stakeholder adoption, measurement, and governance into one integrated transformation system.
                </p>
              </div>

              <div className="grid gap-0 lg:grid-cols-3">
                {ecosystemNodes.map((item, index) => {
                  const Icon = item.icon;
                  const dark = item.tone === "dark";
                  return (
                    <div
                      key={item.title}
                      className={`p-6 md:p-7 ${index < 2 ? "border-b lg:border-b-0" : ""} border-slate-200 ${
                        index !== 2 ? "lg:border-r" : ""
                      } ${dark ? "bg-slate-950 text-white" : "bg-white text-slate-950"}`}
                    >
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${
                          dark
                            ? "border-white/10 bg-white/5 text-white"
                            : "border-blue-200 bg-blue-50 text-[#0A2463]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 style={serif} className="mt-5 text-3xl font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <p className={`mt-3 text-sm leading-relaxed md:text-base ${dark ? "text-blue-100/80" : "text-slate-600"}`}>
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {phaseFlow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-[#0A2463]">
                  {item.step}
                </div>
                <h4 style={serif} className="mt-4 text-2xl font-semibold text-slate-950">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                <div className="mt-4 h-1.5 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0A2463] to-cyan-400"
                    style={{ width: `${72 + index * 6}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-[linear-gradient(135deg,#071857_0%,#0c2b70_48%,#0d4f87_100%)] shadow-xl shadow-blue-950/10">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  <GitBranch className="h-3.5 w-3.5" />
                  Next step navigation
                </div> */}
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Enter the part of the journey that matters most to your audience
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white md:text-lg">
                  Use this landing page as the bridge between strategic overview and deeper content. Visitors who need adoption strategy can move into change management, while those evaluating delivery structure can move into the 4-phase implementation framework.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {childPages.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.14]"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                      {item.label}
                    </div>
                    <div className="mt-3 text-lg font-semibold leading-snug text-white">
                      {item.title}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      View Page
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
