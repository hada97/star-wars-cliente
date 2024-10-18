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
