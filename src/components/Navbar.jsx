import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuData = [
  {
    key: "home",
    label: "HOME",
    path: "/",
  },
  {
    key: "approach",
    label: "APPROACH",
    path: "/approach",
    children: [
      {
        label: "LSS+AI Methodology",
        path: "/lss",
        items: [
          { name: "LSS+AI vs Traditional Lean Six Sigma", path: "/lsssub1" },
          { name: "AI-Enhanced Lean Six Sigma in 2025", path: "/lsssub2" },
        ],
      },
      {
        label: "Our Process",
        path: "/our-process",
        items: [
          { name: "Change Management for Process Improvement", path: "/our-process/change-management" },
          { name: "4-Phase Process Improvement Framework", path: "/our-process/implementation-framework" },
        ],
      },
      {
        label: "Technology Stack",
        path: "/technology-stack",
        items: [
          { name: "Process Improvement Technology Integration", path: "/process-technology-integration" },
          { name: "Enterprise AI-Powered Technology Stack", path: "/enterprise-ai-stack" },
        ],
      },
      {
        label: "Outcomes Framework",
        path: "/outcomes-framework",
        items: [
          { name: "Operational Excellence Performance Measurement", path: "/performance-measurement" },
          { name: "Process Improvement ROI Framework", path: "/outcomes-roi-framework" },
        ],
      },
    ],
  },
  {
    key: "solutions",
    label: "SOLUTIONS",
    path: "/solutions",
    children: [
      {
        label: "Process Intelligence",
        items: [{ name: "AI Readiness", path: "/solutions-process-intelligence" }],
      },
      {
        label: "Agentic Automation",
        items: [{ name: "AI Implementation Best Practices", path: "/solutions-agentic-automation" }],
      },
      {
        label: "Capability Building",
        items: [{ name: "AI Capability Development", path: "/solutions-capability" }],
      },
    ],
  },
  {
    key: "industries",
    label: "INDUSTRIES",
    path: "/industries",
    children: [
      {
        label: "Healthcare",
        path: "/industries-healthcare",
        items: [
          { name: "EHR Optimization", path: "/industries-healthcare-ehr" },
          { name: "AI-Powered Healthcare Automation", path: "/industries-healthcare-ai" },
        ],
      },
      {
        label: "Financial Services",
        path: "/industries-financial",
        items: [
          { name: "Banking Digital Transformation", path: "/industries-financial-banking" },
          { name: "Financial Compliance Automation", path: "/industries-financial-compliance" },
        ],
      },
      {
        label: "Manufacturing",
        path: "/industries-manufacturing",
        items: [
          { name: "Smart Manufacturing Transformation", path: "/industries-manufacturing-smart" },
          { name: "Lean Manufacturing Excellence", path: "/industries-manufacturing-lean" },
        ],
      },
      {
        label: "Technology",
        path: "/technology",
        items: [
          { name: "DevOps Automation & CI/CD Optimization", path: "/industries-devops" },
          { name: "Cloud Migration & Infrastructure Automation", path: "/industries-cloud" },
        ],
      },
      {
        label: "Additional Industries",
        path: "/additional-industries",
        items: [
          { name: "Energy & Utilities Automation", path: "/industries-energy" },
          { name: "Retail Digital Transformation", path: "/industries-retail" },
        ],
      },
      {
        label: "Training services",
        path: "/training",
        items: [
          { name: "Healthcare Training Services", path: "/industries-healthcare-training" },
        ],
      },
    ],
  },
  {
    key: "results",
    label: "RESULTS",
    path: "/results",
    children: [
      { label: "Case Studies", items: [{ name: "Case Studies", path: "/case-studies" }] },
      { label: "Impact Metrics", items: [{ name: "Impact Metrics", path: "/impact-metrics" }] },
      { label: "Client Stories", items: [{ name: "Client Stories", path: "/client-stories" }] },
      { label: "Transformation Journeys", items: [{ name: "Transformation Journeys", path: "/transformation-journeys" }] },
    ],
  },
   {
    key: "catalog",
    label: "CATALOG",
    path: "/catalog",
    children: [
      { label: "Database Skills", items: [{ name: "Database Skills", path: "/databaseskills" }] },
      { label: "Automation & AI", items: [{ name: "Automation & AI", path: "/automation" }] },
      { label: "Engagement & Profile", items: [{ name: "Engagement & Profile", path: "/engagement" }] },
    ],
  },
  {
    key: "more",
    label: "MORE",
    path: "/more",
    children: [
      { label: "Partner Inquiries", items: [{ name: "Partner Inquiries", path: "/partners" }] },
      { label: "Careers", items: [{ name: "Careers", path: "/careers" }] },
      { label: "FAQ", items: [{ name: "FAQ", path: "/faq" }] },
    ],
  },
  {
    key: "about",
    label: "ABOUT US",
    path: "/about",
  },
  // {
  //   key: "contact",
  //   label: "Contact US",
  //   path: "/contact",
  // },
];

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: 0.18, ease: "easeOut" },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Logo() {
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

function MobileGroup({ section }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (!section.children) {
    return (
      <Link
        to={section.path || "#"}
        onClick={() => {
          // Close mobile menu after navigation
          const mobileMenu = document.querySelector('[aria-label="Close menu"]')?.closest('button');
          if (mobileMenu) mobileMenu.click();
        }}
        className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-sm font-medium text-white backdrop-blur-sm"
      >
        {section.label}
        <ChevronRight className="h-4 w-4 text-blue-100/60" />
      </Link>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-white">{section.label}</span>
        <ChevronDown className={cn("h-4 w-4 text-blue-100/60 transition", open && "rotate-180")} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="border-t border-white/10"
          >
            <div className="space-y-4 px-4 py-4">
              {section.children.map((child) => (
                <div key={child.label} className="space-y-2 rounded-xl bg-white/5 p-3">
                  <div className="text-sm font-medium text-blue-100/90">{child.label}</div>
                  {child.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        // Close mobile menu after navigation
                        const mobileMenu = document.querySelector('[aria-label="Close menu"]')?.closest('button');
                        if (mobileMenu) mobileMenu.click();
                      }}
                      className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2.5 text-sm text-blue-50/90 hover:bg-white/20 hover:text-white transition"
                    >
                      <span className="pr-3">{item.name}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-blue-100/60" />
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DuanamizeButterflyNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Set initial active item based on current location
  const getInitialActiveItem = () => {
    const currentPath = location.pathname;
    
    // Special handling for home page
    if (currentPath === '/' || currentPath === '') {
      return 'home';
    }
    
    const activeMenuItem = menuData.find(item => {
      if (item.path === currentPath) return true;
      if (item.children) {
        return item.children.some(child => {
          if (child.path === currentPath) return true;
          if (child.items) {
            return child.items.some(subItem => subItem.path === currentPath);
          }
          return false;
        });
      }
      return false;
    });
    
    return activeMenuItem?.key || menuData.find((item) => item.children)?.key || "approach";
  };
  
  const initialActive = getInitialActiveItem();
  const firstOpen = menuData.find((item) => item.children)?.key || "approach";
  const [activeMain, setActiveMain] = useState(initialActive);
  const [previewMain, setPreviewMain] = useState(initialActive);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentMain = useMemo(
    () => menuData.find((item) => item.key === previewMain) || menuData.find((item) => item.key === activeMain),
    [previewMain, activeMain]
  );

  const [activeSub, setActiveSub] = useState(currentMain?.children?.[0]?.label || "");

  useEffect(() => {
    if (currentMain?.children?.length) {
      const valid = currentMain.children.some((item) => item.label === activeSub);
      if (!valid) setActiveSub(currentMain.children[0].label);
    }
  }, [currentMain, activeSub]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Set active menu item based on current location
  useEffect(() => {
    const currentPath = location.pathname;
    
    const activeMenuItem = menuData.find(item => {
      if (item.path === currentPath) return true;
      if (item.children) {
        return item.children.some(child => {
          if (child.path === currentPath) return true;
          if (child.items) {
            return child.items.some(subItem => subItem.path === currentPath);
          }
          return false;
        });
      }
      return false;
    });
    
    if (activeMenuItem) {
      setActiveMain(activeMenuItem.key);
      setPreviewMain(activeMenuItem.key);
    }
  }, [location.pathname]);

  const selectedSub = currentMain?.children?.find((item) => item.label === activeSub);

  return (
    <div className="bg-[#071857] text-slate-900">
      <section className="sticky top-0 z-40 bg-[#071857] backdrop-blur-lg border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <header className="flex h-20 items-center justify-between gap-6">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation" onMouseLeave={() => setPreviewMain(activeMain)}>
              {menuData.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const active = !hasChildren ? activeMain === item.key : activeMain === item.key;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.key}
                      to={item.path || "#"}
                      className={cn(
                        "rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.08em] transition hover:text-white whitespace-nowrap",
                        active ? "bg-white/10 text-white border border-white/20" : "text-blue-50/90 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.key}
                    to={item.path || "#"}
                    onClick={() => {
                      setActiveMain(item.key);
                      setPreviewMain(item.key);
                      setMenuOpen(true);
                    }}
                    onMouseEnter={() => {
                      setPreviewMain(item.key);
                      setMenuOpen(true);
                    }}
                    onFocus={() => {
                      setPreviewMain(item.key);
                      setMenuOpen(true);
                    }}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.08em] transition whitespace-nowrap",
                      active ? "bg-white/10 text-white border border-white/20" : "text-blue-50/90 hover:text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition", active && menuOpen && "rotate-180")} />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden rounded-full border border-white/25 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition md:inline-flex whitespace-nowrap"
              >
                CONTACT US
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </header>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            {menuOpen && currentMain?.children?.length && (
              <motion.div
                key={currentMain.key}
                {...fade}
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
                className="relative z-20 hidden xl:block"
              >
                <div className="overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <div className="grid grid-cols-[320px_1fr]">
                    <div className="border-r-2 border-white/30 p-5">
                      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {currentMain.label}
                      </div>
                      <div className="space-y-2">
                        {currentMain.children.map((child) => {
                          const active = child.label === activeSub;
                          return (
                            <Link
                              key={child.label}
                              to={child.path || "#"}
                              onMouseEnter={() => setActiveSub(child.label)}
                              onFocus={() => setActiveSub(child.label)}
                              onClick={() => setActiveSub(child.label)}
                              className={cn(
                                "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition-all duration-200",
                                active ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-100 border border-cyan-400/30" : "text-blue-100/80 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white"
                              )}
                            >
                              <span className="pr-4 font-medium">{child.label}</span>
                              <ChevronRight className="h-4 w-4 shrink-0" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {selectedSub?.label}
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {selectedSub?.items?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center justify-between rounded-2xl border border-white/20 px-4 py-3 text-sm text-blue-100/90 transition-all duration-200 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:text-white"
                          >
                            <span className="pr-4 leading-6">{item.name}</span>
                            <ChevronRight className="h-4 w-4 shrink-0 text-cyan-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-blue-900/20 p-3 xl:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.18 }}
              className="mx-auto h-[calc(100vh-24px)] max-w-2xl overflow-hidden rounded-[28px] bg-[#071857] shadow-[0_25px_60px_rgba(15,23,42,0.14)] border border-white/10 backdrop-blur-lg"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="h-[calc(100%-76px)] overflow-y-auto px-4 py-4">
                <div className="mb-4 rounded-2xl bg-white/5 px-4 py-3 text-sm leading-6 text-blue-100/80 backdrop-blur-sm">
                  Tablet and mobile version uses a simple accordion pattern to keep all three levels clear and easy to scan.
                </div>
                <div className="space-y-3">
                  {menuData.map((section) => (
                    <MobileGroup key={section.key} section={section} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
