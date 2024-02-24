document.addEventListener('DOMContentLoaded', ()=>{ 
    const baseURL = 'https://stephen-king-api.onrender.com/api/book/1'

    fetch(baseURL)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro de rede! Código:'+response.status)
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data.results[0].id)
    })
    .catch((err)=>console.log(err));
})