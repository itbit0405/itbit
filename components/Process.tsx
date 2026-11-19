import React from 'react';
import { Lightbulb, Code2 } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-[#0B3D6A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <div className="lg:w-1/2 animate-in fade-in slide-in-from-left-10 duration-700 w-full">
                    <h2 className="text-blue-400 font-bold mb-4 tracking-[0.3em] text-xs md:text-sm uppercase">Roadmap</h2>
                    <h3 className="text-3xl md:text-5xl font-black mb-12 md:mb-16 leading-tight tracking-tight break-keep">아이디어의 가치를,<br/><span className="text-[#2E7BB8]">기술로 완성합니다</span></h3>
                    <div className="space-y-10 md:space-y-14 process-line relative pl-2 md:pl-0">
                        <div className="flex gap-6 md:gap-10 items-start relative z-10 group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2E7BB8] flex items-center justify-center flex-shrink-0 font-black text-white text-sm md:text-base shadow-xl group-hover:scale-110 transition-transform duration-500 border-4 border-[#0B3D6A]">01</div>
                            <div>
                                <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">기획 및 기술 분석</h5>
                                <p className="text-blue-100/60 font-light leading-relaxed text-sm md:text-base break-keep">고객의 아이디어를 깊이 분석하여 기술적 실현 가능성을 진단하고 최적의 아키텍처를 수립합니다.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 md:gap-10 items-start relative z-10 group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2E7BB8] flex items-center justify-center flex-shrink-0 font-black text-white text-sm md:text-base shadow-xl group-hover:scale-110 transition-transform duration-500 border-4 border-[#0B3D6A]">02</div>
                            <div>
                                <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">통합 설계 및 개발</h5>
                                <p className="text-blue-100/60 font-light leading-relaxed text-sm md:text-base break-keep">하드웨어와 소프트웨어 팀이 유기적으로 협력하여 오차 없는 고성능 통합 시스템을 완성합니다.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 md:gap-10 items-start relative z-10 group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2E7BB8] flex items-center justify-center flex-shrink-0 font-black text-white text-sm md:text-base shadow-xl group-hover:scale-110 transition-transform duration-500 border-4 border-[#0B3D6A]">03</div>
                            <div>
                                <h5 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">최종 검증 및 납품</h5>
                                <p className="text-blue-100/60 font-light leading-relaxed text-sm md:text-base break-keep">엄격한 품질 테스트를 거친 완벽한 결과물을 인도하고 이후 양산 및 사후 관리까지 책임집니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center items-center animate-in fade-in slide-in-from-right-10 duration-700 delay-200 w-full">
                    <div className="relative w-full max-w-[320px] md:max-w-sm bg-white rounded-[40px] md:rounded-[60px] shadow-2xl flex flex-col items-center justify-center p-8 md:p-12 border-b-[8px] md:border-b-[12px] border-[#2E7BB8] overflow-hidden animate-float">
                        <div className="absolute inset-0 bg-slate-50 opacity-20"></div>
                        
                        <div className="flex flex-col items-center gap-4 mb-8 md:mb-10 relative z-10 text-slate-900">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center text-[#2E7BB8] border-4 border-white shadow-md">
                                <Lightbulb size={40} className="md:w-12 md:h-12" />
                            </div>
                            <span className="font-black text-xl md:text-2xl tracking-tighter">Think Together</span>
                        </div>

                        <div className="h-8 md:h-12 w-1 bg-blue-100 mb-8 md:mb-10 relative">
                             <div className="absolute inset-x-0 -top-1 w-2 h-2 rounded-full bg-[#2E7BB8] mx-auto"></div>
                             <div className="absolute inset-x-0 -bottom-1 w-2 h-2 rounded-full bg-[#2E7BB8] mx-auto"></div>
                        </div>

                        <div className="flex flex-col items-center gap-4 relative z-10 text-[#2E7BB8]">
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-[#2E7BB8] rounded-[30px] md:rounded-[40px] flex items-center justify-center text-white shadow-xl rotate-3 transform hover:rotate-0 transition duration-500">
                                <Code2 size={48} className="md:w-14 md:h-14" />
                            </div>
                            <span className="font-black text-xl md:text-2xl tracking-tighter">Develop Perfectly</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Process;