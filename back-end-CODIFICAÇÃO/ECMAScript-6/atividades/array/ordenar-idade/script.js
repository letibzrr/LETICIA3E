const criancaIdade = []

const inNome = document.getElementById('inNome')
const inIdade = document.getElementById('inIdade')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnfiltrar = document.getElementById('btnfiltrar')

const outLista = document.getElementById('outLista')

const adicionarCrianca = () => {
    const nome = inNome.value;
    const idade = Number(inIdade.value);

    if(nome === '' || idade <= 0 || isNaN(idade)){
        alert('Informe os dados corretamente')
        inNome.focus()
        return
    }
    criancaIdade.push({nome: nome, idade: idade})
    console.log(criancaIdade);

    inNome.value = '';
    inIdade.value = '';
}
btnAdicionar.addEventListener('click', adicionarCrianca)

const listarCrianca = () => {
    if(criancaIdade.length === 0){
        alert('Não tem crianças cadastradas')
        inNome.focus()
        return
    }
    let lista = ''
    criancaIdade.forEach((criancaIdade) => {
        return (lista += `${criancaIdade.nome} --- ${criancaIdade.idade} \n`);
    });
    outLista.textContent = lista
}
btnListar.addEventListener('click', listarCrianca)

const filtrarCriancas = () => {}
btnfiltrar.addEventListener('click', filtrarCriancas)