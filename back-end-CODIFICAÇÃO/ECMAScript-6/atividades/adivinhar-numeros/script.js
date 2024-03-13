const numero = []
// entrada de dados
const inNumero = document.getElementById('inNumero')

// saida de dados
const outErros = document.getElementById('outErros')
const outChances = document.getElementById('outChances')
const outDica = document.getElementById('outDica')

// botões
const btnApostar = document.querySelector("#btnApostar")
const btnReinicar = document.querySelector("#btnReinicar")

// sorteio de numero aleatorio e validação
const numSorteio = Math.floor(Math.random()*100) + 1
console.log(numSorteio)

const apostarNumero = () => {
    let num = inNumero.value 
    if(num === '') {
        alert('Informe o número que deseja apostar')
        return
    }
    numero.push(num)
    if(num !== numSorteio){
        let erros = ''
        numero.map((numero, index) => {
        return erros += `${numero} (${index+1})\n`
    })
    outErros.textContent = erros;
    inNumero.value = ''
    }
}
btnApostar.addEventListener('click', apostarNumero)