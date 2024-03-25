const data = require ('./onibus.json')
// Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.
const buscarInfo = (id, data) => {
    const onibus = data.onibus.find(onibus => onibus.id === id)
    return onibus
}

const idOnibus = 'A100'
//const idOnibus = 'A101'
//const idOnibus = 'A102'
const onibusInfo = buscarInfo(idOnibus, data);
console.log(onibusInfo)


