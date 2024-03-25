const erros = []
// sorteio de numero aleatorio de 1 até 100
const numSorteio = Math.floor(Math.random()*100) + 1;
const tentativas = 6
// botões
const btnApostar = document.querySelector("#btnApostar")
const btnReinicar = document.querySelector("#btnReinicar")
// função apostar
const apostarNum = () => {
    // entrada de dados
    const inNumero = document.getElementById('inNumero')
    let numero = Number(inNumero.value)
    if(numero <=0 || isNaN(numero)){
        alert('Número Inválido')
        inNumero.focus
        return
    }
    // saida de dados
    const outErros = document.getElementById('outErros')
    const outChances = document.getElementById('outChances')
    const outDica = document.getElementById('outDica')
    // logica de acerto
    if(numero == numSorteio){
        alert('Você acertou!')
        outDica.textContent = `Parabéns! Número Sorteado ${numSorteio}`
        btnApostar.disabled = true // desabilitar o botão
    }else{ // logica de erro
        if(erros.indexOf(numero) >= 0){
            alert(`Você já apostou o ${numero}... Tente novamente!`)
        }else{
            erros.push(numero)
            let numErros = erros.length
            let numChances = tentativas - numErros

            outErros.textContent = `${numErros} (${erros.join(',')})`
            outChances.textContent = numChances

            if(numChances == 0){
                btnApostar.disabled = true
                outDica.textContent = `Fim de jogo! Número Sorteado ${numSorteio}`
            }else{
                let dica = numero < numSorteio ? 'Maior' : "Menor"
                outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    inNumero.value = ''
    inNumero.focus()
}
btnApostar.addEventListener('click', apostarNum)
// função reiniciar
btnReinicar.addEventListener('click', ()=> {
    window.location.reload()
})



