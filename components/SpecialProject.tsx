
import React from 'react';
import { ExternalLink, Palette, FlaskConical } from 'lucide-react';

const SpecialProject: React.FC = () => {
  return (
    <section id="lab" className="py-32 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
           <FlaskConical className="text-teal-400" size={24} />
           <h2 className="text-[10px] font-black text-teal-400 uppercase tracking-[0.4em]">itbit Creative Lab</h2>
        </div>

        <div className="relative group rounded-[2rem] overflow-hidden border border-slate-800 bg-[#080808] p-8 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                MULGAM<span className="text-teal-400 text-2xl align-top ml-2">Beta</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 font-medium">
                itbit의 실험적 프로젝트 '물감'은 코스프레 아티스트를 위한 새로운 차원의 커뮤니티 플랫폼입니다. 
                우리는 엔지니어링을 넘어 문화적 연결을 설계합니다.
              </p>
              
              <a 
                href="https://mulgam2.vercel.app/" 
                target="_blank" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-teal-400 transition-all shadow-xl shadow-teal-400/5"
              >
                Launch Lab Project <ExternalLink size={14} />
              </a>
            </div>

            <div className="order-1 lg:order-2 relative">
               <div className="absolute inset-0 bg-teal-400/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative aspect-[4/3] rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop" 
                    alt="Lab Preview" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialProject;
