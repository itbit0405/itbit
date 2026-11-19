import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '안녕하세요! itbit의 AI 기술 상담사입니다. 배상훈 대표님과 함께하는 itbit의 멀티 플랫폼 개발 서비스나 물감(mulgam) 프로젝트에 대해 궁금한 점이 있으신가요?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `너는 대한민국 최고의 펌웨어 및 멀티 플랫폼 소프트웨어 개발사 'itbit(잇빗)'의 공식 AI 상담원이야. 
          
          [회사 정보]
          - 회사 이름: itbit (잇빗)
          - 대표자: 배상훈
          - 대표 번호: 010-5353-0956
          - 이메일: itbit.co.kr@gmail.com
          - 주요 서비스: 
            1. 펌웨어 및 임베디드 개발 (MCU, 저전력 통신 등)
            2. Android 모바일 앱 개발
            3. Windows 데스크톱 어플리케이션 개발
            4. 웹 플랫폼 및 클라우드 시스템 통합
          - 특별 프로젝트: 'mulgam(물감)' (코스프레 커뮤니티, https://mulgam2.vercel.app/)
          
          [상담 지침]
          1. 사용자의 질문에 전문적이면서도 친절한 비즈니스 매너로 답변해.
          2. 안드로이드 앱이나 윈도우 프로그램 개발 문의가 들어오면 itbit의 네이티브 개발 능력을 강조하며 상담 신청을 유도해.
          3. 대표님 성함(배상훈)이나 연락처를 물어보면 정확하게 안내해줘.
          4. '물감' 프로젝트에 대한 관심도 적극적으로 대응하며 링크를 안내해줘.
          5. 가능한 간결하게 핵심 위주로 답변해.`,
        },
      });

      const aiText = response.text || "죄송합니다. 잠시 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "네트워킹 오류가 발생했습니다. itbit의 전문 개발팀이 확인 중입니다." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] max-h-[70vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col mb-4 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">itbit AI Consultant</h4>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Real-time Assistance</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <X size={18} className="text-slate-400" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-slate-800 text-slate-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-none">
                  <Loader2 className="animate-spin text-blue-400" size={20} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-800 bg-slate-950 rounded-b-3xl">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="무엇을 도와드릴까요?"
                className="w-full bg-slate-900 border border-slate-800 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10 appearance-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-1 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 flex items-center gap-2 group ${
          isOpen ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white'
        }`}
      >
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-bold pl-2 hidden sm:inline-block">기술 상담 받기</span>}
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default AIConsultant;