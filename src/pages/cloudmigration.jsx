import React, { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  CloudCog,
  Database,
  Globe2,
  HardDrive,
  Layers3,
  Lock,
  Network,
  Package,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "40%", label: "Average infrastructure cost reduction" },
  { value: "3x", label: "Improvement in system scalability" },
  { value: "99.95%", label: "Uptime with multi-zone architecture" },
];

const challenges = [
  {
    category: "Legacy Complexity",
    icon: HardDrive,
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    items: [
      "Tightly coupled on-premise application architectures",
      "Undocumented infrastructure dependencies",
      "Outdated operating systems and runtimes",
      "Insufficient disaster recovery capabilities",
    ],
  },
  {
    category: "Migration Risk",
    icon: Shield,
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
    items: [
      "Risk of production downtime during cut-over",
      "Data integrity and loss concerns",
      "Compliance and regulatory requirements",
      "Limited internal cloud expertise and readiness",
    ],
  },
  {
    category: "Operational Gaps",
    icon: BarChart3,
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: [
      "No cloud cost governance or visibility",
      "Inadequate monitoring in cloud environments",
      "Skill gaps in cloud-native tooling",
      "Lack of standardised security controls",
    ],
  },
];

const platformTabs = [
  {
    label: "AWS",
    icon: Cloud,
    title: "Amazon Web Services Migration",
    items: [
      "AWS Application Discovery Service for full inventory mapping",
      "AWS Database Migration Service for zero-downtime data transfer",
      "Amazon EC2, S3, RDS, and VPC core service provisioning",
      "CloudFormation IaC templates for repeatable environments",
    ],
  },
  {
    label: "Azure",
    icon: CloudCog,
    title: "Microsoft Azure Migration",
    items: [
      "Azure Migrate for comprehensive assessment and migration planning",
      "Azure Site Recovery for business continuity and disaster recovery",
      "Azure SQL Database and Active Directory enterprise integration",
      "Azure Resource Manager templates for governed provisioning",
    ],
  },
  {
    label: "Multi-Cloud",
    icon: Network,
    title: "Multi-Cloud & Hybrid Architecture",
    items: [
      "Terraform for unified multi-cloud infrastructure as code",
      "Hybrid connectivity between on-premise and cloud environments",
      "Consistent security and governance across all cloud providers",
      "Workload placement strategy based on cost and compliance",
    ],
  },
];

const migrationPhases = [
  {
    step: "01",
    title: "Assessment & Planning",
    icon: BarChart3,
    items: [
      "Application inventory and dependency mapping",
      "Infrastructure utilisation and cost analysis",
      "Migration readiness and risk evaluation",
      "Target-state architecture and cloud service selection",
    ],
  },
  {
    step: "02",
    title: "Migration Execution",
    icon: RefreshCw,
    items: [
      "Phased lift-and-shift or re-platforming approach",
      "Data migration with integrity validation",
      "Parallel run and cut-over planning",
      "Automated provisioning via Infrastructure as Code",
    ],
  },
  {
    step: "03",
    title: "Optimisation & Governance",
    icon: TrendingUp,
    items: [
      "Cloud cost optimisation and right-sizing",
      "Auto-scaling policies and resource governance",
      "Security posture hardening and compliance mapping",
      "Ongoing monitoring, alerting, and performance tuning",
    ],
  },
];

