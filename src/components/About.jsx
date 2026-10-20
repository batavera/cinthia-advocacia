import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function About() {
    return (
        <section id="sobre" className="py-24 bg-[#08080A] text-white border-b border-[#D4AF37]/15 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    {/* Card com o Emblema Dourado como Selo de Autoridade */}
                    <div className="md:col-span-5 relative">
                        <div className="bg-[#0F0F14] p-8 sm:p-10 rounded-sm border border-[#D4AF37]/30 text-center relative shadow-2xl">

                            {/* Emblema Dourado Flutuante */}
                            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-md pointer-events-none"></div>
                                <img
                                    src={logoImg}
                                    alt="Emblema Gagliardi"
                                    className="w-full h-full object-contain mix-blend-screen relative z-10"
                                />
                            </div>

                            <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
                                Dra. Cinthia Gagliardi
                            </h4>
                            <p className="text-xs text-[#D4AF37] uppercase tracking-[0.25em] font-semibold mb-6">
                                OAB / SP - 143.109
                            </p>

                            <div className="w-16 h-[1px] bg-[#D4AF37]/30 mx-auto mb-6"></div>

                            <p className="text-xs text-slate-300 italic max-w-xs mx-auto leading-relaxed font-light">
                                "Atuação pautada pela ética, rigor técnico e compromisso inegociável com a defesa dos direitos dos meus clientes."
                            </p>
                        </div>
                    </div>

                    {/* Conteúdo Institucional */}
                    <div className="md:col-span-7 space-y-6">
                        <div className="inline-block px-3 py-1 bg-[#121216] border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-[11px] tracking-widest uppercase rounded-full">
                            O Escritório
                        </div>

                        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white leading-tight">
                            ACOMPANHAMENTO JURÍDICO ESTRATÉGICO FOCADO EM <span className="gold-gradient-text">SOLUÇÕES CONCRETAS</span>.
                        </h2>

                        <p className="text-slate-300 leading-relaxed text-sm font-light">
                            A <strong className="text-white font-medium">Advocacia Gagliardi</strong> nasceu com o propósito de oferecer uma advocacia moderna, discreta e altamente eficiente. Compreendemos que por trás de cada caso existe um patrimônio, uma família ou uma trajetória que exige proteção máxima.
                        </p>

                        <p className="text-slate-300 leading-relaxed text-sm font-light">
                            Nosso compromisso é apresentar respostas claras, transparentes e estratégias bem delineadas para que você tome sempre a melhor decisão com total segurança jurídica.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-start gap-3 p-3.5 rounded bg-[#0F0F14] border border-[#D4AF37]/15">
                                <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Transparência Total</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Informação clara sobre prazos e etapas.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3.5 rounded bg-[#0F0F14] border border-[#D4AF37]/15">
                                <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Atendimento Proativo</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Acompanhamento contínuo do processo.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3.5 rounded bg-[#0F0F14] border border-[#D4AF37]/15">
                                <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Soluções Preventivas</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Orientação antecipada de riscos.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3.5 rounded bg-[#0F0F14] border border-[#D4AF37]/15">
                                <CheckCircle2 className="text-[#D4AF37] flex-shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h4 className="font-semibold text-white text-xs uppercase tracking-wider">Sigilo Absoluto</h4>
                                    <p className="text-[11px] text-slate-400 mt-0.5">Proteção e confidencialidade dos dados.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}