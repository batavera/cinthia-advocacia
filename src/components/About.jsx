import React from 'react';
import logoImg from '../assets/logo.png';

export default function About() {
    return (
        <section id="sobre" className="py-20 bg-[#08080A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-center mb-6">
                    <span className="px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-semibold uppercase tracking-widest bg-[#D4AF37]/5">
                        O Escritório
                    </span>
                </div>

                <h2 className="font-cinzel text-2xl sm:text-4xl text-center font-bold text-white uppercase tracking-wider mb-12">
                    Acompanhamento Jurídico Personalizado
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Cartão com Logo em Destaque Expandido */}
                    <div className="lg:col-span-5 bg-[#0F0F14] border border-[#D4AF37]/30 rounded-lg p-8 text-center relative group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-50 rounded-lg pointer-events-none"></div>

                        {/* Logo em Largura Fixa e Destacada */}
                        <div className="flex justify-center mb-6">
                            <img
                                src={logoImg}
                                alt="Advocacia Gagliardi"
                                className="w-52 sm:w-72 h-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                            Dra. Cinthia Fernanda Gagliardi
                        </h3>
                        <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mt-2">
                            OAB / SP - 143.109
                        </p>

                        <div className="w-12 h-[1px] bg-[#D4AF37]/40 mx-auto my-6"></div>

                        <p className="text-slate-300 text-sm italic font-light leading-relaxed">
                            "Atuação pautada pela ética, rigor técnico e compromisso inegociável com a defesa dos direitos dos meus clientes."
                        </p>
                    </div>

                    {/* Texto de Apresentação */}
                    <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                        <p>
                            A <strong className="text-white font-medium">Advocacia Gagliardi</strong> foi estruturada para oferecer soluções jurídicas estratégicas com alto padrão de excelência, transparência e sigilo absoluto.
                        </p>
                        <p>
                            Com sólida formação técnica e atendimento humanizado, atuamos preventivamente e no contencioso, garantindo que cada caso receba análise minuciosa e acompanhamento dedicado do início ao fim.
                        </p>
                        <p>
                            Atendemos presencialmente em <strong className="text-white font-medium">Catanduva e região</strong>, além de prestarmos suporte jurídico integral 100% online para todo o Brasil.
                        </p>

                        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#D4AF37]/15">
                            <div>
                                <p className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">100%</p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Sigilo & Ética</p>
                            </div>
                            <div>
                                <p className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">Agilidade</p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Atendimento Direto</p>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <p className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">Nacional</p>
                                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Presencial e Online</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}