const data = require ('./onibus.json')
// Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.

const filtrarStatus = (status, data) => {
    const onibusStts = data.onibus.filter(onibus => onibus.status === status)
    return onibusStts
}

const operacaoStts = filtrarStatus('em operação', data)
console.log(operacaoStts)

//const manutencaoStts = filtrarStatus('em manutenção', data)
//console.log(manutencaoStts)

