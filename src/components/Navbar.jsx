import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Shield, Heart } from 'lucide-react';
import { ngoInfo } from '../data/ngoData';

export default function Navbar({ currentPath = '/', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Our Work', href: '#initiatives' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Press', href: '#press' },
    { label: 'Donate', href: '#donate' },
  ];

  const handleLinkClick = (e, href) => {
    if (currentPath === '/csr-verification') {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetAnchor = href.replace(/^#/, '');
      if (onNavigate) {
        onNavigate('/', targetAnchor);
      } else {
        window.location.href = `/#${targetAnchor}`;
      }
      return;
    }

    setMobileMenuOpen(false);
  };

  const handleCSRClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('/csr-verification');
    } else {
      window.location.href = '/csr-verification';
    }
  };

  const handleDonateClick = (e) => {
    if (currentPath === '/csr-verification') {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (onNavigate) {
        onNavigate('/', 'donate');
      } else {
        window.location.href = '/#donate';
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    if (currentPath === '/csr-verification') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('/');
      } else {
        window.location.href = '/';
      }
    }
  };

  const handleContactClick = (e) => {
    if (currentPath === '/csr-verification') {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (onNavigate) {
        onNavigate('/', 'contact');
      } else {
        window.location.href = '/#contact';
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Credentials & Contact Bar */}
      <div className="bg-[#103424] text-stone-200 text-xs py-2 px-4 border-b border-[#1b5e41]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-300">
              <Shield className="w-3.5 h-3.5" />
              Reg. No.: {ngoInfo.regNo}
            </span>
            <span className="hidden sm:inline-block text-stone-400">•</span>
            <span className="inline-flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {ngoInfo.branch}
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${ngoInfo.primaryPhone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{ngoInfo.primaryPhone}</span>
            </a>
            <span className="hidden sm:inline-block text-stone-400">•</span>
            <a
              href={`mailto:${ngoInfo.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{ngoInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-stone-200 transition-shadow ${
        isScrolled ? 'shadow-md py-2.5' : 'py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Org Details */}
          <a href="#hero" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#16422e] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-[#103424] group-hover:bg-[#103424] transition-colors shrink-0">
              <span className="text-amber-400 font-serif">A</span>
              <span className="text-emerald-100 font-serif">G</span>
            </div>
            <div>
              <div className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-stone-900 font-serif leading-tight">
                AARUSHI GRAMIN SANSTHAN
              </div>
              <div className="text-[11px] sm:text-xs text-emerald-800 font-semibold tracking-wide">
                Rajgarh, Distt. Sirmour (H.P.)
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links & Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Streamlined Primary Links */}
            <div className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-1.5 text-sm font-medium text-stone-700 hover:text-[#16422e] hover:bg-emerald-50/70 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Distinct Action Cluster: Donate + CSR Verification Badge + Contact Us Button */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-stone-200">
              <a
                href="#donate"
                onClick={handleDonateClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-md bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 active:scale-95 transition-all whitespace-nowrap shadow-2xs cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                <span>Donate</span>
              </a>

              <a
                href="/csr-verification"
                onClick={handleCSRClick}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  currentPath === '/csr-verification'
                    ? 'bg-[#16422e] text-amber-300 shadow-xs ring-1 ring-emerald-600'
                    : 'bg-emerald-50 text-[#16422e] hover:bg-emerald-100 border border-emerald-200 hover:border-emerald-300'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>CSR Verification</span>
              </a>

              <a
                href="#contact"
                onClick={handleContactClick}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#16422e] hover:bg-[#103424] active:bg-[#0a1f16] rounded-md shadow-xs transition-all whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FDFBF7] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-[#16422e] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Donate via UPI Button */}
              <div className="pt-2">
                <a
                  href="#donate"
                  onClick={handleDonateClick}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 text-base font-bold rounded-md bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 transition-colors"
                >
                  <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                  <span>Donate to Organization</span>
                </a>
              </div>

              {/* Mobile CSR Verification */}
              <div className="pt-2">
                <a
                  href="/csr-verification"
                  onClick={handleCSRClick}
                  className={`flex items-center gap-2 px-3 py-2.5 text-base font-semibold rounded-md transition-colors ${
                    currentPath === '/csr-verification'
                      ? 'bg-[#16422e] text-amber-300'
                      : 'bg-emerald-50 text-[#16422e] border border-emerald-200'
                  }`}
                >
                  <Shield className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>CSR Verification Portal</span>
                </a>
              </div>

              {/* Mobile Contact Button */}
              <div className="pt-2 border-t border-stone-200 mt-2">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="w-full block text-center px-4 py-2.5 text-base font-semibold text-white bg-[#16422e] hover:bg-[#103424] rounded-md shadow-sm transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
