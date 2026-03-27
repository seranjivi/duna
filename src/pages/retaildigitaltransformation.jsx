import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Cpu,
  Heart,
  Lightbulb,
  Monitor,
  Package,
  RefreshCw,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "40%", label: "Increase in online sales conversion" },
  { value: "3x", label: "Faster inventory turnover" },
  { value: "60%", label: "Reduction in operational costs" },
];

const challenges = [
  {
    category: "Digital Fragmentation",
    icon: Monitor,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Disconnected online and in-store customer experiences",
      "Siloed systems preventing unified customer view",
      "Inconsistent inventory data across channels",
      "Fragmented marketing and customer communication",
    ],
  },
  {
    category: "Operational Inefficiency",
    icon: Package,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Manual inventory management and stockouts",
      "Slow order fulfillment and shipping delays",
      "Inefficient supply chain coordination",
      "Limited visibility into demand patterns",
    ],
  },
  {
    category: "Customer Engagement",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "Generic shopping experiences lacking personalization",
      "Low customer retention and loyalty",
      "Poor customer service response times",
      "Inability to predict customer preferences",
    ],
  },
];

const programmeTabs = [
  {
    label: "E-commerce",
    icon: ShoppingBag,
    title: "E-commerce Platform & Digital Storefront",
    items: [
      "Headless commerce architecture and API-first platforms",
      "Multi-channel inventory management and synchronization",
      "AI-powered product recommendations and search",
      "Seamless payment integration and checkout optimization",
    ],
  },
  {
    label: "Omnichannel",
    icon: RefreshCw,
    title: "Omnichannel Customer Experience",
    items: [
      "Unified customer profiles across all touchpoints",
      "Personalized shopping journeys and targeted campaigns",
      "Real-time customer support and chat automation",
      "Cross-channel loyalty programs and rewards",
    ],
  },
  {
    label: "Supply Chain",
    icon: Package,
    title: "Supply Chain & Inventory Optimization",
    items: [
      "Real-time inventory tracking and visibility",
      "Automated order fulfillment and warehouse management",
      "Supplier integration and procurement platforms",
      "Demand forecasting and predictive analytics",
    ],
  },
  {
    label: "Leadership",
    icon: TrendingUp,
    title: "Digital Transformation for Retail Leaders",
    items: [
      "Retail digital strategy and roadmap development",
      "Change management for retail transformation",
      "Customer data platform and analytics strategy",
      "Building a culture of innovation in retail",
    ],
  },
];

const learningPhases = [
  {
    step: "01",
    title: "Digital Assessment",
    icon: Target,
    items: [
      "Current digital maturity and capability analysis",
      "Customer journey mapping and pain point identification",
      "Technology stack audit and integration gaps",
      "Competitive landscape and market opportunity analysis",
      "Stakeholder interviews with retail and IT teams",
      "Digital skills assessment and training needs",
    ],
  },
  {
    step: "02",
    title: "Solution Design",
    icon: Brain,
    items: [
      "Custom e-commerce architecture and platform selection",
      "Omnichannel integration strategy and roadmap",
      "Supply chain optimization model design",
      "Customer data platform and personalization strategy",
    ],
  },
  {
    step: "03",
    title: "Implementation & Growth",
    icon: BarChart3,
    items: [
      "Phased platform rollout with pilot stores",
      "System integration and data migration management",
      "Staff training and customer communication programs",
      "Performance monitoring and optimization cycles",
      "Ongoing support and continuous improvement",
      "ROI measurement and business outcome reporting",
      "Post-launch enhancement and feature expansion",
    ],
  },
];

