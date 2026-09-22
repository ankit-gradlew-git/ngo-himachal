import { useState, useCallback } from 'react';
import {
  Heart,
  QrCode,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Wallet
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import {
  donationConfig,
  copyTextToClipboard
} from '../data/donationConfig';

export default function Donate() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Handle Copy UPI ID
  const handleCopyUpiId = useCallback(async () => {
    const success = await copyTextToClipboard(donationConfig.upiId);
    if (success) {
      setCopied(true);
      setShowToast(true);

      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, []);

  return (
    <section id="donate" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-stone-200 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#16422e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Grassroots Impact"
          title="Support via UPI QR Code"
          subtitle="Direct contribution to Aarushi Gramin Sansthan for rural healthcare camps, cutting & tailoring training for women, and school renovation in Himachal Pradesh."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 items-center">
          
          {/* LEFT COLUMN: Impact Narrative & Transparency */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                <span className="p-1 rounded bg-emerald-100 text-[#16422e]">
                  <Heart className="w-3.5 h-3.5 fill-[#16422e]" />
                </span>
                <span>Transparent Grassroots Support</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif leading-snug">
                Your Support Powers Verified Community Programs
              </h3>

              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                Aarushi Gramin Sansthan is an active registered society (Reg. No. <strong>39/2003</strong>) based in Rajgarh, Distt. Sirmour (H.P.). All contributions directly fund on-the-ground public welfare without any intermediary cuts.
              </p>

              {/* Concrete Impact Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-stone-100">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Health Checkup Camps</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Free diagnostic screenings, doctor visits, and medicines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Women Vocational Training</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Structured cutting and tailoring courses for self-reliance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">School Restorations</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Classroom repairs, paintwork, and community facilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Direct Society Account</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Official Kotak Mahindra Bank VPA with full accountability.</p>
                  </div>
                </div>
              </div>

              {/* Simple Step Guide */}
              <div className="mt-6 pt-5 border-t border-stone-100 bg-[#FDFBF7] p-4 rounded-xl border border-stone-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                  How to Donate in 2 Simple Steps:
                </h4>
                <ol className="text-xs text-stone-600 space-y-1.5 list-decimal list-inside leading-relaxed">
                  <li>Open any UPI app (Google Pay, PhonePe, Paytm, BHIM) on your mobile.</li>
                  <li>Scan the QR code shown here or enter the copied UPI ID (<strong>{donationConfig.upiId}</strong>) to contribute any amount.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Official QR Code & UPI ID Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-stone-300 shadow-xl relative overflow-hidden max-w-md mx-auto">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#16422e] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <Wallet className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 font-serif leading-tight">
                      Official UPI Donation
                    </h3>
                    <p className="text-[11px] text-emerald-800 font-semibold">
                      Kotak Mahindra Bank Verified
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16422e] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>0% Commission</span>
                </div>
              </div>

              {/* The Official QR Code */}
              <div className="my-6 flex flex-col items-center justify-center text-center">
                <div className="relative p-3.5 bg-white rounded-2xl border-2 border-dashed border-stone-300 shadow-sm hover:border-[#16422e] transition-colors">
                  <img
                    src={donationConfig.qrImagePath}
                    alt="Aarushi Gramin Sansthan Official Kotak Bank UPI QR Code"
                    className="w-60 h-60 sm:w-64 sm:h-64 object-contain rounded-lg"
                    loading="eager"
                  />
                  
                  {/* Badge under QR */}
                  <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs font-bold text-stone-800 bg-stone-50 py-1.5 px-3 rounded-md border border-stone-200">
                    <QrCode className="w-4 h-4 text-[#16422e]" />
                    <span>Scan with Any UPI App</span>
                  </div>
                </div>

                {/* Organization Payee Name */}
                <div className="mt-3 text-center">
                  <div className="text-base font-bold text-stone-900 font-serif">
                    {donationConfig.payeeName}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Reg. Society No: {donationConfig.bankDetails.regNo}
                  </div>
                </div>
              </div>

              {/* Prominent UPI ID & One-Click Copy */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-stone-700 uppercase tracking-wider px-1">
                  <span>Official UPI ID (VPA)</span>
                  <span className="text-emerald-800 font-semibold lowercase">tap copy to use in any app</span>
                </div>

                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-stone-300 flex items-center justify-between gap-2 shadow-2xs">
                  <code className="text-xs sm:text-sm font-mono font-bold text-stone-900 select-all truncate pl-1">
                    {donationConfig.upiId}
                  </code>

                  <button
                    type="button"
                    onClick={handleCopyUpiId}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95 ${
                      copied
                        ? 'bg-emerald-700 text-white border border-emerald-700'
                        : 'bg-[#16422e] hover:bg-[#103424] text-white border border-[#103424]'
                    }`}
                    aria-label="Copy organization UPI ID to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-300" />
                        <span>Copy UPI ID</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Supported Apps Section */}
              <div className="mt-6 pt-5 border-t border-stone-200">
                <div className="text-[11px] font-bold text-stone-600 uppercase tracking-wider text-center mb-2.5">
                  Supported UPI Applications
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {donationConfig.supportedApps.map((app) => (
                    <div
                      key={app.name}
                      className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border text-xs font-semibold text-center ${app.badgeBg}`}
                    >
                      <Smartphone className="w-3.5 h-3.5 opacity-70" />
                      <span>{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organization Footer Note */}
              <div className="mt-5 p-3 rounded-xl bg-[#F9F6F0] border border-stone-200 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-stone-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#16422e]" />
                  <span>Direct Transfer to Kotak Mahindra Bank</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  No third-party payment gateway or processing charge.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating Copy Toast Notification */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#103424] text-white rounded-xl shadow-2xl border border-emerald-600 animate-slideUp"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-700 flex items-center justify-center text-white shrink-0">
            <Check className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">UPI ID Copied to Clipboard!</div>
            <div className="text-[11px] text-emerald-200 font-mono mt-0.5">
              {donationConfig.upiId}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
