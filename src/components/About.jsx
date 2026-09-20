import React from 'react';
import { Building2, FileCheck, MapPin, Users2, Sparkles, PhoneCall, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ngoInfo } from '../data/ngoData';

export default function About({ onOpenImage }) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Organization Profile"
          title="About Aarushi Gramin Sansthan"
          subtitle="Documented grassroots welfare, public health campaigns, and community empowerment in Himachal Pradesh."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">
          
          {/* Real Photo of NGO Premises & Signboard */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="rounded-xl overflow-hidden shadow-lg border border-stone-200 bg-white">
                <img
                  src="/images/premises/ngo-office-signboard.jpg"
                  alt="Aarushi Gramin Sansthan Branch Solan office signboard and team members"
                  className="w-full h-80 sm:h-96 object-cover object-center cursor-pointer group-hover:scale-102 transition-transform duration-300"
                  onClick={() => onOpenImage && onOpenImage({
                    src: '/images/premises/ngo-office-signboard.jpg',
                    title: 'Aarushi Gramin Sansthan Office Premises',
                    caption: 'Official premises and signboard with Aarushi Gramin Sansthan team members.'
                  })}
                />
                <div className="p-4 bg-stone-50 border-t border-stone-200">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 font-serif">
                        Aarushi Gramin Sansthan • Office Premises
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">
                        Aarushi Gramin Sansthan office and team members. Visible reference to Targeted Intervention Programme sponsored in association with state health initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={() => onOpenImage && onOpenImage({
                    src: '/images/premises/ngo-office-signboard.jpg',
                    title: 'Aarushi Gramin Sansthan Office Premises',
                    caption: 'Official premises and signboard with Aarushi Gramin Sansthan team members.'
                  })}
                  className="text-xs font-semibold text-[#16422e] hover:underline inline-flex items-center gap-1"
                >
                  Click image to enlarge official premises photograph
                </button>
              </div>
            </div>
          </div>

          {/* Factual Narrative derived strictly from verified evidence */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="border-l-4 border-[#731320] pl-4 py-1">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                A Grassroots Organization Rooted in Himachal Pradesh
              </h3>
              <p className="text-sm font-semibold text-emerald-800 mt-0.5">
                Registration No. {ngoInfo.regNo}
              </p>
            </div>

            <p className="text-base text-stone-700 leading-relaxed">
              Based on official documentation, photo records, and public press archives, <strong>Aarushi Gramin Sansthan</strong> is a registered society operating from its office Near BDO Office, Habban road, Rajgarh, Distt. Sirmour, Himachal Pradesh.
            </p>

            <p className="text-base text-stone-700 leading-relaxed">
              The organization’s active field programs demonstrate dedicated involvement across multiple humanitarian and community welfare domains:
            </p>

            {/* List of Verified Activities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
                <FileCheck className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-800">Free Health Checkup Camps</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Integrated health campaigns offering free screening for Hepatitis A, B, C, blood sugar, and BP.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
                <Building2 className="w-5 h-5 text-[#731320] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-800">School Renovation (CSR)</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Classroom repair, painting, and JCB leveling under CSR with Sun Pharma & Toppan Speciality Films.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
                <Sparkles className="w-5 h-5 text-[#731320] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-800">Folk Media & Street Theater</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Aarushi Kala Manch performances spreading awareness on disaster management and HIV/AIDS.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
                <Users2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-800">Skill Training & Certificates</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Vocational cutting and tailoring training for women, with certificate distribution events.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
                <Building2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-800">Samshan Ghat Shed & Paving</h4>
                  <p className="text-xs text-stone-600 mt-0.5">All-weather blue tin roof shelter, brick seating, and interlock paver courtyard.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
                <Users2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-800">Community Outreach & Greening</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Tree plantation drives, drip irrigation, youth rallies, and girl child support.</p>
                </div>
              </div>
            </div>

            {/* Verified Location Box */}
            <div className="p-4 rounded-lg bg-emerald-50/80 border border-emerald-200 text-stone-800 text-xs sm:text-sm">
              <div className="font-bold text-[#103424] flex items-center gap-1.5 mb-1 font-serif">
                <MapPin className="w-4 h-4 text-amber-600" />
                Verified Office Address:
              </div>
              <p className="text-stone-700">
                {ngoInfo.fullAddress}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-stone-600 font-medium">
                <span className="flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-[#16422e]" />
                  Mob: {ngoInfo.primaryPhone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#16422e]" />
                  Email: {ngoInfo.email}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
