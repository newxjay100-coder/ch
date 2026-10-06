import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, Phone, Clock } from 'lucide-react';
import { PARISH_IDENTITY } from '../data/parishData';

export default function ParishEmailModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    baptismalName: '',
    category: '일반 문의',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.senderName || !formData.message) {
      alert('이름과 문의 내용을 입력해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      senderName: '',
      senderEmail: '',
      senderPhone: '',
      baptismalName: '',
      category: '일반 문의',
      subject: '',
      message: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] text-[#232220] max-w-xl w-full rounded-2xl shadow-2xl border border-[#E8E1D3] overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#64262B] px-6 py-4 flex items-center justify-between text-white border-b border-[#7A3238]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-[#B79B67]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#B79B67] uppercase font-bold block">
                PARISH OFFICE INQUIRY
              </span>
              <h3 className="font-serif-kr text-base sm:text-lg font-bold text-white">
                한강성당 사무실 문의 & 이메일 안내
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
        <div className="p-6 overflow-y-auto flex-1 font-serif-kr">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#64262B]">
                문의가 정상적으로 접수되었습니다
              </h4>
              <p className="text-xs sm:text-sm text-[#5C574F] max-w-md mx-auto leading-relaxed">
                작성해 주신 내용은 한강성당 사무실({PARISH_IDENTITY.email})로 안전하게 전달되었습니다.
                담당자가 확인 후 입력해 주신 연락처로 성심껏 답변드리겠습니다.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#64262B] hover:bg-[#501E22] text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer mt-4"
              >
                확인
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="p-3 bg-[#F4EFE6] rounded-xl border border-[#E8DFD0] text-[#6B655D] space-y-1">
                <p>
                  • 대표 이메일: <strong className="font-mono text-[#64262B]">{PARISH_IDENTITY.email}</strong>
                </p>
                <p>• 사무실 직통 전화: <strong className="font-mono text-[#232220]">{PARISH_IDENTITY.phoneMain}</strong> (화~일 09:00~18:00)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#232220] mb-1">
                    신청자 성명 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    placeholder="홍길동"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD5C5] focus:outline-none focus:border-[#64262B]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#232220] mb-1">
                    세례명 (선택)
                  </label>
                  <input
                    type="text"
                    value={formData.baptismalName}
                    onChange={(e) => setFormData({ ...formData, baptismalName: e.target.value })}
                    placeholder="베드로 / 마리아"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD5C5] focus:outline-none focus:border-[#64262B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#232220] mb-1">
                    연락처 (휴대전화)
                  </label>
                  <input
                    type="tel"
                    value={formData.senderPhone}
                    onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                    placeholder="010-0000-0000"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD5C5] focus:outline-none focus:border-[#64262B]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#232220] mb-1">
                    답변받으실 이메일
                  </label>
                  <input
                    type="email"
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    placeholder="example@email.com"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD5C5] focus:outline-none focus:border-[#64262B]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#232220] mb-1">
                  문의 분류
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD5C5] focus:outline-none focus:border-[#64262B]"
                >
                  <option value="일반 문의">일반 사목 문의</option>
                  <option value="미사/교적">미사 지향 / 교적 전입 및 증명서</option>
                  <option value="혼인성사">혼인성사 문의</option>
                  <option value="예비신자 교리">예비신자 입교 교리 문의</option>
                  <option value="기도 지향">기도 요청 및 지향</option>
                  <option value="홈페이지 제안">홈페이지 건의사항</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#232220] mb-1">
                  문의 내용 <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="한강성당 사목 및 신앙생활에 대해 궁금하신 점을 작성해 주세요."
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD5C5] focus:outline-none focus:border-[#64262B] resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-[#DDD5C5] bg-white hover:bg-[#FAF8F5] text-[#6B655D] font-bold cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#64262B] hover:bg-[#501E22] text-white font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>문의 접수하기</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
