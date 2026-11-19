import React from 'react';
import { Cpu, Monitor, Smartphone, Terminal, Server, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "하드웨어 설계",
      href: "/services/hardware/",
      desc: "고집적 다층 PCB 설계 및 신호 무결성 분석을 통한 안정적인 하드웨어 기반을 구축합니다.",
      icon: <Cpu size={32} />
    },
    {
      title: "펌웨어 개발",
      href: "/services/firmware/",
      desc: "다양한 MCU 아키텍처에서 최적의 퍼포먼스를 발휘하는 효율적인 제어 로직과 드라이버를 개발합니다.",
      icon: <Terminal size={32} />
    },
    {
      title: "모바일 앱",
      href: "/services/mobile-app/",
      desc: "iOS 및 Android 플랫폼에서 기기 연동 및 사용자 중심의 인터페이스를 제공하는 전용 앱을 구현합니다.",
      icon: <Smartphone size={32} />
    },
    {
      title: "리눅스 시스템",
      href: "/services/embedded-linux/",
      desc: "임베디드 리눅스 포팅, 커널 드라이버 최적화 및 복잡한 고사양 시스템 소프트웨어를 구축합니다.",
      icon: <Server size={32} />
    },
    {
      title: "PC 프로그램",
      href: "/services/pc-software/",
      desc: "하드웨어 제어 및 데이터 분석을 위한 Windows/Mac 데스크톱 응용 프로그램을 맞춤 개발합니다.",
      icon: <Monitor size={32} />
    },
    {
      title: "웹 개발",
      desc: "IoT 기기 상태 모니터링 및 실시간 데이터 관제를 위한 클라우드 기반 웹 대시보드를 구축합니다.",
      icon: <Globe size={32} />
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-5 duration-700">
                <h2 className="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-sm mb-4">Core Domains</h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#0B3D6A] mb-6 tracking-tight">토탈 엔지니어링 서비스</h3>
                <div className="w-16 h-1.5 bg-[#2E7BB8] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s, i) => {
                    const href = 'href' in s ? s.href : undefined;
                    const Card = href ? 'a' : 'div';
                    return (
                    <Card key={i} {...(href ? { href } : {})} className="group block p-10 bg-white rounded-[45px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5" style={{animationDelay: `${i * 100}ms`}}>
                        <div className="w-16 h-16 bg-blue-50 text-[#2E7BB8] rounded-2xl flex items-center justify-center mb-8">
                            {s.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4 text-[#0B3D6A]">{s.title}</h4>
                        <p className="text-slate-500 leading-relaxed font-light">{s.desc}</p>
                        {href && (
                            <span className="inline-flex items-center gap-1 mt-6 text-[#2E7BB8] font-bold text-sm group-hover:gap-2 transition-all">자세히 보기 →</span>
                        )}
                    </Card>
                    );
                })}
            </div>
        </div>
    </section>
  );
};

export default Services;