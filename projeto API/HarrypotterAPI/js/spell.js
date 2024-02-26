//https://hp-api.onrender.com/api/spells

document.addEventListener('DOMContentLoaded', ()=>{
    const baseURL = 'https://hp-api.onrender.com/api/spells'
    fetch(baseURL)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro de rede: Código'+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        spell(data[0].name, data[0].description)
    })
    function spell(name, description) {
        const nameElement = document.querySelector('.name');
        const descriptionElement = document.querySelector('.description');

        nameElement.innerHTML = `Name: ${name}`;
        descriptionElement.innerHTML = `Description: ${description}`;
    }
})
