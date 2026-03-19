import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  ChevronDown,
  Clock3,
  Cpu,
  Globe,
  Landmark,
  Layers3,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const approachPillars = [
  {
    id: "methodology",
    number: "01",
    title: "LSS+AI Methodology",
    icon: Target,
    description:
      "Combining the discipline of Lean Six Sigma with AI-enabled analysis, predictive insight, and continuous process intelligence.",
    topics: [
      "LSS+AI vs Traditional Lean Six Sigma: The Ultimate Comparison for Modern Organizations",
      "How AI-Enhanced Lean Six Sigma is Revolutionizing Process Improvement in 2025",
    ],
  },
  {
    id: "process",
    number: "02",
    title: "Our Process",
    icon: Workflow,
    description:
      "A structured delivery model covering discovery, design, implementation, optimization, and change management.",
    topics: [
      "Mastering Change Management in Process Improvement: Your Complete Implementation Guide",
      "The Complete Guide to Process Improvement Implementation: A Proven 4-Phase Framework",
    ],
  },
  {
    id: "technology",
    number: "03",
    title: "Technology Stack",
    icon: Cpu,
    description:
      "An enterprise technology foundation spanning integration, automation, analytics, AI, governance, and scalability.",
    topics: [
      "System Integration Best Practices for Process Improvement Technology Success",
      "Building Your Enterprise Technology Stack for AI-Powered Process Improvement",
    ],
  },
  {
    id: "outcomes",
    number: "04",
    title: "Outcomes Framework",
    icon: BarChart3,
    description:
      "A measurement-led view focused on KPI design, value realization, ROI tracking, and sustained business impact.",
    topics: [
      "Performance Measurement Best Practices for Operational Excellence Programs",
      "ROI Measurement Framework for Process Improvement: Your Complete Guide to Value Realization",
    ],
  },
];

