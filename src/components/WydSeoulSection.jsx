import React from 'react';
import { WYD_INFO } from '../data/parishData';
import { Sparkles, Globe, ChevronRight } from 'lucide-react';

export default function WydSeoulSection({ onOpenWydDetail }) {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] text-[#1A1918] relative overflow-hidden border-t border-stone-200">
      {/* Background Authentic Church Photography Watermark (Kim Taegon Statue & Church Entrance) */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.055] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/images/statue_kim_taegon.jpg')` }}
      />
      <div
        className="absolute left-0 bottom-0 w-1/3 h-1/2 opacity-[0.035] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/images/church_entrance.jpg')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 rounded-full border border-[#B69A63]/50 text-xs font-mono tracking-wider text-[#5A2428] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B69A63]" />
              <span className="font-bold">WYD SEOUL 2027 • OFFICIAL PARISH INITIATIVE</span>
            </div>

            <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#5A2428] leading-tight">
              2027 서울 세계청년대회
            </h2>

            {/* Theme Card with Authentic Watermark Background */}
            <div className="bg-white/90 p-6 rounded-2xl border border-[#E0D7C6] border-l-4 border-l-[#B69A63] shadow-xs relative overflow-hidden">
              <div
                className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url('/images/statue_kim_taegon.jpg')` }}
              />
              <p className="font-serif-kr text-lg sm:text-xl text-[#1A1918] font-bold italic relative z-10">
                {WYD_INFO.themeKorean}
              </p>
              <p className="font-display-en text-sm text-[#B69A63] mt-1 tracking-wider font-semibold relative z-10">
                {WYD_INFO.themeLatin} — {WYD_INFO.citation}
              </p>
            </div>

            <p className="font-serif-kr text-sm sm:text-base text-[#4E4A42] leading-relaxed">
              천주교 서울대교구 한강성당은 <strong>제1 중구-용산지구 지구좌성당</strong>으로서, 
              주보성인 성 김대건 안드레아 사제의 순교지인 새남터 성지와 함께 
              전 세계에서 서울을 찾는 수십만 가톨릭 청년 순례자들을 맞이할 준비를 함께하고 있습니다.
            </p>

            {/* Prep Points Grid with Real Church Background */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {WYD_INFO.prepPoints.map((point, idx) => (
                <div key={idx} className="bg-white/90 border border-stone-200/90 p-4 rounded-xl shadow-2xs relative overflow-hidden">
                  <div
                    className="absolute right-0 bottom-0 w-12 h-12 opacity-[0.04] bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: `url('/images/church_entrance.jpg')` }}
                  />
                  <h4 className="font-serif-kr text-xs font-bold text-[#5A2428] mb-1 relative z-10">
                    {point.title}
                  </h4>
                  <p className="text-[11px] text-[#5C574F] line-clamp-3 leading-relaxed font-serif-kr relative z-10">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenWydDetail}
                className="px-6 py-3.5 bg-[#5A2428] hover:bg-[#3E1619] text-white rounded-xl font-serif-kr text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md flex items-center gap-2"
              >
                <span>한강성당 WYD 서포터즈 참여 안내</span>
                <ChevronRight className="w-4 h-4 text-[#B69A63]" />
              </button>
            </div>
          </div>

          {/* Right Insignia Presentation: Luminous White Card with Real Church Image */}
          <div className="lg:col-span-5 bg-white/95 border border-[#DFD5C2] rounded-2xl p-8 text-center shadow-sm flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden">
            {/* Subtle Statue Watermark */}
            <div
              className="absolute inset-0 opacity-[0.045] bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url('/images/statue_kim_taegon.jpg')` }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Sacred WYD Seoul Stylized Emblem */}
              <div className="w-24 h-24 rounded-full border-2 border-[#B69A63] p-1.5 flex items-center justify-center mb-5 bg-[#FAF8F5] shadow-sm">
                <div className="w-full h-full rounded-full border border-[#DFD8CB] flex flex-col items-center justify-center bg-white">
                  <Globe className="w-8 h-8 text-[#5A2428] mb-1" />
                  <span className="font-mono text-[9px] tracking-widest text-[#5A2428] font-bold">SEOUL 2027</span>
                </div>
              </div>

              <h3 className="font-serif-kr text-xl font-bold text-[#1A1918] mb-1">
                청년들의 신앙 여정에 함께합니다
              </h3>
              <span className="text-xs text-[#B69A63] font-display-en tracking-widest uppercase mb-4 font-bold">
                Pilgrims of Hope & Courage
              </span>

              <p className="text-xs text-[#5C574F] leading-relaxed max-w-xs mb-6 font-serif-kr">
                본당 청년 서포터즈, 해외 순례단 홈스테이 호스트 가정, 
                다국어 전례 통역 봉사자 신청을 받고 있습니다.
              </p>

              <div className="inline-flex items-center gap-1.5 text-xs text-[#5A2428] font-mono border-t border-stone-100 pt-3.5 w-full justify-center font-semibold">
                <span>문의: 본당 청소년청년사목부 (02-796-1845)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