const roiAreas = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Increased online sales conversion rates",
      "Higher average order values through personalization",
      "Improved customer lifetime value and retention",
      "Faster time-to-market for new products and campaigns",
    ],
  },
  {
    icon: Package,
    title: "Operational Excellence",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Reduced inventory holding costs and stockouts",
      "Faster order fulfillment and shipping times",
      "Automated supply chain coordination",
      "Lower operational costs through efficiency gains",
    ],
  },
  {
    icon: Heart,
    title: "Customer Loyalty",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Higher customer satisfaction and NPS scores",
      "Increased repeat purchase rates",
      "Stronger brand loyalty and advocacy",
      "Better customer insights and predictive capabilities",
    ],
  },
];

const moduleHighlights = [
  { icon: ShoppingBag, label: "E-commerce Platform" },
  { icon: RefreshCw, label: "Omnichannel" },
  { icon: Users, label: "Customer Data" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Package, label: "Supply Chain" },
  { icon: Zap, label: "Automation" },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function RetailDigitalTransformationPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white">•</span>
            <a href="/additional-industries" className="text-white hover:text-blue-200 transition-colors">Additional Industries</a>
            <span className="text-white">•</span>
            <span className="text-white">Retail Digital Transformation</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Retail Digital Transformation{" "}
                <span className="text-[#A5F3FC]">Revolutionising customer experience through e-commerce innovation.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
                Transform traditional retail operations with comprehensive digital solutions that enhance 
                customer experience, optimize supply chains, and drive measurable growth across all channels.
              </p>

              {/* Module highlights */}
              <div className="mt-6 grid grid-cols-2 gap-2 max-w-md">
                {moduleHighlights.map((m) => {
                  const Icon = m.icon;
                  return (
                    <span key={m.label} className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                      <Icon className="h-3 w-3 text-cyan-300" />
                      {m.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Stats with image */}
            <div className="relative flex items-center pb-20">
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                  alt="Retail digital"
                  className="h-96 w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-16 left-0 right-0 rounded-[22px] border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">Business Impact</div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {stats.map((s) => (
                    <div key={s.value}>
                      <div className="text-xl font-bold text-white">{s.value}</div>
                      <p className="text-[10px] leading-tight text-blue-100/70">{s.label}</p>
                    </div>
                  ))}
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
                Three challenges blocking retail digital transformation.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Even advanced retail technologies fail to deliver value when businesses lack the strategy, integration capabilities, and workforce readiness to implement them effectively.
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

      {/* ── PROGRAMME MODULES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Four solution tracks for every retail role.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Each track is designed to address a distinct dimension of retail technology capability — from hands-on e-commerce operations to strategic digital leadership.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {programmeTabs.map((tab, i) => {
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

          {programmeTabs.map((tab, i) => {
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
                      Track {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{tab.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
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

      {/* ── DELIVERY METHODOLOGY ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A three-phase approach from assessment to measurable outcomes.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Our structured methodology ensures retail solutions are grounded in your specific business model, your operational constraints, and your customer expectations — with results you can report on.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 items-stretch">
            {learningPhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <button
                  key={phase.step}
                  className="text-left rounded-[28px] bg-[#0A2463] p-6 shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl h-full"
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
                  <ul className="mt-4 space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-blue-100/85">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The measurable return on retail digital investment.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Well-implemented retail digital solutions drive revenue growth, reduce operational costs, and improve customer loyalty — all directly measurable post-implementation.
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
      <section className="bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Retail digital transformation completes the customer experience trilogy by empowering retailers with the digital capabilities needed for modern commerce.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that invest in comprehensive retail digital solutions achieve higher online conversion rates, improved customer satisfaction scores, and better operational efficiency through more connected and intelligent systems.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
                <a href="/industries-energy" className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Previous Page</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    Energy & Utilities Automation
                  </div>
                  <div className="mt-1 text-sm text-slate-500">Smart grid technology</div>
                  <div className="mt-3 text-sm font-semibold text-[#0A2463] flex items-center gap-1">
                    Read more <span className="text-lg">→</span>
                  </div>
                </a>
                <a href="/industries-retail" className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Current Page</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    Retail Digital Transformation
                  </div>
                  <div className="mt-1 text-sm text-slate-500">Part of Industries Solutions</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
