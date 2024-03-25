const data = require ('./onibus.json')
// Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
const numLinhas = 2
const id = 1
//const id = 2

const consultarHrs = (numLinhas, id) => {
    if(id <= 0 || id > numLinhas || isNaN(id)){
        console.log('Não foi possivel encontrar essa linha, tente novamente!')
    }
    
    if(id === 1){
        console.log(data.linhas[id - 1].paradas);
    }else if(id === 2){
        console.log(data.linhas[id - 1].paradas)
    }
}
consultarHrs(numLinhas, id)