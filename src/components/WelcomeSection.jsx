import React from 'react';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function WelcomeSection({ onNavigateToIntro, onNavigateToNewcomer }) {
  return (
    <section className="py-24 md:py-32 church-brick-bg border-y border-stone-200/80 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#B69A63]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Authentic Photograph Slot (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-[#1C1A18] relative aspect-[4/5]">
              <img
                src="/images/church_exterior.jpg"
                alt="한강성당 붉은 벽돌 본당 성전 외관"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />
              
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#F7F4EE] font-mono border border-white/20 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#B69A63]" />
                <span>한강성당 본당 외관 실물 사진</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-[#B69A63] tracking-widest uppercase block mb-1 font-semibold">
                  Consecrated in 1990
                </span>
                <p className="font-serif-kr text-xs text-[#E5DFD5]">
                  이촌로81길에 자리한 붉은 벽돌의 단아하고 성스러운 성전
                </p>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 -right-2 hidden sm:block bg-[#5A2428] text-white p-4 rounded-xl shadow-xl border border-[#B69A63]/30 max-w-[200px]">
              <span className="font-mono text-[10px] text-[#B69A63] tracking-widest block uppercase font-bold">
                EST. 1970
              </span>
              <p className="font-serif-kr text-xs font-bold mt-1 leading-snug">
                반세기를 이어온 한강변 신앙의 등대
              </p>
            </div>
          </div>

          {/* Editorial Welcome Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase block mb-2 font-bold">
                Welcome to Hangang Parish
              </span>
              <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight leading-tight">
                한강성당에 오신 것을<br />환영합니다
              </h2>
            </div>

            <p className="font-serif-kr text-base sm:text-lg text-[#3E3A33] leading-relaxed">
              천주교 서울대교구 한강성당은 1970년 설립되어 이촌동 한강변에 자리한 이래, 
              한국인 최초의 사제이자 순교자인 <strong className="text-[#5A2428] font-bold">성 김대건 안드레아</strong> 신부님의 
              순교 영성을 이어받아 주님의 사랑과 복음을 증거해 왔습니다.
            </p>

            {/* Parish Priest Quote with Subtle Church Watermark Background */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs relative overflow-hidden">
              <div
                className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.035] bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url('/images/church_exterior.jpg')` }}
              />

              <p className="text-xs sm:text-sm text-[#4E4A43] leading-relaxed italic font-serif-kr whitespace-pre-line relative z-10">
                “성전의 문을 열고 들어서는 모든 이들이 고요함 속에서 하느님의 위로를 만나고, 
                서로를 보듬는 따뜻한 신앙 공동체로 걸어갈 수 있기를 기도합니다.”
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 relative z-10">
                <span className="text-xs font-serif-kr font-bold text-[#5A2428]">
                  주임신부 임용환 (엘리야)
                </span>
                <span className="text-[11px] text-[#8E8980] font-serif-kr">
                  천주교 서울대교구 제1 중구-용산지구 지구좌
                </span>
              </div>
            </div>

            {/* Parish Identity 3 Pillars with Subtle Church Entrance Watermarks */}
            <div className="grid grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 bg-white border border-stone-200 rounded-xl text-center relative overflow-hidden shadow-2xs">
                <div
                  className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url('/images/church_entrance.jpg')` }}
                />
                <span className="font-mono text-xl sm:text-2xl font-bold text-[#5A2428] block relative z-10">
                  1970
                </span>
                <span className="text-[11px] text-[#5C574F] font-serif-kr relative z-10">본당 설립 연도</span>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-xl text-center relative overflow-hidden shadow-2xs">
                <div
                  className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url('/images/church_exterior.jpg')` }}
                />
                <span className="font-serif-kr text-base sm:text-lg font-bold text-[#5A2428] block relative z-10">
                  제1지구좌
                </span>
                <span className="text-[11px] text-[#5C574F] font-serif-kr relative z-10">서울 중구-용산</span>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-xl text-center relative overflow-hidden shadow-2xs">
                <div
                  className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
                  style={{ backgroundImage: `url('/images/statue_kim_taegon.jpg')` }}
                />
                <span className="font-serif-kr text-base sm:text-lg font-bold text-[#5A2428] block relative z-10">
                  김대건 성인
                </span>
                <span className="text-[11px] text-[#5C574F] font-serif-kr relative z-10">본당 주보성인</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={onNavigateToIntro}
                className="px-6 py-3.5 bg-[#5A2428] hover:bg-[#3E1619] text-white rounded-xl font-serif-kr text-sm font-semibold tracking-wide transition-all shadow-xs flex items-center gap-2"
              >
                <span>한강성당 알아보기</span>
                <ChevronRight className="w-4 h-4 text-[#B69A63]" />
              </button>

              <button
                onClick={onNavigateToNewcomer}
                className="px-6 py-3.5 bg-white hover:bg-[#FAF9F6] text-[#1A1918] border border-stone-200 rounded-xl font-serif-kr text-sm font-medium tracking-wide transition-all flex items-center gap-2 shadow-2xs"
              >
                <span>처음 오시는 분 안내</span>
                <ArrowRight className="w-4 h-4 text-[#8E8980]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
