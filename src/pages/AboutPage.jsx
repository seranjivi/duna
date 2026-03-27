import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  HeartHandshake,
  Landmark,
  Lightbulb,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const serif = {
  fontFamily:
    '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const missionTabs = [
  {
    key: "mission",
    label: "Mission Statement",
    title: "To transform organizations through intelligent operational excellence.",
    body:
      "We combine proven methodologies with artificial intelligence to deliver sustainable competitive advantage and measurable business impact. Every engagement is designed to improve the way work flows, decisions are made, and value is realized.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "vision",
    label: "Vision Statement",
    title: "To be the world’s premier partner for AI-enhanced process transformation.",
    body:
      "Our vision is a future where every organization achieves breakthrough performance through data-driven operational excellence, modern technology enablement, and capability building that sustains results long after implementation.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "purpose",
    label: "Our Purpose",
    title: "To unlock human and organizational potential.",
    body:
      "We exist to eliminate inefficiencies, optimize processes, and enable people to focus on high-value work that drives innovation, resilience, and growth. Our purpose is not just better process performance, but better organizational possibility.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  },
];

const highlights = [
  { value: "3+", label: "Years of AI-powered operational excellence", icon: Award },
  { value: "Global", label: "Client outreach and delivery perspective", icon: Globe2 },
  { value: "Multi-country", label: "Representation across markets and programs", icon: Building2 },
  { value: "Near-perfect", label: "Commitment to success and value realization", icon: TrendingUp },
];

const values = [
  {
    title: "Excellence",
    text: "We relentlessly pursue the highest standards in everything we deliver.",
    icon: Award,
  },
  {
    title: "Innovation",
    text: "We continuously push boundaries to discover what’s possible.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    text: "We succeed through teamwork and strategic partnerships.",
    icon: HeartHandshake,
  },
  {
    title: "Integrity",
    text: "We always do the right thing for our clients and communities.",
    icon: ShieldCheck,
  },
];

const differentiators = [
  {
    title: "Unique LSS+AI Methodology",
    text: "A proprietary approach that systematically integrates Lean Six Sigma with artificial intelligence for faster, sharper, and more sustainable transformation.",
    icon: BrainCircuit,
  },
  {
    title: "Proven Track Record",
    text: "A strong history of client success, measurable ROI, and high-impact programs delivered across industries and transformation contexts.",
    icon: Star,
  },
  {
    title: "Deep Industry Expertise",
    text: "Focused experience in healthcare, financial services, manufacturing, technology, and complex enterprise operating environments.",
    icon: Landmark,
  },
  {
    title: "Innovation Leadership",
    text: "A forward-looking perspective shaped by new methods, patents, coaching, and real-world operational excellence programs.",
    icon: Target,
  },
];

const leadership = {
  srikanth: {
    name: "Srikanth Shastri",
    role: "Board Advisor · Program Management & Leadership Mentor",
    image: "/srikanth.png",
    intro:
      "Srikanth Shastri is a seasoned IT professional with more than three decades of experience in program management, business excellence, and organizational transformation.",
    body:
      "He has mentored senior leaders across Fortune 500 companies on corporate governance, lean organization design, and enterprise Agile transformation. As Head of Business Excellence at EDS, he established the Program Management COE, Sizing / Estimation COE, and Six Sigma practice, while also co-designing the Global Delivery Model and Organizational Maturity Framework adopted as an enterprise standard.",
    credentials: [
      "Six Sigma Certified (MoreSteam, USA)",
      "eSCM Authorized Evaluator (ITSQC, USA)",
      "Certified Quality Analyst (QAI, USA)",
      "Co-author: Road to Success (PMI-PMP)",
    ],
    expertise:
      "Program & Project Management, Business Excellence & Six Sigma, Estimation & Risk Management, BFSI Domain Delivery, Leadership & Performance Management, and Enterprise Agile Transformation.",
  },
  kalpana: {
    name: "Kalpana",
    role: "Director · 15+ years optimizing performance in Lean Six Sigma",
    image:
      "/woman.png",
    intro:
      "Accomplished executive with a proven track record in healthcare and diverse industries, specializing in Lean Six Sigma implementation and operational transformation as Director of Duanamize Global Services.",
    bullets: [
      "Delivered cost savings of INR 6.5 crores through 20+ Green Belt and 10+ Black Belt projects.",
      "Implemented CARES framework for ambulance management systems improving operational efficiency.",
      "Mentored 50+ Six Sigma projects and conducted 20+ training sessions.",
      "Impacted 100+ professionals through training and mentorship programs.",
    ],
    expertise:
      "Lean Six Sigma Implementation, Continuous Improvement, Change Management, Program Management, and Quality Audits.",
  },
  narayanan: {
    name: "Dr. Narayanan Srinivasan",
    role: "Advisor / Strategic Consultant · 34+ years in human resource management",
    image:
      "/narayan.png",
    intro:
      "Narayanan holds a bachelor’s degree in economics, a PGDM in HRM from IIM Kolkata, and a PhD in behavior science.",
    bullets: [
      "Served leading organizations as HR Head and introduced innovative HR best practices.",
      "Conducted 100+ programs across life skills, training, and development.",
      "Provides advisory support across talent, leadership, and organizational strategy post-retirement.",
      "Certified leadership coach from LMI USA.",
    ],
    expertise:
      "Talent Management, Leadership Building, Strategic Consulting, Life Coaching, and Career Mentoring.",
  },
};

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

function SectionHeader({ eyebrow, title, description, light = false, center = false }) {
  return (
    <div className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${
            light
              ? "border-white/20 bg-white/10 text-blue-100"
              : "border-blue-200 bg-white text-[#0A2463]"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      )}
      <h2
        style={{ ...serif }}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 whitespace-normal text-sm leading-relaxed md:text-lg ${
          center ? "mx-auto" : ""
        } ${light ? "text-blue-100/85" : "text-slate-600"}`}
      >
        {description}
      </p>
    </div>
  );
}

function HeroPanel() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/35 backdrop-blur-xl">
        <div className="grid min-h-[560px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative p-6 md:p-8">
            <div className="rounded-[28px] border border-cyan-300/20 bg-cyan-300/10 p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/85">Founded on innovation</div>
              <div className="mt-2 text-2xl font-semibold text-white">Established in 2022</div>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Built to redefine operational excellence by bringing together Lean Six Sigma rigor and AI-powered intelligence.
              </p>
            </div>
            <div className="mt-5 grid gap-4">
              {[
                ["Pioneers of LSS+AI", "Systematically integrating machine learning and predictive analytics into modern transformation work."],
                ["40% faster results", "A sharper methodology designed to move from insight to measurable improvement faster."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/80">{text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="Modern enterprise transformation environment"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[26px] border border-white/12 bg-slate-950/35 p-5 backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/80">What Duanamize stands for</div>
              <h3 style={{ ...serif }} className="mt-2 text-3xl font-semibold leading-tight text-white">
                Operational excellence designed for modern business complexity
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                We help organizations simplify complexity, strengthen execution, and unlock higher-value work through disciplined transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DuanamizeAboutUsPage() {
  const [activeTab, setActiveTab] = useState("mission");
  const activeMission = useMemo(
    () => missionTabs.find((item) => item.key === activeTab) || missionTabs[0],
    [activeTab]
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_12%_18%,rgba(45,212,191,0.20),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_56%_72%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-20 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
                <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
                <span>•</span>
                <span className="text-white">About Us</span>
              </div>

              <h1
                style={{ ...serif }}
                className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
              >
                Pioneers of AI-Powered Operational Excellence
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
                For over 3 years, Duanamize has been at the forefront of operational excellence, pioneering the integration of Lean Six Sigma with artificial intelligence to deliver breakthrough results for organizations worldwide.
              </p>

             

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Lean Six Sigma discipline strengthened with artificial intelligence",
                  "A premium consulting perspective grounded in measurable business impact",
                  "A transformation approach that values both systems and people",
                  "Designed for modern enterprises seeking durable competitive advantage",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-blue-50/90 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <HeroPanel />
          </div>
        </div>
      </section>

      <section id="story" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <SectionHeader
            // eyebrow="Our story"
            title="Founded on innovation, built for breakthrough transformation"
            description="Duanamize was established in 2022 to revolutionize operational excellence by combining proven Lean Six Sigma principles with cutting-edge artificial intelligence, addressing the complexity and speed of modern business."
          />

          <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
                  alt="Enterprise technology and transformation team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-slate-950/35 p-5 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/85">The LSS+AI revolution</div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    We pioneered a methodology that connects process rigor with predictive intelligence.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-7">
 
                <h3 style={{ ...serif }} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  A modern consulting firm built for today's operational realities
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  Duanamize was created to help organizations move beyond slow, fragmented improvement efforts. Our work responds to a world where data volumes, system complexity, and speed of decision-making have fundamentally changed what operational excellence requires.
                </p>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                <h3 style={{ ...serif }} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  Traditional excellence, enhanced for the age of AI
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  We became an early pioneer in systematically integrating machine learning and predictive analytics with traditional Lean Six Sigma frameworks. The result is a transformation model that helps organizations identify patterns faster, act more intelligently, and deliver results with greater confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <SectionHeader
            // eyebrow="Mission, vision, and purpose"
            title="The principles shaping how we build transformation"
            description="Our mission, vision, and purpose form the strategic center of Duanamize. They guide how we serve clients, how we think about change, and how we design long-term value."
          />

          <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 xl:grid-cols-[0.34fr_0.66fr]">
              <div className="border-b border-slate-200 bg-[#071857] p-6 text-white xl:border-b-0 xl:border-r md:p-8">
                <div className="space-y-3">
                  {missionTabs.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setActiveTab(item.key)}
                      className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                        activeTab === item.key
                          ? "border-cyan-300/30 bg-cyan-300/10 text-white"
                          : "border-white/10 bg-white/5 text-blue-100/80 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-sm font-semibold">{item.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[300px]">
                  <img
                    src={activeMission.image}
                    alt={activeMission.label}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  {activeMission.label && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0A2463]">
                      <Sparkles className="h-3.5 w-3.5" />
                      {activeMission.label}
                    </div>
                  )}
                  <h3 style={{ ...serif }} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                    {activeMission.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {activeMission.body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-950">{item.value}</div>
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <SectionHeader
            title="The standards that shape every client engagement"
            description="Our values guide every decision as we transform organizations worldwide, driving innovation and building lasting relationships based on trust and exceptional results."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 style={{ ...serif }} className="text-3xl font-semibold leading-tight text-slate-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <SectionHeader
            title="Experienced leaders with deep domain and transformation expertise"
            description="Our leadership and advisory team combines global delivery experience, operational excellence depth, and people-centered transformation insight to guide client success."
          />

          <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px] bg-slate-100">
                <img
                  src={leadership.srikanth.image}
                  alt="Srikanth Shastri portrait"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 style={{ ...serif }} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  {leadership.srikanth.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">{leadership.srikanth.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  {leadership.srikanth.intro}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {leadership.srikanth.body}
                </p>

                <div className="mt-6 rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Credentials</div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {leadership.srikanth.credentials.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[26px] border border-blue-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A2463]">Core expertise</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {leadership.srikanth.expertise}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[360px] bg-slate-100">
                  <img
                    src={leadership.kalpana.image}
                    alt="Kalpana portrait"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 style={{ ...serif }} className="mt-4 text-3xl font-semibold leading-tight text-slate-950">
                    {leadership.kalpana.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-700">{leadership.kalpana.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{leadership.kalpana.intro}</p>
                  <div className="mt-4 space-y-3">
                    {leadership.kalpana.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    <span className="font-semibold text-slate-900">Expertise:</span> {leadership.kalpana.expertise}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="relative min-h-[360px] bg-slate-100">
                  <img
                    src={leadership.narayanan.image}
                    alt="Dr. Narayanan Srinivasan portrait"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 style={{ ...serif }} className="mt-4 text-3xl font-semibold leading-tight text-slate-950">
                    {leadership.narayanan.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-700">{leadership.narayanan.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{leadership.narayanan.intro}</p>
                  <div className="mt-4 space-y-3">
                    {leadership.narayanan.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    <span className="font-semibold text-slate-900">Expertise:</span> {leadership.narayanan.expertise}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <SectionHeader
            title="A transformation partner built for measurable business impact"
            description="We combine proven Lean Six Sigma expertise with cutting-edge artificial intelligence to deliver breakthrough results that traditional consulting alone cannot match."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-white text-[#0A2463]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 style={{ ...serif }} className="text-3xl font-semibold leading-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="relative overflow-hidden bg-[#061650]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.16),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 style={{ ...serif }} className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Join industry leaders achieving breakthrough performance through LSS+AI
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100/85 md:text-lg">
              Partner with Duanamize to transform operations, strengthen execution, and create sustainable competitive advantage through intelligent operational excellence.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Speak to our team
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
