import { useState, useEffect, useCallback } from 'react';
import {
  Heart,
  QrCode,
  Copy,
  Check,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Info,
  CheckCircle2,
  Wallet
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import DonationModal from './DonationModal';
import {
  donationConfig,
  buildUpiDeepLink,
  isMobileDevice,
  copyTextToClipboard
} from '../data/donationConfig';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile on mount and window resize
  useEffect(() => {
    const handleDeviceCheck = () => {
      setIsMobile(isMobileDevice());
    };
    handleDeviceCheck();
    window.addEventListener('resize', handleDeviceCheck);
    return () => window.removeEventListener('resize', handleDeviceCheck);
  }, []);

  // Compute effective amount
  const effectiveAmount = isCustom ? customAmount : selectedAmount;

  // Generate dynamic UPI deep link
  const upiDeepLink = buildUpiDeepLink({
    amount: effectiveAmount,
    note: effectiveAmount
      ? `Contribution of INR ${effectiveAmount} to Aarushi Gramin Sansthan`
      : donationConfig.defaultNote
  });

  // Handle "Donate via UPI" button click
  const handleDonateClick = (e) => {
    e.preventDefault();

    if (isMobile) {
      // Direct deep link launch on mobile
      window.location.href = upiDeepLink;
    } else {
      // Open desktop modal with QR code & instructions
      setIsModalOpen(true);
    }
  };

  // Handle Copy UPI ID
  const handleCopyUpiId = useCallback(async () => {
    const success = await copyTextToClipboard(donationConfig.upiId);
    if (success) {
      setCopied(true);
      setToastMessage(`UPI ID copied: ${donationConfig.upiId}`);
      setShowToast(true);

      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, []);

  const handleSelectPreset = (amt) => {
    setIsCustom(false);
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (!isCustom) setIsCustom(true);
  };

  return (
    <section id="donate" className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-stone-200 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#16422e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Grassroots Impact"
          title="Empower Rural Communities via UPI"
          subtitle="Every contribution directly supports free medical camps, women vocational tailoring training, and rural school renovation across Himachal Pradesh."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 items-start">
          
          {/* LEFT COLUMN: Impact Narrative, Transparency & Amount Selection */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission Statement Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                <span className="p-1 rounded bg-emerald-100 text-[#16422e]">
                  <Heart className="w-3.5 h-3.5 fill-[#16422e]" />
                </span>
                <span>Grassroots Transparent Giving</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif leading-snug">
                Your Donation Powers Real Change in Rural Himachal Pradesh
              </h3>

              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                Aarushi Gramin Sansthan is an active registered society (Reg. No. <strong>39/2003</strong>). We bridge critical healthcare, education, and vocational gaps in underserved hill communities of District Sirmour and Solan.
              </p>

              {/* Concrete Impact Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-stone-100">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Health & Diagnostic Camps</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Free consultations, testing, and essential medicines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Women Skill Centers</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Structured cutting and tailoring courses for livelihood.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">School Infrastructure</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Renovation of remote primary schools and community shelters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                  <CheckCircle2 className="w-5 h-5 text-[#16422e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Verified Society Account</h4>
                    <p className="text-xs text-stone-600 mt-0.5">Direct Kotak Bank account without third-party commission.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Amount Selection Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                  Select Contribution Amount (INR)
                </h4>
                <span className="text-xs text-stone-500 font-medium">Optional Customization</span>
              </div>

              {/* Amount Pills */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                {donationConfig.suggestedAmounts.map((amt) => {
                  const isSelected = !isCustom && String(selectedAmount) === String(amt);
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleSelectPreset(String(amt))}
                      className={`py-3 px-2 rounded-xl text-sm font-bold transition-all cursor-pointer text-center border ${
                        isSelected
                          ? 'bg-[#16422e] text-white border-[#16422e] shadow-md scale-102 ring-2 ring-emerald-500/20'
                          : 'bg-[#FDFBF7] text-stone-700 border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/50 hover:-translate-y-0.5 active:scale-95'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount Field */}
              <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500 font-bold text-sm">
                    ₹
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter custom amount (e.g. 2100)"
                    className={`w-full pl-8 pr-4 py-2.5 text-sm rounded-xl border bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-[#16422e] focus:bg-white transition-all ${
                      isCustom && customAmount
                        ? 'border-[#16422e] ring-1 ring-[#16422e]'
                        : 'border-stone-300'
                    }`}
                  />
                </div>

                {effectiveAmount && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedAmount('');
                      setCustomAmount('');
                      setIsCustom(false);
                    }}
                    className="text-xs text-stone-500 hover:text-stone-800 font-semibold underline py-1"
                  >
                    Clear amount (donor chooses in UPI app)
                  </button>
                )}
              </div>

              <p className="mt-3 text-xs text-stone-500 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                <span>
                  {effectiveAmount
                    ? `Pre-filling ₹${Number(effectiveAmount).toLocaleString('en-IN')} in your UPI app.`
                    : 'No fixed amount selected. You can enter any amount directly inside your UPI app.'}
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Smart UPI Donation Card with Always-Visible QR Code */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-stone-300 shadow-xl relative overflow-hidden">
              
              {/* Card Banner */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#16422e] text-white flex items-center justify-center font-bold text-sm">
                    <Wallet className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 font-serif leading-tight">
                      Instant UPI Payment
                    </h3>
                    <p className="text-[11px] text-emerald-800 font-semibold">
                      Kotak Mahindra Bank Verified
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16422e] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>0% Gateway Fee</span>
                </div>
              </div>

              {/* Prominent Always-Visible QR Code */}
              <div className="my-5 flex flex-col items-center justify-center text-center">
                <div className="relative p-3 bg-white rounded-2xl border-2 border-stone-200 shadow-sm hover:border-[#16422e] transition-colors group">
                  <img
                    src={donationConfig.qrImagePath}
                    alt="Aarushi Gramin Sansthan Kotak Bank Official UPI QR Code"
                    className="w-52 h-52 sm:w-56 sm:h-56 object-contain rounded-lg group-hover:scale-101 transition-transform"
                    loading="eager"
                  />
                  
                  {/* Subtle Badge under QR */}
                  <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-bold text-stone-700 bg-stone-50 py-1 px-2.5 rounded-md border border-stone-200">
                    <QrCode className="w-3.5 h-3.5 text-[#16422e]" />
                    <span>Scan with Any UPI App</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <div className="text-sm font-bold text-stone-900 font-serif">
                    {donationConfig.payeeName}
                  </div>
                  <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                    VPA: {donationConfig.upiId}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                
                {/* 1. Prominent "Donate via UPI" Button */}
                <button
                  type="button"
                  onClick={handleDonateClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-[#16422e] hover:bg-[#103424] active:bg-[#0a1f16] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                  aria-label={isMobile ? 'Open installed UPI app to donate' : 'Open desktop QR donation dialog'}
                >
                  <Smartphone className="w-5 h-5 text-amber-300" />
                  <span>Donate via UPI</span>
                  {effectiveAmount ? (
                    <span className="px-2 py-0.5 text-xs font-extrabold bg-emerald-800 rounded text-amber-300 border border-emerald-600">
                      ₹{Number(effectiveAmount).toLocaleString('en-IN')}
                    </span>
                  ) : null}
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>

                {/* Device Context Hint */}
                <p className="text-[11px] text-center text-stone-500">
                  {isMobile ? (
                    <span className="text-emerald-800 font-medium">
                      📱 Opens directly in your phone’s installed UPI app
                    </span>
                  ) : (
                    <span>
                      💻 On desktop: Click to view full scan instructions or copy details
                    </span>
                  )}
                </p>

                {/* 2. Secondary "Copy UPI ID" Button with Clipboard Support */}
                <div className="pt-2">
                  <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1 pl-1">
                      <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                        UPI ID / VPA
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-bold text-stone-900 truncate">
                        {donationConfig.upiId}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyUpiId}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-2xs shrink-0 cursor-pointer active:scale-95 ${
                        copied
                          ? 'bg-emerald-700 text-white border border-emerald-700'
                          : 'bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 hover:border-stone-400'
                      }`}
                      aria-label="Copy organization UPI ID to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#16422e]" />
                          <span>Copy UPI ID</span>
                        </>
                      )}
                    </button>
                  </div>
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
                      <Smartphone className="w-3 h-3 opacity-70" />
                      <span>{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Organization Tag */}
              <div className="mt-5 p-3 rounded-xl bg-[#F9F6F0] border border-stone-200 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-stone-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#16422e]" />
                  <span>Aarushi Gramin Sansthan • Reg No: 39/2003</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  Direct transfer to NGO official account. No intermediaries.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Accessible Desktop QR Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedAmount={effectiveAmount}
        setSelectedAmount={(amt) => {
          setSelectedAmount(amt);
          setIsCustom(false);
          setCustomAmount('');
        }}
        onCopyUpi={handleCopyUpiId}
        copied={copied}
      />

      {/* Global Copy Toast Notification */}
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
