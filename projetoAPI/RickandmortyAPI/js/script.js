//"characters": "https://rickandmortyapi.com/api/character",
//"locations": "https://rickandmortyapi.com/api/location",
//"episodes": "https://rickandmortyapi.com/api/episode"
const page = 1
const baseUrl = 'https://rickandmortyapi.com/api'
// trabalhado com promessas 
const loadCharacter = async () => {
    const res = await fetch(`${baseUrl}/character?page=${page}`)
    const data = await res.json()
    const limitData = data.results.slice(0,9) //limite de personagem
    return {results: limitData}
};
const loadLocation = async () => {
    const res = await fetch(`${baseUrl}/location`);
    const data = await res.json();
    const limitData = data.results.slice(0, 10);
    return { results: limitData };
}
const loadEpisode = async () => {
    const res = await fetch(`${baseUrl}/episode`)
    return await res.json()
}
const loadAllWihPromiseAll = async () => { //execução de todas as promessas
    const [character, location, episode] = await Promise.all([
        loadCharacter(),
        loadLocation(),
        loadEpisode()
    ])
    showCharacter(character.results)
    showLocation(location.results)
}
loadAllWihPromiseAll()

function showCharacter(characters){ //mostrar personagens
    const characterContainer = document.getElementById("character-container");
    characters.map((character)=>{
        const divCharacter = document.createElement('div') //html no js
        divCharacter.id = `character-${character.id}`
        divCharacter.innerHTML = `
        <img src="${character.image}" alt="Image do personagem">

        <article class="character-info">
        <h3>${character.name}</h3>
        <span class="${character.status}">${character.status} - ${character.species}</span>

        <span class="location">Last known location: </span>
        <a href="${character.location.url}">${character.location.name}"</a>

        <span class="origin">First seen in: </span>
        <a href="${character.origin.url}">${character.origin.name}"</a>
        </article>
        `;
        divCharacter.classList.add('character-box');
        characterContainer.appendChild(divCharacter);
        divCharacter.addEventListener('click', async () =>{
            characterDetails(character.id)
        })
    })
}
function characterDetails(id){
    const idCripyted = encryptId(id)
    window.location.href = `./pages/character.html?id=${idCripyted}`
}
function encryptId(id){
    return id.toString(36)
}

function showLocation(locations){
    const locationContainer = document.getElementById('location-container')
    locations.map((location)=>{
        const divLocation = document.createElement('div')
        divLocation.innerHTML = `
        <p class="title">${location.name}</p>
        <p class="type">${location.type}</p>
        <p class="dimension">${location.dimension}</p>
        <p class="residents">${location.residents.length}</p>
        `;
        divLocation.classList.add('location-box')
        locationContainer.appendChild(divLocation)
    })
    console.log(locations)
}