const dobroF = (num) => 2 * num
const triploF = (num) => 3 * num

const resultado = function(parametro, fun1, fun2){
    const dobro = fun1(parametro)
    const triplo = fun2(parametro)
    console.log(`O valor ${parametro} possui seu dobro: ${dobro} e o triplo: ${triplo}`)
}
resultado(5, dobroF, triploF)