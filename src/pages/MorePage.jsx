import React from "react";
import {
  ArrowRight,
  Factory,
  Users,
  HelpCircle,
  HeartHandshake,
  Briefcase,
  TrendingUp,
  Cpu,
  Cog,
  BarChart3,
  Shield,
  Zap,
  ChevronRight,
  Globe,
  Award,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const manufacturingStats = [
  { value: "40%", label: "Reduction in production downtime" },
  { value: "60%", label: "Improvement in quality defect rates" },
  { value: "3.2×", label: "ROI achieved within 18 months" },
];

const capabilities = [
  {
    icon: Cpu,
    title: "AI-Powered Process Intelligence",
    desc: "Deploy intelligent monitoring and predictive analytics across your production lines to eliminate waste and prevent failures before they occur.",
    gradient: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Cog,
    title: "Lean Six Sigma Transformation",
    desc: "Apply rigorous LSS+AI methodology to manufacturing workflows — from raw material intake to finished goods dispatch — achieving measurable throughput gains.",
    gradient: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    icon: BarChart3,
    title: "Operational Excellence Programs",
    desc: "Build a continuous improvement culture with structured training, certification, and change management programs tailored to manufacturing environments.",
    gradient: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
];

const moreLinks = [
  {
    id: "partner",
    icon: HeartHandshake,
    tag: "Partnership",
    title: "Partner with Duanamize",
    desc: "Join our global partner ecosystem and deliver AI-powered operational excellence to your clients. Technology, implementation, and channel partnerships available.",
            cta: "Learn more",
    accent: "from-cyan-400 to-sky-500",
    page: "PartnerPage",
  },
  {
    id: "careers",
    icon: Briefcase,
    tag: "Careers",
    title: "Build Your Future with Us",
    desc: "Shape the future of business transformation. Work with cutting-edge LSS+AI technology and deliver breakthrough results for Fortune 500 clients across 15+ countries.",
            cta: "Learn more",
    accent: "from-sky-500 to-indigo-500",
    page: "CareersPage",
  },
  {
    id: "faq",
    icon: HelpCircle,
    tag: "Support",
    title: "Frequently Asked Questions",
    desc: "Everything you need to know about our LSS+AI methodology, implementation timelines, data security, pricing, and how to get started with Duanamize.",
            cta: "Learn more",
    accent: "from-indigo-500 to-blue-600",
    page: "FAQPage",
  },
];

export default function MorePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          {/* Breadcrumb */}

             <div className="inline-flex items-center gap-2 mt-4 rounded-full border border-white/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#071857] mb-4">
            More
          </div>
          <div className="text-sm text-blue-100/70">
            <a href="/" className="text-white hover:text-blue-200 transition-colors">Home</a>
            <span className="mx-2 text-white">/</span>
            <span className="text-white">More</span>
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Transforming Manufacturing{" "}
                <span className="text-[#A5F3FC]">with Intelligence & Precision.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Duanamize brings the power of LSS+AI methodology to the manufacturing floor — eliminating
                defects, reducing downtime, and building operational excellence that compounds over time.
                From automotive to electronics, we serve manufacturers who demand measurable results.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {manufacturingStats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white/75">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20">
                    <Globe className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-blue-200/60">Global Reach</div>
                    <div className="text-white font-semibold">15+ Countries Served</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["Automotive", "Electronics", "FMCG", "Aerospace", "Pharma", "Industrial"].map((ind) => (
                    <span key={ind} className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1.5 text-xs font-medium text-white/80 text-center">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-cyan-300" />
                  <p className="text-sm text-white/85 leading-relaxed">
                    Trusted by Fortune 500 manufacturers and growing enterprises across 4 continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING CAPABILITIES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Manufacturing solutions built for real-world complexity.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base lg:max-w-lg">
              Our LSS+AI approach combines the rigour of Lean Six Sigma with artificial intelligence —
              delivering improvements that are both immediate and sustainable across every layer of
              your manufacturing operation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`rounded-[28px] border ${cap.border} ${cap.bg} p-6 transition hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cap.gradient} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-950">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MORE LINKS SECTION ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-12">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Explore more from Duanamize.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Whether you're looking to partner with us, build your career, or find answers —
              explore what Duanamize has to offer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {moreLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate && onNavigate(link.page)}
                  className="group text-left rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br ${link.accent} text-white shadow-lg mb-5`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
                    {link.tag}
                  </div>
                  <h3 style={serif} className="text-xl font-semibold text-slate-950 mb-3">{link.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6">{link.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463] group-hover:gap-3 transition-all">
                    {link.cta} <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              
              <div>
              
                
                <h2 style={serif} className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Ready to transform your manufacturing operations?
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
                  Speak with a Duanamize manufacturing expert today and discover how LSS+AI methodology
                  can deliver measurable results across your production environment.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Request a consultation <ArrowRight className="h-4 w-4" />
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
