import {numerosPares} from '../../scripts/aula_scripts02/atividade/numerosPares'
import {ordemAlfabetica} from '../../scripts/aula_scripts02/atividade/ordemAlfabetica.js'
import {apenasVogais} from '../../scripts/aula_scripts02/atividade/contagemVogais.js'

describe('Teste de números', () => {
    test('Deve retornar os números pares de um array', () => {
        expect(numerosPares).toEqual(2, 4, 6)
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

    test('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', () => {
        const string = 'sjhdjwkcjnrwcbrhvjrhcvj';
        const stringSemVogal = 0;
        expect(apenasVogais(string)).toBe(stringSemVogal);
    });
})