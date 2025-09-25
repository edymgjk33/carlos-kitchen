import heroImage from '@/assets/hero-catering.jpg';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium catering equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-premium-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-premium">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 fade-in-up text-white font-bold">
            Premium Catering Equipment for Professionals
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto fade-in-up">
            Supplying the UK with reliable, modern, and high-quality catering solutions
          </p>
          <button 
            onClick={scrollToProducts}
            className="btn-premium-inverted fade-in-up"
          >
            Explore Products
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;