import { Palette, Share2, Sparkles, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Create memorable brand identities that stand out. Logos, color palettes, and brand guidelines that define your visual presence.',
  },
  {
    icon: Share2,
    title: 'Social Media Creatives',
    description: 'Scroll-stopping social media content designed for engagement. Posts, stories, and banners optimized for every platform.',
  },
  {
    icon: Sparkles,
    title: 'AI-Enhanced Designs',
    description: 'Cutting-edge designs powered by AI technology. Faster turnaround with higher quality and innovative visual solutions.',
  },
  {
    icon: Megaphone,
    title: 'Business Marketing Assets',
    description: 'Professional marketing materials that drive results. Flyers, posters, brochures, and promotional content that converts.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#D4C5B9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">What I </span>
            <span className="text-[#7D5A3F]">Create</span>
          </h2>
          <div className="w-24 h-1 bg-[#A0785D] mx-auto mb-6"></div>
          <p className="text-lg text-[#7D5A3F] max-w-2xl mx-auto">
            Professional design services tailored to make your brand unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#E8DDD3] rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-[#D4C5B9] p-6 rounded-2xl group-hover:bg-[#A0785D] transition-colors duration-300">
                  <service.icon size={32} className="text-[#7D5A3F] group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#7D5A3F] mb-3 group-hover:text-[#A0785D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#6B4E3D] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
