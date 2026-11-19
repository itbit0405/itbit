
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BoardProps {
  onViewAll: () => void;
  onSelectPost: (id: number) => void;
}

const Board: React.FC<BoardProps> = ({ onViewAll, onSelectPost }) => {
  const news = [
    { id: 1, date: "2024.03.20", title: "itbit 공식 웹사이트 리뉴얼 안내", category: "Notice" },
    { id: 2, date: "2024.03.15", title: "STM32 기반 초저전력 펌웨어 최적화 가이드 공개", category: "Tech" },
    { id: 3, date: "2024.03.02", title: "멀티 플랫폼 개발 프로세스 개선 (Android/Windows)", category: "Project" },
    { id: 4, date: "2024.02.25", title: "물감(mulgam) 프로젝트 베타 테스트 참여자 모집", category: "Lab" }
  ];

  return (
    <section id="board" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Latest Board</h2>
            <p className="text-4xl font-black text-white tracking-tighter">새로운 소식</p>
          </div>
          <button 
            onClick={onViewAll}
            className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1"
          >
            View All <ChevronRight size={14} />
          </button>
        </div>

        <div className="space-y-px bg-slate-900 border border-slate-900">
          {news.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectPost(item.id)}
              className="bg-[#050505] p-6 flex flex-col md:flex-row justify-between items-start md:items-center group hover:bg-slate-950 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-3 py-1 border border-blue-500/30 rounded-full">{item.category}</span>
                <h3 className="text-slate-200 font-bold group-hover:text-white transition-colors">{item.title}</h3>
              </div>
              <span className="text-slate-600 text-sm font-medium mt-2 md:mt-0">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
