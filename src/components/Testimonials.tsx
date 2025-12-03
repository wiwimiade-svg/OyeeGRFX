import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Kehinde transformed our brand identity completely! The designs are professional, modern, and exactly what we needed to stand out in our market. Highly recommend!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Working with Oyee GRFX was a game-changer for our social media presence. The creatives are stunning and our engagement has tripled since we started using them.',
  },
  {
    id: 3,
    name: 'Aisha Mohammed',
    role: 'Event Planner',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'From wedding invitations to event posters, every design exceeded my expectations. Fast turnaround, creative solutions, and exceptional quality. A true professional!',
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Content Creator',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The AI-enhanced designs are on another level. Kehinde understands modern aesthetics and delivers work that makes my content stand out. Worth every penny!',
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'As a startup, we needed a strong visual identity on a budget. Oyee GRFX delivered premium quality work that helped us launch with confidence. Amazing experience!',
  },
  {
    id: 6,
    name: 'James Anderson',
    role: 'Restaurant Owner',
    image: 'https://images.pexels.com/photos/1300926/pexels-photo-1300926.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Our new menu designs and promotional materials are getting compliments daily. The attention to detail and creative vision is exactly what we were looking for.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#D4C5B9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#7D5A3F] mb-4">
            Client <span className="text-[#A0785D]">Love</span>
          </h2>
          <div className="w-24 h-1 bg-[#A0785D] mx-auto mb-6"></div>
          <p className="text-lg text-[#7D5A3F] max-w-2xl mx-auto">
            Don't just take my word for it — hear what clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#E8DDD3] rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 text-[#D4C5B9]" size={40} />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#D4C5B9]"
                />
                <div>
                  <h4 className="font-bold text-[#7D5A3F] text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-[#A0785D]">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#D4A574] text-[#D4A574]" />
                ))}
              </div>

              <p className="text-[#6B4E3D] leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
