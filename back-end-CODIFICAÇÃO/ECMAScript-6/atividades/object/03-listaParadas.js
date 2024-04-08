const data = require ('./onibus.json')
// Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
const listarParadas = (idLinha) => {
    const linha = data.linhas.find((linha) => linha.id === idLinha)
    if(linha){
        const paradasOrdenadas = linha.paradas.sort((a,b) => a.ordem - b.ordem)
        return {paradasOrdenadas}
    }else{
        return {message: 'Paradas não encontrada para a linha solicitada'}
    }
}
const id = 1
const paradasLinhas = listarParadas(id)
console.log(paradasLinhas)