import React from 'react';
import { HeartPulse, Megaphone, Users, Scissors, ShieldCheck, Sparkles, Compass, Building, Trees } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { areasOfWork } from '../data/ngoData';

const iconMap = {
  HeartPulse: HeartPulse,
  Building: Building,
  Trees: Trees,
  Megaphone: Megaphone,
  Users: Users,
  Scissors: Scissors,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Compass: Compass,
};

export default function AreasOfWork() {
  return (
    <section id="initiatives" className="py-16 sm:py-20 bg-[#F9F6F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Focus"
          title="Areas of Work & Initiatives"
          subtitle="Key community welfare initiatives evidenced through our active on-ground programs in Himachal Pradesh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {areasOfWork.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Compass;
            return (
              <div
                key={area.id}
                className="bg-white rounded-lg p-6 border border-stone-200 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-emerald-50 border border-emerald-200 text-[#16422e] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-stone-600 font-mono">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-[#16422e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                  <span>Active Field Initiative</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
