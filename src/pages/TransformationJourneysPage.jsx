import React, { useState } from "react";
import {
  ArrowRight, Award, BarChart3, CheckCircle2, ChevronDown, Clock3,
  Heart, Mail, MapPin, Menu, Phone, Shield, ShieldCheck,
  Sparkles, Star, TrendingUp, Users, Zap, Target, Layers3,
  RefreshCw, Brain, Gauge, Clock, Globe2, Activity,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const journeyPhases = [
  {
    step: "Step 1",
    icon: Target,
    title: "Discovery & Analysis",
    duration: "1–2 weeks",
    desc: "Deep dive into your business processes, requirements, and existing technology stack.",
    deliverables: ["Current state assessment", "Gap analysis report", "Technology audit", "Stakeholder interviews"],
    outcome: "Clear understanding of project scope and requirements",
  },
  {
    step: "Step 2",
    icon: Brain,
    title: "Solution Design",
    duration: "2–3 weeks",
    desc: "Custom solution architecture and detailed project roadmap tailored to your needs.",
    deliverables: ["Technical architecture", "Project timeline", "Resource allocation plan", "Risk assessment"],
    outcome: "Comprehensive project blueprint and implementation strategy",
  },
  {
    step: "Step 3",
    icon: Zap,
    title: "Development & Implementation",
    duration: "8–16 weeks",
    desc: "Agile development with weekly sprints, continuous testing, and regular stakeholder updates.",
    deliverables: ["MVP development", "Testing & QA", "Documentation", "Team training"],
    outcome: "Fully functional solution with trained team",
  },
  {
    step: "Step 4",
    icon: RefreshCw,
    title: "Optimisation & Transfer",
    duration: "4–8 weeks",
    desc: "Performance monitoring, optimisation, and knowledge transfer to your internal team.",
    deliverables: ["Performance optimisation", "Knowledge transfer", "Handover documentation", "Ongoing support plan"],
    outcome: "Self-sustaining solution with internal team ownership",
  },
];

const maturityPillars = [
  { icon: Target, title: "Multi-Year, Multi-Phase Programs", desc: "Experience end-to-end transformation through carefully structured phases that build cumulative value over time. Detailed programme narratives spanning 2–5 years with structured phase sequencing for maximum impact.", items: ["Detailed program narratives spanning 2–5 years", "Structured phase sequencing for maximum impact", "Expert navigation of organisational dynamics", "Continuous stakeholder engagement and support"] },
  { icon: TrendingUp, title: "Capability Maturity Progression", desc: "Watch your organisation evolve from current state to industry-leading performance. We benchmark capabilities against industry frameworks and track progression throughout the entire journey.", items: ["Baseline assessment against industry standards", "Progressive capability maturation tracking", "Transformation from lagging to leading performance", "Enhanced operational and technological sophistication"] },
  { icon: Layers3, title: "Technology Adoption Roadmaps", desc: "Follow a pragmatic path from current technology landscape to future-state architecture aligned with your business objectives.", items: ["Comprehensive current state assessment", "Future-state architecture design", "Iterative deployment of AI and automation solutions", "Seamless integration with existing enterprise systems"] },
];

const whyChoose = [
  { icon: Globe2, title: "Deep Industry Expertise", desc: "Specialised knowledge across healthcare, financial services, manufacturing, and technology sectors." },
  { icon: Shield, title: "Sustainable Results", desc: "Build internal capabilities that ensure transformation benefits continue long after engagement completion." },
  { icon: Users, title: "End-to-End Support", desc: "Complete guidance from initial assessment through full implementation and ongoing optimisation." },
  { icon: BarChart3, title: "Measurable ROI", desc: "Clear metrics and KPIs demonstrate tangible value and return on investment throughout your journey." },
];

const successStories = [
  { title: "Healthcare System Transformation", desc: "A leading healthcare provider achieved 40% faster patient care and 25% higher quality with our LSS+AI approach.", icon: Heart, color: "from-cyan-400 to-blue-500" },
  { title: "Financial Services Modernisation", desc: "A regional bank's 2.5-year digital transformation cut loan processing time by 50% and reduced costs by 30%.", icon: Shield, color: "from-blue-400 to-indigo-500" },
  { title: "Manufacturing Excellence Program", desc: "An 18-month Industry 4.0 programme delivered 35%+ OEE improvement and $2.3M annual savings across three sites.", icon: Gauge, color: "from-teal-400 to-cyan-500" },
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 mt-4 py-12 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr_1fr] md:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/55">Multi-year, multi-phase transformation journeys capability maturity progression, technology adoption roadmaps, and structured methodology for lasting change.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Layers3 className="h-3.5 w-3.5" /> End-to-end transformation
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
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Structured delivery</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Outcome-first engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function TransformationJourneysMainPage() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = journeyPhases[activePhase];

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
            <span className="text-white">Transformation Journeys</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Transformation journeys —{" "}
                <span className="text-[#A5F3FC]">from current state to industry-leading.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Our experienced leaders combine global expertise, proven track records, and deep industry
                knowledge to drive transformational results. Experience end-to-end transformation through
                carefully structured phases that build cumulative value over time.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { value: "2–5 yrs", label: "Programme duration range" },
                  { value: "4 phases", label: "Structured delivery methodology" },
                  { value: "100%", label: "Internal capability transfer on completion" },
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Transformation journey" className="h-72 w-full object-cover opacity-65" />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[14px] border border-cyan-400/20 bg-[#0a1628]/70 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /><span className="text-xs font-semibold text-white">4-phase programme active</span></div>
                </div>
                <div className="p-5 border-t border-white/8" style={{ background: "rgba(10,22,40,0.6)" }}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/65 mb-3">Journey components</div>
                  <div className="flex flex-wrap gap-2">
                    {["Discovery","Solution Design","Implementation","Optimisation","Capability Transfer","Ongoing Support"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-blue-100/75">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-PHASE METHODOLOGY */}
      <section id="phases" className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">A battle-tested 4-phase approach.</h2>
            <p className="mt-3 text-sm leading-relaxed text-blue-200/60 whitespace-normal">Clear timelines, measurable outcomes, and transparent communication at every step — from discovery to self-sustaining solution.</p>
          </div>

          {/* Phase tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {journeyPhases.map((phase, i) => {
              const PIcon = phase.icon;
              return (
                <button key={phase.step} onClick={() => setActivePhase(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${activePhase === i ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "border border-white/12 bg-white/4 text-blue-200/70 hover:text-white hover:border-cyan-400/25"}`}>
                  <PIcon className="h-4 w-4" />{phase.step}: {phase.title}
                </button>
              );
            })}
          </div>

          {journeyPhases.map((phase, i) => {
            if (i !== activePhase) return null;
            const PIcon = phase.icon;
            return (
              <div key={phase.step} className="max-w-4xl rounded-[24px] border border-white/8 overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="grid lg:grid-cols-[1fr_1fr]">
                  <div className="p-8 border-b border-white/8 lg:border-b-0 lg:border-r text-left">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><PIcon className="h-7 w-7" /></div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-300/50">{phase.step}</div>
                        <h3 style={serif} className="text-2xl font-semibold text-white">{phase.title}</h3>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300 mb-4">
                      <Clock className="h-3.5 w-3.5" /> {phase.duration}
                    </div>
                    <p className="text-sm leading-relaxed text-blue-200/65 mb-5">{phase.desc}</p>
                    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-400/70 mb-2">Key Outcome</div>
                      <p className="text-sm font-medium text-white">{phase.outcome}</p>
                    </div>
                  </div>
                  <div className="p-8 text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300/50 mb-4">Deliverables</div>
                    <div className="grid gap-3">
                      {phase.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span className="text-sm text-blue-100/80">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MATURITY PILLARS */}
      <section id="maturity" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Three dimensions of transformation journey depth.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {maturityPillars.map((pillar) => {
              const PIcon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-[22px] border border-white/8 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20 text-left" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><PIcon className="h-6 w-6" /></div>
                    <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-blue-200/55 mb-4">{pillar.desc}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-blue-200/55">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE + SUCCESS STORIES */}
      <section className="relative bg-white text-slate-900">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-4xl mb-8">Four reasons our transformation journeys deliver lasting results.</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyChoose.map((item) => {
                  const WIcon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-400/25">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><WIcon className="h-5 w-5" /></div>
                        <div className="text-base font-semibold text-slate-900">{item.title}</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-4xl mb-6 text-left">Transformations that exceeded expectations.</h2>
              <div className="grid gap-4">
                {successStories.map((s) => {
                  const SIcon = s.icon;
                  return (
                    <div key={s.title} className="rounded-[20px] border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-start gap-3">
                        <div className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}><SIcon className="h-5 w-5" /></div>
                        <div>
                          <div className="text-base font-semibold text-slate-900">{s.title}</div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
                  This Transformation Journeys page is part of our comprehensive Results section showcasing multi-year transformation programmes and capability maturity progression.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Current Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Transformation Journeys: Multi-Year Transformation Narratives
                  </h3>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Next Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Case Studies: Detailed Implementation Examples
                  </h3>
                  <a href="/case-studies" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700">
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
