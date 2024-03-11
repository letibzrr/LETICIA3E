const axios = require('axios');

async function APItest() {
  const response = await axios.get('');

  return response.data;
}

test('Verifica se obtém os dados corretamente', async () => {
  const data = await APItest();
  expect(data).toBeDefined();
});
