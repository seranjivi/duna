import React from "react";
import {
  ArrowRight, Award, BarChart3, BookOpen, ChevronDown, ChevronRight,
  Clock3, FileText, Landmark, Mail, MapPin, Menu, Network,
  Phone, Shield, ShieldCheck, Sparkles, Star, TrendingUp,
  Users, Zap, CheckCircle2, Target, Globe2, Layers3,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const subMenus = [
  {
    icon: BookOpen,
    title: "Case Studies",
    desc: "Deep-dive case studies showcasing LSS+AI in action across healthcare, FinTech, automotive, retail, manufacturing, and energy — with real challenges, solutions, and outcomes.",
    link: "#case-studies",
    color: "from-cyan-400 to-blue-500",
    tag: "6 Industries",
  },
  {
    icon: BarChart3,
    title: "Impact Metrics",
    desc: "Quantifiable results and ROI data from our transformation engagements — efficiency gains, cost savings, quality improvements, and customer satisfaction benchmarks.",
    link: "#impact-metrics",
    color: "from-blue-400 to-indigo-500",
    tag: "Measurable ROI",
  },
  {
    icon: Star,
    title: "Client Stories",
    desc: "Direct testimonials from COOs, VPs, and operations leaders who have partnered with Duanamize — in their own words, about the challenges, journey, and results achieved.",
    link: "#client-stories",
    color: "from-teal-400 to-cyan-500",
    tag: "Client Voice",
  },
  {
    icon: Layers3,
    title: "Transformation Journeys",
    desc: "Multi-year, multi-phase transformation programmes — capability maturity progression, technology adoption roadmaps, and the structured methodology behind lasting change.",
    link: "#transformation-journeys",
    color: "from-indigo-400 to-violet-500",
    tag: "End-to-End",
  },
];

const overallStats = [
  { value: "30–50%", label: "Process cycle time reduction across engagements" },
  { value: "20–40%", label: "Productivity enhancement through automation" },
  { value: "15–30%", label: "Cost reduction via waste elimination" },
  { value: "6+", label: "Industries transformed with LSS+AI methodology" },
];

const industries = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "🏦", label: "Financial Services" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🚗", label: "Automotive" },
  { icon: "🛒", label: "Retail" },
  { icon: "⚡", label: "Energy" },
];

const highlights = [
  { icon: Target, title: "Transparent Methodology", text: "Each result is grounded in clear KPIs, measurable baselines, and outcome tracking from day one of engagement." },
  { icon: TrendingUp, title: "Cross-Industry Proof", text: "Results span healthcare, finance, manufacturing, and technology — demonstrating methodology robustness across diverse operating environments." },
  { icon: Shield, title: "Sustainable Impact", text: "Transformation benefits persist beyond engagement through capability building, internal champions, and continuous improvement culture." },
  { icon: Users, title: "Human + Digital Results", text: "Measurable improvement in both operational metrics and employee/patient satisfaction — not just technology deployment." },
];

export default function ResultsMainPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
            <a href="/" className="text-white hover:text-blue-200 transition-colors">Home</a>
            <span className="text-white">•</span>
            <span className="text-white">Results</span>
          </div>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 mb-4">
                <Sparkles className="h-3.5 w-3.5" /> Proven Transformation Outcomes
              </div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Results that speak louder than{" "}
                <span className="text-[#A5F3FC]">promises.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                We take pride in our track record of delivering transformative outcomes for clients across
                industries. Every case study, metric, and client story reflects the measurable, lasting impact
                of our LSS+AI methodology — driving breakthrough results and sustainable competitive advantage.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#sub-menus" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                  Explore results <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#highlights" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Our approach
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-4">
                {overallStats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Results and metrics"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[14px] border border-cyan-400/20 bg-[#071857]/70 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Transformation outcomes verified</span>
                  </div>
                </div>
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70 mb-3">Industries covered</div>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <span key={ind.label} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {ind.icon} {ind.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 SUB-MENU CARDS ── */}
      <section id="sub-menus" id="case-studies" id="metrics" id="stories" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" /> Four results perspectives
            </div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Explore our transformation track record.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-lg">
              From detailed industry case studies to quantified impact metrics, client testimonials, and
              multi-year journey narratives — four lenses into the Duanamize results story.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {subMenus.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.link}
                  className="group relative rounded-[24px] border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br ${item.color} text-white shadow-lg shadow-blue-900/30`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                          <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">{item.tag}</span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-400 shrink-0 mt-1 transition group-hover:text-blue-500 group-hover:translate-x-1" />
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3">
                    Explore {item.title} <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY OUR RESULTS MATTER ── */}
      <section id="highlights" id="journeys" className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                alt="Business results"
                className="h-full min-h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857] via-[#071857]/90 to-[#0A2463]" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                  <Award className="h-3.5 w-3.5" /> Our Measurement Approach
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    Results aligned to strategy with clear KPIs and real-time tracking.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
                    Our measurement framework ensures ROI delivery and continuous improvement — value alignment,
                    performance measurement, value realization, and continuous improvement built into every engagement.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["Value Alignment", "Performance Tracking", "ROI Measurement", "Continuous Improvement"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463] mb-4">
                <Sparkles className="h-3.5 w-3.5" /> Why our results stand out
              </div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl mb-8">
                Transformation evidence built on transparency and measurable proof.
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:shadow-lg">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-base font-semibold text-slate-900">{item.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK STATS BANNER ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463]">
              <Sparkles className="h-3.5 w-3.5" /> Headline impact numbers
            </div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-4xl">
              The numbers behind the transformation.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "35%", label: "Patient wait time reduction", context: "Healthcare" },
              { value: "60%", label: "Faster loan processing", context: "Financial Services" },
              { value: "$1M+", label: "Annual cost savings per client", context: "Healthcare" },
              { value: "95%", label: "Automation rate for standard applications", context: "Banking" },
            ].map((s) => (
              <div key={s.value} className="rounded-[22px] border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600">{s.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-900">{s.label}</div>
                <div className="mt-1 text-xs text-slate-500">{s.context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-100 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[24px] border border-blue-200 bg-white p-8 md:p-10 shadow-lg">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-600">
                  <Sparkles className="h-3.5 w-3.5" /> Ready to add your story?
                </div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                  Join the organisations achieving breakthrough results with Duanamize.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-lg">
                  Whether you are exploring transformation for the first time or looking to scale an existing
                  programme — start with a conversation about what your results could look like.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                  Start the conversation <ArrowRight className="h-4 w-4" />
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
