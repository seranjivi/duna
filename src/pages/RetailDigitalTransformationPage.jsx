import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Globe2,
  LayoutDashboard,
  Network,
  Package,
  RefreshCw,
  Search,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  Zap,
  MessageSquare,
  Tag,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "35%", label: "Increase in online conversion rates" },
  { value: "50%", label: "Reduction in cart abandonment" },
  { value: "3x", label: "Customer lifetime value improvement" },
];

const challenges = [
  {
    category: "Changing Customer Behaviour",
    icon: Smartphone,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Mobile-first shopping expectations not yet met",
      "Demand for personalised, contextual experiences",
      "Omnichannel service gaps frustrating customers",
      "Social commerce and influencer-driven discovery",
    ],
  },
  {
    category: "Operational Complexity",
    icon: Package,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Fragmented inventory visibility across channels",
      "Manual order fulfilment slowing throughput",
      "Supply chain rigidity limiting agility",
      "Legacy systems creating data silos",
    ],
  },
  {
    category: "Competitive Pressure",
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "E-commerce platform proliferation intensifying competition",
      "Direct-to-consumer brands eroding market share",
      "Amazon and marketplace pricing pressure",
      "Technology-enabled rivals outpacing legacy retailers",
    ],
  },
];

const automationTabs = [
  {
    label: "Orders",
    icon: ShoppingCart,
    title: "Order Management Automation",
    items: [
      "Automated order processing, allocation, and fulfilment routing",
      "Real-time inventory allocation and cross-channel optimisation",
      "Shipping, tracking, and carrier management automation",
      "Returns, refunds, and exchange workflow automation",
    ],
  },
  {
    label: "Customer Service",
    icon: MessageSquare,
    title: "Customer Service Automation",
    items: [
      "AI chatbot and virtual assistant deployment across channels",
      "Automated response routing and case management",
      "FAQ and knowledge base self-service automation",
      "Escalation workflows and resolution time tracking",
    ],
  },
  {
    label: "Marketing",
    icon: Tag,
    title: "Marketing & Personalisation Automation",
    items: [
      "Automated email and SMS marketing campaign journeys",
      "Dynamic pricing and promotion management engines",
      "AI-powered product recommendation and upsell systems",
      "Customer segmentation, targeting, and lookalike modelling",
    ],
  },
];

const omniChannelPhases = [
  {
    step: "01",
    title: "Channel Integration",
    icon: Network,
    items: [
      "Unified customer data and profile consolidation across channels",
      "Consistent brand messaging and experience standards",
      "Cross-channel inventory visibility and availability",
      "Seamless channel switching and handoff management",
    ],
  },
  {
    step: "02",
    title: "Journey Optimisation",
    icon: Users,
    items: [
      "Customer touchpoint mapping and gap analysis",
      "Real-time interaction tracking across all channels",
      "Experience personalisation and contextual customisation",
      "Journey analytics and conversion funnel optimisation",
    ],
  },
  {
    step: "03",
    title: "Technology Infrastructure",
    icon: Database,
    items: [
      "Customer data platform (CDP) implementation",
      "API-based system integration and data synchronisation",
      "Mobile and web platform performance optimisation",
      "Real-time data pipelines for personalisation at scale",
    ],
  },
];

const roiAreas = [
  {
    icon: ShoppingBag,
    title: "Revenue Growth",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Personalisation increases average order value significantly",
      "Reduced cart abandonment through automated recovery journeys",
      "Cross-sell and upsell engine improves basket size",
      "Loyalty and retention programmes drive repeat purchase",
    ],
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Automated fulfilment reduces processing time and cost",
      "Inventory optimisation cuts overstock and stockouts",
      "Supply chain agility improves margin and availability",
      "Reduced customer service labour through automation",
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Intelligence",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Unified customer view enables precision targeting",
      "Demand forecasting improves buying and planning accuracy",
      "Real-time analytics surface opportunity and risk faster",
      "A/B testing and experimentation accelerate optimisation",
    ],
  },
];

