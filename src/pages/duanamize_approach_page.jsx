import React from "react";

const serif = {
  fontFamily: 'Georgia, "Times New Roman", serif',
};

const heroImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
];

const approachSections = [
  {
    title: "LSS+AI Methodology",
    description:
      "Explore how AI strengthens Lean Six Sigma with faster insight, stronger diagnosis, and more predictive improvement.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    links: [
      "LSS+AI vs Traditional Lean Six Sigma",
      "How AI-Enhanced Lean Six Sigma is Revolutionizing Process Improvement in 2025",
    ],
    status: "2 pages available",
  },
  {
    title: "Our Process",
    description:
      "A practical implementation path covering change management, rollout planning, and execution structure.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    links: [
      "Mastering Change Management in Process Improvement",
      "The Complete Guide to Process Improvement Implementation",
    ],
    status: "2 pages available",
  },
  {
    title: "Technology Stack",
    description:
      "See how system integration, enterprise platforms, and AI-enabled tooling support process improvement at scale.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    links: [
      "System Integration Best Practices for Process Improvement Technology Success",
      "Building Your Enterprise Technology Stack for AI-Powered Process Improvement",
    ],
    status: "2 pages available",
  },
  {
    title: "Outcomes Framework",
    description:
      "Connect transformation work to measurable value through performance measurement and ROI realization.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    links: [
      "Performance Measurement Best Practices for Operational Excellence Programs",
      "ROI Measurement Framework for Process Improvement",
    ],
    status: "2 pages available",
  },
  {
    title: "AI Assessment & Implementation Framework",
    description:
      "A dedicated framework page can be introduced here as the content library expands.",
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1400&q=80",
    links: ["Content to be introduced"],
    status: "No content yet",
    comingSoon: true,
  },
];

const featuredInsights = [
  {
    title: "LSS+AI vs Traditional Lean Six Sigma",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
    tag: "Methodology",
  },
  {
    title: "Mastering Change Management in Process Improvement",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    tag: "Process",
  },
  {
    title: "System Integration Best Practices",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    tag: "Technology",
  },
  {
    title: "Performance Measurement Best Practices",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tag: "Outcomes",
  },
];

const flow = [
  {
    step: "01",
    title: "Methodology",
    text: "Start with an improvement philosophy that blends Lean Six Sigma rigor with AI-enabled intelligence.",
  },
  {
    step: "02",
    title: "Process",
    text: "Translate the methodology into a structured delivery model, change plan, and implementation approach.",
  },
  {
    step: "03",
    title: "Technology",
    text: "Support the transformation with the right systems, integrations, and data foundations.",
  },
  {
    step: "04",
    title: "Outcomes",
    text: "Track performance, prove ROI, and sustain measurable business improvement.",
  },
];

