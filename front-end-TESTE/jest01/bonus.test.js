const Bonus = require('./index');

describe('Teste a função Bonus', () => {
  test('Verifique se o bônus de 10% é adicionado', () => {
    const salario = 10000;
    const salarioComBonus = Bonus(salario);
    expect(salarioComBonus).toBe(11500);
  });
});
