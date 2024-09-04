const numerosPares = require('../../scripts/aula02/atividade/numerosPares.js')
const ordemAlfabetica = require('../../scripts/aula02/atividade/ordemAlfabetica.js')
const apenasVogais = require('../../scripts/aula02/atividade/contagemVogais.js')

describe('Teste de números', () => {
    test('Deve retornar os números pares de um array', () => {
        const numeros = [1, 2, 3, 4, 5, 6]
        const numerospares = [2, 4 , 6]
        expect(numerosPares(numeros)).toEqual(numerospares)
    });
})

describe('Teste de palavras', () => {
    test('Deve retornar as palavras em ordem alfabetica', () => {
        const comida = ["Banana", "Limão", "Abacate"]
        const comidaResult = ["Abacate", "Banana", "Limão"]
        expect(ordemAlfabetica(comida)).toEqual(comidaResult)
    })
})

describe('Teste de string', () => {

    test('Conta corretamente o número de vogais em uma string', () => {
        const string = 'hello';
        const stringInput = 2;
        expect(apenasVogais(string)).toBe(stringInput);
    });

    // test('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', () => {
    //     const string = 'sjhdjwkcjnrwcbrhvjrhcvj';
    //     const stringSemVogal = 0;
    //     expect(apenasVogais(string)).toBe(stringSemVogal);
    // });
})