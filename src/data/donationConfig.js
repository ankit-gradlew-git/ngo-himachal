/**
 * Configuration and utilities for Aarushi Gramin Sansthan UPI Donations.
 * Official Kotak Mahindra Bank UPI ID: 9304847170@kotakbank
 */

export const donationConfig = {
  upiId: '9304847170@kotakbank',
  payeeName: 'Aarushi Gramin Sansthan',
  qrImagePath: '/images/QR/qr.jpeg',
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
