const conversorBitcoin = require('./index');

describe('Teste a conversão', () => {
  test('Verifique se há a conversão de real para o bitcoin', () => {
    const conversorMoedaR = 50;
    const conversorMoedaB = conversorBitcoin(conversorMoedaR);
    expect(conversorMoedaB).toBe(15000000);
  });
});
