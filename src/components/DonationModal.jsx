import { useEffect, useRef } from 'react';
import { X, Copy, Check, QrCode, ShieldCheck, Heart, Smartphone } from 'lucide-react';
import { donationConfig, buildUpiDeepLink } from '../data/donationConfig';

/**
 * Accessible desktop modal displaying the UPI QR code and payment details.
 * Implements full keyboard navigation, escape listener, and focus trapping.
 */
export default function DonationModal({
  isOpen,
  onClose,
  selectedAmount,
  setSelectedAmount,
  onCopyUpi,
  copied,
}) {
  const modalRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  // Store previously focused element and trap focus inside modal
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement;

      // Disable body scroll when modal is active
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus first interactive element in modal
      const timer = setTimeout(() => {
        if (modalRef.current) {
          const focusable = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            focusable[0].focus();
          }
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        if (previouslyFocusedElementRef.current && typeof previouslyFocusedElementRef.current.focus === 'function') {
          previouslyFocusedElementRef.current.focus();
        }
      };
    }
  }, [isOpen]);

  // Handle keyboard events (Escape to close & Tab cycle)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDeepLink = buildUpiDeepLink({
    amount: selectedAmount,
    note: selectedAmount
      ? `Contribution of INR ${selectedAmount} to Aarushi Gramin Sansthan`
      : donationConfig.defaultNote,
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/70 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-modal-title"
        aria-describedby="donation-modal-desc"
        className="relative w-full max-w-lg bg-[#FDFBF7] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all my-8 animate-scaleUp"
      >
        {/* Modal Header */}
        <div className="bg-[#103424] text-white px-6 py-5 border-b border-[#1b5e41] relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-900/70 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified Kotak Bank UPI</span>
              </div>
              <h3
                id="donation-modal-title"
                className="text-xl sm:text-2xl font-bold font-serif text-white tracking-tight"
              >
                Scan to Donate
              </h3>
              <p
                id="donation-modal-desc"
                className="text-xs sm:text-sm text-stone-200 mt-1 leading-snug"
              >
                Scan this QR using any UPI app on your phone to support grassroots initiatives.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer shrink-0"
              aria-label="Close donation modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Main QR Display Box */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative p-3.5 bg-white rounded-2xl border-2 border-dashed border-stone-300 shadow-sm hover:border-[#16422e] transition-colors">
              <img
                src={donationConfig.qrImagePath}
                alt="Aarushi Gramin Sansthan Official Kotak Bank UPI QR Code"
                className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-lg"
              />
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs font-bold text-stone-700 bg-stone-50 py-1 px-2.5 rounded-md border border-stone-200">
                <QrCode className="w-3.5 h-3.5 text-[#16422e]" />
                <span>Scan this QR using any UPI app</span>
              </div>
            </div>

            {/* Payee Details */}
            <div className="mt-3 text-center">
              <div className="text-base font-bold text-stone-900 font-serif">
                {donationConfig.payeeName}
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                Official Registered Society • Reg No: {donationConfig.bankDetails.regNo}
              </div>
            </div>
          </div>

          {/* Quick Amount Selection (Optional) */}
          <div className="bg-stone-50/80 rounded-xl p-3.5 border border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                Amount (Optional)
              </span>
              {selectedAmount ? (
                <button
                  type="button"
                  onClick={() => setSelectedAmount('')}
                  className="text-[11px] font-semibold text-emerald-800 hover:underline"
                >
                  Clear Amount
                </button>
              ) : (
                <span className="text-[11px] text-stone-600">Enter custom or pay any amount</span>
              )}
            </div>

            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {donationConfig.suggestedAmounts.map((amt) => {
                const isSelected = String(selectedAmount) === String(amt);
                return (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setSelectedAmount(isSelected ? '' : String(amt))}
                    className={`py-1.5 px-1 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#16422e] text-white border-[#16422e] shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/50'
                    }`}
                  >
                    ₹{amt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Copy UPI ID Section */}
          <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                Official Kotak UPI ID (VPA)
              </span>
              <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Kotak Mahindra Bank
              </span>
            </div>

            <div className="flex items-center gap-2">
              <code className="flex-1 bg-stone-100/90 text-stone-900 font-mono text-xs sm:text-sm font-semibold py-2.5 px-3 rounded-lg border border-stone-200 select-all overflow-x-auto">
                {donationConfig.upiId}
              </code>

              <button
                type="button"
                onClick={onCopyUpi}
                className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95 ${
                  copied
                    ? 'bg-emerald-700 text-white border border-emerald-700'
                    : 'bg-[#16422e] hover:bg-[#103424] text-white border border-[#103424]'
                }`}
                aria-label="Copy UPI ID to clipboard"
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

          {/* Supported Apps Badges */}
          <div className="pt-1">
            <div className="text-[11px] uppercase tracking-wider font-bold text-stone-600 mb-2 text-center">
              Works seamlessly with all verified UPI apps
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {donationConfig.supportedApps.map((app) => (
                <div
                  key={app.name}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border text-xs font-semibold text-center ${app.badgeBg}`}
                >
                  <Smartphone className="w-3.5 h-3.5 opacity-80" />
                  <span>{app.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick link fallback for desktop browsers with phone integration */}
          <div className="text-center pt-1 border-t border-stone-200">
            <a
              href={currentDeepLink}
              className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#16422e] font-medium transition-colors"
            >
              <span>Click to open in native UPI app</span>
              <span className="text-[10px] text-stone-600">(if installed on this device)</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F2] px-6 py-3.5 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Thank you for supporting community welfare</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-stone-700 hover:text-stone-900 font-bold hover:underline cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
