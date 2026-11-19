import React from 'react';

const Tech: React.FC = () => {
  const techs = [
    { name: "STM32 MCU", highlight: "ST", color: "text-blue-600" },
    { name: "Analog Expert", highlight: "TI", color: "text-red-700" },
    { name: "Embedded OS", highlight: "FreeRTOS", color: "text-slate-800" },
    { name: "MCU Solution", highlight: "MICROCHIP", color: "text-red-600" },
    { name: "BLE/Wireless", highlight: "NORDIC", color: "text-sky-500" },
    { name: "Wi-Fi & IoT", highlight: "ESP32", color: "text-red-500" },
    { name: "Linux SBC", highlight: "Raspberry Pi", color: "text-pink-600" },
    { name: "OS Customizing", highlight: "Linux", color: "text-slate-800" },
    { name: "Mobile OS", highlight: "Android", color: "text-green-500" },
    { name: "Apple Eco", highlight: "iOS", color: "text-slate-900" },
    { name: "Prototyping", highlight: "Arduino", color: "text-teal-500" },
    { name: "PC / Web SW", highlight: "Python", color: "text-blue-400" },
  ];

  return (
    <section id="tech" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
                <h2 className="text-[#2E7BB8] font-bold tracking-[0.3em] uppercase text-sm mb-4">Tech Stack</h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#0B3D6A] mb-6 tracking-tight">글로벌 표준 기술력</h3>
                <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">최신 칩셋부터 운영체제까지, 잇빗의 전문성을 지탱하는 핵심 기술군입니다.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {techs.map((t, i) => (
                    <div key={i} className="p-10 rounded-[35px] flex flex-col items-center justify-center tech-card border border-slate-100">
                        <div className="h-10 flex items-center mb-4">
                            <span className={`text-xl font-black italic tracking-tighter ${t.color}`}>{t.highlight}</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Tech;