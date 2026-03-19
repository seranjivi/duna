import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Target, BrainCircuit, Menu, X } from 'lucide-react';

// Import the three page components
import DuanamizeHomepage from './duanamize_homepage_previewable_fixed_footer (2).jsx';
import DuanamizeApproachPage from './duanamize_approach_page (3) (1).jsx';
import DuanamizeLSSAIPage from './duanamize_lss_ai_revolution_2025_page (1).jsx';

const serif = {
  fontFamily: '"Playfair Display", Georgia, Cambria, "Times New Roman", serif',
};

const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    component: DuanamizeHomepage,
    description: 'Main landing page with services overview'
  },
  {
    id: 'approach',
    label: 'Approach',
    icon: Target,
    component: DuanamizeApproachPage,
    description: 'Our methodology and delivery framework'
  },
  {
    id: 'lss-ai',
    label: 'LSS+AI Revolution',
    icon: BrainCircuit,
    component: DuanamizeLSSAIPage,
    description: 'AI-enhanced Lean Six Sigma methodology'
  }
];

export default function TabNavigationApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Single Clean Header with Integrated Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">
          <div className="flex items-center justify-center">
            {/* Integrated Tab Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center gap-1 px-3 py-1.5 rounded-full font-medium text-xs transition-all duration-200
                      ${activeTab === tab.id 
                        ? 'bg-gradient-to-r from-[#0A2463] to-blue-600 text-white shadow-md' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }
                    `}
                  >
                    <Icon className="h-3 w-3" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="font-medium text-xs">Menu</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="lg:hidden mt-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
              >
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                        ${activeTab === tab.id 
                          ? 'bg-gradient-to-r from-[#0A2463] to-blue-600 text-white' 
                          : 'text-slate-600 hover:bg-slate-50'
                        }
                        ${tab.id !== tabs[tabs.length - 1].id ? 'border-b border-slate-100' : ''}
                      `}
                    >
                      <Icon className="h-4 w-4" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{tab.label}</div>
                        <div className={`text-xs ${activeTab === tab.id ? 'text-blue-100' : 'text-slate-500'}`}>
                          {tab.description}
                        </div>
                      </div>
                      {activeTab === tab.id && <ChevronRight className="h-4 w-4" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {ActiveComponent && <ActiveComponent />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
