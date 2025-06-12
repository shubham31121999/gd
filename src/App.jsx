import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadge from './components/TrustBadge'
import KeyValue from './components/KeyValue'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Banner from './components/Banner'
import FloatingButtons from './components/FloatingButtons';

import Gallery from './components/Gallery'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      
      <KeyValue />
      <Services />
      <TrustBadge />
      {/* <WhyChoose /> */}
      <Testimonials />
      <Gallery />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App

