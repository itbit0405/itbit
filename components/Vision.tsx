import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 animate-in fade-in slide-in-from-left-10 duration-700 text-center lg:text-left">
                <h2 className="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-5">Our Philosophy</h2>
                <h3 className="text-3xl md:text-5xl font-black text-[#0B3D6A] mb-8 md:mb-10 leading-tight tracking-tight break-keep">단순 개발을 넘어<br/>성공의 파트너가 됩니다.</h3>
                <p className="text-slate-600 text-base md:text-lg mb-10 md:mb-12 leading-relaxed font-normal opacity-80 break-keep">
                    모든 위대한 제품은 작은 아이디어에서 시작됩니다. 잇빗은 그 시작점에 서서 최적의 하드웨어 사양을 제안하고, 이를 구동할 견고한 소프트웨어를 설계합니다. 개발 전 레이어의 유기적인 결합이야말로 잇빗이 제공하는 가장 큰 경쟁력입니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                    <div className="group p-6 md:p-8 bg-slate-50 rounded-[30px] md:rounded-[40px] border border-slate-100 hover:border-[#2E7BB8]/30 transition-all duration-300 hover:bg-white hover:shadow-xl">
                        <div className="text-[#2E7BB8] font-black text-2xl md:text-3xl mb-3 tracking-tighter italic group-hover:scale-105 transition-transform">Idea to Real</div>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">추상적인 생각을<br/>동작하는 제품으로 구체화</p>
                    </div>
                    <div className="group p-6 md:p-8 bg-slate-50 rounded-[30px] md:rounded-[40px] border border-slate-100 hover:border-[#2E7BB8]/30 transition-all duration-300 hover:bg-white hover:shadow-xl">
                        <div className="text-[#2E7BB8] font-black text-2xl md:text-3xl mb-3 tracking-tighter italic group-hover:scale-105 transition-transform">Full Stack</div>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">회로 설계부터<br/>웹 관제까지 원스톱 해결</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 relative animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
                <div className="absolute -inset-2 md:-inset-4 bg-[#2E7BB8]/5 rounded-[40px] md:rounded-[70px] -rotate-2"></div>
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000" className="relative rounded-[30px] md:rounded-[60px] shadow-2xl border-[8px] md:border-[12px] border-white object-cover aspect-[4/3] w-full" alt="Philosophy" />
            </div>
        </div>
    </section>
  );
};

export default Vision;