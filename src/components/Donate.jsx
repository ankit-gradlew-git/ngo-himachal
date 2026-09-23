import { useState, useCallback } from 'react';
import {
  Heart,
  QrCode,
  Copy,
  Check,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import {
  donationConfig,
  copyTextToClipboard
} from '../data/donationConfig';

export default function Donate() {
  const [copiedField, setCopiedField] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleCopy = useCallback(async (text, label) => {
    const success = await copyTextToClipboard(text);
    if (success) {
      setCopiedField(label);
      setToastMessage(`${label} copied: ${text}`);
      setShowToast(true);

      setTimeout(() => setCopiedField(null), 2500);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, []);

  return (
    <section id="donate" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-stone-200 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#16422e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Grassroots Contribution"
          title="Support Arushi Gramin Sansthan"
          subtitle="Direct contribution to official organization account for rural health camps, cutting & tailoring vocational training for women, and school renovation in Himachal Pradesh."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 items-start">
          
          {/* LEFT COLUMN: Impact Narrative & Transparency */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                <span className="p-1 rounded bg-emerald-100 text-[#16422e]">
                  <Heart className="w-3.5 h-3.5 fill-[#16422e]" />
                </span>
                <span>Direct Bank Transfer Support</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif leading-snug">
                Your Support Powers Verified Community Programs
              </h3>

              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                <strong>Arushi Gramin Sansthan</strong> is an active registered welfare society (Registration No. <strong>{donationConfig.regNo}</strong>) based in Rajgarh, Distt. Sirmour (H.P.). All contributions directly support on-the-ground public health screenings, vocational training, and rural education programs.
              </p>

              {/* Concrete Impact Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-stone-100">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Health Checkup Camps</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Free diagnostic screenings, medical consultations, and medicines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Women Vocational Centers</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Structured cutting and tailoring courses for rural women.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">School Restorations</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Revitalizing rural primary schools and community shelters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Official SBI Account</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Direct State Bank of India account without third-party commissions.</p>
                  </div>
                </div>
              </div>

              {/* Transfer Guide */}
              <div className="mt-6 pt-5 border-t border-stone-100 bg-[#FDFBF7] p-4 rounded-xl border border-stone-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-emerald-800" />
                  <span>How to Transfer via Net Banking / Banking Apps:</span>
                </h4>
                <ol className="text-xs text-stone-600 space-y-1.5 list-decimal list-inside leading-relaxed">
                  <li>Open your preferred banking app (SBI YONO, HDFC, ICICI, etc.) or any UPI app.</li>
                  <li>Select <strong>To Bank Account</strong> (IMPS / NEFT / RTGS) and paste the Account Number &amp; IFSC Code provided on the right.</li>
                  <li>Enter the beneficiary name as <strong>Arushi Gramin Sansthan</strong> and complete your contribution.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Official State Bank of India Account Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-stone-300 shadow-xl relative overflow-hidden max-w-lg mx-auto">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#103424] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <Building2 className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 font-serif leading-tight">
                      Official Bank Account Details
                    </h3>
                    <p className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                      <span>{donationConfig.bankName}</span>
                      <span>•</span>
                      <span>Rajgarh Branch</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16422e] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified NGO A/C</span>
                </div>
              </div>

              {/* Bank Details Key-Value Rows with One-Click Copy Buttons */}
              <div className="mt-6 space-y-3.5">
                
                {/* 1. Account Name */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-stone-300 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                      Account Beneficiary Name
                    </div>
                    <div className="text-sm sm:text-base font-bold text-stone-900 font-serif truncate mt-0.5">
                      {donationConfig.accountName}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(donationConfig.accountName, 'Account Name')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-2xs shrink-0 cursor-pointer active:scale-95 ${
                      copiedField === 'Account Name'
                        ? 'bg-emerald-700 text-white'
                        : 'bg-white hover:bg-stone-100 text-stone-800 border border-stone-300'
                    }`}
                    aria-label="Copy Account Beneficiary Name"
                  >
                    {copiedField === 'Account Name' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-600" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 2. Bank Name */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-stone-300 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                      Bank Name &amp; Branch
                    </div>
                    <div className="text-sm sm:text-base font-bold text-stone-900 mt-0.5">
                      {donationConfig.bankName}
                    </div>
                    <div className="text-xs text-stone-500">
                      {donationConfig.branch}
                    </div>
                  </div>
                </div>

                {/* 3. Account Number */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-emerald-800/40 bg-emerald-50/20 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-bold text-emerald-900 tracking-wider flex items-center gap-1.5">
                      <span>Account Number (A/C No)</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-900 px-1.5 py-0.2 rounded font-semibold">Primary</span>
                    </div>
                    <div className="text-base sm:text-lg font-mono font-extrabold text-stone-900 tracking-wider mt-0.5">
                      {donationConfig.accountNumber}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(donationConfig.accountNumber, 'Account Number')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95 ${
                      copiedField === 'Account Number'
                        ? 'bg-emerald-700 text-white border border-emerald-700'
                        : 'bg-[#16422e] hover:bg-[#103424] text-white border border-[#103424]'
                    }`}
                    aria-label="Copy Bank Account Number"
                  >
                    {copiedField === 'Account Number' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-300" />
                        <span>Copy A/C No</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 4. IFSC Code */}
                <div className="bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-emerald-800/40 bg-emerald-50/20 flex items-center justify-between gap-3 shadow-2xs">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase font-bold text-emerald-900 tracking-wider flex items-center gap-1.5">
                      <span>IFSC Code</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-900 px-1.5 py-0.2 rounded font-semibold">RTGS / NEFT / IMPS</span>
                    </div>
                    <div className="text-base sm:text-lg font-mono font-extrabold text-stone-900 tracking-wider mt-0.5">
                      {donationConfig.ifscCode}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(donationConfig.ifscCode, 'IFSC Code')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95 ${
                      copiedField === 'IFSC Code'
                        ? 'bg-emerald-700 text-white border border-emerald-700'
                        : 'bg-[#16422e] hover:bg-[#103424] text-white border border-[#103424]'
                    }`}
                    aria-label="Copy IFSC Code"
                  >
                    {copiedField === 'IFSC Code' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-300" />
                        <span>Copy IFSC</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* QR Code Placeholder Banner (Updating Soon) */}
              <div className="mt-6 p-4 rounded-xl border-2 border-dashed border-stone-300 bg-stone-50/80 text-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-2.5 border border-amber-300">
                  <QrCode className="w-6 h-6 text-amber-800" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-1.5 border border-amber-300">
                  <Clock className="w-3 h-3 text-amber-800" />
                  <span>Official SBI UPI QR Updating Soon</span>
                </div>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  The official State Bank of India QR code for Arushi Gramin Sansthan is currently being processed by the bank. Please use the direct SBI Account Number and IFSC code above for your contributions.
                </p>
                <div className="mt-2 text-[11px] font-mono text-stone-600">
                  UPI ID (Placeholder): <span className="font-semibold text-stone-700">{donationConfig.upiId}</span>
                </div>
              </div>

              {/* Supported Modes Badges */}
              <div className="mt-5 pt-4 border-t border-stone-200">
                <div className="text-[11px] font-bold text-stone-600 uppercase tracking-wider text-center mb-2.5">
                  Supported Payment Methods
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {donationConfig.supportedModes.map((mode) => (
                    <div
                      key={mode.name}
                      className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border text-xs font-semibold text-center ${mode.badge}`}
                    >
                      <Sparkles className="w-3 h-3 opacity-70" />
                      <span>{mode.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organization Footer Note */}
              <div className="mt-5 p-3 rounded-xl bg-[#F9F6F0] border border-stone-200 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-stone-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#16422e]" />
                  <span>Arushi Gramin Sansthan • Society Reg No: {donationConfig.regNo}</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  Direct transfer to organization’s State Bank of India account.
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
            <div className="text-xs font-bold text-white">Copied to Clipboard!</div>
            <div className="text-[11px] text-emerald-200 font-mono mt-0.5">
              {toastMessage}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
