import { Lightbulb, Zap, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#E8DDD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574] via-[#C9997A] to-[#B88B70] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-[#D4A574] via-[#C9997A] to-[#B88B70] rounded-3xl overflow-hidden p-8">
                <div className="w-full aspect-square rounded-full overflow-hidden bg-white/20 backdrop-blur-sm">
                  <img
                    src="https://res.cloudinary.com/dtd4ehd1s/image/upload/v1764802076/WhatsApp_Image_2025-12-03_at_23.42.55_cn4umy.jpg"
                    alt="Kehinde"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl font-bold text-[#7D5A3F] mb-4">
              Meet <span className="text-[#A0785D]">Kehinde</span>
            </h2>
            <div className="w-24 h-1 bg-[#A0785D] mb-8"></div>

            <div className="space-y-6 text-[#6B4E3D] leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold">Pharmacist by profession, designer by passion,</span> and AI innovator at heart. I bring a unique blend of analytical thinking and creative problem-solving to every project.
              </p>

              <p className="text-lg">
                With <span className="font-bold text-[#7D5A3F]">Oyee GRFX</span>, I specialize in creating bold, cinematic designs that don't just look good—they <span className="italic font-semibold">convert</span>. Every poster, brand identity, and social media creative is crafted with attention to detail and powered by cutting-edge AI technology.
              </p>

              <p className="text-lg">
                I believe great design should make people stop scrolling and start engaging. Whether you're a business, creator, or personal brand, I'm here to bring your vision to life with <span className="font-semibold text-[#A0785D]">speed, quality, and creativity</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-[#D4C5B9] px-5 py-3 rounded-full">
                <Lightbulb size={20} className="text-[#7D5A3F]" />
                <span className="font-semibold text-[#7D5A3F]">Creative Thinker</span>
              </div>
              <div className="flex items-center gap-2 bg-[#D4C5B9] px-5 py-3 rounded-full">
                <Zap size={20} className="text-[#7D5A3F]" />
                <span className="font-semibold text-[#7D5A3F]">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-[#D4C5B9] px-5 py-3 rounded-full">
                <Clock size={20} className="text-[#7D5A3F]" />
                <span className="font-semibold text-[#7D5A3F]">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
