let produtos = [
    { nome: 'Camiseta', categoria: 'Roupas' },
    { nome: 'Celular', categoria: 'Eletrônicos' }
];
let precos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 }
];

function combinar(produtos, precos){
    // encontrar objeto correspondente do array de preços
    return produtos.map((produto) => {
        let precoProduto = precos.find((preco) => preco.nome === produto.nome);

        //listagem de array
        return {
            nome: produto.nome,
            categoria: produto.categoria,
            precos: precoProduto.preco
        };
    });
}  

const combinarP = combinar(produtos, precos)
console.log(combinarP)