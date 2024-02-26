//https://hp-api.onrender.com/api/spells

document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://hp-api.onrender.com/api/spells';

    fetch(baseURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro de rede: Código' + response.status);
            }
            return response.json();
        })
        .then(data => showSpells(data.slice(0, 24)))
        .catch(error => console.error('Erro ao obter dados:', error));

    function showSpells(spells) {
        const spellsSection = document.getElementById('spells-section');

        spells.forEach(spell => {
            const spellElement = document.createElement('div');
            spellElement.classList.add('spell');
            spellElement.innerHTML = `<div class="box-spell"><h1>SPELL INFORMATION</h1><h1>Name: ${spell.name}</h1><h1>Description: ${spell.description}</h1></div>`;

            spellsSection.appendChild(spellElement);
        });
    }
});