const techSolutions = [
  {
    icon: Globe2,
    title: "Omnichannel Platform Architecture",
    items: [
      "Headless commerce and composable architecture",
      "Unified commerce API layer connecting all channels",
      "Real-time inventory and order management synchronisation",
      "Progressive web app (PWA) and mobile-first delivery",
    ],
  },
  {
    icon: Search,
    title: "Customer Experience Intelligence",
    items: [
      "Customer data platform (CDP) for unified profiles",
      "AI-powered search, navigation, and discovery",
      "Behavioural analytics and session intelligence tools",
      "Voice of customer and sentiment analysis integration",
    ],
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function RetailDigitalTransformationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white/40">•</span>
            <a href="/additional-industries" className="text-white hover:text-blue-200 transition-colors">Additional Industries</a>
            <span className="text-white/40">•</span>
            <span className="text-white/70">Retail Digital Transformation</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 mb-4">
                <Sparkles className="h-3.5 w-3.5" /> E-commerce · Omnichannel · Customer Experience
              </div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Retail Digital Transformation{" "}
                <span className="text-[#A5F3FC]">Revolutionising customer experience through e-commerce innovation.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                The convergence of e-commerce automation, advanced analytics, and customer experience
                technology is creating unprecedented opportunities for retailers to deliver personalised,
                seamless, and value-driven shopping experiences across every channel.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80"
                  alt="Retail digital transformation"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Retail transformation focus areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["E-commerce Automation", "Omnichannel", "Personalisation", "Order Management", "Customer Data Platform", "Supply Chain"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <ShoppingBag className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for retail CTOs, e-commerce directors, and operations leaders seeking
                        measurable digital transformation outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Three forces reshaping the retail landscape.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Modern retailers face simultaneous pressure from evolving customer expectations,
                operational complexity, and an intensifying competitive environment — requiring
                a coordinated digital response.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {challenges.map((ch) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.category} className={`rounded-[28px] border ${ch.border} ${ch.bg} p-5 transition hover:-translate-y-1 hover:shadow-lg`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${ch.color} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{ch.category}</h3>
                    <ul className="mt-3 space-y-2">
                      {ch.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── E-COMMERCE AUTOMATION ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              E-commerce automation that streamlines every retail operation.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Intelligent automation reduces manual effort, eliminates errors, and improves customer
              experience across orders, service, and marketing — simultaneously.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {automationTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === i
                      ? "bg-[#0A2463] text-white shadow-lg"
                      : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {automationTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Automation Area {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{tab.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {tab.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                      <div className="text-sm leading-relaxed text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── TECHNOLOGY SOLUTIONS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
                alt="Omnichannel retail technology"
                className="h-full min-h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/90 via-[#071857]/65 to-[#071857]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Network className="h-3.5 w-3.5" /> Omnichannel Commerce
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    Seamless customer journeys across every channel and touchpoint.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    True omnichannel retail connects every channel — online, mobile, social, and in-store —
                    into a unified experience with consistent data, inventory, and service standards.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["Unified Customer Profiles", "Cross-Channel Inventory", "Real-Time Personalisation", "API-First Architecture"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                        <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Platform architecture and customer intelligence at scale.
              </h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed md:text-base">
                The right technology foundation — composable commerce, CDP, and AI-powered intelligence —
                unlocks personalisation and operational agility that legacy platforms cannot match.
              </p>
              <div className="mt-6 grid gap-4">
                {techSolutions.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <div key={sol.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-950">{sol.title}</h3>
                      </div>
                      <div className="grid gap-2">
                        {sol.items.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-600" />
                            {item}
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

      {/* ── OMNICHANNEL PHASES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase approach to omnichannel retail strategy.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              From integrating existing channels through optimising customer journeys to building
              the technology infrastructure that sustains long-term growth and personalisation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {omniChannelPhases.map((phase, i) => {
              const Icon = phase.icon;
              const active = activeStep === i;
              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveStep(i)}
                  className="text-left rounded-[28px] bg-[#0A2463] p-6 shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">
                        Phase {phase.step}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-white">{phase.title}</div>
                    </div>
                  </div>
                  {active && (
                    <ul className="mt-4 space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-blue-100/85">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Measurable returns from retail digital transformation.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Digital transformation delivers compounding returns across revenue growth, operational
              efficiency, and data-driven intelligence — creating a durable competitive advantage.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {roiAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.accent} text-white shadow-lg shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 style={serif} className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Turn your retail operation into a digital-first growth engine.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-base">
                  Duanamize's retail transformation framework addresses e-commerce automation, omnichannel
                  strategy, and customer intelligence — built for retailers who compete on experience.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Request assessment <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:selvan@duanamize.org" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  Email Duanamize
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
