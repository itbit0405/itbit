
import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, Clock, CreditCard, ChevronRight } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  group: 'EMBEDDED' | 'SOFTWARE';
  baseDuration: number;
  basePrice: number;
}

const Estimate: React.FC = () => {
  const [selections, setSelections] = useState<string[]>([]);
  
  const options: Option[] = [
    { id: 'fw', label: '임베디드/펌웨어', group: 'EMBEDDED', baseDuration: 3, basePrice: 1000 },
    { id: 'hw', label: '하드웨어 회로설계', group: 'EMBEDDED', baseDuration: 3, basePrice: 1500 },
    { id: 'and', label: '안드로이드 앱', group: 'SOFTWARE', baseDuration: 3, basePrice: 1650 },
    { id: 'win', label: '윈도우 프로그램', group: 'SOFTWARE', baseDuration: 3, basePrice: 2500 },
    { id: 'web', label: '웹 관리자 페이지', group: 'SOFTWARE', baseDuration: 2, basePrice: 1200 },
  ];

  const toggleOption = (id: string) => {
    setSelections(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const calculation = useMemo(() => {
    if (selections.length === 0) return null;

    // 선택된 항목 중 가장 기간이 긴 것을 베이스로 정렬
    const selectedItems = options
      .filter(opt => selections.includes(opt.id))
      .sort((a, b) => b.baseDuration - a.baseDuration);
    
    // 1. 기간 계산 로직
    // 베이스 기간 설정
    let baseItem = selectedItems[0];
    let totalDuration = baseItem.baseDuration;
    
    // 두 번째 선택 항목부터 증가분 계산
    selectedItems.slice(1).forEach((item) => {
      if (item.group === baseItem.group) {
        // 동일 그룹(소프트웨어-소프트웨어 혹은 펌웨어-펌웨어) 추가 시 2.0개월 증가
        totalDuration += 2.0;
      } else {
        // 교차 그룹(펌웨어 + 소프트웨어) 추가 시 0.5개월 증가
        totalDuration += 0.5;
      }
    });

    // 2. 비용 계산 로직
    const minPrice = selectedItems.reduce((acc, curr) => acc + curr.basePrice, 0);
    // 복합 프로젝트 가중치 (선택 항목이 많을수록 통합 비용 발생)
    const multiplier = selections.length > 2 ? 1.2 : 1.0;
    const maxPrice = Math.round(minPrice * 1.5 * multiplier);

    return {
      duration: totalDuration,
      minPrice,
      maxPrice,
      complexity: selections.length > 3 ? 'High' : selections.length > 1 ? 'Standard' : 'Basic'
    };
  }, [selections]);

  return (
    <section id="estimate" className="py-32 px-6 bg-slate-950/50 border-y border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-6">
            <Calculator className="text-blue-500" size={20} />
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Quotation Tool</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 leading-snug break-keep">
            예산과 기간이<br/>궁금하신가요?
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            진행하시려는 프로젝트의 항목을 선택해보세요.<br/>
            itbit의 축적된 데이터를 바탕으로 예상 개발 범위를 제안해드립니다.
          </p>
          <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
             <p className="text-blue-400 text-sm font-bold">참고: 실제 견적은 요구사항 분석 후 확정됩니다.</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16"></div>

          <div className="space-y-4 mb-12">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Select Service Items</p>
            {options.map((opt) => (
              <button 
                key={opt.id}
                onClick={() => toggleOption(opt.id)}
                className={`w-full flex justify-between items-center p-5 rounded-xl border transition-all duration-300 ${
                  selections.includes(opt.id) 
                  ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/20 scale-[1.02]' 
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600 hover:bg-slate-900'
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold text-base">{opt.label}</span>
                  <span className={`text-[9px] uppercase font-black tracking-widest mt-1 ${selections.includes(opt.id) ? 'text-blue-200' : 'text-slate-600'}`}>
                    {opt.group}
                  </span>
                </div>
                {selections.includes(opt.id) ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <div className="w-5 h-5 border-2 border-slate-800 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-800 space-y-6">
            {!calculation ? (
              <div className="py-8 text-center bg-slate-950/50 rounded-2xl border border-dashed border-slate-800">
                <p className="text-slate-600 text-sm font-medium">항목을 선택하면 견적이 산출됩니다.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Clock size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">예상 기간</span>
                  </div>
                  <p className="text-2xl font-black text-white italic">~{calculation.duration}<span className="text-sm font-bold ml-1 not-italic">개월</span></p>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <CreditCard size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">예상 비용</span>
                  </div>
                  <p className="text-lg font-black text-blue-400">
                    {calculation.minPrice} ~ {calculation.maxPrice}
                    <span className="text-[10px] font-bold ml-1 text-slate-500">만원</span>
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center px-2">
              <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Project Complexity</span>
              <span className={`font-black text-xs uppercase tracking-widest ${calculation?.complexity === 'High' ? 'text-orange-500' : 'text-blue-500'}`}>
                {calculation?.complexity || '-'}
              </span>
            </div>

            <a 
              href="#contact" 
              className={`group flex items-center justify-center gap-2 w-full py-5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                selections.length > 0 
                ? 'bg-white text-black hover:bg-blue-500 hover:text-white' 
                : 'bg-slate-800 text-slate-600 cursor-not-allowed'
              }`}
            >
              상세 견적 요청하기 <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimate;
