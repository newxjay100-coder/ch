import React from 'react';

export default function ParishLogo({ variant = 'dark', className = '', onClick = null }) {
  // variant: 'dark' (on light backgrounds like Warm Ivory), 'light' (on dark hero images)
  const isLight = variant === 'light';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      role="banner"
      aria-label="천주교 서울대교구 한강성당 공식 로고"
    >
      {/* Sacred Cross & River Wave Insignia */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 60 60"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Halo Ring */}
          <circle
            cx="30"
            cy="30"
            r="28"
            stroke={isLight ? '#B69A63' : '#B69A63'}
            strokeWidth="1.2"
            strokeDasharray="2 3"
            opacity="0.8"
          />
          <circle
            cx="30"
            cy="30"
            r="25.5"
            stroke={isLight ? '#E5DFD3' : '#5A2428'}
            strokeWidth="0.8"
            opacity={isLight ? 0.4 : 0.25}
          />

          {/* Central Latin Cross */}
          <path
            d="M30 11 V49"
            stroke={isLight ? '#F7F4EE' : '#5A2428'}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M18 24 H42"
            stroke={isLight ? '#F7F4EE' : '#5A2428'}
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Golden St. Andrew Kim Taegon Martyr Star / Light */}
          <circle cx="30" cy="24" r="2.2" fill="#B69A63" />

          {/* Subtle Han River Waves (한강 상징) */}
          <path
            d="M17 40 Q23.5 37.5 30 40 T43 40"
            stroke="#B69A63"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M21 44 Q25.5 42 30 44 T39 44"
            stroke={isLight ? '#D5CEBF' : '#5C989A'}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`text-[10px] md:text-[11px] tracking-wider uppercase font-medium ${
            isLight ? 'text-[#D5CEBF]' : 'text-[#8E8980]'
          }`}
        >
          천주교 서울대교구 • 제1지구좌
        </span>
        <div className="flex items-baseline gap-2">
          <span
            className={`text-lg md:text-xl font-serif-kr font-bold tracking-tight transition-colors ${
              isLight ? 'text-[#F7F4EE] group-hover:text-[#B69A63]' : 'text-[#20201E] group-hover:text-[#5A2428]'
            }`}
          >
            한강성당
          </span>
          <span
            className={`text-[11px] md:text-xs font-display-en tracking-widest uppercase hidden sm:inline ${
              isLight ? 'text-[#B69A63]' : 'text-[#5A2428]'
            }`}
          >
            Hangang Church
          </span>
        </div>
      </div>
    </div>
  );
}
