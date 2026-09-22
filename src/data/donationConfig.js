/**
 * Configuration and utilities for Smart UPI Donations.
 * Payee: Aarushi Gramin Sansthan
 * VPA: 9304847170@kotakbank
 */

export const donationConfig = {
  upiId: '9304847170@kotakbank',
  payeeName: 'Aarushi Gramin Sansthan',
  merchantCode: '', // Optional MCC
  currency: 'INR',
  qrImagePath: '/images/QR/qr.jpeg',
  defaultNote: 'Donation for Community Welfare & Health Camps',
  suggestedAmounts: [250, 500, 1000, 2500, 5000],
  bankDetails: {
    bankName: 'Kotak Mahindra Bank',
    vpa: '9304847170@kotakbank',
    regNo: '39/2003',
    accountType: 'Registered Society / NGO Account'
  },
  supportedApps: [
    { name: 'Google Pay', short: 'GPay', badgeBg: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'PhonePe', short: 'PhonePe', badgeBg: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Paytm', short: 'Paytm', badgeBg: 'bg-sky-50 text-sky-800 border-sky-200' },
    { name: 'BHIM UPI', short: 'BHIM', badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  ]
};

/**
 * Builds a dynamic UPI deep link following the NPCI UPI Linking Specs:
 * upi://pay?pa={UPI_ID}&pn={PAYEE_NAME}&cu=INR[&am={AMOUNT}][&tn={NOTE}]
 *
 * @param {Object} params
 * @param {string} [params.upiId]
 * @param {string} [params.payeeName]
 * @param {string|number} [params.amount]
 * @param {string} [params.note]
 * @param {string} [params.currency]
 * @returns {string}
 */
export function buildUpiDeepLink({
  upiId = donationConfig.upiId,
  payeeName = donationConfig.payeeName,
  amount = '',
  note = donationConfig.defaultNote,
  currency = donationConfig.currency,
} = {}) {
  const queryParts = [
    `pa=${encodeURIComponent(upiId)}`,
    `pn=${encodeURIComponent(payeeName)}`,
    `cu=${encodeURIComponent(currency)}`
  ];

  if (amount && Number(amount) > 0) {
    // UPI protocol requires decimal format like 500.00 or numeric string
    queryParts.push(`am=${encodeURIComponent(Number(amount).toFixed(2))}`);
  }

  if (note && note.trim().length > 0) {
    queryParts.push(`tn=${encodeURIComponent(note.trim())}`);
  }

  return `upi://pay?${queryParts.join('&')}`;
}

/**
 * Automatically detects whether the user is on a mobile device
 * capable of handling the upi:// deep link protocol.
 *
 * @returns {boolean}
 */
export function isMobileDevice() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }

  const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';
  
  // Standard mobile OS signatures
  const isMobileUA = /android|iphone|ipad|ipod|windows phone|iemobile|mobile/i.test(userAgent);
  
  // iPads with iPadOS 13+ report as Macintosh with touch points
  const isIPadSafari = /macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1;

  // Viewport heuristic combined with coarse pointer
  const isSmallScreenTouch = 
    window.matchMedia &&
    window.matchMedia('(max-width: 820px) and (pointer: coarse)').matches;

  return isMobileUA || isIPadSafari || Boolean(isSmallScreenTouch);
}

/**
 * Robust clipboard copy function with fallback for legacy browsers.
 *
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export async function copyTextToClipboard(text) {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
