//https://hp-api.onrender.com/api/spells

document.addEventListener('DOMContentLoaded', () => {
    const baseURL = 'https://hp-api.onrender.com/api/spells';

    function searchSpells() {
        const searchInput = document.getElementById('spell-search').value.toLowerCase();
        
        fetch(baseURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error ('Erro de rede: Código' + response.status);
                }
                return response.json();
            })
            .then(data => {
                const filterSpells = data.filter(spell => spell.name.toLowerCase().includes(searchInput));
                showSpells(filterSpells);
            })
            .catch(error => console.error('Erro ao obter dados:', error));
    }
    window.searchSpells = searchSpells;
});
function showSpells(spells) {
        const spellsSection = document.getElementById('spells-section');
        spellsSection.innerHTML = '';

        spells.forEach(spell => {
            const spellElement = document.createElement('div');
            spellElement.classList.add('spell');
            spellElement.innerHTML = `<div class="box-spell"><h1>Name: ${spell.name}</h1><h1>Description: ${spell.description}</h1></div>`;
            spellsSection.appendChild(spellElement);
        });
    }
