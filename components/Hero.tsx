import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white hero-clip overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-80" alt="Hero Background" />
        </div>
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl animate-in fade-in slide-in-from-bottom-10 duration-1000 w-full">
            <p className="inline-block px-4 py-1.5 bg-blue-400/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-100 text-[10px] md:text-[11px] font-bold tracking-[0.2em] mb-6 md:mb-8 uppercase">Premium Tech Partner</p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 leading-[1.1] tracking-tight break-keep">
                당신의 아이디어를<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">완벽한 실체로</span> 만듭니다
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mb-10 md:mb-14 opacity-90 font-light leading-relaxed max-w-3xl mx-auto break-keep">
                기획부터 양산까지, 하드웨어와 소프트웨어를 아우르는<br className="hidden md:block" />
                잇빗의 통합 기술력이 당신의 비즈니스에 가치를 더합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
                <a href="#contact" className="bg-[#2E7BB8] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-[#2E7BB8] transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 w-full sm:w-auto">상담 신청하기</a>
                <a href="#process" className="backdrop-blur-md border border-white/40 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">프로세스 확인</a>
            </div>
        </div>
    </section>
  );
};

export default Hero;