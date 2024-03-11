const carro = {
   cor: 'Amarelo',
   marca: 'Nissan',
   modelo: 'Kicos',
   ano: 2024
}
console.log(`Meu carro é ${carro.cor} da marca ${carro.marca}`)

//toMatchObject()
const carroDesejado = {
    portas: 4,
    cor: 'preto',
    mecanica: {
        motorizacao: [2.0, 'turbo', '150 cv']
    },
    tetoSolar: true
}
const carroAVenda = {
    portas: 4,
    cor: 'prata',
    mecanica: {
        motorizacao: [1.0, 'aspirado', '60 cv']
    },
    tetoSolar: false,
    cambio: 'manual'
}
const carroOlx = {
    portas: 4,
    cor: 'preto',
    mecanica: {
        motorizacao: [2.0, 'turbo', '150 cv'],
        cambio: 'automatico',
        tracao: '4x4'
    },
    tetoSolar: true,
    ano: 2022,
    wifi: true,
    assistenteEstacionamento: true,
    centralMultimidia: true
}
test('Características do carro desejado', () => {
    expect(carroOlx).toMatchObject(carroDesejado)
})

const receitaDesejada = {
    lactose: false
}
const boloChocolate = {
    lactose: true
}
const boloCenoura = {
    lactose: false
}
test('Se há ou não lactose na receita', () => {
    expect(receitaDesejada).toMatchObject(boloCenoura)
})




