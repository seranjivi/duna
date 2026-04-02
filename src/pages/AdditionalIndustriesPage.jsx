import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  ShoppingBag,
  Sparkles,
  Globe2,
  TrendingUp,
  Shield,
  Cpu,
  BarChart3,
  RefreshCw,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "50+", label: "Industry transformation projects delivered" },
  { value: "6", label: "Core industry verticals served" },
  { value: "99%", label: "Client satisfaction across engagements" },
];

const industries = [
  {
    href: "/industries-energy",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    accent: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    label: "Energy & Utilities Automation",
    tag: "Smart Grid · IoT · Digital Transformation",
    heading: "Smart grid technology for sustainable power management.",
    body:
      "Integrating advanced technologies, artificial intelligence, and IoT solutions to create intelligent, efficient, and sustainable energy systems. We help utilities optimize power generation, distribution, and consumption.",
    bullets: [
      "Advanced Metering Infrastructure (AMI)",
      "Power grid & distribution automation",
      "Renewable energy integration",
      "Predictive maintenance for utilities",
    ],
  },
  {
    href: "/industries-retail",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    accent: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    label: "Retail Digital Transformation",
    tag: "E-commerce · Omnichannel · Customer Experience",
    heading: "Revolutionising customer experience through e-commerce innovation.",
    body:
      "Retail technology solutions that transform every aspect of operations — from customer acquisition and engagement to inventory management and supply chain optimization for modern, competitive retailers.",
    bullets: [
      "E-commerce automation & order management",
      "Omnichannel retail strategy",
      "Customer data platform implementation",
      "AI-powered personalisation engines",
    ],
  },
];

const pillars = [
  { icon: Cpu, title: "Smart Infrastructure", desc: "IoT, sensors, and edge computing connecting physical and digital operations." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Real-time dashboards and predictive models driving operational decisions." },
  { icon: RefreshCw, title: "Process Automation", desc: "End-to-end workflow automation reducing manual effort and error rates." },
  { icon: Shield, title: "Security & Compliance", desc: "Embedded governance, cybersecurity, and regulatory compliance frameworks." },
  { icon: TrendingUp, title: "Revenue Optimization", desc: "Technology strategies that directly improve top-line and margin performance." },
  { icon: Globe2, title: "Customer Experience", desc: "Seamless, personalised engagement across every digital and physical touchpoint." },
];

export default function AdditionalIndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white/40">•</span>
            <span className="text-white/70">Additional Industries</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>

              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Industry-specific technology{" "}
                <span className="text-[#A5F3FC]">built for real operational complexity.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Beyond manufacturing, Duanamize delivers deep technology transformation across Energy &
                Utilities and Retail — sectors where operational stakes are high and digital change
                demands precision, not generic playbooks.
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

            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"
                  alt="Industry technology transformation"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Additional industry verticals
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Energy & Utilities", "Retail", "Smart Grid", "E-commerce", "IoT Solutions", "Omnichannel"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Sector-specific expertise paired with a consistent delivery framework —
                        so transformation is predictable and outcomes are measurable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL INDUSTRIES CARDS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Two industries. Two transformation stories.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Select an industry below to explore the full technology practice — including challenges, strategies, platform solutions, and measurable ROI.
            </p>
          </div>

          {/* Industry Cards — matching the screenshot layout */}
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <a
                  key={ind.label}
                  href={ind.href}
                  className={`group rounded-[32px] border ${ind.border} ${ind.bg} p-8 flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl cursor-pointer`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br ${ind.accent} text-white shadow-lg`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{ind.tag}</div>
                        <h3 style={serif} className="text-xl font-semibold text-slate-950">{ind.label}</h3>
                      </div>
                    </div>
                    <div className="mt-5 overflow-hidden rounded-[20px] border border-slate-200">
                      <img src={ind.image} alt={ind.label} className="h-48 w-full object-cover" />
                    </div>
                    <p className="text-base font-semibold text-slate-900 leading-snug mb-3 mt-5">{ind.heading}</p>
                    <p className="text-sm leading-relaxed text-slate-600">{ind.body}</p>
                    <ul className="mt-5 space-y-2">
                      {ind.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 rounded-xl border border-white/80 bg-white/60 px-4 py-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0A2463]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A2463] transition group-hover:border-[#0A2463]/30 group-hover:bg-blue-50/60">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              );
            })}
          </div>

     
        </div>
      </section>

      {/* ── SHARED PILLARS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                A consistent delivery framework across every industry.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Whether we're modernising a power grid or transforming a retail operation, the same six
                technology pillars underpin every Duanamize engagement.
              </p>
              <div className="mt-6 space-y-3">
                {["Sector-specific domain expertise", "Outcome-based engagement model", "End-to-end from strategy to delivery", "Ongoing optimization post-implementation"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="rounded-[26px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2463] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-slate-950">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
 
    </div>
  );
}
