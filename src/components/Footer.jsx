import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Building2, Facebook, Instagram, Youtube } from 'lucide-react';

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-lg shadow-blue-900/30 ring-1 ring-white/25">
        <div className="absolute inset-1 rounded-full border border-white/30" />
        <div className="absolute inset-0 grid place-items-center text-lg font-black text-white">D</div>
      </div>
      <div>
        <div className="leading-tight font-semibold tracking-wide text-white">DUANAMIZE</div>
        <div className="text-[11px] tracking-[0.18em] text-blue-100/80">GLOBAL SERVICES</div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr_1fr] md:px-8">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Leading technology and management consulting firm specializing in AI, process optimization, and digital transformation for global enterprises.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <Building2 className="h-3.5 w-3.5" /> 24/7 Global Support
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Solutions</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["Process Intelligence", "Operational Excellence", "Digital Transformation", "Agentic Automation"].map((x) => (
              <li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Approach</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["LSS+AI Methodology", "Our Process", "Technology Stack", "Outcomes Framework"].map((x) => (
              <li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">More</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {["Results", "About Us", "Partner Inquiries", "FAQ"].map((x) => (
              <li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact Us</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>+91 9884919972</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>selvan@duanamize.org</span>
            </li>
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-4 w-4 text-slate-300" />
              <span>Duanamize Global Services Private Limited</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-blue-100/80 text-sm">
              © 2025 Duanamize Global Services. All rights reserved.
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
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/duanamize" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/duanamize" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.youtube.com/duanamize" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/duanamize" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
