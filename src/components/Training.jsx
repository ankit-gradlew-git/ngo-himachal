import React from 'react';
import { Award, Scissors, Check, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Training({ onOpenImage }) {
  return (
    <section id="training" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Vocational Empowerment"
          title="Skills That Create Opportunities"
          subtitle="Empowering women and rural youth through structured cutting and tailoring training courses and formal certification."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-10">
          
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Scissors className="w-3.5 h-3.5 text-amber-700" />
              Cutting & Tailoring Training Program
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif leading-snug">
              Practical Skill Development for Economic Self-Reliance
            </h3>

            <p className="text-base text-stone-700 leading-relaxed">
              As documented in our 2026 program records, Aarushi Gramin Sansthan organizes dedicated <strong>Cutting and Tailoring Training</strong> workshops. These vocational classes are specially tailored for rural women and youth, offering hands-on instruction in garment cutting, sewing, measurement, and tailoring.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                <div className="p-2 rounded bg-emerald-100 text-[#16422e] shrink-0">
                  <Scissors className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Hands-on Vocational Training</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Comprehensive practical training in tailoring and sewing techniques designed for self-employment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                <div className="p-2 rounded bg-amber-100 text-amber-800 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">2026 – Distribution of Certificates</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Official certificate distribution ceremony recognizing successful completion by women trainees.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-stone-500 italic">
                Verified from client program documentation and the 2026 Certificate Distribution photograph.
              </p>
            </div>
          </div>

          {/* Photo of 2026 Certificate Distribution */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
                <img
                  src="/images/training/certificate-distribution-2026.jpg"
                  alt="2026 Distribution of Certificates to cutting and tailoring trainees"
                  className="w-full h-80 sm:h-96 object-cover object-center cursor-pointer group-hover:scale-102 transition-transform duration-300"
                  onClick={() => onOpenImage && onOpenImage({
                    src: '/images/training/certificate-distribution-2026.jpg',
                    title: '2026 – Distribution of Certificates',
                    caption: 'Group photograph of women participants proudly holding their vocational cutting and tailoring completion certificates with the program coordinator.'
                  })}
                />
                
                <div className="p-5 bg-white border-t border-stone-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                        Verified Photograph
                      </span>
                      <h4 className="text-base font-bold text-stone-900 font-serif">
                        2026 – Distribution of Certificates
                      </h4>
                      <p className="text-xs text-stone-600 mt-1">
                        Successful graduates celebrating their completion of vocational tailoring training.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenImage && onOpenImage({
                        src: '/images/training/certificate-distribution-2026.jpg',
                        title: '2026 – Distribution of Certificates',
                        caption: 'Group photograph of women participants proudly holding their vocational cutting and tailoring completion certificates with the program coordinator.'
                      })}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#16422e] hover:bg-[#103424] rounded shadow-xs"
                    >
                      Enlarge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
