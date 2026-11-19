import React from 'react';
import { ArrowLeft, CheckCircle2, Target, Settings, Award, Users, Calendar, Laptop, ImageIcon } from 'lucide-react';

interface ProjectDetailProps {
  projectId: number;
  onBack: (target?: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {

  const projectData = {
    1: {
      title: "Smart Factory Sensor Node",
      category: "Firmware / LoRa",
      overview: "산업 현장 데이터 수집을 위한 초저전력 펌웨어 아키텍처 구축",
      image: "",
      info: { period: "2024.01 - 2024.04 (4개월)", personnel: "3명", platform: "Embedded Device" },
      stack: ["STM32L4", "LoRaWAN", "FreeRTOS", "AES-128"],
      problem: "전파 간섭이 심한 공장 내부에서 배터리 교체 주기를 최소화하면서도 완벽한 데이터 전달을 보장해야 했습니다.",
      features: [
        { title: "초저전력 알고리즘", desc: "Deep Sleep 모드에서 2uA 이하의 소모 전류 달성" },
        { title: "보안 통신", desc: "LoRaWAN 표준 보안 프로토콜 및 사용자 정의 AES 암호화 적용" }
      ],
      result: "배터리 수명을 5년 이상으로 연장하고 수신 성공률 99.5%를 달성했습니다."
    },
    2: {
      title: "Logistics Fleet Manager",
      category: "Windows / Android",
      overview: "전국 규모 물류 관리를 위한 실시간 배차 및 통합 관제 시스템",
      image: "",
      info: { period: "2023.09 - 2024.02 (6개월)", personnel: "5명", platform: "Windows & Android" },
      stack: ["C# .NET", "Kotlin", "PostgreSQL", "MQTT", "Google Maps"],
      problem: "수천 대 차량의 실시간 위치 데이터를 지연 없이 처리하고 저사양 단말에서도 지도 렌더링을 구현해야 했습니다.",
      features: [
        { title: "실시간 메시징", desc: "MQTT 브로커를 활용한 대규모 위치 데이터 동기화" },
        { title: "데이터 최적화", desc: "지도 타일 캐싱 및 페이로드 압축으로 통신 비용 절감" }
      ],
      result: "배차 효율성을 18% 개선하고 동시 접속 5,000명 이상을 안정적으로 수용 중입니다."
    },
    3: {
      title: "산소 측정 App",
      category: "Training / Android",
      overview: "산소 훈련 기기 연동 실시간 데이터 측정 및 기록 시스템",
      image: "",
      info: { period: "2024.01 - 2024.03 (3개월)", personnel: "2명", platform: "Android / BLE" },
      stack: ["Kotlin", "Bluetooth LE", "Coroutines", "Jetpack Compose"],
      problem: "산소 훈련 기기와의 블루투스 연결 안정성을 확보하고 훈련 중 발생하는 데이터를 지연 없이 정확하게 기록해야 했습니다.",
      features: [
        { title: "훈련 기기 동기화", desc: "BLE 프로토콜을 통한 전용 산소 훈련 장비와의 고속 데이터 페어링" },
        { title: "데이터 히스토리", desc: "훈련 세션별 측정값 저장 및 시계열 추적 기능" }
      ],
      result: "훈련 기기와의 연결 무결성을 100% 확보하여 실용적인 훈련 데이터를 구축했습니다."
    },
    4: {
      title: "전력량 측정 App",
      category: "Engineering / Android",
      overview: "실시간 전력 소모량 정밀 측정 및 데이터베이스 기록 솔루션",
      image: "",
      info: { period: "2023.11 - 2024.02 (4개월)", personnel: "4명", platform: "Android / Cloud" },
      stack: ["Java", "Firebase", "REST API"],
      problem: "전력 측정 하드웨어로부터 유입되는 원시 데이터를 지연 없이 수집하고 측정값의 신뢰성을 확보하는 것이 중요했습니다.",
      features: [
        { title: "정밀 측정 엔진", desc: "하드웨어 센서 데이터를 연산하여 실시간 전력량(Watt)으로 수치화" },
        { title: "데이터 로깅", desc: "측정 시점별 데이터의 정밀한 기록 및 히스토리 관리" }
      ],
      result: "오차 없는 전력량 데이터 수집 체계를 구축하여 기술 검증(PoC)을 성공적으로 완료했습니다."
    },
    5: {
      title: "조명 컨트롤 App",
      category: "Smart Home / App",
      overview: "다채로운 조명 시나리오 제어를 위한 통합 IoT 플랫폼",
      image: "",
      info: { period: "2024.02 - 2024.04 (3개월)", personnel: "2명", platform: "iOS & Android" },
      stack: ["React Native", "Node.js", "Zigbee Gateway", "MQTT"],
      problem: "조명 간의 그룹 제어 시 지연 시간을 최소화하고 다양한 제조사 조명을 통합 제어해야 했습니다.",
      features: [
        { title: "그룹 동기화", desc: "멀티캐스트 프로토콜을 활용한 조명 동시 제어 기술" },
        { title: "시나리오 편집기", desc: "사용자가 직접 커스텀 조명 패턴을 생성하고 적용하는 기능" }
      ],
      result: "0.1초 이내의 조명 반응 속도를 구현하여 높은 사용자 만족도를 기록했습니다."
    },
    6: {
      title: "버스정류장 냉온열 의자 펌웨어",
      category: "Smart City / Embedded",
      overview: "기상 상태 연동 지능형 온도 제어 시스템",
      image: "",
      info: { period: "2023.10 - 2023.12 (3개월)", personnel: "2명", platform: "ESP32 / RTOS" },
      stack: ["C++", "RTOS", "Modbus-RTU", "AWS IoT Core"],
      problem: "외부 환경에서 하드웨어 신뢰성을 보장하고 에너지 효율을 극대화하는 알고리즘이 필요했습니다.",
      features: [
        { title: "적응형 제어", desc: "외기 온도 센서값에 따른 자동 PID 히팅/쿨링 제어" },
        { title: "원격 모니터링", desc: "중앙 관제소 상태 보고 및 원격 펌웨어 업데이트(OTA) 지원" }
      ],
      result: "전국 각지의 스마트 쉘터에 적용되어 안정적으로 운영되고 있습니다."
    }
  }[projectId] || null;

  if (!projectData) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 text-white">프로젝트 정보를 찾을 수 없습니다.</h2>
      <button onClick={() => onBack()} className="text-blue-500 font-bold underline">BACK TO HOME</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] animate-in fade-in duration-500 pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto px-6 pt-24 md:pt-32">
        {/* Navigation Button Wrapper */}
        <div className="mb-8 md:mb-12">
          <button 
            onClick={() => onBack()} 
            className="flex items-center gap-3 text-slate-400 hover:text-white transition-all group"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm md:text-lg font-black uppercase tracking-widest">BACK TO HOME</span>
          </button>
        </div>

        {/* Title Section */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-md mb-6">
            <span className="text-blue-500 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">{projectData.category}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-tight break-keep">
            {projectData.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-3xl break-keep">
            {projectData.overview}
          </p>
        </div>

        {/* Hero Image */}
        {projectData.image ? (
          <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-900 shadow-2xl mb-8 bg-slate-900 aspect-video">
             <img src={projectData.image} alt={projectData.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-900 shadow-2xl mb-8 bg-slate-950 aspect-video flex items-center justify-center relative group text-[#0B3D6A]/30">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-blue-600/20 blur-[60px] rounded-full"></div>
             
             <img 
               src="logo.svg" 
               alt="itbit logo"
               className="relative z-10 w-32 h-32 md:w-48 md:h-48 object-contain group-hover:scale-105 transition-all duration-700 opacity-50 grayscale"
             />
          </div>
        )}

        {/* Project Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-24">
           <div className="p-6 bg-slate-950 border border-slate-900 rounded-2xl flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                 <Calendar size={18} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">개발 기간</p>
                 <p className="text-white font-bold text-sm">{projectData.info.period}</p>
              </div>
           </div>
           
           <div className="p-6 bg-slate-950 border border-slate-900 rounded-2xl flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                 <Users size={18} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">투입 인원</p>
                 <p className="text-white font-bold text-sm">{projectData.info.personnel} 전문 엔지니어</p>
              </div>
           </div>

           <div className="p-6 bg-slate-950 border border-slate-900 rounded-2xl flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                 <Laptop size={18} />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">대응 플랫폼</p>
                 <p className="text-white font-bold text-sm">{projectData.info.platform}</p>
              </div>
           </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-20 md:space-y-32">
          {/* Tech Stack */}
          <section>
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500"><Settings size={20}/></div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight italic uppercase">Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {projectData.stack.map((s, i) => (
                <div key={i} className="px-5 py-2.5 md:px-6 md:py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-300 text-xs md:text-[13px] font-black uppercase tracking-widest hover:border-blue-500/30 transition-all">
                  {s}
                </div>
              ))}
            </div>
          </section>

          {/* Background & Features */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="sticky top-20 md:top-40">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 bg-red-600/10 rounded-xl text-red-500"><Target size={20}/></div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase italic">Challenge</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg whitespace-pre-line font-medium break-keep">
                {projectData.problem}
              </p>
            </div>
            
            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] mb-4">Core Solutions</h4>
               {projectData.features.map((f, i) => (
                 <div key={i} className="p-6 md:p-8 bg-slate-950/40 border border-slate-900 rounded-[1.5rem] hover:border-blue-500/20 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                       <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                       <span className="text-white text-lg font-bold break-keep">{f.title}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed break-keep">{f.desc}</p>
                 </div>
               ))}
            </div>
          </section>

          {/* Outcome Result */}
          <section className="relative p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-slate-950 border border-slate-900 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="p-3 bg-blue-500 rounded-xl text-white shadow-lg shadow-blue-500/20"><Award size={20}/></div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase italic">Final Outcome</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-xl md:text-2xl font-bold italic tracking-tight break-keep">
                "{projectData.result}"
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-32 md:mt-40 pt-16 md:pt-24 border-t border-slate-900 text-center">
           <h4 className="text-white text-2xl md:text-3xl font-black tracking-tighter mb-4 md:mb-6 italic">READY TO SCALE?</h4>
           <p className="text-slate-500 font-bold mb-8 md:mb-10 max-w-md mx-auto break-keep text-sm md:text-base">itbit의 엔지니어링 역량을 당신의 비즈니스에 이식하세요.</p>
           <button 
             onClick={() => onBack('contact')} 
             className="inline-block px-10 py-4 md:px-12 md:py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-blue-500 hover:text-white hover:scale-105 transition-all shadow-2xl active:scale-95"
           >
             Start Project Inquiry
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;