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
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(number4(numbers3));
console.log(isEven(numbers3));

// Usando o metodo every vai interar pelos valores do array ate devolver false
console.log('metodo every');
numbers3.every(isEven);