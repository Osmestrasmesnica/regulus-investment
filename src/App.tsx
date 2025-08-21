import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../src/pages/HomePage'
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from './components/ui/toaster';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ContactPage from './pages/ContactPage';


export default function App() {
  return(
    <Router basename="/regulus-investment">
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/contact/confirmation" element={<ContactConfirmationPage />} /> */}
            {/* <Route path="/newsletter/confirm" element={<NewsletterConfirmPage />} /> */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage/>} />
            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </Router>
  );
}