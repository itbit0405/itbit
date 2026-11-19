import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png'; // 로고 파일을 직접 import

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: '홈', href: '#home' },
    { label: '가치', href: '#vision' },
    { label: '분야', href: '#services' },
    { label: '기술', href: '#tech' },
    { label: '프로세스', href: '#process' },
  ];

  return (
    <>
    <header className={`fixed w-full z-50 transition-all duration-500 py-4 md:py-6 ${scrolled || mobileMenuOpen ? 'glass-morphism text-[#0B3D6A] py-3' : 'text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <a href="#home" className="flex items-center gap-3 group relative z-50" onClick={handleLinkClick}>
                <img 
                  src={logo}
                  alt="ITBIT" 
                  className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
                <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase ${scrolled || mobileMenuOpen ? 'text-[#0B3D6A]' : 'text-white'}`}>ITBIT</span>
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 lg:gap-10 font-semibold text-sm tracking-tight items-center">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} className="hover:text-[#2E7BB8] transition-colors">{link.label}</a>
                ))}
                <a href="#contact" className="px-5 py-2 bg-[#2E7BB8] text-white rounded-full hover:scale-105 transition-all text-xs font-bold shadow-md hover:bg-[#0B3D6A]">문의하기</a>
            </nav>

            {/* Mobile Toggle */}
            <button 
                className={`md:hidden text-2xl relative z-50 ${scrolled || mobileMenuOpen ? 'text-[#0B3D6A]' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
    </header>

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-10 duration-300 flex items-center justify-center overscroll-contain">
            <nav className="flex flex-col gap-8 text-center w-full px-6">
                {navLinks.map(link => (
                    <a 
                        key={link.label} 
                        href={link.href} 
                        onClick={handleLinkClick}
                        className="text-2xl font-bold text-[#0B3D6A] hover:text-[#2E7BB8] transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
                <div className="w-12 h-1 bg-slate-100 mx-auto my-4 rounded-full"></div>
                <a 
                    href="#contact" 
                    onClick={handleLinkClick}
                    className="w-full max-w-xs mx-auto px-8 py-4 bg-[#2E7BB8] text-white rounded-full text-lg font-bold shadow-xl hover:bg-[#0B3D6A] transition-colors"
                >
                    문의하기
                </a>
            </nav>
        </div>
    )}
    </>
  );
};

export default Header;