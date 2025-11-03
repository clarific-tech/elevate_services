import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import QuoteForm from './components/QuoteForm';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <QuoteForm />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;