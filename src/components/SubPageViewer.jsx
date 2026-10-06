import React, { useState } from 'react';
import {
  SITE_NAVIGATION,
  PARISH_IDENTITY,
  CLERGY_INFO,
  FORMER_PASTORS,
  INITIAL_MASS_SCHEDULE,
  INITIAL_PARISH_NEWS,
  COMMUNITY_GROUPS,
  WEDDING_INFO,
  WYD_INFO,
  PHOTO_ARCHIVE_DATA,
  HISTORY_TIMELINE,
} from '../data/parishData';
import {
  ChevronRight,
  Home,
  ArrowLeft,
  Download,
  Sparkles,
  Clock,
  MapPin,
  Calendar,
  BookOpen,
  Heart,
  Phone,
  Cross,
  Send,
  CheckCircle2,
} from 'lucide-react';

const CATEGORY_BACKGROUNDS = {
  about: '/images/church_exterior.jpg',
  faith: '/images/altar_crucifix_stainedglass.jpg',
  groups: '/images/church_entrance.jpg',
  community: '/images/statue_kim_taegon.jpg',
  archive: '/images/statue_madonna_child.jpg',
  help: '/images/church_exterior.jpg',
};

export default function SubPageViewer({
  categoryId,
  subItemId,
  onNavigateSubpage,
  onBackToHome,
  onOpenBulletin,
  onOpenWeddingInquiry,
  onOpenMapModal,
  onOpen50thEbook,
}) {
  const currentCategory =
    SITE_NAVIGATION.find((c) => c.id === categoryId) || SITE_NAVIGATION[0];

  // Try to match subItemId or find by alias, otherwise fallback to first subItem
  const currentSubItem =
    currentCategory.subItems.find((s) => s.id === subItemId) ||
    currentCategory.subItems.find((s) => s.id.includes(subItemId || '')) ||
    currentCategory.subItems[0];

  const bgPhoto =
    CATEGORY_BACKGROUNDS[currentCategory.id] || '/images/church_exterior.jpg';

  return (
    <div className="relative pt-24 md:pt-32 pb-24 min-h-screen">
      {/* Background Architectural Photo */}
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none -z-20 transition-all duration-700"
        style={{
          backgroundImage: `url('${bgPhoto}')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 35%',
        }}
      />

      {/* Warm Ivory Translucent Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#F7F4EE]/94 via-[#FAF7F2]/90 to-[#F7F4EE]/94 backdrop-blur-[2px] pointer-events-none -z-10 church-brick-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#DDD9D0]/70">
          <div className="flex items-center gap-2 text-xs font-serif-kr text-[#635F57]">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1 hover:text-[#64262B] font-medium transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-[#B79B67]" />
              <span>홈</span>
            </button>
            <ChevronRight className="w-3 h-3 text-[#AAA59B]" />
            <span className="font-semibold text-[#64262B]">{currentCategory.title}</span>
            <ChevronRight className="w-3 h-3 text-[#AAA59B]" />
            <span className="text-[#20201E] font-bold">{currentSubItem.title}</span>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/90 hover:bg-white text-[#64262B] text-xs font-serif-kr transition-all font-semibold border border-[#DDD9D0] shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>메인 화면으로 돌아가기</span>
          </button>
        </div>

        {/* Top Category Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#B79B67]/30 shadow-md mb-8 group">
          <div
            className="h-44 sm:h-52 md:h-60 bg-cover bg-center relative transition-transform duration-700 group-hover:scale-[1.01]"
            style={{
              backgroundImage: `url('${bgPhoto}')`,
              backgroundPosition: 'center 35%',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#151110]/95 via-[#181312]/60 to-[#151110]/40" />

            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#B79B67]/30 border border-[#B79B67]/60 text-[11px] font-mono font-bold text-[#F3D99E] tracking-wider uppercase backdrop-blur-xs">
                  <Sparkles className="w-3 h-3 text-[#E6C687]" />
                  {currentCategory.title}
                </span>
                <span className="text-xs text-[#DDD7CC] font-serif-kr">
                  천주교 서울대교구 한강성당
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-kr tracking-tight text-[#FDFBF7] drop-shadow-md">
                {currentSubItem.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#DDD7CC] max-w-2xl mt-1.5 font-serif-kr line-clamp-2">
                {currentSubItem.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar Submenu (3 cols) */}
          <aside className="lg:col-span-3 bg-white/92 backdrop-blur-md border border-[#DDD9D0] rounded-2xl p-5 shadow-xs">
            <h3 className="font-serif-kr text-base font-bold text-[#64262B] border-b border-[#E6E1D6] pb-3 mb-3 flex items-center justify-between">
              <span>{currentCategory.title}</span>
              <span className="text-[11px] font-mono text-[#B79B67] font-normal">
                {currentCategory.subItems.length}개 항목
              </span>
            </h3>
            <nav className="space-y-1">
              {currentCategory.subItems.map((sub) => {
                const isSelected = sub.id === currentSubItem.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => onNavigateSubpage(currentCategory.id, sub.id)}
                    className={`w-full text-left py-2 px-3 rounded-lg text-xs font-serif-kr transition-all flex items-center justify-between min-h-[38px] cursor-pointer ${
                      isSelected
                        ? 'bg-[#64262B] text-[#F7F4EE] font-bold shadow-xs'
                        : 'text-[#4A463F] hover:bg-black/[0.04]'
                    }`}
                  >
                    <span className="truncate">{sub.title}</span>
                    {isSelected && <ChevronRight className="w-3.5 h-3.5 text-[#B79B67]" />}
                  </button>
                );
              })}
            </nav>

            {/* Quick Contact Box in Sidebar */}
            <div className="mt-6 pt-4 border-t border-[#E6E1D6] text-xs font-serif-kr text-[#635F57] space-y-1.5 bg-[#F8F5EE]/80 p-3.5 rounded-xl border border-[#DDD9D0]/60">
              <span className="font-bold text-[#20201E] block">성당 사무실 안내</span>
              <p className="font-mono text-[#64262B] font-bold text-sm">
                {PARISH_IDENTITY.phoneMain}
              </p>
              <p className="text-[11px] text-[#8E8980]">
                화~일 09:00~18:00 (월요일 휴무)
              </p>
            </div>
          </aside>

          {/* Right Main Editorial Content (9 cols) */}
          <main className="lg:col-span-9 bg-white/95 backdrop-blur-md border border-[#DDD9D0] rounded-2xl p-6 md:p-10 shadow-xs space-y-8 font-serif-kr">
            {/* Header */}
            <div className="border-b border-[#DDD9D0]/70 pb-5">
              <span className="text-xs font-mono tracking-widest text-[#B79B67] uppercase font-bold">
                HANGANG CATHOLIC CHURCH • {currentCategory.title.toUpperCase()}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#64262B] mt-1 mb-2">
                {currentSubItem.title}
              </h2>
              <p className="text-sm text-[#635F57] leading-relaxed">
                {currentSubItem.summary}
              </p>
            </div>

            {/* Dynamic Content Renderer */}
            <SubPageContentRenderer
              subId={currentSubItem.id}
              categoryId={currentCategory.id}
              onOpenBulletin={onOpenBulletin}
              onOpenWeddingInquiry={onOpenWeddingInquiry}
              onOpenMapModal={onOpenMapModal}
              onOpen50thEbook={onOpen50thEbook}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

function SubPageContentRenderer({
  subId,
  categoryId,
  onOpenBulletin,
  onOpenWeddingInquiry,
  onOpenMapModal,
  onOpen50thEbook,
}) {
  switch (subId) {
    // 01 ABOUT / 한강성당
    case 'intro':
      return (
        <div className="space-y-6">
          <div className="relative rounded-xl overflow-hidden border border-[#DDD9D0] shadow-sm">
            <img
              src="/images/church_exterior.jpg"
              alt="천주교 서울대교구 한강성당 외관 전경"
              className="w-full h-72 sm:h-80 object-cover"
            />
            <div className="p-3 bg-white/95 border-t border-[#DDD9D0] text-xs text-[#635F57] flex justify-between items-center font-serif-kr">
              <span className="font-semibold text-[#64262B]">
                천주교 서울대교구 한강성당 (1990년 건립 봉헌)
              </span>
              <span className="text-[11px] text-[#8E8980]">
                용산구 이촌로81길 38 (이촌동)
              </span>
            </div>
          </div>
          <div className="text-sm text-[#383531] leading-relaxed space-y-4">
            <p>
              천주교 서울대교구 한강성당은 1970년 12월 13일 삼각지 본당 관할 구역에서 이촌동 일대를 분리하여 설립되었습니다.
              한강변 이촌동 개발의 역사와 함께하며 한국인 최초의 사제이자 순교자인 <strong>성 김대건 안드레아</strong> 신부님을 주보성인으로 모시고 있습니다.
            </p>
            <p>
              본당에서 도보 거리에 위치한 한강변 <strong>새남터 순교성지</strong>는 김대건 신부님이 1846년 순교하신 거룩한 터전으로, 한강성당은 순교자의 굳건한 신앙과 영성을 계승하는 지구장좌 성당으로서 관내 본당들과 일치하여 복음화 사명을 다하고 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#DDD9D0]">
            <div className="p-4 bg-[#F8F5EE] border border-[#DDD9D0] rounded-xl">
              <span className="font-bold text-[#64262B] block mb-1">관할 구역</span>
              <p className="text-xs text-[#635F57]">서울특별시 용산구 이촌1동(동부이촌동) 전역</p>
            </div>
            <div className="p-4 bg-[#F8F5EE] border border-[#DDD9D0] rounded-xl">
              <span className="font-bold text-[#64262B] block mb-1">주보성인 축일</span>
              <p className="text-xs text-[#635F57]">매년 7월 5일 (성 김대건 안드레아 사제 순교자 대축일)</p>
            </div>
          </div>
        </div>
      );

    case 'history50':
    case 'history-archive':
      return (
        <div className="space-y-6">
          <div className="p-6 bg-[#64262B] text-white rounded-2xl border border-[#7A3238] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#B79B67] uppercase font-bold block mb-1">
                50TH ANNIVERSARY HERITAGE (1970 - 2020)
              </span>
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-white mb-1">
                『한강본당 50년사』 디지털 열람
              </h3>
              <p className="text-xs text-[#EDE7DD] font-serif-kr max-w-lg">
                반세기 동안 이어온 주님의 은총과 신앙의 발자취를 디지털 e-Book 리더로 지금 바로 확인하실 수 있습니다.
              </p>
            </div>
            <button
              onClick={onOpen50thEbook}
              className="px-5 py-2.5 bg-[#B79B67] hover:bg-[#A38753] text-[#232220] font-bold text-xs rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer"
            >
              e-Book 뷰어 열기
            </button>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="font-bold text-base text-[#232220]">50년사 주요 목차 및 연표</h4>
            {HISTORY_TIMELINE.map((h, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-sm text-[#64262B] bg-[#64262B]/10 px-2 py-1 rounded min-w-[65px] text-center">
                    {h.year}
                  </span>
                  <div>
                    <strong className="text-sm text-[#232220] block">{h.title}</strong>
                    <p className="text-xs text-[#6B655D] mt-0.5">{h.desc}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#8E8980] shrink-0">{h.date}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'mass-times':
      return (
        <div className="space-y-6">
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E1D3] rounded-xl">
            <span className="text-xs font-mono font-bold text-[#64262B] block mb-1">주일 미사 안내</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {INITIAL_MASS_SCHEDULE.sunday.map((m, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg border border-[#EDE7DD] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-[#232220]">{m.title}</span>
                    <span className="text-[11px] text-[#8E8980] block">{m.location} ({m.target})</span>
                  </div>
                  <span className="font-mono font-bold text-sm text-[#64262B] bg-[#64262B]/8 px-2 py-1 rounded">
                    {m.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#E8E1D3] rounded-xl">
            <span className="text-xs font-mono font-bold text-[#64262B] block mb-1">평일 미사 안내</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
              <div className="p-3 bg-white rounded-lg border border-[#EDE7DD]">
                <strong className="text-[#232220] block mb-0.5">월요일</strong>
                <span className="font-mono text-[#64262B] font-bold">06:00 (새벽, 대성전)</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#EDE7DD]">
                <strong className="text-[#232220] block mb-0.5">화 · 목요일</strong>
                <span className="font-mono text-[#64262B] font-bold">06:00 (새벽) / 10:00 (오전) / 19:00 (저녁)</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#EDE7DD]">
                <strong className="text-[#232220] block mb-0.5">수 · 금요일</strong>
                <span className="font-mono text-[#64262B] font-bold">06:00 (새벽) / 10:00 (오전)</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#EDE7DD]">
                <strong className="text-[#232220] block mb-0.5">토요일 (주일 특전)</strong>
                <span className="font-mono text-[#64262B] font-bold">06:00 (새벽) / 17:00 (어린이) / 19:00 (특전)</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#F2ECE1] border border-[#E5DECF] rounded-xl text-xs space-y-1">
            <strong className="text-[#64262B] block">• 고해성사</strong>
            <p className="text-[#6B655D]">{INITIAL_MASS_SCHEDULE.sacraments.confession}</p>
            <strong className="text-[#64262B] block pt-1">• 성시간</strong>
            <p className="text-[#6B655D]">{INITIAL_MASS_SCHEDULE.sacraments.holyHour}</p>
          </div>
        </div>
      );

    case 'notices':
      return (
        <div className="space-y-4">
          <p className="text-xs text-[#6B655D]">본당 사목 공지 및 주요 알림 사항입니다.</p>
          <div className="space-y-3">
            {INITIAL_PARISH_NEWS.map((n) => (
              <div
                key={n.id}
                className="p-4 bg-[#FAF8F5] border border-[#EAE3D6] rounded-xl space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#64262B] text-white font-bold">
                    {n.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#8E8980]">{n.date}</span>
                </div>
                <h4 className="font-bold text-sm text-[#232220]">{n.title}</h4>
                <p className="text-xs text-[#5C574F] leading-relaxed">{n.content}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'location':
      return (
        <div className="space-y-5">
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-serif-kr font-bold text-base text-[#64262B] block">
                {PARISH_IDENTITY.nameKorean}
              </span>
              <p className="text-xs text-[#6B655D] mt-0.5">
                {PARISH_IDENTITY.address} (지하철 4호선 이촌역 3-1번 출구 도보 5분)
              </p>
            </div>
            <button
              onClick={onOpenMapModal}
              className="px-4 py-2 bg-[#03C75A] hover:bg-[#02B150] text-white rounded-lg text-xs font-bold shadow-xs whitespace-nowrap cursor-pointer"
            >
              네이버 지도 인앱 뷰어 열기
            </button>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#DDD5C5]">
            <img
              src="/images/church_entrance.jpg"
              alt="한강성당 정문 아치와 종탑 진입로"
              className="w-full h-64 sm:h-72 object-cover"
            />
          </div>
        </div>
      );

    case 'bulletin':
      return (
        <div className="space-y-4">
          <p className="text-sm text-[#635F57]">
            매주일 발행되는 한강성당 주보 원문을 온라인 전자 주보 뷰어로 바로 확인하실 수 있습니다.
          </p>
          <div className="p-5 bg-[#FAF8F5] border border-[#E8E1D3] rounded-xl flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-[#B79B67] font-bold block mb-0.5">제2648호</span>
              <h4 className="font-serif-kr text-base font-bold text-[#232220]">
                천주교 한강성당 주보 (2026. 10. 04 연중 제27주일)
              </h4>
            </div>
            <button
              onClick={onOpenBulletin}
              className="px-5 py-2.5 bg-[#64262B] hover:bg-[#501E22] text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              주보 뷰어 열기
            </button>
          </div>
        </div>
      );

    case 'wedding-info':
    case 'wedding-calendar':
      return (
        <div className="space-y-6">
          <div className="p-5 bg-[#FAF8F5] border border-[#E8E1D3] rounded-xl">
            <h4 className="font-bold text-[#64262B] mb-2 text-base">한강성당 혼인성사 안내</h4>
            <p className="text-xs sm:text-sm text-[#635F57] leading-relaxed mb-4">
              본당 대성전은 600석 규모의 클래식 아치와 붉은 벽돌의 단아한 인테리어로 성스러운 혼인미사를 봉헌합니다.
              경건하고 품위 있는 혼인성사를 위하여 사전 면담 및 혼인 강좌 이수가 필요합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={onOpenWeddingInquiry}
                className="px-5 py-2.5 bg-[#64262B] hover:bg-[#501E22] text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
              >
                혼인성사 상담 및 예약 문의 (02-796-1847)
              </button>
            </div>
          </div>
        </div>
      );

    case 'prayers':
      return (
        <div className="space-y-4 text-xs sm:text-sm">
          <p className="text-[#6B655D]">가톨릭 신자의 일상 신앙생활을 위한 기본 기도문입니다.</p>
          <div className="space-y-3">
            {[
              {
                title: '주님의 기도',
                content:
                  '하늘에 계신 저희 아버지, 아버지의 이름이 거룩히 빛나시며 아버지의 나라가 오시며 아버지의 뜻이 하늘에서와 같이 땅에서도 이루어지소서. 오늘 저희에게 일용할 양식을 주시고 저희에게 잘못한 이를 저희가 용서하오니 저희 죄를 용서하시고 저희를 유혹에 빠지지 않게 하시고 악에서 구하소서. 아멘.',
              },
              {
                title: '성모송',
                content:
                  '은총이 가득하신 마리아님 기뻐하소서! 주님께서 함께 계시니 여인 중에 복되시며 태중의 아들 예수님 또한 복되시나이다. 천주의 성모 마리아님, 이제와 저희 죽을 때에 저희 죄인을 위하여 빌어주소서. 아멘.',
              },
              {
                title: '사도신경',
                content:
                  '전능하신 천주 성부 천지의 창조주를 저는 믿나이다. 그 외아들 우리 주 예수 그리스도님, 성령으로 인하여 동정 마리아께 잉태되어 나시고, 본시오 빌라도 통치 아래서 고난을 받으시고 십자가에 못 박혀 돌아가시고 묻히셨으며, 저승에 가시어 사흗날에 죽은 이들 가운데서 부활하시고 하늘에 올라 전능하신 천주 성부 오른편에 앉으시며 그리로부터 산 이와 죽은 이를 심판하러 오시리라 믿나이다. 성령을 믿으며 거룩하고 보편된 교회와 모든 성인의 통공을 믿으며 죄의 용서와 육신의 부활을 믿으며 영원한 삶을 믿나이다. 아멘.',
              },
            ].map((p, i) => (
              <div key={i} className="p-4 bg-[#FAF8F5] border border-[#EAE3D6] rounded-xl space-y-1.5">
                <span className="font-bold text-[#64262B] block text-sm">{p.title}</span>
                <p className="text-xs text-[#4A463F] leading-relaxed whitespace-pre-line">{p.content}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'catechumen':
    case 'how-to-join':
      return (
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-5 bg-[#FAF8F5] border border-[#E8E1D3] rounded-xl space-y-2">
            <h4 className="font-bold text-base text-[#64262B]">예비신자 교리반 입교 안내</h4>
            <p className="text-[#6B655D] leading-relaxed">
              가톨릭 신앙에 첫 발을 내딛고자 하시는 모든 분들을 진심으로 환영합니다.
              한강성당에서는 매년 상반기(3월) 및 하반기(10월)에 성인 예비신자 교리반을 개강합니다.
            </p>
            <div className="pt-2">
              <span className="font-bold text-[#232220] block mb-1">• 교리반 일정:</span>
              <p className="text-xs text-[#6B655D]">• 화요일 야간반 (19:30) / 목요일 오전반 (10:00)</p>
              <p className="text-xs text-[#6B655D]">• 문의: 본당 사무실 (02-798-1784)</p>
            </div>
          </div>
        </div>
      );

    case 'wyd2027':
      return (
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#D96B5A] to-[#E28070] text-white">
            <span className="text-[10px] font-mono tracking-widest text-[#FFF2EE] uppercase block mb-1 font-bold">
              WYD SEOUL 2027
            </span>
            <h4 className="font-serif-kr text-xl font-bold">
              “와서 보아라” (요한 1,39)
            </h4>
            <p className="text-xs text-white/90 mt-1">
              2027 서울 세계청년대회를 맞이하여 한강성당은 제1 중구-용산지구 지구장좌 성당으로서 전 세계 가톨릭 청년 순례자들을 맞이할 준비를 함께하고 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {WYD_INFO.prepPoints.map((pt, idx) => (
              <div key={idx} className="p-3.5 bg-[#FAF8F5] border border-[#E8E1D3] rounded-xl text-xs">
                <strong className="text-[#64262B] block mb-1">{pt.title}</strong>
                <p className="text-[#6B655D]">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="space-y-4 text-xs sm:text-sm text-[#4A463F] leading-relaxed">
          <div className="p-5 bg-[#FAF8F5] border border-[#E8E1D3] rounded-xl space-y-2">
            <h4 className="font-bold text-[#64262B] text-base">본당 사목 및 안내</h4>
            <p className="text-[#6B655D]">
              해당 메뉴의 세부 사목 안내 및 신청은 본당 사무실(<strong>{PARISH_IDENTITY.phoneMain}</strong>)로 문의하시면 친절하게 안내해 드립니다.
            </p>
            <div className="pt-2 text-xs text-[#8E8980]">
              • 사무실 운영시간: 화요일 ~ 일요일 09:00 ~ 18:00 (월요일 휴무)
            </div>
          </div>
        </div>
      );
  }
}
