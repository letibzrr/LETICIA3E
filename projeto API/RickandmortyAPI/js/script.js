//"characters": "https://rickandmortyapi.com/api/character",
//"locations": "https://rickandmortyapi.com/api/location",
//"episodes": "https://rickandmortyapi.com/api/episode"
const page = 1
const baseUrl = 'https://rickandmortyapi.com/api'
// trabalhado com promessas 
const loadCharacter = async () => {
    const res = await fetch(`${baseUrl}/character?page=${page}`)
    const data = await res.json()
    const limitData = data.results.slice(0,6) //limite de personagem
    return {results: limitData}
};
const loadLocation = async () => {
    const res = await fetch(`${baseUrl}/location`)
    return await res.json()
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
}
loadAllWihPromiseAll()

function showCharacter(characters){ //mostrar personagens
    const characterContainer = document.getElementById("character-container");
    characters.map((character)=>{
        const divCharacter = document.createElement('div') //html no js
        divCharacter.innerHTML = `
        <img src="${character.image}" alt="Image do personagem">

        <article class="character-info">
        <h3>${character.name}</h3>
        <span>${character.status} - ${character.species}</span>

        <span class="location">Last known location: </span>
        <a href="${character.location.url}">${character.location.name}"</a>

        <span class="origin">First seen in: </span>
        <a href="${character.origin.url}">${character.origin.name}"</a>
        </article>
        `;
        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter)
    })
}