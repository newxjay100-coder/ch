import React, { useState } from 'react';
import { Phone, Clock, Bus, Car, Train, Copy, Check, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import { PARISH_IDENTITY } from '../data/parishData';

export default function LocationSection({ onOpenMapModal }) {
  const [activeTransitTab, setActiveTransitTab] = useState('subway');
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(PARISH_IDENTITY.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openMap = (service) => {
    if (service === 'naver') {
      if (onOpenMapModal) {
        onOpenMapModal();
      } else {
        window.open('https://naver.me/xBDcIFde', '_blank');
      }
    } else if (service === 'kakao') {
      const encodedAddress = encodeURIComponent(PARISH_IDENTITY.address);
      window.open(`https://map.kakao.com/?q=${encodedAddress}`, '_blank');
    }
  };

  return (
    <section id="location" className="py-24 md:py-32 church-brick-bg border-t border-stone-200/80 relative overflow-hidden">
      {/* Background Soft Aura */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#B69A63]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase mb-2 font-bold">
            Directions & Parish Information
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
            오시는 길
          </h2>
          <span className="font-display-en text-xs tracking-widest text-[#8E8980] uppercase mt-1">
            LOCATION & ACCESS
          </span>
          <div className="w-12 h-0.5 bg-[#B69A63] my-4" />
          <p className="text-sm md:text-base text-[#5C574F] max-w-xl font-serif-kr leading-relaxed">
            서울특별시 용산구 이촌로81길 38 (04423)
            <br />
            지하철 4호선·경의중앙선 이촌역 3-1번 출구에서 도보로 5분 거리(약 300m)에 위치합니다.
          </p>
        </div>

        {/* 2-Column Modern Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Map & Authentic Church Entrance Photo (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF9F6] rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            {/* Real Church Entrance Photo Banner */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#1C1A18] group">
              <img
                src="/images/church_entrance.jpg"
                alt="천주교 한강성당 입구 아치와 종탑 전경"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#F7F4EE] font-mono border border-white/20 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#B69A63]" />
                <span>성당 정문 진입로 실물 사진</span>
              </div>

              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <h4 className="font-serif-kr text-lg font-bold">
                  성당 입구 아치와 종탑 전경
                </h4>
                <p className="text-xs text-[#E5DFD5] font-serif-kr">
                  이촌로81길 골목 안쪽에 위치한 단아한 붉은 벽돌 본당 진입로
                </p>
              </div>
            </div>

            {/* Address & Direct Map Actions */}
            <div className="p-6 bg-white/95 flex-1 flex flex-col justify-between border-t border-stone-200">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#5A2428]" />
                    <span className="font-serif-kr font-bold text-base text-[#1A1918]">
                      천주교 서울대교구 한강성당
                    </span>
                  </div>
                  <span className="text-xs font-mono bg-[#FAF6EC] border border-[#E8DFCC] text-[#5A2428] px-2.5 py-0.5 rounded-full font-bold shadow-2xs">
                    우편번호 04423
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5C574F] font-serif-kr mb-4 pl-6">
                  {PARISH_IDENTITY.address}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FAF9F6] border border-stone-200 rounded-lg text-xs font-serif-kr hover:bg-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#8E8980]" />}
                  <span>{copied ? '주소 복사됨' : '도로명 주소 복사'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openMap('naver')}
                    className="px-4 py-2 bg-[#03C75A] text-white rounded-lg text-xs font-bold transition-opacity hover:opacity-90 flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>네이버 지도</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => openMap('kakao')}
                    className="px-4 py-2 bg-[#FEE500] text-[#191919] rounded-lg text-xs font-bold transition-opacity hover:opacity-90 flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>카카오맵</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Public Transit & Office Guide with Church Entrance Background (6 Cols) */}
          <div className="lg:col-span-6 bg-[#FAF9F6] rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle church entrance watermark */}
            <div
              className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-[0.035] bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url('/images/church_entrance.jpg')` }}
            />

            <div className="relative z-10">
              {/* Transit Tabs */}
              <div className="flex items-center gap-1 p-1 bg-[#F5F2EB] rounded-xl mb-6">
                {[
                  { id: 'subway', label: '지하철', icon: Train },
                  { id: 'bus', label: '버스', icon: Bus },
                  { id: 'car', label: '자가용/주차', icon: Car },
                ].map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTransitTab(t.id)}
                      className={`flex-1 py-2.5 text-xs sm:text-sm font-serif-kr rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                        activeTransitTab === t.id
                          ? 'bg-[#5A2428] text-white font-bold shadow-xs'
                          : 'text-[#5C574F] hover:bg-white/80'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Transit Content */}
              <div className="min-h-[160px] text-xs font-serif-kr space-y-3 mb-6">
                {activeTransitTab === 'subway' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="p-4 bg-white border-l-3 border-[#0072CE] rounded-xl border border-stone-200 shadow-2xs">
                      <span className="font-bold text-[#0072CE] text-sm block mb-1">
                        4호선 / 경의중앙선 이촌역 3-1번 출구 (도보 5분, 300m)
                      </span>
                      <p className="text-[#5C574F] leading-relaxed">
                        이촌역 3-1번 출구로 나와 동쪽 방향으로 약 300m 직진 후, 이촌로81길 골목으로 진입하시면 붉은 벽돌의 한강성당 입구가 보입니다.
                      </p>
                    </div>
                    <div className="p-3.5 bg-white border border-stone-200 rounded-xl text-[#5C574F] shadow-2xs">
                      <strong>1호선 용산역 / 4호선 신용산역 환승 시:</strong> 신용산역 3번 출구에서 마을버스 용산01 또는 지선버스 0017 환승 후 이촌동한가람아파트 하차.
                    </div>
                  </div>
                )}

                {activeTransitTab === 'bus' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="font-bold text-[#1A1918] block mb-1">
                        이촌동한가람아파트 앞 정류장 (03-241)
                      </span>
                      <p className="text-[#5C574F]">
                        간선 505 / 지선 0017 / 마을 용산01 버스 하차 후 도보 3분
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="font-bold text-[#1A1918] block mb-1">
                        신동아아파트 앞 정류장 (03-242)
                      </span>
                      <p className="text-[#5C574F]">
                        간선 505 / 마을 용산01 하차 후 도보 4분
                      </p>
                    </div>
                  </div>
                )}

                {activeTransitTab === 'car' && (
                  <div className="space-y-3 animate-fadeIn">
                    <p className="text-[#4A463F] leading-relaxed">
                      네비게이션에 <strong>“천주교 한강성당”</strong> 또는 <strong>“용산구 이촌로81길 38”</strong>을 입력하십시오.
                    </p>
                    <div className="p-4 bg-white border-l-3 border-[#B69A63] text-xs text-[#7A6A4E] rounded-xl border border-stone-200 shadow-2xs">
                      <span className="font-bold block mb-1">주차장 안내</span>
                      <p>
                        성당 경내 지상 마당 및 지하 1·2층 주차장을 이용하실 수 있습니다. 
                        주일 교중미사(11:00) 전후로는 혼잡하므로 대중교통 이용을 권장합니다.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Parish Office Hours Card */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif-kr font-bold text-xs text-[#5A2428] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B69A63]" />
                    <span>본당 사무실 운영 시간</span>
                  </span>
                  <span className="text-[11px] text-[#8E8980] font-serif-kr">매주 월요일 휴무</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#5C574F] font-serif-kr pt-1">
                  <div>
                    <span className="font-medium text-[#1A1918] block">화 ~ 토요일:</span>
                    <span>09:00 - 18:00 (점심 12:00-13:00)</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#1A1918] block">일요일 (주일):</span>
                    <span>07:00 - 17:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Telephone CTAs */}
            <div className="pt-6 mt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-4 text-xs font-serif-kr">
                <a
                  href={`tel:02-796-1845`}
                  className="font-mono text-[#5A2428] font-bold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B69A63]" />
                  <span>대표 {PARISH_IDENTITY.phoneMain}</span>
                </a>
                <a
                  href={`tel:${PARISH_IDENTITY.phoneWedding}`}
                  className="font-mono text-[#5A2428] font-bold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B69A63]" />
                  <span>혼인 {PARISH_IDENTITY.phoneWedding}</span>
                </a>
              </div>

              <a
                href={`tel:02-796-1845`}
                className="px-5 py-2.5 bg-[#5A2428] hover:bg-[#3E1619] text-white rounded-xl text-xs font-serif-kr font-semibold transition-colors shadow-2xs"
              >
                사무실 전화하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
