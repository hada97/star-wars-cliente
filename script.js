document.getElementById('fetch-button').addEventListener('click', async () => {
    const endpoint = document.getElementById('endpoint').value;
    const id = document.getElementById('id-input').value;
    const url = id ? `https://swapi.dev/api/${endpoint}/${id}/` : `https://swapi.dev/api/${endpoint}/`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        
        // Atualiza o conteúdo do <pre> e remove a classe 'hidden'
        const resultElement = document.getElementById('result');
        resultElement.textContent = JSON.stringify(data, null, 2);
        resultElement.classList.remove('hidden'); // Mostra o <pre>
    } catch (error) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'Erro: ' + error.message;
        resultElement.classList.remove('hidden'); // Mostra o <pre> com a mensagem de erro
    }
});


const images = [
    './imagens/1.jpg',
    './imagens/2.jpg',
    './imagens/3.jpg',
    './imagens/4.jpg',
    './imagens/5.jpg',
    './imagens/6.jpg',
    './imagens/7.jpg',
    './imagens/8.jpg',
    './imagens/9.jpg',
    './imagens/10.jpg',
    './imagens/11.jpg',
    './imagens/12.jpg',
    './imagens/14.jpg',
    './imagens/15.jpg',
    './imagens/16.jpg',
];

let currentIndex = 0;

function updateBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
});

// Inicializa a primeira imagem de fundo
updateBackground();