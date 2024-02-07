const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.addEventListener('click', ()=>{
    let num1 = Number(peso.value)
    let num2 = Number(altura.value)

    let calculo = num1 / (num2 * num2)
    result.innerHTML = `${calculo.toFixed(1)}`

    if(calculo < 16.9){
        classR.innerHTML = "Muito Abaixo do Peso"
    }else if(calculo >= 17 && calculo <= 18.4){
        classR.innerHTML = "Abaixo do Peso"
    }else if(calculo >= 18.5 && calculo <= 24.9){
        classR.innerHTML = "Peso Normal"
    }else if(calculo >= 25 && calculo <= 29.9){
        classR.innerHTML = "Acima do Peso"
    }else if(calculo >= 30 && calculo <= 34.9){
        classR.innerHTML = "Obesidade Grau I"
    }else if(calculo >= 35 && calculo <= 40){
        classR.innerHTML = "Obesidade Grau II"
    }else if(calculo > 40){
        classR.innerHTML = "Obesidade Grau III"
    }
})