import React from 'react';
import { MapPin, Phone, Mail, Shield, Building, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ngoInfo } from '../data/ngoData';

export default function CommunityPresence({ onOpenImage }) {
  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Headquarters & Field Presence"
          title="Our Presence in Solan, Himachal Pradesh"
          subtitle="Anchored in the Himalayan foothills of Solan, actively coordinating community health and social awareness initiatives."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-10">
          
          {/* Signboard & Team Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <div
                className="relative h-80 sm:h-96 overflow-hidden cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: '/images/premises/ngo-office-signboard.jpg',
                  title: 'Aarushi Gramin Sansthan Office Signboard & Field Team',
                  caption: 'Official organization signboard and team members.'
                })}
              >
                <img
                  src="/images/premises/ngo-office-signboard.jpg"
                  alt="Aarushi Gramin Sansthan signboard and team"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-stone-900 text-xs font-bold px-3 py-1.5 rounded shadow">
                    View Full Image
                  </span>
                </div>
              </div>
              <div className="p-4 bg-stone-50 border-t border-stone-200">
                <p className="text-xs text-stone-700 font-medium">
                  <strong>Photo Record:</strong> Organization premises with team members and official board documenting the Targeted Intervention Programme.
                </p>
              </div>
            </div>
          </div>

          {/* Location & Program Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs">
              <h3 className="text-xl font-bold text-stone-900 font-serif mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#16422e]" />
                Office & Organization Details
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-800">Office Address:</span>
                    <p className="text-stone-600 mt-0.5">
                      {ngoInfo.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-800">Registration Details:</span>
                    <p className="text-stone-600 mt-0.5">
                      Registration No. {ngoInfo.regNo} • Registered in Himachal Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-800">Contact Numbers:</span>
                    <p className="text-stone-600 mt-0.5">
                      {ngoInfo.phones.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-800">Official Email:</span>
                    <p className="text-stone-600 mt-0.5">
                      {ngoInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200">
              <h4 className="text-sm font-bold text-[#103424] font-serif mb-2">
                Targeted Intervention & Integrated Health Support
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Our Solan branch is actively engaged in targeted public health interventions sponsored in collaboration with the <strong>HP State AIDS Control Society</strong> and <strong>National AIDS Control Organisation (NACO)</strong>, providing preventative healthcare services and health education across high-priority community groups.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
