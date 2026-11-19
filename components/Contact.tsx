import React, { useState } from 'react';
import { Phone, Mail, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const requirements = formData.get('requirements') as string;

    const templateParams = {
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: requirements
    };

    try {
        await emailjs.send(
            'service_v87fbbb',
            'template_kqyj6wf',
            templateParams,
            'jw9KkOzwrp_V0pKYl'
        );
        
        setSubmitted(true);
        form.reset();
        
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    } catch (error) {
        console.error('FAILED...', error);
        alert('메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 animate-in fade-in slide-in-from-bottom-10 duration-700">
                <div className="lg:w-2/5 bg-[#0B3D6A] p-16 md:p-20 text-white flex flex-col justify-between">
                    <div>
                        <div className="w-20 h-1.5 bg-[#2E7BB8] mb-10 rounded-full"></div>
                        <h4 className="text-4xl font-black mb-8 leading-tight tracking-tight">당신의 성공 파트너,<br/>잇빗이 함께합니다.</h4>
                        <p className="text-slate-400 mb-16 leading-relaxed text-lg font-light">기술적인 구현 고민부터 구체적인 양산 계획까지,<br/>전문 엔지니어가 직접 최상의 해답을 드립니다.</p>
                    </div>
                    <div className="space-y-8 font-medium">
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <Phone className="w-6 h-6 text-[#2E7BB8]" />
                            </div>
                            <div>
                                <p className="text-white font-black text-2xl tracking-tight">050-6552-7778</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <Mail className="w-6 h-6 text-[#2E7BB8]" />
                            </div>
                            <div>
                                <p className="text-lg font-light text-slate-300">itbit@itbit.co.kr</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/5 p-12 md:p-20">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-10">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 font-bold text-3xl">✓</div>
                            <h3 className="text-2xl font-bold text-[#0B3D6A] mb-2">문의가 접수되었습니다</h3>
                            <p className="text-slate-500">담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.<br/>감사합니다.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">NAME</label>
                                <input name="name" type="text" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#2E7BB8] focus:outline-none transition-all font-bold text-lg text-[#0B3D6A]" placeholder="성함" required disabled={isSubmitting} />
                                
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mt-6">COMPANY</label>
                                <input name="company" type="text" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#2E7BB8] focus:outline-none transition-all font-bold text-lg text-[#0B3D6A]" placeholder="회사명" required disabled={isSubmitting} />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">PHONE</label>
                                <input name="phone" type="tel" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#2E7BB8] focus:outline-none transition-all font-bold text-lg text-[#0B3D6A]" placeholder="연락처" required disabled={isSubmitting} />
                                
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mt-6">EMAIL</label>
                                <input name="email" type="email" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#2E7BB8] focus:outline-none transition-all font-bold text-lg text-[#0B3D6A]" placeholder="이메일" required disabled={isSubmitting} />
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">REQUIREMENTS</label>
                                <textarea name="requirements" rows={4} className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#2E7BB8] focus:outline-none transition-all font-medium text-lg text-[#0B3D6A] resize-none" placeholder="문의하실 내용을 자유롭게 적어주세요." required disabled={isSubmitting}></textarea>
                            </div>
                            <div className="md:col-span-2 pt-10">
                                <button type="submit" disabled={isSubmitting} className="w-full bg-[#2E7BB8] text-white font-black py-6 rounded-3xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-xl shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            전송 중...
                                        </>
                                    ) : (
                                        '프로젝트 상담 신청하기'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;