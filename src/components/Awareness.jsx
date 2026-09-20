import React from 'react';
import { Music, Radio, Shield, Users, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Awareness({ onOpenImage }) {
  const awarenessCards = [
    {
      title: 'Folk Media & Cultural Outreach',
      desc: 'Utilizing traditional Himachali folk dance, songs, harmonium, and dholak by Aarushi Kala Manch artists to communicate key social and public health messages in rural community halls.',
      image: '/images/awareness/folk-media-performance-1.jpg',
      badge: 'Aarushi Kala Manch'
    },
    {
      title: 'Disaster Management Awareness',
      desc: 'Equipping mountain communities and students with essential awareness on landslide preparedness, hill region safety, and emergency disaster response through grassroots street plays (nukkad natak).',
      image: '/images/awareness/folk-media-audience.jpg',
      badge: 'Community Resilience'
    },
    {
      title: 'HIV/AIDS & Health Education',
      desc: 'Demystifying health stigmas through cultural performance and targeted community discussions, emphasizing preventative care, testing, and mutual support across rural Solan.',
      image: '/images/awareness/folk-media-community-dance.jpg',
      badge: 'Public Health'
    },
    {
      title: 'Youth Festival & Awareness Rallies',
      desc: 'Organizing vibrant awareness rallies and youth festival gatherings where school students and young citizens advocate for social causes across Himachal hamlets.',
      image: '/images/hero/hero-youth-rally.jpg',
      badge: 'Youth Leadership'
    }
  ];

  return (
    <section id="awareness" className="py-16 sm:py-20 bg-[#F9F6F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Social Mobilization"
          title="Awareness in Action"
          subtitle="Mobilizing rural communities through traditional folk media, street plays (nukkad natak), youth rallies, and educational campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {awarenessCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onOpenImage && onOpenImage({
                src: card.image,
                title: card.title,
                caption: card.desc
              })}
            >
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded bg-[#731320] text-white shadow-xs">
                    {card.badge}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-serif mb-2 group-hover:text-[#16422e] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#16422e]">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
