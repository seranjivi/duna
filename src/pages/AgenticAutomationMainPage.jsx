import React from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Workflow,
  Zap,
  Target,
  ShieldCheck,
  Network,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "85%", label: "AI project success rate with structured best-practice execution" },
  { value: "60–80%", label: "Typical pilot effort focused on data preparation and readiness work" },
  { value: "4", label: "Core implementation motions: align, pilot, scale, govern" },
];

const methodologyPillars = [
  {
    icon: Bot,
    title: "AI Agents",
    text: "Intelligent autonomous agents that handle complex multi-step tasks, adapt to changing environments, learn from interactions, and coordinate with other agents to achieve enterprise objectives",
  },
  {
    icon: Workflow,
    title: "Autonomous Workflows",
    text: "Self-running end-to-end workflows that autonomously execute tasks across systems, handle exceptions intelligently, optimize paths in real-time, and require minimal human oversight",
  },
  {
    icon: BrainCircuit,
    title: "Decision Intelligence",
    text: "Advanced AI-driven decision making based on real-time data streams, predictive analytics, prescriptive recommendations, risk assessment, and autonomous action selection with explainable outcomes",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    text: "Self-improving systems that learn from every interaction, adapt to new patterns, optimize performance over time, and automatically update knowledge models without manual retraining",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    text: "Robust security frameworks with role-based access control, audit trails, data encryption, compliance monitoring, and governance controls designed for mission-critical enterprise deployments",
  },
  {
    icon: Network,
    title: "System Integration",
    text: "Seamless connectivity with existing enterprise systems, APIs, databases, cloud services, and legacy applications through pre-built connectors and flexible integration architectures",
  },
];

const featureCards = [
  {
    title: "AI Implementation Best Practices",
    description:
      "Comprehensive guide to successfully deploying autonomous AI agents in your organization with proven methodologies.",
    href: "/solutions-agentic-automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  }
];

const flowSteps = [
  {
    step: "01",
    title: "Align",
    text: "Define business objectives and align AI capabilities with strategic goals and measurable outcomes.",
  },
  {
    step: "02",
    title: "Pilot",
    text: "Deploy initial AI agents in controlled environments to validate approach and gather learnings.",
  },
  {
    step: "03",
    title: "Scale",
    text: "Expand successful agent implementations across departments and integrate with enterprise systems.",
  },
  {
    step: "04",
    title: "Govern",
    text: "Establish monitoring, compliance, and continuous improvement frameworks for sustainable operations.",
  },
];

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

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-4 md:px-8 md:pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-blue-100/75">
            <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
            <span>•</span>
            <span className="text-white">Agentic Automation</span>
          </div>

          <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Agentic Automation - 
            <span className="mt-2 block text-cyan-200">where complex decisions run without human intervention</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Deploy intelligent AI agents that autonomously handle complex tasks, make decisions, and adapt to changing business environments. Transform your operations with true automation.
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80"
                alt="AI Automation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/30 to-transparent" />

              <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">Agentic View</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Agents", "AI-Powered"],
                    ["Workflows", "Autonomous"],
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
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">Automation Impact</div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { value: "80%", label: "Tasks automated" },
                    { value: "70%", label: "Time saved" },
                    { value: "24/7", label: "Operations" },
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
          title="Intelligent Automation Platform"
          description="Design, build, deploy, and manage intelligent AI agents that transform business operations. Enable autonomous decision-making, streamline complex workflows, and unlock unprecedented efficiency gains across your enterprise"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {methodologyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600">
                  <Icon className="h-4 w-4" />
                </div>
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
          description="Strategic resources, implementation playbooks, architectural blueprints, and operational guidelines designed to accelerate your agentic automation journey and ensure successful enterprise deployment"
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
          title="From Concept to Deployment"
          description="A structured approach to implementing agentic automation in your organization"
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

export default function AgenticAutomationMainPage() {
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
