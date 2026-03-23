import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarRange,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  HeartHandshake,
  Headphones,
  Landmark,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users2,
  WalletCards,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const serviceOptions = [
  "LSS+AI Transformation",
  "Process Intelligence",
  "Agentic Automation",
  "Digital Transformation",
  "Capability Building",
  "Technology Advisory",
  "Training Programs",
  "Other",
];

const budgetOptions = [
  "Below ₹10 Lakhs",
  "₹10 Lakhs – ₹25 Lakhs",
  "₹25 Lakhs – ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore+",
  "Prefer to discuss",
];

const timelineOptions = [
  "Immediate / This month",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Exploring options",
];

const companySizeOptions = [
  "1–50 employees",
  "51–200 employees",
  "201–1000 employees",
  "1000+ employees",
  "Prefer not to say",
];

const contactModes = [
  {
    title: "Transformation enquiries",
    text: "For organizations evaluating LSS+AI, automation, operating-model redesign, or enterprise transformation initiatives.",
    icon: Briefcase,
    accent: "from-cyan-400 via-sky-400 to-blue-500",
    tag: "Primary route",
  },
  {
    title: "Partnership discussions",
    text: "For technology partners, implementation partners, and channel alliances looking to create joint value with Duanamize.",
    icon: HeartHandshake,
    accent: "from-indigo-400 via-blue-500 to-cyan-400",
    tag: "Ecosystem route",
  },
  {
    title: "Careers & capability",
    text: "For professionals, collaborators, and capability-building conversations aligned with the future of LSS+AI delivery.",
    icon: Users2,
    accent: "from-emerald-400 via-cyan-400 to-blue-500",
    tag: "Talent route",
  },
];

const quickSignals = [
  {
    value: "Executive-led",
    label: "Discovery conversations grounded in business outcomes, not generic vendor talk.",
  },
  {
    value: "Structured",
    label: "Clear next-step flow from enquiry to qualification, advisory discussion, and proposal readiness.",
  },
  {
    value: "Enterprise-ready",
    label: "Built for transformation leaders, operations teams, technology heads, and strategic partners.",
  },
];

const proofCards = [
  {
    title: "What we can discuss",
    text: "LSS+AI methodology, process intelligence, automation strategy, transformation roadmaps, operating-model improvement, training, and capability building.",
    icon: Layers3,
  },
  {
    title: "How we engage",
    text: "Strategy conversations start with business context, process priorities, expected outcomes, stakeholder readiness, and implementation horizon.",
    icon: MessageSquare,
  },
  {
    title: "What makes this useful",
    text: "The enquiry experience is designed to help both sides qualify faster—so the first meeting is informed, relevant, and commercially meaningful.",
    icon: CheckCircle2,
  },
  {
    title: "What happens next",
    text: "After review, Duanamize aligns the right conversation path—advisory call, partner discussion, capability discussion, or scoped solution dialogue.",
    icon: ArrowRight,
  },
];

const engagementFlow = [
  {
    step: "01",
    title: "Submit your enquiry",
    text: "Share your goals, services of interest, timeline, and a short note about the business challenge or opportunity.",
    icon: Send,
  },
  {
    step: "02",
    title: "Initial qualification",
    text: "We review the context, align the right discussion path, and identify the most relevant Duanamize team members.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Strategic discussion",
    text: "A focused conversation explores priorities, current-state realities, scope, and where measurable value can be created.",
    icon: Landmark,
  },
  {
    step: "04",
    title: "Next-step alignment",
    text: "Depending on fit, we move into proposal shaping, advisory follow-up, partner alignment, or capability-building planning.",
    icon: CalendarRange,
  },
];

