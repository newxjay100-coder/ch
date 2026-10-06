import React from 'react';
import { BookOpen, Church, ChevronRight } from 'lucide-react';

export default function TwinBanners({ onNavigateToSubpage, onOpen50thEbook }) {
  return (
    <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Banner 1: 한강본당 50년사 e-Book (Deep Burgundy Theme) */}
        <div
          onClick={onOpen50thEbook || (() => onNavigateToSubpage?.('archive', 'history-archive'))}
          className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-[#8C3A41] min-h-[190px] sm:min-h-[210px] flex flex-col justify-end p-6 sm:p-7 text-[#F7F4EE]"
        >
          {/* Background image & gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/design/banner_50th.jpg"
              alt="한강본당 50년사 1970-2020"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#501E22]/95 via-[#64262B]/85 to-[#64262B]/60" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-[11px] font-mono text-[#E5DECF] mb-2.5">
              <BookOpen className="w-3.5 h-3.5 text-[#B79B67]" />
              <span>1970 - 2020 반세기의 기록</span>
            </div>
            <h3 className="font-serif-kr text-xl sm:text-2xl font-bold tracking-tight text-[#F7F4EE] mb-1.5 drop-shadow-xs">
              한강본당 50년사
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE7DD]/90 font-serif-kr mb-4 max-w-md line-clamp-2">
              주님의 은총 안에서 피어난 50년의 신앙 여정과 공동체의 발자취를 디지털 e-Book으로 바로 열람하실 수 있습니다.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-serif-kr font-bold text-[#F7F4EE] bg-[#B79B67]/30 hover:bg-[#B79B67]/50 px-4 py-2 rounded-lg transition-colors border border-[#B79B67]/50 w-fit">
              <span>디지털 e-Book 열람하기</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Banner 2: 한강성당 안내 ABOUT US (Deep Teal Theme) */}
        <div
          onClick={() => onNavigateToSubpage?.('about', 'intro')}
          className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-[#487371] min-h-[190px] sm:min-h-[210px] flex flex-col justify-end p-6 sm:p-7 text-[#F7F4EE]"
        >
          {/* Background image & gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/design/banner_about.jpg"
              alt="한강성당 안내 ABOUT US"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C4947]/95 via-[#3E6563]/85 to-[#3E6563]/60" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-[11px] font-mono text-[#E5DECF] mb-2.5">
              <Church className="w-3.5 h-3.5 text-[#B79B67]" />
              <span>ABOUT HANGANG CATHOLIC CHURCH</span>
            </div>
            <h3 className="font-serif-kr text-xl sm:text-2xl font-bold tracking-tight text-[#F7F4EE] mb-1.5 drop-shadow-xs">
              한강성당 안내
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE7DD]/90 font-serif-kr mb-4 max-w-md line-clamp-2">
              한강변 신앙의 등대, 주보성인 성 김대건 안드레아 신부님의 영성과 거룩한 예술품이 깃든 본당을 소개합니다.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-serif-kr font-bold text-[#F7F4EE] bg-[#B79B67]/30 hover:bg-[#B79B67]/50 px-4 py-2 rounded-lg transition-colors border border-[#B79B67]/50 w-fit">
              <span>성당 둘러보기 및 연혁</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
