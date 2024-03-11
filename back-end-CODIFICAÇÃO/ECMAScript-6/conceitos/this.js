const pessoa = {
    saudacao: 'Olá, seus monstros!',
    falar(){
        console.log(this.saudacao) // Olá, seus monstros!
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // UNDERFINED
// FUNÇÃO BIND
const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()
//function Pessoa(){
   // this.idade = 0
   // setInterval(function(){
       // console.log(this.idade++) // NAN (EM LOOPING)
   // }/*.bind(this) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ..... (EM LOOPING)*/, 1000)
//}
//new Pessoa

//function Pessoa2() {
  //  this.idade = 0
//    setInterval(()=>{
        //this.idade++
       // console.log(this.idade)
 //   })
//}
//new Pessoa2