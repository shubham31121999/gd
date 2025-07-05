import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import KeyValue from './components/KeyValue';
import FloatingButtons from './components/FloatingButtons';

import './fonts.css';

// Lazy-loaded sections
const LazySections = lazy(() => import('./components/LazyContent'));
const ThankYouPage = lazy(() => import('./components/Thankyou'));

function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <KeyValue />

      {/* Below-the-fold content */}
      <Suspense fallback={<div className="py-10 text-center">Loading sections...</div>}>
        <LazySections />
      </Suspense>

      <FloatingButtons />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/thankyou"
        element={
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <ThankYouPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
