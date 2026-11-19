import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

// Components
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Vision from './components/Vision.tsx';
import Services from './components/Services.tsx';
import Tech from './components/Tech.tsx';
import Process from './components/Process.tsx';
import Media from './components/Media.tsx';
import Contact from './components/Contact.tsx';
import Board from './components/Board.tsx';
import BoardList from './components/BoardList.tsx';
import logo from './logo.png'; // 로고 파일 경로

const App: React.FC = () => {
  // 게시판 화면 전환: null이면 홈, 'list'면 목록, 숫자면 해당 글
  const [boardView, setBoardView] = useState<null | 'list' | number>(null);

  const backToHome = (target: string = 'board') => {
    setBoardView(null);
    setTimeout(() => document.getElementById(target)?.scrollIntoView(), 0);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {boardView !== null ? (
        <BoardList
          onBack={backToHome}
          initialPostId={typeof boardView === 'number' ? boardView : null}
        />
      ) : (
      <main>
        <Hero />
        <Vision />
        <Services />
        <Tech />
        <Process />
        <Media />
        <div className="bg-[#050505]">
          <Board
            onViewAll={() => { setBoardView('list'); window.scrollTo(0, 0); }}
            onSelectPost={(id) => { setBoardView(id); window.scrollTo(0, 0); }}
          />
        </div>
        <Contact />
      </main>
      )}

      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-sm">
        <div className="max-w-7xl mx-auto">
            <div className="border-b border-white/5 pb-6 mb-6">
                <div className="space-y-6">
                    <a href="#home" className="flex items-center gap-3 group">
                        <img 
                            src={logo}
                            alt="ITBIT" 
                            className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-300" 
                        />
                         <span className="text-2xl font-black text-white tracking-tighter uppercase">ITBIT</span>
                    </a>
                    <div className="space-y-3 text-slate-400 leading-relaxed font-light">
                        <p className="flex items-start gap-4"><span className="font-bold text-slate-600 uppercase text-[10px] w-16 pt-1">Address</span> <span>서울특별시 금천구 가산디지털1로 120<br/>G밸리 창업큐브 807호</span></p>
                        <p className="flex items-center gap-4"><span className="font-bold text-slate-600 uppercase text-[10px] w-16">Tel</span> 050-6552-7778</p>
                        <p className="flex items-center gap-4"><span className="font-bold text-slate-600 uppercase text-[10px] w-16">Email</span> <a href="mailto:itbit@itbit.co.kr" className="hover:text-white transition">itbit@itbit.co.kr</a></p>
                    </div>
                </div>
            </div>
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-600">
                <p>© 2026 ITBIT Co., Ltd. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
