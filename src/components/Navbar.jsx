import React, { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, Menu, X, ChevronDown, User, Type, Eye, Phone, MapPin, Clock, Sparkles, Mail } from 'lucide-react';
import ParishLogo from './ParishLogo';
import { SITE_NAVIGATION } from '../data/parishData';

export default function Navbar({
  onOpenSearch,
  onOpenBulletin,
  onOpenLogin,
  onNavigateToSubpage,
  currentView,
  fontScale,
  onChangeFontScale,
  highContrast,
  onToggleHighContrast,
  onOpenEmailModal,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null);
  const navRef = useRef(null);
  const megaMenuTimeoutRef = useRef(null);

  // Monitor scroll for header background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleMouseEnter = (id) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setActiveMenuId(id);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMenuId(null);
    }, 180);
  };

  const handleMenuClick = (item) => {
    onNavigateToSubpage(item.id, item.subItems[0]?.id);
    setActiveMenuId(null);
  };

  const handleSubItemClick = (catId, subItemId) => {
    onNavigateToSubpage(catId, subItemId);
    setActiveMenuId(null);
    setMobileMenuOpen(false);
  };

  const isLightHeader = !isScrolled && currentView === 'home';

  return (
    <>
      <header
        ref={navRef}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isLightHeader
            ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-[#F7F4EE] border-b border-white/10'
            : 'bg-white/95 backdrop-blur-md text-[#1A1918] border-b border-stone-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
        }`}
      >
        {/* Top Utility Bar (Elderly Font Controls, Bulletin, Contact) */}
        <div
          className={`border-b text-xs transition-colors py-1.5 px-4 md:px-8 hidden md:block ${
            isLightHeader
              ? 'border-white/10 text-[#DDD9D0]/80'
              : 'border-stone-100 text-[#5C574F] bg-[#FAF9F6]/80'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-serif-kr text-[11px] tracking-wide">
                천주교 서울대교구 제1 중구-용산지구 지구좌성당
              </span>
              <span className="text-[10px] opacity-40">|</span>
              <span className="text-[11px] flex items-center gap-1 font-mono">
                <Clock className="w-3 h-3 text-[#B69A63]" />
                사무실 09:00 - 19:00 (월요일 휴무)
              </span>
            </div>

            <div className="flex items-center gap-5">
              {/* Senior Parishioner Accessibility Controls */}
              <div className="flex items-center gap-1 bg-black/5 rounded px-2 py-0.5">
                <span className="text-[11px] mr-1 flex items-center gap-0.5">
                  <Type className="w-3 h-3" />
                  글자크기
                </span>
                <button
                  onClick={() => onChangeFontScale('normal')}
                  className={`px-1.5 py-0.5 rounded text-[11px] transition-colors ${
                    fontScale === 'normal'
                      ? 'bg-[#5A2428] text-white font-bold'
                      : 'hover:text-[#5A2428]'
                  }`}
                  aria-label="보통 글자 크기"
                >
                  기본
                </button>
                <button
                  onClick={() => onChangeFontScale('large')}
                  className={`px-1.5 py-0.5 rounded text-[11px] transition-colors ${
                    fontScale === 'large'
                      ? 'bg-[#5A2428] text-white font-bold'
                      : 'hover:text-[#5A2428]'
                  }`}
                  aria-label="큰 글자 크기"
                >
                  크게
                </button>
                <button
                  onClick={() => onChangeFontScale('xlarge')}
                  className={`px-1.5 py-0.5 rounded text-[11px] transition-colors ${
                    fontScale === 'xlarge'
                      ? 'bg-[#5A2428] text-white font-bold'
                      : 'hover:text-[#5A2428]'
                  }`}
                  aria-label="가장 큰 글자 크기"
                >
                  더크게
                </button>
              </div>

              {/* High Contrast Mode Toggle */}
              <button
                onClick={onToggleHighContrast}
                className="flex items-center gap-1 hover:text-[#5A2428] transition-colors text-[11px]"
                title="고대비 모드 토글"
              >
                <Eye className="w-3 h-3 text-[#B69A63]" />
                <span>{highContrast ? '고대비 ON' : '고대비'}</span>
              </button>

              <span className="text-[10px] opacity-40">|</span>

              {/* Weekly Bulletin Shortcut */}
              <button
                onClick={onOpenBulletin}
                className="flex items-center gap-1 font-serif-kr text-[#B69A63] hover:underline transition-colors text-[11px] font-medium"
              >
                <BookOpen className="w-3 h-3" />
                이번 주 주보
              </button>

              {/* Login / Auth */}
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1 hover:text-[#5A2428] transition-colors text-[11px]"
              >
                <User className="w-3 h-3" />
                신자 로그인
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <ParishLogo
            variant={isLightHeader ? 'light' : 'dark'}
            onClick={() => onNavigateToSubpage('home', null)}
          />

          {/* Desktop Center/Right Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {SITE_NAVIGATION.map((cat) => {
              const isActive = activeMenuId === cat.id || currentView === cat.id;
              return (
                <div
                  key={cat.id}
                  className="relative py-2"
                  onMouseEnter={() => handleMouseEnter(cat.id)}
                >
                  <button
                    onClick={() => handleMenuClick(cat)}
                    className={`font-serif-kr text-[15px] font-medium tracking-tight flex items-center gap-1 transition-colors ${
                      isLightHeader
                        ? isActive
                          ? 'text-[#B69A63]'
                          : 'text-[#F7F4EE] hover:text-[#B69A63]'
                        : isActive
                        ? 'text-[#5A2428] font-semibold'
                        : 'text-[#20201E] hover:text-[#5A2428]'
                    }`}
                  >
                    {cat.title}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMenuId === cat.id ? 'rotate-180 text-[#B69A63]' : 'opacity-60'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Utility Right Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenSearch}
              className={`p-1.5 rounded-full transition-colors flex items-center gap-1 text-xs ${
                isLightHeader
                  ? 'text-[#F7F4EE] hover:text-[#B69A63]'
                  : 'text-[#20201E] hover:text-[#5A2428]'
              }`}
              aria-label="통합 검색 열기"
            >
              <Search className="w-3.5 h-3.5 text-[#B69A63]" />
              <span className="font-serif-kr">검색</span>
            </button>

            <span className="text-[10px] opacity-30">|</span>

            <button
              onClick={onOpenLogin}
              className={`text-xs font-serif-kr transition-colors px-1 ${
                isLightHeader ? 'text-[#F7F4EE] hover:text-[#B69A63]' : 'text-[#4A463F] hover:text-[#5A2428]'
              }`}
            >
              로그인
            </button>

            <button
              onClick={onOpenLogin}
              className={`text-xs font-serif-kr transition-colors px-1 ${
                isLightHeader ? 'text-[#F7F4EE] hover:text-[#B69A63]' : 'text-[#4A463F] hover:text-[#5A2428]'
              }`}
            >
              회원가입
            </button>

            {/* Representative Email Button from Design Reference */}
            <button
              onClick={onOpenEmailModal}
              className="ml-1 bg-[#64262B] hover:bg-[#4E1C20] text-[#F7F4EE] text-xs px-3 py-1.5 rounded-xs font-serif-kr transition-all flex items-center gap-1.5 shadow-sm border border-[#B69A63]/30 cursor-pointer"
              title="한강성당 대표 이메일: office@hankang.or.kr (클릭 시 문의 모달 열림)"
            >
              <Mail className="w-3.5 h-3.5 text-[#E6C687]" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[9px] text-[#DDD7CC]">성당 대표 메일 안내</span>
                <span className="font-mono text-[10px] font-bold text-[#FDFBF7]">office@hankang.or.kr</span>
              </div>
            </button>
          </div>

          {/* Mobile Right Bar (Search + Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full ${
                isLightHeader ? 'text-[#F7F4EE]' : 'text-[#20201E]'
              }`}
              aria-label="검색"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-md ${
                isLightHeader ? 'text-[#F7F4EE]' : 'text-[#20201E]'
              }`}
              aria-label="전체 메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Large Elegant Mega-Menu Dropdown (Desktop) with Stained Glass Background */}
        {activeMenuId && (
          <div
            className="hidden lg:block absolute top-full inset-x-0 shadow-2xl transition-all duration-300 animate-fadeIn border-b border-[#B69A63]/50 overflow-hidden"
            onMouseEnter={() => handleMouseEnter(activeMenuId)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Authentic Stained Glass Photo */}
            <div
              className="absolute inset-0 bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage: `url('/images/altar_crucifix_stainedglass.jpg')`,
                backgroundPosition: 'center 26%',
              }}
            />

            {/* Sacred Glass Blur & Dark Vignette Overlay for Flawless Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#120E0D]/96 via-[#1B1413]/90 to-[#120E0D]/95 backdrop-blur-md pointer-events-none" />
            <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 py-8">
              {SITE_NAVIGATION.filter((cat) => cat.id === activeMenuId).map((cat) => (
                <div key={cat.id} className="grid grid-cols-12 gap-8">
                  {/* Category Info Column */}
                  <div className="col-span-3 border-r border-white/15 pr-6 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B69A63]/25 border border-[#B69A63]/60 mb-2.5 shadow-sm">
                        <Sparkles className="w-3 h-3 text-[#E6C687]" />
                        <span className="text-[11px] uppercase tracking-widest text-[#E6C687] font-mono font-bold">
                          Category Menu
                        </span>
                      </div>

                      <h3 className="text-3xl font-serif-kr font-bold text-[#FDFBF7] mt-1 mb-2 tracking-tight drop-shadow-md">
                        {cat.title}
                      </h3>

                      <p className="text-xs text-[#DDD7CC] leading-relaxed mb-5 font-serif-kr">
                        천주교 서울대교구 한강성당 공식 정보 안내입니다. 원하시는 세부 항목을 선택하여 열람하실 수 있습니다.
                      </p>

                      {/* Stained Glass Artwork Badge */}
                      <div className="p-3 bg-white/10 rounded-xl border border-white/15 text-[11px] text-[#E0DCD3] backdrop-blur-sm shadow-sm space-y-1 mb-4">
                        <span className="text-[#E6C687] font-bold block">
                          양승준 교수 작 종려나무 스테인드글라스
                        </span>
                        <p className="text-[10px] text-[#C4BFB3] font-serif-kr">
                          부활과 순교 영성을 상징하는 대성전 거룩한 유리화
                        </p>
                      </div>
                    </div>

                    {/* Office Hours Info Card */}
                    <div className="p-3.5 bg-black/50 rounded-xl border border-white/10 text-[11px] text-[#DDD8CE] backdrop-blur-sm">
                      <p className="font-semibold text-[#E6C687]">본당 사무실 안내</p>
                      <p className="font-mono mt-0.5 text-white font-bold text-xs">02-796-1845</p>
                      <p className="mt-0.5 text-[10px] text-[#AAA49A]">화~금 09:00 - 19:00 (월요일 휴무)</p>
                    </div>
                  </div>

                  {/* Submenu Grid */}
                  <div className="col-span-9 grid grid-cols-3 gap-3.5">
                    {cat.subItems.map((sub) => (
                      <div
                        key={sub.id}
                        onClick={() => handleSubItemClick(cat.id, sub.id)}
                        className="group p-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] border border-white/15 hover:border-[#D4AF37] cursor-pointer transition-all shadow-sm hover:shadow-lg backdrop-blur-sm flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-serif-kr text-[15px] font-bold text-[#FDFBF7] group-hover:text-[#F3D99E] transition-colors drop-shadow-xs">
                            {sub.title}
                          </span>
                          <span className="text-xs text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                            →
                          </span>
                        </div>
                        <p className="text-[11px] text-[#C9C4B9] group-hover:text-[#F5F2EB] line-clamp-1 mt-1.5 font-serif-kr transition-colors">
                          {sub.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mega Menu Footer Accent */}
            <div className="relative z-10 bg-black/60 py-2.5 px-8 border-t border-white/10 text-xs text-[#C9C4B9] flex justify-between items-center max-w-7xl mx-auto backdrop-blur-md">
              <span className="font-serif-kr text-[11px] flex items-center gap-1.5 text-[#E6C687]">
                <Sparkles className="w-3 h-3 text-[#B69A63]" />
                <span>주보성인: 성 김대건 안드레아 사제 순교자</span>
              </span>
              <span className="text-[11px] text-[#AAA49A] font-serif-kr">
                서울특별시 용산구 이촌로81길 38 (이촌동) • 한강성당
              </span>
            </div>
          </div>
        )}
      </header>

      {/* True Mobile Responsive Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F7F4EE] shadow-2xl flex flex-col z-10 overflow-y-auto relative">
            {/* Soft Authentic Church Photo in Drawer Background */}
            <div
              className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-15"
              style={{
                backgroundImage: `url('/images/church_exterior.jpg')`,
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-[#F7F4EE]/90 backdrop-blur-[1px] pointer-events-none" />

            {/* Drawer Header */}
            <div className="relative z-10 p-4 border-b border-[#DDD9D0] flex items-center justify-between bg-[#EFECE3]/90 backdrop-blur-xs">
              <ParishLogo
                variant="dark"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToSubpage('home', null);
                }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#20201E] hover:text-[#5A2428] rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="메뉴 닫기"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Accessibility Bar */}
            <div className="relative z-10 px-4 py-2.5 bg-[#E6E1D6]/80 border-b border-[#DDD9D0] flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-medium text-[#635F57]">글자크기:</span>
                <button
                  onClick={() => onChangeFontScale('normal')}
                  className={`px-2 py-1 rounded text-xs min-h-[32px] ${
                    fontScale === 'normal' ? 'bg-[#5A2428] text-white font-bold' : 'bg-white/60'
                  }`}
                >
                  기본
                </button>
                <button
                  onClick={() => onChangeFontScale('large')}
                  className={`px-2 py-1 rounded text-xs min-h-[32px] ${
                    fontScale === 'large' ? 'bg-[#5A2428] text-white font-bold' : 'bg-white/60'
                  }`}
                >
                  크게
                </button>
                <button
                  onClick={() => onChangeFontScale('xlarge')}
                  className={`px-2 py-1 rounded text-xs min-h-[32px] ${
                    fontScale === 'xlarge' ? 'bg-[#5A2428] text-white font-bold' : 'bg-white/60'
                  }`}
                >
                  더크게
                </button>
              </div>

              <button
                onClick={onToggleHighContrast}
                className="px-2 py-1 rounded bg-white/60 text-xs text-[#5A2428] font-medium min-h-[32px] flex items-center gap-1"
              >
                <Eye className="w-3 h-3" />
                {highContrast ? '고대비' : '대비'}
              </button>
            </div>

            {/* Quick Action Buttons for Mobile */}
            <div className="relative z-10 grid grid-cols-2 gap-2 p-3 bg-[#F0ECE2]/90 border-b border-[#DDD9D0]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBulletin();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#5A2428] text-[#F7F4EE] rounded font-serif-kr text-xs font-semibold min-h-[44px]"
              >
                <BookOpen className="w-4 h-4 text-[#B69A63]" />
                이번 주 주보
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#ECE7DC] border border-[#DDD9D0] text-[#20201E] rounded font-serif-kr text-xs font-medium min-h-[44px]"
              >
                <Search className="w-4 h-4 text-[#B69A63]" />
                통합 검색
              </button>
            </div>

            {/* Mobile Navigation List */}
            <div className="relative z-10 flex-1 py-2 divide-y divide-[#E6E1D6]">
              {SITE_NAVIGATION.map((cat) => {
                const isExpanded = mobileExpandedCat === cat.id;
                return (
                  <div key={cat.id} className="px-3 py-1">
                    <button
                      onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                      className="w-full flex items-center justify-between py-3 px-2 text-left font-serif-kr text-[16px] font-semibold text-[#20201E] min-h-[44px]"
                    >
                      <span className={isExpanded ? 'text-[#5A2428]' : ''}>{cat.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#B69A63] transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="relative overflow-hidden pl-3 pr-2 pb-2 space-y-1 rounded-xl my-1.5 py-2.5 border border-[#B69A63]/30 shadow-md">
                        {/* Authentic Stained Glass Photo Background */}
                        <div
                          className="absolute inset-0 bg-cover bg-center pointer-events-none"
                          style={{
                            backgroundImage: `url('/images/altar_crucifix_stainedglass.jpg')`,
                            backgroundPosition: 'center 26%',
                          }}
                        />
                        {/* Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#181211]/92 via-[#1F1716]/90 to-[#181211]/95 backdrop-blur-sm pointer-events-none" />

                        <div className="relative z-10 space-y-1">
                          <div className="px-3 pb-1 mb-1 border-b border-white/10 flex items-center justify-between text-[11px] text-[#E6C687] font-serif-kr">
                            <span className="font-bold flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" />
                              카테고리 세부메뉴
                            </span>
                            <span className="text-[10px] text-[#DDD7CC]">양승준 교수 스테인드글라스</span>
                          </div>
                          {cat.subItems.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleSubItemClick(cat.id, sub.id)}
                              className="w-full text-left py-2 px-3 rounded-lg min-h-[44px] flex flex-col justify-center border-b border-white/10 last:border-0 hover:bg-white/15 transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#FDFBF7] text-sm group-hover:text-[#F3D99E] transition-colors">
                                  {sub.title}
                                </span>
                                <span className="text-xs text-[#D4AF37] opacity-60">→</span>
                              </div>
                              <span className="text-[11px] text-[#C9C4B9] group-hover:text-[#F5F2EB] line-clamp-1 transition-colors">
                                {sub.summary}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Footer Info */}
            <div className="relative z-10 p-4 bg-[#EBE6DB]/90 border-t border-[#DDD9D0] text-xs text-[#635F57] space-y-2 backdrop-blur-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#5A2428]" />
                <span>대표전화: 02-796-1845</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#5A2428]" />
                <span>서울 용산구 이촌로81길 38</span>
              </div>
              <div className="pt-2 text-[11px] text-[#8E8980] border-t border-[#DDD9D0]">
                천주교 서울대교구 한강성당 공식 모바일 웹
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
