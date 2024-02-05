const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
const maisqueTres = palavras.filter((elemento)=>{
    return elemento.length > 3
})
console.log(maisqueTres)
