import React, { useState } from "react";
import {
  Activity,
  ArrowRight,
  Bell,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Clock3,
  Eye,
  FileText,
  Globe2,
  Heart,
  HeartPulse,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Microscope,
  Network,
  Phone,
  Pill,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  Zap,
  Bot,
  ScanLine,
  BarChart3,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const evolutionStats = [
  { value: "85%", label: "Reduction in administrative task time with AI automation" },
  { value: "60%", label: "Faster diagnostic turnaround with AI imaging analysis" },
  { value: "30%", label: "Decrease in hospital readmissions via predictive analytics" },
];

const aiApplications = [
  {
    category: "Clinical Decision Support",
    icon: Brain,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Diagnostic assistance through medical imaging analysis",
      "Treatment recommendation systems based on patient data",
      "Drug interaction and dosing optimization",
      "Clinical protocol adherence monitoring",
    ],
  },
  {
    category: "Administrative Automation",
    icon: Bot,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Patient scheduling and resource allocation",
      "Insurance verification and claims processing",
      "Medical coding and billing automation",
      "Compliance monitoring and reporting",
    ],
  },
];

const workflowAreas = [
  {
    label: "Care Coordination",
    icon: Users,
    title: "Patient Care Coordination",
    items: [
      "Automated appointment scheduling and reminders",
      "Care plan development and monitoring",
      "Inter-departmental communication systems",
      "Discharge planning and follow-up management",
    ],
  },
  {
    label: "Documentation",
    icon: FileText,
    title: "Documentation & Record Management",
    items: [
      "Voice-to-text clinical documentation",
      "Automated data entry and validation",
      "Real-time chart updates and notifications",
      "Quality metrics tracking and reporting",
    ],
  },
  {
    label: "Medication",
    icon: Pill,
    title: "Medication Management",
    items: [
      "Automated prescription verification",
      "Drug dispensing and inventory management",
      "Adherence monitoring and patient education",
      "Adverse event detection and reporting",
    ],
  },
];

const diagnosticTools = [
  {
    icon: ScanLine,
    title: "Medical Imaging Analysis",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Radiology image interpretation and anomaly detection",
      "Pathology slide analysis for cancer detection",
      "Cardiology imaging for heart condition diagnosis",
      "Ophthalmology screening for eye diseases",
    ],
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Early warning systems for patient deterioration",
      "Sepsis prediction and prevention",
      "Readmission risk assessment",
      "Length of stay optimization",
    ],
  },
];

const impactCards = [
  { icon: HeartPulse, title: "Improved Patient Safety", text: "AI-powered alerts and clinical decision support reduce medication errors and preventable adverse events." },
  { icon: Clock, title: "Time Back to Clinicians", text: "Automation of routine documentation and administrative tasks frees up clinician time for high-value patient care." },
  { icon: TrendingUp, title: "Revenue Integrity", text: "Intelligent coding and billing automation reduces claim denials and accelerates reimbursement cycles." },
  { icon: Shield, title: "Compliance Assurance", text: "Automated compliance monitoring and audit trails reduce regulatory risk across all clinical operations." },
];

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────



