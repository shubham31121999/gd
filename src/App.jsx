import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import KeyValue from './components/KeyValue';
import Services from './components/Services';
import TrustBadge from './components/TrustBadge';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';


// Lazy Components
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ThankYouPage = lazy(() => import('./components/Thankyou'));

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <KeyValue />
      <Services />
      <TrustBadge />
      <Suspense fallback={<div className="py-10 text-center">Loading sections...</div>}>
        <Testimonials />
        <Gallery />
        <FAQSection />
      </Suspense>
      <CTASection />
      <Footer />
      <FloatingButtons />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading page...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
