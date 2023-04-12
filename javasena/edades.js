// sofwtare Master en java script


const readline = require('readline');

// Crear un vector de 10 elementos para almacenar las edades
let edades = new Array(10);

// Definir variables para contar la cantidad de personas en cada grupo
let menoresEdad = 0;
let mayoresEdad = 0;
let adultosMayores = 0;

// Definir variables para almacenar la edad más baja, la edad más alta y el promedio de edades
let edadMasBaja = 120;
let edadMasAlta = 0;
let sumaEdades = 0;
let promedioEdades = 0;

// Crear una interfaz de lectura para leer desde la entrada estándar (stdin)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir al usuario que ingrese las edades y validar que estén en el rango correcto
let i = 0;
rl.setPrompt(`Ingrese la edad de la persona ${i + 1}: `);
rl.prompt();

rl.on('line', (input) => {
  let edad = parseInt(input);

  // Validar que la edad esté en el rango correcto
  while (edad < 1 || edad > 120) {
    console.log("Error: La edad debe estar entre 1 y 120 años.");
    rl.prompt();
    return;
  }

  // Almacenar la edad en el vector
  edades[i] = edad;

  // Actualizar las variables de conteo y estadísticas
  if (edad < 18) {
    menoresEdad++;
  } else if (edad >= 18 && edad < 60) {
    mayoresEdad++;
  } else {
    adultosMayores++;
  }

  if (edad < edadMasBaja) {
    edadMasBaja = edad;
  }

  if (edad > edadMasAlta) {
    edadMasAlta = edad;
  }

  sumaEdades += edad;
  i++;

  if (i < edades.length) {
    rl.setPrompt(`Ingrese la edad de la persona ${i + 1}: `);
    rl.prompt();
  } else {
    // Calcular el promedio de edades
    promedioEdades = sumaEdades / edades.length;

    // Imprimir los resultados
    console.log("Cantidad de personas menores de edad: " + menoresEdad);
    console.log("Cantidad de personas mayores de edad: " + mayoresEdad);
    console.log("Cantidad de adultos mayores: " + adultosMayores);
    console.log("Edad más baja: " + edadMasBaja);
    console.log("Edad más alta: " + edadMasAlta);
    console.log("Promedio de edades: " + promedioEdades);
    rl.close();
  }
});
