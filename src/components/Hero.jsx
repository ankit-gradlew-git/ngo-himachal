import React from 'react';
import { ArrowRight, Image as ImageIcon, MapPin, CheckCircle2, HeartHandshake } from 'lucide-react';
import { ngoInfo } from '../data/ngoData';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#F4EFE6] via-[#FAF7F2] to-[#FDFBF7] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200 overflow-hidden">
      {/* Decorative mountain-inspired subtle background pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#1b5e41_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            {/* Credibility Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-[#103424] text-xs sm:text-sm font-semibold mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16422e] animate-pulse"></span>
              <span>Registered Grassroots NGO • Reg. No. {ngoInfo.regNo}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-stone-900 tracking-tight font-serif leading-tight sm:leading-[1.18]">
              Serving Communities. <br />
              <span className="text-[#16422e]">Creating Awareness.</span> <br />
              Building a Better Tomorrow.
            </h1>

            {/* Subheading explicitly identifying organization and branch */}
            <div className="mt-5 p-4 rounded-lg bg-stone-100/80 border-l-4 border-[#16422e] border-t border-r border-b border-stone-200">
              <p className="text-xl sm:text-2xl font-bold text-stone-800 font-serif">
                Aarushi Gramin Sansthan
              </p>
              <p className="text-sm sm:text-base font-medium text-emerald-900 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Rajgarh, Distt. Sirmour, Himachal Pradesh</span>
              </p>
            </div>

            {/* Factual Intro derived strictly from client evidence */}
            <p className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
              An established community welfare and public awareness society actively operating across rural and peri-urban Himachal Pradesh. Conducting targeted health camps, youth awareness rallies, vocational training for women, and folk media outreach programs.
            </p>

            {/* Key Verified Pillars */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#16422e] shrink-0" />
                <span>Free Health Checkup Camps</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#16422e] shrink-0" />
                <span>Cutting & Tailoring Training</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-[#16422e] shrink-0" />
                <span>Folk Media Awareness</span>
              </div>
            </div>

            {/* Solid CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#activities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-[#16422e] hover:bg-[#103424] active:bg-[#0a1f16] rounded-md shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-stone-800 bg-white hover:bg-stone-50 border-2 border-stone-300 hover:border-stone-400 active:bg-stone-100 rounded-md shadow-xs transition-all"
              >
                <ImageIcon className="w-4 h-4 text-emerald-800" />
                <span>View Photo Gallery</span>
              </a>
            </div>
          </div>

          {/* Right Image Column with real NGO photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Background accent frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#16422e] to-amber-700 opacity-20 blur-xs"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                <img
                  src="/images/hero/hero-youth-rally.jpg"
                  alt="School children and awareness coordinator against Himachal Pradesh mountain backdrop"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-top hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />

                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 sm:p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-600/90 text-amber-50 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Community & Youth Awareness
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-stone-100 leading-snug">
                    School children and awareness event against the Himachal landscape
                  </p>
                  <p className="text-xs text-stone-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Solan District, Himachal Pradesh
                  </p>
                </div>
              </div>

              {/* Genuine floating badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#731320] text-white p-3.5 rounded-lg shadow-xl border-2 border-white items-center gap-3">
                <div className="p-2 rounded bg-white/15">
                  <HeartHandshake className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-200 uppercase tracking-wide">
                    Grassroots Presence
                  </div>
                  <div className="text-sm font-bold">
                    Rajgarh, Himachal Pradesh
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
