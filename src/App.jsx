import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AreasOfWork from './components/AreasOfWork';
import FeaturedActivities from './components/FeaturedActivities';
import RenovationProjects from './components/RenovationProjects';
import HealthCamp from './components/HealthCamp';
import Training from './components/Training';
import Awareness from './components/Awareness';
import Gallery from './components/Gallery';
import PressCoverage from './components/PressCoverage';
import CommunityPresence from './components/CommunityPresence';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import CSRVerification from './pages/CSRVerification';
import { galleryItems } from './data/ngoData';

const isCSRRoute = (pathname, hash) => {
  return (
    pathname === '/csr-verification' ||
    pathname === '/csr-verification/' ||
    hash === '#/csr-verification' ||
    hash === '#csr-verification'
  );
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return isCSRRoute(window.location.pathname, window.location.hash)
        ? '/csr-verification'
        : '/';
    }
    return '/';
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageList, setCurrentImageList] = useState(galleryItems);

  useEffect(() => {
    const handleLocationChange = () => {
      const isCSR = isCSRRoute(window.location.pathname, window.location.hash);
      setCurrentPath(isCSR ? '/csr-verification' : '/');
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update SEO title and meta description dynamically
  useEffect(() => {
    if (currentPath === '/csr-verification') {
      document.title = 'CSR Document Verification | Arushi Gramin Sansthan';
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = "Official CSR and donation document checklist for Arushi Gramin Sansthan, Rajgarh, Distt. Sirmour (H.P.). Access statutory 16-point compliance documents.";
    } else {
      document.title = 'Aarushi Gramin Sansthan | NGO Solan, Himachal Pradesh';
    }
  }, [currentPath]);

  const navigateTo = (path, targetAnchor) => {
    if (path === '/csr-verification') {
      window.history.pushState({}, '', '/csr-verification');
      setCurrentPath('/csr-verification');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', targetAnchor ? `/#${targetAnchor.replace(/^#/, '')}` : '/');
      setCurrentPath('/');
      if (targetAnchor) {
        setTimeout(() => {
          const el = document.getElementById(targetAnchor.replace(/^#/, ''));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenSingleImage = (img) => {
    setActiveImage(img);
    const idx = galleryItems.findIndex((item) => item.src === img.src);
    setCurrentIndex(idx !== -1 ? idx : 0);
    setCurrentImageList(galleryItems);
    setLightboxOpen(true);
  };

  const handleSelectGalleryImage = (img, index, list) => {
    setActiveImage(img);
    setCurrentIndex(index);
    setCurrentImageList(list || galleryItems);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevImage = () => {
    if (!currentImageList || currentImageList.length === 0) return;
    const newIndex = (currentIndex - 1 + currentImageList.length) % currentImageList.length;
    setCurrentIndex(newIndex);
    setActiveImage(currentImageList[newIndex]);
  };

  const handleNextImage = () => {
    if (!currentImageList || currentImageList.length === 0) return;
    const newIndex = (currentIndex + 1) % currentImageList.length;
    setCurrentIndex(newIndex);
    setActiveImage(currentImageList[newIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-stone-800 selection:bg-[#16422e] selection:text-white">
      {/* Top Navbar */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPath === '/csr-verification' ? (
          <CSRVerification onNavigateHome={() => navigateTo('/')} />
        ) : (
          <>
            <Hero />
            <About onOpenImage={handleOpenSingleImage} />
            <AreasOfWork />
            <FeaturedActivities onOpenImage={handleOpenSingleImage} />
            <RenovationProjects onOpenImage={handleOpenSingleImage} />
            <HealthCamp onOpenImage={handleOpenSingleImage} />
            <Training onOpenImage={handleOpenSingleImage} />
            <Awareness onOpenImage={handleOpenSingleImage} />
            <Gallery onSelectImage={handleSelectGalleryImage} />
            <PressCoverage onOpenImage={handleOpenSingleImage} />
            <CommunityPresence onOpenImage={handleOpenSingleImage} />
            <Donate />
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} currentPath={currentPath} />

      {/* Lightbox Modal for Gallery Viewing on Home Page */}
      {currentPath !== '/csr-verification' && (
        <Lightbox
          isOpen={lightboxOpen}
          activeImage={activeImage}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          currentIndex={currentIndex}
          totalImages={currentImageList.length}
        />
      )}
    </div>
  );
}
