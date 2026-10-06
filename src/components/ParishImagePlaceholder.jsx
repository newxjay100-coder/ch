import React, { useState } from 'react';
import { Camera, ShieldCheck, CheckCircle2, ZoomIn } from 'lucide-react';

/**
 * ParishImagePlaceholder
 * Strictly complies with the user directive:
 * "실제 한강성당의 자료와 사진만 사용한다.
 *  사진이 확보되지 않은 영역은 placeholder로 남기고
 *  'HANGANG CHURCH OFFICIAL PHOTO REQUIRED'라고 표시한다.
 *  다른 성당 사진을 대체 이미지로 사용하지 않는다."
 */
export default function ParishImagePlaceholder({
  aspect = '16/9',
  title = '한강성당 공식 사진 등록 대기',
  subject = '한강성당 공식 촬영물',
  category = '본당 아카이브',
  artist = null,
  className = '',
  height = 'auto',
  showDetails = true,
  actualSrc = null,
  alt = '천주교 서울대교구 한강성당',
  onZoom = null,
}) {
  const [imageError, setImageError] = useState(false);

  // If an actual, verified official photo is provided, render it with sacred dignity
  if (actualSrc && !imageError) {
    return (
      <div
        style={{ aspectRatio: aspect, minHeight: height !== 'auto' ? height : undefined }}
        className={`relative overflow-hidden rounded-xs border border-[#DDD9D0] bg-[#1C1A18] group ${className}`}
      >
        <img
          src={actualSrc}
          alt={alt || title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 opacity-70 group-hover:opacity-85 transition-opacity pointer-events-none" />

        {/* Authenticity Verification Tag */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-xs text-[#F7F4EE] rounded-xs text-[10px] font-mono border border-white/20">
          <CheckCircle2 className="w-3 h-3 text-[#B69A63]" />
          <span className="font-semibold tracking-wider">실제 한강성당 촬영 기록</span>
        </div>

        {artist && (
          <div className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-[#5A2428]/90 text-[#F7F4EE] rounded-xs text-[10px] font-serif-kr border border-[#B69A63]/50">
            작품: {artist}
          </div>
        )}

        {/* Bottom Editorial Caption */}
        <div className="absolute bottom-0 inset-x-0 p-4 text-[#F7F4EE] z-10 flex items-end justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono text-[#B69A63] tracking-widest uppercase block mb-0.5">
              {category}
            </span>
            <p className="font-serif-kr text-sm md:text-base font-bold text-[#F7F4EE] drop-shadow-sm leading-snug">
              {title}
            </p>
            {showDetails && subject && (
              <p className="text-[11px] text-[#DDD9D0] line-clamp-1 mt-0.5 font-serif-kr opacity-90">
                {subject}
              </p>
            )}
          </div>

          {onZoom && (
            <button
              onClick={onZoom}
              className="p-1.5 bg-white/20 hover:bg-white/30 rounded-xs text-white shrink-0 transition-colors"
              title="원본 크게 보기"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Refined neutral placeholder strictly with the mandatory badge
  return (
    <div
      style={{ aspectRatio: aspect, minHeight: height !== 'auto' ? height : undefined }}
      className={`relative group overflow-hidden border border-[#DDD9D0] bg-[#ECE7DC] flex flex-col items-center justify-center p-6 text-center select-none shadow-inner ${className}`}
    >
      {/* Sacred Archival Background Grid & Watermark Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#20201E 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative Architectural Frame */}
      <div className="absolute inset-3 border border-[#AAA59B]/30 pointer-events-none" />
      <div className="absolute inset-[15px] border border-[#B69A63]/20 pointer-events-none" />

      {/* Cross & Arch Vector Illustration */}
      <div className="relative z-10 flex flex-col items-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#F7F4EE] border border-[#B69A63]/40 flex items-center justify-center shadow-sm mb-3">
          <svg
            className="w-8 h-8 text-[#5A2428]"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            {/* Architectural Campanile & Church Gabled Outline */}
            <path d="M 20 6 L 20 13 M 16 9.5 L 24 9.5" stroke="#B69A63" strokeWidth="2" strokeLinecap="round" />
            <path d="M 12 20 L 20 13 L 28 20" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 14 20 L 14 34 L 26 34 L 26 20" strokeLinejoin="round" />
            <path d="M 18 34 L 18 27 Q 20 25 22 27 L 22 34" strokeLinejoin="round" />
            <circle cx="20" cy="18" r="1.5" fill="#B69A63" />
          </svg>
        </div>

        {/* Required Badge (Mandatory Exact String) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#5A2428] text-[#F7F4EE] text-[10px] md:text-[11px] font-mono tracking-wider uppercase rounded-xs mb-2 shadow-sm font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B69A63] animate-pulse"></span>
          HANGANG CHURCH OFFICIAL PHOTO REQUIRED
        </div>

        {/* Subject description & Dignified Explanatory Text */}
        <p className="text-xs md:text-sm font-serif-kr font-medium text-[#20201E] tracking-tight mb-1">
          {title}
        </p>

        {showDetails && (
          <p className="text-[11px] text-[#635F57] max-w-xs leading-relaxed">
            {subject}
            <span className="block text-[10px] text-[#8E8980] mt-0.5 font-mono">
              [분류: {category} • 본당 공식 아카이브 고화질 원본 등록 영역]
            </span>
          </p>
        )}

        <div className="mt-3 flex items-center gap-2 text-[10px] text-[#8E8980]">
          <span className="flex items-center gap-1">
            <Camera className="w-3 h-3 text-[#B69A63]" />
            실제 한강성당 기록 보존
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#5A2428]" />
            진정성 보증 구역
          </span>
        </div>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute top-3 left-3 text-[#B69A63]/60 text-[10px] font-display-en pointer-events-none select-none">
        HANGANG CATHOLIC CHURCH
      </div>
      <div className="absolute bottom-3 right-3 text-[#AAA59B]/60 text-[10px] font-mono pointer-events-none select-none">
        ARCHIVE #{category.slice(0, 3).toUpperCase()}
      </div>
    </div>
  );
}
