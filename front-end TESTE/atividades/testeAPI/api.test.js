const axios = require('axios');

async function clashroyaleApi() {
  const response = await axios.get('');

  return response.data;
}

test('Verifica se obtém os dados corretamente', async () => {
  const data = await clashroyaleApi();
  expect(data).toBeDefined();
});