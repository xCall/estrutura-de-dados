// Forma sem array

// const averageTempJan = 31.9;
// const averageTempFeb = 35.3;
// const averageTempMar = 42.4;
// const averageTempApr = 54;
// const averageTempMay = 60.8;

// Forma tradicional de se criar um array
const averageTemp = [];

// Adicionando valores as posicoes especificas do array
averageTemp[0] = 31.9;
averageTemp[1] = 32.9;
averageTemp[2] = 35;
averageTemp[3] = 36;
averageTemp[4] = 45.2;
averageTemp[5] = 21;

// Maneira menos comum de criar e de acessar arrays
let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

// Maneira mais apropriada de se criar o exemplo acima
let daysOfWeek2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Para sabermos a quantidade de elementos do array basta usar o comando length
console.table(daysOfWeek);
console.log(daysOfWeek.length);


// Percorrendo array usando o for

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// Exemplo sequencia de fibonacci

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}


// Usando o metodo push para adicionar valores no final do array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.push(11);
numbers.push(12, 13);

// Adicionando valor na primeira posicao do array adicionando um metodo generico para todos os arrays

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
}

numbers.insertFirstPosition(-1);

// Usando o metodo unshift para adicionar valores na primeira posicao do array

numbers.unshift(-2);
numbers.unshift(-4, -3);

// Removendo ultimo elemento do array com metodo pop

numbers.pop();

// Removendo elemento da primeira posicao

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

// Logica adequada usando o prototype para remover dados da primeira posicao do array sem deixar lixo


// Remove a posicao cujo o valor seja undefined do array
Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      console.log(myArray[i]);
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}

// Remove a primeira posicao realocando os valores e colocando um undefined no ultimo valor do array

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

// Metodo default para remover primeiro elemento do array
numbers.shift();

// Adicionando removendo elementos de uma posicao especifica

// Removendo
numbers.splice(5, 3);

// Adicionando
numbers.splice(5, 0, 4, 5, 6);


console.table(numbers);


// Metodo concat que concatena varios arrays em um so

const zero = 0;
const positiveNumbers = [1, 2, 3, 4, 5];
const negativeNumbers = [-5, -4, -3, -2, -1];

let numbers1 = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers1);

// funcao para substituir o metodo every e interar array

function isEven(x) {
  console.log(x);
  return x % 2 === 0 ? true : false;
}

// Outra maneira de escrever a funcao usando es6

let number4 = x => x % 2 === 0;
console.log('\n\n Função retorna mod 2 = 0');
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(number4(numbers3));
console.log(isEven(numbers3));

// Usando o metodo every vai interar pelos valores do array ate devolver false
// numbers3.every(number4)
console.log('\n metodo every', numbers3.every(number4));

// Usando o metodo some que vai iterar pelos valores do array ate devolver true
// numbers3.some(number4);
console.log('\n Metodo some', numbers3.some(number4));

// Iterando usando o forEach que é parecido com o for

numbers3.forEach(x => console.log('\n forEach', x % 2 === 0));

// Usando o metodo map que cria um array ao iterar sobre outro de acordo com as condicoes passadas

const myMap = numbers3.map(number4);
console.log('\n Map', myMap);

// Usando o metodo filter para retornar os valores cujo a logica da interacao devolve true

const myFilter = numbers3.filter(isEven);
console.log('\n Filter', myFilter);

// Usando o metodo reduce muito usado para fazer somas e calculos

console.log('\n Reduce', numbers3.reduce((previous, current) => previous + current));

// Formas alternativas ao for para interar
// Laco for...of

for (const n of numbers3) {
  console.log(n % 2 === 0 ? 'even' : 'odd');
}

// Usando o @@iterator

let iterator = numbers3[Symbol.iterator]();
for (const n of iterator) {
  console.log('\n Iterator', n);
}

// Metodos entries, keys e value do array devolvendo iteradores

// entries

let aEntries = numbers3.entries() // Obtem um iterador de chave valor
console.log('\n aEntries ', aEntries.next().value);
console.log('\n aEntries ', aEntries.next().value);
console.log('\n aEntries ', aEntries.next().value);
console.log('\n aEntries ', aEntries.next().value);

// Usando entries com um for
for (const n of aEntries) {
  console.log(n);
}

// keys

const aKeys = numbers3.keys(); // Obtem um iterador de chave
console.log('\n aKeys ', aKeys.next().value);
console.log('\n aKeys ', aKeys.next().value);
console.log('\n aKeys ', aKeys.next().value);
console.log('\n aKeys ', aKeys.next().value);

// Usando key com um for
for (const n of aKeys) {
  console.log(n);
}

// value

const aValues = numbers3.values(); // Obtem um iterador de valor
console.log('\n aValues ', aValues.next().value);
console.log('\n aValues ', aValues.next().value);
console.log('\n aValues ', aValues.next().value);
console.log('\n aValues ', aValues.next().value);

// Usando o values com um for

for (const n of aValues) {
  console.log(n);
}

// O metodo from cria um novo array a partir de um array existente

let numbersFrom = Array.from(numbers3);

// Tambem e possivel passar uma funcao para determinar quais valores passar

let evens = Array.from(numbers3, x => (x % 2 === 0));

console.log('\n from', numbersFrom);
console.log('\n from2', evens);

// O metodo array of cria um array a partir dos argumentos passados para o metodo

let numbers4 = Array.of(1); // O mesmo que executar let numbers4 = [1]
let numbers5 = Array.of(1, 2, 3, 4, 5); // O mesmo que executar let numbers5 = [1,2,3,4,5]

console.log(numbers5);

// O metodo fill prenche o array com um valor

let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);

// O fill prenche o array em todas as suas posicoes com um valor passado
// numbersCopy.fill(0);
console.log('\n fill', numbersCopy.fill(0));

// Tambem podemos definir a partir de qual posicao preencher

// numbersCopy.fill(3, 1);
console.log('\n fill', numbersCopy.fill(3, 4));

// Tambem e possivel passar o valor, a posicao inicial e final ate onde deve ser preenchido
let numbersCopy2 = Array.of(1, 2, 3, 4, 5, 6);
// numbersCopy2.fill(1,3,5);
console.log('\n fill', numbersCopy2.fill(1, 3, 5));

// Criando valores e ja iniciando com um valor
let ones = Array(6).fill(1);
console.log('\n ones', ones);


// O metodo copyWithin copia uma sequencia de valroes do array para a posicao de um indice de inicio
let copyArray = [1, 2, 3, 4, 5, 6];
// copyArray.copyWithin(0, 3);
console.log('\n copyArray', copyArray.copyWithin(0, 3));

copyArray = [1, 2, 3, 4, 5, 6];
// copyArray.copyWithin(1, 3, 5);
console.log('\n copyArray', copyArray.copyWithin(1, 3, 5));

