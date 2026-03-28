import React, { useState } from "react";
import {
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Cpu,
  Factory,
  Clock,
  Bot,
  Shield,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Search,
  Rocket,
  MessageCircle,
} from "lucide-react";

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const faqs = [
  {
    id: 1,
    icon: Cpu,
    question: "What is LSS+AI methodology?",
    answer:
      "LSS+AI is Duanamize's proprietary methodology that combines the rigour of Lean Six Sigma (LSS) process improvement with the power of Artificial Intelligence. Traditional Lean Six Sigma eliminates waste and reduces variability through structured problem-solving. We augment this with AI-driven analytics, predictive modelling, and intelligent automation — delivering results that are faster, deeper, and more sustainable than either approach alone. The result is a unified framework that transforms operations, drives measurable ROI, and builds a lasting culture of continuous improvement.",
    category: "Methodology",
  },
  {
    id: 2,
    icon: Factory,
    question: "What industries do you serve?",
    answer:
      "Duanamize serves a broad range of industries where operational excellence and process efficiency are strategic priorities. Our core sectors include Manufacturing (automotive, electronics, FMCG, industrial), Healthcare & Life Sciences (hospitals, pharma, medical devices), Financial Services (banking, insurance, fintech), Logistics & Supply Chain, Energy & Utilities, and Professional Services. Our LSS+AI methodology is adaptable across all operational environments — whether you're running a production floor, a clinical department, or a back-office shared services centre.",
    category: "Services",
  },
  {
    id: 3,
    icon: Clock,
    question: "How long does implementation take?",
    answer:
      "Implementation timelines vary based on the scope and complexity of your engagement. A focused process improvement project typically runs 8–12 weeks from assessment to initial results. A full operational transformation programme — spanning multiple departments or sites — is typically structured across 6–18 months, with measurable milestones at each phase. Our structured methodology includes a rapid diagnostic phase (weeks 1–2), solution design (weeks 3–4), phased implementation (weeks 5–12+), and embedding with ongoing support. We always define success metrics and reporting cadences upfront so you can track progress throughout.",
    category: "Process",
  },
  {
    id: 4,
    icon: Bot,
    question: "What's the difference between RPA and Agentic Automation?",
    answer:
      "Robotic Process Automation (RPA) automates structured, rule-based tasks — following a fixed script to replicate human actions in software interfaces. It works well for high-volume, repetitive processes with predictable inputs and outputs. Agentic Automation is a more advanced paradigm where AI agents can reason, plan, adapt, and make decisions in dynamic environments without rigid scripting. Agentic systems can handle exceptions, learn from new data, collaborate with other agents, and take multi-step actions across systems. At Duanamize, we help clients identify where RPA provides quick wins and where Agentic Automation unlocks transformational capability — and we implement both within our LSS+AI framework.",
    category: "Technology",
  },
  {
    id: 5,
    icon: Shield,
    question: "How do you ensure data security?",
    answer:
      "Data security and client confidentiality are foundational to everything we do. Our security framework includes: strict NDA and data processing agreements before any engagement begins; role-based access controls and data minimisation principles throughout projects; compliance with GDPR, ISO 27001 standards, and sector-specific regulations (HIPAA for healthcare, FCA guidelines for financial services); secure, encrypted data environments for any AI model training or analysis; and a clear data retention and destruction policy at project completion. Our consultants are trained in data security best practices and undergo regular audits. We can provide a full security disclosure document on request.",
    category: "Security",
  },
  {
    id: 6,
    icon: GraduationCap,
    question: "What training do you provide?",
    answer:
      "Training is central to our engagement model — we believe sustainable results require capability building, not dependency. Our training offering includes: Lean Six Sigma certification pathways (Yellow Belt, Green Belt, Black Belt, Master Black Belt); LSS+AI specialist training tailored to your industry; digital skills training for AI tool adoption and automation literacy; 24/7 on-demand learning through our online learning platform; dedicated account management and coaching support; and change management training for leaders driving transformation. All certifications are globally recognised. Training can be delivered on-site, virtually, or as a blended programme.",
    category: "Training",
  },
  {
    id: 7,
    icon: TrendingUp,
    question: "What results can we expect?",
    answer:
      "While every engagement is unique, our clients consistently achieve significant and measurable outcomes. Across our portfolio, typical results include: 20–50% reduction in process cycle times; 30–60% reduction in quality defects and error rates; 15–40% improvement in operational throughput; 100–150% ROI within the first 12–18 months; and 90%+ employee adoption rates for new processes and technologies. We establish a clear baseline, define agreed KPIs at the outset, and track performance rigorously throughout. Our 95% project success rate reflects both the strength of our methodology and our commitment to client outcomes.",
    category: "Results",
  },
  {
    id: 8,
    icon: DollarSign,
    question: "How much does it cost?",
    answer:
      "Our pricing is structured to align with the value we deliver. Engagements are typically scoped and priced based on: project complexity and scope; duration and team size required; level of technology deployment (RPA, AI, analytics platforms); and training requirements. We offer fixed-fee project engagements for defined scopes, retainer models for ongoing transformation support, and outcome-based pricing arrangements for qualifying projects. We are transparent with our pricing from initial scoping and provide a detailed proposal following our complimentary discovery consultation. Contact us to discuss your specific situation and we'll provide a tailored engagement model.",
    category: "Pricing",
  },
  {
    id: 9,
    icon: Search,
    question: "How does AI assessment work?",
    answer:
      "Our AI Readiness Assessment is a structured diagnostic that evaluates your organisation's current state across five dimensions: data maturity and availability; process documentation and standardisation; technology infrastructure and integration capability; workforce digital literacy and change readiness; and strategic alignment and leadership sponsorship. The assessment typically takes 2–3 weeks and combines structured interviews, process observation, data sampling, and system reviews. You receive a detailed report with an AI Readiness Score, prioritised opportunity areas, a recommended roadmap, and a business case framework. The assessment is available as a standalone engagement or as the first phase of a broader transformation programme.",
    category: "Technology",
  },
  {
    id: 10,
    icon: Rocket,
    question: "How do we get started?",
    answer:
      "Getting started is straightforward. Step 1: Contact us via our website, email (selvan@duanamize.org), or phone to schedule a complimentary 30-minute discovery call. Step 2: We'll discuss your challenges, priorities, and objectives to determine if and how Duanamize can help. Step 3: If there's a fit, we'll propose a scoped engagement — typically starting with a rapid diagnostic or AI assessment. Step 4: Upon agreement, we mobilise quickly — our lean onboarding process means most engagements begin within 2–3 weeks of contract signature. We look forward to exploring how LSS+AI methodology can transform your operations.",
    category: "Getting Started",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQPage({ onNavigate }) {
  const [openId, setOpenId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) => {
    const matchesCat = activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      !search ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-4 md:px-8">
          <div className="flex flex-wrap items-center gap-2 mt-5 text-sm">
            <span className="text-white/40">•</span>
            <a href="/more" className="text-white hover:text-blue-200 transition-colors">More</a>
            <span className="text-white/40">•</span>
            <span className="text-white">FAQ</span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Everything you need to know{" "}
                <span className="text-[#A5F3FC]">for a seamless and informed experience.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Find answers to the most common questions about LSS+AI methodology, implementation,
                data security, pricing, and how to get started with Duanamize.
              </p>

              {/* Search */}
              <div className="mt-8 relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full rounded-2xl border border-white/10 bg-white/10 pl-10 pr-4 py-3 text-sm text-white placeholder-white/50 backdrop-blur-xl focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 transition"
                />
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="FAQ support"
                  className="rounded-2xl w-full h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ CONTENT ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-20">
          {/* Category filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#0A2463] text-white shadow-lg"
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 text-center text-slate-500 text-sm">
                No questions found matching your search. Try different keywords.
              </div>
            )}
            {filtered.map((faq) => {
              const Icon = faq.icon;
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-[28px] border transition-all ${
                    isOpen
                      ? "border-[#0A2463]/20 bg-white shadow-lg shadow-blue-900/5"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                      isOpen ? "bg-[#0A2463] text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                        {faq.category}
                      </div>
                      <div className="font-semibold text-slate-950 leading-snug">{faq.question}</div>
                    </div>
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-[#0A2463] text-white" : "bg-slate-200 text-slate-500"
                    }`}>
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="ml-14 border-t border-slate-100 pt-4">
                        <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ── */}
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071857] via-[#0A2463] to-[#10389A] p-8 shadow-2xl shadow-blue-900/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-cyan-300" />
                  <span className="text-sm font-semibold text-blue-200">Still have questions?</span>
                </div>
                <h2 style={serif} className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Our team is here to help.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                  Can't find what you're looking for? Reach out directly and one of our
                  LSS+AI specialists will get back to you within one business day.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="mailto:selvan@duanamize.org" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Email Our Team <ArrowRight className="h-4 w-4" />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
