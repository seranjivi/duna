import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Approach', path: '/approach', hasDropdown: true },
  { name: 'Solutions', path: '/solutions', hasDropdown: true },
  { name: 'Industries', path: '/industries' },
  { name: 'Results', path: '/results' },
  { name: 'About Us', path: '/about' },
];

const approachDropdownItems = [
  { name: 'LSS+AI Methodology', path: '/lss-ai-revolution' },
  { name: 'Our Process', path: '/our-process' },
  { name: 'Technology Stack', path: '/approach#technology' },
  { name: 'Outcomes Framework', path: '/approach#outcomes' },
  { name: 'AI Assessment & Implementation Framework', path: '/approach#assessment' },
];

const solutionsDropdownItems = [
  { name: 'Process Intelligence', path: '/solutions-process-intelligence' },
  { name: 'Operational Excellence', path: '/solutions#operational-excellence' },
  { name: 'Digital Transformation', path: '/solutions#digital-transformation' },
  { name: 'Robotic Automation', path: '/solutions#robotic-automation' },
  { name: 'Agentic Automation', path: '/solutions-agentic-automation' },
  { name: 'Capability Building', path: '/solutions#capability-building' },
  { name: 'Continuous Optimization', path: '/solutions#continuous-optimization' },
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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApproachDropdownOpen, setIsApproachDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdowns when route changes
  useEffect(() => {
    setIsApproachDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsApproachDropdownOpen(false);
        setIsSolutionsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleApproachClick = (e) => {
    e.preventDefault();
    navigate('/approach');
  };

  const handleSolutionsClick = (e) => {
    e.preventDefault();
    navigate('/solutions');
  };

  const handleApproachChevronClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsApproachDropdownOpen(!isApproachDropdownOpen);
    setIsSolutionsDropdownOpen(false);
  };

  const handleSolutionsChevronClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
    setIsApproachDropdownOpen(false);
  };

  const handleDropdownItemClick = (path) => {
    setIsApproachDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
    navigate(path);
  };

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#071857] backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-5 md:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center">
              <LogoMark />
            </Link>
          </div>
          
          {/* Desktop Navigation - Perfectly Centered */}
          <nav className="relative z-30 hidden lg:flex items-center gap-6 text-sm text-blue-50/90">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isApproach = item.name === 'Approach';
                const isSolutions = item.name === 'Solutions';
                const isDropdownOpen = isApproach ? isApproachDropdownOpen : isSolutionsDropdownOpen;
                const dropdownItems = isApproach ? approachDropdownItems : solutionsDropdownItems;
                const handleClick = isApproach ? handleApproachClick : handleSolutionsClick;
                const handleChevronClick = isApproach ? handleApproachChevronClick : handleSolutionsChevronClick;

                return (
                  <div key={item.name} className={`group relative inline-flex items-center cursor-default text-blue-50/90 ${isActiveRoute(item.path) ? "rounded-full border border-white/20 bg-white/10 text-white" : ""}`} ref={dropdownRef}>
                    <Link
                      to={item.path}
                      onClick={handleClick}
                      className={`inline-flex items-center px-3 py-1.5 transition-colors ${
                        isActiveRoute(item.path)
                          ? "text-white"
                          : "hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={handleChevronClick}
                      className="inline-flex items-center justify-center p-0.5 hover:text-white transition-colors"
                      aria-label={`Toggle ${item.name} dropdown`}
                    >
                      <ChevronDown className={`h-3 w-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute left-1/2 top-full z-[60] mt-3 min-w-[250px] -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl"
                        >
                          <div className="space-y-1">
                            {dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                onClick={() => handleDropdownItemClick(dropdownItem.path)}
                                className="block w-full text-left px-3 py-2 text-sm text-blue-50/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors inline-flex items-center gap-1 px-3 py-1.5 ${
                    isActiveRoute(item.path)
                      ? "rounded-full border border-white/20 bg-white/10 text-white"
                      : "hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Desktop Contact Button */}
            <button className="hidden lg:inline-flex items-center rounded-full border border-white/25 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">
              Contact Us
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="text-sm font-medium">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden"
            >
              <div className="py-2">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    const isApproach = item.name === 'Approach';
                    const isSolutions = item.name === 'Solutions';
                    const dropdownItems = isApproach ? approachDropdownItems : solutionsDropdownItems;
                    const handleClick = isApproach ? handleApproachClick : handleSolutionsClick;

                    return (
                      <div key={item.name} className="relative">
                        <div className="flex items-center">
                          <Link
                            to={item.path}
                            onClick={() => {
                              navigate(item.path);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`flex-1 flex items-center justify-between px-4 py-3 text-left transition-colors ${
                              isActiveRoute(item.path)
                                ? 'bg-white/20 text-white'
                                : 'text-blue-50/90 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </Link>
                        </div>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-white/5 border-t border-white/10"
                            >
                              <div className="py-2">
                                {dropdownItems.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.path}
                                    onClick={() => {
                                      navigate(dropdownItem.path);
                                      setIsMobileMenuOpen(false);
                                      setIsApproachDropdownOpen(false);
                                      setIsSolutionsDropdownOpen(false);
                                    }}
                                    className="block w-full text-left px-8 py-2 text-sm text-blue-50/80 hover:bg-white/10 hover:text-white"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        navigate(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-3 transition-colors ${
                        isActiveRoute(item.path)
                          ? 'bg-white/20 text-white'
                          : 'text-blue-50/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
