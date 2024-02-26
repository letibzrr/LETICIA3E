let produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];

  function precoMinimo(arrayP, valorMinimo){
    return arrayP.filter((produto) => produto.preco >= valorMinimo)
  }
  const produtoAcimaMinimo = precoMinimo(produtos, 500)
  console.log(produtoAcimaMinimo)