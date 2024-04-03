const data = require ('./onibus.json')
// Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.

const consultarHrs = (idLinha) => {
    const linha = data.linhas.find((linha) => linha.id == idLinha)

    if(linha){
        const horarios = linha.horarios.map((horario) => {
            return `Saída: ${horario.saida}, Chegada: ${horario.chegada}`;
        });
        return horarios.join('\n')
    }else{
        return {message: 'Não foi possivel encontrar essa linha, tente novamente!'}
    }
}
const id = 1
const consultarLinhas = consultarHrs(id)
console.log(consultarLinhas)    

