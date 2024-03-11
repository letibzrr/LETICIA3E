const axios = require('axios');

async function hpAPI() {
  const response = await axios.get('https://hp-api.onrender.com');

  return response.data;
}

test('Verifica se obtém os dados corretamente', async () => {
  const data = await hpAPI();
  expect(data).toBeDefined();
});
