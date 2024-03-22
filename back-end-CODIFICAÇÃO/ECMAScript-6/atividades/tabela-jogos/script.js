const clubes = [];
// entrada
const inClube = document.querySelector('#inClube')
// botões
const btnAdicionar = document.querySelector('#btnAdicionar')
const btnListar = document.querySelector('#btnListar')
const btnTabela = document.querySelector('#btnTabela')
// saida
const outLista = document.querySelector('#outLista')
// função adicionar
const adicionarClube = () => {
    const clube = inClube.value
    if(clube === ''){
        alert('Preencha a campo')
        inClube.focus()
        return
    }
    clubes.push(clube)
    inClube.value = ''
    inClube.focus
};
btnAdicionar.addEventListener('click', adicionarClube);
// função listar
const listarClube = () => {
    if(clubes.length === 0){
        alert('Não existe clubes cadastrados')
        return
    }
    let lista = ''
    clubes.forEach((clube, index) => {
        return lista += `${index+1}. ${clube}\n`
    })
    outLista.textContent = lista
};
btnListar.addEventListener('click', listarClube)
// função tabela
const mostrarTabela = () => {
    if(clubes.length % 2 != 0 || clubes.length === 0){
        alert('É impossivel fazer a tabulação com essa quantidade de clubes')
        return
    }
    const metadeInicio = clubes.slice(0, clubes.length/2)
    const metadeFim = clubes.slice(clubes.length/2, clubes.length).reverse()
    
    let lista = ''
    for(let i = 0; i < metadeInicio.length; i++){
        lista += `${i + 1}. ${metadeInicio[i]} X ${metadeFim[i]}\n`
    }
    outLista.textContent = lista
};
btnTabela.addEventListener('click', mostrarTabela);
