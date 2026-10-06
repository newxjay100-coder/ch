import React, { useState } from 'react';
import { PHOTO_ARCHIVE_DATA } from '../data/parishData';
import { X, ZoomIn, Sparkles } from 'lucide-react';

export default function PhotoArchiveSection() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const categories = ['전체', '전례', '본당행사', '주일학교', '청년', '성가대', '역사', '성미술', '50주년'];

  const filteredPhotos =
    selectedCategory === '전체'
      ? PHOTO_ARCHIVE_DATA
      : PHOTO_ARCHIVE_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="photo-archive" className="py-24 md:py-32 church-brick-bg border-t border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#B69A63] uppercase mb-2 font-bold">
            Historical & Liturgical Photo Archive
          </span>
          <h2 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold text-[#5A2428] tracking-tight">
            한강포토
          </h2>
          <span className="font-display-en text-xs tracking-widest text-[#8E8980] uppercase mt-1">
            PHOTO ARCHIVE & HERITAGE
          </span>
          <div className="w-12 h-0.5 bg-[#B69A63] my-4" />
          <p className="text-sm md:text-base text-[#5C574F] max-w-xl font-serif-kr leading-relaxed">
            실제 한강성당의 전례, 신앙 활동, 반세기의 역사를 기록한 공식 사진 보관소입니다.
          </p>
        </div>

        {/* Filter Categories Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-serif-kr transition-all shrink-0 border ${
                selectedCategory === cat
                  ? 'bg-[#5A2428] text-white border-[#5A2428] font-bold shadow-xs'
                  : 'bg-[#FAF9F6] text-[#5C574F] border-stone-200 hover:bg-white hover:text-[#1A1918]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:border-[#B69A63] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-[#1C1A18] overflow-hidden">
                {photo.imageSrc ? (
                  <img
                    src={photo.imageSrc}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 text-[#A8A297]">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-[#B69A63] block mb-1">
                      Hangang Photo Required
                    </span>
                    <span className="text-xs font-serif-kr">{photo.title}</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#5A2428]/90 rounded-md text-xs font-serif-kr shadow-sm">
                    <ZoomIn className="w-3.5 h-3.5 text-[#B69A63]" />
                    사진 및 해설 보기
                  </span>
                </div>

                {photo.imageSrc && (
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-white font-mono flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#B69A63]" />
                    <span>실물 사진</span>
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#8E8980] mb-2">
                    <span className="font-mono text-[#5A2428] bg-[#F2EDE2] px-2 py-0.5 rounded font-semibold">
                      {photo.category}
                    </span>
                    <span className="font-mono">{photo.date}</span>
                  </div>

                  <h4 className="font-serif-kr text-sm font-bold text-[#20201E] group-hover:text-[#5A2428] line-clamp-2 leading-snug">
                    {photo.title}
                  </h4>

                  {photo.artist && (
                    <p className="text-[11px] text-[#5A2428] font-bold mt-1">
                      작가: {photo.artist}
                    </p>
                  )}
                </div>

                <div className="pt-3 mt-3 border-t border-[#F0ECE2] text-[11px] text-[#8E8980] flex items-center justify-between">
                  <span className="truncate max-w-[170px]">{photo.source}</span>
                  <span className="text-[#5A2428] font-bold group-hover:text-[#B69A63]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Archival Metadata Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF8F5] rounded-xl border border-[#DDD9D0] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 p-2 text-[#8E8980] hover:text-[#20201E] rounded-full hover:bg-black/5 z-20"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {lightboxPhoto.imageSrc ? (
              <div className="rounded-lg overflow-hidden bg-[#1C1A18] mb-5 max-h-[400px] flex items-center justify-center">
                <img
                  src={lightboxPhoto.imageSrc}
                  alt={lightboxPhoto.title}
                  className="w-full h-full object-contain max-h-[400px]"
                />
              </div>
            ) : (
              <div className="p-8 bg-[#F2EDE2] rounded-lg border border-[#DFD8CB] text-center mb-5">
                <span className="text-[10px] font-mono tracking-widest text-[#B69A63] uppercase block font-bold mb-1">
                  Hangang Church Official Photo Required
                </span>
                <p className="font-serif-kr text-sm text-[#5A2428] font-bold">
                  {lightboxPhoto.title} 고화질 실물 사진 등록 대기
                </p>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase bg-[#5A2428] text-white px-2.5 py-0.5 rounded-full font-bold">
                  {lightboxPhoto.category}
                </span>
                <span className="text-xs font-mono text-[#8E8980]">
                  기록 일자: {lightboxPhoto.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif-kr font-bold text-[#20201E]">
                {lightboxPhoto.title}
              </h3>

              {lightboxPhoto.artist && (
                <p className="text-xs font-serif-kr text-[#5A2428] font-bold">
                  작가/조각가: {lightboxPhoto.artist}
                </p>
              )}

              <p className="text-sm font-serif-kr text-[#4A463F] leading-relaxed">
                {lightboxPhoto.alt}
              </p>

              <div className="p-3 bg-white rounded-lg border border-[#E5DFD5] text-xs text-[#736E65] space-y-1">
                <div><strong>보관 출처:</strong> {lightboxPhoto.source}</div>
                <div><strong>관리 기관:</strong> 천주교 서울대교구 한강성당 사무국 / 본당 사목협의회</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5DFD5] flex justify-end">
              <button
                onClick={() => setLightboxPhoto(null)}
                className="px-5 py-2 bg-[#5A2428] text-white rounded-md text-xs font-serif-kr font-semibold hover:bg-[#3E1619]"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
