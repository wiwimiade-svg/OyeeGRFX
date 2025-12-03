import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E8DDD3]/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#7D5A3F]">
              Oyee<span className="text-[#A0785D]">GRFX</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-[#7D5A3F] text-white px-6 py-2 rounded-full hover:bg-[#A0785D] transition-all transform hover:scale-105">
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#7D5A3F] hover:text-[#A0785D] transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#E8DDD3] border-t border-[#D4C5B9]">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium py-2">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium py-2">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-[#7D5A3F] hover:text-[#A0785D] transition-colors font-medium py-2">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="w-full bg-[#7D5A3F] text-white px-6 py-3 rounded-full hover:bg-[#A0785D] transition-all mt-2">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
