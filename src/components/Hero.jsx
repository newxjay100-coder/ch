import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, ChevronRight, ChevronLeft, Sparkles, Cross, Volume2 } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'facade',
    title: '한강성당 정문 아치 및 김대건 신부상',
    imageSrc: '/images/design/hero_full_bg.jpg',
  },
  {
    id: 'sanctuary',
    title: '대성전 제대 및 중앙 십자고상',
    imageSrc: '/images/altar_crucifix_stainedglass.jpg',
  },
  {
    id: 'exterior',
    title: '한강성당 붉은 벽돌 외관 및 종탑',
    imageSrc: '/images/church_exterior.jpg',
  },
];

const LITURGY_CARDS = [
  {
    id: 'gospel',
    badge: '오늘의 말씀',
    date: '2026. 10. 04. 연중 제27주일',
    image: '/images/design/gospel_art.jpg',
    citation: '루카 17, 5-10',
    quote: '“너희에게 겨자씨 한 알만 한 믿음이라도 있다면, 이 돌무화과나무더러 ‘뽑혀서 바다에 심겨라.’ 하더라도 그대로 따를 것이다.”',
    reflection: '작은 믿음 하나로도 하느님의 놀라운 섭리가 시작됩니다. 오늘 하루 주님 안에서 겸손히 내어맡기는 은총을 청합니다.',
    linkText: '오늘의 복음 전문 및 묵상',
    actionType: 'bulletin',
  },
  {
    id: 'liturgy',
    badge: '오늘의 전례',
    date: '가해 연중 제27주일 (군인주일)',
    image: '/images/altar_crucifix_stainedglass.jpg',
    citation: '제1독서 하바 1,2-3; 2,2-4 | 제2독서 2티모 1,6-8.13-14',
    quote: '“의인은 성실함으로 살리라.” (하바 2,4)',
    reflection: '국방의 의무를 다하고 있는 군인 장병들과 군종 사제들을 위해 기도하며, 그리스도의 사랑을 온 세상에 전하는 날입니다.',
    linkText: '주일 전례 안내 보기',
    actionType: 'mass',
  },
  {
    id: 'news',
    badge: '본당 주요 안내',
    date: '2026년 10월 묵주기도성월',
    image: '/images/design/card_mary_statue.jpg',
    citation: '성모동산 묵주기도 및 전교의 달',
    quote: '“평화의 어머니이신 복되신 동정 마리아님, 본당 공동체와 세상을 위하여 빌어주소서.”',
    reflection: '10월 묵주기도성월을 맞아 매일 저녁 성모동산에서 바치는 묵주기도와 전교 활동에 교우 여러분의 많은 참례 바랍니다.',
    linkText: '본당 공지사항 바로가기',
    actionType: 'notice',
  },
];

