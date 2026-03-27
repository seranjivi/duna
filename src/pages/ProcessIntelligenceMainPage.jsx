import React from "react";
import {
  ArrowRight,
  Brain,
  BarChart3,
  Workflow,
  Target,
  Zap,
  Database,
  LineChart,
  CheckCircle2,
  Link,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "60%+", label: "Failure risk when AI starts without readiness assessment" },
  { value: "90%", label: "Implementation success with structured readiness planning" },
  { value: "5", label: "Core readiness dimensions assessed before scaling" },
];

const methodologyPillars = [
  {
    icon: Database,
    title: "Data Foundation",
    text: "Quality assurance, data governance, accessibility protocols, integration readiness, data lineage tracking, master data management, schema validation, and compliance frameworks for enterprise-scale operations",
  },
  {
    icon: BarChart3,
    title: "Process Intelligence",
    text: "Process mining, advanced analytics, bottleneck detection, optimization insights, root cause analysis, performance forecasting, variant analysis, conformance checking, and digital twin simulation capabilities",
  },
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    text: "Machine learning algorithms for pattern recognition, predictive insights, anomaly detection, intelligent recommendations, natural language processing, computer vision, and automated model training with continuous refinement",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    text: "RPA integration, workflow orchestration, task automation, intelligent document processing, citizen developer tools, low-code platforms, API connectivity, and end-to-end process automation frameworks",
  },
  {
    icon: Target,
    title: "Performance Optimization",
    text: "KPI tracking and benchmarking, continuous improvement frameworks, efficiency gains quantification, cost reduction strategies, ROI measurement, balanced scorecards, and performance-driven optimization roadmaps",
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    text: "Live dashboards, instant alerts, real-time monitoring, predictive alerting, anomaly detection, trend analysis, customizable KPI views, and proactive decision support across all operational touchpoints",
  },
];

const featureCards = [
  {
    title: "AI Readiness Assessment",
    description:
      "Comprehensive evaluation of your organization's AI readiness across data, infrastructure, and capability dimensions.",
    href: "/solutions-process-intelligence",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  }
];

const flowSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Map current-state processes and identify hidden friction across systems and teams.",
  },
  {
    step: "02",
    title: "Analyze",
    text: "Use AI-assisted analysis to uncover patterns, anomalies, and root causes faster.",
  },
  {
    step: "03",
    title: "Optimize",
    text: "Prioritize high-value actions that reduce waste, improve quality, and accelerate flow.",
  },
  {
    step: "04",
    title: "Monitor",
    text: "Track performance continuously and maintain gains with data-driven control.",
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-lg shadow-blue-900/30 ring-1 ring-white/25">
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

function SectionHeader({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-8 md:mb-10">
      <h2
        style={serif}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      <p className={`mt-3 text-sm leading-relaxed md:text-lg ${light ? "text-blue-100/85" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071857]">
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.20),transparent_32%),radial-gradient(circle_at_45%_75%,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-4 md:px-8 md:pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
        <div>
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-blue-100/75">
            <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
            <span>•</span>
            <span className="text-white">Process Intelligence</span>
          </div>

          <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Process Intelligence
            <span className="mt-2 block text-cyan-200">where data meets intelligent execution</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Unlock hidden process potential with AI-powered analytics. Gain deep visibility into your workflows, identify inefficiencies, and optimize performance with data-driven insights.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                <div className="text-2xl font-semibold text-white md:text-3xl">{item.value}</div>
                <div className="mt-1 text-sm leading-relaxed text-blue-100/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
                alt="Process Intelligence Dashboard"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/30 to-transparent" />

              <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">Intelligence View</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Mining", "Process"],
                    ["Analysis", "AI-powered"],
                    ["Outcome", "Optimized"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-white/10 bg-white/10 p-3">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-blue-100/70">{k}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">Process Metrics</div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { value: "40%", label: "Cost reduction" },
                    { value: "60%", label: "Efficiency gain" },
                    { value: "99%", label: "Accuracy" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/10 bg-white/10 p-3 text-center">
                      <div className="text-xl font-semibold text-white">{s.value}</div>
                      <div className="text-[11px] text-blue-100/70">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  return (
    <section className="bg-[#f5f9ff] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          title="Intelligent Process Analytics"
          description="Comprehensive capabilities to analyze, optimize, and transform your business processes with cutting-edge AI technology that delivers measurable results."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {methodologyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 style={serif} className="text-lg font-semibold text-slate-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCardsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          title="Deep Dive Resources"
          description="Comprehensive guides, strategic assessments, implementation playbooks, and expert resources designed to accelerate your process intelligence journey and maximize transformation outcomes"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featureCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071857]/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 style={serif} className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2463]">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessFlowSection() {
  return (
    <section className="bg-[#071857] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          light
          title="From Discovery to Optimization"
          description="A structured approach to process intelligence that ensures successful outcomes"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="text-sm font-semibold text-cyan-300">{step.step}</div>
              <h3 style={serif} className="mt-2 text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/85">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {

}

export default function ProcessIntelligenceMainPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MethodologySection />
      <FeatureCardsSection />
      <ProcessFlowSection />
      <CTASection />
    </div>
  );
}
