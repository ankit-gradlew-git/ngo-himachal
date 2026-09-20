import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  FileText,
  Download,
  ExternalLink,
  Search,
  CheckCircle2,
  Clock,
  Building2,
  MapPin,
  FileCheck,
  AlertCircle,
  ArrowLeft,
  Info
} from 'lucide-react';
import { csrDocuments, additionalRequirements, csrOrganizationInfo } from '../data/csrDocuments';

export default function CSRVerification({ onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'available' | 'unavailable'

  // Dynamic statistics calculated from data array
  const totalCount = csrDocuments.length;
  const availableCount = useMemo(() => {
    return csrDocuments.filter((doc) => doc.available).length;
  }, []);
  const unavailableCount = totalCount - availableCount;

  // Filter & search logic
  const filteredDocuments = useMemo(() => {
    return csrDocuments.filter((doc) => {
      // Filter by availability
      if (activeFilter === 'available' && !doc.available) return false;
      if (activeFilter === 'unavailable' && doc.available) return false;

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = doc.title.toLowerCase().includes(query);
        const matchesDesc = doc.description.toLowerCase().includes(query);
        const matchesSerial = doc.serial.includes(query);
        return matchesTitle || matchesDesc || matchesSerial;
      }
      return true;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 selection:bg-[#0f2438] selection:text-white">
      {/* Top Breadcrumb / Return Bar */}
      <div className="bg-[#0f1d2e] text-stone-300 text-xs sm:text-sm py-2.5 px-4 border-b border-[#1c324a]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-stone-300 hover:text-amber-300 font-medium transition-colors cursor-pointer py-1"
            aria-label="Return to Main Website"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Organization Home</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official NGO Verification Portal</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* HEADER SECTION */}
        <header className="mb-10 sm:mb-12">
          <div className="text-center max-w-3xl mx-auto">
            {/* Verification Shield Icon & Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0f2438]/10 text-[#0f2438] border border-[#0f2438]/20 mb-4 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Document Checklist &amp; Verification</span>
            </div>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1d2e] font-serif tracking-tight leading-tight">
              CSR Document Verification
            </h1>

            {/* Subtitle / Supporting text */}
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
              Access the organization’s documentation for donation and grant verification. Available documents can be viewed or downloaded individually.
            </p>

            {/* Decorative divider line */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="h-0.5 w-12 bg-[#0f2438] rounded-full"></span>
              <span className="h-1.5 w-1.5 bg-amber-600 rounded-full"></span>
              <span className="h-0.5 w-6 bg-[#0f2438] rounded-full"></span>
            </div>
          </div>

          {/* Organization Information Card */}
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-xl p-5 sm:p-6 border border-stone-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-lg bg-[#0f2438] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Building2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-stone-900 font-serif leading-snug">
                    {csrOrganizationInfo.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{csrOrganizationInfo.location}</span>
                  </p>
                </div>
              </div>

              <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-100 flex sm:flex-col items-center sm:items-end justify-between">
                <span className="text-xs text-stone-500 font-medium">Registration Status</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-semibold border border-stone-200 mt-1">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {csrOrganizationInfo.registration}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Subtle Horizontal Divider */}
        <div className="border-t border-stone-200/80 mb-10"></div>

        {/* CONTROLS & SUMMARY AREA */}
        <div className="mb-8 space-y-5">
          {/* Summary counters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-xs">
            
            {/* Title & dynamic calculation stats */}
            <div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0f2438]" />
                <h2 className="text-lg font-bold text-stone-900 font-serif">
                  {totalCount} Verification Documents
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                Official 16-point compliance &amp; governance checklist
              </p>
            </div>

            {/* Badges calculating available vs unavailable */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{availableCount} Available</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-300">
                <Clock className="w-3.5 h-3.5 text-stone-500" />
                <span>{unavailableCount} Not Available</span>
              </span>
            </div>
          </div>

          {/* Search and Filters row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0f2438] focus:border-transparent transition-all shadow-xs"
                aria-label="Search documents by title or description"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-stone-200/70 p-1 rounded-lg self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All ({totalCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('available')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === 'available'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Available ({availableCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('unavailable')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === 'unavailable'
                    ? 'bg-stone-800 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Not Available ({unavailableCount})
              </button>
            </div>
          </div>
        </div>

        {/* MAIN DOCUMENT SECTION: 16 CHECKLIST CARDS */}
        {filteredDocuments.length === 0 ? (
          <div className="bg-white rounded-xl border border-stone-200 p-12 text-center my-8">
            <AlertCircle className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800 font-serif">
              No matching documents found
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
              No documents matched your search "{searchQuery}" with the current filter selection.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#0f2438] hover:bg-[#163550] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {filteredDocuments.map((doc) => {
              const isAvailable = Boolean(doc.available);

              return (
                <article
                  key={doc.id}
                  className={`relative flex flex-col justify-between rounded-xl p-5 sm:p-6 transition-all duration-200 border ${
                    isAvailable
                      ? 'bg-white border-emerald-200 hover:border-emerald-300 hover:shadow-md'
                      : 'bg-white/80 border-stone-200/90 shadow-2xs hover:border-stone-300'
                  }`}
                >
                  <div>
                    {/* Top Row: Serial Number & Status Badge */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      {/* Serial Number */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm tracking-tight ${
                            isAvailable
                              ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                              : 'bg-stone-100 text-stone-700 border border-stone-200'
                          }`}
                        >
                          {doc.serial}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                          Requirement #{doc.id}
                        </span>
                      </div>

                      {/* Status Badge */}
                      {isAvailable ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Available</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          <span>Not Available</span>
                        </span>
                      )}
                    </div>

                    {/* Document Title */}
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 font-serif leading-snug">
                      {doc.title}
                    </h3>

                    {/* Short Description */}
                    {doc.description && (
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {doc.description}
                      </p>
                    )}
                  </div>

                  {/* Actions / Status Footer */}
                  <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                    {isAvailable ? (
                      <>
                        <div className="flex items-center gap-1.5 text-xs text-stone-500">
                          <FileText className="w-4 h-4 text-emerald-600" />
                          <span className="font-mono text-[11px] truncate max-w-[150px] sm:max-w-[200px]">
                            {doc.fileName}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#0f2438] hover:bg-[#163550] transition-colors shadow-xs"
                            aria-label={`View PDF for ${doc.title}`}
                          >
                            <span>View PDF</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={doc.file}
                            download={doc.fileName}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors"
                            aria-label={`Download PDF for ${doc.title}`}
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Download</span>
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-1.5 text-xs text-stone-400">
                          <FileText className="w-4 h-4 text-stone-400" />
                          <span className="italic">Document awaiting upload / internal verification</span>
                        </div>

                        {/* Visually consistent disabled status */}
                        <div
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed select-none"
                          aria-disabled="true"
                          title="This document is not currently available for public download"
                        >
                          <span>Not Available</span>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* ADDITIONAL REQUIREMENT (SEPARATE FROM 16 CHECKLIST ITEMS) */}
        <section
          aria-labelledby="additional-req-heading"
          className="mt-10 bg-amber-50/70 border border-amber-200/90 rounded-xl p-5 sm:p-6 shadow-xs"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-2.5 py-0.5 rounded mb-1.5">
                Special Prerequisite
              </div>
              <h3 id="additional-req-heading" className="text-base font-bold text-amber-950 font-serif">
                {additionalRequirements.title}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-amber-900 font-medium leading-relaxed">
                "{additionalRequirements.text}"
              </p>
              <p className="mt-2 text-xs text-amber-800">
                Note: This Aadhaar credential is an operational verification prerequisite and is intentionally maintained separately from the 16 institutional statutory documents.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENT VERIFICATION NOTICE */}
        <footer className="mt-8 bg-white rounded-xl p-5 sm:p-6 border border-stone-200 text-center shadow-xs">
          <h4 className="text-sm font-bold text-stone-900 font-serif tracking-wide uppercase">
            Document Verification Notice
          </h4>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
            These documents are provided for verification and reference purposes. Availability is indicated for each document above.
          </p>
          <p className="mt-3 text-[11px] text-stone-400">
            For further validation or donor inquiries, contact Aarushi Gramin Sansthan at{' '}
            <a href={`mailto:${csrOrganizationInfo.email}`} className="text-[#0f2438] underline font-medium">
              {csrOrganizationInfo.email}
            </a>{' '}
            or call{' '}
            <a href={`tel:${csrOrganizationInfo.phone}`} className="text-[#0f2438] underline font-medium">
              +91 {csrOrganizationInfo.phone}
            </a>.
          </p>
        </footer>

      </div>
    </div>
  );
}
