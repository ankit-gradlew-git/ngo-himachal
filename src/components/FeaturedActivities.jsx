import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { featuredActivities } from '../data/ngoData';

export default function FeaturedActivities({ onOpenImage }) {
  return (
    <section id="activities" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Documented Programs"
          title="Featured Community Activities"
          subtitle="Direct visual evidence of our active community interventions, skill training workshops, and public awareness campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {featuredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with real photo */}
              <div
                className="relative h-52 sm:h-56 overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: act.image,
                  title: act.title,
                  caption: act.description
                })}
              >
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-semibold tracking-wide uppercase rounded-md bg-[#16422e] text-white shadow-xs">
                    {act.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-stone-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1">
                    Enlarge Photo <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 font-serif mb-2.5 group-hover:text-[#16422e] transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {act.description}
                  </p>
                  
                  {/* Points */}
                  <ul className="space-y-1.5 border-t border-stone-100 pt-3 text-xs text-stone-600">
                    {act.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#731320]">Documented Activity</span>
                  <button
                    type="button"
                    onClick={() => onOpenImage && onOpenImage({
                      src: act.image,
                      title: act.title,
                      caption: act.description
                    })}
                    className="text-[#16422e] hover:underline inline-flex items-center gap-0.5"
                  >
                    View Photo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
