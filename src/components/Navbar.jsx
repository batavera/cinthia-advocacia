import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-[#08080A]/95 backdrop-blur-md text-white z-50 border-b border-[#D4AF37]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo em Destaque Maior + Tipografia Refinada e Subtil */}
                    <a href="#inicio" className="flex items-center gap-3 group py-1">
                        <img
                            src={logoImg}
                            alt="Advocacia Gagliardi"
                            className="h-14 sm:h-16 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="flex flex-col justify-center border-l border-[#D4AF37]/20 pl-3">
                            <span className="font-cinzel text-[9px] tracking-[0.3em] text-slate-400 font-medium leading-none uppercase">
                                Advocacia
                            </span>
                            <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] gold-gradient-text font-semibold uppercase mt-1 leading-none">
                                Gagliardi
                            </span>
                        </div>
                    </a>

                    {/* Menu Desktop */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-slate-300">
                            <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
                            <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">O Escritório</a>
                            <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Atuação</a>
                            <a href="#diferenciais" className="hover:text-[#D4AF37] transition-colors">Diferenciais</a>
                            <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
                        </div>
                    </div>

                    {/* Botão de Agendamento */}
                    <div className="hidden lg:block">
                        <a
                            href={getWhatsAppLink("Olá! Gostaria de agendar uma consulta com a Dra. Cinthia.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 gold-button px-6 py-3 rounded-sm text-xs uppercase tracking-wider"
                        >
                            <PhoneCall size={15} />
                            <span>Agendar Consulta</span>
                        </a>
                    </div>

                    {/* Botão Mobile */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-[#D4AF37] hover:text-white"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="lg:hidden bg-[#08080A] border-b border-[#D4AF37]/20 px-6 pt-4 pb-8 space-y-4 text-center">
                    <a href="#inicio" onClick={() => setIsOpen(false)} className="block py-2 text-xs uppercase tracking-widest text-slate-200 hover:text-[#D4AF37]">Início</a>
                    <a href="#sobre" onClick={() => setIsOpen(false)} className="block py-2 text-xs uppercase tracking-widest text-slate-200 hover:text-[#D4AF37]">O Escritório</a>
                    <a href="#servicos" onClick={() => setIsOpen(false)} className="block py-2 text-xs uppercase tracking-widest text-slate-200 hover:text-[#D4AF37]">Atuação</a>
                    <a href="#diferenciais" onClick={() => setIsOpen(false)} className="block py-2 text-xs uppercase tracking-widest text-slate-200 hover:text-[#D4AF37]">Diferenciais</a>
                    <a href="#contato" onClick={() => setIsOpen(false)} className="block py-2 text-xs uppercase tracking-widest text-slate-200 hover:text-[#D4AF37]">Contato</a>
                    <a
                        href={getWhatsAppLink("Olá! Gostaria de agendar uma consulta com a Dra. Cinthia.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 gold-button py-3 rounded-sm uppercase tracking-wider text-xs mt-4"
                    >
                        <PhoneCall size={15} />
                        <span>Agendar Consulta</span>
                    </a>
                </div>
            )}
        </nav>
    );
}