// CORRIGIR ERRROS!

const carro = []
// entrada de dados
const inModelo = document.getElementById('inModelo')
const inPreco = document.getElementById('inPreco')

// botões
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnfiltrar = document.getElementById('btnfiltrar')

// saída de dados
const outLista = document.getElementById('outLista')

// função adicionar
const adicionarCarro = () => {
    const modelo = inModelo.value;
    const preco = Number(inPreco.value);

    if(modelo === '' || preco <= 0 || isNaN(preco)){
        alert('Informe os dados corretamente')
        inModelo.focus()
        return
    }
    carro.push({modelo: modelo, preco: preco})
    console.log(carro);

    inModelo.value = '';
    inPreco.value = '';
}
btnAdicionar.addEventListener('click', adicionarCarro)
// função listar
const listarCarros = () => {
    if(carro.length === 0){
        alert('Não tem carros cadastrados')
        inModelo.focus()
        return
    }
    let lista = ''
    carro.forEach((carro) => {
        return (lista += `${carro.modelo} --- ${carro.preco} \n`);
    });
    outLista.textContent = lista
}
btnListar.addEventListener('click', listarCarros)
// função filtrar
const filtrarPreco = () => {
    const maximoPreco = Number(prompt('Qual o valor máximo que o cliente deseja pagar'))
    if(maximoPreco === 0 || isNaN(maximoPreco)){
        alert('Por favor, preencha os dados corretamente')
        return
    } 
    const carrosFiltrados = carro.filter((carros) => {
        return carros.preco < maximoPreco
    })
    outLista.textContent = lista;
}
btnfiltrar.addEventListener('click', filtrarPreco)
