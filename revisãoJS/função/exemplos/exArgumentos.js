//ex 02
function multiplicacao(){
    let multi = 1
   for(i in arguments){
    multi *= arguments[i]
   }
   return multi
}
console.log(multiplicacao()) // 1
console.log(multiplicacao(5)) // 5
console.log(multiplicacao(5,5)) // 25


//for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//        const element = object[key];
//        
//    }
//}