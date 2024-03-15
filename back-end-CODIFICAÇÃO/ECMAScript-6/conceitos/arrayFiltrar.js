// pesquisar e filtrar dados de um array
const numbers = [1,2,3,4,5];

// encontrar o primeiro elemento que satisfaz a condição
const find = numbers.find((num) => num > 2);
console.log(find); // 3

// cria um novo array com todos elementos que passaram no teste
const filter = numbers.filter((num) => num % 2 === 0);
console.log(filter); // [ 2, 4 ]

// verificar se um array possui um determinado valor, retorna true ou false
const includes = numbers.includes(4);
console.log(includes); // true

// todos os elementos do array passam no teste lógica da função
const every = numbers.every((num) => num % 2 === 0);
console.log(every); // false

// verifica se pelo menos um elemento no array satisfaz a condição
const some = numbers.some((num) => num % 2 === 0);
console.log(some); // true