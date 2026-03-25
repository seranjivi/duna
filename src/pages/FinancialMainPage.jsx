import React from "react";
import {
  ArrowRight, BarChart3, Brain, Building2, CheckCircle2, ChevronDown,
  Clock3, CreditCard, Globe2, Landmark, Link, Lock, Mail, MapPin,
  Menu, Network, Phone, Shield, ShieldCheck, Smartphone, Sparkles,
  TrendingUp, Users, Wallet, Zap, Activity, Bot, Eye,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const solutions = [
  { icon: Smartphone, title: "Banking Digital Transformation", desc: "Reimagine customer experiences, modernize core banking, and lead the fintech revolution with a structured transformation roadmap.", link: "#", color: "from-amber-400 to-yellow-500" },
  { icon: Bot, title: "AI-Powered FinTech Automation", desc: "Deploy machine learning, NLP, and predictive analytics across lending, payments, fraud detection, and customer service workflows.", link: "#", color: "from-blue-400 to-cyan-500" },
  { icon: Shield, title: "Compliance & RegTech", desc: "Automate AML, KYC, transaction monitoring, and regulatory reporting with AI-driven compliance systems that scale with your institution.", link: "#", color: "from-violet-400 to-indigo-500" },
  { icon: CreditCard, title: "Payment Modernization", desc: "Enable real-time payments, contactless solutions, cross-border transfers, and digital wallet integration for the modern customer.", link: "#", color: "from-rose-400 to-pink-500" },
  { icon: BarChart3, title: "Wealth & Investment Tech", desc: "Build robo-advisors, algorithmic trading platforms, and automated portfolio management for the next generation of investors.", link: "#", color: "from-emerald-400 to-teal-500" },
  { icon: Network, title: "Open Banking & APIs", desc: "Enable third-party integrations, HIE connectivity, and ecosystem partnerships through scalable API infrastructure and open banking strategy.", link: "#", color: "from-orange-400 to-amber-500" },
];

const stats = [
  { value: "80%", label: "of banking leaders call digital transformation the top priority" },
  { value: "70%", label: "Reduction in false positives with AI compliance tools" },
  { value: "3x", label: "Faster product launches with cloud-native architecture" },
  { value: "60%", label: "Reduction in operational compliance costs" },
];

const whyUs = [
  { icon: Landmark, title: "Finance-Domain Expertise", text: "Deep knowledge of banking operations, regulatory requirements, and fintech ecosystems across global markets." },
  { icon: Shield, title: "Compliance-First Approach", text: "Every solution is designed with regulatory awareness built in from day one — not retrofitted after deployment." },
  { icon: Zap, title: "Rapid Implementation", text: "Structured methodology that reduces deployment risk and accelerates time-to-value for financial institutions." },
  { icon: TrendingUp, title: "Measurable ROI", text: "Clear KPIs defined upfront — revenue impact, cost reduction, risk mitigation, and customer experience improvement." },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg ring-1 ring-white/25">
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

export default function FinancialMainPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Text */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
                <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a><span className="text-white">•</span>
                <span className="text-white">Finance Services</span>
              </div>
              <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight text-[#A5F3FC] md:text-6xl">
                The future of finance runs on smarter technology.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white md:text-lg max-w-xl">
                Duanamize helps banks and financial institutions navigate digital transformation, automate compliance,
                and deploy AI-powered fintech solutions — so they can lead the market, not just survive it.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[20px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-1 text-[11px] leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Panel */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-slate-950/50">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" alt="Financial technology" className="h-80 w-full object-cover" />
                <div className="absolute inset-0 h-80 bg-gradient-to-t from-[#071857] via-[#071857]/10 to-transparent" />

                {/* floating badge */}
                <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Live fintech transformation</span>
                  </div>
                </div>

                <div className="bg-slate-950/40 p-5 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/60 mb-3">Financial solutions</div>
                  <div className="flex flex-wrap gap-2">
                    {["Digital Banking", "RegTech", "AML Automation", "Open Banking", "Payment Tech", "Robo-Advisors"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section id="solutions" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              End-to-end financial technology services.
            </h2>
            <p className="mt-3 whitespace-normal text-sm leading-relaxed text-slate-600 md:text-lg">
              From digital banking transformation to AI compliance automation — every solution is built around
              measurable financial performance and regulatory excellence.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div key={sol.title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${sol.color} text-white shadow-lg`}><Icon className="h-6 w-6" /></div>
                    <h3 className="text-lg font-semibold text-slate-950">{sol.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{sol.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY DUANAMIZE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] bg-slate-950 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80" alt="Financial technology background" className="h-full min-h-[460px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463]/95 via-[#071857]/85 to-[#030B1A]/95" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Landmark className="h-3.5 w-3.5" /> Why Duanamize Financial
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    We do not just implement technology. We transform how financial institutions compete.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    Every engagement starts with your business context, regulatory environment, and strategic goals —
                    so technology serves your competitive ambition.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["Regulatory-Aware", "Finance-Domain Experts", "Proven ROI Delivery", "Structured Methodology"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-300 shrink-0" />{item}
                      </div>
                    ))}
                  </div>

                  {/* Additional content to balance height */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {/* <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                      <h4 className="text-lg font-semibold text-white mb-3">Regulatory Compliance</h4>
                      <ul className="space-y-2 text-sm leading-relaxed text-blue-100/90">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>Comprehensive framework built into every solution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>AML, KYC, and regulatory reporting automation</span>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                      <h4 className="text-lg font-semibold text-white mb-3">Domain Expertise</h4>
                      <ul className="space-y-2 text-sm leading-relaxed text-blue-100/90">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>Banking, insurance, and fintech sectors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>Global regulatory requirements knowledge</span>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                      <h4 className="text-lg font-semibold text-white mb-3">ROI Measurement</h4>
                      <ul className="space-y-2 text-sm leading-relaxed text-blue-100/90">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>Clear KPIs defined before implementation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>Measurable cost reduction and efficiency gains</span>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                      <h4 className="text-lg font-semibold text-white mb-3">Deployment Methodology</h4>
                      <ul className="space-y-2 text-sm leading-relaxed text-blue-100/90">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>Phased deployment minimizes risk</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span>Maximizes user adoption and success</span>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl mb-8">
                Built for financial leaders who demand measurable, compliant results.
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-cyan-400"><Icon className="h-5 w-5" /></div>
                      <div className="mt-3 text-base font-semibold text-slate-950">{item.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-4xl">
              Go deeper into our financial solutions.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {/* Banking Digital Transformation */}
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" alt="Banking transformation" className="h-52 w-full object-cover" />
              <div className="absolute inset-0 h-52 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute left-5 bottom-[215px] right-5">
                <span className="rounded-full bg-amber-500/20 border border-amber-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-100">
                  Digital Banking
                </span>
              </div>
              <div className="p-6">
                <h3 style={serif} className="text-xl font-semibold text-slate-950">
                  Banking Digital Transformation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Customer expectations, competitive pressures, and regulatory evolution are converging. Explore how
                  Duanamize helps banks lead the fintech revolution.
                </p>
                <a href="/industries-financial-banking" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0a1628] transition group-hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Financial Compliance */}
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" alt="Financial compliance" className="h-52 w-full object-cover" />
              <div className="absolute inset-0 h-52 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute left-5 bottom-[215px] right-5">
                <span className="rounded-full bg-indigo-500/20 border border-indigo-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-indigo-100">
                  RegTech & Compliance
                </span>
              </div>
              <div className="p-6">
                <h3 style={serif} className="text-xl font-semibold text-slate-950">
                  Financial Compliance Automation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  AML automation, regulatory reporting, and real-time transaction monitoring — turning compliance from
                  a burden into a competitive advantage.
                </p>
                <a href="/industries-financial-compliance" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0a1628] transition group-hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Ready to transform how your financial institution competes?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white md:text-lg">
                  Whether you are modernizing digital banking, automating compliance, or building fintech capabilities
                  from scratch — Duanamize is the right transformation partner to start with.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
