function verificarVelocidade(){
    const velocidade = document.getElementById('velocidade');

    if(velocidade > 60){
        result.innerHTML = "Você foi multado!"
        document.body.style.color = 'red'
    }else{
        result.innerHTML = "Você não foi multado!"
        document.body.style.color = 'green'
    }
}