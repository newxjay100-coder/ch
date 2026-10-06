import React, { useState } from 'react';
import { WEDDING_INFO } from '../data/parishData';
import { Phone, ChevronRight, Sparkles, Heart } from 'lucide-react';

export default function WeddingSection({ onOpenInquiryModal }) {
  const [activeTab, setActiveTab] = useState('guide'); // guide | schedule | facilities | faq

  const faqItems = [
    {
      q: '신랑 또는 신부 중 한 사람만 천주교 신자여도 혼인미사가 가능한가요?',
      a: '네, 가능합니다. 한 분이 가톨릭 세례자이고 다른 한 분이 비신자인 경우, 본당 사제와의 상담을 통해 관면혼인(혼종혼인 관면)을 받아 대성전에서 거룩하게 혼인성사를 거행하실 수 있습니다.',
    },
    {
      q: '타 본당 신자도 한강성당에서 혼인을 올릴 수 있나요?',
      a: '네, 교구 내 타 본당 신자 교우도 한강성당 대성전 혼인 예약이 가능합니다. 단, 교적 본당 주임신부님의 혼인면담 및 타본당 혼인 허가서가 필요합니다.',
    },
    {
      q: '사진 촬영과 피로연(식사)은 어떻게 진행되나요?',
      a: '성전의 거룩함과 전례 질서를 유지하기 위해 서울대교구 공인 지정 사진업체 및 지정 피로연 뷔페 업체를 통해 정갈하게 진행됩니다.',
    },
    {
      q: '혼인미사 예약은 언제부터 가능한가요?',
      a: '상반기 및 하반기 정기 추첨 공고를 통해 예약 접수를 진행하며, 잔여 일정에 한해 상시 선착순 전화 접수(02-796-1847)가 가능합니다.',
    },
  ];

  return (
    <section id="wedding" className="py-24 md:py-32 bg-white border-t border-stone-200 relative overflow-hidden">
      {/* Background Soft Aura */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#B69A63]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase mb-2 font-bold">
            Holy Sacrament of Matrimony
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
            혼인성사
          </h2>
          <span className="font-display-en text-xs tracking-widest text-[#8E8980] uppercase mt-1">
            SACRAMENT OF MATRIMONY
          </span>
          <div className="w-12 h-0.5 bg-[#B69A63] my-4" />
          <p className="text-sm md:text-base text-[#5C574F] max-w-xl font-serif-kr leading-relaxed">
            “하느님께서 맺어 주신 것을 사람이 갈라놓아서는 안 된다.” (마르 10,9)
            <br />
            붉은 벽돌의 단아하고 성스러운 한강성당 대성전에서 두 분의 첫걸음을 축복합니다.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-[#5A2428] text-white rounded-full text-xs font-mono shadow-xs">
            <Phone className="w-3.5 h-3.5 text-[#B69A63]" />
            <span>혼인성사 직통 문의: {WEDDING_INFO.phone}</span>
          </div>
        </div>

        {/* Modern Split View: Left Authentic Sanctuary Atmosphere + Right Guide Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Authentic Sanctuary Image & Action Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F6] rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#1C1A18] group">
              <img
                src="/images/altar_crucifix_stainedglass.jpg"
                alt="한강성당 대성전 혼인미사 제대 전경"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#F7F4EE] font-mono border border-white/20 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#B69A63]" />
                <span>대성전 혼인미사 거행 공간</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-[#B69A63] tracking-widest uppercase block mb-1 font-semibold">
                  Hangang Parish Main Sanctuary
                </span>
                <h4 className="font-serif-kr text-lg font-bold">
                  단아하고 성스러운 대성전 버진로드
                </h4>
                <p className="text-xs text-[#E5DFD5] font-serif-kr mt-1">
                  붉은 벽돌과 양승준 교수의 종려나무 스테인드글라스 빛이 비추는 엄숙한 혼인 예식
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/95 flex-1 flex flex-col justify-between relative overflow-hidden border-t border-stone-200">
              {/* Subtle church entrance watermark */}
              <div
                className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url('/images/church_entrance.jpg')` }}
              />

              <div className="space-y-3 mb-6 relative z-10">
                <h5 className="font-serif-kr text-sm font-bold text-[#5A2428] flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#B69A63]" />
                  <span>예약 및 상담 안내</span>
                </h5>
                <p className="text-xs text-[#5C574F] font-serif-kr leading-relaxed">
                  혼인미사 일정 확인 및 예약은 직통 전화(<strong>02-796-1847</strong>) 또는 온라인 문의 접수 후 본당 사무실 방문 상담을 통해 이루어집니다.
                </p>
                <div className="text-[11px] text-[#8E8980] font-serif-kr">
                  ※ 피로연 및 본식 사진은 서울대교구 지정 공인 업체를 통해 정갈하게 진행됩니다.
                </div>
              </div>

              <button
                onClick={onOpenInquiryModal}
                className="w-full py-3.5 bg-[#5A2428] hover:bg-[#3E1619] text-white rounded-xl font-serif-kr text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2 relative z-10"
              >
                <span>온라인 혼인 문의 및 일정 신청</span>
                <ChevronRight className="w-4 h-4 text-[#B69A63]" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Tabbed Information Guide (7 Cols) with Altar Watermark */}
          <div className="lg:col-span-7 bg-[#FAF9F6] rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle authentic sanctuary altar watermark in background */}
            <div
              className="absolute right-0 top-0 bottom-0 w-2/3 opacity-[0.035] bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url('/images/altar_crucifix_stainedglass.jpg')` }}
            />

            <div className="relative z-10">
              {/* Tabs */}
              <div className="flex items-center gap-1 sm:gap-4 border-b border-stone-200 pb-3 mb-6 overflow-x-auto">
                {[
                  { id: 'guide', label: '혼인성사 요건' },
                  { id: 'schedule', label: '가능 일정 / 시간' },
                  { id: 'facilities', label: '시설 및 편의' },
                  { id: 'faq', label: '자주 묻는 질문' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 px-2 sm:px-3 font-serif-kr text-xs sm:text-sm transition-all whitespace-nowrap relative ${
                      activeTab === tab.id
                        ? 'font-bold text-[#5A2428]'
                        : 'text-[#8E8980] hover:text-[#1A1918]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2428]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab 1: Requirements Guide */}
              {activeTab === 'guide' && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-serif-kr text-base font-bold text-[#5A2428]">
                    혼인성사 필수 요건 및 준비 서류
                  </h4>
                  <ul className="space-y-3">
                    {WEDDING_INFO.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A463F] font-serif-kr">
                        <span className="w-5 h-5 rounded-full bg-[#FAF6EC] text-[#5A2428] flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold border border-[#E8DFCC]">
                          {idx + 1}
                        </span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-[#7A6A4E] font-serif-kr mt-4 shadow-2xs">
                    <strong>제출 서류:</strong> 혼인당사자 세례증명서 원본 (발행일 6개월 이내), 혼인관계증명서 및 가족관계증명서, 카나강좌 수료증, 교적본당 혼인면담서.
                  </div>
                </div>
              )}

              {/* Tab 2: Schedule & Times */}
              {activeTab === 'schedule' && (
                <div className="space-y-4 animate-fadeIn">
                  <h4 className="font-serif-kr text-base font-bold text-[#5A2428]">
                    혼인미사 봉헌 시간
                  </h4>
                  <p className="text-xs text-[#5C574F] font-serif-kr">
                    한강성당 대성전은 토요일에 한하여 엄숙한 혼인미사를 봉헌합니다.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {WEDDING_INFO.scheduleTimes.map((s, idx) => (
                      <div key={idx} className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs">
                        <span className="font-serif-kr text-sm font-bold text-[#1A1918] block mb-1">
                          {s.day}
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {s.times.map((t, tIdx) => (
                            <span key={tIdx} className="font-mono text-xs font-bold text-[#5A2428] bg-[#FAF9F6] border border-stone-200 px-3 py-1 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#8E8980] font-serif-kr mt-4">
                    ※ 일요일 및 사순 시기, 교구 주요 전례일에는 혼인미사가 봉헌되지 않습니다.
                  </p>
                </div>
              )}

              {/* Tab 3: Facilities */}
              {activeTab === 'facilities' && (
                <div className="space-y-3.5 animate-fadeIn">
                  <h4 className="font-serif-kr text-base font-bold text-[#5A2428]">
                    부대시설 및 편의 안내
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {WEDDING_INFO.facilities.map((fac, idx) => (
                      <div key={idx} className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs">
                        <span className="font-serif-kr text-xs font-bold text-[#1A1918] block mb-1">
                          {fac.name}
                        </span>
                        <span className="text-[11px] text-[#5C574F] font-serif-kr block">
                          {fac.desc}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-[#5C574F] font-serif-kr mt-3 shadow-2xs">
                    <strong>주차 안내:</strong> 경내 지상 및 지하 주차장에 하객 차량 주차가 지원됩니다. (약 70대 수용 가능)
                  </div>
                </div>
              )}

              {/* Tab 4: FAQ */}
              {activeTab === 'faq' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-serif-kr text-base font-bold text-[#5A2428]">
                    자주 묻는 질문
                  </h4>
                  <div className="space-y-2.5">
                    {faqItems.map((faq, idx) => (
                      <div key={idx} className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs">
                        <p className="font-serif-kr text-xs font-bold text-[#1A1918] mb-1.5 flex items-start gap-1.5">
                          <span className="text-[#5A2428] font-mono font-bold">Q.</span>
                          <span>{faq.q}</span>
                        </p>
                        <p className="font-serif-kr text-xs text-[#5C574F] pl-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Contact Note */}
            <div className="pt-6 mt-4 border-t border-stone-200 flex items-center justify-between text-xs text-[#8E8980] relative z-10">
              <span className="font-serif-kr">
                혼인성사 상담실: 화~토 09:00 - 17:00
              </span>
              <a
                href="tel:02-796-1847"
                className="font-mono text-[#5A2428] font-bold hover:underline"
              >
                02-796-1847
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
