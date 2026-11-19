import React, { useState, useMemo } from 'react';
import { ExternalLink, Layers, Cpu, Zap, Thermometer, Wind, Lightbulb, Box } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (id: number) => void;
}

const PortfolioCard: React.FC<{ project: any; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer flex flex-col h-full bg-white rounded-[1.5rem] p-8 hover:-translate-y-2 transition-all duration-500 shadow-[0_5px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-slate-100/50"
    >
      {/* Branding Header Area (Replaces Image) */}
      <div className="h-48 bg-[#F8FAFC] rounded-2xl flex flex-col items-center justify-center mb-8 group-hover:bg-blue-50/50 transition-colors duration-500">
        <Layers className="text-blue-200 w-12 h-12 mb-4 group-hover:text-blue-300 transition-colors" strokeWidth={1.5} />
        <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 group-hover:text-blue-200 transition-colors uppercase">
            ITBIT ENGINEERING
        </span>
      </div>
      
      {/* Content Container */}
      <div className="flex flex-col flex-1">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
            {React.cloneElement(project.icon, { size: 14, className: "text-[#2E7BB8]" })}
            <span className="text-[10px] font-black text-[#2E7BB8] uppercase tracking-widest block">
                {project.category}
            </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-[#0B3D6A] mb-4 leading-tight tracking-tight break-keep">
            {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed line-clamp-3 break-keep">
            {project.desc}
        </p>
        
        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 text-[11px] font-bold tracking-tight rounded-lg">
                {project.duration}
            </span>
            <span className="px-4 py-2 bg-slate-100 text-slate-600 text-[11px] font-bold tracking-tight rounded-lg">
                {project.budget}
            </span>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('전체');

  const categories = ['전체', 'Firmware', 'App', 'Windows', 'Web'];

  const projects = [
    {
      id: 1,
      title: "Smart Factory Sensor Node",
      category: "Firmware",
      icon: <Cpu />,
      desc: "산업 현장 데이터 수집을 위한 저전력 무선 센서 노드 최적화 및 메쉬 네트워크 구축",
      duration: "3~4개월",
      budget: "2000~4000만원"
    },
    {
      id: 6,
      title: "버스정류장 냉온열 의자 펌웨어",
      category: "Firmware",
      icon: <Thermometer />,
      desc: "지자체 스마트 쉘터용 냉온열 벤치 제어 알고리즘 및 센서 데이터 통합 모니터링 시스템",
      duration: "2~3개월",
      budget: "1000~1500만원"
    },
    {
      id: 2,
      title: "Logistics Fleet Manager",
      category: "Windows",
      icon: <Layers />,
      desc: "전국 규모 차량 실시간 위치 추적 및 AI 배차 최적화 엔진을 탑재한 통합 관제 시스템",
      duration: "4~6개월",
      budget: "5000만원 이상"
    },
    {
      id: 3,
      title: "산소 측정 App",
      category: "App",
      icon: <Wind />,
      desc: "산소 훈련 기기와 연동하여 실시간 산소 데이터를 정밀하게 측정하고 기록하는 전용 앱",
      duration: "2~3개월",
      budget: "1500~2500만원"
    },
    {
      id: 4,
      title: "전력량 측정 App",
      category: "App",
      icon: <Zap />,
      desc: "실시간 전력 소모량을 정밀하게 측정하고 데이터베이스에 기록하는 엔지니어링 솔루션",
      duration: "3~4개월",
      budget: "1500~2500만원"
    },
    {
      id: 5,
      title: "조명 컨트롤 App",
      category: "App",
      icon: <Lightbulb />,
      desc: "BLE/Wi-Fi 기반 스마트 전구 및 산업용 조명 그룹 제어, 스케줄링 최적화 시스템",
      duration: "2~3개월",
      budget: "1500~2500만원"
    }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === '전체') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-[10px] font-black text-[#2E7BB8] uppercase tracking-[0.4em] mb-4">Case Studies</h2>
            <p className="text-4xl md:text-5xl font-black text-[#0B3D6A] tracking-tighter uppercase">Selected<br/>Portfolio</p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-2 pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-[#0B3D6A] text-white shadow-lg shadow-blue-900/20' 
                  : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              onClick={() => onSelectProject(project.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;