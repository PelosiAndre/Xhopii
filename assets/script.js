document.addEventListener('DOMContentLoaded', () => {
    
    const galeria = document.getElementById('galeria');
    
    if (galeria) {
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

        const atualizarThumbnailAtiva = (src) => {
            miniaturas.forEach(miniatura => {
                if (miniatura.src === src) {
                    miniatura.classList.add('thumbnail-ativa');
                } else {
                    miniatura.classList.remove('thumbnail-ativa');
                }
            });
        };

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
    }

    const formCliente = document.getElementById('form-cliente');
    const inputFotoCliente = document.getElementById('foto-cliente');
    const spanNomeFileCliente = document.getElementById('file-name-cliente');

    if (formCliente && inputFotoCliente && spanNomeFileCliente) {
        inputFotoCliente.addEventListener('change', () => {
            spanNomeFileCliente.textContent = inputFotoCliente.files[0] ? inputFotoCliente.files[0].name : 'Nenhum arquivo escolhido';
        });

        formCliente.addEventListener('submit', (evento) => {
            evento.preventDefault();
            alert('Cliente cadastrado com sucesso!');
            formCliente.reset();
            spanNomeFileCliente.textContent = 'Nenhum arquivo escolhido';
        });
    }
});