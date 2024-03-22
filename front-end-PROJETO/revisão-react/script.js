//IMPORTAÇÃO TYPE MODULE
import areaQuadrado from "./funcao.js";
// console.log(areaQuadrado(5)) // 25

// ARROW FUNCTION 
function Soma (a,b){
    return a+ b
}
const soma = (a, b) => a + b;

// DESTRUTURAÇÃO
function MouseMose(event) {
    const clientY = event.clientY
   const clientX = event.clientX
}
const MouseMoving = (event) =>{
    const {clientX, clientY} = event
}
const MouseHandle = ({clientX, clientY}) => console.log(clientX, clientY)

// document.documentElement.addEventListener('mousemove', MouseHandle); // 140 327
// 129 346
// 120 362
// 112 377
// 106 388
// 102 397
// ...

// ARRAYS  
const frutas = ['Banana', 'Maça' , 'Pera']

// REST
const showList = (empresa, ...funcionarios) => {
    funcionarios.forEach((funcionario) => {
        // console.log(funcionario, empresa) // Carlos Senai
        // Letícia Senai
        // Bruno Senai
        // Marcia Senai
    })
}
showList('Senai', 'Carlos', 'Letícia', 'Bruno', 'Marcia')

// SPREAD
const numeros = [12, 13, 21, 30, 4, 6, 7]
const maior = Math.max(...numeros)
// console.log(maior) // 30

const carro = {
    cor: 'prata',
    ano: 2008,
    modelo: 'Ka'
}
const marcaCarro = {...carro, marca: 'Ford'}
//console.log(marcaCarro) // {cor: 'prata', ano: 2008, modelo: 'Ka', marca: 'Ford'}
//ano: 2008
//cor: "prata"
//marca: "Ford"
//modelo: "Ka"

// MAP E FILTER
const compras = [
    'R$ 200',
    '150',
    'R$ 550',
    'R$ 300',
    '650',
    'Shampoo',
    'Creme de gato'
]
const precosFiltro = compras.filter((preco) => preco.includes(0))
// console.log(...precosFiltro) // R$ 200 150 R$ 550 R$ 300 650
const precosNumeros = precosFiltro.map((preco) => Number(preco.replace('R$', '')))
// console.log(...precosNumeros) // 200 150 550 300 650

// OPERADORES TERNARIOS 
const csa = 1
const crb = 2
const vencendor = crb > csa ? 'CRB venceu' : 'CSA venceu' // REDUÇÃO DO ELSE IF
// console.log(vencendor) // CRB venceu

const situacaoAtiva = true
const menssagem = situacaoAtiva && 'Situação Ativa'
// console.log(menssagem) // Situação Ativa