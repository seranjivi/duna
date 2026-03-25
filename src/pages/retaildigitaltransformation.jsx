import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Shield,
  Cpu,
  BarChart3,
  RefreshCw,
  Users,
  Package,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "40%", label: "Increase in online sales conversion" },
  { value: "3x", label: "Faster inventory turnover" },
  { value: "60%", label: "Reduction in operational costs" },
];

const solutions = [
  {
    icon: ShoppingBag,
    title: "E-commerce Platform",
    desc: "Modern, scalable e-commerce solutions that drive sales and enhance customer experience.",
    items: [
      "Headless commerce architecture",
      "Multi-channel inventory management",
      "AI-powered product recommendations",
      "Seamless payment integration",
    ],
  },
  {
    icon: Users,
    title: "Customer Experience",
    desc: "Omnichannel solutions that create seamless shopping experiences across all touchpoints.",
    items: [
      "Unified customer profiles",
      "Personalized shopping journeys",
      "Real-time customer support",
      "Cross-channel loyalty programs",
    ],
  },
  {
    icon: Package,
    title: "Supply Chain Optimization",
    desc: "End-to-end supply chain visibility and automation for modern retail operations.",
    items: [
      "Real-time inventory tracking",
      "Automated order fulfillment",
      "Supplier integration platforms",
      "Demand forecasting analytics",
    ],
  },
];

export default function RetailDigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
            <a href="/additional-industries" className="text-white hover:text-blue-200 transition-colors">Additional Industries</a>
            <span className="text-white">•</span>
            <span className="text-white">Retail Digital Transformation</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 mb-4">
                <Sparkles className="h-3.5 w-3.5" /> E-commerce · Omnichannel · Customer Experience
              </div>
              <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Retail digital transformation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">revolutionizing customer experience.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/82 md:text-lg">
                Transform traditional retail operations with comprehensive digital solutions that enhance 
                customer experience, optimize supply chains, and drive measurable growth across all channels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#solutions" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Explore solutions <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:selvan@duanamize.org" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Contact us
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <p className="mt-2 text-xs leading-relaxed text-blue-100/76">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Comprehensive retail transformation solutions.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              End-to-end digital retail solutions that enhance customer experience, 
              optimize operations, and drive sustainable growth across all channels.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <div key={solution.title} className="rounded-[20px] border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{solution.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 mb-4">{solution.desc}</p>
                  <ul className="space-y-2">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
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

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="overflow-hidden rounded-[24px] border border-blue-200 bg-white p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mb-4">
                  <TrendingUp className="h-3.5 w-3.5" /> Retail transformation ready
                </div>
                <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Transform your retail business for the digital age.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Duanamize delivers comprehensive retail transformation solutions that enhance 
                  customer experience, optimize operations, and drive measurable growth.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                  Start transformation <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:selvan@duanamize.org" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
