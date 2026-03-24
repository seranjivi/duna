import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './src/components/MainLayout.jsx';
import HomePage from './src/pages/HomePage.jsx';
import ApproachPage from './src/pages/duanamize_approach_page.jsx';
import OurProcessPage from './src/pages/OurProcess.jsx';
import OurProcessSub1Page from './src/pages/OurProcessSub1.jsx';
import OurProcessSub2Page from './src/pages/OurProcessSub2.jsx';
import LSSAIPage from './src/pages/lss.jsx';
import LSSSub1Page from './src/pages/lsssub1.jsx';
import LSSSub2Page from './src/pages/lsssub2.jsx';
import SolutionsProcessIntelligencePage from './src/pages/Solutions-Process Intelligence.jsx';
import SolutionsAgenticAutomationPage from './src/pages/Solutions-Agentic Automation.jsx';
import SolutionsCapabilityPage from './src/pages/Solution-Capabilities.jsx';
import SolutionsPage from './src/pages/SolutionsPage.jsx';
import IndustriesPage from './src/pages/IndustriesPage.jsx';
import IndustriesHealthcareAIPage from './src/pages/industries-healthcare-AI.jsx';
import IndustriesHealthcareEHRPage from './src/pages/industries-healthcare-EHR.jsx';
import IndustriesHealthcarePage from './src/pages/industries-healthcare.jsx';
import ResultsPage from './src/pages/results.jsx';
import AboutPage from './src/pages/AboutPage.jsx';
import ContactPage from './src/pages/contact.jsx';

// Import Tailwind CSS
import './src/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="approach" element={<ApproachPage showHeader={false} />} />
        <Route path="our-process" element={<OurProcessPage />} />
        <Route path="our-process/change-management" element={<OurProcessSub1Page />} />
        <Route path="our-process/implementation-framework" element={<OurProcessSub2Page />} />
        <Route path="lss" element={<LSSAIPage />} />
        <Route path="lsssub1" element={<LSSSub1Page />} />
        <Route path="lsssub2" element={<LSSSub2Page />} />
        <Route path="solutions-process-intelligence" element={<SolutionsProcessIntelligencePage />} />
        <Route path="solutions-agentic-automation" element={<SolutionsAgenticAutomationPage />} />
        <Route path="solutions-capability" element={<SolutionsCapabilityPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="industries-healthcare" element={<IndustriesHealthcarePage />} />
        <Route path="industries-healthcare-ai" element={<IndustriesHealthcareAIPage />} />
        <Route path="industries-healthcare-ehr" element={<IndustriesHealthcareEHRPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
