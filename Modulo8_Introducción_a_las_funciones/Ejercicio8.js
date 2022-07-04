/* 
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
*/

function sinParametros() {
  if (true) {
    console.log("Siempre true");
  }
}

sinParametros();

////////////////////////////////////////////////

function seg5Despues() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola soy una promesa");
    }, 5000);
  });
}

async function asyncCall() {
  console.log("Inicio");
  const result = await seg5Despues();
  console.log(result);
}

asyncCall();

////////////////////////////////////////////////

function* generarIdPar() {
  let id = 0;
  while (true) {
    id = id + 2;
    yield id;
  }
}

const gen = generarIdPar();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
