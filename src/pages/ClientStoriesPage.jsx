import React, { useState } from "react";
import {
  ArrowRight, Award, CheckCircle2, ChevronDown, Clock3,
  Heart, Mail, MapPin, Menu, Phone, Shield, ShieldCheck,
  Sparkles, Star, TrendingUp, Users, Quote, Building2, Landmark,
} from "lucide-react";

const serif = { fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif' };

const clientStories = [
  {
    org: "Regional Healthcare Network",
    role: "Dr. Sarah Johnson",
    title: "Chief Operating Officer",
    industry: "Healthcare",
    icon: Heart,
    color: "from-cyan-400 to-blue-500",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    challenge: "Our 12-hospital network struggled with increasing patient wait times, declining satisfaction scores, and rising operational costs despite traditional improvement efforts.",
    solution: "Comprehensive LSS+AI implementation across patient flow processes, emergency departments, and revenue cycle operations with AI-powered insights revealing hidden optimisation opportunities.",
    quote: "Duanamize transformed our entire approach to patient care and operational efficiency with their LSS+AI methodology.",
    results: ["35% reduction in average patient wait times", "25% decrease in readmission rates", "$1 million in annual cost savings", "22-point improvement in patient satisfaction scores"],
  },
  {
    org: "Community Bank",
    role: "Michael Chen",
    title: "VP Operations",
    industry: "Financial Services",
    icon: Landmark,
    color: "from-blue-400 to-indigo-500",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    challenge: "Regional bank struggled to compete with larger institutions and fintech companies due to manual processes slowing loan approvals while customer expectations rose.",
    solution: "Automated loan origination, customer onboarding, and compliance processes using robotic and agentic automation with AI-powered decision support.",
    quote: "We're now faster and more responsive than banks ten times our size thanks to Duanamize's digital transformation approach.",
    results: ["60% faster loan processing times", "40% reduction in operational costs", "20-point improvement in Net Promoter Score", "95% automation rate for standard applications"],
  },
  {
    org: "Global Manufacturing Group",
    role: "Priya Nair",
    title: "Head of Operations",
    industry: "Manufacturing",
    icon: Building2,
    color: "from-teal-400 to-cyan-500",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    challenge: "Multiple production facilities running on legacy systems with no predictive capability — breakdowns were reactive, quality was inconsistent, and OEE was declining year on year.",
    solution: "Industry 4.0 transformation with Industrial IoT, predictive maintenance algorithms, and lean Six Sigma integration across three manufacturing sites.",
    quote: "The shift from reactive to predictive operations changed everything. We haven't had an unplanned shutdown in eight months.",
    results: ["35%+ OEE improvement across facilities", "60% reduction in unplanned downtime", "40% defect reduction via Six Sigma DMAIC", "$2.3M annual savings across all sites"],
  },
];

const whyClients = [
  { icon: TrendingUp, title: "Measurable commitment", text: "Every engagement begins with agreed KPIs and a baseline — so clients always know exactly what success looks like and how close we are." },
  { icon: Users, title: "Partnership not project", text: "Duanamize embeds with client teams, builds internal champions, and transfers capability — ensuring results persist long after engagement ends." },
  { icon: Shield, title: "Industry expertise", text: "Sector-specific knowledge means solutions are grounded in the realities of clinical workflows, financial regulations, or manufacturing environments." },
  { icon: Award, title: "Speed to value", text: "Structured methodology identifies quick wins while building toward strategic transformation — clients see results in weeks, not just at go-live." },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-lg ring-1 ring-white/25">
        <div className="absolute inset-1 rounded-full border border-white/30" />
        <div className="absolute inset-0 grid place-items-center text-lg font-black text-white">D</div>
      </div>
      <div>
        <div className="leading-tight font-semibold tracking-wide text-white">DUANAMIZE</div>
        <div className="text-[11px] tracking-[0.18em] text-blue-200/70">GLOBAL SERVICES</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 md:px-8">
      <LogoMark />
      <nav className="hidden items-center gap-6 text-sm text-blue-100/80 lg:flex">
        <a href="#" className="transition-colors hover:text-white">Home</a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">Approach <ChevronDown className="h-3.5 w-3.5" /></a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">Solutions <ChevronDown className="h-3.5 w-3.5" /></a>
        <a href="#" className="inline-flex items-center gap-1 transition-colors hover:text-white">Industries <ChevronDown className="h-3.5 w-3.5" /></a>
        <a href="/results" className="text-white font-medium border-b border-cyan-400 pb-0.5">Results</a>
        <a href="#" className="transition-colors hover:text-white">About Us</a>
      </nav>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/8 md:inline-flex">Contact Us</button>
        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white lg:hidden"><Menu className="h-5 w-5" /></button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5" style={{ background: "linear-gradient(180deg,#060d1f 0%,#04091a 100%)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr_1fr] md:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/55">Direct client testimonials from COOs, VPs, and operations leaders who have partnered with Duanamize — their stories, in their own words.</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Star className="h-3.5 w-3.5" /> Verified client voice
          </div>
        </div>
        <div><h4 className="text-sm font-semibold text-white">Results</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["Case Studies","Impact Metrics","Client Stories","Transformation Journeys"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
        <div><h4 className="text-sm font-semibold text-white">Company</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["About Us","Careers","Client Stories","Partner Inquiries","FAQ"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
        <div><h4 className="text-sm font-semibold text-white">Useful Links</h4><ul className="mt-3 space-y-2 text-sm text-blue-200/55">{["Privacy Policy","Terms and Conditions","Disclaimer","Contact Us"].map((x)=>(<li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>))}</ul></div>
        <div>
          <h4 className="text-sm font-semibold text-white">Contact Us</h4>
          <ul className="mt-3 space-y-3 text-sm text-blue-200/55">
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-cyan-400" /><span>selvan@duanamize.org</span></li>
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-cyan-400" /><span>+91 9884919972</span></li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-cyan-400" /><span>Sembakkam, Chennai, India</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-blue-200/35 md:flex-row md:items-center md:justify-between md:px-8">
          <div>  Duanamize Global Services Private Limited. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Verified testimonials</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Client-first engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ClientStoriesMainPage() {
  const [active, setActive] = useState(0);
  const story = clientStories[active];
  const Icon = story.icon;

  return (
    <div className="min-h-screen text-white" style={{ background: "linear-gradient(135deg,#0a1628 0%,#0d1f3c 40%,#0f2550 70%,#0a1e45 100%)" }}>
      <div className="pointer-events-none fixed inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_14%_18%,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_82%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
          <div className="flex flex-wrap items-center gap-2 mt-5 text-sm text-blue-100/70">
            <a href="/results" className="text-white hover:text-blue-200 transition-colors">Results</a>
            <span className="text-white">•</span>
            <span className="text-white">Client Stories</span>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-4xl">
              <h1 style={serif} className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Client stories {" "}
                <span className="text-[#A5F3FC]">in their own words.</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white md:text-lg">
                Hear directly from our clients about their experiences partnering with Duanamize and the
                breakthrough results achieved through our LSS+AI methodology — challenges faced, the journey
                taken, and the measurable outcomes delivered.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Client testimonials" className="h-72 w-full object-cover opacity-65" />
                <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-[14px] border border-cyan-400/20 bg-[#0a1628]/70 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /><span className="text-xs font-semibold text-white">Verified client testimonials</span></div>
                </div>
                <div className="p-5 border-t border-white/8" style={{ background: "rgba(10,22,40,0.6)" }}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/65 mb-3">Client industries</div>
                  <div className="flex flex-wrap gap-2">
                    {["Healthcare","Financial Services","Manufacturing","Technology"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-blue-100/75">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SELECTOR */}
      <section className="relative">
        <div className="absolute inset-0" style={{ background: "rgba(6,13,31,0.5)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="mb-8 text-left">
            <h2 style={serif} className="mt-4 text-3xl font-semibold md:text-5xl">Select a client story to read.</h2>
          </div>

          {/* Story tabs */}
          <div className="mb-8 flex flex-wrap gap-3">
            {clientStories.map((s, i) => {
              const SIcon = s.icon;
              return (
                <button key={s.org} onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${active === i ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg" : "border border-white/12 bg-white/4 text-blue-200/70 hover:text-white hover:border-cyan-400/25"}`}>
                  <SIcon className="h-4 w-4" />{s.org}
                </button>
              );
            })}
          </div>

          {/* Active story */}
          <div className="rounded-[24px] border border-white/8 overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
            {/* Quote bar */}
            <div className="border-b border-white/8 p-6 md:p-8" style={{ background: "rgba(56,189,248,0.04)" }}>
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 text-cyan-400/50 shrink-0 mt-1" />
                <blockquote style={serif} className="text-xl font-semibold text-white leading-relaxed md:text-2xl">
                  "{story.quote}"
                </blockquote>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <img src={story.img} alt={story.role} className="h-14 w-14 rounded-full object-cover border-2 border-cyan-400/30" />
                <div>
                  <div className="font-semibold text-white">{story.role}</div>
                  <div className="text-sm text-blue-200/60">{story.title}, {story.org}</div>
                </div>
                <span className={`ml-auto rounded-full border border-white/20 bg-gradient-to-r ${story.color} px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white`}>{story.industry}</span>
              </div>
            </div>

            {/* Story body */}
            <div className="grid gap-0 lg:grid-cols-3">
              <div className="p-6 md:p-8 border-b border-white/8 lg:border-b-0 lg:border-r">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300/50 mb-3">The Challenge</div>
                <p className="text-sm leading-relaxed text-blue-200/65">{story.challenge}</p>
              </div>
              <div className="p-6 md:p-8 border-b border-white/8 lg:border-b-0 lg:border-r">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300/50 mb-3">The Solution</div>
                <p className="text-sm leading-relaxed text-blue-200/65">{story.solution}</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400/70 mb-3">Results Achieved</div>
                <ul className="space-y-2">
                  {story.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-blue-100/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />{r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-[24px] border border-white/8 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80" alt="Team partnership" className="h-full min-h-[460px] w-full object-cover opacity-35" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(10,22,40,0.97) 0%,rgba(13,31,60,0.85) 50%,rgba(15,37,80,0.93) 100%)" }} />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/85">
                  <Users className="h-3.5 w-3.5" /> Client Partnership
                </div>
                <div>
                  <h3 style={serif} className="text-3xl font-semibold leading-tight text-white">A partnership built on shared outcomes, not just deliverables.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200/60">Duanamize does not just hand over a solution and leave. We embed, transfer capability, and ensure your team can sustain and scale the transformation independently.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {["Embedded Delivery","Capability Transfer","Champion Building","Continuous Support"].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-sm font-semibold text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 style={serif} className="text-3xl font-semibold leading-tight md:text-4xl mb-8">Four reasons clients keep coming back.</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyClients.map((item) => {
                  const WIcon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[20px] border border-white/8 p-5 transition hover:border-cyan-400/25" style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg"><WIcon className="h-5 w-5" /></div>
                        <div className="text-base font-semibold text-white">{item.title}</div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-blue-200/55">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAR RATINGS ROW */}
      <section className="relative bg-white text-slate-900">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {clientStories.map((s) => {
              const SIcon = s.icon;
              return (
                <div key={s.org} className="rounded-[22px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map((n) => <Star key={n} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-slate-600 italic mb-4">"{s.quote}"</blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white`}><SIcon className="h-5 w-5" /></div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{s.role}</div>
                      <div className="text-xs text-slate-500">{s.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTINUE EXPLORING ── */}
    
    </div>
  );
}
