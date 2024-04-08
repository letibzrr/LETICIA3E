//ARROW 01
let circleArea = function (r){ // VARIAVEL RECEBEU COMO VALOR UMA FUNÇÃO
    let PI = Math.Pi
    let area = PI * r * r
    return area.toFixed(2)
}
console.log(circleArea(6))
//ARROW 02
let circleArea2 = (r) => { // FUNÇÃO ANONIMA
    let PI = Math.Pi
    let area = PI * r * r
    return area.toFixed(2)
}
console.log(circleArea2(6))
//ARROW 03
let circleArea3 = (r) => (Math.pI * r * r).toFixed(2) // FUNÇÃO ANONIMA SEM CHAVES
console.log(circleArea3(6))