import React from 'react';
import { Clock, MessageSquare, ShieldCheck, Scale } from 'lucide-react';

export default function Differentials() {
    const items = [
        {
            icon: Clock,
            title: "Respostas Rápidas",
            desc: "Sem esperas prolongadas. Retorno ágil e acompanhamento constante do status do seu atendimento."
        },
        {
            icon: MessageSquare,
            title: "Linguagem Clara",
            desc: "Explicamos cada etapa em termos acessíveis, para que você entenda com clareza seus direitos."
        },
        {
            icon: ShieldCheck,
            title: "Estratégia Sob Medida",
            desc: "Não utilizamos soluções genéricas. Cada caso recebe um planejamento estratégico exclusivo."
        },
        {
            icon: Scale,
            title: "Foco no Resultado",
            desc: "Buscamos a resolução mais eficiente e segura, priorizando acordos favoráveis quando cabível."
        }
    ];

    return (
        <section id="diferenciais" className="py-24 bg-[#08080A] text-white border-b border-[#D4AF37]/15 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                        Por que nos escolher
                    </span>
                    <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                        Nossos Diferenciais
                    </h2>
                    <p className="text-slate-400 text-xs font-light">
                        Atendimento centrado na tranquilidade, na transparência e na segurança jurídica total.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="bg-[#0F0F14] p-6 rounded-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all text-center">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#16161E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                                    <Icon size={22} />
                                </div>
                                <h3 className="font-cinzel font-bold text-base text-white mb-2">{item.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}