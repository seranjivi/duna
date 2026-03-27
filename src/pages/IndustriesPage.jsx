import React from 'react';
import { Brain, ArrowRight, Target, Zap, Shield, TrendingUp, Factory, Heart, Building2, Landmark, Cpu, ShoppingBag } from 'lucide-react';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const industries = [
  {
    title: 'Manufacturing & Industry 4.0',
    description: 'Smart manufacturing solutions integrating cyber-physical systems, IoT, AI, and advanced analytics into production operations — driving efficiency, quality, and sustainability across the entire value chain.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    features: ['Smart Factory Enablement', 'Predictive Maintenance', 'DevOps Automation', 'Cloud Migration'],
    href: '/industries-manufacturing',
  },
  {
    title: 'Financial Services',
    description: 'Banking digital transformation has evolved from a competitive advantage to an existential necessity — reimagining operations, enhancing customer experiences, and driving sustainable growth through fintech innovation.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    features: ['Digital Banking', 'Risk Analytics', 'Compliance Automation', 'Fraud Detection'],
    href: '/industries-financial',
  },
  {
    title: 'Healthcare',
    description: 'EHR optimisation and clinical workflow automation that helps healthcare providers maximise their technology investment, reduce administrative burden, and deliver better patient outcomes.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    features: ['EHR Optimisation', 'Clinical Workflow Automation', 'Patient Analytics', 'Healthcare Training'],
    href: '/industries-healthcare',
  },
  {
    title: 'Energy & Utilities',
    description: 'Smart grid technology and utility automation that integrates AI and IoT to create intelligent, efficient, and sustainable energy systems — improving grid reliability and renewable energy integration.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    features: ['Smart Grid Technology', 'Distribution Automation', 'Energy Management Systems', 'Utility IoT Solutions'],
    href: '/industries-energy',
  },
  {
    title: 'Retail & E-commerce',
    description: 'Retail digital transformation that reshapes how businesses engage customers, manage inventory, and compete — delivering personalised, seamless, and value-driven shopping experiences across all channels.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    features: ['E-commerce Automation', 'Omnichannel Strategy', 'Customer Analytics', 'Supply Chain Optimisation'],
    href: '/industries-retail',
  },
  {
    title: 'Technology',
    description: 'DevOps automation and cloud migration solutions that transform how technology teams build, test, deploy, and maintain software — enabling rapid, reliable delivery at enterprise scale.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    features: ['CI/CD Pipeline Optimisation', 'Cloud Migration', 'Infrastructure as Code', 'DevOps Transformation'],
    href: '/technology',
  },
];

const industryBenefits = [
  {
    icon: Target,
    title: 'Domain-Specific Expertise',
    description: 'Deep industry knowledge built through hands-on delivery — so our solutions address your sector\'s unique compliance requirements, workflows, and operational realities.'
  },
  {
    icon: Brain,
    title: 'AI-Augmented Delivery',
    description: 'Advanced AI and analytics embedded into every engagement, providing intelligence that transforms data into decisions and operations into competitive advantages.'
  },
  {
    icon: Shield,
    title: 'Compliance by Design',
    description: 'Regulatory and security requirements built into solutions from day one — not bolted on afterwards — across healthcare, finance, energy, and manufacturing sectors.'
  },
  {
    icon: TrendingUp,
    title: 'Measurable Outcomes',
    description: 'Every engagement is anchored in quantifiable business results — from OEE improvement on the factory floor to cost reduction in digital banking operations.'
  },
];

const industryFlow = [
  {
    step: '01',
    title: 'Industry Assessment',
    text: 'Deep discovery of your sector\'s specific challenges, compliance requirements, and technology landscape to baseline current performance and identify highest-impact opportunities.'
  },
  {
    step: '02',
    title: 'Solution Design',
    text: 'Industry-specific solution architecture aligned to your business objectives — incorporating sector best practices, regulatory requirements, and your existing technology ecosystem.'
  },
  {
    step: '03',
    title: 'Phased Delivery',
    text: 'Structured implementation with comprehensive testing, role-based training, and change management tailored to your industry\'s operational cadence and risk tolerance.'
  },
  {
    step: '04',
    title: 'Continuous Optimisation',
    text: 'Ongoing performance monitoring, benchmarking against industry peers, and improvement cycles that compound value and keep your organisation ahead of the competitive curve.'
  },
];

