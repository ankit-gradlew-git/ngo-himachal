/**
 * Official Bank Account & Donation Details for Aarushi Gramin Sansthan.
 * Verified State Bank of India Account.
 */

export const donationConfig = {
  accountName: 'Arushi Gramin Sansthan',
  bankName: 'State Bank of India',
  accountNumber: '30617284637',
  ifscCode: 'SBIN0009087',
  upiId: 'arushigramin@sbi', // Placeholder dummy UPI ID while official bank QR is being provisioned
  isQrUpdating: true,
  regNo: '39/2003',
  accountType: 'Current / Society Welfare Account',
  branch: 'Rajgarh, Distt. Sirmour (H.P.)',
  supportedModes: [
    { name: 'IMPS', badge: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    { name: 'NEFT / RTGS', badge: 'bg-blue-50 text-blue-800 border-blue-200' },
    { name: 'SBI YONO', badge: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
    { name: 'UPI Apps', badge: 'bg-amber-50 text-amber-800 border-amber-200' },
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
