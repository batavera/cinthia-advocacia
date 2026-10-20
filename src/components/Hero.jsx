import React from 'react';
import { ArrowRight, Scale } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center bg-[#08080A] text-white overflow-hidden border-b border-[#D4AF37]/15">

            {/* Luz Dourada de Fundo */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121216] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
                            <Scale size={14} />
                            <span>Advocacia Especializada & Estratégica</span>
                        </div>

                        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-wide text-white">
                            DEFESA JURÍDICA COM EXCELÊNCIA E <span className="gold-gradient-text">ALTO RIGOR TÉCNICO</span>
                        </h1>

                        <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
                            Atendimento exclusivo para pessoas e empresas que buscam soluções estratégicas, agilidade e máxima segurança jurídica na proteção de seus direitos.
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href={getWhatsAppLink("Olá! Preciso de uma análise para o meu caso jurídico.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 gold-button px-8 py-4 rounded-sm text-xs uppercase tracking-[0.15em]"
                            >
                                <span>Falar com o Escritório</span>
                                <ArrowRight size={16} />
                            </a>

                            <a
                                href="#servicos"
                                className="flex items-center justify-center gap-2 bg-[#121216] hover:bg-[#1A1A20] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-slate-200 font-medium px-8 py-4 rounded-sm transition-all text-xs uppercase tracking-[0.15em]"
                            >
                                <span>Conhecer Atuação</span>
                            </a>
                        </div>

                        <div className="pt-10 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-6 text-center lg:text-left">
                            <div>
                                <p className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">Excelência</p>
                                <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Soluções Sob Medida</p>
                            </div>
                            <div>
                                <p className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">Sigilo</p>
                                <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Privacidade Garantida</p>
                            </div>
                            <div>
                                <p className="font-cinzel text-xl sm:text-2xl font-bold gold-gradient-text">Compromisso</p>
                                <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Acompanhamento Direto</p>
                            </div>
                        </div>

                    </div>

                    {/* Card Apresentando a Dra. Cinthia com Foto da pasta public */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md bg-[#0D0D11] p-6 sm:p-8 rounded-sm border border-[#D4AF37]/30 text-center shadow-2xl">

                            {/* Moldura da Foto */}
                            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-6 border border-[#D4AF37]/40 shadow-lg bg-[#16161E]">
                                <img
                                    src="/cinthia.jpg"
                                    alt="Dra. Cinthia Gagliardi"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        // Fallback caso o arquivo seja .png
                                        e.target.src = "/cinthia.png";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-transparent to-transparent opacity-40"></div>
                            </div>

                            <h3 className="font-cinzel text-2xl font-bold text-white mb-1">Dra. Cinthia Gagliardi</h3>
                            <p className="text-xs text-[#D4AF37] uppercase tracking-[0.2em] font-semibold mb-4">Advogada Founder</p>

                            <div className="p-4 rounded bg-[#13131A] border border-[#D4AF37]/10">
                                <p className="text-xs text-slate-300 italic leading-relaxed font-light">
                                    "Atuação pautada pela ética, transparência e empenho absoluto na defesa dos direitos dos nossos clientes."
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}