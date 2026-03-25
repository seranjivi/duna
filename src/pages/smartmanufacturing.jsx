import React, { useState } from "react";
import {
  ArrowRight, Bot, Brain, CheckCircle2, ChevronDown, Clock3,
  Cpu, Factory, Gauge, GitMerge, Layers3, Mail, MapPin, Menu,
  Network, Phone, Settings, Shield, ShieldCheck, Sparkles,
  TrendingUp, Wrench, Zap, Activity, Package, Monitor, Wifi,
  RefreshCw, Database,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const stats = [
  { value: "35%", label: "Average OEE improvement through smart manufacturing" },
  { value: "60%", label: "Reduction in unplanned downtime with predictive maintenance" },
  { value: "45%", label: "Faster time-to-market with digital twin simulations" },
];

const coreTechTabs = [
  {
    label: "CPS", icon: Cpu, title: "Cyber-Physical Systems",
    items: ["Integration of physical processes with digital monitoring", "Real-time data collection from production equipment", "Autonomous decision-making and adaptive control", "Predictive maintenance and performance optimisation"],
  },
  {
    label: "IoT", icon: Wifi, title: "Internet of Things",
    items: ["Connected sensors and devices across production", "Real-time monitoring of equipment and processes", "Data collection and transmission for analytics", "Remote monitoring and control capabilities"],
  },
  {
    label: "AI/ML", icon: Brain, title: "Artificial Intelligence & ML",
    items: ["Predictive analytics for equipment failure prevention", "Quality control through automated inspection systems", "Process optimisation through intelligent algorithms", "Demand forecasting and production planning"],
  },
];

const transformationFramework = [
  {
    step: "01", icon: Database, title: "Digital Infrastructure",
    items: ["Connectivity and networking infrastructure", "Data collection and storage systems", "Computing and analytics platforms", "Cybersecurity and data protection"],
  },
  {
    step: "02", icon: Settings, title: "Process Digitisation",
    items: ["Workflow automation and optimisation", "Digital work instructions and procedures", "Real-time process monitoring and control", "Quality management system integration"],
  },
  {
    step: "03", icon: Network, title: "People & Culture",
    items: ["Digital skills development and training", "Change management and adoption strategies", "Cross-functional collaboration", "Innovation mindset and continuous improvement"],
  },
];

const smartFactoryComponents = [
  {
    icon: Gauge, title: "Production Systems", color: "from-cyan-400 to-blue-500",
    items: ["Automated manufacturing equipment and robotics", "Flexible manufacturing systems and cells", "Adaptive production scheduling and control", "Real-time performance monitoring"],
  },
  {
    icon: Shield, title: "Quality Management", color: "from-blue-400 to-indigo-500",
    items: ["Automated inspection and testing systems", "Statistical process control and analytics", "Root cause analysis and corrective action", "Continuous improvement and optimisation"],
  },
  {
    icon: Package, title: "Supply Chain Integration", color: "from-teal-400 to-cyan-500",
    items: ["Supplier collaboration and communication", "Inventory optimisation and demand planning", "Logistics and distribution management", "Customer integration and feedback systems"],
  },
];

const iotAreas = [
  {
    icon: Activity, title: "Equipment Monitoring",
    items: ["Vibration, temperature, and pressure sensors", "Energy consumption and efficiency monitoring", "Performance metrics and utilisation tracking", "Predictive maintenance and failure prevention"],
  },
  {
    icon: Monitor, title: "Process Control",
    items: ["Real-time process parameter monitoring", "Automated quality control and adjustment", "Environmental monitoring and compliance", "Safety system integration and alerts"],
  },
  {
    icon: Wrench, title: "Asset Management",
    items: ["Equipment lifecycle management", "Maintenance scheduling and resource planning", "Inventory tracking and management", "Capital asset utilisation and ROI analysis"],
  },
];

const automationTech = [
  {
    icon: Bot, title: "Robotic Process Automation", color: "from-cyan-400 to-blue-500",
    items: ["Industrial robots for assembly and handling", "Collaborative robots (cobots) for human-machine interaction", "Automated guided vehicles (AGVs) for material transport", "Robotic quality inspection and testing"],
  },
  {
    icon: Settings, title: "Process Automation", color: "from-blue-400 to-indigo-500",
    items: ["Programmable logic controllers (PLCs)", "Distributed control systems (DCS)", "SCADA systems for supervisory control", "Manufacturing execution systems (MES) integration"],
  },
];

const digitalMfg = [
  {
    icon: RefreshCw, title: "Digital Twin Technology",
    items: ["Virtual representations of physical assets and processes", "Real-time simulation and optimisation", "Predictive modelling and scenario analysis", "Virtual commissioning and testing"],
  },
  {
    icon: GitMerge, title: "Digital Product Development",
    items: ["Computer-aided design (CAD) and engineering", "Virtual prototyping and testing", "Simulation and finite element analysis", "Design for manufacturability optimisation"],
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
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/55">Specialized in smart manufacturing, Industry 4.0 transformation, industrial IoT, and digital factory solutions for modern production environments.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Cpu className="h-3.5 w-3.5" /> Industry 4.0 delivery
          </div>
        </div>
        <div><h4 className="text-sm font-semibold text-white">Solutions</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["Smart Manufacturing","Industrial IoT","Digital Twin","Automation","Lean Six Sigma"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
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
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Production-first engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SmartManufacturingPage() {
  const [activeTab, setActiveTab] = useState(0);

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
                <span>Industries</span><span>•</span><span>Manufacturing</span><span>•</span><span className="text-white">Smart Manufacturing</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Sparkles className="h-3.5 w-3.5" /> Industry 4.0 Digital Transformation
              </div>
              <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Smart manufacturing revolution —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">production excellence through digital intelligence.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/82 md:text-lg">
                Smart manufacturing converges traditional production processes with advanced digital technologies —
                creating intelligent, connected, and adaptive systems. Duanamize helps manufacturers harness Industry 4.0
                to optimise efficiency, quality, and sustainability across the entire value chain.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#core-tech" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Explore technologies <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#smart-factory" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Smart factory solutions
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-blue-100/76">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-2xl shadow-blue-950/50">
                <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80" alt="Smart manufacturing" className="h-72 w-full object-cover opacity-70" />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Smart factory systems live</span>
                  </div>
                </div>
                <div className="p-5 border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/60 mb-3">Industry 4.0 technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {["Cyber-Physical Systems","Industrial IoT","AI/ML","Digital Twin","Robotics","Smart Factory"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGIES */}
      <section id="core-tech" className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300"><Sparkles className="h-3.5 w-3.5" /> Core Industry 4.0 technologies</div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Three pillars of smart manufacturing.</h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-blue-200/60 md:text-lg">Industry 4.0 encompasses the fourth industrial revolution — characterised by the integration of cyber-physical systems, IoT, AI, and advanced analytics into manufacturing operations.</p>
          </div>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {coreTechTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button key={tab.label} onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === i ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20" : "border border-white/12 bg-white/4 text-blue-200/70 hover:text-white hover:border-cyan-400/25"}`}>
                  <Icon className="h-4 w-4" />{tab.label}
                </button>
              );
            })}
          </div>
          {coreTechTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="mx-auto max-w-3xl rounded-[24px] border border-white/8 p-8" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><Icon className="h-7 w-7" /></div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-300/50">Technology {String(i + 1).padStart(2, "0")}</div>
                    <h3 style={serif} className="text-2xl font-semibold text-white">{tab.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {tab.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <div className="text-sm leading-relaxed text-blue-100/75">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRANSFORMATION FRAMEWORK */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300 mb-4"><Sparkles className="h-3.5 w-3.5" /> Transformation framework</div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-5xl">Manufacturing digital transformation strategy.</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-200/60 md:text-lg">A comprehensive approach addressing technology, processes, people, and organisational culture to create competitive advantage through digital excellence.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {transformationFramework.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="rounded-[22px] border border-white/8 p-5 transition hover:-translate-y-1 hover:border-cyan-400/20" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><Icon className="h-5 w-5" /></div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300/45">Phase {item.step}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-blue-200/55">
                          <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-cyan-400/70" />{i}
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

      {/* SMART FACTORY */}
      <section id="smart-factory" className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300"><Sparkles className="h-3.5 w-3.5" /> Smart factory solutions architecture</div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Interconnected systems for intelligent manufacturing.</h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-blue-200/60 md:text-lg">Smart factory solutions integrate multiple technologies to create connected, intelligent manufacturing environments that optimise performance across all operations.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {smartFactoryComponents.map((comp) => {
              const Icon = comp.icon;
              return (
                <div key={comp.title} className="rounded-[22px] border border-white/8 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${comp.color} text-white shadow-lg`}><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-4 text-base font-semibold text-white">{comp.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {comp.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-blue-200/55">
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

      {/* IoT */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[24px] border border-white/8 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" alt="Industrial IoT" className="h-full min-h-[460px] w-full object-cover opacity-35" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(10,22,40,0.97) 0%,rgba(13,31,60,0.85) 50%,rgba(15,37,80,0.93) 100%)" }} />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/85">
                  <Wifi className="h-3.5 w-3.5" /> Industrial IoT Implementation
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">IIoT creates the connected foundation for autonomous manufacturing operations.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200/60">Connecting machines, sensors, and systems enables data-driven decision-making at every level of the production environment — from individual equipment to enterprise-wide operations.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["Vibration Sensors","Energy Monitoring","Process Control","Safety Integration"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300 mb-4"><Sparkles className="h-3.5 w-3.5" /> Industrial IoT areas</div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-4xl mb-6">Three IIoT implementation areas that transform the shop floor.</h2>
              <div className="grid gap-4">
                {iotAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div key={area.title} className="rounded-[20px] border border-white/8 p-5 transition hover:border-cyan-400/25" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><Icon className="h-5 w-5" /></div>
                        <h3 className="text-base font-semibold text-white">{area.title}</h3>
                      </div>
                      <div className="grid gap-1.5">
                        {area.items.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-blue-200/55">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" />{item}
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

      {/* AUTOMATION + DIGITAL MFG */}
      <section className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300"><Sparkles className="h-3.5 w-3.5" /> Manufacturing automation & digital excellence</div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Automation and digital manufacturing optimisation.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {automationTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.title} className="rounded-[22px] border border-white/8 p-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tech.color} text-white shadow-lg`}><Icon className="h-6 w-6" /></div>
                    <h3 className="text-lg font-semibold text-white">{tech.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-blue-200/55">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {digitalMfg.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="rounded-[22px] border border-cyan-400/15 p-6" style={{ background: "rgba(56,189,248,0.04)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-white shadow-lg"><Icon className="h-6 w-6" /></div>
                    <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {d.items.map((item) => (
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

      {/* CTA */}
      <section className="relative pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[24px] border border-cyan-400/12 p-8 md:p-10" style={{ background: "linear-gradient(135deg,rgba(13,32,64,0.9) 0%,rgba(15,37,80,0.9) 50%,rgba(10,30,69,0.9) 100%)", boxShadow: "0 0 60px rgba(56,189,248,0.05),0 25px 50px rgba(0,0,0,0.4)" }}>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300"><Sparkles className="h-3.5 w-3.5" /> Start your smart manufacturing journey</div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Build the intelligent, connected factory of tomorrow — today.</h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-200/60 md:text-lg">Duanamize's Industry 4.0 transformation framework helps manufacturers deploy smart factory technologies that deliver measurable improvements in OEE, quality, and operational efficiency.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                  Request assessment <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:selvan@duanamize.org" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Email Duanamize</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
