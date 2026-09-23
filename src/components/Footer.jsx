import React from 'react';
import { MapPin, Phone, Mail, Shield, Heart } from 'lucide-react';
import { ngoInfo } from '../data/ngoData';

export default function Footer({ onNavigate }) {
  const handleAnchorClick = (e, anchor) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/', anchor);
    }
  };

  const handleCSRClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/csr-verification');
    } else {
      window.location.href = '/csr-verification';
    }
  };

  return (
    <footer className="bg-[#103424] text-stone-300 pt-14 pb-8 border-t-4 border-[#731320]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b5e41]">
          
          {/* Col 1: Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white text-[#103424] flex items-center justify-center font-bold font-serif text-lg">
                AG
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif tracking-tight">
                  AARUSHI GRAMIN SANSTHAN
                </h3>
                <p className="text-xs text-emerald-300 font-medium">
                  Rajgarh, Distt. Sirmour, Himachal Pradesh
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-md">
              A grassroots community welfare and social awareness organization registered in Himachal Pradesh (Registration No. {ngoInfo.regNo}). Dedicated to community health screening camps, women vocational training, youth engagement, and public welfare outreach.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#16422e] border border-[#1b5e41] text-xs text-amber-300">
              <Shield className="w-3.5 h-3.5" />
              <span>Registered Society No.: {ngoInfo.regNo}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif mb-4 pb-1 border-b border-[#1b5e41] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" onClick={(e) => handleAnchorClick(e, 'hero')} className="hover:text-amber-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleAnchorClick(e, 'about')} className="hover:text-amber-300 transition-colors">About Aarushi Gramin Sansthan</a>
              </li>
              <li>
                <a href="#initiatives" onClick={(e) => handleAnchorClick(e, 'initiatives')} className="hover:text-amber-300 transition-colors">Areas of Work</a>
              </li>
              <li>
                <a href="#activities" onClick={(e) => handleAnchorClick(e, 'activities')} className="hover:text-amber-300 transition-colors">Documented Activities</a>
              </li>
              <li>
                <a href="#health" onClick={(e) => handleAnchorClick(e, 'health')} className="hover:text-amber-300 transition-colors">Health & Checkup Camps</a>
              </li>
              <li>
                <a href="#training" onClick={(e) => handleAnchorClick(e, 'training')} className="hover:text-amber-300 transition-colors">Cutting & Tailoring Training</a>
              </li>
              <li>
                <a href="#awareness" onClick={(e) => handleAnchorClick(e, 'awareness')} className="hover:text-amber-300 transition-colors">Awareness in Action</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleAnchorClick(e, 'gallery')} className="hover:text-amber-300 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#press" onClick={(e) => handleAnchorClick(e, 'press')} className="hover:text-amber-300 transition-colors">Press Coverage</a>
              </li>
              <li>
                <a
                  href="#donate"
                  onClick={(e) => handleAnchorClick(e, 'donate')}
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 shrink-0" />
                  <span>Support &amp; Donate (Bank Details)</span>
                </a>
              </li>
              <li>
                <a
                  href="/csr-verification"
                  onClick={handleCSRClick}
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors pt-1 border-t border-[#1b5e41] w-full"
                >
                  <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>CSR Document Verification (16 Points)</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="hover:text-amber-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Solan Office */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif mb-4 pb-1 border-b border-[#1b5e41] inline-block">
              Office Location
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{ngoInfo.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Phone: {ngoInfo.primaryPhone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Email: {ngoInfo.email}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1b5e41] text-[11px] text-stone-400">
              Targeted Intervention Programme (TIP) • Integrated Health Campaign (IHC)
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Aarushi Gramin Sansthan. All rights reserved. Registered Society (Reg. No. 39/2003), Solan, Himachal Pradesh.
          </p>
          <p className="text-[11px] text-stone-400">
            Ground-level Community Welfare & Public Health
          </p>
        </div>
      </div>
    </footer>
  );
}
