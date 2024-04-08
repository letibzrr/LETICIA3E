const data = require ('./onibus.json')
// Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.
const infoOnibus = (idOnibus) => {
    const encontrarOnibus = data.onibus.filter((onibus) => onibus.id === idOnibus)
    return encontrarOnibus != 0 ? {encontrarOnibus} : {message: 'Onibus não encontrado na base de dados'}
}
const onibusId = "A100"
const onibusInfo = infoOnibus(onibusId)
console.log(onibusInfo)


