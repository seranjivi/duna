import React from 'react';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const industries = [
  {
    title: 'Manufacturing & Industry 4.0',
    description: 'Smart manufacturing solutions with IoT integration, predictive maintenance, and production intelligence.',
    icon: '🏭',
    stats: ['40%+ OEE Improvement', '30% Cost Reduction', '25% Quality Enhancement'],
    solutions: ['Predictive Maintenance', 'Smart Factory', 'Quality Control', 'Supply Chain Optimization'],
  },
  {
    title: 'Financial Services',
    description: 'AI-powered solutions for risk management, compliance automation, fraud detection, and digital banking.',
    icon: '🏦',
    stats: ['60% Faster Processing', '45% Risk Reduction', '50% Cost Savings'],
    solutions: ['Risk Analytics', 'Compliance Automation', 'Fraud Detection', 'Digital Banking'],
  },
  {
    title: 'Healthcare',
    description: 'Clinical workflow automation, EHR optimization, and AI-driven diagnostics for better patient outcomes.',
    icon: '🏥',
    stats: ['35% Efficiency Gain', '28% Error Reduction', '40% Patient Satisfaction'],
    solutions: ['Clinical Automation', 'EHR Optimization', 'Patient Analytics', 'Telemedicine'],
  },
  {
    title: 'Energy & Utilities',
    description: 'Smart grid solutions, asset management, and predictive maintenance for resilient energy operations.',
    icon: '⚡',
    stats: ['25% Energy Savings', '50% Uptime Improvement', '30% Maintenance Reduction'],
    solutions: ['Smart Grid', 'Asset Management', 'Load Forecasting', 'Renewable Integration'],
  },
  {
    title: 'Retail & E-commerce',
    description: 'Customer journey transformation, supply chain optimization, and intelligent inventory management.',
    icon: '🛒',
    stats: ['45% Conversion Increase', '30% Inventory Reduction', '35% Customer Retention'],
    solutions: ['Customer Analytics', 'Supply Chain', 'Personalization', 'Inventory Management'],
  },
  {
    title: 'Enterprise Shared Services',
    description: 'Modernization of PMO, finance, HR, and service desk workflows at enterprise scale.',
    icon: '🏢',
    stats: ['55% Process Automation', '40% Cost Reduction', '50% Service Improvement'],
    solutions: ['PMO Automation', 'Finance Transformation', 'HR Digitalization', 'Service Desk'],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071857] to-[#0A2463] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              Industries
            </div>
            <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Industry-First
              <span className="block text-cyan-200">Transformation Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-blue-100/90 md:text-xl">
              Specialized solutions designed for your industry's unique challenges, compliance requirements, and operational workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center mb-16">
          <h2 style={serif} className="text-3xl font-semibold text-[#12304A] md:text-5xl">
            Industry Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Deep domain knowledge combined with cutting-edge technology to deliver industry-specific transformation outcomes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 lg:p-10">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 style={serif} className="text-2xl font-semibold text-[#12304A] mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="mb-6 space-y-2">
                    {industry.stats.map((stat) => (
                      <div key={stat} className="flex items-center gap-2 text-sm font-semibold text-cyan-600">
                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                        {stat}
                      </div>
                    ))}
                  </div>

                  {/* Solutions */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-3">
                      Key Solutions
                    </div>
                    {industry.solutions.map((solution) => (
                      <div key={solution} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        {solution}
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                    Explore Industry →
                  </button>
                </div>

                {/* Visual Side */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20" />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4 opacity-60">{industry.icon}</div>
                      <div className="text-sm font-medium text-slate-600">Industry Solutions</div>
                    </div>
                  </div>
                </div>
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
              Transform Your Industry
            </h2>
            <p className="text-lg text-blue-100/90 mb-8">
              Discover how our industry-specific solutions can drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors shadow-lg">
                Explore Your Industry
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 bg-transparent text-white font-semibold hover:bg-white/10 transition-colors">
                Schedule Industry Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
