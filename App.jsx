import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './src/components/MainLayout.jsx';
import HomePage from './src/pages/HomePage.jsx';
import ApproachPage from './src/pages/duanamize_approach_page.jsx';
import OurProcessPage from './src/pages/OurProcess.jsx';
import OurProcessSub1Page from './src/pages/OurProcessSub1.jsx';
import ProcessImprovementImplementationFrameworkPage from './src/pages/OurProcessSub2.jsx';
import LSSAIPage from './src/pages/lss.jsx';
import LSSSub1Page from './src/pages/lsssub1.jsx';
import LSSSub2Page from './src/pages/lsssub2.jsx';
import SolutionsProcessIntelligencePage from './src/pages/Solutions-Process Intelligence.jsx';
import SolutionsAgenticAutomationPage from './src/pages/Solutions-Agentic Automation.jsx';
import SolutionsCapabilityPage from './src/pages/Solution-Capabilities.jsx';
import ProcessIntelligenceMainPage from './src/pages/ProcessIntelligenceMainPage.jsx';
import AgenticAutomationMainPage from './src/pages/AgenticAutomationMainPage.jsx';
import CapabilityBuildingMainPage from './src/pages/CapabilityBuildingMainPage.jsx';
import SolutionsPage from './src/pages/SolutionsPage.jsx';
import IndustriesPage from './src/pages/IndustriesPage.jsx';
import IndustriesHealthcareAIPage from './src/pages/industries-healthcare-AI.jsx';
import IndustriesHealthcareEHRPage from './src/pages/industries-healthcare-EHR.jsx';
import IndustriesHealthcarePage from './src/pages/industries-healthcare.jsx';
import FinancialMainPage from './src/pages/FinancialMainPage.jsx';
import FinancialComplianceAutomationPage from './src/pages/FinancialComplianceAutomationPage.jsx';
import BankingDigitalTransformationPage from './src/pages/BankingDigitalTransformationPage.jsx';
import ManufacturingMainPage from './src/pages/Manufacturingmain.jsx';
import SmartManufacturingPage from './src/pages/smartmanufacturing.jsx';
import LearnManufacturingPage from './src/pages/learnmanufacturing.jsx';
import TechnologyPage from './src/pages/technology.jsx';
import DevOpsAutomationPage from './src/pages/devopsautomation.jsx';
import CloudMigrationPage from './src/pages/cloudmigration.jsx';
import AdditionalIndustriesPage from './src/pages/AdditionalIndustriesPage.jsx';
import EnergyUtilitiesPage from './src/pages/energyutilities.jsx';
import RetailDigitalTransformationPage from './src/pages/retaildigitaltransformation.jsx';
import TrainingServicesPage from './src/pages/TrainingServicesPage.jsx';
import HealthcareTrainingPage from './src/pages/HealthcareTrainingPage.jsx';
import CaseStudiesPage from './src/pages/CaseStudiesPage.jsx';
import ImpactMetricsPage from './src/pages/ImpactMetricsPage.jsx';
import ClientStoriesPage from './src/pages/ClientStoriesPage.jsx';
import TransformationJourneysPage from './src/pages/TransformationJourneysPage.jsx';
import MorePage from './src/pages/MorePage.jsx';
import PartnerPage from './src/pages/PartnerPage.jsx';
import CareersPage from './src/pages/CareersPage.jsx';
import FAQPage from './src/pages/FAQPage.jsx';
import ResultsPage from './src/pages/ResultsPage.jsx';
import AboutPage from './src/pages/AboutPage.jsx';
import ContactPage from './src/pages/contact.jsx';
import TechnologyStackPage from './src/pages/TechnologyStackPage.jsx';
import ProcessTechnologyIntegrationPage from './src/pages/ProcessTechnologyIntegrationPage.jsx';
import EnterpriseAIStackPage from './src/pages/EnterpriseAIStackPage.jsx';
import OutcomesFrameworkPage from './src/pages/OutcomesFrameworkPage.jsx';
import PerformanceMeasurementPage from './src/pages/PerformanceMeasurementPage.jsx';
import ROIFrameworkPage from './src/pages/ROIFrameworkPage.jsx';
import DatabasePage from './src/pages/DatabasePage.jsx';
import AutomationAIPage from './src/pages/AutomationAIPage.jsx';
import EngagementPage from './src/pages/EngagementPage.jsx';
import CatalogPage from './src/pages/CatalogPage.jsx';

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
        <Route path="our-process/implementation-framework" element={<ProcessImprovementImplementationFrameworkPage />} />
        <Route path="lss" element={<LSSAIPage />} />
        <Route path="lsssub1" element={<LSSSub1Page />} />
        <Route path="lsssub2" element={<LSSSub2Page />} />
        <Route path="solutions-process-intelligence" element={<SolutionsProcessIntelligencePage />} />
        <Route path="solutions-agentic-automation" element={<SolutionsAgenticAutomationPage />} />
        <Route path="solutions-capability" element={<SolutionsCapabilityPage />} />
        <Route path="process-intelligence" element={<ProcessIntelligenceMainPage />} />
        <Route path="agentic-automation" element={<AgenticAutomationMainPage />} />
        <Route path="capability-building" element={<CapabilityBuildingMainPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="industries-healthcare" element={<IndustriesHealthcarePage />} />
        <Route path="industries-healthcare-ai" element={<IndustriesHealthcareAIPage />} />
        <Route path="industries-healthcare-ehr" element={<IndustriesHealthcareEHRPage />} />
        <Route path="industries-financial" element={<FinancialMainPage />} />
        <Route path="industries-financial-banking" element={<BankingDigitalTransformationPage />} />
        <Route path="industries-financial-compliance" element={<FinancialComplianceAutomationPage />} />
        <Route path="industries-manufacturing" element={<ManufacturingMainPage />} />
        <Route path="industries-manufacturing-smart" element={<SmartManufacturingPage />} />
        <Route path="industries-manufacturing-lean" element={<LearnManufacturingPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="industries-devops" element={<DevOpsAutomationPage />} />
        <Route path="industries-cloud" element={<CloudMigrationPage />} />
        <Route path="additional-industries" element={<AdditionalIndustriesPage />} />
        <Route path="industries-energy" element={<EnergyUtilitiesPage />} />
        <Route path="industries-retail" element={<RetailDigitalTransformationPage />} />
        <Route path="training" element={<TrainingServicesPage />} />
        <Route path="industries-healthcare-training" element={<HealthcareTrainingPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="impact-metrics" element={<ImpactMetricsPage />} />
        <Route path="client-stories" element={<ClientStoriesPage />} />
        <Route path="transformation-journeys" element={<TransformationJourneysPage />} />
        <Route path="more" element={<MorePage />} />
        <Route path="partners" element={<PartnerPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="technology-stack" element={<TechnologyStackPage />} />
        <Route path="process-technology-integration" element={<ProcessTechnologyIntegrationPage />} />
        <Route path="enterprise-ai-stack" element={<EnterpriseAIStackPage />} />
        <Route path="outcomes-framework" element={<OutcomesFrameworkPage />} />
        <Route path="performance-measurement" element={<PerformanceMeasurementPage />} />
        <Route path="outcomes-roi-framework" element={<ROIFrameworkPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/database" element={<DatabasePage />} />
        <Route path="catalog/automation-ai" element={<AutomationAIPage />} />
        <Route path="catalog/engagement" element={<EngagementPage />} />
        <Route path="databaseskills" element={<DatabasePage />} />
        <Route path="automation" element={<AutomationAIPage />} />
        <Route path="engagement" element={<EngagementPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
