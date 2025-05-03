document.addEventListener('DOMContentLoaded', () => {
    // Adicionar efeitos de interação
    const serviceCards = document.querySelectorAll('#servicos > div > div');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('transform', 'scale-105', 'transition');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('transform', 'scale-105', 'transition');
        });
    });
});
