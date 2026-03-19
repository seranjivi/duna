import React from 'react';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const solutions = [
  {
    title: 'AI Strategy & Consulting',
    description: 'Strategic guidance for AI adoption, roadmap development, and change management to ensure successful transformation.',
    icon: '🧠',
    features: ['AI Readiness Assessment', 'Strategic Roadmap', 'Change Management', 'ROI Analysis'],
  },
  {
    title: 'Process Automation',
    description: 'End-to-end automation solutions using RPA, intelligent automation, and workflow optimization.',
    icon: '⚡',
    features: ['RPA Implementation', 'Workflow Design', 'Process Mining', 'Performance Monitoring'],
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'Comprehensive data solutions including data pipelines, analytics platforms, and business intelligence.',
    icon: '📊',
    features: ['Data Architecture', 'Analytics Platforms', 'BI Solutions', 'Data Governance'],
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of enterprise systems, APIs, and third-party platforms for unified operations.',
    icon: '🔗',
    features: ['API Development', 'Enterprise Integration', 'Cloud Migration', 'System Modernization'],
  },
  {
    title: 'Process Excellence',
    description: 'Lean Six Sigma methodologies enhanced with AI for continuous improvement and operational excellence.',
    icon: '🎯',
    features: ['LSS+AI Methodology', 'Process Optimization', 'Quality Management', 'Continuous Improvement'],
  },
  {
    title: 'Digital Transformation',
    description: 'Holistic digital transformation services covering strategy, implementation, and organizational change.',
    icon: '🚀',
    features: ['Digital Strategy', 'Technology Modernization', 'Organizational Change', 'Capability Building'],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071857] to-[#0A2463] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100">
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
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center mb-16">
          <h2 style={serif} className="text-3xl font-semibold text-[#12304A] md:text-5xl">
            Our Solution Portfolio
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
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
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 style={serif} className="text-2xl font-semibold text-[#12304A] mb-4">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-6 inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A2463] to-[#071857] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 style={serif} className="text-3xl font-semibold md:text-5xl mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-blue-100/90 mb-8">
              Let's discuss how our solutions can drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 bg-transparent text-white font-semibold hover:bg-white/10 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
