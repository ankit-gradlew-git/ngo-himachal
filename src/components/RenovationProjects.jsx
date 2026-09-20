import React, { useState } from 'react';
import { Building2, CheckCircle2, ZoomIn, Hammer, Sparkles, MapPin, HandHeart, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { renovationProjectsData } from '../data/ngoData';

export default function RenovationProjects({ onOpenImage }) {
  const [selectedProjectId, setSelectedProjectId] = useState('school-renovation');

  const currentProject = renovationProjectsData.find((p) => p.id === selectedProjectId) || renovationProjectsData[0];

  return (
    <section id="renovations" className="py-16 sm:py-20 bg-[#F6F3EC] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Community Infrastructure"
          title="School & Community Renovation Projects"
          subtitle="Documented on-ground infrastructure restoration by Aarushi Gramin Sansthan, including rural school facility upgrades backed by CSR initiatives and community crematorium (Samshan Ghat) shelters."
        />

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-12">
          {renovationProjectsData.map((project) => {
            const isSelected = project.id === selectedProjectId;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProjectId(project.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-[#16422e] text-white ring-2 ring-[#16422e] ring-offset-2'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                <Hammer className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-stone-500'}`} />
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition-all duration-300">
          {/* Top Banner Header */}
          <div className="bg-[#103424] text-white p-6 sm:p-8 border-b border-[#1b5e41]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-stone-900">
                <ShieldCheck className="w-3.5 h-3.5" />
                {currentProject.badge}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-stone-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {currentProject.location}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-bold font-serif text-white mt-1">
              {currentProject.title}
            </h3>
            <p className="text-sm sm:text-base text-emerald-200 mt-2 max-w-3xl leading-relaxed">
              {currentProject.subtitle}
            </p>

            {/* Partners Badge */}
            {currentProject.partners && currentProject.partners.length > 0 && (
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs text-stone-300 font-medium">CSR / Community Collaboration:</span>
                {currentProject.partners.map((partner, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-700 text-emerald-200"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Project Details & Highlights */}
          <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-stone-200">
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-4xl">
              {currentProject.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {currentProject.highlights.map((h, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-stone-900 font-serif">
                        {h.title}
                      </h5>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photographic Evidence Grid */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-stone-900 font-serif">
                  Documentary Photographic Evidence
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Click on any photograph to view high-resolution image and detailed field records.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                {currentProject.gallery.length} Verified Photos
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentProject.gallery.map((photo, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden border border-stone-200 shadow-xs hover:shadow-md hover:border-emerald-700 transition-all duration-300 cursor-pointer flex flex-col"
                  onClick={() => onOpenImage && onOpenImage({
                    src: photo.src,
                    title: photo.title,
                    caption: photo.caption,
                    categoryLabel: currentProject.title
                  })}
                >
                  <div className="relative h-48 bg-stone-100 overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 rounded-full bg-white/95 text-stone-900 shadow-md">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="text-xs font-bold text-stone-900 line-clamp-1 group-hover:text-[#16422e] transition-colors">
                        {photo.title}
                      </h5>
                      <p className="text-[11px] text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                        {photo.caption}
                      </p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
                      <span className="text-[#16422e] font-semibold">Enlarge photo</span>
                      <span>Verified archive</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
