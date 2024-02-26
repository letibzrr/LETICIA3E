//https://hp-api.onrender.com/api/characters

document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://hp-api.onrender.com/api/characters';

    fetch(baseURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro de rede: Código' + response.status);
            }
            return response.json();
        })
        .then(data => showCharacters(data.slice(0, 24)))
        .catch(error => console.error('Erro ao obter dados:', error));

    function showCharacters(characters) {
        const characterSection = document.querySelector('.character-section');

        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            const characterImageElement = document.createElement('img');
            characterImageElement.src = character.image;

            const actorElement = document.createElement('p');
            actorElement.innerHTML = `Actor: ${character.actor}`;

            const nameElement = document.createElement('p');
            nameElement.innerHTML = `Name: ${character.name}`;

            const speciesElement = document.createElement('p');
            speciesElement.innerHTML = `Species: ${character.species}`;

            const genderElement = document.createElement('p');
            genderElement.innerHTML = `Gender: ${character.gender}`;

            const houseElement = document.createElement('p');
            houseElement.innerHTML = `House: ${character.house}`;


            const ancestryElement = document.createElement('p');
            ancestryElement.innerHTML = `Ancestry: ${character.ancestry}`;
            
            const patronusElement = document.createElement('p');
            patronusElement.innerHTML = `Patronus: ${character.patronus}`;

            characterDiv.appendChild(characterImageElement);
            characterDiv.appendChild(actorElement);
            characterDiv.appendChild(nameElement);
            characterDiv.appendChild(speciesElement);
            characterDiv.appendChild(genderElement);
            characterDiv.appendChild(houseElement);
            characterDiv.appendChild(ancestryElement);
            characterDiv.appendChild(patronusElement);

            characterSection.appendChild(characterDiv);
        });
    }
});



