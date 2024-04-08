function teste(x,y,z){
    return x + y + z
}
console.log(teste(), teste(1), teste(1,2,3)) // NAN, NAN, 6
// 1 FORMA 
function soma(x,y,z){
    x = x || 1
    console.log(typeof x) // NUMBER
    y = y || 1
    z = z || 1
    return x + y + z
}
console.log(soma(), soma(2), soma(1,2,3), soma(0,0,0)) // 3, 4, 6, 3
// 2 FORMA 
function soma2(x,y,z){
    if(x == undefined){
        x = 1
    }
    if(y == undefined){
        y = 1
    }
    if(z == undefined){
        z = 1
    }
    return x + y + z
}
console.log(soma2(), soma2(2), soma2(1,2,3), soma2(0,0,0)) // 3, 4, 6, 0
// 3, 4, 5 FORMA
function soma3(x,y,z){
    // OPERADORES TERNARIOS
    x = x !== undefined ? x : 1 // 3
    y = 1 in arguments ? y : 1 // 4
    z = isNaN(z) ? 1 : z // 5
    return x + y + z
}
console.log(soma3(), soma3(2), soma3(1,2,3), soma3(0,0,0)) // 3, 4, 6, 0
// ECMAScript 6 ---> JS 2015 - VALOR PADRAO COMO PARAMETRO
function soma4(x = 1, y = 1, z = 1) {
    return x + y + z
}
console.log(soma4(), soma4(2), soma4(1,2,3), soma4(0,0,0)) // 3, 4, 6, 0