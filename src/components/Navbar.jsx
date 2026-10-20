import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#08080A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24 sm:h-28">

                    {/* Logo no Topo - Expandido no Telemóvel */}
                    <a href="#inicio" className="flex items-center gap-3 group py-2">
                        <img
                            src={logoImg}
                            alt="Advocacia Gagliardi"
                            className="h-16 sm:h-20 lg:h-24 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* O texto secundário só aparece em ecrãs maiores para não duplicar nem encolher a imagem no telemóvel */}
                        <div className="hidden md:flex flex-col justify-center border-l border-[#D4AF37]/30 pl-3">
                            <span className="font-cinzel text-xs lg:text-sm tracking-[0.3em] text-slate-300 font-medium uppercase leading-none">
                                Advocacia
                            </span>
                            <span className="font-cinzel text-base lg:text-xl tracking-[0.2em] gold-gradient-text font-bold uppercase mt-1 leading-none">
                                Gagliardi
                            </span>
                        </div>
                    </a>

                    {/* Links Desktop */}
                    <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-slate-300">
                        <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
                        <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">O Escritório</a>
                        <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Atuação</a>
                        <a href="#diferenciais" className="hover:text-[#D4AF37] transition-colors">Diferenciais</a>
                        <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
                    </div>

                    {/* Botão Agendar Consulta Desktop */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href={getWhatsAppUrl('geral')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#08080A] font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-[#D4AF37]/10"
                        >
                            Agendar Consulta
                        </a>
                    </div>

                    {/* Botão Menu Mobile */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded text-[#D4AF37] hover:bg-[#16161E] transition-colors"
                            aria-label="Abrir menu"
                        >
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="lg:hidden bg-[#0F0F14] border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 space-y-4">
                    <div className="flex flex-col space-y-3 text-sm uppercase tracking-widest font-medium text-slate-300">
                        <a href="#inicio" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-800/50 hover:text-[#D4AF37]">Início</a>
                        <a href="#sobre" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-800/50 hover:text-[#D4AF37]">O Escritório</a>
                        <a href="#servicos" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-800/50 hover:text-[#D4AF37]">Atuação</a>
                        <a href="#diferenciais" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-800/50 hover:text-[#D4AF37]">Diferenciais</a>
                        <a href="#contato" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#D4AF37]">Contato</a>
                    </div>
                    <a
                        href={getWhatsAppUrl('geral')}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="block text-center w-full py-3 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#08080A] font-semibold text-xs uppercase tracking-wider"
                    >
                        Agendar Consulta via WhatsApp
                    </a>
                </div>
            )}
        </nav>
    );
}