const sections = [
  {
    id: "methodology",
    number: "01",
    eyebrow: "LSS+AI Methodology",
    icon: Target,
    kicker: "Methodology",
    title: "A modern process improvement model built on rigor, speed, and predictive capability",
    intro:
      "Our methodology preserves the structure and statistical discipline of Lean Six Sigma while strengthening it with AI-enabled analysis, pattern recognition, and continuous monitoring. The result is a more responsive model for organizations operating in data-rich, fast-moving environments.",
    bullets: [
      "Reduce manual analysis effort and compress improvement cycles through automated data processing.",
      "Improve root-cause identification by uncovering complex relationships across multiple variables.",
      "Move from reactive issue handling to predictive process management and early intervention.",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    cards: [
      {
        title: "LSS+AI vs Traditional Lean Six Sigma: The Ultimate Comparison for Modern Organizations",
        summary:
          "A comparative perspective on how AI enhances traditional Lean Six Sigma by reducing manual effort, accelerating insight generation, and improving long-term sustainability of results.",
        highlights: [
          "Traditional Lean Six Sigma remains strong in structure and discipline, but can be constrained by manual data collection and limited analytical depth.",
          "LSS+AI improves speed, diagnostic accuracy, and process visibility through automation and machine-assisted analysis.",
        ],
      },
      {
        title: "How AI-Enhanced Lean Six Sigma is Revolutionizing Process Improvement in 2025",
        summary:
          "An executive-level view of how machine learning, predictive analytics, and automated data processing are reshaping operational excellence programs across industries.",
        highlights: [
          "AI extends Lean Six Sigma from periodic analysis to continuous process intelligence.",
          "Successful implementation depends on strong data quality, change readiness, and thoughtful adoption planning.",
        ],
      },
    ],
  },
  {
    id: "process",
    number: "02",
    eyebrow: "Our Process",
    icon: Workflow,
    kicker: "Delivery model",
    title: "A structured transformation journey from assessment to sustained optimization",
    intro:
      "Our process is designed to move organizations from current-state understanding to future-state execution with clarity, control, and adoption in mind. It combines practical delivery phases with the change management discipline needed to make improvement stick.",
    bullets: [
      "Establish a reliable baseline through process discovery, data validation, and opportunity prioritization.",
      "Design future-state workflows, operating models, and implementation roadmaps with business alignment.",
      "Support deployment through stakeholder engagement, training, governance, and continuous optimization.",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    cards: [
      {
        title: "Mastering Change Management in Process Improvement: Your Complete Implementation Guide",
        summary:
          "A guide to the people side of transformation, covering stakeholder alignment, communication strategy, training, adoption, and long-term sustainability.",
        highlights: [
          "Visible leadership sponsorship and frontline involvement are essential to implementation success.",
          "Adoption should be measured through both behavioral signals and business outcomes.",
        ],
      },
      {
        title: "The Complete Guide to Process Improvement Implementation: A Proven 4-Phase Framework",
        summary:
          "A practical framework that moves from discovery and solution design to controlled implementation and ongoing optimization.",
        highlights: [
          "The four phases create a disciplined path from assessment to measurable improvement.",
          "The model helps organizations balance delivery speed with control, adoption, and value realization.",
        ],
      },
    ],
    processPhases: [
      { number: "01", title: "Discovery" },
      { number: "02", title: "Solution Design" },
      { number: "03", title: "Implementation" },
      { number: "04", title: "Optimization" },
    ],
  },
  {
    id: "technology",
    number: "03",
    eyebrow: "Technology Stack",
    icon: Cpu,
    kicker: "Enabling architecture",
    title: "Technology architecture that supports enterprise-scale process improvement",
    intro:
      "Our technology perspective focuses on building a connected foundation for process visibility, automation, analytics, and AI. This is not a list of tools alone. It is a coordinated stack that enables reliable execution, secure integration, and scalable performance.",
    bullets: [
      "Establish API-led and event-aware integration patterns for resilient data flow across enterprise systems.",
      "Support automation, orchestration, analytics, and AI through a well-governed architecture.",
      "Embed security, auditability, and operational monitoring into the stack from the start.",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    cards: [
      {
        title: "System Integration Best Practices for Process Improvement Technology Success",
        summary:
          "A perspective on designing integration architecture for process improvement with attention to APIs, data consistency, security, performance, and governance.",
        highlights: [
          "Integration design must overcome data silos, latency constraints, and complexity without affecting operational stability.",
          "Security, monitoring, and access control should be fundamental design elements rather than afterthoughts.",
        ],
      },
      {
        title: "Building Your Enterprise Technology Stack for AI-Powered Process Improvement",
        summary:
          "A structured view of the platforms and capabilities required for enterprise-scale process improvement, including process mining, AI, workflow orchestration, analytics, and governance.",
        highlights: [
          "The right stack should support both targeted pilot initiatives and long-term enterprise scale.",
          "Technology decisions should strengthen visibility, adaptability, and sustained value realization.",
        ],
      },
    ],
    stack: [
      "Process Mining",
      "AI & Machine Learning",
      "Workflow & Automation",
      "Enterprise Integration",
      "Analytics & Reporting",
      "Governance & Security",
    ],
  },
  {
    id: "outcomes",
    number: "04",
    eyebrow: "Outcomes Framework",
    icon: BarChart3,
    kicker: "Value realization",
    title: "A measurement framework that links operational improvement to business value",
    intro:
      "Our outcomes framework ensures that process improvement is measured through performance, financial impact, customer value, and sustainability of results. It is designed to give executive stakeholders a clear view of what has improved, how value is being captured, and where further opportunities remain.",
    bullets: [
      "Build measurement systems that connect enterprise objectives with operational indicators and team-level performance.",
      "Track value across cost reduction, efficiency, customer impact, risk reduction, and return on investment.",
      "Use real-time monitoring and continuous review to protect gains and identify the next wave of improvement.",
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1400&q=80",
    cards: [
      {
        title: "Performance Measurement Best Practices for Operational Excellence Programs",
        summary:
          "A framework for KPI design, leading and lagging indicators, dashboarding, benchmarking, and continuous improvement measurement.",
        highlights: [
          "Measurement systems should be actionable, aligned to strategy, and practical to operate.",
          "Real-time visibility and predictive signals enable faster intervention and better decision-making.",
        ],
      },
      {
        title: "ROI Measurement Framework for Process Improvement: Your Complete Guide to Value Realization",
        summary:
          "A value realization model that captures direct savings, operational gains, revenue impact, customer outcomes, and long-term return on investment.",
        highlights: [
          "Credible ROI measurement begins with strong baselines, well-defined targets, and disciplined tracking.",
          "Continuous monitoring helps organizations protect realized gains and extend value over time.",
        ],
      },
    ],
    measures: [
      "Performance Measurement",
      "Benchmarking",
      "Value Tracking",
      "ROI Analysis",
      "Customer Impact",
      "Continuous Optimization",
    ],
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
        <div className="text-white font-semibold tracking-wide leading-tight">DUANAMIZE</div>
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
        <a href="#" className="transition-colors hover:text-white">
          Home
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-medium text-white"
        >
          Approach <ChevronDown className="h-3.5 w-3.5" />
        </a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">
          Solutions <ChevronDown className="h-3.5 w-3.5" />
        </a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">
          Industries <ChevronDown className="h-3.5 w-3.5" />
        </a>
        <a href="#" className="transition-colors hover:text-white">
          Results
        </a>
        <a href="#" className="transition-colors hover:text-white">
          About Us
        </a>
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

function IntroBlock() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span>•</span>
          <span className="text-slate-700">Approach</span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0A2463] shadow-sm">
              <Briefcase className="h-3.5 w-3.5" /> Approach Overview
            </div>
            <h1 style={serif} className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Approach
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Our approach brings together methodology, delivery structure, enabling technology, and measurable outcomes
              to help organizations move from process assessment to sustained operational improvement.
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-7">
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Primary Page</div>
                <div style={serif} className="mt-2 text-3xl font-semibold text-slate-950">
                  Approach
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Subcategories</div>
                <div className="mt-2 text-3xl font-semibold text-slate-950">4</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Detailed Topics</div>
                <div className="mt-2 text-3xl font-semibold text-slate-950">8</div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600">
              The page is structured to first explain the overall approach, then clearly present each subcategory, and
              finally highlight the individual topic pages available within each subcategory.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkMap() {
  return (
    <section className="border-b border-slate-200 bg-slate-100/70">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-14">
        <div className="mb-8 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Framework Map</div>
          <h2 style={serif} className="mt-2 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
            How the Approach page is organized
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            The structure below makes the hierarchy explicit: one primary approach category, four subcategories, and two
            detailed topic pages within each subcategory.
          </p>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 xl:grid-cols-[280px_1fr]">
            <div className="border-b border-slate-200 bg-[#071857] p-6 text-white xl:border-b-0 xl:border-r">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Layers3 className="h-3.5 w-3.5" /> Level 1
              </div>
              <h3 style={serif} className="mt-4 text-4xl font-semibold leading-tight">
                Approach
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/85">
                A unified framework describing how Duanamize approaches transformation through methodology, delivery,
                enabling architecture, and measurable outcomes.
              </p>
            </div>

            <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
              {approachPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className={`p-5 md:p-6 ${index !== approachPillars.length - 1 ? "xl:border-r xl:border-slate-200" : ""} ${index < 2 ? "md:border-b md:border-slate-200 xl:border-b-0" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-[#0A2463]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Level 2 · {pillar.number}</div>
                        <div className="text-lg font-semibold text-slate-950">{pillar.title}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                    <div className="mt-5 space-y-2">
                      {pillar.topics.map((topic, i) => (
                        <div key={topic} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Level 3 · 0{i + 1}</div>
                          <div className="mt-1 text-sm leading-relaxed text-slate-800">{topic}</div>
                        </div>
                      ))}
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

function StickyNav() {
  return (
    <section className="sticky top-0 z-20 border-b border-slate-200 bg-white/92 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 md:px-8">
        {approachPillars.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0A2463]/20 hover:bg-blue-50 hover:text-[#0A2463]"
          >
            {item.title}
          </a>
        ))}
      </div>
    </section>
  );
}

function TopicCard({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="p-5 md:p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Topic Page</div>
        <h3 style={serif} className="mt-3 text-2xl font-semibold leading-tight text-slate-950 md:text-[30px]">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">{item.summary}</p>

        <div className="mt-5 space-y-3">
          {item.highlights.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0A2463]" />
              <div>{point}</div>
            </div>
          ))}
        </div>

        <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A2463] transition hover:border-[#0A2463]/30 hover:bg-blue-50">
          Read in detail <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}

function ProcessStrip({ phases }) {
  return (
    <div className="mb-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-0 md:grid-cols-4">
        {phases.map((phase, index) => (
          <div key={phase.number} className={`${index !== phases.length - 1 ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""} p-5 md:p-6`}>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Phase {phase.number}</div>
            <h4 style={serif} className="mt-3 text-3xl font-semibold leading-none text-slate-950">
              {phase.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapabilityStrip({ title, items }) {
  return (
    <div className="mb-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
        <div className="border-b border-slate-200 bg-[#071857] p-6 text-white lg:border-b-0 lg:border-r">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">Overview</div>
          <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            {title}
          </h3>
        </div>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item}
              className={`p-5 text-sm leading-relaxed text-slate-700 ${index % 3 !== 2 ? "lg:border-r lg:border-slate-200" : ""} ${index < 3 ? "border-b border-slate-200" : ""} ${index % 2 === 0 ? "bg-white" : "bg-slate-50/70"}`}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Focus Area</div>
              <div className="mt-3 text-base font-semibold text-slate-900">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ section, alternate = false }) {
  const Icon = section.icon;
  return (
    <section id={section.id} className={alternate ? "border-y border-slate-200 bg-slate-100/70" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
        <div className="grid gap-8 xl:grid-cols-[360px_1fr] xl:gap-10">
          <div className="xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0A2463] shadow-sm">
                  <span className="rounded-full bg-[#0A2463] px-2 py-0.5 text-[10px] tracking-[0.16em] text-white">{section.number}</span>
                  {section.eyebrow}
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-[#0A2463]">
                  <Icon className="h-4.5 w-4.5" />
                </div>
              </div>

              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{section.kicker}</div>
              <h2 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{section.intro}</p>

              <div className="mt-6 space-y-3">
                {section.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0A2463]" />
                    <div>{bullet}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-6 md:p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Subcategory</div>
                  <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                    {section.eyebrow}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">{section.intro}</p>
                </div>
                <div className="relative min-h-[280px] border-t border-slate-200 lg:border-l lg:border-t-0">
                  <img src={section.image} alt={section.eyebrow} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                </div>
              </div>
            </div>

            {section.processPhases ? <div className="mt-8"><ProcessStrip phases={section.processPhases} /></div> : null}
            {section.stack ? <div className="mt-8"><CapabilityStrip title="Technology capabilities" items={section.stack} /></div> : null}
            {section.measures ? <div className="mt-8"><CapabilityStrip title="Measurement and value elements" items={section.measures} /></div> : null}

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {section.cards.map((card) => (
                <TopicCard key={card.title} item={card} />
              ))}
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
            Leading technology and management consulting firm specializing in AI, blockchain, Industry 4.0, and
            process optimization for global enterprises.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <Globe className="h-3.5 w-3.5" /> 24/7 Global Support
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["Home", "Approach", "Solutions", "Industries", "Case Studies"].map((x) => (
              <li key={x}>
                <a href="#" className="transition hover:text-white">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["About Us", "Careers", "Client Stories", "Partner Inquiries", "FAQ"].map((x) => (
              <li key={x}>
                <a href="#" className="transition hover:text-white">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Useful Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["Privacy Policy", "Terms and Conditions", "Disclaimer", "Contact Us"].map((x) => (
              <li key={x}>
                <a href="#" className="transition hover:text-white">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact Us</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Landmark className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>Duanamize Global Services Private Limited</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>selvan@duanamize.org</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>+91 9884919972</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <div>© {new Date().getFullYear()} Duanamize Global Services Private Limited. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Privacy-conscious delivery
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" /> Global support model
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function DuanamizeApproachPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="bg-[#071857]">
        <Header />
      </div>

      <main>
        <IntroBlock />
        <FrameworkMap />
        <StickyNav />
        {sections.map((section, index) => (
          <SectionBlock key={section.id} section={section} alternate={index % 2 === 1} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
