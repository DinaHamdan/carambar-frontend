document.getElementById('jokeButton').addEventListener('click', async () => {
    console.log('joke');

    const response = await fetch('http://localhost:5000/api/jokes/random');
    const data = await response.json();
    document.getElementById('jokeContainer').textContent = data.joke;
});
