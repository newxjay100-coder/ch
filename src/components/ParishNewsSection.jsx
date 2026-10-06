import React, { useState } from 'react';
import { ChevronRight, FileText, X } from 'lucide-react';

export default function ParishNewsSection({ newsList, onOpenBulletin }) {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [readingNewsItem, setReadingNewsItem] = useState(null);

  const categories = ['전체', '공지사항', '본당 행사', '함께하는 삶'];

  const filteredNews =
    selectedCategory === '전체'
      ? newsList.filter((n) => !n.isBulletin)
      : newsList.filter((item) => !item.isBulletin && item.category === selectedCategory);

  const bulletinItem = newsList.find((n) => n.isBulletin) || newsList[0];

  return (
    <section id="parish-news" className="py-24 md:py-32 church-brick-bg relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#B69A63]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase mb-2 font-bold">
            Announcements & Parish News
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
            본당 소식
          </h2>
          <span className="font-display-en text-xs tracking-widest text-[#8E8980] uppercase mt-1">
            PARISH LIFE & ANNOUNCEMENTS
          </span>
          <div className="w-12 h-0.5 bg-[#B69A63] my-4" />
          <p className="text-sm md:text-base text-[#5C574F] max-w-xl font-serif-kr leading-relaxed">
            하느님 안에서 일치하는 한강성당 공동체의 공지사항과 전례 및 나눔 소식을 전해드립니다.
          </p>
        </div>

        {/* Modern Split Editorial: Left Bulletin Feature + Right Clean News Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Weekly Bulletin Highlight Card with Authentic Altar Background (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col justify-between p-6 sm:p-8 relative group">
            {/* Authentic sanctuary altar photo watermark */}
            <div
              className="absolute inset-0 opacity-[0.045] bg-cover bg-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('/images/altar_crucifix_stainedglass.jpg')` }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#5A2428] bg-[#FAF6EC] border border-[#E8DFCC] px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-2xs">
                  <FileText className="w-3.5 h-3.5 text-[#B69A63]" />
                  <span>이번 주 주보</span>
                </span>
                <span className="text-xs font-mono text-[#8E8980] font-bold">제2584호</span>
              </div>

              <h3 className="font-serif-kr text-2xl font-bold text-[#5A2428] tracking-tight mb-2">
                {bulletinItem?.title || '천주교 서울대교구 한강성당 주보'}
              </h3>
              
              <p className="text-xs font-serif-kr text-[#8E8980] mb-5">
                발행일: {bulletinItem?.date} • 천주교 서울대교구 한강성당
              </p>

              {/* Liturgical Theme / Scripture Snippet */}
              <div className="p-4 bg-[#FCFBF8] rounded-xl border border-stone-200 mb-6 shadow-2xs">
                <span className="text-[10px] font-mono text-[#B69A63] uppercase tracking-wider block mb-1 font-bold">
                  This Week Liturgy
                </span>
                <h4 className="font-serif-kr text-sm font-bold text-[#1A1918] mb-1">
                  연중 제27주일 (복음: 루카 17,5-10)
                </h4>
                <p className="text-xs text-[#5C574F] font-serif-kr italic leading-relaxed">
                  “저희에게 믿음을 더해 주십시오.” 주님께서 이르셨다. “너희에게 겨자씨 한 알만 한 믿음이라도 있다면...”
                </p>
              </div>

              {/* Key Bulletins Brief List */}
              <div className="space-y-2.5 mb-6 text-xs font-serif-kr text-[#4A463F]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2428]" />
                  <span className="font-medium">2027 서울 WYD 젊은이 신앙 도보 성지순례 모집</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2428]" />
                  <span className="font-medium">10월 묵주기도 성월 전신자 매일 묵주기도 5단 바치기</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2428]" />
                  <span className="font-medium">구역·반 모임 일정 및 본당 신자 동정</span>
                </div>
              </div>
            </div>

            {/* Bulletin CTA Button */}
            <div className="pt-4 border-t border-stone-100 relative z-10">
              <button
                onClick={onOpenBulletin}
                className="w-full py-3.5 bg-[#5A2428] hover:bg-[#3E1619] text-white rounded-xl font-serif-kr text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#B69A63]" />
                <span>이번 주 주보 PDF 전문 열람하기</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Editorial News Feed with Church Exterior Background (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Authentic church exterior watermark */}
            <div
              className="absolute right-0 top-0 bottom-0 w-2/3 opacity-[0.03] bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url('/images/church_exterior.jpg')` }}
            />

            <div className="relative z-10">
              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-stone-100 overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-serif-kr transition-all shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-[#5A2428] text-white font-bold shadow-2xs'
                        : 'text-[#5C574F] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* News Items Editorial List */}
              <div className="divide-y divide-stone-100">
                {filteredNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setReadingNewsItem(item)}
                    className="py-4 first:pt-0 last:pb-0 group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:pl-2 transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            item.category === '공지사항'
                              ? 'bg-[#5A2428] text-white'
                              : 'bg-[#FAF6EC] text-[#5A2428]'
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="font-mono text-xs text-[#8E8980]">
                          {item.date}
                        </span>
                      </div>

                      <h4 className="font-serif-kr text-base font-bold text-[#1A1918] group-hover:text-[#5A2428] transition-colors truncate">
                        {item.title}
                      </h4>

                      <p className="text-xs text-[#5C574F] font-serif-kr line-clamp-1 mt-1">
                        {item.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <span className="text-[11px] font-serif-kr text-[#8E8980] hidden sm:inline">
                        {item.author}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#CCC6B8] group-hover:text-[#5A2428] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#8E8980] relative z-10">
              <span className="font-serif-kr">
                총 {filteredNews.length}개의 본당 소식이 등록되어 있습니다.
              </span>
              <span className="font-serif-kr text-[#5A2428] font-medium">
                사목협의회 공지사항 정기 업데이트
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* News Detail Reader Modal */}
      {readingNewsItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF9F6] rounded-2xl border border-stone-200 max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setReadingNewsItem(null)}
              className="absolute top-4 right-4 p-2 text-[#8E8980] hover:text-[#1A1918] rounded-full hover:bg-black/5"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono bg-[#5A2428] text-white px-2.5 py-0.5 rounded-full font-bold">
                {readingNewsItem.category}
              </span>
              <span className="text-xs font-mono text-[#8E8980]">{readingNewsItem.date}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-kr font-bold text-[#1A1918] mb-2 leading-snug">
              {readingNewsItem.title}
            </h3>
            
            <p className="text-xs text-[#8E8980] pb-4 mb-4 border-b border-stone-200 font-serif-kr">
              게시자: {readingNewsItem.author} • 천주교 서울대교구 한강성당
            </p>

            <div className="text-sm font-serif-kr text-[#3E3A33] leading-relaxed whitespace-pre-line mb-6 max-h-[300px] overflow-y-auto">
              {readingNewsItem.content}
            </div>

            <div className="pt-4 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setReadingNewsItem(null)}
                className="px-5 py-2 bg-[#5A2428] text-white rounded-lg text-xs font-serif-kr font-semibold hover:bg-[#3E1619]"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
