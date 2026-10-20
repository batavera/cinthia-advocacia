import React from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import cinthiaPhoto from '/cinthia.jpg';

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen pt-28 sm:pt-36 pb-16 bg-[#08080A] flex items-center overflow-hidden">
            {/* Luzes de Fundo / Ambient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Lado Esquerdo: Textos e Botões */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">

                        {/* Tagline Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37]">
                            <Scale size={16} />
                            <span className="text-[11px] font-semibold uppercase tracking-widest">
                                Advocacia Especializada & Estratégica
                            </span>
                        </div>

                        {/* Título Principal */}
                        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase tracking-wide">
                            Defesa Jurídica <br className="hidden sm:inline" />
                            com Excelência e <br className="hidden sm:inline" />
                            <span className="gold-gradient-text">Alto Rigor Técnico</span>
                        </h1>

                        {/* Subtítulo / Descrição */}
                        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                            Atendimento exclusivo para pessoas e empresas que buscam soluções estratégicas, agilidade e máxima segurança jurídica na proteção de seus direitos.
                        </p>

                        {/* Botões de Ação */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <a
                                href={getWhatsAppLink('geral')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#08080A] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#D4AF37]/10 flex items-center justify-center gap-2 group"
                            >
                                Falar com o Escritório
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#servicos"
                                className="w-full sm:w-auto px-8 py-4 rounded border border-[#D4AF37]/30 text-white font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all text-center"
                            >
                                Conhecer Atuação
                            </a>
                        </div>

                        {/* Destaques do Hero - Empilhado no Mobile (1 col) e Lado a Lado no Desktop (3 cols) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 pt-8 border-t border-[#D4AF37]/20">
                            <div className="text-center lg:text-left">
                                <h3 className="font-cinzel text-base sm:text-lg font-bold gold-gradient-text uppercase tracking-wider">
                                    Excelência
                                </h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                                    Soluções sob medida
                                </p>
                            </div>

                            <div className="text-center lg:text-left">
                                <h3 className="font-cinzel text-base sm:text-lg font-bold gold-gradient-text uppercase tracking-wider">
                                    Sigilo
                                </h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                                    Privacidade garantida
                                </p>
                            </div>

                            <div className="text-center lg:text-left">
                                <h3 className="font-cinzel text-base sm:text-lg font-bold gold-gradient-text uppercase tracking-wider">
                                    Compromisso
                                </h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                                    Acompanhamento direto
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Lado Direito: Foto da Dra. Cinthia Gagliardi */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md bg-[#0F0F14] p-3 rounded-lg border border-[#D4AF37]/30 shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-lg pointer-events-none"></div>

                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={cinthiaPhoto}
                                    alt="Dra. Cinthia Fernanda Gagliardi"
                                    className="w-full h-auto object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-4 pb-2 text-center">
                                <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
                                    Dra. Cinthia Fernanda Gagliardi
                                </h3>
                                <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mt-1">
                                    OAB / SP - 143.109
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}