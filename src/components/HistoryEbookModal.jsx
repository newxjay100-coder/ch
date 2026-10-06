import React, { useState } from 'react';
import { X, BookOpen, ChevronRight, ChevronLeft, Download, Bookmark, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';

const EBOOK_CHAPTERS = [
  {
    chapter: '프롤로그',
    title: '한강변에 피어난 신앙의 꽃 (1970 - 2020)',
    period: '50주년 발간사 및 축하 메시지',
    content: `“너희는 세상의 빛이다. 산 위에 자리 잡은 고을은 감추어질 수 없다.” (마태 5,14)

천주교 서울대교구 한강성당은 1970년 12월 13일, 삼각지 본당 관할 구역에서 이촌동 일대를 분리하여 초대 주임 박고빈 시메온 신부님의 부임과 함께 첫 미사를 봉헌하며 시작되었습니다.

이촌동 모래벌판과 한강변의 거센 바람 속에서도 교우들의 뜨거운 기도와 희생으로 세워진 한강성당은, 한국인 최초의 사제이자 순교자인 성 김대건 안드레아 신부님의 불굴의 영성을 이어받아 반세기 동안 복음의 등대로 자라났습니다.`,
    image: '/images/design/banner_50th.jpg',
  },
  {
    chapter: '제1편',
    title: '본당의 태동과 설립기 (1970 - 1979)',
    period: '초대 박고빈 신부 ~ 3대 함세웅 신부',
    content: `1970년 12월 13일 설립 인가 후, 당시 개발이 한창이던 이촌동 아파트 단지 주민들을 중심으로 신앙 공동체가 형성되었습니다.

초기 열악한 가건물 성당 시절을 거쳐 2대 이문근 신부님의 지도 아래 체계적인 전례와 구역 반모임이 자리 잡았습니다. 이어 3대 함세웅 신부님의 부임과 함께 1970년대 격동기 사회 복음화와 평신도 사목 쇄신이 활발하게 일어났습니다.`,
    image: '/images/church_entrance.jpg',
  },
  {
    chapter: '제2편',
    title: '성전 신축과 성장의 시대 (1980 - 1999)',
    period: '4대 이문주 신부 ~ 8대 황인국 신부',
    content: `신자 수의 급격한 증가에 따라 새 성전 건립의 염원이 모아졌습니다. 전 교우의 정성 어린 묵주기도와 헌신으로 1990년 12월 30일, 붉은 벽돌의 단아하고 성스러운 현 성전이 완공되어 고(故) 김수환 스테파노 추기경님의 집전으로 장엄 축성식을 거행하였습니다.

대성전 중앙에는 한국 현대 조각의 거장 최종태 요셉 작가의 십자고상이 세워졌고, 양승준 교수의 종려나무 스테인드글라스, 최봉자 레지나 수녀의 성모자상이 봉헌되어 거룩한 예술 성전으로 거듭났습니다.`,
    image: '/images/church_exterior.jpg',
  },
  {
    chapter: '제3편',
    title: '성숙과 나눔의 2000년대 (2000 - 2019)',
    period: '9대 홍성만 신부 ~ 12대 최정진 신부',
    content: `밀레니엄을 맞이하며 한강성당은 성숙한 공동체로서 이웃 사랑과 선교에 힘을 쏟았습니다.

성 빈첸시오회를 통한 지역 독거 어르신 사랑 나눔, 청년성서모임과 체칠리아 성가대의 전례 봉사, 대건유치원을 통한 유아 영성 교육이 꽃을 피웠습니다. 서울대교구 제1 중구-용산지구의 지구장좌 성당으로서 10개 본당 간의 일치와 사목 협력을 주도하였습니다.`,
    image: '/images/altar_crucifix_stainedglass.jpg',
  },
  {
    chapter: '제4편',
    title: '50주년 은총의 해와 미래 여정 (2020 - 2026)',
    period: '13대 허석훈 신부 ~ 14대 임용환 신부',
    content: `2020년 12월 13일, 본당 설립 50주년을 맞아 『한강본당 50년사』를 편찬 봉헌하였습니다.

팬데믹의 시련 속에서도 온 교우가 일치하여 기도의 끈을 놓지 않았으며, 2026년 임용환 엘리아 주임신부님의 부임과 함께 다가오는 '2027 서울 세계청년대회(WYD)'를 향한 젊고 역동적인 신앙의 미래를 활짝 열어가고 있습니다.`,
    image: '/images/design/gallery_feast.jpg',
  },
];

export default function HistoryEbookModal({ isOpen, onClose }) {
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0);

  if (!isOpen) return null;

  const currentCh = EBOOK_CHAPTERS[currentChapterIdx];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] text-[#232220] max-w-4xl w-full rounded-2xl shadow-2xl border border-[#E8E1D3] overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#64262B] px-6 py-4 flex items-center justify-between text-white border-b border-[#7A3238]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-[#B79B67]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#B79B67] uppercase font-bold">
                  DIGITAL E-BOOK READER
                </span>
                <span className="text-[10px] bg-[#B79B67] text-white px-1.5 py-0.2 rounded font-bold">
                  1970 - 2020
                </span>
              </div>
              <h3 className="font-serif-kr text-base sm:text-lg font-bold text-white">
                『한강본당 50년사』 디지털 열람기
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter Index Bar */}
        <div className="bg-[#F0EBE1] px-4 py-2 border-b border-[#E2DAD0] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {EBOOK_CHAPTERS.map((ch, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentChapterIdx(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-serif-kr whitespace-nowrap transition-all cursor-pointer ${
                currentChapterIdx === idx
                  ? 'bg-[#64262B] text-white font-bold shadow-xs'
                  : 'text-[#6B655D] hover:bg-white/60 hover:text-[#232220]'
              }`}
            >
              <span className="font-mono text-[10px] opacity-75 mr-1">{ch.chapter}</span>
              <span>{ch.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Modal Body - Book Spread View */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Archival Photo (5 cols) */}
            <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#DDD5C5] shadow-sm bg-[#161413]">
              <div className="aspect-[4/3] relative">
                <img
                  src={currentCh.image}
                  alt={currentCh.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-white">
                  <span className="text-[11px] font-serif-kr text-[#EDE7DD]">
                    한강본당 50년사 공식 기록 사진
                  </span>
                </div>
              </div>
              <div className="p-3 bg-[#FAF8F5] border-t border-[#DDD5C5] text-center">
                <span className="text-[11px] font-mono text-[#8E8980]">
                  페이지 {currentChapterIdx + 1} / {EBOOK_CHAPTERS.length}
                </span>
              </div>
            </div>

            {/* Right: Book Content (7 cols) */}
            <div className="md:col-span-7 space-y-3 font-serif-kr">
              <div className="border-b border-[#E8E1D3] pb-2">
                <span className="text-xs font-mono font-bold text-[#64262B]">
                  {currentCh.chapter} • {currentCh.period}
                </span>
                <h4 className="text-xl font-bold text-[#232220] mt-1">
                  {currentCh.title}
                </h4>
              </div>

              <div className="text-xs sm:text-sm text-[#403B35] leading-relaxed whitespace-pre-line space-y-3 bg-[#FAF9F6] p-4 rounded-xl border border-[#EDE7DD]">
                {currentCh.content}
              </div>

              <div className="p-3 rounded-lg bg-[#F5F0E6] border border-[#E8DFCF] flex items-center justify-between text-xs text-[#6B655D]">
                <span className="flex items-center gap-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#B79B67]" />
                  천주교 서울대교구 한강성당 50년사 편찬위원회 (2020)
                </span>
                <button
                  onClick={() => alert('50년사 요약 PDF 다운로드가 준비되었습니다.')}
                  className="text-[#64262B] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF 다운로드</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer with Page Navigation */}
        <div className="bg-[#EFE9DE] px-6 py-3.5 border-t border-[#E0D8C8] flex items-center justify-between">
          <button
            onClick={() => setCurrentChapterIdx((p) => Math.max(0, p - 1))}
            disabled={currentChapterIdx === 0}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-serif-kr font-bold transition-colors ${
              currentChapterIdx === 0
                ? 'opacity-40 cursor-not-allowed text-[#8E8980]'
                : 'bg-white hover:bg-[#FAF8F5] text-[#64262B] border border-[#DDD5C5] cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>이전 장</span>
          </button>

          <span className="text-xs font-mono font-bold text-[#64262B]">
            {currentChapterIdx + 1} / {EBOOK_CHAPTERS.length}
          </span>

          <button
            onClick={() => setCurrentChapterIdx((p) => Math.min(EBOOK_CHAPTERS.length - 1, p + 1))}
            disabled={currentChapterIdx === EBOOK_CHAPTERS.length - 1}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-serif-kr font-bold transition-colors ${
              currentChapterIdx === EBOOK_CHAPTERS.length - 1
                ? 'opacity-40 cursor-not-allowed text-[#8E8980]'
                : 'bg-white hover:bg-[#FAF8F5] text-[#64262B] border border-[#DDD5C5] cursor-pointer'
            }`}
          >
            <span>다음 장</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
