import React, { useState } from 'react';
import { PARISH_IDENTITY } from '../data/parishData';
import ParishLogo from './ParishLogo';
import { ExternalLink, Phone, Mail, MapPin, Printer, Lock, X, Shield, ChevronRight } from 'lucide-react';

export default function Footer({
  onOpenAdmin,
  onScrollToMass,
  onNavigateToSubpage,
  onOpenMapModal,
  onOpenEmailModal,
}) {
  const [modalPolicy, setModalPolicy] = useState(null); // 'privacy' | 'anti-email'

  return (
    <footer className="bg-[#1C1B1A] text-[#D5D1C9] border-t border-[#38332E] pt-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#2E2A27]">
          
          {/* Col 1: Authentic Church Sketch Illustration & Parish Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Church Sketch Illustration Artwork from Reference Design */}
            <div className="flex items-center gap-3.5 mb-2">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#2A2624] border border-[#B79B67]/40 shrink-0 p-1">
                <img
                  src="/images/design/footer_church_sketch.jpg"
                  alt="한강성당 역사 건축 스케치"
                  className="w-full h-full object-cover rounded-lg filter contrast-110"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#B79B67] uppercase block">
                  ARCHDIOCESE OF SEOUL
                </span>
                <h3 className="font-serif-kr text-base font-bold text-[#F7F4EE] leading-tight">
                  천주교 서울대교구 한강성당
                </h3>
                <p className="text-[11px] font-display-en text-[#A8A29E] tracking-wider uppercase">
                  HANGANG CATHOLIC CHURCH
                </p>
              </div>
            </div>

            <p className="text-xs text-[#AAA59B] leading-relaxed font-serif-kr pt-1">
              한국인 최초의 사제 순교자 <strong>성 김대건 안드레아</strong>를 주보성인으로 모시며,
              1970년 설립 이래 한강변 이촌동에서 그리스도의 복음과 사랑을 온 세상에 밝히는 신앙의 보금자리입니다.
            </p>

            <div className="text-[11px] font-mono text-[#B79B67] space-y-0.5 pt-1">
              <p>• 주보성인: 성 김대건 안드레아 사제 순교자 (축일: 7월 5일)</p>
              <p>• 본당 설립: 1970년 12월 13일 | 성전 축성: 1990년 12월 30일</p>
              <p>• 관할 구역: 서울특별시 용산구 이촌1·2동 일대</p>
            </div>
          </div>

          {/* Col 2: Parish Office, Contacts & Bank Account (5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5 text-xs font-serif-kr">
            <h4 className="text-sm font-bold text-[#F7F4EE] tracking-wide mb-3 border-b border-[#38332E] pb-2">
              성당 정보 및 사무실 안내
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B79B67] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8980] block text-[11px]">도로명 주소</span>
                  <span className="text-[#EDE7DD]">{PARISH_IDENTITY.address}</span>
                  <span className="text-[11px] text-[#A8A29E] block">(우편번호 {PARISH_IDENTITY.postalCode})</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B79B67] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8980] block text-[11px]">성당 사무실 직통</span>
                  <a href={`tel:${PARISH_IDENTITY.phoneMain}`} className="font-mono text-[#F7F4EE] font-bold text-sm hover:underline">
                    {PARISH_IDENTITY.phoneMain}
                  </a>
                  <span className="text-[10px] text-[#8E8980] block">화~일 09:00 - 18:00 (월요일 휴무)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#5C8987] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8980] block text-[11px]">혼인성사 전용 문의</span>
                  <span className="font-mono text-[#F7F4EE] font-bold">{PARISH_IDENTITY.phoneWedding}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B79B67] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8980] block text-[11px]">대표 이메일</span>
                  <button
                    onClick={onOpenEmailModal}
                    className="font-mono text-[#F7F4EE] hover:underline hover:text-[#B79B67] cursor-pointer text-left"
                    title="성당 대표 메일 문의 작성하기"
                  >
                    {PARISH_IDENTITY.email}
                  </button>
                </div>
              </div>
            </div>

            {/* Donation / Parish Support Bank Account */}
            <div className="p-3 rounded-xl bg-[#252220] border border-[#3A3530] text-xs mt-2">
              <span className="text-[11px] text-[#B79B67] font-bold block mb-0.5">
                본당 교무금 및 후원 계좌
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[#EDE7DD] gap-1">
                <span>우리은행 <strong className="font-mono text-[#F7F4EE]">1005-501-123456</strong></span>
                <span className="text-[#A8A29E] text-[11px]">예금주: (재)천주교서울대교구유지재단 한강성당</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Diocesan Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-[#F7F4EE] tracking-wide mb-3 border-b border-[#38332E] pb-2 font-serif-kr">
              주요 바로가기
            </h4>

            <ul className="space-y-2 font-serif-kr text-[#AAA59B]">
              <li>
                <button
                  onClick={() => onNavigateToSubpage?.('about', 'intro')}
                  className="hover:text-[#F7F4EE] flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span>한강성당 소개</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#B79B67]" />
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToMass}
                  className="hover:text-[#F7F4EE] flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span>주일·평일 미사 시간표</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#B79B67]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSubpage?.('help', 'wedding-info')}
                  className="hover:text-[#F7F4EE] flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span>혼인성사 안내</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#B79B67]" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMapModal}
                  className="hover:text-[#F7F4EE] flex items-center justify-between w-full text-left cursor-pointer text-[#03C75A] font-bold"
                >
                  <span>네이버 플레이스 지도 (인앱)</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#03C75A]" />
                </button>
              </li>
              <li>
                <a
                  href="https://aos.catholic.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F4EE] flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span>천주교 서울대교구</span>
                  <ExternalLink className="w-3 h-3 text-[#AAA59B]" />
                </a>
              </li>
              <li>
                <a
                  href="https://goodnews.catholic.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F4EE] flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span>가톨릭 굿뉴스 (GoodNews)</span>
                  <ExternalLink className="w-3 h-3 text-[#AAA59B]" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8E8980] font-serif-kr">
          <div>
            <p>© 2026 천주교 서울대교구 한강성당 (Hangang Catholic Church). All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalPolicy('privacy')}
              className="hover:text-[#F7F4EE] transition-colors cursor-pointer"
            >
              개인정보처리방침
            </button>
            <span>•</span>
            <button
              onClick={() => setModalPolicy('anti-email')}
              className="hover:text-[#F7F4EE] transition-colors cursor-pointer"
            >
              이메일무단수집거부
            </button>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-[#B79B67] hover:text-[#EDE7DD] transition-colors cursor-pointer"
              title="관리자 CMS 로그인"
            >
              <Lock className="w-3 h-3" />
              <span>관리자 로그인</span>
            </button>
          </div>
        </div>

      </div>

      {/* Policy Dialog Modals */}
      {modalPolicy && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalPolicy(null)}
        >
          <div
            className="bg-[#23201E] text-[#D5D1C9] max-w-lg w-full rounded-2xl border border-[#3E3832] p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalPolicy(null)}
              className="absolute top-4 right-4 text-[#8E8980] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-kr text-base font-bold text-[#F7F4EE] mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#B79B67]" />
              {modalPolicy === 'privacy' ? '개인정보처리방침' : '이메일 무단수집 거부'}
            </h3>

            <div className="text-xs font-serif-kr space-y-2 text-[#AAA59B] max-h-60 overflow-y-auto leading-relaxed pr-2">
              {modalPolicy === 'privacy' ? (
                <>
                  <p>
                    천주교 서울대교구 한강성당은 교우 및 방문자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
                  </p>
                  <p>
                    <strong>수집 항목:</strong> 혼인상담 및 문의 접수 시 이름, 연락처, 세례명, 문의 내용.
                  </p>
                  <p>
                    <strong>이용 목적:</strong> 본당 사목 상담, 혼인성사 일정 확인 및 안내.
                  </p>
                  <p>
                    <strong>보유 기간:</strong> 상담 완료 및 해당 목적 달성 후 지체 없이 파기합니다.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
                  </p>
                  <p>
                    이를 위반 시 정보통신망법 등에 의해 형사처벌될 수 있음을 유념하시기 바랍니다.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
