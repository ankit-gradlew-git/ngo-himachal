import React from 'react';
import { Activity, ShieldAlert, Stethoscope, CheckCircle, Info, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { healthScreenings } from '../data/ngoData';

export default function HealthCamp({ onOpenImage }) {
  const healthPhotos = [
    {
      src: '/images/health/health-camp-screening-action.jpg',
      title: 'Active Diagnostic Blood Screening',
      caption: 'Trained medical personnel conducting rapid blood glucose and hepatitis screening tests for community residents in Solan.'
    },
    {
      src: '/images/health/health-camp-gathering.jpg',
      title: 'Community Health Awareness Session',
      caption: 'Community gathering listening attentively to preventative healthcare and disease awareness advice by visiting doctors.'
    },
    {
      src: '/images/health/health-camp-team-banner.jpg',
      title: 'Integrated Health Campaign (IHC) Camp Inauguration',
      caption: 'Medical team, doctor volunteers, and NGO officials alongside the official Integrated Health Campaign banner in Solan.'
    }
  ];

  return (
    <section id="health" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Public Health Initiative"
          title="Health & Community Outreach"
          subtitle="Documented free health checkup camps providing essential diagnostic screenings and medical consultations to rural communities in Himachal Pradesh."
        />

        {/* Camp Context Banner */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-50 border border-rose-200 text-[#731320] text-xs font-bold uppercase tracking-wider mb-3">
                <Activity className="w-3.5 h-3.5" />
                Integrated Health Campaign (IHC) & Targeted Intervention
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
                Free Diagnostic Screening & Doctor Consultation Camps
              </h3>
              <p className="mt-3 text-stone-700 text-sm sm:text-base leading-relaxed">
                As documented in our photographic records and campaign standees, Aarushi Gramin Sansthan conducts free community health checkup camps (निःशुल्क स्वास्थ्य जाँच शिविर). These camps bring diagnostic facilities directly to rural residents, drivers, migrant workers, and families in the Solan region.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#16422e]">
                <span className="bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
                  Targeted Intervention Project (TIP) Solan
                </span>
                <span className="bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
                  Free Medical Counseling
                </span>
                <span className="bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
                  Certified Diagnostic Kits
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-50 rounded-lg p-5 border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 font-serif flex items-center gap-1.5 mb-2.5">
                <Stethoscope className="w-4 h-4 text-[#16422e]" />
                In Association With:
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>HP State AIDS Control Society</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>National AIDS Control Organisation (NACO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Health & Family Welfare Dept, Himachal Pradesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Screenings Grid */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              Diagnostic Screenings Offered at Camps
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Screening services documented on official health camp banners and materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthScreenings.map((screening, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-t-4 border-t-[#16422e] border-x border-b border-stone-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#16422e] flex items-center justify-center text-xs font-bold font-mono">
                    {idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-stone-900 font-serif">
                    {screening.name}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-9">
                  {screening.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Photographs Grid of Health Camps */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-serif">
                Photographic Documentation: Health Camps
              </h3>
              <p className="text-xs text-stone-600">
                Visual records from our community medical camps and screening drives in Solan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthPhotos.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all cursor-pointer"
                onClick={() => onOpenImage && onOpenImage(item)}
              >
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-bold text-stone-900 bg-white px-3 py-1 rounded shadow">
                      View Full Size
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-stone-900 font-serif mb-1 group-hover:text-[#16422e]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factual Disclaimer */}
        <div className="mt-10 p-4 rounded-lg bg-stone-100 border border-stone-300 flex items-start gap-3 text-xs text-stone-600">
          <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <p>
            <strong>Public Information Note:</strong> All health camp activities and screenings depicted are organized as community wellness and diagnostic screening drives in accordance with state health guidelines and public awareness initiatives. No medical advice is provided through this website.
          </p>
        </div>

      </div>
    </section>
  );
}
