import React from "react";
import {
  ArrowRight,
  Rocket,
  Users,
  GraduationCap,
  Target,
  Award,
  BookOpen,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const stats = [
  { value: "70%", label: "Of AI projects fail due to capability gaps" },
  { value: "3x", label: "Faster transformation with skilled teams" },
  { value: "85%", label: "Retention improvement with learning culture" },
];

const methodologyPillars = [
  {
    icon: GraduationCap,
    title: "Skill Development",
    text: "Practical training in AI, automation, and digital transformation",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    details: [
      "Hands-on workshops with real-world AI projects",
      "Role-specific training paths for technical and business teams",
      "Certification programs for AI practitioners and leaders",
      "Interactive labs with industry-standard tools and platforms"
    ]
  },
  {
    icon: Users,
    title: "Knowledge Transfer",
    text: "Systematic expertise transfer for sustainable capability growth",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
    details: [
      "Mentorship programs with AI experts and practitioners",
      "Documentation frameworks for AI best practices and lessons learned",
      "Cross-functional knowledge sharing sessions",
      "Internal communities of practice for continuous collaboration"
    ]
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    text: "Ongoing development to stay current with evolving technologies",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    details: [
      "Regular updates on emerging AI trends and technologies",
      "Advanced modules for specialized AI domains",
      "Learning analytics to track progress and identify gaps",
      "Access to curated resources and industry insights"
    ]
  },
];

const featureCards = [
  {
    title: "AI Capability Development",
    description:
      "Comprehensive program to assess and build your organization's AI readiness through structured training.",
    href: "/solutions-capability",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1400&q=80",
  }
];

const flowSteps = [
  {
    step: "01",
    title: "Assess",
    text: "Evaluate current capabilities and identify skill gaps across your organization.",
  },
  {
    step: "02",
    title: "Design",
    text: "Create customized learning pathways tailored to roles and objectives.",
  },
  {
    step: "03",
    title: "Deliver",
    text: "Execute training programs with hands-on practice and knowledge transfer.",
  },
  {
    step: "04",
    title: "Sustain",
    text: "Enable continuous learning and measure progress against defined outcomes.",
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
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
            <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
            <span>•</span>
            <span className="text-white">Capability Building</span>
          </div>

          <h1 style={serif} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Capability Building
            <span className="mt-2 block text-cyan-200">where teams become AI-ready</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Develop organizational and individual capabilities through targeted training, knowledge transfer, and continuous learning programs that empower your teams for the AI era.
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                alt="Team Training"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/30 to-transparent" />

              <div className="absolute left-5 right-5 top-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">Capability View</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Training", "Hands-on"],
                    ["Transfer", "Systematic"],
                    ["Outcome", "Empowered"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl border border-white/10 bg-white/10 p-3">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-blue-100/70">{k}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-xl">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/80">Learning Impact</div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    { value: "3x", label: "Faster growth" },
                    { value: "85%", label: "Retention" },
                    { value: "90%", label: "Satisfaction" },
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
          title="Comprehensive Learning Solutions"
          description="Build lasting capabilities through structured training and knowledge transfer. Our proven methodology combines hands-on learning, expert mentorship, and continuous development to transform your teams into AI-ready professionals who can drive innovation and deliver measurable business results."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {methodologyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-blue-100 bg-white shadow-sm transition hover:shadow-md overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                        <Icon className="h-4 w-4 text-[#0A2463]" />
                      </div>
                      <h3 style={serif} className="text-lg font-semibold text-white">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-slate-600">{pillar.text}</p>
                  <ul className="mt-4 space-y-2">
                    {pillar.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
          description="Explore our comprehensive collection of programs, guides, and practical resources designed to help your organization build robust AI capabilities. From foundational training modules to advanced implementation frameworks, discover everything you need to accelerate your team's journey toward AI excellence and sustainable digital transformation."
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
          title="From Assessment to Empowerment"
          description="A structured approach to building AI capabilities in your organization"
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
  return (
    <section className="relative overflow-hidden bg-[#061650]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h3 style={serif} className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                Ready to Build AI Capabilities?
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-blue-100/85">
                Start with our AI Capability Development program to assess and build your organization's AI readiness.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] hover:bg-blue-50 transition"
              >
                Get Started Today <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CapabilityBuildingMainPage() {
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
