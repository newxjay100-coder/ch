import React, { useState } from 'react';
import { COMMUNITY_GROUPS } from '../data/parishData';
import { Clock, X, ChevronRight, Sparkles } from 'lucide-react';

export default function CommunitySection({ onSelectCommunityGroup }) {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeGroup, setActiveGroup] = useState(null);

  const categories = [
    { id: '전체', label: '전체 공동체' },
    { id: '전례', label: '전례 & 기도' },
    { id: '청년', label: '청소년 & 청년' },
    { id: '봉사', label: '사목 & 봉사' },
  ];

  // 상황에 맞는 실제 한강성당 실물 사진 매핑
  const getCommunityImage = (groupId) => {
    switch (groupId) {
      case 'sundaySchool':
        return {
          src: '/images/church_entrance.jpg',
          title: '성당 정문 진입로와 종탑',
          caption: '주일학교 어린이와 청소년의 신앙 공간',
        };
      case 'youth':
        return {
          src: '/images/statue_kim_taegon.jpg',
          title: '성 김대건 안드레아 신부 동상',
          caption: '청년들의 신앙 수호자 김대건 성인',
        };
      case 'choir':
        return {
          src: '/images/altar_crucifix_stainedglass.jpg',
          title: '대성전 제대와 십자고상',
          caption: '주님을 찬미하는 천상의 성가대',
        };
      case 'liturgy':
        return {
          src: '/images/altar_crucifix_stainedglass.jpg',
          title: '대성전 제대와 종려나무 스테인드글라스',
          caption: '거룩한 전례를 봉사하는 제대',
        };
      case 'bible':
        return {
          src: '/images/way_of_cross_15.png',
          title: '십자가의 길 제15처 ‘부활’ 청동 부조',
          caption: '하느님의 말씀을 묵상하는 신앙',
        };
      case 'district':
        return {
          src: '/images/church_exterior.jpg',
          title: '한강성당 붉은 벽돌 본당 외관',
          caption: '이촌동 구역과 반 신앙 보금자리',
        };
      case 'service':
        return {
          src: '/images/statue_madonna_child.jpg',
          title: '평화의 성모자상',
          caption: '성모님의 자애로움으로 섬기는 봉사',
        };
      case 'pastoral':
        return {
          src: '/images/church_exterior.jpg',
          title: '한강성당 본당 전경',
          caption: '본당 사목을 이끄는 든든한 초석',
        };
      default:
        return {
          src: '/images/church_exterior.jpg',
          title: '한강성당 본당 전경',
          caption: '그리스도 안의 한 몸',
        };
    }
  };

  const filteredGroups = COMMUNITY_GROUPS.filter((group) => {
    if (activeCategory === '전체') return true;
    if (activeCategory === '전례') return ['liturgy', 'choir', 'bible'].includes(group.id);
    if (activeCategory === '청년') return ['sundaySchool', 'youth'].includes(group.id);
    if (activeCategory === '봉사') return ['pastoral', 'service', 'district'].includes(group.id);
    return true;
  });

  return (
    <section id="community" className="py-24 md:py-32 church-brick-bg border-t border-stone-200/80 relative overflow-hidden">
      {/* Background Soft Aura */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#B69A63]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase mb-2 font-bold">
            One Body in Christ Jesus
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
            한강 공동체
          </h2>
          <span className="font-display-en text-xs tracking-widest text-[#8E8980] uppercase mt-1">
            PARISH COMMUNITY & MINISTRIES
          </span>
          <div className="w-12 h-0.5 bg-[#B69A63] my-4" />
          <p className="text-sm md:text-base text-[#5C574F] max-w-xl font-serif-kr leading-relaxed">
            어린이부터 어르신까지, 각자의 탈렌트로 그리스도의 한 몸을 이루는 한강성당의 신앙 공동체입니다.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif-kr transition-all shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-[#5A2428] text-white border-[#5A2428] shadow-xs font-bold'
                  : 'bg-[#FAF9F6] text-[#5C574F] border-stone-200 hover:bg-white hover:text-[#1A1918]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modern Clean Cards Grid with Contextual Church Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGroups.map((group) => {
            const imgInfo = getCommunityImage(group.id);
            return (
              <div
                key={group.id}
                onClick={() => setActiveGroup(group)}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-[#B69A63] hover:shadow-md transition-all cursor-pointer group shadow-2xs relative"
              >
                {/* Visual Header with Real Church Photography */}
                <div className="relative h-40 w-full overflow-hidden bg-[#1C1A18]">
                  <img
                    src={imgInfo.src}
                    alt={imgInfo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] text-white font-mono flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#B69A63]" />
                    <span>실제 한강성당</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B69A63] bg-black/40 px-2 py-0.5 rounded font-bold">
                      {group.target}
                    </span>
                    <p className="text-[11px] font-serif-kr text-[#DDD7CC] mt-1 truncate">
                      {imgInfo.caption}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle contextual church image watermark in card body */}
                  <div
                    className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-[0.03] bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: `url('${imgInfo.src}')` }}
                  />

                  <div className="relative z-10">
                    <h3 className="font-serif-kr text-lg font-bold text-[#1A1918] group-hover:text-[#5A2428] transition-colors mb-0.5">
                      {group.name}
                    </h3>
                    <span className="font-display-en text-[11px] text-[#8E8980] uppercase tracking-wider block mb-2.5">
                      {group.nameEn}
                    </span>

                    <p className="text-xs text-[#5C574F] line-clamp-3 leading-relaxed font-serif-kr mb-4">
                      {group.desc}
                    </p>
                  </div>

                  {/* Schedule and Arrow */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-[#8E8980] relative z-10">
                    <span className="truncate max-w-[170px] font-serif-kr text-[11px]">
                      {group.schedule}
                    </span>
                    <span className="text-[#5A2428] font-bold group-hover:text-[#B69A63] transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Community Detail Modal */}
      {activeGroup && (() => {
        const modalImg = getCommunityImage(activeGroup.id);
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#FAF9F6] rounded-2xl border border-stone-200 max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
              <button
                onClick={() => setActiveGroup(null)}
                className="absolute top-4 right-4 p-2 text-[#8E8980] hover:text-[#1A1918] rounded-full hover:bg-black/5"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Real Church Photography Banner in Modal */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-5 bg-[#1C1A18] shadow-inner">
                <img
                  src={modalImg.src}
                  alt={modalImg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[10px] font-mono text-[#B69A63] uppercase tracking-wider block font-bold">
                    {modalImg.title}
                  </span>
                  <p className="text-xs font-serif-kr text-[#DDD7CC]">
                    {modalImg.caption}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B69A63] bg-[#FAF6EC] px-2.5 py-0.5 rounded-full font-bold">
                  {activeGroup.target}
                </span>
              </div>

              <h3 className="text-2xl font-serif-kr font-bold text-[#5A2428] mb-0.5">
                {activeGroup.name}
              </h3>
              <p className="font-display-en text-xs text-[#8E8980] uppercase tracking-wider mb-4">
                {activeGroup.nameEn}
              </p>

              <p className="text-sm font-serif-kr text-[#3E3A33] leading-relaxed mb-5">
                {activeGroup.desc}
              </p>

              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs text-[#5C574F] space-y-1.5 mb-6">
                <div className="flex items-center gap-1.5 font-semibold text-[#1A1918]">
                  <Clock className="w-3.5 h-3.5 text-[#B69A63]" />
                  <span>정기 모임 / 활동 일정</span>
                </div>
                <p className="font-serif-kr pl-5">{activeGroup.schedule}</p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                <button
                  onClick={() => {
                    const gid = activeGroup.id;
                    setActiveGroup(null);
                    onSelectCommunityGroup(gid);
                  }}
                  className="text-[#5A2428] font-bold hover:underline font-serif-kr"
                >
                  본당 공동체 게시판 바로가기 →
                </button>
                <a
                  href="tel:02-796-1845"
                  className="font-mono text-[#5A2428] font-bold hover:underline"
                >
                  본당 사무실 02-796-1845
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
