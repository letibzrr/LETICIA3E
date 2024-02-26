//https://hp-api.onrender.com/api/characters

document.addEventListener('DOMContentLoaded', ()=>{
    const baseURL = 'https://hp-api.onrender.com/api/characters'
    fetch(baseURL)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro de rede: Código'+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        spell(data[0].actor, data[0].name, data[0].alternate_names, data[0].species, data[0].gender, data[0].house, data[0].dateOfBirth, data[0].ancestry, data[0].patronus)
    })
    function spell(actor, name, alternate_names, species, gender, house, dateOfBirth, ancestry, patronus) {

        const actorElement = document.querySelector('.actor');
        const nameElement = document.querySelector('.name');
        const alternate_namesElement = document.querySelector('.alternate_names');
        const speciesElement = document.querySelector('.species');
        const genderElement = document.querySelector('.gender');
        const houseElement = document.querySelector('.house');
        const dateOfBirthElement = document.querySelector('.dateOfBirth');
        const ancestryElement = document.querySelector('.ancestry');
        const patronusElement = document.querySelector('.patronus');

        actorElement.innerHTML = `Actor: ${actor}`;
        nameElement.innerHTML = `Name: ${name}`;
        alternate_namesElement.innerHTML = `Alternate Name: ${alternate_names}`;
        speciesElement.innerHTML = `Species: ${species}`;
        genderElement.innerHTML = `Gender: ${gender}`;
        houseElement.innerHTML = `House: ${house}`;
        dateOfBirthElement.innerHTML = `Date of Birth: ${dateOfBirth}`;
        ancestryElement.innerHTML = `Ancestry: ${ancestry}`;
        patronusElement.innerHTML = `Patronus: ${patronus}`;
    }
})
