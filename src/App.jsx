import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustStrip from './components/TrustStrip'
import CoursesSection from './components/CoursesSection'
import WhyMomentumSection from './components/WhyMomentumSection'
import EducatorSection from './components/EducatorSection'
import TeachingApproachSection from './components/TeachingApproachSection'
import FAQSection from './components/FAQSection'
import AdmissionsCTA from './components/AdmissionsCTA'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingContactActions from './components/FloatingContactActions'

function App() {
  return (
    <div className="min-h-screen bg-clean text-text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <CoursesSection />
        <WhyMomentumSection />
        <EducatorSection />
        <TeachingApproachSection />
        <FAQSection />
        <AdmissionsCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactActions />
    </div>
  )
}

export default App