const featuredInsights = [
  {
    title: 'Smart Manufacturing & Industry 4.0',
    description: 'How cyber-physical systems and AI are transforming production efficiency and quality across industrial operations.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    tag: 'Manufacturing',
    path: '/industries-manufacturing'
  },
  {
    title: 'Banking Digital Transformation',
    description: 'Navigating fintech disruption, open banking mandates, and customer experience expectations in modern financial services.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    tag: 'Financial Services',
    path: '/industries-financial'
  },
  {
    title: 'EHR Optimisation & Clinical Workflows',
    description: 'Maximising healthcare technology investment through workflow automation, compliance training, and system optimisation.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    tag: 'Healthcare',
    path: '/industries-healthcare'
  },
  {
    title: 'Smart Grid & Energy Automation',
    description: 'Building intelligent, resilient energy infrastructure through grid automation, IoT, and renewable energy integration.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    tag: 'Energy & Utilities',
    path: '/industries-energy'
  },
];

export default function IndustriesPage() {
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
              Industries
            </div>
            <div className="mt-5 text-sm text-blue-100/80">
              <a href="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
                Home
              </a>
              {" / Industries"}
            </div>
            <h1 style={serif} className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Industry-Specific Solutions for
              <span className="block text-cyan-200">Real Operational Results</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/90 md:text-lg">
              Deep domain expertise across manufacturing, financial services, healthcare, energy,
              retail, and technology — delivering transformation that understands your industry's
              unique challenges, compliance requirements, and operational workflows.
              <br className="hidden md:block" />
              Partner with us to unlock sector-specific value and drive measurable business impact.
            </p>
          </div>

          <div className="relative lg:pt-4">
            <div className="overflow-hidden rounded-[32px] border border-white/12 shadow-2xl shadow-teal-950/30">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Industry transformation solutions"
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 h-72 bg-gradient-to-t from-[#071857] via-[#071857]/20 to-transparent" />
              <div className="bg-white/8 p-6 backdrop-blur-xl border-t border-white/10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">
                  Industry focus areas
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Manufacturing", "Financial Services", "Healthcare", "Energy & Utilities", "Retail", "Technology"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white/95">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-[22px] border border-white/10 bg-slate-950/35 p-4">
                  <div className="flex items-start gap-3">
                    <Brain className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-relaxed text-white">
                      Designed for industry leaders, operations directors, and digital transformation
                      teams seeking sector-specific expertise with measurable business impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Process Flow */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A4D8C] shadow-sm">
            Our Process
          </div>
          <h2 style={serif} className="mt-6 text-3xl font-semibold text-[#12304A] md:text-5xl">
            From Discovery to Lasting Impact
          </h2>
          <p className="mt-4 text-lg text-slate-600 whitespace-normal">
            A structured, industry-aware delivery methodology that ensures every engagement starts
            with deep sector understanding and ends with measurable, sustained business improvement
            — not just a technology deployment.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industryFlow.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-white bg-white/90 p-6 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-[#0A4D8C]">{item.step}</div>
              <h3 style={serif} className="mt-3 text-3xl font-semibold leading-tight text-[#12304A]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A4D8C] shadow-sm">
            Core Industries
          </div>
          <h2 style={serif} className="mt-6 text-3xl font-semibold text-[#12304A] md:text-5xl">
            The main sections of the Industries Menu
          </h2>
          <p className="mt-4 text-lg text-slate-600 whitespace-normal">
            From smart manufacturing and digital banking to healthcare EHR optimisation and smart grid
            automation — we deliver industry-specific transformation that combines domain knowledge
            with advanced AI, automation, and cloud capabilities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
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
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={industry.href}
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

      {/* Featured Insights Section */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A4D8C] shadow-sm">
            Featured Resources
          </div>
          <h2 style={serif} className="mt-5 text-3xl font-semibold text-[#12304A] md:text-5xl">
            Deep Dive Into Our Industries
          </h2>
          <p className="mt-4 text-lg text-slate-600 whitespace-normal">
            Explore sector-specific content, transformation strategies, and implementation frameworks
            across our core industry verticals — built from real delivery experience and domain expertise.
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
                  Ready to Transform Your Industry Operations?
                </h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-blue-100/85">
                  Partner with Duanamize to unlock sector-specific transformation through deep domain
                  expertise, advanced AI capabilities, and proven delivery methodologies — delivering
                  measurable results from day one.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A2463] hover:bg-blue-50">
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
