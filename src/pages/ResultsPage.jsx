import React from 'react';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const caseStudies = [
  {
    title: 'Manufacturing Excellence Transformation',
    company: 'Global Automotive Manufacturer',
    industry: 'Manufacturing',
    description: 'Implemented AI-powered predictive maintenance and smart factory solutions resulting in significant operational improvements.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    results: [
      { metric: 'OEE Improvement', value: '42%', description: 'Overall Equipment Effectiveness' },
      { metric: 'Cost Reduction', value: '$3.2M', description: 'Annual operational savings' },
      { metric: 'Downtime', value: '-65%', description: 'Unplanned equipment downtime' },
    ],
    duration: '18 months',
    technologies: ['IoT Sensors', 'Predictive Analytics', 'Digital Twins', 'RPA'],
  },
  {
    title: 'Digital Banking Modernization',
    company: 'Leading Financial Services Group',
    industry: 'Financial Services',
    description: 'Transformed legacy banking systems with AI-powered automation and enhanced customer experience platforms.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee27e32933?auto=format&fit=crop&w=800&q=80',
    results: [
      { metric: 'Processing Time', value: '-70%', description: 'Transaction processing time' },
      { metric: 'Customer Satisfaction', value: '+45%', description: 'Net Promoter Score increase' },
      { metric: 'Compliance', value: '99.8%', description: 'Regulatory compliance rate' },
    ],
    duration: '24 months',
    technologies: ['AI/ML', 'Cloud Migration', 'API Integration', 'Process Automation'],
  },
  {
    title: 'Healthcare Workflow Optimization',
    company: 'Regional Healthcare Network',
    industry: 'Healthcare',
    description: 'Streamlined clinical workflows and EHR optimization leading to improved patient outcomes and operational efficiency.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    results: [
      { metric: 'Patient Wait Time', value: '-55%', description: 'Average patient waiting time' },
      { metric: 'Documentation', value: '+60%', description: 'Clinical documentation efficiency' },
      { metric: 'Error Reduction', value: '-40%', description: 'Medication administration errors' },
    ],
    duration: '15 months',
    technologies: ['EHR Integration', 'Clinical AI', 'Workflow Automation', 'Analytics Platform'],
  },
];

const kpiMetrics = [
  { icon: '📈', label: 'Average ROI', value: '245%', description: 'Return on investment across all projects' },
  { icon: '⚡', label: 'Process Efficiency', value: '+68%', description: 'Average efficiency improvement' },
  { icon: '💰', label: 'Cost Savings', value: '$12.4M', description: 'Total client cost savings' },
  { icon: '🎯', label: 'Project Success', value: '94%', description: 'Projects delivered on time and budget' },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071857] to-[#0A2463] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              Results & Case Studies
            </div>
            <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Measurable
              <span className="block text-cyan-200">Transformation Results</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-blue-100/90 md:text-xl">
              Real-world outcomes and proven ROI from our AI-powered transformation solutions across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* KPI Metrics */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {kpiMetrics.map((metric, index) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl font-bold text-[#0A2463] mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-slate-700 mb-1">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center mb-16">
          <h2 style={serif} className="text-3xl font-semibold text-[#12304A] md:text-5xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve remarkable transformation outcomes.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.title} className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                    {study.industry}
                  </span>
                </div>
                <h3 style={serif} className="text-2xl font-semibold text-[#12304A] mb-3">
                  {study.title}
                </h3>
                <div className="text-lg font-medium text-slate-700 mb-3">{study.company}</div>
                <p className="text-slate-600 mb-6 leading-relaxed">{study.description}</p>
                
                {/* Results Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.metric} className="text-center p-4 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="text-2xl font-bold text-cyan-600 mb-1">{result.value}</div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">{result.metric}</div>
                      <div className="text-xs text-slate-500">{result.description}</div>
                    </div>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Duration:</span> {study.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Technologies:</span> {study.technologies.join(', ')}
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                  Read Full Case Study →
                </button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071857]/50 to-transparent" />
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
              Achieve Similar Results
            </h2>
            <p className="text-lg text-blue-100/90 mb-8">
              Let's discuss how we can deliver measurable transformation outcomes for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors shadow-lg">
                Start Your Transformation
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 bg-transparent text-white font-semibold hover:bg-white/10 transition-colors">
                View More Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
