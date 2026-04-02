import React, { useState } from "react";
import {
  ArrowRight, Award, BarChart3, CheckCircle2, ChevronDown, Clock3,
  Heart, Landmark, Mail, MapPin, Menu, Phone, Shield,
  ShieldCheck, Sparkles, TrendingUp, Zap, Activity, Bot,
  Factory, Car, ShoppingCart, Cpu, Lightbulb, Building2,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const industryTabs = [
  { label: "Healthcare", icon: Heart },
  { label: "FinTech", icon: Landmark },
  { label: "Automotive", icon: Car },
  { label: "Retail", icon: ShoppingCart },
  { label: "Industry 4.0", icon: Cpu },
  { label: "Energy", icon: Lightbulb },
];

const caseStudies = [
  {
    industry: "Healthcare",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    headline: "Digital transformation isn't about fancy tech — it's about solving real problems.",
    summary: "We worked with a major hospital network struggling with late disease detection, buried clinical insights, and vulnerable patient records. Our platform addressed these specific problems through practical AI applications.",
    delivered: ["Disease outbreak detection that actually works", "Clinical text analysis for case notes", "Blockchain-secured medical records", "Automated diagnostic imaging"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    industry: "FinTech",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    headline: "Automated trust through blockchain, real-time risk analytics, and smart contracts.",
    summary: "Most FinTech solutions simply digitise outdated processes. We built FinTech that truly fixes problems — self-enforcing contracts, real-time risk ratings, and automated escrow systems that make finance work as it should.",
    delivered: ["Credit risk analytics that see around corners", "Blockchain escrow without the legal nightmares", "Smart contracts that execute themselves", "Usage-based insurance that's actually fair"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    industry: "Automotive",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    headline: "Turning dumb vehicles into smart assets that tell you what they need before they break.",
    summary: "Fleet management was broken. Vehicles broke down without warning, drivers wasted fuel, and insurance costs kept climbing. Our platform turns dumb vehicles into smart assets with predictive intelligence built in.",
    delivered: ["Real-time vehicle tracking that goes beyond dots on a map", "Predictive maintenance that prevents roadside breakdowns", "Driver behavior analysis that cuts insurance costs", "Eco-routing that saves fuel and improves safety"],
    color: "from-teal-400 to-cyan-500",
  },
  {
    industry: "Retail",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    headline: "Turning purchase patterns into predictions and browsing behaviour into revenue.",
    summary: "Every retailer thinks they know their customers — then they check their inventory write-offs and abandoned carts. We turned transaction data into actionable insights, and browsing behaviour into personalised revenue.",
    delivered: ["Smart recommendation engine that actually increases sales", "Order prediction that prevents stockouts and overstock", "Real-time basket analysis for dynamic pricing", "Supply chain visibility from warehouse to shelf"],
    color: "from-indigo-400 to-violet-500",
  },
  {
    industry: "Industry 4.0",
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
    headline: "Connecting machines, predicting failures, and keeping production running.",
    summary: "Most factories still run like it's 1995 — maintenance schedules based on calendars, breakdowns that surprise everyone. Our Industrial IoT platform connects machines, predicts failures, and keeps production running with smart engineering.",
    delivered: ["Predictive maintenance that actually predicts", "Real-time reliability calculations for critical systems", "Industrial IoT integration with existing equipment", "Connected manufacturing from sensor to dashboard"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    industry: "Energy",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    headline: "Making grids smart enough to handle modern renewable energy demands.",
    summary: "The energy sector runs modern renewable power on infrastructure designed for coal. We use smart grid analytics to predict demand, optimize renewable integration, and design sustainable architectures that rethink energy flow.",
    delivered: ["Smart grid analytics that predict and prevent outages", "Renewable energy optimization in real-time", "Sustainable architecture design for modern grids", "Predictive load balancing across distributed systems"],
    color: "from-blue-500 to-cyan-400",
  },
];

const categories = [
  { title: "Clinical Optimization", desc: "Reducing readmissions and stay duration while improving safety and minimising errors for better patient outcomes." },
  { title: "Operational Efficiency", desc: "Reducing discharge TAT, increasing bed availability, and streamlining workflows to enhance operational efficiency." },
  { title: "Financial Excellence", desc: "Cost reduction in consumables, floor space, and operations; establishing Cost of Quality; rationalising expenses." },
  { title: "Service & Experience", desc: "Improving patient satisfaction index, referenceability, customer journey mapping, and sentiment analysis." },
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
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/55">LSS+AI case studies showcasing transformative outcomes across healthcare, financial services, manufacturing, automotive, retail, and energy sectors.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Award className="h-3.5 w-3.5" /> Verified case outcomes
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
          <div> 2023 Duanamize Global Services Private Limited. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Verified results</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Outcome-first engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function CaseStudiesMainPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCase = caseStudies[activeTab];

  return (
    <div className="min-h-screen text-white" style={{ background: "linear-gradient(135deg,#0a1628 0%,#0d1f3c 40%,#0f2550 70%,#0a1e45 100%)" }}>
      <div className="pointer-events-none fixed inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857] pb-24">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-8 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
                <a href="/results" className="text-white hover:text-blue-200 transition-colors">Results</a>
                <span className="text-white">•</span>
                <span className="text-white">Case Studies</span>
              </div>
              <h1 style={serif} className="text-4xl mt-5 font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Case studies {" "}
                <span className="text-[#A5F3FC]">LSS+AI in action.</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white md:text-lg">
                Our case studies showcase the tangible value and lasting impact of our LSS+AI methodology,
                demonstrating how we help organizations achieve breakthrough results and sustainable competitive
                advantage across healthcare, FinTech, automotive, retail, manufacturing, and energy.
              </p>
            </div>
            <div className="relative h-full min-h-[300px] w-full">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" alt="Case Study Analysis" className="absolute inset-0 h-full w-full object-cover rounded-xl shadow-lg opacity-80" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#071857]/80 via-[#071857]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES — TAB BROWSER */}
      <section className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-8 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Select an industry to explore.</h2>
          </div>

          {/* Industry tab selector */}
          <div className="mb-8 flex flex-wrap gap-2">
            {industryTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button key={tab.label} onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === i ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "border border-white/12 bg-white/4 text-blue-200/70 hover:text-white hover:border-cyan-400/25"}`}>
                  <Icon className="h-4 w-4" />{tab.label}
                </button>
              );
            })}
          </div>

          {/* Active case study */}
          <div className="rounded-[24px] border border-white/8 overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="relative h-72 lg:h-auto">
                <img src={activeCase.img} alt={activeCase.industry} className="h-full w-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/60 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent lg:hidden" />
                <div className="absolute left-5 top-5">
                  <span className={`rounded-full border border-white/20 bg-gradient-to-r ${activeCase.color} px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white`}>{activeCase.industry}</span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300/50 mb-3">Overview</div>
                <h3 style={serif} className="text-2xl font-semibold text-white leading-snug">{activeCase.headline}</h3>
                <p className="mt-4 text-sm leading-relaxed text-blue-200/65">{activeCase.summary}</p>
                <div className="mt-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/70 mb-3">What we delivered</div>
                  <div className="grid gap-2">
                    {activeCase.delivered.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span className="text-sm text-blue-100/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY CATEGORIES */}
      <section className="relative bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Explore by business impact.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 whitespace-normal">From clinical optimization to financial excellence our LSS+AI approach delivers measurable gains in efficiency, cost, quality, and experience.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <div key={cat.title} className="group rounded-[22px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 cursor-pointer">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 mb-3">Category {String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{cat.desc}</p>
         
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES CASE STUDIES UNIQUE */}
      <section className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-4xl mb-6">Transparency, measurability, and lasting impact — built in.</h2>
              <div className="grid gap-4">
                {[
                  { title: "Detailed client success stories", desc: "Explore case studies across healthcare, finance, manufacturing, and more — showing how we address unique challenges to deliver impactful transformations." },
                  { title: "Process challenges and outcomes", desc: "Duanamize leverages AI, automation, and Lean Six Sigma to solve process challenges — delivering faster cycles and improved quality." },
                  { title: "Quantitative impact metrics", desc: "Review ROI and payback data from transformation initiatives. Benchmark results against industry standards and peers." },
                  { title: "Change management insights", desc: "Discover how Duanamize drives sustainable change through engagement, training, and communication — building client capabilities." },
                ].map((item) => (
                  <div key={item.title} className="rounded-[20px] border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <div>
                        <div className="text-base font-semibold text-white">{item.title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-blue-200/55">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[24px] border border-white/8 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" alt="Case study results" className="h-full min-h-[520px] w-full object-cover opacity-35" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(10,22,40,0.97) 0%,rgba(13,31,60,0.85) 50%,rgba(15,37,80,0.93) 100%)" }} />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/85">
                  <Award className="h-3.5 w-3.5" /> Our Measurement Framework
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">Every case study is built on a foundation of measurable, verifiable outcomes.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200/60">Objective mapping, KPI-driven targets, automated insights, live dashboards, and ROI tracking ensure every result we report is real and repeatable.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["Value Alignment","Performance Tracking","ROI Analysis","Continuous Improvement"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTINUE EXPLORING ── */}
      
    </div>
  );
}
