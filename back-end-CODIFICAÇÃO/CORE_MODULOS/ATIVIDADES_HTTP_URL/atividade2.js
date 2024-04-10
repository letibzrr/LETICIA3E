const url = require('url')
const adress = 'http://api.example.com/data?param1=value1&param2=value2'
const parseUrl = new url.URL(adress)

console.log(parseUrl.hostname)
console.log(parseUrl.pathname)
console.log(parseUrl.searchParams)