import React, { useState } from 'react';
import { X, Heart, CheckCircle2 } from 'lucide-react';
import { WEDDING_INFO } from '../data/parishData';

export default function WeddingInquiryModal({ isOpen, onClose }) {
  const [trackingId, setTrackingId] = useState('7842');
  const [formData, setFormData] = useState({
    groomName: '',
    groomBaptism: '',
    brideName: '',
    brideBaptism: '',
    phone: '',
    email: '',
    targetYear: '2027',
    targetMonth: '5월',
    targetTime: '토요일 12:00',
    parishAffiliation: '본당 교우',
    canaCompleted: '이수 완료',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrackingId(String(Math.floor(1000 + Math.random() * 9000)));
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F0] border border-[#DDD9D0] rounded-xs max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#20201E]">
        <div className="p-4 bg-[#5A2428] text-[#F7F4EE] flex items-center justify-between border-b border-[#3E1619]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#B69A63]" />
            <h3 className="font-serif-kr text-base font-bold">
              한강성당 혼인성사 신청 및 일정 문의
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-white/80 hover:text-white" aria-label="닫기">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F4ECE1] text-[#5A2428] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif-kr font-bold text-[#5A2428]">
              혼인 상담 문의가 접수되었습니다
            </h4>
            <p className="text-xs sm:text-sm text-[#635F57] max-w-md mx-auto leading-relaxed">
              신청자 <strong>{formData.groomName} / {formData.brideName}</strong> 님의 {formData.targetYear}년 {formData.targetMonth} 혼인성사 문의가 본당 사무실에 전달되었습니다.
              <br /><br />
              담당 사무원 검토 후 남겨주신 연락처(<strong>{formData.phone}</strong>)로 혼인 가능 일정 및 면담 안내 전화를 드리겠습니다.
            </p>
            <div className="p-3 bg-[#F4EFE6] rounded-xs text-xs text-[#8E8980] font-mono">
              접수 번호: HK-WED-2026-{trackingId} • 혼인 직통: {WEDDING_INFO.phone}
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#5A2428] text-white rounded-xs text-xs font-serif-kr font-bold"
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-xs font-serif-kr">
            <div className="bg-[#F4EFE6] p-3 rounded-xs border-l-2 border-[#5A2428] text-[11px] text-[#635F57] leading-relaxed">
              ※ 혼인성사는 가톨릭 교회법에 따라 신랑·신부 중 최소 1명이 세례자이어야 합니다.
              예약 확정은 교적 확인 및 소속 본당 사목구 주임신부님의 면담 후 최종 완료됩니다.
            </div>

            {/* Groom Info */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-[#20201E] mb-1">신랑 성명 *</label>
                <input
                  type="text"
                  required
                  placeholder="예: 김마르코"
                  value={formData.groomName}
                  onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
                />
              </div>
              <div>
                <label className="block font-bold text-[#20201E] mb-1">신랑 세례명</label>
                <input
                  type="text"
                  placeholder="예: 마르코 (비신자 시 빈칸)"
                  value={formData.groomBaptism}
                  onChange={(e) => setFormData({ ...formData, groomBaptism: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
                />
              </div>
            </div>

            {/* Bride Info */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-[#20201E] mb-1">신부 성명 *</label>
                <input
                  type="text"
                  required
                  placeholder="예: 이아가다"
                  value={formData.brideName}
                  onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
                />
              </div>
              <div>
                <label className="block font-bold text-[#20201E] mb-1">신부 세례명</label>
                <input
                  type="text"
                  placeholder="예: 아가다 (비신자 시 빈칸)"
                  value={formData.brideBaptism}
                  onChange={(e) => setFormData({ ...formData, brideBaptism: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-[#20201E] mb-1">연락처 (휴대전화) *</label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
                />
              </div>
              <div>
                <label className="block font-bold text-[#20201E] mb-1">이메일 *</label>
                <input
                  type="email"
                  required
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
                />
              </div>
            </div>

            {/* Target Date */}
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block font-bold text-[#20201E] mb-1">희망 연도</label>
                <select
                  value={formData.targetYear}
                  onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs"
                >
                  <option value="2026">2026년</option>
                  <option value="2027">2027년</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-[#20201E] mb-1">희망 월</label>
                <select
                  value={formData.targetMonth}
                  onChange={(e) => setFormData({ ...formData, targetMonth: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs"
                >
                  {['1월','2월','3월','4월','5월','6월','9월','10월','11월','12월'].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-bold text-[#20201E] mb-1">희망 시간</label>
                <select
                  value={formData.targetTime}
                  onChange={(e) => setFormData({ ...formData, targetTime: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs"
                >
                  <option value="토요일 12:00">토요일 12:00</option>
                  <option value="토요일 15:00">토요일 15:00</option>
                  <option value="금요일 17:00">금요일 17:00</option>
                </select>
              </div>
            </div>

            {/* Cana & Affiliation */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-[#20201E] mb-1">교적 구분</label>
                <select
                  value={formData.parishAffiliation}
                  onChange={(e) => setFormData({ ...formData, parishAffiliation: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs"
                >
                  <option value="한강성당 본당 교우">한강성당 본당 교우</option>
                  <option value="타 본당 교우 (교구 내)">타 본당 교우 (교구 내)</option>
                  <option value="타 교구 교우">타 교구 교우</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-[#20201E] mb-1">카나혼인강좌 이수 여부</label>
                <select
                  value={formData.canaCompleted}
                  onChange={(e) => setFormData({ ...formData, canaCompleted: e.target.value })}
                  className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs"
                >
                  <option value="이수 완료">이수 완료</option>
                  <option value="이수 예정">이수 예정</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-bold text-[#20201E] mb-1">기타 문의사항</label>
              <textarea
                rows="2"
                placeholder="희망 날짜 우선순위 또는 문의사항을 남겨주세요."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full p-2 bg-white border border-[#DDD9D0] rounded-xs"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#8E8980]">
                문의: 한강성당 혼인사무실 02-796-1847
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#5A2428] hover:bg-[#3E1619] text-[#F7F4EE] rounded-xs font-bold text-xs shadow-sm"
              >
                혼인 상담 신청하기
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
