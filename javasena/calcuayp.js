// sofwtare Master en java script

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularPerimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

function calcularPerimetroCuadrado(lado) {
  return lado * 4;
}

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

function calcularPerimetroRectangulo(base, altura) {
  return 2 * (base + altura);
}

function calcularAreaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

function calcularPerimetroCirculo(radio) {
  return 2 * Math.PI * radio;
}

rl.question('¿Qué figura desea calcular? (triángulo, cuadrado, rectángulo, círculo): ', (figura) => {
  switch (figura) {
    case 'triángulo':
      rl.question('Ingrese la base del triángulo: ', (base) => {
        rl.question('Ingrese la altura del triángulo: ', (altura) => {
          console.log(`El área del triángulo es: ${calcularAreaTriangulo(base, altura)}`);
          console.log(`El perímetro del triángulo es: ${calcularPerimetroTriangulo(base, altura/2, Math.sqrt(Math.pow(base/2, 2) + Math.pow(altura, 2)))}`);
          rl.close();
        });
      });
      break;
    case 'cuadrado':
      rl.question('Ingrese el lado del cuadrado: ', (lado) => {
        console.log(`El área del cuadrado es: ${calcularAreaCuadrado(lado)}`);
        console.log(`El perímetro del cuadrado es: ${calcularPerimetroCuadrado(lado)}`);
        rl.close();
      });
      break;
    case 'rectángulo':
      rl.question('Ingrese la base del rectángulo: ', (base) => {
        rl.question('Ingrese la altura del rectángulo: ', (altura) => {
          console.log(`El área del rectángulo es: ${calcularAreaRectangulo(base, altura)}`);
          console.log(`El perímetro del rectángulo es: ${calcularPerimetroRectangulo(base, altura)}`);
          rl.close();
        });
      });
      break;
    case 'círculo':
      rl.question('Ingrese el radio del círculo: ', (radio) => {
        console.log(`El área del círculo es: ${calcularAreaCirculo(radio)}`);
        console.log(`El perímetro del círculo es: ${calcularPerimetroCirculo(radio)}`);
        rl.close();
      });
      break;
    default:
      console.log('Figura no reconocida.');
      rl.close();
      break;
  }
});
  