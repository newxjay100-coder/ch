import React, { useState } from 'react';
import { SACRED_ART_WORKS } from '../data/parishData';
import { Eye, MapPin, Sparkles, User, ZoomIn, X, ChevronRight, ChevronLeft } from 'lucide-react';

export default function SacredArtSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeArt = SACRED_ART_WORKS[activeIndex] || SACRED_ART_WORKS[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SACRED_ART_WORKS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SACRED_ART_WORKS.length) % SACRED_ART_WORKS.length);
  };

  return (
    <section id="sacred-art" className="py-24 md:py-32 bg-white text-[#1A1918] relative overflow-hidden">
      {/* Background Soft Golden Light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#B69A63]/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#5A2428]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase mb-2 font-bold">
            Sanctuary Sacred Art & Editorial Gallery
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
            한강성당의 성미술
          </h2>
          <span className="font-display-en text-xs tracking-widest text-[#8E8980] uppercase mt-1">
            SACRED ART OF HANGANG PARISH
          </span>
          <div className="w-12 h-0.5 bg-[#B69A63] my-4" />
          <p className="text-sm md:text-base text-[#5C574F] max-w-2xl font-serif-kr leading-relaxed">
            한국 현대 가톨릭 미술의 거장 <strong>최종태(요셉)</strong> 작가, 
            <strong>최봉자(레지나)</strong> 수녀, <strong>양승준</strong> 교수의 숨결이 깃든 
            거룩하고 아름다운 성미술품들을 소개합니다.
          </p>
        </div>

        {/* Minimalist 5-Item Navigation Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {SACRED_ART_WORKS.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-serif-kr transition-all shrink-0 border ${
                  isCurrent
                    ? 'bg-[#5A2428] text-white border-[#5A2428] shadow-sm font-bold'
                    : 'bg-[#FAF9F6] text-[#5C574F] border-stone-200 hover:bg-white hover:text-[#1A1918] hover:border-[#CCC6B8]'
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${
                    isCurrent ? 'text-[#B69A63]' : 'text-[#8E8980] group-hover:text-[#5A2428]'
                  }`}
                >
                  0{idx + 1}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Masterpiece Showcase: Modern Split View */}
        <div className="bg-[#FAF9F6] rounded-2xl border border-stone-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left: High-Resolution Photo Display (7 Cols) */}
          <div className="lg:col-span-7 relative bg-[#141211] flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden group">
            {activeArt.imageSrc ? (
              <img
                src={activeArt.imageSrc}
                alt={activeArt.title}
                className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover:scale-102"
              />
            ) : (
              <div className="text-center p-8 text-[#A8A297]">
                <p className="font-mono text-xs tracking-wider uppercase mb-1">Hangang Church Official Photo Required</p>
                <p className="font-serif-kr text-sm">{activeArt.title} 사진 등록 대기</p>
              </div>
            )}

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Badges on Top */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-black/70 backdrop-blur-md text-[#F7F4EE] text-[11px] font-mono px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#B69A63]" />
                <span>실제 한강성당 소장 작품</span>
              </span>
              <span className="bg-[#B69A63] text-black text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                {activeArt.category}
              </span>
            </div>

            {/* Zoom Action on Bottom Left */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-4 left-4 bg-white/95 hover:bg-white text-[#1A1918] px-3.5 py-1.5 rounded-full text-xs font-serif-kr flex items-center gap-1.5 shadow-md transition-all backdrop-blur-xs font-semibold"
            >
              <ZoomIn className="w-3.5 h-3.5 text-[#5A2428]" />
              <span>크게 보기 및 묵상</span>
            </button>

            {/* Prev / Next Arrows */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="이전 작품"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1A1918] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="다음 작품"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1A1918] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Curatorial Editorial Commentary (5 Cols) with Subtle Artwork Watermark */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white relative overflow-hidden">
            {/* Subtle authentic artwork watermark in background */}
            {activeArt.imageSrc && (
              <div
                className="absolute right-0 bottom-0 w-3/4 h-3/4 opacity-[0.035] bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url('${activeArt.imageSrc}')` }}
              />
            )}

            <div className="relative z-10">
              {/* Metadata strip */}
              <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                <span className="font-mono text-[#B69A63] font-bold">
                  NO. 0{activeIndex + 1}
                </span>
                <span className="text-[#CCC6B8]">•</span>
                <span className="font-serif-kr text-[#5A2428] font-bold flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#B69A63]" />
                  작가: {activeArt.artist}
                </span>
                <span className="text-[#CCC6B8]">•</span>
                <span className="font-serif-kr text-[#736E65] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B69A63]" />
                  {activeArt.location}
                </span>
              </div>

              {/* Title & English Subtitle */}
              <h3 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#5A2428] tracking-tight mb-1">
                {activeArt.title}
              </h3>
              <span className="font-display-en text-xs text-[#8E8980] tracking-wider uppercase block mb-6">
                {activeArt.titleEn}
              </span>

              {/* Description Body */}
              <p className="font-serif-kr text-sm sm:text-base text-[#4A463F] leading-relaxed mb-6 whitespace-pre-line">
                {activeArt.description}
              </p>

              {/* Scripture Reflection Card */}
              <div className="p-4 bg-[#FCFBF8] rounded-xl border-l-3 border-[#B69A63] mb-6 shadow-2xs border border-stone-200/80">
                <span className="text-[10px] font-mono text-[#8E8980] uppercase tracking-wider block mb-1">
                  Scripture & Spiritual Meditation
                </span>
                <p className="font-serif-kr text-xs sm:text-sm text-[#5A2428] italic font-medium">
                  {activeArt.scripture}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between relative z-10">
              <span className="text-xs text-[#8E8980] font-serif-kr">
                총 5대 성미술품 중 0{activeIndex + 1}번째
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1 text-xs font-serif-kr font-bold text-[#5A2428] hover:text-[#B69A63] transition-colors"
              >
                <span>상세 해설 전문 보기</span>
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Carousel Strip for Instant Navigation */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SACRED_ART_WORKS.map((art, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={art.id}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'bg-white border-[#5A2428] shadow-xs ring-1 ring-[#5A2428]'
                    : 'bg-[#FAF9F6] border-stone-200 hover:bg-white hover:border-[#CCC6B8]'
                }`}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#1C1A18] shrink-0">
                  {art.imageSrc ? (
                    <img src={art.imageSrc} alt={art.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[9px] text-[#A8A297]">
                      사진
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <span className="block font-serif-kr text-xs font-bold text-[#1A1918] truncate">
                    {art.title}
                  </span>
                  <span className="block font-serif-kr text-[11px] text-[#736E65] truncate">
                    {art.artist}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Art Detail & Meditation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF9F6] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative border border-stone-200 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#8E8980] hover:text-[#1A1918] rounded-full hover:bg-black/5"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {activeArt.imageSrc && (
              <div className="rounded-xl overflow-hidden bg-[#1C1A18] mb-6 max-h-[380px] flex items-center justify-center shadow-inner">
                <img
                  src={activeArt.imageSrc}
                  alt={activeArt.title}
                  className="w-full h-full object-contain max-h-[380px]"
                />
              </div>
            )}

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#B69A63] bg-[#FAF6EC] px-2.5 py-0.5 rounded-full">
                {activeArt.category}
              </span>
              <span className="text-xs font-serif-kr text-[#5A2428] font-bold">
                작가: {activeArt.artist}
              </span>
              <span className="text-xs text-[#8E8980]">| {activeArt.location}</span>
            </div>

            <h3 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#5A2428] mb-1">
              {activeArt.title}
            </h3>
            <span className="font-display-en text-xs text-[#8E8980] uppercase tracking-wider block mb-4">
              {activeArt.titleEn}
            </span>

            <div className="p-4 bg-[#FCFBF8] rounded-xl border-l-3 border-[#5A2428] mb-4 border border-stone-200">
              <p className="font-serif-kr text-xs sm:text-sm text-[#5A2428] italic font-medium leading-relaxed">
                {activeArt.scripture}
              </p>
            </div>

            <div className="space-y-4 font-serif-kr text-sm text-[#3E3A33] leading-relaxed">
              <p>{activeArt.description}</p>
              <div className="pt-3 border-t border-stone-200 text-xs text-[#736E65]">
                <strong>성미술품 보존 및 촬영 안내:</strong> 한강성당의 성미술품은 서울대교구와 본당 공동체의 소중한 신앙 유산입니다. 전례 중에는 임의 촬영이 제한됩니다.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 bg-[#5A2428] text-white rounded-lg text-xs font-serif-kr font-semibold hover:bg-[#3E1619] transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
