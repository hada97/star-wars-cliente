document.getElementById('fetch-button').addEventListener('click', async () => {
    const endpoint = document.getElementById('endpoint').value;
    const response = await fetch(`https://swapi.dev/api/${endpoint}/`);
    const data = await response.json();
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);
});
