export const PHONE_NUMBER = '5517997091975';

export const MESSAGES = {
    geral: 'Olá! Gostaria de agendar uma consulta com a Dra. Cinthia Gagliardi.',
    familia: 'Olá! Gostaria de mais informações sobre Direito de Família & Sucessões.',
    civil: 'Olá! Gostaria de mais informações sobre Direito Civil e Contratos.',
    trabalhista: 'Olá! Gostaria de mais informações sobre Direito Trabalhista.',
    imobiliario: 'Olá! Gostaria de mais informações sobre Direito Imobiliário.',
};

export const getWhatsAppUrl = (type = 'geral') => {
    const message = MESSAGES[type] || MESSAGES.geral;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Alias para manter compatibilidade total com Hero, Services e Contact
export const getWhatsAppLink = getWhatsAppUrl;