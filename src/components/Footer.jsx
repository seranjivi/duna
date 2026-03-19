import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'AI Strategy', path: '/solutions#ai-strategy' },
      { name: 'Process Automation', path: '/solutions#automation' },
      { name: 'Data Engineering', path: '/solutions#data' },
      { name: 'System Integration', path: '/solutions#integration' },
      { name: 'Process Excellence', path: '/solutions#excellence' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Manufacturing', path: '/industries#manufacturing' },
      { name: 'Financial Services', path: '/industries#financial' },
      { name: 'Healthcare', path: '/industries#healthcare' },
      { name: 'Energy & Utilities', path: '/industries#energy' },
      { name: 'Retail & E-commerce', path: '/industries#retail' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Approach', path: '/approach' },
      { name: 'Case Studies', path: '/results' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', path: '/blog' },
      { name: 'Whitepapers', path: '/resources#whitepapers' },
      { name: 'LSS+AI Methodology', path: '/lss-ai-revolution' },
      { name: 'Technology Stack', path: '/approach#technology' },
      { name: 'Support', path: '/support' },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Globe, href: '#', label: 'Website' },
];

const contactInfo = [
  { icon: Mail, value: 'contact@duanamize.com', href: 'mailto:contact@duanamize.com' },
  { icon: Phone, value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, value: 'Global Headquarters', href: '#' },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-lg shadow-blue-900/30 ring-1 ring-white/25">
        <div className="absolute inset-1 rounded-full border border-white/30" />
        <div className="absolute inset-0 grid place-items-center text-white font-black text-lg">D</div>
      </div>
      <div>
        <div className="text-white font-semibold tracking-wide leading-tight">DUANAMIZE</div>
        <div className="text-[11px] text-blue-100/80 tracking-[0.18em]">GLOBAL SERVICES</div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#071857] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-6">
          {/* Brand Section */}
          <div className="xl:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <LogoMark />
            </Link>
            <p className="text-blue-100/80 leading-relaxed mb-6 max-w-md">
              Transform your business with AI-powered automation, data-driven insights, and sustainable operational transformation that delivers measurable ROI.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-blue-100/80">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="hover:text-white transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm">{item.value}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.16em] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-blue-100/80 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-100/80 text-sm">
                Get the latest insights on AI transformation and process excellence delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-100/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-colors"
              />
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-blue-100/80 text-sm">
              © 2025 Duanamize Global Services. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 bg-white/10 text-blue-100/80 hover:bg-white/20 hover:text-white transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-blue-100/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-blue-100/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-blue-100/80 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