const roiAreas = [
  {
    icon: TrendingUp,
    title: "Cost Efficiency",
    accent: "from-cyan-400 to-sky-500",
    items: [
      "Elimination of on-premise hardware refresh cycles",
      "Pay-as-you-use model reduces idle resource spend",
      "Reduced data centre and facilities overhead",
      "Automated scaling prevents over-provisioning",
    ],
  },
  {
    icon: Zap,
    title: "Agility & Scale",
    accent: "from-sky-500 to-indigo-500",
    items: [
      "Provision new environments in minutes, not weeks",
      "Elastic scaling to match production demand instantly",
      "Global deployment regions for low-latency access",
      "Faster time-to-market for new manufacturing applications",
    ],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    accent: "from-indigo-500 to-blue-500",
    items: [
      "Enterprise-grade identity and access management",
      "Data encryption at rest and in transit by default",
      "Compliance frameworks for regulated manufacturing",
      "Automated audit trails and security event logging",
    ],
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function CloudMigrationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/70">
            <a href="/industries" className="text-white hover:text-blue-200 transition-colors">Industries</a>
            <span className="text-white">•</span>
            <a href="/technology" className="text-white hover:text-blue-200 transition-colors">Technology</a>
            <span className="text-white">•</span>
            <span className="text-white">Cloud Migration</span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Cloud Migration{" "}
                <span className="text-[#A5F3FC]">The complete guide to digital infrastructure transformation.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
                Cloud migration is a strategic imperative for manufacturers seeking to modernise IT infrastructure,
                improve scalability, and reduce operational costs. Combined with infrastructure automation,
                cloud adoption creates agile, resilient foundations for rapid growth.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-white">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                  alt="Cloud infrastructure migration"
                  className="h-72 w-full object-cover"
                />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
                <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                    Migration focus areas
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["AWS Migration", "Azure Services", "IaC Provisioning", "Hybrid Cloud", "Cost Optimisation", "Security & Compliance"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start gap-3">
                      <CloudCog className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-white">
                        Designed for CIOs, infrastructure leads, and plant IT managers planning
                        or executing cloud transformation initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                Three migration challenges every manufacturer faces.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Successful cloud migration requires confronting legacy complexity, managing risk carefully,
                and bridging the operational gaps that emerge when moving critical industrial systems.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {challenges.map((ch) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.category} className={`rounded-[28px] border ${ch.border} ${ch.bg} p-5 transition hover:-translate-y-1 hover:shadow-lg`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${ch.color} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{ch.category}</h3>
                    <ul className="mt-3 space-y-2">
                      {ch.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
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

      {/* ── PLATFORM STRATEGIES ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Cloud platform excellence across AWS, Azure, and multi-cloud.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              We bring deep expertise across the leading cloud platforms so you can migrate to the
              environment that best fits your manufacturing architecture and compliance requirements.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {platformTabs.map((tab, i) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === i
                      ? "bg-[#0A2463] text-white shadow-lg"
                      : "border border-slate-200 bg-white text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {platformTabs.map((tab, i) => {
            if (i !== activeTab) return null;
            const Icon = tab.icon;
            return (
              <div key={tab.label} className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#0A2463] text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Platform {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={serif} className="text-2xl font-semibold text-slate-950">{tab.title}</h3>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {tab.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                      <div className="text-sm leading-relaxed text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MIGRATION PHASES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              A structured three-phase migration methodology.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              From initial discovery through to post-migration optimisation, our phased approach
              minimises risk and ensures your manufacturing operations never miss a beat.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {migrationPhases.map((phase, i) => {
              const Icon = phase.icon;
              const active = activeStep === i;
              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveStep(i)}
                  className="text-left rounded-[28px] bg-[#0A2463] p-6 shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">
                        Phase {phase.step}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-white">{phase.title}</div>
                    </div>
                  </div>
                    <ul className="mt-4 space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-blue-100/85">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              The business case for cloud migration in manufacturing.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Cloud transformation delivers quantifiable returns across cost, operational agility,
              and security posture — creating infrastructure that scales with your production ambitions.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {roiAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.accent} text-white shadow-lg shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Manufacturing technology services that bridge industrial operations and modern software delivery.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Organizations that invest in DevOps automation and cloud migration achieve faster deployment cycles, reduced infrastructure costs, and improved operational reliability across their manufacturing technology stack.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
                <a href="/industries-devops" className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md block">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Previous Page</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    DevOps Automation
                  </div>
                  <div className="mt-1 text-sm text-slate-500">CI/CD pipelines and automation</div>
                  <div className="mt-3 text-sm font-semibold text-[#0A2463] flex items-center gap-1">
                    View More <span>→</span>
                  </div>
                </a>
                <a href="/cloud-migration" className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md block">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Current Page</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                    Cloud Migration
                  </div>
                  <div className="mt-1 text-sm text-slate-500">Infrastructure and cloud services</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
