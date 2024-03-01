const { default: expect } = require("expect");
const { test } = require("picomatch");

test("Verifica palavra dentro de um array", () => {
    const cestaFrutas = ['Pera', 'Uva', 'Maçã', 'Manga', 'Melancia']

    expect(cestaFrutas).toContain('Uva')
});

test("Verifica se não há cargo de gerente entre os funcionários", () => {
    const cargos = ['Auxiliar', 'Assistente', 'Analista', 'Encarregado', 'Coordenador']

    expect(cargos).not.toContain('Gerente')
});

test("Verificar se há a palavra 'Senai", () => {
    const frase = "O Senai é o melhor lugar do mundo para passar nossas manhãs!"
    const fraseMaiuscula = frase.toUpperCase()

    expect(fraseMaiuscula).toMatch(/SENAI/)
})


