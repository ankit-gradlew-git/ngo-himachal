import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({
  isOpen,
  activeImage,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalImages
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !activeImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xs p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Lightbox Content Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#1a202c] rounded-xl overflow-hidden shadow-2xl border border-stone-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="w-full flex items-center justify-between px-5 py-3.5 bg-stone-900 border-b border-stone-800 text-stone-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-stone-800 px-2.5 py-1 rounded text-amber-400 font-bold">
              {currentIndex + 1} / {totalImages}
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white font-serif truncate max-w-md">
              {activeImage.title}
            </h4>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with Nav Buttons */}
        <div className="relative w-full flex-1 flex items-center justify-center p-2 sm:p-4 bg-black/40 overflow-hidden min-h-[300px] max-h-[68vh]">
          {/* Previous Button */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 sm:left-5 z-10 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 shadow-lg transition-transform active:scale-95"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image */}
          <img
            src={activeImage.src}
            alt={activeImage.title || activeImage.caption}
            className="max-h-[64vh] max-w-full object-contain rounded shadow-lg"
          />

          {/* Next Button */}
          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 sm:right-5 z-10 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 shadow-lg transition-transform active:scale-95"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption */}
        <div className="w-full p-4 sm:p-5 bg-stone-900 border-t border-stone-800 text-left">
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-sans">
            {activeImage.caption}
          </p>
          {activeImage.categoryLabel && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                {activeImage.categoryLabel}
              </span>
              <span className="text-xs text-stone-400">
                Aarushi Gramin Sansthan Photographic Archive
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
