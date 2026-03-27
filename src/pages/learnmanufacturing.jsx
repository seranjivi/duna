import React, { useState } from "react";
import {
  ArrowRight, BarChart3, CheckCircle2, ChevronDown, Clock3,
  Factory, Gauge, Mail, MapPin, Menu, Network, Phone,
  Shield, ShieldCheck, Sparkles, TrendingUp, Zap, Activity,
  Target, RefreshCw, AlertTriangle, Users, Layers3, GitMerge,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const stats = [
  { value: "40%", label: "Quality defect reduction through Six Sigma DMAIC" },
  { value: "25%", label: "Cost reduction through lean waste elimination" },
  { value: "30%", label: "Lead time reduction with pull system implementation" },
];

const leanPrinciples = [
  { icon: Target, title: "Value Definition", color: "from-cyan-400 to-blue-500", items: ["Customer-centric value identification", "Value stream mapping and analysis", "Non-value-added activity elimination", "Continuous value enhancement"] },
  { icon: Activity, title: "Flow Optimisation", color: "from-blue-400 to-indigo-500", items: ["Smooth production flow creation", "Bottleneck identification and resolution", "Lead time reduction strategies", "Cycle time optimisation"] },
  { icon: RefreshCw, title: "Pull System Implementation", color: "from-teal-400 to-cyan-500", items: ["Customer demand-driven production", "Just-in-time manufacturing principles", "Kanban system deployment", "Inventory level optimisation"] },
  { icon: TrendingUp, title: "Perfection Pursuit", color: "from-indigo-400 to-violet-500", items: ["Continuous improvement culture", "Problem-solving methodologies", "Employee empowerment and engagement", "Standardisation and best practice sharing"] },
];

const dmiacPhases = [
  { phase: "D", label: "Define", color: "bg-cyan-500", items: ["Problem statement and scope definition", "Customer requirements and expectations", "Project charter and team formation", "Success criteria and metrics establishment"] },
  { phase: "M", label: "Measure", color: "bg-blue-500", items: ["Current state process mapping", "Data collection and measurement systems", "Baseline performance establishment", "Capability analysis and assessment"] },
  { phase: "A", label: "Analyse", color: "bg-indigo-500", items: ["Root cause analysis and identification", "Statistical analysis and hypothesis testing", "Process variation sources identification", "Improvement opportunity prioritisation"] },
  { phase: "I", label: "Improve", color: "bg-violet-500", items: ["Solution development and testing", "Pilot implementation and validation", "Process optimisation and standardisation", "Control plan development"] },
  { phase: "C", label: "Control", color: "bg-purple-600", items: ["Performance monitoring systems", "Sustainable improvement maintenance", "Documentation and training", "Continuous monitoring and adjustment"] },
];

const wasteTypes = [
  { icon: "🚛", title: "Transportation", desc: "Unnecessary movement of materials and products — inefficient layout, multiple handling requirements." },
  { icon: "📦", title: "Inventory", desc: "Excess raw materials and work-in-process — overproduction, storage costs, cash flow impact." },
  { icon: "🏃", title: "Motion", desc: "Unnecessary operator movements — poor workplace organisation, inefficient tool placement." },
  { icon: "⏳", title: "Waiting", desc: "Equipment downtime and delays — material shortages, process bottlenecks, resource constraints." },
  { icon: "⚡", title: "Overproduction", desc: "Production beyond customer demand — batch size issues, inventory accumulation, obsolescence." },
  { icon: "🔄", title: "Overprocessing", desc: "Unnecessary process steps — excessive quality checks, redundant activities, duplication." },
  { icon: "❌", title: "Defects", desc: "Quality issues and rework — scrap, warranty costs, customer satisfaction and brand impact." },
  { icon: "💡", title: "Skills Waste", desc: "Underutilised employee capabilities — limited empowerment, inadequate training, innovation loss." },
];

const qualityStrategies = [
  {
    icon: BarChart3, title: "Statistical Process Control (SPC)", color: "from-cyan-400 to-blue-500",
    items: ["Control chart implementation and monitoring", "Process capability analysis and improvement", "Variation reduction and elimination", "Real-time quality monitoring"],
  },
  {
    icon: Shield, title: "Error-Proofing (Poka-Yoke)", color: "from-blue-400 to-indigo-500",
    items: ["Mistake-prevention device implementation", "Process design for quality assurance", "Automated quality checks and validations", "Human error elimination strategies"],
  },
  {
    icon: Users, title: "Total Quality Management (TQM)", color: "from-teal-400 to-cyan-500",
    items: ["Organisation-wide quality commitment", "Customer focus and satisfaction", "Continuous improvement culture", "Employee involvement and empowerment"],
  },
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
        <a href="#" className="inline-flex items-center gap-1 text-white font-medium border-b border-cyan-400 pb-0.5">Industries <ChevronDown className="h-3.5 w-3.5" /></a>
        <a href="#" className="transition-colors hover:text-white">Results</a>
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
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/55">Specialized in lean manufacturing, Six Sigma, waste elimination, and quality management for production excellence across all manufacturing sectors.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Target className="h-3.5 w-3.5" /> Operational excellence delivery
          </div>
        </div>
        <div><h4 className="text-sm font-semibold text-white">Solutions</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["Lean Manufacturing","Six Sigma","Waste Elimination","Quality Management","Continuous Improvement"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
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
          <div>© {new Date().getFullYear()} Duanamize Global Services Private Limited. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> ISO-aware delivery</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Lean-first engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LeanManufacturingPage() {
  const [activeDmaic, setActiveDmaic] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-blue-100/70">
                <a href="/industries" className="hover:text-white transition-colors">Industries</a><span>•</span><a href="/manufacturing" className="hover:text-white transition-colors">Manufacturing</a><span>•</span><span className="text-white">Lean & Six Sigma</span>
              </div>
              <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Lean manufacturing & Six Sigma {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5F3FC] to-[#A5F3FC]">eliminate waste, achieve excellence.</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-blue-100/65 md:text-lg max-w-xl">
                Lean and Six Sigma remain the fundamental pillars of operational excellence. These proven
                methodologies provide manufacturers with systematic frameworks for eliminating waste, reducing
                variation, and achieving sustainable competitive advantage through continuous improvement.
              </p>
              
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[18px] border border-white/8 bg-white/4 p-4">
                    <div className="text-2xl font-bold text-cyan-400">{s.value}</div>
                    <p className="mt-1 text-[11px] leading-relaxed text-blue-200/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-2xl shadow-blue-950/50">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80" alt="Lean manufacturing" className="h-72 w-full object-cover opacity-70" />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[14px] border border-cyan-400/20 bg-[#0a1628]/70 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /><span className="text-xs font-semibold text-white">Continuous improvement active</span></div>
                </div>
                <div className="p-5 border-t border-white/8" style={{ background: "rgba(10,22,40,0.6)" }}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/65 mb-3">Lean Six Sigma capabilities</div>
                  <div className="flex flex-wrap gap-2">
                    {["Value Stream Mapping","Kaizen","5S","DMAIC","Poka-Yoke","SPC"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-blue-100/75">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAN PRINCIPLES */}
      <section id="lean" className="relative bg-white">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">Four core lean principles for operational excellence.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-lg" style={{ width: "100%", maxWidth: "none", wordWrap: "normal", whiteSpace: "normal", wordBreak: "normal" }}>Lean manufacturing maximises customer value while minimising waste through the systematic identification and elimination of non-value-added activities across all production processes.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leanPrinciples.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-[22px] border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-cyan-400/25 bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-lg`}><Icon className="h-6 w-6" /></div>
                    <h3 className="text-base font-semibold text-slate-950">{p.title}</h3>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-cyan-500" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIX SIGMA DMAIC */}
      <section id="dmaic" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">DMAIC — the data-driven path to near-perfect quality.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-lg" style={{ width: "100%", maxWidth: "none", wordWrap: "normal", whiteSpace: "normal", wordBreak: "normal" }}>Six Sigma provides statistical tools and methodologies for achieving near-perfect quality levels through data-driven problem solving and systematic process improvement.</p>
          </div>

          {/* DMAIC phase selector */}
          <div className="mb-8 flex flex-wrap justify-start gap-2">
            {dmiacPhases.map((phase, i) => (
              <button key={phase.label} onClick={() => setActiveDmaic(i)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${activeDmaic === i ? `${phase.color} text-white shadow-lg` : "border border-slate-200 bg-white text-slate-600 hover:text-slate-950 hover:border-cyan-400/25"}`}>
                <span className="text-lg">{phase.phase}</span>
                <span className="text-xs font-semibold uppercase tracking-wider">{phase.label}</span>
              </button>
            ))}
          </div>

          {dmiacPhases.map((phase, i) => {
            if (i !== activeDmaic) return null;
            return (
              <div key={phase.label} className="max-w-3xl rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-[18px] ${phase.color} text-white shadow-lg text-2xl font-black`}>{phase.phase}</div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">DMAIC Phase {String(i + 1).padStart(2, "0")}</div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{phase.label} Phase</h3>
                  </div>
                </div>
                <div className="grid gap-3">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                      <div className="text-sm leading-relaxed text-slate-600">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8 WASTES */}
      <section className="relative bg-white">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">Eight types of manufacturing waste to eliminate.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-lg" style={{ width: "100%", maxWidth: "none", wordWrap: "normal", whiteSpace: "normal", wordBreak: "normal" }}>Waste elimination is the cornerstone of lean manufacturing — systematic identification and removal of all activities that reduce efficiency and increase costs without adding customer value.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {wasteTypes.map((waste, i) => (
              <div key={waste.title} className="rounded-[20px] border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-cyan-400/25 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{waste.icon}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-950 mb-2">{waste.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600">{waste.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY CONTROL */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[24px] border border-white/8 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80" alt="Quality control" className="h-full min-h-[480px] w-full object-cover opacity-35" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(10,22,40,0.97) 0%,rgba(13,31,60,0.85) 50%,rgba(15,37,80,0.93) 100%)" }} />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/85">
                  <Gauge className="h-3.5 w-3.5" /> Quality Excellence
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">Quality is not inspected in — it is designed and built in at every stage.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200/60">Integrating lean and Six Sigma creates robust quality management systems that prevent defects, ensure consistency, and drive continuous improvement across all production lines.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["SPC Charts","Control Plans","Poka-Yoke Devices","Process Capability"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-4xl mb-6">Three quality control strategies that prevent defects at source.</h2>
              <div className="grid gap-4">
                {qualityStrategies.map((qs) => {
                  const Icon = qs.icon;
                  return (
                    <div key={qs.title} className="rounded-[20px] border border-slate-200 p-5 transition hover:border-cyan-400/25 bg-white shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${qs.color} text-white shadow-lg`}><Icon className="h-5 w-5" /></div>
                        <h3 className="text-base font-semibold text-slate-950">{qs.title}</h3>
                      </div>
                      <div className="grid gap-1.5">
                        {qs.items.map((item) => (
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

      {/* Continue Exploring */}
      <section className="bg-slate-50 pt-0 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-white p-8 shadow-2xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                  Continue exploring manufacturing excellence
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-lg">
                  This Lean & Six Sigma page is part of our comprehensive manufacturing solutions offering under the Industries section.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Current Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Lean Manufacturing & Six Sigma: Eliminate Waste, Achieve Excellence
                  </h3>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Next Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Smart Manufacturing Revolution: Industry 4.0 Digital Transformation
                  </h3>
                  <a href="/manufacturing-smart" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700">
                    View page <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
 

    </div>
  );
}
