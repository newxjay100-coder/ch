import React, { useState } from 'react';
import { Edit3, Sparkles, CheckCircle2, MapPin, ChevronRight } from 'lucide-react';

export default function MassSchedule({ schedule, onOpenAdmin }) {
  const [activeTab, setActiveTab] = useState('sunday'); // 'sunday' | 'weekday' | 'sacraments'
  const [selectedWeekday, setSelectedWeekday] = useState('tue'); // mon ~ sat
  const [nextMassInfo] = useState(() => {
    const today = new Date();
    const day = today.getDay(); // 0: Sun, 1: Mon, ...
    if (day === 0) {
      return { dayName: '주일', time: '11:00', title: '교중미사', location: '대성전' };
    }
    return { dayName: '평일', time: '10:00', title: '오전 미사', location: '대성전' };
  });

  const weekdayKeys = [
    { key: 'mon', label: '월', full: '월요일' },
    { key: 'tue', label: '화', full: '화요일' },
    { key: 'wed', label: '수', full: '수요일' },
    { key: 'thu', label: '목', full: '목요일' },
    { key: 'fri', label: '금', full: '금요일' },
    { key: 'sat', label: '토', full: '토요일' },
  ];

  return (
    <section id="mass-schedule" className="py-24 md:py-32 church-brick-bg relative overflow-hidden">
      {/* Luminous Light Background Aura */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-[#B69A63]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#5A2428]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-8 mb-12">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase block mb-2 font-bold">
              Sacred Liturgy & Mass Schedule
            </span>
            <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
              미사 안내
            </h2>
            <p className="mt-3 text-sm text-[#5C574F] font-serif-kr max-w-xl leading-relaxed">
              “너희는 나를 기억하여 이를 행하여라.” (루카 22,19)
              <br className="hidden sm:inline" /> 주님의 거룩한 제대 앞으로 교우 여러분을 초대합니다.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            {/* Live Next Mass Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] rounded-full border border-stone-200 text-xs font-serif-kr text-[#5A2428] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>오늘의 주요 미사:</span>
              <strong className="font-mono text-sm">{nextMassInfo.time}</strong>
              <span className="text-[#8E8980]">({nextMassInfo.title})</span>
            </div>

            {/* CMS Edit Button */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F9F7F2] text-[#5A2428] text-xs rounded-full border border-stone-200 transition-all font-medium shadow-2xs hover:shadow-xs"
              title="관리자 CMS에서 미사 시간 즉시 편집"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#B69A63]" />
              <span>미사시간 편집</span>
            </button>
          </div>
        </div>

        {/* Modern Split Layout: Left Visual Editorial + Right Clean Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Authentic Sanctuary Visual Feature (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden border border-stone-200 bg-[#FAF9F6] relative group shadow-sm">
            {/* Photo Container */}
            <div className="relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
              <img
                src="/images/altar_crucifix_stainedglass.jpg"
                alt="천주교 한강성당 대성전 제대와 십자고상"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141211]/85 via-black/25 to-transparent" />
              
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#F7F4EE] font-mono border border-white/20 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#B69A63]" />
                <span>대성전 제대 실물 사진</span>
              </div>

              {/* Text overlay on image bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-[#B69A63] tracking-widest uppercase block mb-1 font-semibold">
                  Sanctuary of Hangang Parish
                </span>
                <h3 className="font-serif-kr text-lg sm:text-xl font-bold tracking-tight">
                  대성전 제대와 종려나무 스테인드글라스
                </h3>
                <p className="text-xs text-[#E5DFD5] font-serif-kr mt-1 line-clamp-2">
                  최종태(요셉) 작가의 청동 십자고상과 양승준 교수의 부활 종려나무 빛이 감싸는 거룩한 전례 공간
                </p>
              </div>
            </div>

            {/* Bottom Parish Liturgy Notice Card with Subtle Church Watermark */}
            <div className="p-6 bg-white/95 backdrop-blur-sm border-t border-stone-200 flex-1 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle authentic church watermark */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: `url('/images/church_exterior.jpg')` }}
              />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2 text-xs font-serif-kr font-bold text-[#5A2428]">
                  <CheckCircle2 className="w-4 h-4 text-[#B69A63]" />
                  <span>전례 참례 시 안내사항</span>
                </div>
                <ul className="text-xs text-[#5C574F] space-y-1.5 font-serif-kr leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#B69A63] font-bold">•</span>
                    <span>미사 시작 10분 전까지 대성전에 입장하여 마음을 모아 기도합시다.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#B69A63] font-bold">•</span>
                    <span>영성체는 가톨릭 세례를 받고 은총 상태에 있는 신자만 참여할 수 있습니다.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#B69A63] font-bold">•</span>
                    <span>주일 교중미사(11:00) 후에는 지하 만남의 방에서 친교와 성물방 이용이 가능합니다.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#8E8980] relative z-10">
                <span className="flex items-center gap-1 font-serif-kr">
                  <MapPin className="w-3.5 h-3.5 text-[#5A2428]" />
                  대성전 (본관 2층) / 소성전 (본관 1층)
                </span>
                <span className="font-mono text-[#5A2428] font-bold">02-796-1845</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Editorial Schedule Table (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Elegant Minimalist Tab Buttons */}
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2 mb-6">
              <button
                onClick={() => setActiveTab('sunday')}
                className={`pb-2.5 px-4 font-serif-kr text-sm sm:text-base transition-all relative ${
                  activeTab === 'sunday'
                    ? 'font-bold text-[#5A2428]'
                    : 'text-[#8E8980] hover:text-[#1A1918]'
                }`}
              >
                <span>주일 미사</span>
                <span className="ml-1.5 text-xs font-mono text-[#B69A63] font-bold">5회</span>
                {activeTab === 'sunday' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2428]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('weekday')}
                className={`pb-2.5 px-4 font-serif-kr text-sm sm:text-base transition-all relative ${
                  activeTab === 'weekday'
                    ? 'font-bold text-[#5A2428]'
                    : 'text-[#8E8980] hover:text-[#1A1918]'
                }`}
              >
                <span>평일 미사</span>
                <span className="ml-1.5 text-xs font-mono text-[#B69A63] font-bold">월~토</span>
                {activeTab === 'weekday' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2428]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('sacraments')}
                className={`pb-2.5 px-4 font-serif-kr text-sm sm:text-base transition-all relative ${
                  activeTab === 'sacraments'
                    ? 'font-bold text-[#5A2428]'
                    : 'text-[#8E8980] hover:text-[#1A1918]'
                }`}
              >
                <span>성사 및 기도</span>
                <span className="ml-1.5 text-xs font-mono text-[#B69A63] font-bold">고해/성시간</span>
                {activeTab === 'sacraments' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2428]" />
                )}
              </button>
            </div>

            {/* TAB 1: Sunday Mass Table with Authentic Altar Overlay */}
            {activeTab === 'sunday' && (
              <div className="space-y-3 animate-fadeIn relative">
                {/* Visual Banner Header with Altar Photo */}
                <div className="relative rounded-xl overflow-hidden border border-[#E8DFCC] p-4 text-xs text-[#5A2428] mb-3 bg-[#FCFBF8] shadow-2xs">
                  <div
                    className="absolute inset-0 opacity-[0.07] bg-cover bg-center pointer-events-none"
                    style={{ backgroundImage: `url('/images/altar_crucifix_stainedglass.jpg')` }}
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-serif-kr font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B69A63]" />
                      매 주일 총 5회의 미사가 성스럽게 봉헌됩니다.
                    </span>
                    <span className="font-mono text-[11px] text-[#B69A63] font-bold">대성전 / 소성전</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {schedule.sunday.map((slot, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border transition-all flex items-center justify-between gap-4 relative overflow-hidden ${
                        slot.isHighlight
                          ? 'bg-gradient-to-r from-[#FAF6EC] to-white border-[#B69A63] shadow-xs ring-1 ring-[#B69A63]/30'
                          : 'bg-white border-stone-200/90 hover:border-[#CCC6B8] hover:shadow-2xs'
                      }`}
                    >
                      {/* Very subtle authentic sanctuary watermark in card background */}
                      <div
                        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] bg-cover bg-center pointer-events-none"
                        style={{ backgroundImage: `url('/images/altar_crucifix_stainedglass.jpg')` }}
                      />

                      <div className="flex items-center gap-4 relative z-10">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-[#5A2428] min-w-[70px]">
                          {slot.time}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif-kr font-bold text-base text-[#1A1918]">
                              {slot.title}
                            </span>
                            {slot.isHighlight && (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-[#5A2428] text-white px-2 py-0.5 rounded-full font-medium">
                                <Sparkles className="w-2.5 h-2.5 text-[#B69A63]" />
                                교중미사
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-[#5C574F] font-serif-kr">{slot.target}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 relative z-10">
                        <span className="text-xs px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-stone-200 text-[#555047] font-mono">
                          {slot.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Weekday Mass Table with Modern Day Selector */}
            {activeTab === 'weekday' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Horizontal Day Chips */}
                <div className="flex items-center gap-1.5 p-1 bg-[#F5F2EB] rounded-xl">
                  {weekdayKeys.map((day) => (
                    <button
                      key={day.key}
                      onClick={() => setSelectedWeekday(day.key)}
                      className={`flex-1 py-2.5 text-xs sm:text-sm font-serif-kr rounded-lg transition-all ${
                        selectedWeekday === day.key
                          ? 'bg-[#5A2428] text-white font-bold shadow-xs'
                          : 'text-[#5C574F] hover:bg-white/80'
                      }`}
                    >
                      <span className="block font-medium">{day.label}</span>
                      <span className="block text-[10px] opacity-80 hidden sm:block">{day.full}</span>
                    </button>
                  ))}
                </div>

                {/* Day Time Slots with Church Exterior Background */}
                <div className="space-y-2.5 min-h-[220px] relative">
                  <div className="flex items-center justify-between text-xs text-[#8E8980] px-1 font-serif-kr">
                    <span>
                      {weekdayKeys.find((d) => d.key === selectedWeekday)?.full} 미사 봉헌 시간
                    </span>
                    <span className="font-mono text-[#B69A63] font-bold">
                      총 {schedule.weekday[selectedWeekday]?.length || 0}회 봉헌
                    </span>
                  </div>

                  {schedule.weekday[selectedWeekday]?.map((slot, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white border border-stone-200/90 flex items-center justify-between gap-4 hover:border-[#CCC6B8] hover:shadow-2xs transition-all relative overflow-hidden"
                    >
                      {/* Subtle church exterior watermark */}
                      <div
                        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.035] bg-cover bg-center pointer-events-none"
                        style={{ backgroundImage: `url('/images/church_exterior.jpg')` }}
                      />

                      <div className="flex items-center gap-4 relative z-10">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-[#5A2428] min-w-[70px]">
                          {slot.time}
                        </span>
                        <div>
                          <span className="font-serif-kr font-bold text-base text-[#1A1918] block">
                            {slot.title}
                          </span>
                          {slot.target && (
                            <span className="text-xs text-[#5C574F] font-serif-kr">
                              {slot.target}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="text-xs px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-stone-200 text-[#555047] font-mono relative z-10">
                        {slot.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Sacraments & Prayers Guide with Sacred Sculpture Background */}
            {activeTab === 'sacraments' && (
              <div className="space-y-3.5 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 bg-white border border-stone-200/90 rounded-xl relative overflow-hidden shadow-2xs">
                    <div
                      className="absolute right-0 bottom-0 w-24 h-24 opacity-[0.06] bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: `url('/images/way_of_cross_15.png')` }}
                    />
                    <span className="text-xs font-mono uppercase text-[#B69A63] font-bold block mb-1">
                      Sacrament of Reconciliation
                    </span>
                    <h4 className="font-serif-kr font-bold text-base text-[#5A2428] mb-2">
                      고해성사
                    </h4>
                    <p className="text-xs text-[#5C574F] font-serif-kr leading-relaxed">
                      {schedule.sacraments.confession}
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200/90 rounded-xl relative overflow-hidden shadow-2xs">
                    <div
                      className="absolute right-0 bottom-0 w-24 h-24 opacity-[0.06] bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: `url('/images/altar_crucifix_stainedglass.jpg')` }}
                    />
                    <span className="text-xs font-mono uppercase text-[#B69A63] font-bold block mb-1">
                      Eucharistic Adoration
                    </span>
                    <h4 className="font-serif-kr font-bold text-base text-[#5A2428] mb-2">
                      성시간 (성체조배)
                    </h4>
                    <p className="text-xs text-[#5C574F] font-serif-kr leading-relaxed">
                      {schedule.sacraments.holyHour}
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200/90 rounded-xl relative overflow-hidden shadow-2xs">
                    <div
                      className="absolute right-0 bottom-0 w-24 h-24 opacity-[0.06] bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: `url('/images/church_entrance.jpg')` }}
                    />
                    <span className="text-xs font-mono uppercase text-[#B69A63] font-bold block mb-1">
                      Infant Baptism
                    </span>
                    <h4 className="font-serif-kr font-bold text-base text-[#5A2428] mb-2">
                      유아세례
                    </h4>
                    <p className="text-xs text-[#5C574F] font-serif-kr leading-relaxed">
                      {schedule.sacraments.infantBaptism}
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200/90 rounded-xl relative overflow-hidden shadow-2xs">
                    <div
                      className="absolute right-0 bottom-0 w-24 h-24 opacity-[0.06] bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: `url('/images/statue_kim_taegon.jpg')` }}
                    />
                    <span className="text-xs font-mono uppercase text-[#B69A63] font-bold block mb-1">
                      Sacrament of the Sick
                    </span>
                    <h4 className="font-serif-kr font-bold text-base text-[#5A2428] mb-2">
                      병자성사 및 봉성체
                    </h4>
                    <p className="text-xs text-[#5C574F] font-serif-kr leading-relaxed">
                      {schedule.sacraments.sickCall}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#FCFBF8] border border-[#E8DFCC] rounded-xl text-xs text-[#7A6A4E] font-serif-kr">
                  성사 관련 개별 상담이나 긴급 병자성사(임종) 요청은 본당 사무실(02-796-1845)로 즉시 연락주시기 바랍니다.
                </div>
              </div>
            )}

            {/* Quick Helper Footer */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-[#8E8980]">
              <span className="font-serif-kr">
                ※ 대축일 및 전례 시기에 따른 특전 미사 시간 변동은 공지사항을 참조하십시오.
              </span>
              <button
                onClick={onOpenAdmin}
                className="text-[#5A2428] font-semibold hover:underline flex items-center gap-1 font-serif-kr shrink-0"
              >
                <span>관리자 변경</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
