const data = require ('./onibus.json')
// Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.
const onibusDisponivelLinha = (idLinha) => {
    const onibusLinha = data.onibus.filter((onibus) => onibus.linha === idLinha)
    return onibusLinha.length != 0 ? {onibusLinha} : {message: 'Não há onibus disponivel para essa linhas'}
}
const id = 2
const onibusDisponivel = onibusDisponivelLinha(id)
console.log(onibusDisponivel)