import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const solutions = [
  {
    title: 'Process Intelligence',
    description: 'Leverage advanced analytics and AI to gain deep insights into your business processes, identify bottlenecks, and optimize performance.',
    icon: '🧠',
    features: ['Process Mining', 'Performance Analytics', 'Bottleneck Detection', 'Optimization Insights'],
    href: '/solutions-process-intelligence',
  },
  {
    title: 'Agentic Automation',
    description: 'Deploy intelligent AI agents that autonomously handle complex tasks, make decisions, and adapt to changing business environments.',
    icon: '🤖',
    features: ['AI Agents', 'Autonomous Workflows', 'Decision Intelligence', 'Adaptive Learning'],
    href: '/solutions-agentic-automation',
  },
  {
    title: 'Capability Building',
    description: 'Develop organizational and individual capabilities through targeted training, knowledge transfer, and continuous learning programs.',
    icon: '🚀',
    features: ['Skill Development', 'Knowledge Transfer', 'Training Programs', 'Continuous Learning'],
    href: '/solutions-capability',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071857] to-[#0A2463] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pt-2 pb-20 md:px-8 lg:pt-12 lg:pb-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-sm text-blue-100/70">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span>/</span>
                <span className="text-white">Solutions</span>
              </div>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                Solutions
              </div>
              <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Transform Your Business with
                <span className="block text-cyan-200">AI-Powered Solutions</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-blue-100/90 md:text-xl">
                Comprehensive solutions designed to accelerate your digital transformation journey with measurable results and sustainable impact.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[560px]">
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
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-16">
          <h2 style={serif} className="text-3xl font-semibold text-[#12304A] md:text-5xl">
            Our Solution Portfolio
          </h2>
          <p className="mt-4 text-lg text-slate-600 whitespace-normal">
            From strategy to implementation, we offer end-to-end solutions that drive operational excellence and business growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{solution.icon}</div>
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
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
