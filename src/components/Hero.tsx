import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8B6F47] via-[#7D5A3F] to-[#6B4E3D] pt-16">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A0785D] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4A574] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
            Designs That<br />
            Make People<br />
            Stop & Look
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            AI-enhanced graphics | Branding | Posters | Flyers | Social Media Creatives
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-[#7D5A3F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A0785D] transition-all transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Hire Me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#7D5A3F] transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              View Portfolio
            </button>
          </div>
        </div>

        <div className="mt-16 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
