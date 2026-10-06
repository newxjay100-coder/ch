import React, { useState } from 'react';
import { HISTORY_TIMELINE } from '../data/parishData';
import { Milestone, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

export default function HistoryTimeline() {
  const [selectedIndex, setSelectedIndex] = useState(3); // Default to 1990 (현 성전 축성)

  const selectedMilestone = HISTORY_TIMELINE[selectedIndex] || HISTORY_TIMELINE[0];

  // 1990년 현 성전 축성 등 실제 역사 사진 매핑
  const getImageForMilestone = (year) => {
    if (year === '1990') {
      return {
        src: '/images/church_exterior.jpg',
        caption: '1990년 축성된 한강성당 붉은 벽돌 성전 외관 전경',
        isReal: true,
      };
    }
    if (year === '2020') {
      return {
        src: '/images/altar_crucifix_stainedglass.jpg',
        caption: '한강본당 50주년 기념 감사미사가 봉헌된 대성전 제대',
        isReal: true,
      };
    }
    if (year === '2027') {
      return {
        src: '/images/church_entrance.jpg',
        caption: '2027 서울 WYD 세계청년대회를 맞이하는 한강성당 입구',
        isReal: true,
      };
    }
    return null;
  };

  const currentImageInfo = getImageForMilestone(selectedMilestone.year);

  return (
    <section id="history" className="py-24 md:py-32 church-brick-bg border-t border-stone-200/80 relative overflow-hidden">
      {/* Background Soft Aura */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#B69A63]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase mb-2 font-bold">
            50+ Years of Sacred Heritage & Grace
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
            한강본당 반세기의 발자취
          </h2>
          <span className="font-display-en text-xs tracking-widest text-[#8E8980] uppercase mt-1">
            PARISH HISTORY (1970 – PRESENT)
          </span>
          <div className="w-12 h-0.5 bg-[#B69A63] my-4" />
          <p className="text-sm md:text-base text-[#5C574F] max-w-xl font-serif-kr leading-relaxed">
            1970년 한강변 이촌동에 뿌리내린 이래, 
            성 김대건 안드레아 사제 순교자의 신앙을 본받아 걸어온 50여 년 은총의 역사입니다.
          </p>
        </div>

        {/* Minimalist Horizontal Scrubber Track */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          {/* Subtle Horizontal Connecting Rail */}
          <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-stone-200 -translate-y-1/2 hidden md:block" />

          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none relative">
            {HISTORY_TIMELINE.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.year + idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group relative flex flex-col items-center shrink-0 px-3 py-2 transition-all focus:outline-none`}
                >
                  <span
                    className={`font-mono text-base sm:text-lg transition-colors ${
                      isSelected
                        ? 'font-bold text-[#5A2428]'
                        : 'text-[#8E8980] group-hover:text-[#1A1918]'
                    }`}
                  >
                    {item.year}
                  </span>

                  {/* Scrubber Pin Node */}
                  <span
                    className={`w-3.5 h-3.5 rounded-full my-2 transition-all border-2 ${
                      isSelected
                        ? 'bg-[#B69A63] border-[#5A2428] scale-125 shadow-xs'
                        : 'bg-white border-[#CCC6B8] group-hover:border-[#5A2428]'
                    }`}
                  />

                  <span
                    className={`text-[11px] font-serif-kr transition-colors max-w-[80px] text-center truncate ${
                      isSelected ? 'font-bold text-[#5A2428]' : 'text-[#8E8980]'
                    }`}
                  >
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Magazine Feature */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Historical Photography or Authentic Record (5 Cols) */}
          <div className="lg:col-span-5 bg-[#141211] relative min-h-[300px] sm:min-h-[360px] flex items-center justify-center overflow-hidden group">
            {currentImageInfo?.src ? (
              <>
                <img
                  src={currentImageInfo.src}
                  alt={currentImageInfo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#F7F4EE] font-mono border border-white/20 flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#B69A63]" />
                  <span>실제 본당 사진 기록</span>
                </div>
                <div className="absolute bottom-3.5 left-4 right-4 text-white text-xs font-serif-kr">
                  {currentImageInfo.caption}
                </div>
              </>
            ) : (
              <div className="text-center p-6 text-[#A8A297] border border-white/10 m-6 rounded-xl bg-white/5">
                <span className="font-mono text-[10px] tracking-widest uppercase block text-[#B69A63] mb-1 font-bold">
                  Hangang Church Official Archive
                </span>
                <p className="font-serif-kr text-xs text-[#E8E2D5] font-bold">
                  {selectedMilestone.year}년 사료 사진 아카이브
                </p>
                <p className="text-[11px] text-[#8E8980] mt-1 font-serif-kr">
                  『천주교 한강본당 50년사』 공식 사료 보관본
                </p>
              </div>
            )}
          </div>

          {/* Right: Milestone Editorial Narrative (7 Cols) with Subtle Church Watermark */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white relative overflow-hidden">
            {/* Subtle church watermark in background */}
            <div
              className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-[0.035] bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url('/images/church_exterior.jpg')` }}
            />

            <div className="relative z-10">
              {/* Year & Date Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-[#5A2428]">
                  {selectedMilestone.year}
                </span>
                <div className="h-6 w-px bg-stone-200" />
                <span className="text-xs font-serif-kr text-[#8E8980]">
                  {selectedMilestone.date}
                </span>
                <span className="text-xs bg-[#FAF6EC] border border-[#E8DFCC] text-[#5A2428] font-bold px-3 py-0.5 rounded-full font-serif-kr shadow-2xs">
                  {selectedMilestone.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#1A1918] tracking-tight mb-4">
                {selectedMilestone.title}
              </h3>

              {/* Description Body */}
              <p className="font-serif-kr text-sm sm:text-base text-[#4A463F] leading-relaxed mb-6">
                {selectedMilestone.desc}
              </p>
            </div>

            {/* Bottom Meta & Navigation */}
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-xs relative z-10">
              <span className="text-[#8E8980] flex items-center gap-1 font-serif-kr">
                <Milestone className="w-3.5 h-3.5 text-[#B69A63]" />
                『천주교 한강본당 50년사』 공식 사료 기준
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSelectedIndex((prev) => Math.max(0, prev - 1))}
                  disabled={selectedIndex === 0}
                  className="p-1.5 rounded-md text-[#736E65] hover:text-[#1A1918] hover:bg-stone-50 disabled:opacity-30 disabled:hover:text-[#736E65]"
                  aria-label="이전 연혁"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs text-[#8E8980] px-1 font-bold">
                  {selectedIndex + 1} / {HISTORY_TIMELINE.length}
                </span>
                <button
                  onClick={() => setSelectedIndex((prev) => Math.min(HISTORY_TIMELINE.length - 1, prev + 1))}
                  disabled={selectedIndex === HISTORY_TIMELINE.length - 1}
                  className="p-1.5 rounded-md text-[#736E65] hover:text-[#1A1918] hover:bg-stone-50 disabled:opacity-30 disabled:hover:text-[#736E65]"
                  aria-label="다음 연혁"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
