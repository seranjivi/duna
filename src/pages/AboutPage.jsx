import React from 'react';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const leadership = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former McKinsey partner with 15+ years in AI transformation and digital strategy. Led Fortune 500 transformations across manufacturing, healthcare, and financial services.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
    expertise: ['AI Strategy', 'Digital Transformation', 'Change Management'],
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Ex-Google engineering lead with expertise in scalable AI systems, cloud architecture, and enterprise integration. Architected solutions serving 10M+ users globally.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    expertise: ['Cloud Architecture', 'AI/ML Systems', 'Enterprise Integration'],
  },
  {
    name: 'Jennifer Park',
    role: 'Chief Operating Officer',
    bio: 'Lean Six Sigma Master Black Belt with 20+ years in operational excellence. Transformed operations at multiple Fortune 100 companies, delivering $500M+ in savings.',
    image: 'https://images.unsplash.com/photo-1573496359142-b3d40a7a7d1a?auto=format&fit=crop&w=400&q=80',
    expertise: ['Process Excellence', 'Operations Management', 'Quality Systems'],
  },
];

const companyStats = [
  { icon: '🌍', label: 'Global Presence', value: '25+', description: 'Countries served' },
  { icon: '👥', label: 'Expert Team', value: '500+', description: 'Transformation professionals' },
  { icon: '🏆', label: 'Client Success', value: '98%', description: 'Client satisfaction rate' },
  { icon: '💡', label: 'Projects Delivered', value: '1,200+', description: 'Successful transformations' },
];

const values = [
  {
    title: 'Client-Centric Approach',
    description: 'We put our clients at the center of everything we do, ensuring solutions that drive real business value.',
    icon: '🎯',
  },
  {
    title: 'Innovation Excellence',
    description: 'Pushing the boundaries of what\'s possible with AI and automation to create transformative solutions.',
    icon: '🚀',
  },
  {
    title: 'Integrity & Transparency',
    description: 'Building trust through honest communication, ethical practices, and measurable results.',
    icon: '💎',
  },
  {
    title: 'Continuous Learning',
    description: 'Staying at the forefront of technology and methodology to deliver cutting-edge solutions.',
    icon: '📚',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071857] to-[#0A2463] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              About Duanamize
            </div>
            <h1 style={serif} className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Leading the Future of
              <span className="block text-cyan-200">AI Transformation</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-blue-100/90 md:text-xl">
              We are a global team of transformation experts dedicated to helping organizations harness the power of AI and automation to drive measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#0A2463] mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 style={serif} className="text-3xl font-semibold text-[#12304A] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 2020, Duanamize emerged from a simple observation: while AI technology was advancing rapidly, many organizations struggled to translate that potential into real business value. Our founders, veterans from top consulting firms and technology companies, saw an opportunity to bridge this gap.
              </p>
              <p>
                We combined deep industry expertise with cutting-edge AI capabilities, creating a unique approach that puts measurable outcomes at the center of every transformation. Our methodology blends proven Lean Six Sigma principles with AI-powered insights, delivering results that are both innovative and sustainable.
              </p>
              <p>
                Today, we're proud to be the trusted transformation partner for leading organizations across manufacturing, financial services, healthcare, and beyond. Our global team of 500+ experts has successfully delivered over 1,200 transformation projects, driving billions in value for our clients.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071857]/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="text-center mb-16">
            <h2 style={serif} className="text-3xl font-semibold text-[#12304A] md:text-5xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Meet the experts driving our mission to transform businesses through AI and operational excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader) => (
              <div key={leader.name} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#12304A]">{leader.name}</h3>
                    <div className="text-sm font-medium text-cyan-600">{leader.role}</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-cyan-50 text-cyan-700 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center mb-16">
          <h2 style={serif} className="text-3xl font-semibold text-[#12304A] md:text-5xl">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            The principles that guide everything we do, from client engagements to internal operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4">
              <div className="text-3xl">{value.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-[#12304A] mb-2">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
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
              Join Our Mission
            </h2>
            <p className="text-lg text-blue-100/90 mb-8">
              Whether you're looking to transform your organization or join our team of experts, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors shadow-lg">
                Start Your Transformation
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 bg-transparent text-white font-semibold hover:bg-white/10 transition-colors">
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
