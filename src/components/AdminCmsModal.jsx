import React, { useState } from 'react';
import { X, Save, Plus, Trash2, Clock, FileText, Users, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AdminCmsModal({
  isOpen,
  onClose,
  schedule,
  onUpdateSchedule,
  newsList,
  onUpdateNews,
}) {
  const [activeTab, setActiveTab] = useState('mass');
  const [saveToast, setSaveToast] = useState(false);

  // Local editable states
  const [localSchedule, setLocalSchedule] = useState(schedule);
  const [localNews, setLocalNews] = useState(newsList);

  // New notice form
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCat, setNewNoticeCat] = useState('공지사항');
  const [newNoticeContent, setNewNoticeContent] = useState('');

  if (!isOpen) return null;

  const handleSaveMassTimes = () => {
    onUpdateSchedule(localSchedule);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleUpdateSundaySlot = (index, field, value) => {
    const updated = { ...localSchedule };
    updated.sunday[index][field] = value;
    setLocalSchedule(updated);
  };

  const handleAddSundaySlot = () => {
    const updated = { ...localSchedule };
    updated.sunday.push({
      time: '12:30',
      title: '추가 미사',
      location: '대성전',
      target: '일반 교우',
      isHighlight: false,
    });
    setLocalSchedule(updated);
  };

  const handleRemoveSundaySlot = (index) => {
    const updated = { ...localSchedule };
    updated.sunday.splice(index, 1);
    setLocalSchedule(updated);
  };

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNoticeTitle.trim()) return;

    const newEntry = {
      id: Date.now(),
      category: newNoticeCat,
      title: newNoticeTitle,
      date: '2026. 10. 06',
      author: '본당사무실',
      isImportant: false,
      content: newNoticeContent || '신규 등록된 공지사항 내용입니다.',
    };

    const updatedNews = [newEntry, ...localNews];
    setLocalNews(updatedNews);
    onUpdateNews(updatedNews);
    setNewNoticeTitle('');
    setNewNoticeContent('');
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleDeleteNotice = (id) => {
    const updated = localNews.filter((n) => n.id !== id);
    setLocalNews(updated);
    onUpdateNews(updated);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F0] border border-[#DDD9D0] rounded-xs max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden text-[#20201E]">
        {/* Header */}
        <div className="p-4 bg-[#20201E] text-[#F7F4EE] flex items-center justify-between border-b border-[#3A3530]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B69A63] animate-pulse" />
            <h3 className="font-serif-kr text-base font-bold">
              천주교 한강성당 사목행정 CMS (본당 관리자 시스템)
            </h3>
            <span className="text-[11px] font-mono text-[#AAA59B] hidden sm:inline">
              [V2.0 LIVE SYNC]
            </span>
          </div>

          <button onClick={onClose} className="p-1 text-[#AAA59B] hover:text-white" aria-label="닫기">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toast alert */}
        {saveToast && (
          <div className="bg-[#2D6A4F] text-white text-xs px-4 py-2 flex items-center gap-1.5 transition-all">
            <CheckCircle2 className="w-4 h-4" />
            <span>변경 사항이 실시간으로 홈페이지에 반영되었습니다.</span>
          </div>
        )}

        {/* CMS Tabs */}
        <div className="bg-[#ECE7DC] px-4 py-2 border-b border-[#DDD9D0] flex items-center gap-2 overflow-x-auto text-xs">
          {[
            { id: 'mass', label: '미사시간 관리', icon: Clock },
            { id: 'news', label: '공지/소식 관리', icon: FileText },
            { id: 'clergy', label: '사목 사제단 안내', icon: Users },
            { id: 'wedding', label: '혼인성사 일정/규정', icon: Heart },
            { id: 'wyd', label: '2027 WYD 배너 관리', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1.5 px-3 rounded-xs font-serif-kr font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#5A2428] text-[#F7F4EE] font-bold'
                    : 'bg-white/70 hover:bg-white text-[#4A463F]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F4F1EA]">
          {/* TAB 1: MASS SCHEDULE */}
          {activeTab === 'mass' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-between border-b border-[#DDD9D0] pb-3">
                <div>
                  <h4 className="font-serif-kr text-lg font-bold text-[#5A2428]">
                    주일 미사 시간표 실시간 편집
                  </h4>
                  <p className="text-xs text-[#635F57]">
                    여기서 변경하는 미사 시간과 장소는 메인 화면의 미사 안내에 즉시 반영됩니다.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddSundaySlot}
                    className="px-3 py-1.5 bg-white border border-[#DDD9D0] hover:bg-[#F2EDE1] text-xs font-serif-kr rounded flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>미사 추가</span>
                  </button>
                  <button
                    onClick={handleSaveMassTimes}
                    className="px-4 py-1.5 bg-[#5A2428] hover:bg-[#3E1619] text-white text-xs font-bold rounded flex items-center gap-1 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>저장 적용</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {localSchedule.sunday.map((slot, index) => (
                  <div key={index} className="p-3 bg-white border border-[#DDD9D0] rounded-xs grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                    <div className="sm:col-span-2">
                      <label className="text-[10px] text-[#8E8980] block">시간</label>
                      <input
                        type="text"
                        value={slot.time}
                        onChange={(e) => handleUpdateSundaySlot(index, 'time', e.target.value)}
                        className="w-full font-mono text-sm font-bold border border-[#DDD9D0] p-1 rounded bg-[#FAF7F0]"
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <label className="text-[10px] text-[#8E8980] block">미사 명칭</label>
                      <input
                        type="text"
                        value={slot.title}
                        onChange={(e) => handleUpdateSundaySlot(index, 'title', e.target.value)}
                        className="w-full text-xs font-medium border border-[#DDD9D0] p-1 rounded"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[10px] text-[#8E8980] block">장소</label>
                      <input
                        type="text"
                        value={slot.location}
                        onChange={(e) => handleUpdateSundaySlot(index, 'location', e.target.value)}
                        className="w-full text-xs border border-[#DDD9D0] p-1 rounded"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="text-[10px] text-[#8E8980] block">대상/지향</label>
                      <input
                        type="text"
                        value={slot.target}
                        onChange={(e) => handleUpdateSundaySlot(index, 'target', e.target.value)}
                        className="w-full text-xs border border-[#DDD9D0] p-1 rounded"
                      />
                    </div>
                    <div className="sm:col-span-1 flex justify-end">
                      <button
                        onClick={() => handleRemoveSundaySlot(index)}
                        className="p-1.5 text-red-700 hover:bg-red-50 rounded"
                        title="삭제"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: NEWS & NOTICES */}
          {activeTab === 'news' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-4 border border-[#DDD9D0] rounded-xs shadow-xs">
                <h4 className="font-serif-kr text-sm font-bold text-[#5A2428] mb-3">
                  새 공지사항 등록
                </h4>
                <form onSubmit={handleAddNotice} className="space-y-3 text-xs">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[#8E8980] mb-1">분류</label>
                      <select
                        value={newNoticeCat}
                        onChange={(e) => setNewNoticeCat(e.target.value)}
                        className="w-full p-2 border border-[#DDD9D0] rounded bg-[#FAF7F0]"
                      >
                        <option value="공지사항">공지사항</option>
                        <option value="이번 주 주보">이번 주 주보</option>
                        <option value="본당 행사">본당 행사</option>
                        <option value="함께하는 삶">함께하는 삶</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-[#8E8980] mb-1">제목 *</label>
                      <input
                        type="text"
                        required
                        value={newNoticeTitle}
                        onChange={(e) => setNewNoticeTitle(e.target.value)}
                        placeholder="공지사항 제목을 입력하세요"
                        className="w-full p-2 border border-[#DDD9D0] rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#8E8980] mb-1">상세 내용</label>
                    <textarea
                      rows="2"
                      value={newNoticeContent}
                      onChange={(e) => setNewNoticeContent(e.target.value)}
                      placeholder="공지 세부 내용을 입력하세요"
                      className="w-full p-2 border border-[#DDD9D0] rounded"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#5A2428] text-white font-bold rounded flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>게시글 즉시 등록</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing News List */}
              <div className="space-y-2">
                <h5 className="font-serif-kr text-xs font-bold text-[#635F57]">
                  현재 등록된 게시글 목록 ({localNews.length}건)
                </h5>
                {localNews.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-white border border-[#DDD9D0] rounded flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="truncate">
                      <span className="font-mono text-[10px] bg-[#FAF6EC] text-[#5A2428] px-1.5 py-0.5 rounded mr-2">
                        {item.category}
                      </span>
                      <span className="font-serif-kr font-bold text-[#20201E]">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-[#8E8980] ml-2 font-mono">
                        {item.date}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteNotice(item.id)}
                      className="text-red-700 hover:bg-red-50 p-1 rounded shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CLERGY */}
          {activeTab === 'clergy' && (
            <div className="space-y-4 max-w-2xl mx-auto text-xs font-serif-kr">
              <div className="bg-white p-5 border border-[#DDD9D0] rounded-xs space-y-3">
                <h4 className="text-sm font-bold text-[#5A2428]">본당 사목 사제단 현황</h4>
                <div className="p-3 bg-[#FAF7F0] border rounded space-y-1">
                  <p className="font-bold text-[#20201E]">주임신부: 임용환 (엘리야)</p>
                  <p className="text-[#635F57]">부임일: 2026년 2월 19일</p>
                </div>
                <div className="p-3 bg-[#FAF7F0] border rounded space-y-1">
                  <p className="font-bold text-[#20201E]">보좌신부: 구본정 (바오로)</p>
                  <p className="text-[#635F57]">소임: 청소년·청년 사목 및 전례</p>
                </div>
                <div className="p-3 bg-[#FAF7F0] border rounded space-y-1">
                  <p className="font-bold text-[#20201E]">협력신부: 이현석 (요셉)</p>
                  <p className="text-[#635F57]">소임: 원로 사목 협력</p>
                </div>
                <div className="p-3 bg-[#FAF7F0] border rounded space-y-1">
                  <p className="font-bold text-[#20201E]">수도회: 영원한 도움의 성모 수도회</p>
                  <p className="text-[#635F57]">전례수녀 및 대건유치원 원장수녀</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: WEDDING */}
          {activeTab === 'wedding' && (
            <div className="space-y-4 max-w-2xl mx-auto text-xs font-serif-kr">
              <div className="bg-white p-5 border border-[#DDD9D0] rounded-xs space-y-3">
                <h4 className="text-sm font-bold text-[#5A2428]">혼인성사 사무 관리</h4>
                <div className="p-3 bg-[#FAF7F0] border rounded">
                  <p className="font-bold">직통 문의 전화번호: 02-796-1847</p>
                  <p className="text-[#635F57] mt-1">예식 시간: 토요일 12:00 / 15:00, 금요일 17:00</p>
                  <p className="text-[#635F57] mt-1">대성전 수용 인원: 600석</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: WYD */}
          {activeTab === 'wyd' && (
            <div className="space-y-4 max-w-2xl mx-auto text-xs font-serif-kr">
              <div className="bg-white p-5 border border-[#DDD9D0] rounded-xs space-y-3">
                <h4 className="text-sm font-bold text-[#5A2428]">2027 서울 WYD 배너 및 주제 성구</h4>
                <p className="text-sm font-bold text-[#20201E]">
                  “용기를 내어라. 내가 세상을 이겼다.” (요한 16,33)
                </p>
                <p className="text-[#635F57]">
                  지구좌 성당 역할: 제1 중구-용산지구 거점 본당 (해외 순례단 홈스테이 및 새남터 순례길 연계)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#EDE7DA] border-t border-[#DDD9D0] flex justify-between items-center text-xs">
          <span className="text-[#635F57] font-mono">
            HANGANG CATHOLIC CHURCH CMS ENGINE
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#20201E] text-white rounded font-bold"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
