import React from "react";
import {
  ArrowRight, BarChart3, Bot, ChevronDown, Clock3, Cpu,
  Factory, Gauge, GitMerge, Layers3, Mail, MapPin, Menu,
  Network, Phone, Settings, Shield, ShieldCheck, Sparkles,
  TrendingUp, Wrench, Zap, CheckCircle2, Activity, Target,
  RefreshCw, Package,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const solutions = [
  { icon: Cpu, title: "Smart Manufacturing & Industry 4.0", desc: "Transform your production with cyber-physical systems, IoT connectivity, AI-driven analytics, and digital twin technology for intelligent, adaptive manufacturing.", link: "#", color: "from-cyan-400 to-blue-500" },
  { icon: Target, title: "Lean Manufacturing & Six Sigma", desc: "Eliminate waste, reduce variation, and achieve near-perfect quality levels through proven lean principles, DMAIC methodology, and continuous improvement culture.", link: "#", color: "from-blue-400 to-indigo-500" },
  { icon: Bot, title: "Manufacturing Automation", desc: "Deploy industrial robots, cobots, AGVs, and intelligent control systems to automate assembly, quality inspection, and material handling operations.", link: "#", color: "from-teal-400 to-cyan-500" },
  { icon: Activity, title: "Industrial IoT Solutions", desc: "Connect machines, sensors, and systems across the production floor for real-time monitoring, predictive maintenance, and data-driven decision-making.", link: "#", color: "from-indigo-400 to-violet-500" },
  { icon: BarChart3, title: "Quality Management Systems", desc: "Implement SPC, poka-yoke, and TQM frameworks that prevent defects, ensure consistency, and drive continuous quality improvement across all production lines.", link: "#", color: "from-cyan-500 to-teal-500" },
  { icon: RefreshCw, title: "Supply Chain Optimization", desc: "Integrate supplier collaboration, demand planning, inventory optimization, and logistics management for a resilient, responsive manufacturing supply chain.", link: "#", color: "from-blue-500 to-cyan-400" },
];

const stats = [
  { value: "35%", label: "Average OEE improvement through smart manufacturing" },
  { value: "60%", label: "Reduction in unplanned downtime with predictive maintenance" },
  { value: "40%", label: "Quality defect reduction through Six Sigma implementation" },
  { value: "25%", label: "Cost reduction achieved through lean waste elimination" },
];

const whyUs = [
  { icon: Factory, title: "Manufacturing-First Expertise", text: "Deep domain knowledge spanning discrete, process, and hybrid manufacturing across automotive, aerospace, electronics, and FMCG sectors." },
  { icon: Layers3, title: "Integrated Methodology", text: "Unique LSS+AI approach combining proven lean and Six Sigma foundations with Industry 4.0 digital capabilities for measurable outcomes." },
  { icon: Zap, title: "Rapid Value Delivery", text: "Structured implementation methodology that identifies quick wins while building towards long-term operational excellence transformation." },
  { icon: TrendingUp, title: "Sustainable Results", text: "Change management and capability building ensure improvements are sustained and continuously enhanced beyond the initial engagement." },
];

const featuredPages = [
  {
    img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80",
    badge: "Smart Manufacturing",
    badgeColor: "border-cyan-400/30 bg-cyan-400/12 text-cyan-300",
    title: "Smart Manufacturing Revolution: Industry 4.0 Digital Transformation",
    desc: "Cyber-physical systems, Industrial IoT, AI-driven quality control, digital twins, and smart factory architectures transforming production excellence.",
    tag: "Industry 4.0",
  },
  {
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    badge: "Lean & Six Sigma",
    badgeColor: "border-indigo-400/30 bg-indigo-400/12 text-indigo-300",
    title: "Lean Manufacturing & Six Sigma: Production Excellence Through Continuous Improvement",
    desc: "Waste elimination, DMAIC methodology, statistical process control, and quality management systems for sustainable competitive advantage.",
    tag: "Operational Excellence",
  },
];


export default function ManufacturingMainPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* grid overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-2 text-sm text-blue-100/70">
                <span>Industries</span><span>•</span><span className="text-white">Manufacturing</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Sparkles className="h-3.5 w-3.5" /> Manufacturing Transformation
              </div>
              <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                The future of manufacturing is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">intelligent, lean, and connected.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white-100/82 md:text-lg">
                Duanamize helps manufacturers harness Industry 4.0 technologies, lean principles, and AI-driven
                automation to build production systems that are faster, smarter, and more competitive — while
                delivering measurable improvements in quality, efficiency, and cost.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#solutions" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] transition hover:-translate-y-0.5">
                  Explore solutions <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  Talk to an expert
                </a>
              </div>
              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <p className="mt-2 text-xs leading-relaxed text-blue-100/76">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image panel */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-2xl shadow-blue-950/50">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80"
                  alt="Smart manufacturing"
                  className="h-80 w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 h-80 bg-gradient-to-t from-[#071857] via-[#071857]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-slate-950/50 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Industry 4.0 transformation active</span>
                  </div>
                </div>
                <div className="p-5 border-t border-white/10">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/60 mb-3">Manufacturing capabilities</div>
                  <div className="flex flex-wrap gap-2">
                    {["Industry 4.0", "Digital Twin", "Industrial IoT", "Lean Six Sigma", "Robotics", "Smart Factory"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS MANUFACTURING TRANSFORMATION ── */}
      <section className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300 mb-4">
                <Sparkles className="h-3.5 w-3.5" /> What we do
              </div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-5xl">
                Manufacturing transformation that goes beyond technology deployment.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-200/60 md:text-base">
                Modern manufacturing excellence requires more than installing machines or software. It demands a
                holistic transformation of processes, people, and technology — aligned to production goals,
                quality standards, and competitive requirements.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-blue-200/60 md:text-base">
                Duanamize brings together Industry 4.0 digital capabilities and proven operational excellence
                methodologies — lean manufacturing, Six Sigma, and advanced automation — into a unified
                transformation approach that delivers sustainable, measurable results across the entire
                value chain.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  { icon: Cpu, text: "Industry 4.0 and smart factory design" },
                  { icon: Target, text: "Lean and Six Sigma operational excellence" },
                  { icon: Bot, text: "Industrial automation and robotics deployment" },
                  { icon: Activity, text: "Real-time IoT monitoring and predictive analytics" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-medium text-blue-100/80">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right panel */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
                alt="Manufacturing operations"
                className="h-full min-h-[480px] w-full object-cover opacity-35"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(10,22,40,0.97) 0%,rgba(13,31,60,0.85) 50%,rgba(15,37,80,0.93) 100%)" }} />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/85">
                  <Factory className="h-3.5 w-3.5" /> Our Manufacturing Approach
                </div>
                <div>
                  <h3 style={serif} className="text-2xl font-semibold leading-tight text-white">
                    From shop floor to top floor — a connected transformation strategy.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200/60">
                    Every engagement begins with operational context, production challenges, and quality objectives —
                    ensuring our solutions integrate with your existing systems, culture, and workforce capabilities.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["OEE Improvement", "Defect Reduction", "Cost Optimisation", "Digital Upskilling"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section id="solutions" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" /> Our manufacturing solutions
            </div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              End-to-end manufacturing transformation services.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-200/60 md:text-lg">
              From smart factory design to lean process optimisation — every solution is built around production
              outcomes, quality targets, and operational efficiency.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div key={sol.title} className="group rounded-[22px] border border-white/8 p-6 transition hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${sol.color} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{sol.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-200/55">{sol.desc}</p>
                  <a href={sol.link} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 transition group-hover:gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY DUANAMIZE ── */}
      <section className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300 mb-4">
                <Sparkles className="h-3.5 w-3.5" /> What sets us apart
              </div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-4xl mb-8">
                Built for production leaders who demand measurable, sustainable results.
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[20px] border border-white/8 p-5 transition hover:border-cyan-400/25" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-base font-semibold text-white">{item.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-blue-200/55">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80"
                alt="Manufacturing excellence"
                className="h-full min-h-[460px] w-full object-cover opacity-35"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(10,22,40,0.97) 0%,rgba(13,31,60,0.85) 50%,rgba(15,37,80,0.93) 100%)" }} />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/85">
                  <Gauge className="h-3.5 w-3.5" /> Why Duanamize Manufacturing
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">
                    We bridge the gap between operational excellence and digital innovation.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200/60">
                    Our unique LSS+AI methodology combines decades of lean and Six Sigma expertise with modern
                    Industry 4.0 capabilities — so your transformation delivers both immediate efficiency gains
                    and long-term digital competitiveness.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["LSS+AI Methodology", "Shop-Floor Proven", "Cross-Industry Expertise", "Capability Building"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED DEEP-DIVE PAGES ── */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" /> Explore in depth
            </div>
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-4xl">
              Go deeper into our manufacturing solutions.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-200/55">
              Two complementary pillars — smart digital transformation and lean operational excellence — working
              together to build manufacturing organisations that lead rather than follow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredPages.map((card) => (
              <div key={card.title} className="group relative overflow-hidden rounded-[24px] border border-white/8 transition hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-xl hover:shadow-blue-950/30" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="relative overflow-hidden">
                  <img src={card.img} alt={card.title} className="h-52 w-full object-cover opacity-55 transition group-hover:opacity-65 group-hover:scale-105 duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${card.badgeColor}`}>{card.badge}</span>
                  </div>
                  <div className="absolute right-5 bottom-5">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-medium text-white/70">{card.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 style={serif} className="text-xl font-semibold text-white leading-snug">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200/55">{card.desc}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-4 py-2 text-sm font-semibold text-cyan-300 transition group-hover:bg-cyan-400/15 group-hover:gap-3">
                    Read more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="relative pb-16 md:pb-20">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[24px] border border-cyan-400/12 p-8 md:p-10" style={{ background: "linear-gradient(135deg,rgba(13,32,64,0.9) 0%,rgba(15,37,80,0.9) 50%,rgba(10,30,69,0.9) 100%)", boxShadow: "0 0 60px rgba(56,189,248,0.05),0 25px 50px rgba(0,0,0,0.4)" }}>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" /> Start the conversation
                </div>
                <h2 style={serif} className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  Ready to transform how your manufacturing operation competes?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-200/60 md:text-lg">
                  Whether you are modernising a production facility, deploying smart factory technology, or building
                  lean capabilities from the ground up — Duanamize is your manufacturing transformation partner.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                  Get started <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:selvan@duanamize.org" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
