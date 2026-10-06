import React, { useState } from 'react';
import { X, BookOpen, Download, Printer, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function BulletinModal({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F0] border border-[#DDD9D0] rounded-xs max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden text-[#20201E]">
        {/* Bulletin Top Toolbar */}
        <div className="p-3 sm:p-4 bg-[#5A2428] text-[#F7F4EE] flex items-center justify-between border-b border-[#3E1619]">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#B69A63]" />
            <div>
              <h3 className="font-serif-kr text-sm sm:text-base font-bold">
                한강성당 전자 주보 (제2648호)
              </h3>
              <p className="text-[11px] text-[#D8D2C4] font-mono">
                2026년 10월 4일 연중 제27주일 • 다해 • 녹색
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded bg-white/10 hover:bg-white/20 text-xs flex items-center gap-1 transition-colors"
              title="인쇄하기"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">인쇄</span>
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded bg-[#B69A63] hover:bg-[#A3874F] text-[#20201E] font-bold text-xs flex items-center gap-1 transition-colors"
              title="PDF 다운로드"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF 다운로드</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white ml-2"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="bg-[#2D6A4F] text-white text-xs px-4 py-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              『한강성당 주보 제2648호 (2026.10.04).pdf』 다운로드가 시작되었습니다.
            </span>
            <button onClick={() => setDownloadSuccess(false)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>
        )}

        {/* Page Switcher Navigation */}
        <div className="bg-[#EDE7DA] px-4 py-2 border-b border-[#DDD9D0] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded-xs font-serif-kr font-medium transition-colors ${
                  currentPage === pageNum
                    ? 'bg-[#5A2428] text-[#F7F4EE] font-bold'
                    : 'bg-white/70 hover:bg-white text-[#4A463F]'
                }`}
              >
                {pageNum}면
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 rounded bg-white/70 hover:bg-white disabled:opacity-40"
              aria-label="이전 면"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs">
              {currentPage} / 4
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
              disabled={currentPage === 4}
              className="p-1 rounded bg-white/70 hover:bg-white disabled:opacity-40"
              aria-label="다음 면"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bulletin Paper Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#F4F1EA]">
          <div className="max-w-2xl mx-auto bg-[#FDFBF7] border border-[#DDD9D0] shadow-sm p-6 sm:p-10 font-serif-kr text-[#20201E] min-h-[580px]">
            {/* Page 1: Pastoral Message & Gospel */}
            {currentPage === 1 && (
              <div className="space-y-6">
                {/* Traditional Parish Masthead */}
                <div className="border-b-2 border-[#5A2428] pb-4 text-center">
                  <div className="text-[11px] font-mono tracking-widest text-[#B69A63] uppercase">
                    천주교 서울대교구 • 제1 중구-용산지구 지구좌성당
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#5A2428] my-1">
                    천주교 한강성당 주보
                  </h1>
                  <div className="flex justify-between items-center text-xs text-[#635F57] font-mono border-t border-[#DDD9D0] pt-1.5 mt-2">
                    <span>제2648호 (창간 1971년)</span>
                    <span>2026년 10월 4일 (연중 제27주일)</span>
                    <span>발행인: 임용환 신부</span>
                  </div>
                </div>

                {/* Gospel of the Day */}
                <div className="bg-[#FAF6EC] p-4 rounded-xs border border-[#EADBBD]">
                  <span className="text-xs font-bold text-[#5A2428] block mb-1">
                    【오늘의 복음】 “저희에게 믿음을 더해 주십시오.” (루카 17,5-10)
                  </span>
                  <p className="text-xs sm:text-sm text-[#4E4A43] leading-relaxed italic">
                    그때에 사도들이 주님께 “저희에게 믿음을 더해 주십시오.” 하고 말하였다. 
                    주님께서 이르셨다. “너희에게 겨자씨 한 알만 한 믿음이라도 있으면, 
                    이 돌무화과나무더러 ‘뽑혀서 바다에 심겨라.’ 하더라도 그것이 너희에게 복종할 것이다.”
                  </p>
                </div>

                {/* Pastoral Column */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#20201E] border-b border-[#E6E1D6] pb-1">
                    사목칼럼: 겨자씨 한 알의 믿음으로 걸어가는 길
                  </h3>
                  <p className="text-xs sm:text-sm text-[#383531] leading-relaxed whitespace-pre-line text-justify">
                    사랑하는 한강성당 교우 여러분, 오늘 주님께서는 사도들의 청에 크고 웅장한 믿음이 아니라 
                    가장 작은 씨앗인 ‘겨자씨 한 알의 믿음’을 말씀하십니다. 
                    
                    믿음의 본질은 내가 지닌 힘의 크기가 아니라, 우리가 온전히 의탁하는 하느님께서 얼마나 무한하신 분이신가를 깨닫는 데 있습니다. 1970년 작은 시작으로 오늘날 아름다운 본당을 일군 우리 한강성당의 56년 역사 역시 수많은 신앙 선조들의 겨자씨 같은 헌신이 모여 이루어진 은총의 기적입니다.
                    
                    10월 묵주기도 성월을 맞이하며 성모님의 온유한 손을 잡고 각 가정과 구역에서 기도와 사랑의 작은 씨앗을 심어주시길 당부드립니다.
                  </p>
                  <p className="text-right text-xs font-bold text-[#5A2428] pt-2">
                    — 주임신부 임용환 (엘리야)
                  </p>
                </div>
              </div>
            )}

            {/* Page 2: Liturgy & Mass Schedule & Ministries */}
            {currentPage === 2 && (
              <div className="space-y-6">
                <div className="border-b border-[#5A2428] pb-2 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#5A2428]">
                    전례 및 미사 안내
                  </h2>
                  <span className="text-xs text-[#8E8980]">제2648호 • 2면</span>
                </div>

                <div className="border border-[#DDD9D0] overflow-hidden text-xs">
                  <div className="bg-[#5A2428] text-white p-2 font-bold text-center">
                    본당 미사 봉헌 시간표
                  </div>
                  <div className="divide-y divide-[#EAE4D7]">
                    <div className="p-2.5 bg-[#FAF7F0] flex justify-between font-bold">
                      <span>주일 미사</span>
                      <span>06:00 / 09:30 / 10:30(중고등부) / 11:00(교중) / 18:00(청년)</span>
                    </div>
                    <div className="p-2.5 flex justify-between">
                      <span>평일 미사 (화/목)</span>
                      <span>06:00 / 10:00 / 19:00</span>
                    </div>
                    <div className="p-2.5 flex justify-between">
                      <span>평일 미사 (수/금)</span>
                      <span>06:00 / 10:00</span>
                    </div>
                    <div className="p-2.5 flex justify-between">
                      <span>토요일 미사</span>
                      <span>06:00 / 17:00(어린이) / 19:00(주일 특전)</span>
                    </div>
                    <div className="p-2.5 bg-[#F4EFE6] flex justify-between text-[#5A2428] font-bold">
                      <span>고해성사</span>
                      <span>매 미사 시작 20분 전 (대·소성전 고해소)</span>
                    </div>
                  </div>
                </div>

                {/* Liturgical Servants Table */}
                <div>
                  <h3 className="font-bold text-sm text-[#20201E] mb-2">
                    이번 주 전례 봉사자 안내
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-[#F9F7F2] border border-[#DDD9D0]">
                      <span className="font-bold text-[#5A2428] block mb-0.5">교중미사 (11:00)</span>
                      <p>해설: 김요셉 • 독서: 이체칠리아, 박안드레아</p>
                      <p>성체분배: 3구역 봉사자단 • 성가: 체칠리아 성가대</p>
                    </div>
                    <div className="p-2.5 bg-[#F9F7F2] border border-[#DDD9D0]">
                      <span className="font-bold text-[#5A2428] block mb-0.5">청년미사 (18:00)</span>
                      <p>해설: 최루치아 • 독서: 정베드로</p>
                      <p>반주/성가: 글로리아 청년 성가대</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF6EC] border-l-2 border-[#B69A63] text-xs text-[#635F57]">
                  <strong>전례 성가 번호:</strong> 입당 1번, 봉헌 211번, 성체 167번, 파견 22번 (가톨릭 성가집)
                </div>
              </div>
            )}

            {/* Page 3: Announcements */}
            {currentPage === 3 && (
              <div className="space-y-6">
                <div className="border-b border-[#5A2428] pb-2 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#5A2428]">
                    본당 공지사항
                  </h2>
                  <span className="text-xs text-[#8E8980]">제2648호 • 3면</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#383531]">
                  <div className="p-3 bg-[#F9F7F2] border border-[#DDD9D0] rounded-xs">
                    <h4 className="font-bold text-[#5A2428] mb-1">
                      1. 10월 묵주기도 성월 전교우 묵주기도 100만 단 봉헌 운동
                    </h4>
                    <p className="leading-relaxed">
                      본당의 영적 성화와 2027 WYD 서울 대회, 그리고 한반도 평화를 위해 전교우 묵주기도 100만 단을 봉헌합니다. 성당 로비 봉헌함에 구역별 지향 카드를 제출 바랍니다.
                    </p>
                  </div>

                  <div className="p-3 bg-[#F9F7F2] border border-[#DDD9D0] rounded-xs">
                    <h4 className="font-bold text-[#5A2428] mb-1">
                      2. 2026년 하반기 성인 예비신자 교리반 개강
                    </h4>
                    <p className="leading-relaxed">
                      • 개강: 11월 3일(화) 저녁 19:30 / 11월 5일(목) 오전 10:00 (택1)
                      <br />• 신청 및 접수: 본당 사무실 (02-796-1845)
                    </p>
                  </div>

                  <div className="p-3 bg-[#F9F7F2] border border-[#DDD9D0] rounded-xs">
                    <h4 className="font-bold text-[#5A2428] mb-1">
                      3. 2027 서울 WYD(세계청년대회) 한강성당 청년 서포터즈 모집
                    </h4>
                    <p className="leading-relaxed">
                      지구좌성당 프로그램 준비와 해외 순례단 홈스테이 호스트 봉사자를 모집합니다. 청년 교우들의 많은 참여 바랍니다.
                    </p>
                  </div>

                  <div className="p-3 bg-[#F9F7F2] border border-[#DDD9D0] rounded-xs">
                    <h4 className="font-bold text-[#5A2428] mb-1">
                      4. 10월 유아세례 거행 안내
                    </h4>
                    <p className="leading-relaxed">
                      • 일시: 10월 10일(토) 15:00 소성전 (신청 마감: 10월 7일 본당 사무실)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Page 4: Community Sharing, Wedding Bans, Deceased */}
            {currentPage === 4 && (
              <div className="space-y-6">
                <div className="border-b border-[#5A2428] pb-2 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-[#5A2428]">
                    공동체 나눔 및 혼인·선종 공고
                  </h2>
                  <span className="text-xs text-[#8E8980]">제2648호 • 4면</span>
                </div>

                {/* Wedding Banns */}
                <div className="border border-[#DDD9D0] p-3 text-xs">
                  <h4 className="font-bold text-[#5A2428] mb-2">
                    【혼인 공고】
                  </h4>
                  <p className="leading-relaxed">
                    • 신랑 <strong>김마르코</strong> (본당 4구역) & 신부 <strong>이아가다</strong> (서초동 본당)
                    <br />일시: 2026년 10월 24일(토) 12:00 한강성당 대성전
                  </p>
                  <p className="text-[11px] text-[#8E8980] mt-1">
                    * 두 사람의 거룩한 성가정을 위해 기도를 부탁드리며, 결격 사유가 있는 분은 사무실로 알려주십시오.
                  </p>
                </div>

                {/* Rest in Peace */}
                <div className="border border-[#DDD9D0] p-3 text-xs bg-[#F9F7F2]">
                  <h4 className="font-bold text-[#20201E] mb-2">
                    【위령 기도 지향 (선종)】
                  </h4>
                  <p className="leading-relaxed">
                    • 故 <strong>박베드로</strong> (본당 8구역) 향년 82세 선종. 
                    주님의 자비로 영원한 안식을 누리도록 연도를 바쳐주시기 바랍니다.
                  </p>
                </div>

                {/* Financial Thanksgiving Offering */}
                <div className="p-3 bg-[#FAF7F0] border border-[#DDD9D0] text-xs space-y-1">
                  <h4 className="font-bold text-[#5A2428] mb-1">
                    【지난 주일 헌금 및 감사 예물】
                  </h4>
                  <div className="flex justify-between text-[#635F57]">
                    <span>교무금 납부 세대: 142세대</span>
                    <span>감사 헌금 봉헌: 88명</span>
                  </div>
                  <p className="text-[11px] text-[#8E8980] pt-1">
                    정성을 모아주신 교우 여러분께 감사드리며 하느님의 축복을 빕니다.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDD9D0] text-center text-xs text-[#8E8980]">
                  천주교 서울대교구 한강성당 사무실: 02-796-1845 | 혼인 문의: 02-796-1847
                  <br />
                  홈페이지: www.hankang.or.kr | 이메일: office@hankang.or.kr
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-3 bg-[#EDE7DA] border-t border-[#DDD9D0] flex items-center justify-between text-xs">
          <span className="text-[#635F57] font-serif-kr hidden sm:inline">
            ※ 실제 한강성당 주보 원문 편집 기준을 준수합니다.
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white border border-[#DDD9D0] rounded text-xs font-serif-kr hover:bg-[#F4ECE1]"
            >
              인쇄하기
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#5A2428] text-white rounded text-xs font-serif-kr font-bold"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
