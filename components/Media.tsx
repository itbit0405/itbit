import React from 'react';
import { Youtube } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <section id="media" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900 rounded-[60px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-700">
                <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-[#FF0000] px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
                            <Youtube size={16} fill="white" />
                            <span className="text-sm font-black tracking-wide uppercase text-white">ITBIT YOUTUBE</span>
                        </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">잇빗의 기술 노하우를<br/>영상으로 확인하세요</h3>
                    <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                        최신 임베디드 기술 트렌드부터 실전 개발 팁까지,<br/>
                        잇빗이 공유하는 생생한 엔지니어링 스토리를 만나보세요.
                    </p>
                    <div>
                        <a href="https://www.youtube.com/channel/UCnlDVP9AKjGNpU8xz5Y7w-Q" target="_blank" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            채널 바로가기
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 relative bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000" alt="Tech Social Media" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/50"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Media;