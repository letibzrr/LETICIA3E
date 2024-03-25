const data = require ('./onibus.json')
// Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.
const numLinhas = 2
const id = 1
//const id = 2

const consultarHrs = (numLinhas, id) => {
    if(id <= 0 || id > numLinhas || isNaN(id)){
        console.log('Não foi possivel encontrar essa linha, tente novamente!')
    }
    
    if(id === 1){
        console.log(data.linhas[id - 1].horarios);
    }else if(id === 2){
        console.log(data.linhas[id - 1].horarios)
    }
}
consultarHrs(numLinhas, id)
