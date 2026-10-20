import React from 'react';
import { Users, FileText, Briefcase, Building2, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

const services = [
    {
        icon: Users,
        title: "Direito de Família & Sucessões",
        description: "Divórcios, pensão alimentícia, guarda de filhos, partilha de bens, inventários e planejamento sucessório com extrema sensibilidade e sigilo.",
    },
    {
        icon: FileText,
        title: "Direito Civil & Contratos",
        description: "Elaboração e revisão contratual, indenizações por danos morais e materiais, cobranças executivas e ações possessórias.",
    },
    {
        icon: Briefcase,
        title: "Direito Trabalhista",
        description: "Defesa técnica dos direitos do trabalhador e consultoria jurídica preventiva para empresas, visando segurança e adequação legal.",
    },
    {
        icon: Building2,
        title: "Direito Imobiliário",
        description: "Assessoria em compra e venda de imóveis, usucapião, regularização fundiária, contratos de locação e despejos.",
    },
    {
        icon: ShieldAlert,
        title: "Direito do Consumidor",
        description: "Atuação contra práticas abusivas, inclusões indevidas no SPC/Serasa, disputas bancárias e problemas com serviços.",
    },
    {
        icon: FileText,
        title: "Consultoria Preventiva",
        description: "Análise prévia de riscos jurídicos para evitar litígios e processos custosos, garantindo tranquilidade para pessoas e negócios.",
    }
];

export default function Services() {
    return (
        <section id="servicos" className="py-24 bg-[#08080A] text-white border-b border-[#D4AF37]/15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="px-3 py-1 bg-[#121216] border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-[11px] tracking-widest uppercase rounded-full">
                        Áreas de Atuação
                    </span>
                    <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                        Atuação Jurídica <span className="gold-gradient-text">Especializada</span>
                    </h2>
                    <p className="text-slate-400 text-sm font-light">
                        Suporte jurídico completo e direcionado para atender às suas necessidades com agilidade, transparência e alta precisão.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#0F0F14] p-8 rounded-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded bg-[#16161E] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-[#08080A] transition-colors">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="font-cinzel text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed font-light mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                <a
                                    href={getWhatsAppLink(`Olá! Gostaria de mais informações sobre a área de ${service.title}.`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider transition-colors pt-4 border-t border-[#D4AF37]/10"
                                >
                                    <span>Consultar sobre este tema</span>
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}