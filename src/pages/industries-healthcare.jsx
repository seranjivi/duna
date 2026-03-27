import React from "react";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  Clock3,
  Heart,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Network,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  Zap,
  Activity,
  FileText,
  Bot,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

// ─── DATA ─────────────────────────────────────────────────────────────────────

const solutions = [
  {
    icon: Monitor,
    title: "EHR Optimization",
    desc: "Maximize the value of your electronic health records through workflow automation, UI customization, and ROI enhancement strategies.",
    link: "/industries-healthcare-ehr",
    color: "from-cyan-400 to-sky-500",
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    desc: "Integrate machine learning and predictive analytics to automate clinical workflows, reduce admin burden, and improve patient outcomes.",
    link: "/industries-healthcare-ai",
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: Brain,
    title: "Clinical Decision Support",
    desc: "Evidence-based treatment recommendations, drug interaction alerts, and real-time clinical guideline integration at point of care.",
    link: "#",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Network,
    title: "Interoperability",
    desc: "Connect all your health systems through HIE connectivity, API integration, and standardized data protocols for seamless data flow.",
    link: "#",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle",
    desc: "Reduce claim denials, automate coding and billing, and accelerate reimbursement cycles through intelligent RCM solutions.",
    link: "#",
    color: "from-cyan-400 to-emerald-400",
  },
  {
    icon: Shield,
    title: "Compliance & Governance",
    desc: "HIPAA-aligned governance frameworks, audit trail automation, and regulatory compliance monitoring built into every layer.",
    link: "#",
    color: "from-emerald-400 to-teal-500",
  },
];

const stats = [
  { value: "40%", label: "Reduction in documentation time" },
  { value: "60%", label: "Faster diagnostic turnaround" },
  { value: "30%", label: "Decrease in readmissions" },
  { value: "90%", label: "Implementation success rate" },
];

const whyUs = [
  { icon: Stethoscope, title: "Clinical-First", text: "Every solution is designed around clinician workflows — not just IT requirements." },
  { icon: Zap, title: "Rapid Deployment", text: "Structured implementation methodology reduces go-live risk and accelerates time-to-value." },
  { icon: Users, title: "Change Management", text: "Dedicated support for user adoption, training, and organizational readiness." },
  { icon: Activity, title: "Outcome Driven", text: "Measurable KPIs defined upfront — quality, efficiency, safety, and financial performance." },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────



// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function HealthcareMainPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />


        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left — text */}
            <div>
              <div className="mt-2 text-sm text-blue-100/80">
                
                <a href="/industries" className="hover:text-white transition-colors">Industries</a>
                {" • Healthcare"}
              </div>

              <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                <span className="text-white">Smarter healthcare</span>{" "}<span className="text-[#A5F3FC]">starts with smarter technology.</span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white md:text-lg max-w-xl">
                Duanamize helps healthcare organizations optimize EHR systems, deploy AI-powered automation,
                and transform clinical workflows — so clinicians spend more time with patients, not screens.
              </p>
              {/* Stats row */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[20px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-1 text-[11px] leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image panel */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/40">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare technology"
                  className="h-80 w-full object-cover"
                />
                <div className="absolute inset-0 h-80 bg-gradient-to-t from-[#071857] via-[#071857]/15 to-transparent" />

                {/* Floating badge top */}
                <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Live clinical AI active</span>
                  </div>
                </div>

                {/* Bottom info strip */}
                <div className="bg-slate-950/40 p-5 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/60 mb-3">
                    Healthcare solutions
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["EHR Optimization", "AI Automation", "Clinical Workflows", "Revenue Cycle", "Compliance"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section id="solutions" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Healthcare Solutions That Deliver Outcomes
            </h2>
            <p className="mt-3 whitespace-normal text-sm leading-relaxed text-slate-600 md:text-lg">
              From EHR optimization to AI-powered automation — every solution is built around clinical outcomes
              and operational excellence.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div key={sol.title} className="group rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
                  <div className="p-6 pb-0">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${sol.color} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-950">{sol.title}</h3>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{sol.desc}</p>
                    {/* <a href={sol.link} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0A2463] transition group-hover:gap-2">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </a> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY DUANAMIZE ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* Image panel */}
            <div className="relative overflow-hidden rounded-[34px] bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1400&q=80"
                alt="Clinical team collaboration"
                className="h-full min-h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/88 via-[#071857]/65 to-[#071857]/92" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  <Heart className="h-3.5 w-3.5" /> Why Duanamize Healthcare
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    We do not just implement technology. We transform how care is delivered.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
                    Every engagement starts with clinical context, process priorities, and patient outcome goals —
                    so technology serves the mission, not the other way around.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["HIPAA Compliant", "Clinician-Led Design", "Proven ROI", "Change Management"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-300 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                Built for healthcare leaders who demand measurable results.
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-base font-semibold text-slate-950">{item.title}</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED LINKS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold text-slate-950 md:text-4xl">
              Go deeper into our healthcare solutions.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {/* EHR Card */}
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                alt="EHR Optimization"
                className="h-52 w-full object-cover"
              />
              <div className="absolute inset-0 h-52 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute left-5 bottom-16 right-5">
                {/* <span className="rounded-full bg-cyan-500/20 border border-cyan-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cyan-100">
                  EHR Optimization
                </span> */}
              </div>
              <div className="p-6">
                <h3 style={serif} className="text-xl font-semibold text-slate-950">
                  EHR Optimization
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Template optimization, workflow automation, clinical decision support, and ROI enhancement
                  strategies for your EHR investment.
                </p>
                <a href="/industries-healthcare-ehr" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition group-hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* AI Card */}
            <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
                alt="AI Healthcare Automation"
                className="h-52 w-full object-cover"
              />
              <div className="absolute inset-0 h-52 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute left-5 bottom-16 right-5">
                {/* <span className="rounded-full bg-indigo-500/20 border border-indigo-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-indigo-100">
                  AI Automation
                </span> */}
              </div>
              <div className="p-6">
                <h3 style={serif} className="text-xl font-semibold text-slate-950">
                  AI-Powered Healthcare Automation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Machine learning, NLP, and predictive analytics transforming clinical workflows, diagnostics,
                  and administrative operations across the care continuum.
                </p>
                <a href="/industries-healthcare-ai" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition group-hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Ready to transform how your health system uses technology?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white md:text-lg">
                  Whether you are optimizing an existing EHR, exploring AI automation, or building a full
                  digital transformation roadmap — Duanamize is the right partner to start with.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Get started today <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