function Badge({ children }) {
  return (
    <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A4D8C] shadow-sm">
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-8 md:mb-12">
      <div className={`text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-sky-100/80" : "text-[#0A4D8C]"}`}>
        {eyebrow}
      </div>
      <h2
        style={serif}
        className={`mt-3 text-3xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-[#12304A]"}`}
      >
        {title}
      </h2>
      <p className={`mt-4 max-w-3xl text-sm leading-7 md:text-lg ${light ? "text-sky-100/85" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-sky-200">
          D
        </div>
        <div>
          <div className="text-sm font-semibold tracking-[0.18em] text-[#12304A]">DUANAMIZE</div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Approach</div>
        </div>
      </div>

      <button className="rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A4D8C] shadow-sm transition hover:bg-sky-50">
        Contact Us
      </button>
    </header>
  );
}

function Hero({ showHeader = true }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fbff_0%,#eef6fd_55%,#ffffff_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_32%)]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

      {showHeader && <Header />}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-2 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20">
        <div className="pt-4 lg:pt-10">
          <Badge>Approach</Badge>
          <div className="mt-5 text-sm text-slate-500">Home / Approach</div>
          <h1 style={serif} className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[#12304A] md:text-6xl">
            A clearer view of how Duanamize approaches transformation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            This page brings together the core building blocks of the Duanamize approach — methodology, implementation process, technology enablement, and measurable outcomes — in one simpler and more visual structure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#0A4D8C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-[#083c6b]">
              Explore the sections
            </button>
            <button className="rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-[#0A4D8C] shadow-sm transition hover:bg-sky-50">
              View featured pages
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["5", "approach areas"],
              ["8", "content pages available"],
              ["1", "coming soon framework"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
                <div className="text-3xl font-semibold text-[#0A4D8C]">{value}</div>
                <div className="mt-1 text-sm text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:pt-4">
          <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
            <div className="sm:row-span-2 overflow-hidden rounded-[32px] border border-white/70 bg-white p-3 shadow-[0_20px_60px_rgba(14,93,164,0.12)]">
              <img src={heroImages[0]} alt="Team using AI-enabled analytics" className="h-full min-h-[420px] w-full rounded-[24px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white p-3 shadow-[0_20px_40px_rgba(14,93,164,0.10)]">
              <img src={heroImages[1]} alt="Workshop collaboration" className="h-[200px] w-full rounded-[20px] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white p-3 shadow-[0_20px_40px_rgba(14,93,164,0.10)]">
              <img src={heroImages[2]} alt="Business planning session" className="h-[200px] w-full rounded-[20px] object-cover" />
            </div>
          </div>

          <div className="absolute -bottom-5 left-6 right-6 rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-[0_20px_50px_rgba(14,93,164,0.14)] backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Methodology", "LSS + AI"],
                ["Execution", "4 core tracks"],
                ["Value", "Measurable outcomes"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
                  <div className="mt-1 text-sm font-semibold text-[#12304A]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreSection() {
  return (
    <section id="methodology" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle
        eyebrow="Explore the approach"
        title="The main sections of the Approach menu"
        description="The page is structured around the actual Approach information architecture, so visitors can clearly understand what each section covers and where to go next."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {approachSections.map((item) => {
          const sectionId = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <div
              key={item.title}
              id={sectionId}
              className={`overflow-hidden rounded-[32px] border ${item.comingSoon ? "border-dashed border-sky-200 bg-sky-50/60" : "border-slate-200 bg-white"} shadow-sm`}
            >
            <div className="grid gap-0 md:grid-cols-[0.94fr_1.06fr]">
              <div className="relative min-h-[260px] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12304A]/70 via-[#12304A]/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                  {item.status}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <h3 style={serif} className="text-3xl font-semibold leading-tight text-[#12304A] md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{item.description}</p>

                <div className="mt-5 space-y-3">
                  {item.links.map((link) => (
                    <div key={link} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                      {link}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className={`rounded-full px-5 py-2.5 text-sm font-semibold ${item.comingSoon ? "border border-sky-200 bg-white text-[#0A4D8C]" : "bg-[#0A4D8C] text-white"}`}>
                    {item.comingSoon ? "Reserved for future content" : "Open section"}
                  </button>
                  {!item.comingSoon && (
                    <button className="rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A4D8C]">
                      View pages
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
            );
          })}
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f5fbff_0%,#eef7ff_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="How it all connects"
          title="A simpler way to explain the full approach"
          description="Instead of presenting the Approach section as isolated pages, this view shows the logic across the whole journey — from methodology through to measurable business outcomes."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {flow.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-white bg-white/90 p-6 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-[#0A4D8C]">{item.step}</div>
              <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-[#12304A]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedInsightsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionTitle
        eyebrow="Featured pages"
        title="A more visual entry into the content"
        description="These featured tiles give the Approach page stronger visual interest while still directing visitors into the detailed thought-leadership pages under each section."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredInsights.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                {item.tag}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold leading-7 text-[#12304A]">{item.title}</h3>
              <button className="mt-5 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-[#0A4D8C] transition hover:bg-sky-100">
                Read page
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0A4D8C_0%,#1261a7_45%,#37b7d7_100%)] p-8 shadow-[0_24px_70px_rgba(14,93,164,0.22)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100/90">Next step</div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Ready to connect methodology, execution, technology, and value?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sky-100/90 md:text-base">
              This streamlined Approach page provides a cleaner foundation for the detailed subpages underneath it while staying aligned with the premium visual language already established.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
              <div className="text-xs uppercase tracking-[0.18em] text-sky-100/75">Primary use</div>
              <div className="mt-2 text-lg font-semibold">Approach landing page</div>
            </div>
            <div className="rounded-[24px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
              <div className="text-xs uppercase tracking-[0.18em] text-sky-100/75">Visual direction</div>
              <div className="mt-2 text-lg font-semibold">Light, premium, image-led</div>
            </div>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A4D8C] transition hover:bg-sky-50">
              Discuss the page direction
            </button>
            <button className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View related content
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ApproachPage({ showHeader = true }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero showHeader={showHeader} />
      <ExploreSection />
      <FlowSection />
      <FeaturedInsightsSection />
      <CTASection />
    </div>
  );
}
