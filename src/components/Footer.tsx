import { Mail, Phone, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#7D5A3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Oyee<span className="text-[#D4A574]">GRFX</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating bold, cinematic designs that make people stop scrolling and start engaging.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4A574] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4A574] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D4A574] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#D4A574] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#D4A574] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#D4A574] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-[#D4A574] transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@oyeegrfx.com"
                className="flex items-center gap-3 text-white/80 hover:text-[#D4A574] transition-colors"
              >
                <Mail size={20} />
                <span>contact@oyeegrfx.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/80 hover:text-[#D4A574] transition-colors"
              >
                <Phone size={20} />
                <span>+123 456 7890</span>
              </a>
            </div>

            <button className="mt-6 bg-[#D4A574] text-[#7D5A3F] px-6 py-3 rounded-full font-semibold hover:bg-[#E8DDD3] transition-all transform hover:scale-105">
              Start a Project
            </button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="fill-red-400 text-red-400" /> by OyeeGRFX © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
