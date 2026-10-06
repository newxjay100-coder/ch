import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, Clock, BookOpen, Heart, FileText, Users, MapPin } from 'lucide-react';
import { SITE_NAVIGATION, INITIAL_MASS_SCHEDULE, INITIAL_PARISH_NEWS, SACRED_ART_WORKS } from '../data/parishData';

export default function SearchModal({
  isOpen,
  onClose,
  onNavigateToSubpage,
  onOpenBulletin,
  onScrollToMass,
  onScrollToLocation,
}) {
  const [query, setQuery] = useState('');

  // Index search data
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const results = [];

    // 1. Search site navigation
    SITE_NAVIGATION.forEach((cat) => {
      cat.subItems.forEach((sub) => {
        if (sub.title.toLowerCase().includes(q) || sub.summary.toLowerCase().includes(q)) {
          results.push({
            type: '메뉴 / 안내',
            title: `${cat.title} > ${sub.title}`,
            desc: sub.summary,
            icon: FileText,
            action: () => {
              onNavigateToSubpage(cat.id, sub.id);
              onClose();
            },
          });
        }
      });
    });

    // 2. Search mass schedules
    INITIAL_MASS_SCHEDULE.sunday.forEach((slot) => {
      if (slot.title.toLowerCase().includes(q) || slot.time.includes(q) || slot.target.toLowerCase().includes(q)) {
        results.push({
          type: '미사 안내',
          title: `주일 ${slot.title} (${slot.time})`,
          desc: `${slot.location} • ${slot.target}`,
          icon: Clock,
          action: () => {
            onScrollToMass();
            onClose();
          },
        });
      }
    });

    // 3. Search parish news
    INITIAL_PARISH_NEWS.forEach((item) => {
      if (item.title.toLowerCase().includes(q) || item.content.toLowerCase().includes(q)) {
        results.push({
          type: item.category,
          title: item.title,
          desc: item.content.slice(0, 80) + '...',
          icon: BookOpen,
          action: () => {
            if (item.isBulletin) {
              onOpenBulletin();
            } else {
              onNavigateToSubpage('about', 'notices');
            }
            onClose();
          },
        });
      }
    });

    // 4. Search sacred art
    SACRED_ART_WORKS.forEach((art) => {
      if (art.title.toLowerCase().includes(q) || art.description.toLowerCase().includes(q)) {
        results.push({
          type: '성미술',
          title: art.title,
          desc: art.description.slice(0, 80) + '...',
          icon: FileText,
          action: () => {
            onNavigateToSubpage('about', 'facilities');
            onClose();
          },
        });
      }
    });

    // 5. Search clergy
    if ('임용환'.includes(q) || '엘리야'.includes(q) || '주임신부'.includes(q)) {
      results.push({
        type: '성직자',
        title: `주임신부 임용환 (엘리야)`,
        desc: '천주교 서울대교구 한강성당 주임신부 (2026.02.19 부임)',
        icon: Users,
        action: () => {
          onNavigateToSubpage('about', 'clergy');
          onClose();
        },
      });
    }

    // 6. Search location / wedding
    if ('혼인'.includes(q) || '결혼'.includes(q) || '웨딩'.includes(q)) {
      results.push({
        type: '혼인성사',
        title: '한강성당 혼인성사 안내 및 예약 (02-796-1847)',
        desc: '대성전 혼인미사 일정, 준비 서류, 시설 안내',
        icon: Heart,
        action: () => {
          onNavigateToSubpage('help', 'wedding-info');
          onClose();
        },
      });
    }

    if ('오시는길'.includes(q) || '주차'.includes(q) || '이촌역'.includes(q) || '지하철'.includes(q)) {
      results.push({
        type: '교통 / 위치',
        title: '한강성당 오시는 길 (용산구 이촌로81길 38)',
        desc: '4호선/경의중앙선 이촌역 4번 출구 도보 7분, 지상 및 지하 주차장 완비',
        icon: MapPin,
        action: () => {
          onScrollToLocation();
          onClose();
        },
      });
    }

    return results;
  }, [query, onNavigateToSubpage, onClose, onScrollToMass, onOpenBulletin, onScrollToLocation]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFBF7] border border-[#DDD9D0] rounded-xs max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header Bar */}
        <div className="p-4 md:p-5 border-b border-[#E6E1D6] flex items-center gap-3 bg-[#FAF6EC]">
          <Search className="w-5 h-5 text-[#5A2428] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요 (예: 미사시간, 주보, 혼인성사, 이촌역, 교적, 김대건)"
            className="w-full bg-transparent border-none text-[#20201E] placeholder-[#8E8980] text-sm md:text-base font-serif-kr focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8E8980] hover:text-[#20201E]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs border border-[#DDD9D0] rounded hover:bg-white text-[#635F57]"
          >
            닫기 [ESC]
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-2.5 bg-[#F4EFE6] border-b border-[#EAE4D7] flex items-center gap-2 overflow-x-auto text-xs text-[#635F57]">
          <span className="font-semibold text-[#5A2428] shrink-0">추천 검색:</span>
          {['주일 미사', '이번 주 주보', '혼인성사', '오시는 길', '예비신자', '성 김대건', 'WYD 2027'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2 py-0.5 bg-white/80 hover:bg-white rounded border border-[#DDD9D0] whitespace-nowrap text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-4 md:p-5 overflow-y-auto divide-y divide-[#EAE4D7] flex-1">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-xs text-[#8E8980] font-serif-kr">
              <Search className="w-8 h-8 text-[#CCC6B8] mx-auto mb-2" />
              <p>천주교 서울대교구 한강성당 전체 정보 검색</p>
              <p className="mt-1 text-[11px] text-[#AAA59B]">
                미사 시간, 성사 안내, 주보, 본당 소식 및 부서 안내를 즉시 찾으실 수 있습니다.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#8E8980] font-serif-kr">
              <p className="text-sm font-semibold text-[#5A2428] mb-1">
                '{query}'에 대한 검색 결과가 없습니다.
              </p>
              <p>정확한 단어를 입력하시거나 본당 사무실(02-796-1845)로 문의해 주십시오.</p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-[#8E8980] pb-2">
                총 {searchResults.length}건의 정보가 검색되었습니다.
              </div>
              {searchResults.map((res, idx) => {
                const Icon = res.icon;
                return (
                  <div
                    key={idx}
                    onClick={res.action}
                    className="p-3 rounded hover:bg-[#F4ECE1] transition-colors cursor-pointer group flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#EFECE3] group-hover:bg-[#5A2428] text-[#5A2428] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#B69A63] font-semibold">
                          [{res.type}]
                        </span>
                        <h4 className="font-serif-kr text-sm font-bold text-[#20201E] group-hover:text-[#5A2428] transition-colors">
                          {res.title}
                        </h4>
                        <p className="text-xs text-[#635F57] line-clamp-1 mt-0.5">
                          {res.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8E8980] group-hover:text-[#5A2428] shrink-0 mt-2" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
