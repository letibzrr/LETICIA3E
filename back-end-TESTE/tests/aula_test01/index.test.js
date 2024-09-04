const isPerfectSquare = require('../../scripts/aula01/atividade/quadradoPerfeito.js')
const frutasArr = require("../../scripts/aula01/atividade/arrFrutas.js")

describe('Teste de quadrado perfeito', () => {
  test('Deve retornar true para números que são quadrados perfeitos', () => {
    expect(isPerfectSquare(0)).toBe(true); 
    expect(isPerfectSquare(1)).toBe(true); 
    expect(isPerfectSquare(4)).toBe(true); 
    expect(isPerfectSquare(9)).toBe(true); 
    expect(isPerfectSquare(16)).toBe(true); 
    expect(isPerfectSquare(25)).toBe(true); 

  });

  test('Deve retornar false para números que não são quadrados perfeitos', () => {
    expect(isPerfectSquare(-1)).toBe(false); 
    expect(isPerfectSquare(2)).toBe(false); 
    expect(isPerfectSquare(3)).toBe(false); 
    expect(isPerfectSquare(5)).toBe(false); 
    expect(isPerfectSquare(6)).toBe(false); 
  });       
});


describe('Teste pra verificar strings', () => {
    it("Deve retornar a comparação da strings", () => {
        expect("Jose").toBe("Jose")                                                                                                                                             
    })
    
})

describe('Teste pra verificar as frutas', () => {
    it("Deve retornar as frutas corretas", () => {
        expect(frutasArr()).toContain("Maça")
    })
    
})
