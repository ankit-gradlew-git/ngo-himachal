import React from 'react';
import { Newspaper, Calendar, CheckCircle, ZoomIn, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { pressArticles } from '../data/ngoData';

export default function PressCoverage({ onOpenImage }) {
  return (
    <section id="press" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="In The News"
          title="Press & Community Coverage"
          subtitle="Documented press clippings highlighting Aarushi Kala Manch and Aarushi Gramin Sansthan's grassroots awareness programs in regional newspapers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {pressArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* News Clipping Image with Click to Zoom */}
                <div
                  className="relative h-64 bg-stone-100 overflow-hidden cursor-pointer group border-b border-stone-200"
                  onClick={() => onOpenImage && onOpenImage({
                    src: article.image,
                    title: `${article.paper} - ${article.date}`,
                    caption: `${article.headline}: ${article.summary}`
                  })}
                >
                  <img
                    src={article.image}
                    alt={article.headline}
                    className="w-full h-full object-contain p-2 bg-stone-50 group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-stone-900 text-xs font-bold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4 text-[#16422e]" />
                      Read Full Clipping
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 mb-2">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{article.paper}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 font-serif leading-snug mb-3">
                    {article.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs font-medium text-stone-600 flex items-center justify-between">
                <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Archive
                </span>
                <button
                  type="button"
                  onClick={() => onOpenImage && onOpenImage({
                    src: article.image,
                    title: `${article.paper} - ${article.date}`,
                    caption: `${article.headline}: ${article.summary}`
                  })}
                  className="text-xs font-bold text-[#16422e] hover:underline"
                >
                  View Large
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on official letterhead preservation */}
        <div className="mt-10 p-4 rounded-lg bg-white border border-stone-300 max-w-3xl mx-auto flex items-center gap-3 text-xs text-stone-600">
          <FileText className="w-5 h-5 text-[#731320] shrink-0" />
          <p>
            The original newspaper clippings are preserved on the official registered letterhead of <strong>Aarushi Gramin Sansthan</strong>, documenting Registration Number <strong>39/2003</strong> and registered contact records from Solan (H.P.).
          </p>
        </div>

      </div>
    </section>
  );
}
