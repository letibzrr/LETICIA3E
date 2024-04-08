const candidatos = []
// entradas
const inNome = document.getElementById('inNome')
const inAcerto = document.getElementById('inAcerto')
// saidas
const outListar = document.getElementById('outListar')
// botões
const btnAdicionar = document.querySelector('#btnAdicionar')
const btnListar = document.querySelector('#btnListar')
const btn2Fase = document.querySelector('#btn2Fase')
// função adicionar
const adicionarCandidato = () => {
    const candidato = inNome.value
    const acertos = inAcerto.value

    if(candidato === '' || acertos <= 0){
        alert('Dados inválidos, tente novamente!')
        return
    }
    candidatos.push({nome: candidato, nota: acertos})
}
btnAdicionar.addEventListener('click', adicionarCandidato)
// função listar
const listarCandidato = () => {
    if(candidatos.length === 0){
        alert('Não há candidatos registrados')
    }
    let lista = ''
    candidatos.forEach((candidato) => {
        return lista += `${candidato.nome} - ${candidato.nota} Nota\n`
    })
    outListar.textContent = lista
}
btnListar.addEventListener('click', listarCandidato)
// função aprovados
const aprovadosLista = () => {
    const notaCorte = Number(prompt('Digite a nota de corte para a segunda etapa'))
    if(notaCorte <= 0 || isNaN(notaCorte)){
        alert('Nota inválida')
        return
    }
    const filtrarCandidatos = candidatos.filter((candidato) => {
        return candidato.nota >= notaCorte
    })
    const candidatosOrdem = filtrarCandidatos.sort((a,b) => {
        return b.nota - a.nota
    })

    let lista = ''
    candidatosOrdem.forEach((candidato) => {
        return lista += `${candidato.nome} - ${candidato.nota}`
    })
    outListar.textContent = lista
}
btn2Fase.addEventListener('click', aprovadosLista)