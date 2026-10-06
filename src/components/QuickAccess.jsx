import React from 'react';
import { Clock, BookOpen, Calendar, MapPin, Heart, Compass, Sparkles } from 'lucide-react';

export default function QuickAccess({ onSelectAction }) {
  const items = [
    {
      id: 'mass',
      title: '오늘의 미사',
      subtitle: '주님을 만나는 시간',
      icon: Clock,
      theme: 'burgundy', // Deep burgundy accent
      action: () => onSelectAction('mass'),
    },
    {
      id: 'bulletin',
      title: '이번 주 주보',
      subtitle: '말씀과 함께',
      icon: BookOpen,
      theme: 'gold', // Antique gold accent
      action: () => onSelectAction('bulletin'),
    },
    {
      id: 'events',
      title: '본당 일정',
      subtitle: '함께하는 신앙의 여정',
      icon: Calendar,
      theme: 'teal', // Muted teal accent
      action: () => onSelectAction('events'),
    },
    {
      id: 'location',
      title: '오시는 길',
      subtitle: '한강성당으로',
      icon: MapPin,
      theme: 'beige', // Soft beige
      action: () => onSelectAction('location'),
    },
    {
      id: 'wedding',
      title: '혼인성사',
      subtitle: '사랑의 시작, 하느님 안에서',
      icon: Heart,
      theme: 'rose', // Sacred matrimonial rose
      action: () => onSelectAction('wedding'),
    },
    {
      id: 'newcomer',
      title: '처음 오셨나요?',
      subtitle: '한강성당에 오신 것을 환영합니다',
      icon: Compass,
      theme: 'warm', // Warm welcoming tone
      action: () => onSelectAction('newcomer'),
    },
  ];

  const getThemeClasses = (theme) => {
    switch (theme) {
      case 'burgundy':
        return {
          cardBg: 'bg-[#64262B] text-white hover:bg-[#521E23] border-[#7A3238]',
          iconBg: 'bg-white/15 text-[#F7F4EE]',
          titleColor: 'text-[#F7F4EE]',
          subColor: 'text-[#EDE7DD]/85',
        };
      case 'teal':
        return {
          cardBg: 'bg-[#436A68] text-white hover:bg-[#365654] border-[#537E7C]',
          iconBg: 'bg-white/15 text-[#F7F4EE]',
          titleColor: 'text-[#F7F4EE]',
          subColor: 'text-[#EDE7DD]/85',
        };
      case 'gold':
      case 'rose':
      case 'beige':
      case 'warm':
      default:
        return {
          cardBg: 'bg-[#FAF8F5] text-[#232220] hover:bg-[#F2ECE1] border-[#E8E1D3]',
          iconBg: 'bg-[#F0EBE1] text-[#64262B]',
          titleColor: 'text-[#232220]',
          subColor: 'text-[#7D756B]',
        };
    }
  };

  return (
    <section className="relative z-20 -mt-10 md:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {items.map((item) => {
          const Icon = item.icon;
          const styling = getThemeClasses(item.theme);

          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`p-4 sm:p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer group min-h-[130px] sm:min-h-[142px] ${styling.cardBg}`}
            >
              {/* Icon Container */}
              <div className="flex items-center justify-between mb-3 w-full">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${styling.iconBg}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                  HANGANG
                </span>
              </div>

              {/* Text Info */}
              <div>
                <h3
                  className={`font-serif-kr text-[15px] sm:text-base font-bold tracking-tight mb-1 leading-snug ${styling.titleColor}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs font-serif-kr leading-relaxed line-clamp-1 ${styling.subColor}`}
                >
                  {item.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
