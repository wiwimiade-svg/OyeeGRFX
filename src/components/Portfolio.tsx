import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Social Media', 'Wedding', 'Branding', 'Event Design', 'Marketing'];

const portfolioItems = [
  { id: 1, title: 'Brand Identity Design', category: 'Branding', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, title: 'Instagram Story Template', category: 'Social Media', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, title: 'Wedding Invitation Suite', category: 'Wedding', image: 'https://images.pexels.com/photos/265946/pexels-photo-265946.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, title: 'Marketing Flyer Design', category: 'Marketing', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, title: 'Event Poster', category: 'Event Design', image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, title: 'Social Media Campaign', category: 'Social Media', image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, title: 'Corporate Branding', category: 'Branding', image: 'https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, title: 'Wedding Signage', category: 'Wedding', image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 9, title: 'Product Launch Materials', category: 'Marketing', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#E8DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#7D5A3F] mb-4">
            Featured <span className="text-[#A0785D]">Work</span>
          </h2>
          <div className="w-24 h-1 bg-[#A0785D] mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-[#7D5A3F] text-white shadow-lg'
                    : 'bg-[#D4C5B9] text-[#7D5A3F] hover:bg-[#C4B5A9]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#D4C5B9] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#7D5A3F]/90 via-[#7D5A3F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
                <button className="bg-white text-[#7D5A3F] p-3 rounded-full hover:bg-[#E8DDD3] transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
