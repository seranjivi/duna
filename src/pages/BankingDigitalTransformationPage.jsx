import React, { useState } from "react";
import {
  ArrowRight, Bot, Brain, Building2, CheckCircle2, ChevronDown,
  Clock3, CreditCard, Globe2, Landmark, Mail, MapPin, Menu,
  Network, Phone, Shield, ShieldCheck, Smartphone, Sparkles,
  TrendingUp, Users, Wallet, Zap, BarChart3, Link, Layers3,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const drivers = [
  {
    icon: Smartphone, title: "Customer Expectations", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", border: "border-blue-100",
    items: ["24/7 accessibility and real-time service", "Personalized financial products and advice", "Seamless omnichannel experiences", "Mobile-first interaction preferences"],
  },
  {
    icon: TrendingUp, title: "Competitive Pressures", color: "from-amber-400 to-orange-500", bg: "bg-amber-50", border: "border-amber-100",
    items: ["Fintech startups disrupting traditional services", "Big Tech companies entering financial services", "Neo-banks offering streamlined experiences", "Cryptocurrency and blockchain innovations"],
  },
  {
    icon: Shield, title: "Regulatory Evolution", color: "from-violet-400 to-indigo-500", bg: "bg-violet-50", border: "border-violet-100",
    items: ["Open banking and API mandates", "Enhanced data protection requirements", "Real-time payment system implementations", "Digital identity verification standards"],
  },
];

const innovationTabs = [
  {
    label: "Payments", icon: CreditCard, title: "Payment Technologies",
    items: ["Contactless and mobile payment solutions", "Real-time payment networks and instant transfers", "Cryptocurrency integration and digital wallets", "Cross-border payment optimization"],
  },
  {
    label: "Lending", icon: Landmark, title: "Lending & Credit",
    items: ["AI-powered credit scoring and risk assessment", "Alternative data sources for underwriting", "Automated loan origination and processing", "Peer-to-peer lending platforms"],
  },
  {
    label: "Wealth", icon: BarChart3, title: "Wealth Management",
    items: ["Robo-advisors and algorithmic trading", "Personalized investment recommendations", "Automated portfolio rebalancing", "Social trading and copy investing"],
  },
];

const techTrends = [
  { icon: Brain, title: "AI & Machine Learning", accent: "from-blue-500 to-indigo-600",
    items: ["Fraud detection and prevention systems", "Customer service chatbots and virtual assistants", "Predictive analytics for risk management", "Personalized product recommendations"] },
  { icon: Link, title: "Blockchain & DLT", accent: "from-amber-500 to-orange-500",
    items: ["Smart contracts for automated transactions", "Trade finance and supply chain optimization", "Identity verification and KYC processes", "Central bank digital currencies (CBDCs)"] },
  { icon: Network, title: "Cloud & APIs", accent: "from-cyan-500 to-teal-500",
    items: ["Scalable infrastructure and rapid deployment", "Third-party integration and partnership enablement", "Real-time data processing and analytics", "Cost optimization and operational efficiency"] },
];

const stats = [
  { value: "80%", label: "of banking leaders say digital transformation is top priority" },
  { value: "3x", label: "Faster product launch with cloud-native architecture" },
  { value: "60%", label: "Reduction in operational costs through automation" },
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

export default function BankingDigitalTransformationPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-blue-100/60 mb-5">
                <span>Solutions</span><span>•</span><span className="text-white">Banking Digital Transformation</span>
              </div>
              <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Banking digital transformation — from legacy to leadership.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white md:text-lg max-w-xl">
                Digital transformation has evolved from a competitive advantage to an existential necessity. Duanamize
                helps financial institutions reimagine operations, enhance customer experiences, and drive sustainable growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#innovation" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Explore innovations <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#trends" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  View tech trends
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-1 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-slate-950/50">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80" alt="Banking digital transformation" className="h-72 w-full object-cover" />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Fintech transformation active</span>
                  </div>
                </div>
                <div className="bg-slate-950/40 p-5 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/60 mb-3">Transformation coverage</div>
                  <div className="flex flex-wrap gap-2">
                    {["Digital Banking", "AI Lending", "Robo-Advisors", "Blockchain", "Open APIs", "Real-time Payments"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION DRIVERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Three forces reshaping every financial institution.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-lg">
                Customer expectations, competitive disruption, and regulatory evolution are converging to make
                digital transformation an urgent strategic priority — not a future consideration.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {drivers.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.title} className={`rounded-[28px] border ${d.border} ${d.bg} p-5 transition hover:-translate-y-1 hover:shadow-lg`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${d.color} text-white shadow-lg`}><Icon className="h-6 w-6" /></div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{d.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {d.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-slate-400" />{item}
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

      {/* FINTECH INNOVATION */}
      <section id="innovation" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Innovation areas reshaping financial services.
            </h2>
            <p className="mt-3 whitespace-normal text-sm leading-relaxed text-slate-600 md:text-lg">
              From payment technologies to wealth management automation — fintech innovation continues to drive
              transformation across all aspects of financial services.
            </p>
          </div>
          <div className="mb-8 flex flex-wrap justify-start gap-2">
            {innovationTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button key={tab.label} onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === i ? "bg-[#0A2463] text-cyan-300 shadow-lg" : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"}`}>
                  <Icon className="h-4 w-4" />{tab.label}
                </button>
              );
            })}
          </div>
          {innovationTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="text-left rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-cyan-400"><Icon className="h-7 w-7" /></div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Innovation area {String(i + 1).padStart(2, "0")}</div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{tab.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {tab.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                      <div className="text-sm leading-relaxed text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TECH TRENDS */}
      <section id="trends" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] bg-slate-950 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80" alt="Financial technology trends" className="h-full min-h-[460px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0a1628]/65 to-[#0a1628]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-100/85">
                  <Zap className="h-3.5 w-3.5" /> Emerging Technologies
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    Technology is not disrupting banking — it is rebuilding it from the ground up.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
                    AI, blockchain, and cloud computing are converging to create a new financial services architecture
                    that is faster, smarter, and more customer-centric than ever before.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["AI Fraud Detection", "Smart Contracts", "Open Banking", "CBDCs"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-300 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl mb-8">
                Three technology pillars driving financial industry change.
              </h2>
              <div className="grid gap-4">
                {techTrends.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${t.accent} text-white shadow-lg`}><Icon className="h-5 w-5" /></div>
                        <h3 className="text-base font-semibold text-slate-950">{t.title}</h3>
                      </div>
                      <div className="grid gap-1.5">
                        {t.items.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500" />{item}
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

      {/* CTA */}
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Lead your financial institution into the digital era.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-lg">
                  Duanamize partners with banks and financial institutions to design, implement, and scale digital
                  transformation strategies that deliver measurable competitive advantage.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Start transformation <ArrowRight className="h-4 w-4" />
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
