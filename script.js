const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (respuesta) => {
      resolve(respuesta);
    });
  });
}

async function main() {
  let nombre = await preguntar('¿Cuál es tu nombre? ');
  let edad = await preguntar('¿Cuántos años tienes? ');

  console.log("¡Hola, " + nombre + ". Tienes " + edad + " años.");

  rl.close(); 
}

main();