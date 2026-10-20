import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Contact() {
    return (
        <section id="contato" className="py-24 bg-[#08080A] text-white border-b border-[#D4AF37]/15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-6 space-y-6">
                        <span className="px-3 py-1 bg-[#121216] border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-[11px] tracking-widest uppercase rounded-full">
                            Fale Conosco
                        </span>

                        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                            Precisa de orientação jurídica? <span className="gold-gradient-text">Agende uma consulta</span>.
                        </h2>

                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                            Entre em contato diretamente para agendar seu atendimento inicial. Atendemos presencialmente e de forma 100% online em todo o Brasil.
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4 p-4 rounded bg-[#0F0F14] border border-[#D4AF37]/20">
                                <div className="w-10 h-10 rounded bg-[#16161E] text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">Telefone / WhatsApp</p>
                                    <p className="text-white text-sm font-medium">(17) 99709-1975</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded bg-[#0F0F14] border border-[#D4AF37]/20">
                                <div className="w-10 h-10 rounded bg-[#16161E] text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">E-mail de Contato</p>
                                    <p className="text-white text-sm font-medium">cinthiadvocacia@uol.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded bg-[#0F0F14] border border-[#D4AF37]/20">
                                <div className="w-10 h-10 rounded bg-[#16161E] text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">Localização</p>
                                    <p className="text-white text-sm font-medium">Atendimento Presencial & Online</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded bg-[#0F0F14] border border-[#D4AF37]/20">
                                <div className="w-10 h-10 rounded bg-[#16161E] text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">Horário de Atendimento</p>
                                    <p className="text-white text-sm font-medium">Segunda a Sexta: 09:00 às 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 bg-[#0F0F14] p-8 sm:p-10 rounded-sm text-white shadow-2xl border border-[#D4AF37]/30">
                        <h3 className="font-cinzel text-2xl font-bold text-white mb-3">
                            Atendimento Direto no WhatsApp
                        </h3>
                        <p className="text-slate-400 text-xs font-light leading-relaxed mb-8">
                            Clique no botão abaixo para iniciar seu atendimento com total praticidade e sigilo profissional.
                        </p>

                        <a
                            href={getWhatsAppLink("Olá, Dra. Cinthia! Encontrei seu site e gostaria de agendar um atendimento.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 gold-button py-4 px-6 rounded-sm text-xs uppercase tracking-widest text-center w-full mb-6"
                        >
                            <MessageCircle size={20} />
                            <span>Iniciar Conversa no WhatsApp</span>
                        </a>

                        <p className="text-[11px] text-slate-500 text-center italic font-light">
                            * Atendimento sigiloso em conformidade com o Código de Ética da OAB.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}