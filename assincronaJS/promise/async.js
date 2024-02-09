async function calculaDelay(x, y){ // async transforma a função em promessa
    return x * y 
}
calculaDelay(3,3)
.then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.log(`${err}`)
})
// 9