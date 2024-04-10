const url = require('url')
const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parseUrl = new url.URL(adress)

console.log(parseUrl.host) // www.meusite.com.br
console.log(parseUrl.pathname) // catalog
console.log(parseUrl.search) // ?produtos=cadeira
console.log(parseUrl.searchParams) // URLSearchParams { 'produtos' => 'cadeira' }
console.log(parseUrl.searchParams.get('produtos')) // cadeira