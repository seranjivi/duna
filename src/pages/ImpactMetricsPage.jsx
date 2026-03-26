// ============================================================
// IMPACT METRICS PAGE
// ============================================================
import React, { useState } from "react";
import {
  ArrowRight, Award, BarChart3, CheckCircle2, ChevronDown, Clock3,
  Heart, Mail, MapPin, Menu, Phone, Shield, ShieldCheck,
  Sparkles, Star, TrendingUp, Users, Zap, Activity, Target,
  Layers3, RefreshCw, Brain, Gauge,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const efficiencyMetrics = [
  { label: "Process Cycle Time Reduction", range: "30–50%", items: ["30–50% reduction in process cycle times and lead times", "Automated decision-making accelerates processes", "Enhanced flow reduces unnecessary delays"] },
  { label: "Productivity Enhancement", range: "20–40%", items: ["Optimised resource allocation", "Maximised workforce effectiveness", "Reduced manual effort through automation"] },
  { label: "Cost Reduction", range: "15–30%", items: ["Waste elimination across processes", "Reduced operational overhead", "Lower cost of quality through prevention"] },
];

const qualityMetrics = [
  { label: "Defect Reduction", range: "20–40%", desc: "We improve quality by reducing defects, errors, and rework while using predictive analytics to prevent issues. Statistical control and root cause analysis ensure lasting performance improvements." },
  { label: "Process Yield", range: "15–30%", desc: "We boost first-pass yield and throughput with stronger process capability and quality control. This reduces inspection needs and cuts rework costs for lasting efficiency." },
  { label: "Compliance Excellence", range: "10–25%", desc: "We strengthen compliance with automated monitoring and proactive risk identification. Continuous regulatory alignment reduces incidents and eliminates costly penalties." },
];

const industryResults = [
  { icon: Heart, title: "Healthcare", color: "from-cyan-400 to-blue-500", results: ["35% patient wait time reduction", "25% decrease in readmission rates", "$1M+ annual cost savings", "22-point patient satisfaction improvement"] },
  { icon: Shield, title: "Financial Services", color: "from-blue-400 to-indigo-500", results: ["60% faster loan processing", "40% reduction in operational costs", "20-point NPS improvement", "95% automation rate for standard applications"] },
  { icon: Gauge, title: "Manufacturing", color: "from-teal-400 to-cyan-500", results: ["35%+ OEE improvement", "60% reduction in unplanned downtime", "40% defect reduction via Six Sigma", "25% cost reduction through lean"] },
  { icon: Brain, title: "Technology", color: "from-indigo-400 to-violet-500", results: ["30% cycle time reduction", "50% straight-through processing", "99.9% system uptime", "Accelerated innovation adoption"] },
];

const satisfactionMetrics = [
  { label: "Customer Experience", range: "10–20%", items: ["Improved service delivery speed", "Enhanced customer touchpoints", "Reduced complaint resolution time"] },
  { label: "Employee Engagement", range: "15–30%", items: ["Streamlined daily operations", "Reduced manual, repetitive tasks", "Enhanced job satisfaction"] },
  { label: "Service Quality", range: "20–30%", items: ["Proactive issue identification", "Improved first-call resolution", "Enhanced service consistency"] },
];

const measurementFramework = [
  { icon: Target, title: "Value Alignment", desc: "Objective mapping and KPI-driven targets aligned with organisational priorities." },
  { icon: BarChart3, title: "Performance Measurement", desc: "Automated insights, live dashboards, and precise progress tracking." },
  { icon: TrendingUp, title: "Value Realization", desc: "Measuring value through financial impact, benefits capture, and ROI tracking." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "Ongoing optimisation and capability maturity through structured cycles." },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-lg ring-1 ring-white/25">
        <div className="absolute inset-1 rounded-full border border-white/30" />
        <div className="absolute inset-0 grid place-items-center text-lg font-black text-white">D</div>
      </div>
      <div>
        <div className="leading-tight font-semibold tracking-wide text-white">DUANAMIZE</div>
        <div className="text-[11px] tracking-[0.18em] text-blue-200/70">GLOBAL SERVICES</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 md:px-8">
      <LogoMark />
      <nav className="hidden items-center gap-6 text-sm text-blue-100/80 lg:flex">
        <a href="#" className="transition-colors hover:text-white">Home</a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">Approach <ChevronDown className="h-3.5 w-3.5" /></a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">Solutions <ChevronDown className="h-3.5 w-3.5" /></a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">Industries <ChevronDown className="h-3.5 w-3.5" /></a>
        <a href="/results" className="text-white font-medium border-b border-cyan-400 pb-0.5">Results</a>
        <a href="#" className="transition-colors hover:text-white">About Us</a>
      </nav>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/8 md:inline-flex">Contact Us</button>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white lg:hidden"><Menu className="h-5 w-5" /></button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5" style={{ background: "linear-gradient(180deg,#060d1f 0%,#04091a 100%)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr_1fr] md:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/55">Quantifiable transformation metrics from LSS+AI engagements — efficiency, quality, cost, and satisfaction benchmarks verified across industries.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
            <BarChart3 className="h-3.5 w-3.5" /> Verified impact metrics
          </div>
        </div>
        <div><h4 className="text-sm font-semibold text-white">Results</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["Case Studies","Impact Metrics","Client Stories","Transformation Journeys"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
        <div><h4 className="text-sm font-semibold text-white">Company</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["About Us","Careers","Client Stories","Partner Inquiries","FAQ"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
        <div><h4 className="text-sm font-semibold text-white">Useful Links</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["Privacy Policy","Terms and Conditions","Disclaimer","Contact Us"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
        <div>
          <h4 className="text-sm font-semibold text-white">Contact Us</h4>
          <ul className="mt-3 space-y-3 text-sm text-blue-200/55">
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-cyan-400" /><span>selvan@duanamize.org</span></li>
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-cyan-400" /><span>+91 9884919972</span></li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-cyan-400" /><span>Sembakkam, Chennai, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-blue-200/35 md:flex-row md:items-center md:justify-between md:px-8">
          <div>  Duanamize Global Services Private Limited. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Verified results</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Outcome-first engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ImpactMetricsPage() {
  return (
    <div className="min-h-screen text-white" style={{ background: "linear-gradient(135deg,#0a1628 0%,#0d1f3c 40%,#0f2550 70%,#0a1e45 100%)" }}>
      <div className="pointer-events-none fixed inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
            <a href="/results" className="text-white hover:text-blue-200 transition-colors">Results</a>
            <span className="text-white">•</span>
            <span className="text-white">Impact Metrics</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl mt-4 font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Impact metrics {" "}
                <span className="text-[#A5F3FC]">real improvements, real numbers.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                We measure transformation success with clear impact metrics. Our LSS+AI methodology delivers
                real improvements in efficiency, quality, cost, and customer experience — helping organisations
                achieve sustainable growth with numbers you can report to the board.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "30–50%", label: "Cycle time reduction" },
                  { value: "20–40%", label: "Defect reduction" },
                  { value: "15–30%", label: "Cost savings achieved" },
                ].map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Impact metrics" className="h-72 w-full object-cover opacity-65" />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[14px] border border-cyan-400/20 bg-[#0a1628]/70 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /><span className="text-xs font-semibold text-white">Live ROI tracking active</span></div>
                </div>
                <div className="p-5 border-t border-white/8" style={{ background: "rgba(10,22,40,0.6)" }}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/65 mb-3">Metric categories</div>
                  <div className="flex flex-wrap gap-2">
                    {["Efficiency Gains","Cost Reduction","Quality Improvement","Compliance","Customer Experience","Employee Engagement"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-blue-100/75">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFICIENCY METRICS */}
      <section id="efficiency" className="relative bg-white text-slate-900">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Three dimensions of operational efficiency improvement.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {efficiencyMetrics.map((m) => (
              <div key={m.label} className="rounded-[22px] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-slate-900">{m.label}</h3>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">{m.range}</span>
                </div>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY METRICS */}
      <section className="relative bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Quality metrics that define excellence.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {qualityMetrics.map((m) => (
              <div key={m.label} className="rounded-[22px] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-slate-900">{m.label}</h3>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">{m.range}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY-SPECIFIC */}
      <section className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Metrics from real engagements across four sectors.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industryResults.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="rounded-[22px] border border-white/8 p-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${ind.color} text-white shadow-lg`}><Icon className="h-6 w-6" /></div>
                    <h3 className="text-base font-semibold text-white">{ind.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {ind.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-blue-200/60">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SATISFACTION + TECH */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 style={serif} className="text-3xl font-semibold md:text-4xl mb-6">The human side of the metrics.</h2>
              <div className="grid gap-4">
                {satisfactionMetrics.map((m) => (
                  <div key={m.label} className="rounded-[20px] border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-semibold text-white">{m.label}</h3>
                      <span className="rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-sm font-bold text-cyan-400">{m.range}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {m.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-blue-200/55">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={serif} className="text-3xl font-semibold md:text-4xl mb-6">Digital performance benchmarks.</h2>
              <div className="grid gap-4">
                {[
                  { title: "Automation Effectiveness", desc: "Achieve 35% higher equipment effectiveness and up to 50% more straight-through processing, with 24/7 scalability to meet peak demand." },
                  { title: "System Performance", desc: "Ensure 99.9% uptime with real-time monitoring, predictive analytics, and seamless integration across enterprise and legacy systems." },
                  { title: "Innovation Acceleration", desc: "Reduce cycle times and errors by up to 30% while building adaptive capabilities and a culture of continuous innovation." },
                ].map((item) => (
                  <div key={item.title} className="rounded-[20px] border border-cyan-400/15 p-5" style={{ background: "rgba(56,189,248,0.04)" }}>
                    <div className="flex items-start gap-3">
                      <Zap className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <div>
                        <div className="text-base font-semibold text-white">{item.title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-blue-200/55">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEASUREMENT FRAMEWORK */}
      <section id="framework" className="relative bg-white text-slate-900">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Four pillars of transparent ROI delivery.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 whitespace-normal">Strategy aligned with clear KPIs and real-time tracking — ensuring ROI delivery and continuous improvement for lasting impact.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {measurementFramework.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><Icon className="h-6 w-6" /></div>
                      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTINUE EXPLORING ── */}
      <section className="bg-slate-50 pt-8 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-white p-8 shadow-2xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                  Continue exploring transformation results
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-lg">
                  This Impact Metrics page is part of our comprehensive Results section showcasing quantifiable outcomes from LSS+AI transformations across industries.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Current Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Impact Metrics: Real Improvements, Real Numbers
                  </h3>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Next Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Client Stories: Transformation in Their Own Words
                  </h3>
                  <a href="/client-stories" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700">
                    View page <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
