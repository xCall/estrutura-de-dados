// Trabalhando com arrays multidimensionais

// Maneira tradicional de escrever array de array
let averageTemp = [];
averageTemp[0] = [72, 56, 78, 96, 91, 75];
averageTemp[1] = [81, 59, 59.5, 82, 90, 91];

// Outra maneira de escrever um array de array indo de posicao em posicao

let averageTemp2 = [];
averageTemp2[0] = [];
averageTemp2[0][0] = 32;
averageTemp2[0][1] = 35;
averageTemp2[0][2] = 27;
averageTemp2[1] = [];
averageTemp2[1][0] = 22.8;
averageTemp2[1][1] = 21;
averageTemp2[1][2] = 18;

// Exemplo de funcao generica para iterar os valores da matriz

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp2);

console.table(averageTemp2);

// Trabalhando com matriz 3x3 usando i(linha), j(coluna), z(profundidade)

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
      console.log(matrix3x3x3);
      matrix3x3x3[i][j][z] = [];
    }
  }
}

console.table(matrix3x3x3);