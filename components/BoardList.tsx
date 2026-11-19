
import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Search, Filter, Calendar, User, ChevronRight, MessageSquare } from 'lucide-react';

interface Post {
  id: number;
  date: string;
  title: string;
  category: string;
  author: string;
  content: string;
}

interface BoardListProps {
  onBack: (target?: string) => void;
  initialPostId?: number | null;
}

const BoardList: React.FC<BoardListProps> = ({ onBack, initialPostId }) => {
  const allPosts: Post[] = [
    { 
      id: 1, 
      date: "2024.03.20", 
      title: "itbit 공식 웹사이트 리뉴얼 안내", 
      category: "Notice", 
      author: "Admin",
      content: "itbit의 새로운 시작을 알립니다. 이번 리뉴얼을 통해 펌웨어 및 소프트웨어 개발 역량을 더 명확하게 전달하고자 합니다. 고객 여러분의 많은 관심 부탁드립니다."
    },
    { 
      id: 2, 
      date: "2024.03.15", 
      title: "STM32 기반 초저전력 펌웨어 최적화 가이드 공개", 
      category: "Tech", 
      author: "Sanghun",
      content: "임베디드 시스템에서 배터리 수명은 핵심입니다. STM32 시리즈를 활용한 초저전력 설계 노하우와 딥슬립 모드 활용법을 공유합니다."
    },
    { 
      id: 3, 
      date: "2024.03.02", 
      title: "멀티 플랫폼 개발 프로세스 개선 (Android/Windows)", 
      category: "Project", 
      author: "Sanghun",
      content: "하나의 코드 베이스로 다양한 OS에 대응하는 효율적인 개발 프로세스를 구축했습니다. 이를 통해 개발 기간을 30% 단축할 수 있었습니다."
    },
    { 
      id: 4, 
      date: "2024.02.25", 
      title: "물감(mulgam) 프로젝트 베타 테스트 참여자 모집", 
      category: "Lab", 
      author: "Lab Team",
      content: "itbit의 첫 번째 커뮤니티 프로젝트 '물감'이 베타 테스트를 시작합니다. 코스플레이어 여러분의 소중한 피드백을 기다립니다."
    },
    { 
      id: 5, 
      date: "2024.02.10", 
      title: "BLE 비컨을 활용한 위치 추적 솔루션 개발기", 
      category: "Tech", 
      author: "Sanghun",
      content: "실내 위치 추적의 한계를 극복하기 위해 BLE 비컨과 가속도 센서를 결합한 하이브리드 측위 알고리즘을 개발했습니다."
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // initialPostId가 있으면 해당 글을 자동으로 열어줌
  useEffect(() => {
    if (initialPostId) {
      const post = allPosts.find(p => p.id === initialPostId);
      if (post) {
        setSelectedPost(post);
        window.scrollTo(0, 0);
      }
    }
  }, [initialPostId, allPosts]);

  const categories = ['All', 'Notice', 'Tech', 'Project', 'Lab'];

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, allPosts]);

  // 상세 보기에서 뒤로가기 핸들러
  const handleBackFromDetail = () => {
    if (initialPostId) {
      // 홈에서 직접 들어온 경우 홈의 게시판 위치로 바로 이동
      onBack();
    } else {
      // 리스트에서 들어온 경우 다시 리스트로 이동
      setSelectedPost(null);
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 animate-in fade-in slide-in-from-right-5 duration-500">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={handleBackFromDetail}
            className="flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">
              {initialPostId ? "Back to Home" : "Back to List"}
            </span>
          </button>

          <article>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full">
                {selectedPost.category}
              </span>
              <span className="text-slate-600 text-sm">{selectedPost.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight break-keep">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-4 py-6 border-y border-slate-900 mb-10">
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                  <User size={20} />
               </div>
               <div>
                  <p className="text-white font-bold text-sm">{selectedPost.author}</p>
                  <p className="text-slate-500 text-xs">Technical Lead at itbit</p>
               </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line break-keep">
                {selectedPost.content}
              </p>
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-slate-950 border border-slate-900">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-blue-500" /> 관련 문의하기
              </h4>
              <p className="text-slate-500 text-sm mb-6 break-keep">이 게시글의 내용이나 기술적 구현에 대해 궁금한 점이 있으신가요?</p>
              <button 
                onClick={() => onBack('contact')} 
                className="inline-block px-6 py-3 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-500 transition-all active:scale-95"
              >
                상담 신청하기
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => onBack()}
          className="flex items-center gap-2 text-slate-500 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <h1 className="text-5xl font-black text-white tracking-tighter mb-4 italic">BOARD</h1>
            <p className="text-slate-500 font-medium italic">Share knowledge, Create Value.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
              <input 
                type="text" 
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-full py-2.5 pl-11 pr-6 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-slate-900 text-slate-500 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="border-t border-slate-900">
          <div className="space-y-3 pt-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  onClick={() => setSelectedPost(post)}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-950/20 border border-slate-900 rounded-2xl hover:bg-slate-900/40 hover:border-blue-500/30 transition-all cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest px-2.5 py-1 bg-blue-500/5 border border-blue-500/20 rounded-md">
                        {post.category}
                      </span>
                      <span className="text-slate-600 text-xs font-bold md:hidden">{post.date}</span>
                    </div>
                    <h3 className="text-slate-200 font-bold group-hover:text-blue-400 transition-colors text-lg break-keep">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-8 mt-4 md:mt-0">
                    <span className="hidden md:block text-slate-600 text-xs font-bold uppercase tracking-widest">{post.date}</span>
                    <ChevronRight size={16} className="text-slate-800 group-hover:text-blue-500 transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              ))
            ) : (
              <div className="py-32 text-center border border-dashed border-slate-900 rounded-3xl">
                <p className="text-slate-700 font-black uppercase tracking-[0.3em]">No matches found</p>
              </div>
            )}
          </div>
        </div>

        {/* Admin Note - Placeholder for future DB integration */}
        <div className="mt-20 p-10 border border-slate-900 rounded-[2rem] bg-gradient-to-br from-slate-950 to-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-white font-bold mb-1 italic">itbit CMS Engine v1.0</h4>
            <p className="text-slate-600 text-xs font-medium">관리자 인증 후 새로운 소식을 등록할 수 있습니다.</p>
          </div>
          <button className="px-8 py-3 bg-slate-900 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full cursor-not-allowed border border-slate-800">
            Write Post (Locked)
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
