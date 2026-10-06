import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import MainEditorialGrid from './components/MainEditorialGrid';
import TwinBanners from './components/TwinBanners';
import HangangGallery from './components/HangangGallery';
import WelcomeSection from './components/WelcomeSection';
import SacredArtSection from './components/SacredArtSection';
import HistoryTimeline from './components/HistoryTimeline';
import CommunitySection from './components/CommunitySection';
import WeddingSection from './components/WeddingSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import BulletinModal from './components/BulletinModal';
import WeddingInquiryModal from './components/WeddingInquiryModal';
import AdminCmsModal from './components/AdminCmsModal';
import LoginModal from './components/LoginModal';
import NaverMapModal from './components/NaverMapModal';
import HistoryEbookModal from './components/HistoryEbookModal';
import ParishEmailModal from './components/ParishEmailModal';
import SubPageViewer from './components/SubPageViewer';
import MobileStickyBar from './components/MobileStickyBar';
import HolySpiritLight from './components/HolySpiritLight';
import SacredAudioPlayer from './components/SacredAudioPlayer';

import {
  INITIAL_MASS_SCHEDULE,
  INITIAL_PARISH_NEWS,
} from './data/parishData';

export default function App() {
  // CMS Editable States
  const [schedule, setSchedule] = useState(INITIAL_MASS_SCHEDULE);
  const [newsList, setNewsList] = useState(INITIAL_PARISH_NEWS);

  // Routing View States: 'home' or a category ID from SITE_NAVIGATION
  const [currentView, setCurrentView] = useState('home');
  const [currentSubItemId, setCurrentSubItemId] = useState(null);

  // Modal Dialogs
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBulletinOpen, setIsBulletinOpen] = useState(false);
  const [isWeddingInquiryOpen, setIsWeddingInquiryOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isHistoryEbookOpen, setIsHistoryEbookOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  // Accessibility States
  const [fontScale, setFontScale] = useState('normal'); // 'normal' | 'large' | 'xlarge'
  const [highContrast, setHighContrast] = useState(false);

  // Apply Accessibility Classes to Document Root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-normal', 'font-scale-large', 'font-scale-xlarge');
    root.classList.add(`font-scale-${fontScale}`);

    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [fontScale, highContrast]);

  // Keyboard shortcut listener (ESC closes modals, CMD/CTRL+K opens search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsBulletinOpen(false);
        setIsWeddingInquiryOpen(false);
        setIsAdminOpen(false);
        setIsLoginOpen(false);
        setIsMapOpen(false);
        setIsHistoryEbookOpen(false);
        setIsEmailOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth Scroll Handlers
  const scrollToMass = () => {
    if (currentView !== 'home') setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('mass-schedule');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const scrollToLocation = () => {
    if (currentView !== 'home') setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('location');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const scrollToWedding = () => {
    if (currentView !== 'home') setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('wedding');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Subpage Navigation Handler
  const handleNavigateToSubpage = (catId, subItemId) => {
    if (catId === 'home') {
      setCurrentView('home');
      setCurrentSubItemId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView(catId);
      setCurrentSubItemId(subItemId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Quick Access Bar dispatcher
  const handleQuickAccessAction = (actionId) => {
    switch (actionId) {
      case 'mass':
        scrollToMass();
        break;
      case 'bulletin':
        setIsBulletinOpen(true);
        break;
      case 'events':
        handleNavigateToSubpage('about', 'events');
        break;
      case 'location':
        setIsMapOpen(true);
        break;
      case 'wedding':
        scrollToWedding();
        break;
      case 'newcomer':
        handleNavigateToSubpage('faith', 'catechumen');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col church-brick-bg text-[#232220] relative">
      {/* Global Subtle Sacred Church Brick Background Layer */}
      <div className="fixed inset-0 pointer-events-none -z-50 church-brick-bg" />

      {/* 01 Global Header with Mega-Menu & Accessibility */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBulletin={() => setIsBulletinOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenEmailModal={() => setIsEmailOpen(true)}
        onNavigateToSubpage={handleNavigateToSubpage}
        currentView={currentView}
        fontScale={fontScale}
        onChangeFontScale={setFontScale}
        highContrast={highContrast}
        onToggleHighContrast={() => setHighContrast(!highContrast)}
      />

      {/* Main Content Area */}
      {currentView === 'home' ? (
        <main className="flex-1">
          {/* 02 Hero (2-Column Scripture & Liturgy Floating Card) */}
          <Hero
            onScrollToSchedule={scrollToMass}
            onOpenBulletin={() => setIsBulletinOpen(true)}
            onNavigateToSubpage={handleNavigateToSubpage}
          />

          {/* 03 Quick Access (6 Cards matching reference design) */}
          <QuickAccess onSelectAction={handleQuickAccessAction} />

          {/* 04 Main Editorial 3-Column Grid (Mass Schedule + Notices/WYD + Calendar) */}
          <MainEditorialGrid
            schedule={schedule}
            newsList={newsList}
            onOpenAdmin={() => setIsAdminOpen(true)}
            onOpenBulletin={() => setIsBulletinOpen(true)}
            onNavigateToSubpage={handleNavigateToSubpage}
            onScrollToLocation={scrollToLocation}
          />

          {/* 05 Twin Banners: 50th History e-Book & About Us */}
          <TwinBanners
            onNavigateToSubpage={handleNavigateToSubpage}
            onOpen50thEbook={() => setIsHistoryEbookOpen(true)}
          />

          {/* 06 Hangang Gallery (6 High-Res Real Photos from Reference) */}
          <HangangGallery onNavigateToSubpage={handleNavigateToSubpage} />

          {/* 07 Welcome Message from Parish Priest */}
          <WelcomeSection
            onNavigateToIntro={() => handleNavigateToSubpage('about', 'intro')}
            onNavigateToNewcomer={() => handleNavigateToSubpage('faith', 'catechumen')}
          />

          {/* 08 Sacred Art Tour of Hangang Church */}
          <SacredArtSection />

          {/* 09 Half-Century Heritage History Timeline */}
          <HistoryTimeline />

          {/* 10 Community & Pastoral Groups */}
          <CommunitySection
            onSelectCommunityGroup={() => handleNavigateToSubpage('community', 'shared-life')}
          />

          {/* 11 Wedding & Holy Sacraments */}
          <WeddingSection
            onOpenInquiryModal={() => setIsWeddingInquiryOpen(true)}
          />

          {/* 12 Location, Transit & Naver Map */}
          <LocationSection
            onOpenMapModal={() => setIsMapOpen(true)}
          />
        </main>
      ) : (
        /* Full Subpage Deep Architecture Reader */
        <SubPageViewer
          categoryId={currentView}
          subItemId={currentSubItemId}
          onNavigateSubpage={handleNavigateToSubpage}
          onBackToHome={() => handleNavigateToSubpage('home', null)}
          onOpenBulletin={() => setIsBulletinOpen(true)}
          onOpenWeddingInquiry={() => setIsWeddingInquiryOpen(true)}
          onOpenMapModal={() => setIsMapOpen(true)}
          onOpen50thEbook={() => setIsHistoryEbookOpen(true)}
        />
      )}

      {/* 13 Footer with Church Sketch Illustration */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onNavigateToSubpage={handleNavigateToSubpage}
        onScrollToMass={scrollToMass}
        onOpenMapModal={() => setIsMapOpen(true)}
        onOpenEmailModal={() => setIsEmailOpen(true)}
      />

      {/* Sticky Mobile Bottom Shortcuts */}
      <MobileStickyBar
        onScrollToMass={scrollToMass}
        onOpenBulletin={() => setIsBulletinOpen(true)}
        onScrollToCalendar={() => scrollToMass()}
        onScrollToLocation={() => setIsMapOpen(true)}
      />

      {/* Interactive Feature Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToSubpage={handleNavigateToSubpage}
        onOpenBulletin={() => setIsBulletinOpen(true)}
        onScrollToMass={scrollToMass}
        onScrollToLocation={scrollToLocation}
      />

      <BulletinModal
        isOpen={isBulletinOpen}
        onClose={() => setIsBulletinOpen(false)}
      />

      <WeddingInquiryModal
        isOpen={isWeddingInquiryOpen}
        onClose={() => setIsWeddingInquiryOpen(false)}
      />

      <AdminCmsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        schedule={schedule}
        onUpdateSchedule={(newSched) => setSchedule(newSched)}
        newsList={newsList}
        onUpdateNews={(newNews) => setNewsList(newNews)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* In-App Naver Map & Directions Modal (외부로 나가지 않고 p4 안에서 연결) */}
      <NaverMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />

      {/* In-App 50th Anniversary e-Book Reader Modal (50년사 책장 인앱 열람) */}
      <HistoryEbookModal
        isOpen={isHistoryEbookOpen}
        onClose={() => setIsHistoryEbookOpen(false)}
      />

      {/* In-App Parish Office Email & Contact Modal (대표메일 인앱 문의) */}
      <ParishEmailModal
        isOpen={isEmailOpen}
        onClose={() => setIsEmailOpen(false)}
      />

      {/* Holy Spirit Light Follow Cursor Effect (성령의 빛) */}
      <HolySpiritLight />

      {/* Sacred Classical Cathedral Pipe Organ & Hymn Player (은은한 찬송가) */}
      <SacredAudioPlayer />
    </div>
  );
}
