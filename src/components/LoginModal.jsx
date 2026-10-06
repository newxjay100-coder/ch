import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import ParishLogo from './ParishLogo';

export default function LoginModal({ isOpen, onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [baptism, setBaptism] = useState('');
  const [parishNumber, setParishNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F0] border border-[#DDD9D0] rounded-xs max-w-md w-full p-6 md:p-8 relative shadow-2xl text-[#20201E]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8E8980] hover:text-[#20201E]"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <ParishLogo variant="dark" className="justify-center mb-3" />
          <h3 className="font-serif-kr text-xl font-bold text-[#5A2428]">
            {isRegister ? '한강성당 교우 신자 등록' : '한강성당 신자 로그인'}
          </h3>
          <p className="text-xs text-[#635F57] mt-1 font-serif-kr">
            {isRegister
              ? '본당 교적 교우 온라인 서비스 등록 안내'
              : '교적 확인, 온라인 교무금, 미사 지향 신청'}
          </p>
        </div>

        {isSuccess ? (
          <div className="p-6 text-center space-y-2 bg-[#F4EFE6] rounded-xs">
            <CheckCircle2 className="w-10 h-10 text-[#2D6A4F] mx-auto" />
            <h4 className="font-serif-kr text-base font-bold text-[#20201E]">
              신자 인증이 확인되었습니다
            </h4>
            <p className="text-xs text-[#635F57]">
              평화가 함께하시기를 빕니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-serif-kr">
            <div>
              <label className="block font-bold text-[#20201E] mb-1">성명</label>
              <input
                type="text"
                required
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#20201E] mb-1">세례명</label>
              <input
                type="text"
                required
                placeholder="예: 안드레아, 체칠리아"
                value={baptism}
                onChange={(e) => setBaptism(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#20201E] mb-1">
                {isRegister ? '휴대전화 번호' : '비밀번호 또는 생년월일 (6자리)'}
              </label>
              <input
                type={isRegister ? 'tel' : 'password'}
                required
                placeholder={isRegister ? '010-0000-0000' : '••••••'}
                value={parishNumber}
                onChange={(e) => setParishNumber(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#DDD9D0] rounded-xs focus:ring-1 focus:ring-[#5A2428]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#5A2428] hover:bg-[#3E1619] text-[#F7F4EE] rounded-xs font-bold text-sm shadow-sm transition-colors"
              >
                {isRegister ? '신자 등록 신청하기' : '로그인'}
              </button>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-[#8E8980]">
              <button
                type="button"
                onClick={() => setIsRegister(!isRegister)}
                className="text-[#5A2428] font-bold hover:underline"
              >
                {isRegister ? '기존 신자 로그인으로 전환' : '처음이신가요? 신자 등록 신청'}
              </button>

              <span>본당 사무실: 02-796-1845</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
