const imagemPrincipal = document.querySelector('#galeria figure img');
const miniaturas = document.querySelectorAll('#galeria aside img');
const botoesModelo = document.querySelectorAll('.variacoes:nth-of-type(1) button');
const botoesTamanho = document.querySelectorAll('.variacoes:nth-of-type(2) button');
const textoTamanho = document.getElementById('tamanho-selecionado');

const mapaCores = {
    'Preto': '../assets/img/camiseta-preta.png',
    'Azul': '../assets/img/camiseta-azul.png',
    'Verde': '../assets/img/camiseta-verde.png',
    'Cinza': '../assets/img/camiseta-cinza.png',
    'Rosa': '../assets/img/camiseta-rosa.png'
};

function atualizarThumbnailAtiva(src) {
    miniaturas.forEach(miniatura => {
        if (miniatura.src === src) {
            miniatura.classList.add('thumbnail-ativa');
        } else {
            miniatura.classList.remove('thumbnail-ativa');
        }
    });
}

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('mouseover', () => {
        imagemPrincipal.src = miniatura.src;
        atualizarThumbnailAtiva(miniatura.src);
    });
    
    miniatura.addEventListener('click', () => {
        imagemPrincipal.src = miniatura.src;
        atualizarThumbnailAtiva(miniatura.src);
    });
});

botoesModelo.forEach(botao => {
    botao.addEventListener('click', () => {
        const cor = botao.textContent;
        if (mapaCores[cor]) {
            imagemPrincipal.src = mapaCores[cor];
            atualizarThumbnailAtiva(imagemPrincipal.src);
        }
    });
});

botoesTamanho.forEach(botao => {
    botao.addEventListener('click', () => {
        textoTamanho.textContent = `Tamanho Selecionado: ${botao.textContent}`;
    });
});