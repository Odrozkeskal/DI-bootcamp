document.addEventListener("DOMContentLoaded", function(){
    const fetchButton = document.getElementById('fetch-character');
    const characterInfo = document.getElementById('character-info');
    const loadingMessage = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');

    fetchButton.addEventListener('click', function(e){
        e.preventDefault();
        fetchRandomCharacter();
    });

    async function fetchRandomCharacter(){
        loadingMessage.style.display = 'block';
        characterInfo.style.display = 'none';
        errorMessage.style.display = 'none';

        try {
            const response = await fetch('https://www.swapi.tech/api/people/random');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const character = data.result.properties;
            
            if (!character || Object.keys(character).length === 0) {
                throw new Error('No character data received');
            }
            
            displayCharacter(character);
        } catch (error) {
            console.error("Error fetching data", error);
            displayErrorMessage('Failed to fetch data. Please try again later.');
        } finally {
            loadingMessage.style.display = 'none';
            characterInfo.style.display = 'block';
        }
    }

    function displayCharacter(character){
        document.getElementById('name').textContent = character.name;
        document.getElementById('height').textContent = character.height;
        document.getElementById('gender').textContent = character.gender;
        document.getElementById('birth-year').textContent = character.birth_year;

        fetchHomeworld(character.homeworld);
    }

    function fetchHomeworld(url){
        fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('homeworld').textContent = data.result.properties.name;
        })
        .catch(error => {
            console.error("Error fetching homeworld", error);
            document.getElementById('homeworld').textContent = 'Unknown';
        });
    }

    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
});