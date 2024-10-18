
document.getElementById('fetch-button').addEventListener('click', async () => {
    const endpoint = document.getElementById('endpoint').value;
    const id = document.getElementById('id-input').value;
    const url = id ? `https://swapi.dev/api/${endpoint}/${id}/` : `https://swapi.dev/api/${endpoint}/`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('result').textContent = 'Erro: ' + error.message;
    }
    
    
});


