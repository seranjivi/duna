import React, { useState } from "react";
import {
  ArrowRight,
  HeartHandshake,
  Cpu,
  Users,
  TrendingUp,
  Globe,
  Award,
  CheckCircle2,
  Zap,
  Star,
  Shield,
  ChevronRight,
  Building2,
  Layers3,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const partnerTypes = [
  {
    icon: Cpu,
    title: "Technology Partners",
    desc: "Integrate your platforms with our LSS+AI methodology to create powerful joint solutions and accelerate market reach.",
    gradient: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Users,
    title: "Implementation Partners",
    desc: "Expand your consulting services with proven LSS+AI capabilities and deliver breakthrough results to your clients.",
    gradient: "from-sky-500 to-indigo-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    icon: Layers3,
    title: "Channel Partners",
    desc: "Generate new revenue streams through our reseller program with attractive margins and comprehensive support.",
    gradient: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    desc: "Unlock proven methodologies to scale your business. Achieve 95% success rates with 100–150% ROI.",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    icon: Award,
    title: "Expert Training",
    desc: "Comprehensive certification programs, ongoing training, and dedicated partner support teams.",
    accent: "from-sky-500 to-indigo-500",
  },
  {
    icon: Star,
    title: "Attractive Economics",
    desc: "Competitive margins, performance incentives, and joint marketing investment opportunities.",
    accent: "from-indigo-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Leverage our international presence and established client relationships across 15+ countries.",
    accent: "from-blue-500 to-blue-700",
  },
];

const idealProfile = [
  "Established consulting or technology firm",
  "Experience in process improvement or digital transformation",
  "Commitment to LSS+AI methodology training",
  "Strong client relationships and market presence",
];

const techRequirements = [
  "Certified practitioners and delivery teams",
  "Quality assurance and project management capabilities",
  "Technology infrastructure for solution delivery",
  "Commitment to Duanamize standards and methodologies",
];

const partnershipTypes = ["Technology Partner", "Implementation Partner", "Channel Partner"];
const companySizes = ["1–50 employees", "51–200 employees", "201–500 employees", "500+ employees"];
const primaryInterests = ["LSS+AI Solutions", "Process Intelligence", "Automation", "Digital Transformation", "Training Programs"];
const timelines = ["1–3 months", "3–6 months", "6–12 months", "12+ months"];

export default function PartnerPage({ onNavigate }) {
  const [form, setForm] = useState({
    company: "", name: "", title: "", email: "", phone: "",
    partnerType: "", companySize: "", interest: "", timeline: "", about: "", why: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 mt-5 text-sm">
            {/* <button onClick={() => onNavigate && onNavigate("MorePage")} className="text-white hover:text-blue-200 transition-colors">Home</button>
            <span className="text-white/40">•</span> */}
            <a href="/more" className="text-white hover:text-blue-200 transition-colors">More</a>
            <span className="text-white/40">•</span>
            <span className="text-white">Partner with Duanamize</span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Partner with Duanamize to accelerate growth through cutting-edge{" "}
                <span className="text-[#A5F3FC]"> AI, automation, and operational excellence.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Join our partner ecosystem and deliver AI-powered operational excellence to your clients.
                Grow your business with proven methodologies, global reach, and expert support.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                  alt="Partnership collaboration"
                  className="rounded-2xl w-full h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER TYPES ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Partnership Opportunities.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Three pathways to join our global partner network — each designed for different
              business models and market positions.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {partnerTypes.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.title} className={`rounded-[28px] border ${pt.border} ${pt.bg} p-6 transition hover:-translate-y-1 hover:shadow-lg`}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pt.gradient} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{pt.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNER BENEFITS ── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Partner Benefits.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Join our partner ecosystem and deliver AI-powered operational excellence to your clients.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${b.accent} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-950">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Partnership Requirements.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2463] text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">Ideal Partner Profile</h3>
              </div>
              <ul className="space-y-3">
                {idealProfile.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2463] text-white">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">Technical Requirements</h3>
              </div>
              <ul className="space-y-3">
                {techRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0A2463]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10">
            <h2 style={serif} className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Partner Inquiry Form.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              Grow your business with AI-powered operational excellence. Fill in the form below and
              our partnerships team will be in touch within 2 business days.
            </p>
          </div>

          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { name: "company", label: "Company Name", placeholder: "Your company name" },
                { name: "name", label: "Your Name", placeholder: "Full name" },
                { name: "title", label: "Job Title", placeholder: "e.g. Director of Partnerships" },
                { name: "email", label: "Email", placeholder: "work@company.com", type: "email" },
                { name: "phone", label: "Phone", placeholder: "+1 (000) 000-0000", type: "tel" },
              ].map((field) => (
                <div key={field.name} className={field.name === "company" ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">{field.label}</label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#0A2463]/10 transition"
                  />
                </div>
              ))}

              {[
                { name: "partnerType", label: "Partnership Type", options: partnershipTypes },
                { name: "companySize", label: "Company Size", options: companySizes },
                { name: "interest", label: "Primary Interest", options: primaryInterests },
                { name: "timeline", label: "Expected Timeline", options: timelines },
              ].map((select) => (
                <div key={select.name}>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">{select.label}</label>
                  <select
                    name={select.name}
                    value={form[select.name]}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#0A2463]/10 transition"
                  >
                    <option value="">— Select —</option>
                    {select.options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}

              {[
                { name: "about", label: "Tell us about your company" },
                { name: "why", label: "Why partner with Duanamize?" },
              ].map((ta) => (
                <div key={ta.name} className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">{ta.label}</label>
                  <textarea
                    name={ta.name}
                    value={form[ta.name]}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your thoughts..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0A2463] focus:outline-none focus:ring-2 focus:ring-[#0A2463]/10 transition resize-none"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#0A2463] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#071857] hover:shadow-lg">
                Submit Partner Inquiry <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-400">We typically respond within 2 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
