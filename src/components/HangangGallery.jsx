import React, { useState } from 'react';
import { X, ZoomIn, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

const FEATURED_GALLERY_PHOTOS = [
  {
    id: 'g-1',
    title: '한강본당 사랑나눔 가을 바자회',
    category: '본당 행사',
    date: '2026. 10. 02',
    imageSrc: '/images/design/gallery_bazaar.jpg',
    desc: '본당 전 신자와 이촌동 지역 주민들이 함께한 나눔과 기쁨의 가을 바자회입니다.',
  },
  {
    id: 'g-2',
    title: '2026 사목협의회 영성 피정',
    category: '우리들의 신앙생활',
    date: '2026. 09. 28',
    imageSrc: '/images/design/gallery_retreat.jpg',
    desc: '하느님 말씀 안에서 본당 사목의 비전과 헌신을 되새기는 거룩한 피정의 시간입니다.',
  },
  {
    id: 'g-3',
    title: '어린이 첫영성체 축복 미사',
    category: '우리들의 신앙생활',
    date: '2026. 09. 21',
    imageSrc: '/images/design/gallery_communion.jpg',
    desc: '예수 그리스도의 성체를 처음으로 마음속에 모시며 신앙의 첫 발을 내딛는 어린이들의 축복 미사입니다.',
  },
  {
    id: 'g-4',
    title: '가을빛 물든 한강성당 전경',
    category: '본당의 오늘',
    date: '2026. 10. 01',
    imageSrc: '/images/design/gallery_facade.jpg',
    desc: '푸른 가을 하늘과 따스한 햇살 아래 고요한 평화를 전하는 붉은 벽돌의 한강성당 전경입니다.',
  },
  {
    id: 'g-5',
    title: '본당의 날 기념 축일 대미사',
    category: '본당 행사',
    date: '2026. 09. 15',
    imageSrc: '/images/design/gallery_feast.jpg',
    desc: '주보성인 성 김대건 안드레아 신부님의 순교 영성을 기리며 봉헌된 본당의 날 대미사입니다.',
  },
  {
    id: 'g-6',
    title: '빈첸시오회 사랑의 반찬 나눔',
    category: '우리들의 신앙생활',
    date: '2026. 09. 10',
    imageSrc: '/images/design/gallery_service.jpg',
    desc: '지역 내 독거 어르신과 소외된 이웃을 위해 정성껏 준비한 사랑의 반찬 나눔 봉사활동입니다.',
  },
];

export default function HangangGallery({ onNavigateToSubpage }) {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['전체', '본당 행사', '우리들의 신앙생활', '본당의 오늘'];

  const filteredPhotos =
    activeCategory === '전체'
      ? FEATURED_GALLERY_PHOTOS
      : FEATURED_GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E8E1D3] pb-6 mb-10">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B79B67] uppercase block mb-1.5 font-bold">
            HANGANG GALLERY & FAITH LIFE
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl font-bold text-[#64262B] tracking-tight">
            한강갤러리
          </h2>
          <p className="mt-2 text-sm text-[#6B655D] font-serif-kr">
            믿음과 사랑으로 함께하는 한강공동체의 은총 가득한 순간들
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-5 md:mt-0 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-serif-kr transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#64262B] text-white border-[#64262B] font-bold shadow-xs'
                  : 'bg-[#FAF8F5] text-[#6B655D] border-[#E8E1D3] hover:bg-white hover:text-[#232220]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 6 Photo Grid matching the Reference Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group bg-[#FAF8F5] rounded-2xl border border-[#E8E1D3] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B79B67] transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative aspect-[16/10] bg-[#232220] overflow-hidden">
              <img
                src={photo.imageSrc}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-white font-serif-kr bg-[#64262B]/85 px-3 py-1 rounded-lg backdrop-blur-xs">
                  <ZoomIn className="w-3.5 h-3.5 text-[#B79B67]" />
                  사진 확대보기
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-white font-mono flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#B79B67]" />
                <span>{photo.category}</span>
              </div>
            </div>

            {/* Info Area */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#8E8980] block mb-1">
                  {photo.date}
                </span>
                <h3 className="font-serif-kr text-base font-bold text-[#232220] group-hover:text-[#64262B] transition-colors leading-snug mb-2">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#6B655D] font-serif-kr line-clamp-2 leading-relaxed">
                  {photo.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EDE7DD] flex items-center justify-between text-xs font-serif-kr text-[#64262B]">
                <span className="font-bold">자세히 보기</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA to Photo Archive Subpage */}
      <div className="mt-12 text-center">
        <button
          onClick={() => onNavigateToSubpage?.('community', 'photo-archive')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#B79B67]/60 bg-[#FAF8F5] hover:bg-[#64262B] text-[#64262B] hover:text-white text-xs font-serif-kr font-bold transition-all shadow-sm cursor-pointer"
        >
          <span>한강포토 전체 아카이브 더보기</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#FAF8F5] text-[#232220] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E8E1D3]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.imageSrc}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-auto object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Detail Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#64262B] text-white text-xs font-serif-kr font-bold">
                  {selectedPhoto.category}
                </span>
                <span className="font-mono text-xs text-[#8E8980]">
                  {selectedPhoto.date}
                </span>
              </div>
              <h3 className="font-serif-kr text-xl font-bold text-[#232220] mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-[#5C574F] font-serif-kr leading-relaxed">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
