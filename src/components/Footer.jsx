import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050507] text-slate-400 py-12 text-xs border-t border-[#D4AF37]/15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#D4AF37]/10">

                    {/* Logo no Rodapé em Maior Destaque */}
                    <a href="#inicio" className="flex items-center gap-3.5 group">
                        <img
                            src={logoImg}
                            alt="Advocacia Gagliardi"
                            className="h-20 sm:h-24 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="flex flex-col justify-center border-l border-[#D4AF37]/20 pl-3">
                            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] text-slate-400 font-medium leading-none uppercase">
                                Advocacia
                            </span>
                            <span className="font-cinzel text-sm sm:text-base tracking-[0.2em] gold-gradient-text font-semibold uppercase mt-1.5 leading-none">
                                Gagliardi
                            </span>
                        </div>
                    </a>

                    <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-widest text-slate-300">
                        <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
                        <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">O Escritório</a>
                        <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">Atuação</a>
                        <a href="#diferenciais" className="hover:text-[#D4AF37] transition-colors">Diferenciais</a>
                        <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
                    <p>© {currentYear} Advocacia Gagliardi. Todos os direitos reservados.</p>
                    <p className="text-center sm:text-right">Demonstração do Projeto para Apresentação.</p>
                </div>
            </div>
        </footer>
    );
}