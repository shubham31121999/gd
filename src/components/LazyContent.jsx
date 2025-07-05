import React, { lazy } from 'react';

const Services = lazy(() => import('./Services'));
const TrustBadge = lazy(() => import('./TrustBadge'));
const Testimonials = lazy(() => import('./Testimonials'));
const Gallery = lazy(() => import('./Gallery'));
const FAQSection = lazy(() => import('./FAQSection'));
const CTASection = lazy(() => import('./CTASection'));
const Footer = lazy(() => import('./Footer'));

export default function LazyContent() {
  return (
    <>
      <Services />
      <TrustBadge />
      <Testimonials />
      <Gallery />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
