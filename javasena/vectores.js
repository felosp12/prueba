// sofwtare Master en java script



const readline = require('readline');

// Creamos una interfaz de lectura para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definimos el tamaño máximo de los vectores
const MAX_SIZE = 5;

// Definimos las funciones para validar si los vectores están ordenados
function isAscendingOrder(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function areVectorsOrdered(vector1, vector2) {
  return isAscendingOrder(vector1) && isAscendingOrder(vector2);
}

// Definimos la función para mezclar los vectores
function mergeVectors(vector1, vector2) {
  const merged = [...vector1, ...vector2];
  merged.sort((a, b) => a - b);
  return merged;
}

// Definimos los vectores que almacenarán los datos ingresados por el usuario
let vector1 = [];
let vector2 = [];

// Solicitamos al usuario que ingrese los valores del primer vector
console.log ("bienvenido a sofwtare master")
console.log('Ingrese los valores del primer vector (ordenados de forma ascendente):');
for (let i = 0; i < MAX_SIZE; i++) {
  const value = parseInt(rl.question(`Valor ${i + 1}: `));
  
  // Validamos que el valor ingresado esté en orden ascendente
  if (i > 0 && value <= vector1[i - 1]) {
    console.log('Error: El valor debe ser mayor al valor anterior.');
    i--; // Volvemos a solicitar el mismo valor
  } else {
    vector1.push(value);
  }
}

// Solicitamos al usuario que ingrese los valores del segundo vector

console.log('Ingrese los valores del segundo vector (ordenados de forma ascendente):');
for (let i = 0; i < MAX_SIZE; i++) {
  const value = parseInt(rl.question(`Valor ${i + 1}: `));

  // Validamos que el valor ingresado esté en orden ascendente
  if (i > 0 && value <= vector2[i - 1]) {
    console.log('Error: El valor debe ser mayor al valor anterior.');
    i--; // Volvemos a solicitar el mismo valor
  } else {
    vector2.push(value);
  }
}

// Verificamos si los vectores están ordenados
if (!areVectorsOrdered(vector1, vector2)) {
  console.log('Error: Los vectores deben estar ordenados de forma ascendente.');
  process.exit(1); // Salimos del programa con código de error 1
}

// Mezclamos los vectores y mostramos el resultado
const merged = mergeVectors(vector1, vector2);
console.log('Vector mezclado:');
console.log(merged);
