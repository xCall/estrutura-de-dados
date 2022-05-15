let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// Ordenando elementos do array

// Metodo reverse
// numbers.reverse();
console.log('\n metodo reverse', numbers.reverse());

// Metodo sort
// numbers.sort();
console.log('\n metodo sort', numbers.sort());

// Tambem podemos passar uma condicao logica
// numbers.sort((a, b) => a - b);
console.log('\n metodo sort', numbers.sort((a, b) => a - b));

// O mesmo algoritmo de uma forma mais manual

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

console.log('\n compare', numbers.sort(compare));

// Ordenacao personalizada

const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
]

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log('\n person', friends.sort(comparePerson));

// Ordenando strings

let names = ['Ana', 'ana', 'jonh', 'John'];

console.log('\n ordenacao por string', names.sort());

// Jeito de burlar o padrao ascii e ordernar por alfabeto

names = ['Ana', 'ana', 'jonh', 'John'];
console.log('\n ordenacao string', names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return - 1;
  if (a.toLowerCase() > b.toLowerCase()) return - 1;
  return 0;
}));

names = ['Ana', 'ana', 'jonh', 'John'];

console.log('ordem alfabetica com minusculo a frente', names.sort((a, b) => a.localeCompare(b)));

// Pesquisa

// Metodo indexOf que retorna a indice do primeiro elemento encontrado retornando valor negativo caso nao encontrado
console.log('\n indexOf', numbers.indexOf(10));
console.log('\n indexOf', numbers.indexOf(100));

// Metodo lastIndexOf que retorna a indice do ultimo elemento encontrado  retornando valor negativo caso nao encontrado
console.log('\n lastIndexOf', numbers.lastIndexOf(11));
console.log('\n lastIndexOf', numbers.lastIndexOf(111));

// Metodo find que filtra valores se a regra retornar true

function multipleOf13(element, index, array) {
  return (element % 13 === 0);
}
console.log('\n find', numbers.find(multipleOf13));

// Metodo findIndex retorna a posicao caso a regra retorne true
console.log('\n findIndex', numbers.findIndex(multipleOf13));

// Metodo includes devolve true caso um elemento seja encontrado no array e false caso contrario

console.log('\n includes', numbers.includes(15));
console.log('\n includes', numbers.includes(18));

// Tambem e possivel passar um indice de inicio a partir de qual valore queremos que o array faca a pesquisa de valor
console.log('\n includes', numbers.includes(4,6));
console.log('\n includes', numbers.includes(4,3));