function concatenaString(string1, string2) {
  return string1 + string2;
}

describe("Exercícios de teste", () => {
  test('Verifica se um número é igual ao outro', () => {
    expect(1).toBe(1); 
  }),
  test('Verificar se um valor é estritamente igual', () => {
    expect('1').not.toBe(1);
  }),
  test('Verificar concatenação de string', () => {
    expect(concatenaString('Tudo','Bem?')).toBe('TudoBem?')
  });
});
