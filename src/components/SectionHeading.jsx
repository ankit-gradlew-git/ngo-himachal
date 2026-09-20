import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light' // 'light' or 'dark'
}) {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 ${
          theme === 'dark'
            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
            : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-tight ${
        theme === 'dark' ? 'text-white' : 'text-stone-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
          theme === 'dark' ? 'text-stone-300' : 'text-stone-600'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`flex items-center gap-2 mt-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="h-0.5 w-12 bg-emerald-700 rounded-full"></span>
        <span className="h-1.5 w-1.5 bg-amber-600 rounded-full"></span>
        <span className="h-0.5 w-6 bg-emerald-700 rounded-full"></span>
      </div>
    </div>
  );
}
