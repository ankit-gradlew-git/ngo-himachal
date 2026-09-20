import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn, Filter } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { galleryItems } from '../data/ngoData';

export default function Gallery({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'school', label: 'School Renovation' },
    { id: 'samshan', label: 'Samshan Ghat & Infrastructure' },
    { id: 'health', label: 'Health Camps' },
    { id: 'community', label: 'Youth & Community' },
    { id: 'training', label: 'Skill Training' },
    { id: 'awareness', label: 'Folk Media Shows' },
    { id: 'press', label: 'Press Cuttings' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => {
        if (activeCategory === 'school') {
          return item.category === 'renovation' && item.categoryLabel?.toLowerCase().includes('school');
        }
        if (activeCategory === 'samshan') {
          return item.category === 'renovation' && !item.categoryLabel?.toLowerCase().includes('school');
        }
        if (activeCategory === 'community') {
          return item.category === 'community' || item.category === 'premises';
        }
        return item.category === activeCategory;
      });

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Visual Archive"
          title="Field Photo Gallery"
          subtitle="A comprehensive visual documentation of Aarushi Gramin Sansthan's real on-ground activities, CSR school renovations, community cremation shelters, health camps, and training programs."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#16422e] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => onSelectImage(item, index, filteredItems)}
            >
              <div className="relative h-52 sm:h-56 bg-stone-100 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-stone-900 shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                {/* Badge */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#103424]/90 text-amber-200 shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-serif line-clamp-1 group-hover:text-[#16422e] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                  <span>Archive #{item.id}</span>
                  <span className="text-[#16422e] font-semibold">Click to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-xs text-stone-500">
          Showing {filteredItems.length} real photographs from Aarushi Gramin Sansthan field archives.
        </div>
      </div>
    </section>
  );
}
