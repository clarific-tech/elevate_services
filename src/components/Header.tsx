import { useEffect, useState } from 'react';
import Button from './ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Elevate Services"
            className="h-32 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary-light'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary-light'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary-light'
            }`}
          >
            Contact
          </button>
        </div>
        <Button
          onClick={() => scrollToSection('contact')}
          size="sm"
          className="hidden md:block"
        >
          Get in Touch
        </Button>
      </nav>
    </header>
  );
}
