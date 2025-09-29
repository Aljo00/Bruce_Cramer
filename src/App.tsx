import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AboutSection from './components/AboutSection';
import MethodSection from './components/MethodSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Inter',sans-serif]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <AboutSection />
        <MethodSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;