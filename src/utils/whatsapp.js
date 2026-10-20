// Coloque aqui o número da Dra. Cinthia (Apenas números: DDI 55 + DDD + Número)
// Exemplo: '5517999999999'
export const PHONE_NUMBER = '5517997091975';

export const getWhatsAppLink = (customMessage) => {
    const defaultMessage = "Olá, Dra. Cinthia! Gostaria de agendar uma consulta jurídica.";
    const text = encodeURIComponent(customMessage || defaultMessage);
    return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
};