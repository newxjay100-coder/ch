import React, { useState } from 'react';
import {
  Clock,
  Calendar as CalendarIcon,
  Bell,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Edit3,
  ExternalLink,
  BookOpen,
  Heart,
  FileText
} from 'lucide-react';

export default function MainEditorialGrid({
  schedule,
  newsList,
  onOpenAdmin,
  onOpenBulletin,
  onNavigateToSubpage,
  onScrollToLocation,
}) {
  // Column 1: Mass Schedule Tab State
  const [massTab, setMassTab] = useState('sunday'); // 'sunday' | 'weekday'

  // Column 2: Notice Area Tab State
  const [noticeTab, setNoticeTab] = useState('notice'); // 'notice' | 'bulletin' | 'news'

  // Column 3: Calendar Date State (October 2026)
  const [selectedDay, setSelectedDay] = useState(4); // default Oct 4 (Sunday)

  // Filtered news items based on tab
  const getTabNews = () => {
    if (noticeTab === 'bulletin') {
      return (newsList || []).filter((n) => n.category === '주보' || n.category === '전례');
    }
    if (noticeTab === 'news') {
      return (newsList || []).filter((n) => n.category === '본당소식' || n.category === '공동체');
    }
    return newsList || [];
  };

  // October 2026 Calendar Days Configuration
  // 2026 Oct 1 is Thursday (index 4 in 0=Sun..6=Sat)
  const calendarDays = [
    { day: null }, { day: null }, { day: null }, { day: null }, // Mon, Tue, Wed, Thu offset
    { day: 1, type: 'weekday' },
    { day: 2, type: 'weekday' },
    { day: 3, type: 'saturday' },
    { day: 4, type: 'sunday', title: '연중 제27주일 (군인주일)' },
    { day: 5, type: 'weekday' },
    { day: 6, type: 'weekday' },
    { day: 7, type: 'weekday' },
    { day: 8, type: 'weekday' },
    { day: 9, type: 'weekday' },
    { day: 10, type: 'saturday' },
    { day: 11, type: 'sunday', title: '연중 제28주일' },
    { day: 12, type: 'weekday' },
    { day: 13, type: 'weekday' },
    { day: 14, type: 'weekday' },
    { day: 15, type: 'weekday' },
    { day: 16, type: 'weekday' },
    { day: 17, type: 'saturday' },
    { day: 18, type: 'sunday', title: '전교주일 / 어르신 축복식' },
    { day: 19, type: 'weekday' },
    { day: 20, type: 'weekday' },
    { day: 21, type: 'weekday' },
    { day: 22, type: 'weekday' },
    { day: 23, type: 'weekday' },
    { day: 24, type: 'saturday' },
    { day: 25, type: 'sunday', title: '연중 제30주일' },
    { day: 26, type: 'weekday' },
    { day: 27, type: 'weekday' },
    { day: 28, type: 'weekday' },
    { day: 29, type: 'weekday' },
    { day: 30, type: 'weekday' },
    { day: 31, type: 'saturday' },
  ];

  const monthEvents = [
    { date: '10.04 (주일)', title: '연중 제27주일 / 군인주일', category: '전례' },
    { date: '10.11 (주일)', title: '연중 제28주일 / 사목회 월례회의', category: '사목' },
    { date: '10.18 (주일)', title: '전교주일 / 어르신 성시간 축복', category: '행사' },
    { date: '10.25 (주일)', title: '연중 제30주일 / 청년회 성경나눔', category: '청년' },
  ];

  return (
    <section id="mass-schedule" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 3-Column Editorial Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* ========================================================================= */}
        {/* COLUMN 1: 주일·평일 미사 안내 (4 cols)                                      */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border border-[#E8E1D3] shadow-md overflow-hidden flex flex-col justify-between h-full">
          <div>
            {/* Header Image Visual: 대성전 제대와 십자고상 */}
            <div className="relative h-44 sm:h-48 w-full overflow-hidden">
              <img
                src="/images/altar_crucifix_stainedglass.jpg"
                alt="대성전 제대와 중앙 십자고상"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141211]/90 via-[#141211]/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-[#F7F4EE]">
                <span className="text-[10px] font-mono tracking-widest text-[#B79B67] uppercase block mb-0.5">
                  SACRED MASS SCHEDULE
                </span>
                <h3 className="font-serif-kr text-lg font-bold">
                  미사 안내
                </h3>
                <p className="text-[11px] text-[#EDE7DD]/80 font-serif-kr line-clamp-1">
                  말씀과 성체로 하나 되는 거룩한 시간
                </p>
              </div>
            </div>

            {/* Mass Tabs [ 주일미사 | 평일미사 ] */}
            <div className="p-4 sm:p-5">
              <div className="flex bg-[#EFE9DD] p-1 rounded-xl mb-4">
                <button
                  onClick={() => setMassTab('sunday')}
                  className={`flex-1 py-2 text-xs font-serif-kr font-bold rounded-lg transition-all cursor-pointer ${
                    massTab === 'sunday'
                      ? 'bg-[#64262B] text-[#F7F4EE] shadow-sm'
                      : 'text-[#6B655D] hover:text-[#232220]'
                  }`}
                >
                  주일미사
                </button>
                <button
                  onClick={() => setMassTab('weekday')}
                  className={`flex-1 py-2 text-xs font-serif-kr font-bold rounded-lg transition-all cursor-pointer ${
                    massTab === 'weekday'
                      ? 'bg-[#64262B] text-[#F7F4EE] shadow-sm'
                      : 'text-[#6B655D] hover:text-[#232220]'
                  }`}
                >
                  평일미사
                </button>
              </div>

              {/* Mass Timetable Content */}
              {massTab === 'sunday' ? (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EAE3D6] shadow-2xs">
                    <div>
                      <span className="text-xs font-serif-kr font-bold text-[#232220] block">
                        새벽 미사
                      </span>
                      <span className="text-[11px] text-[#8E8980]">대성전</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#64262B] bg-[#64262B]/8 px-2.5 py-1 rounded-md">
                      06:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#B79B67]/40 shadow-2xs">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-serif-kr font-bold text-[#64262B]">
                          교중 미사
                        </span>
                        <span className="text-[9px] bg-[#64262B] text-white px-1.5 py-0.2 rounded font-mono font-medium">
                          대표
                        </span>
                      </div>
                      <span className="text-[11px] text-[#8E8980]">대성전 (성가대 찬미)</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#64262B] bg-[#64262B]/8 px-2.5 py-1 rounded-md">
                      11:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EAE3D6] shadow-2xs">
                    <div>
                      <span className="text-xs font-serif-kr font-bold text-[#232220] block">
                        청소년 · 청년 미사
                      </span>
                      <span className="text-[11px] text-[#8E8980]">대성전</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#64262B] bg-[#64262B]/8 px-2.5 py-1 rounded-md">
                      18:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EAE3D6] shadow-2xs">
                    <div>
                      <span className="text-xs font-serif-kr font-bold text-[#232220] block">
                        초등부 어린이 미사
                      </span>
                      <span className="text-[11px] text-[#8E8980]">소성전 (토요일)</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#5C8987] bg-[#5C8987]/10 px-2.5 py-1 rounded-md">
                      토 15:00
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EAE3D6] shadow-2xs">
                    <div>
                      <span className="text-xs font-serif-kr font-bold text-[#232220] block">
                        월요일 새벽 미사
                      </span>
                      <span className="text-[11px] text-[#8E8980]">대성전</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#64262B] bg-[#64262B]/8 px-2.5 py-1 rounded-md">
                      06:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EAE3D6] shadow-2xs">
                    <div>
                      <span className="text-xs font-serif-kr font-bold text-[#232220] block">
                        화 · 목요일 미사
                      </span>
                      <span className="text-[11px] text-[#8E8980]">오전 10:00 / 저녁 19:30</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#64262B] bg-[#64262B]/8 px-2 py-1 rounded-md">
                      10:00 / 19:30
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EAE3D6] shadow-2xs">
                    <div>
                      <span className="text-xs font-serif-kr font-bold text-[#232220] block">
                        수 · 금요일 미사
                      </span>
                      <span className="text-[11px] text-[#8E8980]">새벽 06:00 / 오전 10:00</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#64262B] bg-[#64262B]/8 px-2 py-1 rounded-md">
                      06:00 / 10:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#EAE3D6] shadow-2xs">
                    <div>
                      <span className="text-xs font-serif-kr font-bold text-[#232220] block">
                        토요일 특전 미사
                      </span>
                      <span className="text-[11px] text-[#8E8980]">주일 전야 특전미사</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#5C8987] bg-[#5C8987]/10 px-2.5 py-1 rounded-md">
                      18:00
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Footer with CMS Link */}
          <div className="p-4 bg-[#F2ECE1] border-t border-[#E5DECF] flex items-center justify-between">
            <button
              onClick={() => onNavigateToSubpage?.('about', 'mass-times')}
              className="inline-flex items-center gap-1.5 text-xs font-serif-kr font-bold text-[#64262B] hover:underline cursor-pointer"
            >
              <span>미사/성사시간 전체 안내</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8E8980] hover:text-[#64262B] cursor-pointer"
              title="관리자에서 미사 시간표 수정"
            >
              <Edit3 className="w-3 h-3 text-[#B79B67]" />
              <span>수정</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 2: 소식 & 안내 + WYD 2027 배너 (4 cols)                             */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-5">
          {/* Top Notice Card Box */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E1D3] shadow-md p-5 flex-1">
            <div className="flex items-center justify-between mb-3 border-b border-[#EAE3D6] pb-3">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#64262B]" />
                <h3 className="font-serif-kr text-base font-bold text-[#232220]">
                  소식 & 안내
                </h3>
              </div>
              <button
                onClick={() => onNavigateToSubpage?.('about', 'notices')}
                className="text-xs font-serif-kr text-[#8E8980] hover:text-[#64262B] flex items-center gap-0.5 cursor-pointer"
              >
                <span>더보기</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Notice Tabs: [ 공지사항 | 주보 | 본당 소식 ] */}
            <div className="flex gap-2 border-b border-[#EDE7DD] mb-3 pb-2 text-xs font-serif-kr">
              <button
                onClick={() => setNoticeTab('notice')}
                className={`pb-1 cursor-pointer transition-colors ${
                  noticeTab === 'notice'
                    ? 'font-bold text-[#64262B] border-b-2 border-[#64262B]'
                    : 'text-[#8E8980] hover:text-[#232220]'
                }`}
              >
                공지사항
              </button>
              <button
                onClick={() => setNoticeTab('bulletin')}
                className={`pb-1 cursor-pointer transition-colors ${
                  noticeTab === 'bulletin'
                    ? 'font-bold text-[#64262B] border-b-2 border-[#64262B]'
                    : 'text-[#8E8980] hover:text-[#232220]'
                }`}
              >
                주보
              </button>
              <button
                onClick={() => setNoticeTab('news')}
                className={`pb-1 cursor-pointer transition-colors ${
                  noticeTab === 'news'
                    ? 'font-bold text-[#64262B] border-b-2 border-[#64262B]'
                    : 'text-[#8E8980] hover:text-[#232220]'
                }`}
              >
                본당 소식
              </button>
            </div>

            {/* News List */}
            <ul className="space-y-3">
              {getTabNews().slice(0, 4).map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    if (item.category === '주보') onOpenBulletin?.();
                    else onNavigateToSubpage?.('about', 'notices');
                  }}
                  className="group flex items-start justify-between gap-3 p-2 rounded-xl hover:bg-[#F2ECE1] transition-colors cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#EAE3D6] text-[#64262B] font-medium">
                        {item.category || '공지'}
                      </span>
                      {item.isNew && (
                        <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#B79B67] text-white font-bold">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-serif-kr font-semibold text-[#232220] group-hover:text-[#64262B] truncate">
                      {item.title}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#A8A29E] shrink-0 mt-2">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom WYD 2027 Seoul Coral Banner */}
          <div
            onClick={() => onNavigateToSubpage?.('community', 'wyd2027')}
            className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-[#E8C5BE] bg-gradient-to-r from-[#D96B5A] to-[#E28070] text-white p-4 flex items-center justify-between"
          >
            {/* Background image if available */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img
                src="/images/design/wyd_banner_coral.jpg"
                alt="2027 서울 세계청년대회"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-[#FFF2EE] uppercase block mb-0.5 font-bold">
                WYD SEOUL 2027
              </span>
              <h4 className="font-serif-kr text-base font-bold text-white drop-shadow-xs">
                “와서 보아라” (요한 1,39)
              </h4>
              <p className="text-[11px] text-white/90 font-serif-kr mt-0.5">
                2027 서울 세계청년대회를 향한 한강공동체의 여정
              </p>
            </div>
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 3: 본당 달력 & 이번 달 주요 일정 (4 cols)                            */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl border border-[#E8E1D3] shadow-md p-5 flex flex-col justify-between h-full">
          <div>
            {/* Calendar Header */}
            <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-3 mb-3">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-[#64262B]" />
                <h3 className="font-serif-kr text-base font-bold text-[#232220]">
                  본당 달력
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-bold text-[#64262B]">
                  2026. 10
                </span>
                <span className="text-[10px] font-mono text-[#8E8980]">OCTOBER</span>
              </div>
            </div>

            {/* Mini Calendar Grid */}
            <div className="mb-4">
              <div className="grid grid-cols-7 text-center text-[10px] font-serif-kr font-bold text-[#8E8980] mb-1.5">
                <span className="text-rose-600">일</span>
                <span>월</span>
                <span>화</span>
                <span>수</span>
                <span>목</span>
                <span>금</span>
                <span className="text-blue-600">토</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.map((d, idx) => {
                  if (!d.day) return <div key={idx} className="h-6" />;
                  const isSelected = selectedDay === d.day;
                  const isSunday = d.type === 'sunday';
                  const isSaturday = d.type === 'saturday';

                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedDay(d.day)}
                      className={`h-6 text-[11px] font-mono rounded-md flex items-center justify-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#64262B] text-white font-bold shadow-xs'
                          : isSunday
                          ? 'text-rose-600 font-bold hover:bg-[#F2ECE1]'
                          : isSaturday
                          ? 'text-blue-600 hover:bg-[#F2ECE1]'
                          : 'text-[#38332E] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {d.day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 이번 달 주요 일정 List */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-serif-kr font-bold text-[#38332E]">
                  이번 달 주요 일정
                </span>
                <span className="text-[10px] font-mono text-[#8E8980]">10월 묵주기도성월</span>
              </div>
              <div className="space-y-2">
                {monthEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#EDE7DD] text-xs font-serif-kr"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B79B67]" />
                      <span className="font-mono font-bold text-[#64262B] text-[11px]">
                        {evt.date}
                      </span>
                      <span className="text-[#232220] font-medium truncate max-w-[150px]">
                        {evt.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8E8980] bg-[#F2ECE1] px-1.5 py-0.5 rounded font-mono">
                      {evt.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Parish Contact or Mary Garden Card */}
          <div className="mt-4 pt-3 border-t border-[#EDE7DD] flex items-center justify-between text-xs font-serif-kr text-[#8E8980]">
            <span className="flex items-center gap-1 text-[#64262B] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#B79B67]" />
              평화의 모후 성모동산
            </span>
            <button
              onClick={() => onNavigateToSubpage?.('about', 'events')}
              className="text-[#64262B] hover:underline font-bold cursor-pointer"
            >
              전체 일정표 &gt;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
