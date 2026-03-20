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
import SolutionsPage from './src/pages/SolutionsPage.jsx';
import IndustriesPage from './src/pages/IndustriesPage.jsx';
import ResultsPage from './src/pages/ResultsPage.jsx';
import AboutPage from './src/pages/AboutPage.jsx';

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
        <Route path="lss-ai-revolution" element={<LSSAIPage />} />
        <Route path="lsssub1" element={<LSSSub1Page />} />
        <Route path="lsssub2" element={<LSSSub2Page />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
