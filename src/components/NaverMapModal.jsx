import React, { useState } from 'react';
import { X, MapPin, Navigation, Train, Bus, Car, Copy, Check, ExternalLink, Sparkles, Phone, Clock } from 'lucide-react';
import { PARISH_IDENTITY } from '../data/parishData';

export default function NaverMapModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('walking'); // walking | subway | bus | parking

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PARISH_IDENTITY.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] text-[#232220] max-w-4xl w-full rounded-2xl shadow-2xl border border-[#E8E1D3] overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#64262B] px-6 py-4 flex items-center justify-between text-white border-b border-[#7A3238]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-[#B79B67]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#B79B67] uppercase font-bold">
                  NAVER PLACE & ACCESS
                </span>
                <span className="text-[10px] bg-[#03C75A] text-white px-1.5 py-0.2 rounded font-bold">
                  네이버 지도 연동
                </span>
              </div>
              <h3 className="font-serif-kr text-base sm:text-lg font-bold text-white">
                한강성당 오시는 길 & 네이버 지도 안내
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

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Address & Quick Actions Bar */}
          <div className="p-4 rounded-xl bg-white border border-[#EAE3D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif-kr font-bold text-base text-[#64262B]">
                  천주교 서울대교구 한강성당
                </span>
                <span className="text-[11px] font-mono bg-[#EDE7DD] text-[#64262B] px-2 py-0.5 rounded font-bold">
                  우편번호 04423
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C574F] font-serif-kr">
                {PARISH_IDENTITY.address} (이촌동 248)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#F5F1E8] hover:bg-[#EAE3D6] text-[#232220] rounded-lg text-xs font-serif-kr font-semibold border border-[#E0D8C8] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#B79B67]" />}
                <span>{copied ? '주소 복사됨' : '도로명 주소 복사'}</span>
              </button>

              <a
                href="https://naver.me/xBDcIFde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#03C75A] hover:bg-[#02B150] text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                <span>네이버 지도 앱에서 열기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Presentation */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E2DAD0] shadow-sm bg-[#161413]">
            {/* Real Church Entrance Photo & Route Map Graphic */}
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src="/images/church_entrance.jpg"
                alt="한강성당 정문 진입로"
                className="w-full h-full object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

              {/* Pin Callout Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#64262B] text-white px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-[#B79B67] flex items-center gap-2.5 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-[#B79B67] animate-bounce" />
                <div>
                  <span className="font-serif-kr font-bold text-sm block">천주교 한강성당</span>
                  <span className="text-[10px] text-[#EDE7DD] font-mono">이촌역 3-1번 출구 도보 5분 (300m)</span>
                </div>
              </div>

              {/* Bottom Quick Guidance Badge */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-serif-kr">
                <span className="flex items-center gap-1 text-[#F7F4EE]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B79B67]" />
                  지구장좌 성당 • 대성전 / 소성전 / 성모동산 / 주차장
                </span>
                <span className="font-mono text-[11px] text-[#EDE7DD]">
                  대표전화: 02-798-1784
                </span>
              </div>
            </div>
          </div>

          {/* Transit Method Tabs */}
          <div>
            <div className="flex border-b border-[#E8E1D3] gap-2 mb-4">
              <button
                onClick={() => setActiveTab('walking')}
                className={`pb-2 text-xs font-serif-kr font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'walking'
                    ? 'text-[#64262B] border-b-2 border-[#64262B]'
                    : 'text-[#8E8980] hover:text-[#232220]'
                }`}
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>도보 길찾기 (이촌역)</span>
              </button>
              <button
                onClick={() => setActiveTab('subway')}
                className={`pb-2 text-xs font-serif-kr font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'subway'
                    ? 'text-[#64262B] border-b-2 border-[#64262B]'
                    : 'text-[#8E8980] hover:text-[#232220]'
                }`}
              >
                <Train className="w-3.5 h-3.5" />
                <span>지하철 안내</span>
              </button>
              <button
                onClick={() => setActiveTab('bus')}
                className={`pb-2 text-xs font-serif-kr font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'bus'
                    ? 'text-[#64262B] border-b-2 border-[#64262B]'
                    : 'text-[#8E8980] hover:text-[#232220]'
                }`}
              >
                <Bus className="w-3.5 h-3.5" />
                <span>버스 노선</span>
              </button>
              <button
                onClick={() => setActiveTab('parking')}
                className={`pb-2 text-xs font-serif-kr font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'parking'
                    ? 'text-[#64262B] border-b-2 border-[#64262B]'
                    : 'text-[#8E8980] hover:text-[#232220]'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>자가용 & 주차안내</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="bg-white rounded-xl p-4 border border-[#EAE3D6] text-xs font-serif-kr">
              {activeTab === 'walking' && (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#64262B] text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-[#232220]">지하철 4호선 / 경의중앙선 이촌역 3-1번 출구</strong>
                      <p className="text-[#6B655D] mt-0.5">출구로 나오셔서 동부이촌동 현대아파트 방면으로 직진합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#64262B] text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-[#232220]">이촌로81길 골목 진입</strong>
                      <p className="text-[#6B655D] mt-0.5">약 200m 직진 후 우리은행과 편의점 사이 이촌로81길 골목으로 우회전합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#64262B] text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-[#232220]">한강성당 정문 아치 도착 (총 300m / 도보 약 5분)</strong>
                      <p className="text-[#6B655D] mt-0.5">골목 안쪽에 붉은 벽돌의 십자가 종탑과 김대건 신부상이 있는 성당 정문이 위치합니다.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'subway' && (
                <div className="space-y-2.5">
                  <p className="text-[#232220]">
                    <strong>지하철 4호선 / 경의중앙선 이촌역(국립중앙박물관)</strong>에서 가장 가깝습니다.
                  </p>
                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EDE7DD]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-sky-600 text-white font-mono text-[10px] font-bold">4호선</span>
                      <span className="px-2 py-0.5 rounded bg-teal-600 text-white font-mono text-[10px] font-bold">경의중앙선</span>
                      <span className="font-bold text-[#64262B]">이촌역 3-1번 출구 (도보 5분)</span>
                    </div>
                    <p className="text-[#6B655D]">에스컬레이터 이용 시 3-1번 출구, 엘리베이터 이용 시 4번 출구를 이용하시면 편리합니다.</p>
                  </div>
                </div>
              )}

              {activeTab === 'bus' && (
                <div className="space-y-2">
                  <strong className="text-[#232220] block">이촌동 한강맨션 / 신용산초등학교 정류장 하차 (도보 3~5분)</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EDE7DD]">
                      <span className="font-bold text-blue-700 block mb-0.5">간선버스 (파랑)</span>
                      <span className="font-mono text-xs">100번, 502번</span>
                    </div>
                    <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EDE7DD]">
                      <span className="font-bold text-green-700 block mb-0.5">지선버스 (초록)</span>
                      <span className="font-mono text-xs">2016번, 3012번, 6211번</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'parking' && (
                <div className="space-y-2">
                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EDE7DD]">
                    <span className="font-bold text-[#64262B] block mb-1">• 성당 지상 및 지하 주차장 완비</span>
                    <p className="text-[#6B655D]">
                      미사 참례 교우 및 혼인예식 하객분들을 위한 주차 공간이 마련되어 있습니다.
                      주일 교중미사 시간에는 주차장이 혼잡할 수 있으니 대중교통 이용을 적극 권장합니다.
                    </p>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EDE7DD]">
                    <span className="font-bold text-[#64262B] block mb-1">• 내비게이션 검색어</span>
                    <p className="text-[#6B655D] font-mono">
                      티맵 / 카카오내비 / 네이버 지도에 <strong>'천주교 한강성당'</strong> 또는 <strong>'이촌로81길 38'</strong> 입력
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Office Hours Info */}
          <div className="p-3.5 bg-[#F2ECE1] rounded-xl border border-[#E5DECF] flex flex-col sm:flex-row items-center justify-between text-xs font-serif-kr text-[#6B655D] gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B79B67]" />
              <span>본당 사무실: 화~일 09:00 - 18:00 (월요일 정기휴무)</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-[#64262B]">
              <Phone className="w-3.5 h-3.5" />
              <span>전화문의: 02-798-1784 / 혼인: 02-796-1847</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#EFE9DE] px-6 py-3.5 border-t border-[#E0D8C8] flex items-center justify-between">
          <span className="text-xs text-[#8E8980] font-serif-kr">
            천주교 서울대교구 한강성당 공식 지도 안내
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#64262B] hover:bg-[#501E22] text-white text-xs font-serif-kr font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
