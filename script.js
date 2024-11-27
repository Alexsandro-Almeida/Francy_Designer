function changeStyle(style) {
    // Adicionar animação de fade-out nos textos antes da troca
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    title.style.animation = 'fadeOut 0.5s forwards';
    description.style.animation = 'fadeOut 0.5s forwards';

    // Aguardar o término da animação antes de mudar o conteúdo
    setTimeout(() => {
        // Definir os novos textos
        const titles = {
            pinca: 'Sobrancelhas Perfeitas com Pinça',
            pente: 'Design Perfeito com Pente',
            henna: 'Sobrancelhas com Henna',
            bisturi: 'Design Preciso com Bisturi'
        };

        const descriptions = {
            pinca: 'Realce sua beleza natural com o uso da pinça.',
            pente: 'Penteie e molde suas sobrancelhas com perfeição.',
            henna: 'Dê um toque especial às sobrancelhas com henna.',
            bisturi: 'Para designs precisos e detalhados.'
        };

        // Alterar o título e descrição
        title.textContent = titles[style];
        description.textContent = descriptions[style];

        // Adicionar animação de fade-in nos textos
        title.style.animation = 'fadeIn 1s forwards';
        description.style.animation = 'fadeIn 1.5s forwards';

        // Configuração inicial ao carregar o site
        document.addEventListener('DOMContentLoaded', () => {
        // Definir o estilo inicial como "pinca"
            changeStyle('pinca');
        });


        // Alterar a classe do círculo para animar a imagem
        const circle = document.getElementById('circle');
        const circleImage = document.getElementById('circle-image');
        circle.classList.remove('animate');  // Remover a animação anterior
        void circle.offsetWidth; // Forçar reflow para reiniciar a animação
        circle.classList.add('animate');  // Reaplicar a animação

        // Alterar a imagem dependendo da ferramenta
        const images = {
            pinca: './assets/pinca.png',
            pente: './assets/pente.png',
            henna: './assets/henna.png',
            bisturi: './assets/bisturi.png'
        };

        circleImage.src = images[style];

        // Alterar a cor do fundo da página
        document.body.className = style;
    }, 500); // Tempo de espera até a animação de fade-out terminar
}
