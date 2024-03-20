const numeros = []

// entrada
const inNumero = document.getElementById('inNumero')
// saidas
const outAdicionar = document.getElementById('outAdicionar')
const outVerificar = document.getElementById('outVerificar')
// botões
const btnAdicionar = document.querySelector('#btnAdicionar')
const btnVerificar = document.querySelector('#btnVerificar')
// função adicionar
const adicionarNum = () => {
    let num = inNumero.value
    if(num === ''|| num <= 0 ) {
        alert('Erro ao identificar o número, tente novamente!')
        return
    }
    if(numeros.indexOf(num) >=0){
        alert('Número já foi adicionado, tente novamente!')
    }else{
        numeros.push(num)
        let adicionar = ''
        numeros.map((numeros) => {
        return adicionar += `${numeros}\n`;
        })
        outAdicionar.textContent = adicionar;
    }
    inNumero.value = ''
};
btnAdicionar.addEventListener('click', adicionarNum)
// função verificar
const verificarNum = () => {
    if(a){
        outVerificar.textContent = `Os números estão em ordem crescente: ${numeros}`
    }else{
        outAdicionar.textContent = `Os números não estão em ordem cresecente: ${numeros}`
    }
}
btnVerificar.addEventListener('click', verificarNum)