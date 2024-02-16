document.addEventListener('DOMContentLoaded', ()=>{
    const url = "https://api.chucknorris.io/jokes/categories"
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber os dados')
        }
        return response.json()
    })
    .then((data)=>{
        gerarCategorias(data);
    })
    .catch((err)=>console.error(err));
});
function gerarCategorias(categorias){
    //parâmetro categprias = array de categorias 
    const select = document.getElementById('select')
    categorias.map((categoria)=>{ //listagem de categorias
        const options = document.createElement('option')
        options.innerHTML = `${categoria}`
        options.value = categoria
        select.appendChild(options);
    })
}
const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const select = document.getElementById('select').value;
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao selecionar a piada')
        }
        return response.json()
    })
    .then((data)=>{
        gerarPiada(data);
    })
    .catch((err)=>console.error(err));
});
function gerarPiada(piada){
    const joke = document.getElementById('joke')
    joke.innerHTML = piada.value
}