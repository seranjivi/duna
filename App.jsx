import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './src/components/MainLayout.jsx';
import HomePage from './src/pages/HomePage.jsx';
import ApproachPage from './src/pages/duanamize_approach_page.jsx';
import LSSAIPage from './src/pages/duanamize_lss_ai_revolution_2025_page.jsx';
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
        <Route path="lss-ai-revolution" element={<LSSAIPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