export default function Hero({ onScrollToSchedule, onOpenBulletin, onNavigateToSubpage }) {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [cardIdx, setCardIdx] = useState(0);

  // Background slide slow change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentCard = LITURGY_CARDS[cardIdx];

  const handlePrevCard = () => {
    setCardIdx((prev) => (prev === 0 ? LITURGY_CARDS.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setCardIdx((prev) => (prev + 1) % LITURGY_CARDS.length);
  };

  const handleCardCta = () => {
    if (currentCard.actionType === 'mass') {
      onScrollToSchedule?.();
    } else if (currentCard.actionType === 'bulletin') {
      onOpenBulletin?.();
    } else if (currentCard.actionType === 'notice') {
      onNavigateToSubpage?.('about', 'notices');
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#161413] text-[#F7F4EE]">
      {/* 01 Real Architectural Background Photos */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlideIdx === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.imageSrc}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transform duration-[10000ms] ease-out brightness-[0.88]"
            />
          </div>
        ))}

        {/* Sacred Multi-layer Deep Vignette & Ivory Mist for Premium Editorial Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141211]/92 via-[#141211]/80 to-[#141211]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-transparent to-[#141211]/60" />
      </div>

      {/* 02 Content Grid: Left Scripture & Identity | Right Floating Word Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Scripture Message & Catholic Church Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#B79B67]/50 bg-black/45 text-[#EDE7DD] text-xs font-serif-kr tracking-wide mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B79B67] animate-pulse" />
              <span>천주교 서울대교구</span>
              <span className="text-[#8E8980]">·</span>
              <span>제1 중구-용산지구 지구좌성당</span>
            </div>

            {/* Main Scripture Verse Quote (from Design Reference) */}
            <div className="space-y-2 mb-8">
              <p className="font-serif-kr text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#F7F4EE] leading-[1.38] tracking-tight drop-shadow-md">
                “너희가 나를 부르고<br />
                나에게 기도하면<br />
                너희 기도를 들어주겠다.”
              </p>
              <p className="font-serif-kr text-base sm:text-lg text-[#B79B67] font-medium tracking-wide pt-1">
                — 예레미야 29, 12
              </p>
            </div>

            {/* Parish Identity */}
            <div className="border-l-2 border-[#B79B67]/60 pl-4 mb-8">
              <h1 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#F7F4EE] tracking-tight mb-1">
                천주교 서울대교구 한강성당
              </h1>
              <p className="font-display-en text-sm tracking-[0.2em] text-[#EDE7DD]/80 uppercase">
                HANGANG CATHOLIC CHURCH
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onScrollToSchedule}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#64262B] hover:bg-[#501E22] text-[#F7F4EE] text-sm font-serif-kr font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all border border-[#B79B67]/40 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-[#B79B67]" />
                <span>오늘의 미사 시간표</span>
              </button>

              <button
                onClick={onOpenBulletin}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#F7F4EE] text-sm font-serif-kr font-medium rounded-lg backdrop-blur-md transition-all border border-white/25 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#B79B67]" />
                <span>이번 주 주보 읽기</span>
              </button>
            </div>

            {/* Slide Indicator Dots for Background Photos */}
            <div className="flex items-center gap-2 mt-10">
              <span className="text-[11px] text-[#A8A29E] font-serif-kr">배경 성전:</span>
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlideIdx(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentSlideIdx === idx ? 'w-6 bg-[#B79B67]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`배경 전환: ${s.title}`}
                  title={s.title}
                />
              ))}
              <span className="text-[11px] text-[#B79B67] font-mono ml-2">
                {HERO_SLIDES[currentSlideIdx].title}
              </span>
            </div>
          </div>

          {/* Right Column: Floating Liturgy / Word Card (Matching Reference Design) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#FAF8F5] text-[#232220] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#E5DECF] overflow-hidden transition-all duration-300">
              
              {/* Card Header Bar */}
              <div className="bg-[#64262B] px-5 py-3.5 flex items-center justify-between text-[#F7F4EE]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B79B67]" />
                  <span className="text-xs font-serif-kr font-bold tracking-wider uppercase text-[#F7F4EE]">
                    {currentCard.badge}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevCard}
                    className="p-1 rounded hover:bg-white/15 transition-colors cursor-pointer"
                    aria-label="이전 카드"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono text-[#D5CEBF]">
                    {cardIdx + 1} / {LITURGY_CARDS.length}
                  </span>
                  <button
                    onClick={handleNextCard}
                    className="p-1 rounded hover:bg-white/15 transition-colors cursor-pointer"
                    aria-label="다음 카드"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                {/* Liturgical Artwork Thumbnail & Citation */}
                <div className="flex gap-4 items-center mb-4 pb-4 border-b border-[#EDE7DD]">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[#D5CEBF] shadow-xs">
                    <img
                      src={currentCard.image}
                      alt={currentCard.badge}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="inline-block text-[11px] font-medium text-[#64262B] bg-[#64262B]/8 px-2 py-0.5 rounded-md mb-1 font-mono">
                      {currentCard.date}
                    </span>
                    <h3 className="font-serif-kr font-bold text-base text-[#232220] leading-snug">
                      {currentCard.citation}
                    </h3>
                  </div>
                </div>

                {/* Gospel Quote */}
                <blockquote className="font-serif-kr text-sm text-[#38332E] italic leading-relaxed mb-3 bg-[#F4EFE6] p-3.5 rounded-xl border-l-3 border-[#64262B]">
                  {currentCard.quote}
                </blockquote>

                {/* Reflection summary */}
                <p className="text-xs text-[#6B655D] font-serif-kr leading-relaxed line-clamp-2 mb-4">
                  {currentCard.reflection}
                </p>

                {/* CTA Action Link */}
                <button
                  onClick={handleCardCta}
                  className="w-full py-2.5 px-4 bg-[#EDE7DD] hover:bg-[#64262B] text-[#64262B] hover:text-[#F7F4EE] rounded-xl text-xs font-serif-kr font-semibold flex items-center justify-between transition-colors group cursor-pointer"
                >
                  <span>{currentCard.linkText}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Bottom Quick Links within Card */}
              <div className="bg-[#F0EBE1] px-5 py-2.5 flex items-center justify-around border-t border-[#E5DECF] text-[11px] font-serif-kr text-[#6B655D]">
                <button
                  onClick={() => setCardIdx(0)}
                  className={`hover:text-[#64262B] transition-colors ${cardIdx === 0 ? 'font-bold text-[#64262B]' : ''}`}
                >
                  오늘의 복음
                </button>
                <span>•</span>
                <button
                  onClick={() => setCardIdx(1)}
                  className={`hover:text-[#64262B] transition-colors ${cardIdx === 1 ? 'font-bold text-[#64262B]' : ''}`}
                >
                  전례 안내
                </button>
                <span>•</span>
                <button
                  onClick={() => setCardIdx(2)}
                  className={`hover:text-[#64262B] transition-colors ${cardIdx === 2 ? 'font-bold text-[#64262B]' : ''}`}
                >
                  주요 소식
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
