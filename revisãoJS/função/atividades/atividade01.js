function verificarNum(num){
    num = Number(prompt("Insira um número: "))
    if(num > 0){
        return 1;
    }else{
        return 0;
    }
} // tradicional

const verificarNum = (num) => num > 0 ? 1 : 0
num = Number(prompt("Insira um número: "))
console.log(verificarNum(num)) // reduzida