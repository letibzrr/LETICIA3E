const inNumero = document.querySelector('#inNumero')
const outTabuada = document.querySelector('#outTabuada')
const btnMostrar = document.querySelector('#btnMostrar')

btnMostrar.addEventListener('click', ()=>{
    let num = Number(inNumero.value)

    if(num === 0 || isNaN(num)){
        alert('Digite um numero válido')
        inNumero.focus();
        return
    }
    let resposta = ''
    for(let i = 1; i <= 10; i++){
        resposta = `${resposta + num} x ${i} = ${num * i}<br>`
    }
    outTabuada.innerHTML = `${resposta}`
})