const serviceTags = [
  "Process Intelligence",
  "Agentic Automation",
  "Operational Excellence",
  "Digital Transformation",
  "Capability Building",
  "Partner Ecosystem",
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

function SectionHeader({ eyebrow, title, description, light = false, center = false }) {
  return (
    <div className={`mb-8 md:mb-10 ${center ? "text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${
          light ? "border-white/20 bg-white/10 text-blue-100" : "border-blue-200 bg-white text-[#0A2463]"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2
        style={serif}
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-3 max-w-3xl text-sm leading-relaxed md:text-lg ${center ? "mx-auto" : ""} ${
          light ? "text-blue-100/85" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function ContactPathCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="group rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30">
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-slate-900/20`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          {item.tag}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
    </div>
  );
}

function FlowCard({ item, last = false }) {
  const Icon = item.icon;
  return (
    <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
      {!last ? <div className="absolute right-[-16px] top-1/2 hidden h-px w-8 bg-slate-300 lg:block" /> : null}
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Step {item.step}</div>
      </div>
      <div className="mt-5 text-xl font-semibold text-slate-950">{item.title}</div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
    </div>
  );
}

export default function DuanamizeContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    service: serviceOptions[0],
    companySize: companySizeOptions[2],
    budget: budgetOptions[5],
    timeline: timelineOptions[1],
    message: "",
    consent: true,
  });

  const inquirySummary = useMemo(() => {
    const items = [formData.service, formData.timeline, formData.budget].filter(Boolean);
    return items.join(" • ");
  }, [formData]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_34%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 md:px-8 md:pb-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100/75">
                <span>Contact Us</span>
                <span>•</span>
                <span className="text-white">Start the right conversation</span>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Sparkles className="h-3.5 w-3.5" /> Executive enquiry experience
              </div>

              <h1 style={serif} className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Contact Duanamize for transformation conversations that move from intent to action.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/82 md:text-lg">
                Whether you are exploring LSS+AI, process intelligence, automation, partner collaboration, or capability building,
                this page is designed to help you reach the right discussion path quickly and professionally.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5"
                >
                  Submit an enquiry <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:selvan@duanamize.org"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Email Duanamize
                </a>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-3">
                {quickSignals.map((item) => (
                  <div key={item.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-lg font-semibold text-white">{item.value}</div>
                    <p className="mt-2 text-sm leading-relaxed text-blue-100/76">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[760px]">
              <div className="pointer-events-none absolute -left-8 top-8 hidden h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-xl lg:block" />
              <div className="pointer-events-none absolute -right-8 bottom-0 hidden h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl lg:block" />

              <div className="grid gap-4 md:grid-cols-[1.04fr_0.96fr]">
                <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/10 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                    alt="Executive business discussion"
                    className="h-full min-h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071857] via-[#071857]/35 to-transparent" />

                  <div className="absolute inset-x-5 top-5 rounded-[24px] border border-white/12 bg-slate-950/40 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">Contact command center</div>
                        <div className="mt-1 text-lg font-semibold text-white">A better first conversation</div>
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                        Premium enquiry
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 rounded-[28px] border border-white/12 bg-slate-950/45 p-5 backdrop-blur-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                      <Headphones className="h-3.5 w-3.5" /> Direct access points
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <Mail className="h-4 w-4 text-cyan-200" />
                        <div className="mt-3 text-sm font-semibold text-white">Email</div>
                        <div className="mt-1 text-xs leading-relaxed text-blue-100/75">selvan@duanamize.org</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <Phone className="h-4 w-4 text-cyan-200" />
                        <div className="mt-3 text-sm font-semibold text-white">Call</div>
                        <div className="mt-1 text-xs leading-relaxed text-blue-100/75">+91 9884919972</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <MapPin className="h-4 w-4 text-cyan-200" />
                        <div className="mt-3 text-sm font-semibold text-white">Visit</div>
                        <div className="mt-1 text-xs leading-relaxed text-blue-100/75">Sembakkam, Chennai</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[28px] border border-white/12 bg-white/10 shadow-xl shadow-blue-950/20 backdrop-blur-xl">
                    <div className="relative h-52">
                      <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                        alt="Consulting collaboration"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071857]/92 via-[#071857]/25 to-transparent" />
                      <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/12 bg-slate-950/45 p-4 backdrop-blur-xl">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">Aligned to Duanamize pathways</div>
                        <div className="mt-2 text-base font-semibold text-white">Transformation, partnerships, and capability conversations</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/12 bg-white/10 p-5 shadow-xl shadow-blue-950/20 backdrop-blur-xl">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100/70">Services often discussed</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {serviceTags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                      <div className="flex items-start gap-3">
                        <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                        <p className="text-sm leading-relaxed text-blue-100/82">
                          Ideal for enterprise leaders, operations teams, transformation sponsors, consulting partners, and decision-makers shaping the next phase of business performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Choose the right route"
                title="Not every enquiry should enter through the same door."
                description="This section gives the contact page a more strategic identity. Instead of a single generic form, it frames the three most relevant conversation paths users may be trying to reach."
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {contactModes.map((item) => (
                <ContactPathCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
              <div className="border-b border-slate-200 bg-[linear-gradient(135deg,#f8fbff_0%,#edf6ff_100%)] p-6 md:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A2463]">
                      <Send className="h-3.5 w-3.5" /> Professional enquiry form
                    </div>
                    <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                      Tell us what you are trying to solve.
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                      Share enough context for a more intelligent first conversation. This is designed to feel closer to a Big 4 enquiry experience than a generic website contact form.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/40">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Enquiry summary</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">{inquirySummary || "Select your priorities"}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-7">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    />
                  </Field>

                  <Field label="Work email" required>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="name@company.com"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    />
                  </Field>

                  <Field label="Company name" required>
                    <input
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your organization"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    />
                  </Field>

                  <Field label="Job title">
                    <input
                      value={formData.jobTitle}
                      onChange={(e) => handleChange("jobTitle", e.target.value)}
                      placeholder="Your role"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    />
                  </Field>

                  <Field label="Phone number">
                    <input
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Optional"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    />
                  </Field>

                  <Field label="Service of interest" required>
                    <select
                      value={formData.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Company size">
                    <select
                      value={formData.companySize}
                      onChange={(e) => handleChange("companySize", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    >
                      {companySizeOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Estimated budget">
                    <select
                      value={formData.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Expected timeline">
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleChange("timeline", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    >
                      {timelineOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Tell us about your enquiry" required>
                    <textarea
                      rows={7}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Briefly describe your business context, challenge, expected outcome, or the type of conversation you would like to have."
                      className="w-full rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700 outline-none transition focus:border-[#0A2463]/20 focus:bg-white"
                    />
                  </Field>
                </div>

                <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleChange("consent", e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0A2463] focus:ring-[#0A2463]"
                    />
                    <span className="text-sm leading-relaxed text-slate-600">
                      I agree that Duanamize may use this information to respond to my enquiry and continue the discussion in a professional business context.
                    </span>
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm leading-relaxed text-slate-500">
                    Best used for transformation enquiries, strategic discussions, partnership conversations, and capability-building requests.
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A2463] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Send enquiry <Send className="h-4 w-4" />
                  </button>
                </div>

                {submitted ? (
                  <div className="mt-5 rounded-[24px] border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <div className="font-semibold">Enquiry captured.</div>
                        <p className="mt-1 leading-relaxed">
                          In a production environment, this form would route your submission to the Duanamize contact workflow with service, budget, and timeline context attached.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </form>
            </div>

            <div className="grid gap-6 lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
                    alt="Duanamize contact office style visual"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/12 bg-slate-950/45 p-4 backdrop-blur-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-50">
                      <MapPin className="h-3.5 w-3.5" /> Chennai contact point
                    </div>
                    <div className="mt-3 text-lg font-semibold text-white">Duanamize office contact details</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid gap-4">
                    <InfoRow icon={Building2} title="Address">
                      Plot No.1, Flat A, Jasper Apartment, Gayathri Nagar, 7th Street, Sembakkam, Chennai - 600 073.
                    </InfoRow>
                    <InfoRow icon={Phone} title="Call">
                      +91 9884919972
                    </InfoRow>
                    <InfoRow icon={Mail} title="Email">
                      selvan@duanamize.org
                    </InfoRow>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">What to include for a better response</div>
                <div className="mt-4 grid gap-3">
                  {[
                    "The business challenge or transformation objective",
                    "Which service area you want to explore",
                    "Approximate urgency and target timeline",
                    "Any budget or commercial guardrails worth knowing",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                      <div className="text-sm leading-relaxed text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#0A2463]/10 bg-gradient-to-br from-[#071857] to-[#0E2F82] p-6 text-white shadow-xl shadow-blue-900/20">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                  <WalletCards className="h-3.5 w-3.5" /> Engagement note
                </div>
                <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight">
                  Prefer a direct conversation first?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blue-100/82">
                  Reach out by email or phone, then use the form when you want to structure the discussion with scope, timeline, and solution focus.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href="mailto:selvan@duanamize.org" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                    Email now
                  </a>
                  <a href="tel:+919884919972" className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15">
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="After you reach out"
                title="A contact page should also reduce uncertainty."
                description="Instead of making the next step feel opaque, this page explains how Duanamize typically takes an enquiry forward—so the user understands what a high-quality first interaction looks like."
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {engagementFlow.map((item, index) => (
                <FlowCard key={item.step} item={item} last={index === engagementFlow.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-300/20">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                alt="Consulting workshop"
                className="h-full min-h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#071857]/88 via-[#071857]/65 to-[#071857]/92" />

              <div className="absolute inset-0 p-6 md:p-8">
                <div className="grid h-full gap-4 lg:grid-cols-[1.06fr_0.94fr]">
                  <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                        <Leaf className="h-3.5 w-3.5" /> Why this page works
                      </div>
                      <h3 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white">
                        It is not only about being reachable. It is about being strategically approachable.
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-blue-100/82">
                        The page blends premium presentation, qualification logic, clear contact paths, and next-step clarity so enterprise visitors feel guided rather than dumped into a basic form.
                      </p>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {quickSignals.map((item) => (
                        <div key={item.value} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 backdrop-blur-xl">
                          <div className="text-lg font-semibold text-white">{item.value}</div>
                          <div className="mt-1 text-xs leading-relaxed text-blue-100/72">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {proofCards.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="rounded-[26px] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="mt-4 text-lg font-semibold text-white">{item.title}</div>
                          <p className="mt-2 text-sm leading-relaxed text-blue-100/78">{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Why this contact design fits Duanamize"
                title="Premium, informative, and still easy to scan."
                description="The page intentionally avoids the flat, generic contact-template look. Instead, it acts as an executive entry point into the Duanamize ecosystem while keeping the design system aligned with the other pages already created."
              />

              <div className="grid gap-4 md:grid-cols-2">
                {proofCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0A2463] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-lg font-semibold text-slate-950">{item.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] border border-[#0A2463]/10 bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                  <Sparkles className="h-3.5 w-3.5" /> Ready when you are
                </div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Let’s make the first conversation relevant, focused, and commercially meaningful.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/82 md:text-lg">
                  Reach Duanamize with a transformation enquiry, partnership discussion, or strategic question and we will route the conversation toward the right next step.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5"
                >
                  Start your enquiry <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:selvan@duanamize.org"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Contact by email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required = false, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-slate-800">
        {label} {required ? <span className="text-rose-500">*</span> : null}
      </div>
      {children}
    </label>
  );
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#0A2463] text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-950">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-slate-600">{children}</div>
        </div>
      </div>
    </div>
  );
}
