import React, { useState } from "react";
import {
  AlertTriangle, ArrowRight, BarChart3, Brain, CheckCircle2, ChevronDown,
  Clock3, Database, FileText, Globe2, Landmark, Mail, MapPin, Menu,
  Network, Phone, Shield, ShieldCheck, Sparkles, TrendingDown,
  Users, Zap, Eye, Lock, Search, Activity, LayersIcon,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const challengeCards = [
  {
    icon: Globe2, title: "Regulatory Environment", color: "from-red-400 to-rose-500", bg: "bg-red-50", border: "border-red-100",
    items: ["Multiple jurisdictional requirements", "Frequent regulatory changes and updates", "Inconsistent interpretation and enforcement", "Severe penalties for non-compliance"],
  },
  {
    icon: AlertTriangle, title: "Operational Challenges", color: "from-amber-400 to-orange-500", bg: "bg-amber-50", border: "border-amber-100",
    items: ["Manual processes prone to errors", "Fragmented systems and data silos", "Resource-intensive compliance monitoring", "Lack of real-time visibility"],
  },
  {
    icon: TrendingDown, title: "Cost & Resource Impact", color: "from-blue-400 to-indigo-500", bg: "bg-blue-50", border: "border-blue-100",
    items: ["High compliance costs and resource allocation", "Opportunity costs of manual processes", "Skilled compliance professional shortages", "Technology debt and legacy limitations"],
  },
];

const approachComparison = [
  {
    label: "Traditional", dark: false,
    items: ["Manual transaction monitoring and review", "Periodic compliance audits and assessments", "Rule-based detection systems", "Reactive incident response"],
  },
  {
    label: "Modern Automated", dark: true,
    items: ["Real-time transaction monitoring and analysis", "Continuous compliance monitoring and reporting", "AI-powered pattern recognition", "Proactive risk prediction and prevention"],
  },
];

const automationTabs = [
  {
    label: "Transaction", icon: Activity, title: "Transaction Monitoring",
    items: ["Real-time transaction analysis and screening", "Automated suspicious activity detection", "Risk scoring and escalation workflows", "False positive reduction through ML"],
  },
  {
    label: "Reporting", icon: FileText, title: "Regulatory Reporting",
    items: ["Automated data collection and aggregation", "Standardized report generation and submission", "Regulatory change tracking and impact assessment", "Audit trail maintenance and documentation"],
  },
  {
    label: "Risk", icon: Shield, title: "Risk Assessment",
    items: ["Customer risk profiling and segmentation", "Ongoing due diligence and monitoring", "Sanctions screening and watch list checking", "Enhanced due diligence triggering"],
  },
];

const amlComponents = [
  {
    icon: Users, title: "Customer Due Diligence (CDD)", accent: "from-cyan-500 to-blue-600",
    items: ["Automated identity verification and validation", "Beneficial ownership identification", "Political exposed person (PEP) screening", "Ongoing monitoring and profile updates"],
  },
  {
    icon: Eye, title: "Transaction Monitoring", accent: "from-blue-500 to-indigo-600",
    items: ["Real-time transaction analysis against AML rules", "Unusual pattern detection and alert generation", "Cross-channel transaction correlation", "Threshold monitoring and reporting"],
  },
  {
    icon: FileText, title: "Suspicious Activity Reporting", accent: "from-indigo-500 to-purple-600",
    items: ["Automated SAR generation and filing", "Regulatory timeline compliance", "Investigation workflow management", "Quality assurance and review processes"],
  },
];

const archLayers = [
  { icon: Database, title: "Data Integration Layer", items: ["Real-time data ingestion from multiple sources", "Data standardization and enrichment", "Master data management and quality control", "Historical data retention and archiving"] },
  { icon: Brain, title: "Analytics & Processing Engine", items: ["Rule-based compliance checking", "Machine learning algorithms for pattern detection", "Natural language processing for document analysis", "Predictive modeling for risk assessment"] },
  { icon: LayersIcon, title: "User Interface & Workflow", items: ["Case management and investigation tools", "Compliance dashboard and reporting", "Workflow automation and approval processes", "Mobile access and collaboration features"] },
];

const stats = [
  { value: "70%", label: "Reduction in false positive alerts with ML" },
  { value: "90%", label: "Faster regulatory report generation" },
  { value: "50%", label: "Lower compliance operational costs" },
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

export default function FinancialComplianceAutomationPage() {
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
                <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a><span>•</span><a href="/industries-financial" className="text-white hover:text-blue-200 transition-colors">Finance Services</a><span>•</span><span className="text-white">Financial Compliance Automation</span>
              </div>
              <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Financial compliance automation <span className="text-[#A5F3FC]">from reactive to proactive risk management.</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white md:text-lg max-w-xl">
                As compliance requirements multiply across jurisdictions, Duanamize's RegTech solutions powered by
                AI and automation transform how financial institutions manage risk, ensure compliance, and maintain
                regulatory adherence — continuously and at scale.
              </p>
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
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" alt="Financial compliance automation" className="h-72 w-full object-cover" />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Real-time compliance monitoring</span>
                  </div>
                </div>
                <div className="bg-slate-950/40 p-5 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/60 mb-3">Compliance coverage</div>
                  <div className="flex flex-wrap gap-2">
                    {["AML Automation", "KYC/CDD", "Transaction Monitoring", "SAR Filing", "Sanctions Screening", "Regulatory Reporting"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE CHALLENGES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Three dimensions making compliance harder than ever.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-lg">
                Financial institutions face mounting regulatory pressure from all directions — regulatory complexity,
                operational inefficiency, and rising costs are converging into a compliance crisis.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {challengeCards.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className={`rounded-[28px] border ${c.border} ${c.bg} p-5 transition hover:-translate-y-1 hover:shadow-lg`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-white shadow-lg`}><Icon className="h-6 w-6" /></div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{c.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {c.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                          <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-slate-400" />{item}
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

      {/* APPROACH COMPARISON */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
              From reactive checking to proactive prediction.
            </h2>
            <p className="mt-3 whitespace-normal text-sm leading-relaxed text-slate-600 md:text-lg">
              Modern automated compliance is fundamentally different from the legacy approach — in speed, accuracy, and business impact.
            </p>
          </div>
          <div className="max-w-4xl grid gap-5 md:grid-cols-2 justify-start">
            {approachComparison.map((ap) => (
              <div key={ap.label} className={`rounded-[28px] p-6 ${ap.dark ? "bg-[#071857] border border-cyan-500/20" : "bg-white border border-slate-200"} shadow-sm`}>
                <div className={`text-[10px] font-semibold uppercase tracking-[0.18em] mb-2 ${ap.dark ? "text-cyan-400" : "text-slate-400"}`}>{ap.label} Approach</div>
                <div className="grid gap-3 mt-4">
                  {ap.items.map((item) => (
                    <div key={item} className={`flex items-start gap-3 rounded-2xl px-4 py-3 ${ap.dark ? "bg-white/5 border border-white/10" : "bg-slate-50 border border-slate-200"}`}>
                      {ap.dark
                        ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        : <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />}
                      <span className={`text-sm leading-relaxed ${ap.dark ? "text-blue-100" : "text-slate-600"}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATION CAPABILITIES */}
      <section id="automation" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
              Core automation capabilities that change everything.
            </h2>
          </div>
          <div className="mb-8 flex flex-wrap justify-start gap-2">
            {automationTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button key={tab.label} onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === i ? "bg-[#0A2463] text-cyan-300 shadow-lg" : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"}`}>
                  <Icon className="h-4 w-4" />{tab.label}
                </button>
              );
            })}
          </div>
          {automationTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="text-left rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-cyan-400"><Icon className="h-7 w-7" /></div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Capability {String(i + 1).padStart(2, "0")}</div>
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

      {/* AML */}
      <section id="aml" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] bg-slate-950 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80" alt="AML compliance automation" className="h-full min-h-[480px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/90 via-[#071857]/65 to-[#071857]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Shield className="h-3.5 w-3.5" /> AML Excellence
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    AML automation — the most critical application of compliance technology.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    Addressing complex requirements for detecting and preventing money laundering through intelligent,
                    automated workflows that operate at transaction speed.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["Identity Verification", "PEP Screening", "SAR Auto-Filing", "Cross-Channel Monitoring"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl mb-6">
                Three pillars of comprehensive AML automation.
              </h2>
              <div className="grid gap-4">
                {amlComponents.map((comp) => {
                  const Icon = comp.icon;
                  return (
                    <div key={comp.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${comp.accent} text-white shadow-lg`}><Icon className="h-5 w-5" /></div>
                        <h3 className="text-base font-semibold text-slate-950">{comp.title}</h3>
                      </div>
                      <div className="grid gap-1.5">
                        {comp.items.map((item) => (
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

      {/* SYSTEM ARCHITECTURE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
              Three-layer architecture for comprehensive compliance coverage.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {archLayers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <div key={layer.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A2463] text-cyan-400"><Icon className="h-6 w-6" /></div>
                      <h3 className="text-base font-semibold text-slate-950">{layer.title}</h3>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Layer {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Continue Exploring */}
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-white p-8 shadow-2xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                  Continue exploring financial solutions
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-lg">
                  This Finance Services page is part of the broader Financial Services industry under the Industries section, highlighting how technology and digital solutions help financial institutions modernize operations and deliver better financial services.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Current Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Financial Compliance Automation: AI-Powered Risk Management
                  </h3>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Next Page</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    Banking Digital Transformation: From Legacy to Leadership
                  </h3>
                  <a href="/industries-financial-banking" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700">
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