function SectionBadge({ text, light }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${light ? "border-white/20 bg-white/10 text-blue-100" : "border-blue-200 bg-white text-[#0A2463]"}`}>
      <Sparkles className="h-3.5 w-3.5" />
      {text}
    </div>
  );
}


// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function AIHealthcareAutomationPage() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />


        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
                <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a><span className="text-white">•</span>
                <a href="/industries-healthcare" className="text-white hover:text-blue-200 transition-colors">Healthcare</a><span className="text-white">•</span>
                <span className="text-white">AI-Powered Healthcare</span>
              </div>
              <h1 style={serif} className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                AI-Powered Healthcare <span className="text-[#A5F3FC]">Automation from clinical decision to patient outcome.</span> 
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white md:text-lg">
                Healthcare organizations face mounting pressure to reduce costs while maintaining high-quality
                care. Duanamize's AI-powered automation integrates machine learning, NLP, and predictive analytics
                to transform every layer of clinical and administrative operations.
              </p>
            
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {evolutionStats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-indigo-950/30">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
                  alt="AI healthcare automation"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#1a0a4a] via-[#1a0a4a]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-100/70">
                    AI automation coverage
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Medical Imaging AI", "Predictive Analytics", "NLP Documentation", "Claims Automation", "Medication Management", "Sepsis Detection"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <Bot className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Built for health system CIOs, clinical informatics officers, operations executives, and
                        digital transformation leaders seeking measurable, evidence-based automation outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI EVOLUTION / KEY APPLICATIONS ── */}
      <section id="applications" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                From theoretical concept to direct patient impact.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-lg">
                Modern healthcare AI leverages machine learning, natural language processing, and predictive analytics
                to automate complex medical processes and support clinical decision-making at scale.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  { icon: Brain, text: "Machine learning models trained on clinical evidence" },
                  { icon: MessageSquare, text: "Natural language processing for voice documentation" },
                  { icon: BarChart3, text: "Predictive analytics for proactive patient care" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a0a4a] text-white shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-medium text-slate-700">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {aiApplications.map((app) => {
                const Icon = app.icon;
                return (
                  <div key={app.category} className={`rounded-[28px] border ${app.border} ${app.bg} p-5 transition hover:-translate-y-1 hover:shadow-lg`}>
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${app.color} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-950">{app.category}</h3>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {app.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                          {item}
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

      {/* ── WORKFLOW AUTOMATION ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Automating the workflows that slow down clinical care.
            </h2>
            <p className="mt-3 whitespace-normal text-sm leading-relaxed text-slate-600 md:text-lg">
              By automating routine tasks and optimizing care coordination, healthcare organizations enable
              clinicians to focus on high-value patient interactions that technology cannot replace.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-start gap-2">
            {workflowAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <button
                  key={area.label}
                  onClick={() => setActiveWorkflow(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeWorkflow === i
                      ? "bg-[#1a0a4a] text-white shadow-lg shadow-indigo-900/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {area.label}
                </button>
              );
            })}
          </div>

          {workflowAreas.map((area, i) => {
            if (i !== activeWorkflow) return null;
            const Icon = area.icon;
            return (
              <div key={area.label} className="text-left rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#1a0a4a] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Automation area {String(i + 1).padStart(2, "0")}</div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{area.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {area.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1a0a4a]" />
                      <div className="text-sm leading-relaxed text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── AI DIAGNOSTIC TOOLS ── */}
      <section id="diagnostics" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                AI-powered diagnostic tools transforming patient outcomes.
              </h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed md:text-base mb-6">
                Intelligent systems analyze vast amounts of medical data to provide insights that enhance clinical
                decision-making and improve patient safety across every care setting.
              </p>
              <div className="grid gap-4">
                {diagnosticTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div key={tool.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.accent} text-white shadow-lg`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-950">{tool.title}</h3>
                      </div>
                      <div className="grid gap-2">
                        {tool.items.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1600&q=80"
                alt="AI medical imaging analysis"
                className="h-full min-h-[580px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a4a]/90 via-[#1a0a4a]/65 to-[#1a0a4a]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-100/85">
                  <Microscope className="h-3.5 w-3.5" /> AI Diagnostics in Action
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    From pixels to prognosis — AI sees what the human eye may miss.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white">
                    Deep learning models trained on millions of clinical images deliver diagnostic assistance
                    that augments not replaces clinician's expertise.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["Radiology AI", "Pathology AI", "Cardiology AI", "Ophthalmology AI"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                        <Eye className="h-4 w-4 text-violet-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT CARDS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Why healthcare organizations choose AI automation now.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a0a4a] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-950">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RELATED NAVIGATION ── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Continue exploring the Healthcare Solutions section
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  This AI-Powered Healthcare page is part of the broader Healthcare Solutions stream under the Industries section.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <a href="/industries-healthcare-ehr" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Previous page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    EHR Optimization
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                    View page <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
                <a href="#" className="rounded-[24px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Current page</div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    AI-Powered Healthcare: Automation from clinical decision to patient outcome
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
