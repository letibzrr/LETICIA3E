const conversorTemperatura = require('./index');

describe('Teste a conversão', () => {
  test('Verifique se há a conversão de Celsius para o Fahrenheit', () => {
    const temperaturaC = 30;
    const temperaturaF = conversorTemperatura(temperaturaC);
    expect(temperaturaF).toBe(86);
  });
});
