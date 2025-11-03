import Button from './ui/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Elevate your home,
          <br />
          <span className="text-primary">Elevate your life.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          From plumbing and painting to garden care and pest control, Elevate Services offers
          reliable, licensed, and insured handyman solutions across all areas of home maintenance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg"
          >
            Get in Touch
          </Button>
          <Button
            onClick={() => scrollToSection('services')}
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg"
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
