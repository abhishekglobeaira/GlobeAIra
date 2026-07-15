import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CustomSoftwarePage from './pages/CustomSoftwarePage';
import AIAutomationPage from './pages/AIAutomationPage';
import SaaSProductPage from './pages/SaaSProductPage';
import C2HDRMPage from './pages/C2HDRMPage';
import RealEstateBIMPage from './pages/RealEstateBIMPage';
import ManufacturingPage from './pages/ManufacturingPage';
import GamingPage from './pages/GamingPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />
          <Route path="/services/saas-product" element={<SaaSProductPage />} />
          <Route path="/services/c2h-drm" element={<C2HDRMPage />} />
          <Route path="/services/real-estate-bim" element={<RealEstateBIMPage />} />
          <Route path="/services/manufacturing" element={<ManufacturingPage />} />
          <Route path="/services/gaming" element={<GamingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareerPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
