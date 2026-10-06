import React from 'react';
import { Clock, BookOpen, Calendar, Navigation } from 'lucide-react';

export default function MobileStickyBar({
  onScrollToMass,
  onOpenBulletin,
  onScrollToCalendar,
  onScrollToLocation,
}) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#F7F4EE]/95 backdrop-blur-md border-t border-[#DDD9D0] shadow-lg px-2 py-1.5 safe-area-bottom">
      <div className="grid grid-cols-4 gap-1">
        <button
          onClick={onScrollToMass}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded hover:bg-[#EFEAE0] text-[#20201E] active:text-[#5A2428] min-h-[48px]"
          aria-label="미사 시간표 바로가기"
        >
          <Clock className="w-4 h-4 text-[#5A2428] mb-0.5" />
          <span className="text-[11px] font-serif-kr font-medium">미사</span>
        </button>

        <button
          onClick={onOpenBulletin}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded hover:bg-[#EFEAE0] text-[#20201E] active:text-[#5A2428] min-h-[48px]"
          aria-label="이번 주 주보 열기"
        >
          <BookOpen className="w-4 h-4 text-[#B69A63] mb-0.5" />
          <span className="text-[11px] font-serif-kr font-medium">주보</span>
        </button>

        <button
          onClick={onScrollToCalendar}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded hover:bg-[#EFEAE0] text-[#20201E] active:text-[#5A2428] min-h-[48px]"
          aria-label="본당 일정 바로가기"
        >
          <Calendar className="w-4 h-4 text-[#5C989A] mb-0.5" />
          <span className="text-[11px] font-serif-kr font-medium">일정</span>
        </button>

        <button
          onClick={onScrollToLocation}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded hover:bg-[#EFEAE0] text-[#20201E] active:text-[#5A2428] min-h-[48px]"
          aria-label="성당 오시는 길 및 길찾기"
        >
          <Navigation className="w-4 h-4 text-[#5A2428] mb-0.5" />
          <span className="text-[11px] font-serif-kr font-medium">길찾기</span>
        </button>
      </div>
    </div>
  );
}
