import React from 'react';
import { Brain, ArrowRight, Target, Zap, Shield, TrendingUp, Bot, Rocket } from 'lucide-react';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const solutions = [
  {
    title: 'Process Intelligence',
    description: 'Leverage advanced analytics and AI to gain deep insights into your business processes, identify bottlenecks, and optimize performance.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: ['Process Mining', 'Performance Analytics', 'Bottleneck Detection', 'Optimization Insights'],
    href: '/process-intelligence',
  },
  {
    title: 'Agentic Automation',
    description: 'Deploy intelligent AI agents that autonomously handle complex tasks, make decisions, and adapt to changing business environments.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    features: ['AI Agents', 'Autonomous Workflows', 'Decision Intelligence', 'Adaptive Learning'],
    href: '/agentic-automation',
  },
  {
    title: 'Capability Building',
    description: 'Develop organizational and individual capabilities through targeted training, knowledge transfer, and continuous learning programs.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    features: ['Skill Development', 'Knowledge Transfer', 'Training Programs', 'Continuous Learning'],
    href: '/capability-building',
  },
];

const solutionBenefits = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'AI-powered solutions that address your specific business challenges with surgical accuracy and measurable impact.'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Quick implementation cycles that deliver value faster while maintaining enterprise-grade quality and security.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in security protocols and compliance frameworks that protect your data and operations at scale.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business, from pilot programs to enterprise-wide transformations.'
  },
];

const solutionFlow = [
  {
    step: '01',
    title: 'Discovery',
    text: 'Deep analysis of your current processes, challenges, and opportunities to identify the right AI-powered solutions.'
  },
  {
    step: '02',
    title: 'Design',
    text: 'Custom solution architecture that aligns with your business objectives and integrates seamlessly with existing systems.'
  },
  {
    step: '03',
    title: 'Implementation',
    text: 'Phased deployment with comprehensive testing, training, and change management to ensure successful adoption.'
  },
  {
    step: '04',
    title: 'Optimization',
    text: 'Continuous monitoring and improvement to maximize ROI and adapt to evolving business needs.'
  },
];

const featuredInsights = [
  {
    title: 'AI Readiness Assessment',
    description: 'Evaluate your organization\'s maturity across data, technology, culture, and governance before implementing AI solutions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tag: 'Process Intelligence',
    path: '/solutions-process-intelligence'
  },
  {
    title: 'AI implementation best practices',
    description: 'Deploy intelligent AI agents that autonomously handle complex tasks, make decisions, and adapt to changing business environments in real-time.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    tag: 'Automation',
    path: '/solutions-agentic-automation'
  },
  {
    title: 'AI capability development',
    description: 'Develop organizational and individual capabilities through targeted training, knowledge transfer, and continuous learning programs for AI readiness.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
    tag: 'Training',
    path: '/solutions-capability'
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#071857]">
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.20),transparent_32%),radial-gradient(circle_at_45%_75%,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute -left-16 top-12 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-32 pt-2 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-36">
          <div className="pt-4 lg:pt-10">
            <div className="mt-2 inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A4D8C] shadow-sm">
              Solutions
            </div>
            <div className="mt-5 text-sm text-blue-100/80">
              <a href="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
                Home
              </a>
              {" / Solutions"}
            </div>
            <h1 style={serif} className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Transform Your Business with
              <span className="block text-cyan-200">AI-Powered Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/90 md:text-lg">
              Comprehensive solutions designed to accelerate your digital transformation journey with measurable results and sustainable impact.
              <br className="hidden md:block" />
              Partner with us to unlock new opportunities and drive innovation across your organization.
            </p>
          </div>

          <div className="relative lg:pt-4">
            <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
                alt="AI-powered business solutions"
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
              <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                  Solution focus areas
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["AI Integration", "Digital Transformation", "Process Automation", "Data Analytics", "Cloud Solutions", "Business Intelligence"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                  <div className="flex items-start gap-3">
                    <Brain className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-relaxed text-white">
                      Designed for business leaders, digital transformation teams, and innovation officers seeking measurable AI-driven business impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Benefits Section */}
      {/* <section className="bg-[linear-gradient(180deg,#f5fbff_0%,#eef7ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A4D8C] shadow-sm">
              Why Choose Our Solutions
            </div>
            <h2 style={serif} className="mt-6 text-3xl font-semibold text-[#12304A] md:text-5xl">
              Built for Business Impact
            </h2>
            <p className="mt-4 text-lg text-slate-600 whitespace-normal">
              Our solutions are designed to deliver measurable business value through advanced AI capabilities and proven methodologies, ensuring seamless integration with your existing workflows while maximizing ROI and driving long-term success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutionBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-[28px] border border-white bg-white/90 p-6 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 style={serif} className="text-xl font-semibold leading-tight text-[#12304A]">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

 

 
      {/* Solutions Grid */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:px-8">
        <div className="mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0A4D8C]">
            Core Solutions
          </div>
          <h2 style={serif} className="mt-6 text-3xl font-semibold text-[#12304A] md:text-5xl">
            The main sections of the Solutions Menu
          </h2>
          <p className="mt-4 text-lg text-slate-600 whitespace-normal">
            From strategy to implementation, we offer end-to-end solutions that drive operational excellence and business growth, empowering your teams with the tools and insights needed to stay ahead in an evolving digital landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                  <div className="p-8 pt-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 style={serif} className="text-2xl font-semibold text-[#12304A]">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={solution.href}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A2463] group-hover:border-[#0A2463]/30 group-hover:bg-blue-50/60 transition"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

           {/* Solution Process Flow */}
      <section className="bg-[linear-gradient(180deg,#f5fbff_0%,#eef7ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8">
        <div className="mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0A4D8C]">
            Our Process
          </div>
          <h2 style={serif} className="mt-6 text-3xl font-semibold text-[#12304A] md:text-5xl">
            From Concept to Value
          </h2>
          <p className="mt-4 text-lg text-slate-600 whitespace-normal">
            A structured approach to solution delivery that ensures successful outcomes and sustainable business impact, guiding you through every phase from initial discovery to full-scale implementation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutionFlow.map((item) => (
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

           {/* Featured Insights Section */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:px-8">
        <div className="mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0A4D8C]">
            Featured Resources
          </div>
          <h2 style={serif} className="mt-5 text-3xl font-semibold text-[#12304A] md:text-5xl">
            Deep Dive Into Our Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600 whitespace-normal">
            Explore detailed insights, case studies, and implementation guides for our comprehensive solution portfolio, leveraging our expertise to accelerate your transformation journey with confidence and clarity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <a href={item.path} className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0A2463] group-hover:border-[#0A2463]/30 group-hover:bg-blue-50/60 transition">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#061650]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(99,102,241,0.18),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h3 style={serif} className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                  Ready to Accelerate Your Digital Journey?
                </h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-blue-100/85">
                  Partner with experts to unlock faster, smarter transformation through proven methodologies and advanced technology—delivering measurable results from day one.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] hover:bg-blue-50">
                  Schedule a Consultation  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
