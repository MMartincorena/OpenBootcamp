/* 
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor 
*/

const datosPersonales = [
  {
    nombre: "Martin",
    apellido: "Martincorena",
    edad: 30,
    altura: 180,
    eresDesarrollador: true,
  },
];

const miEdad = datosPersonales.map((xEdad) =>
  (`Mi edad es: ${xEdad.edad}`).toString()
);

const datosGenerales = [
  ...datosPersonales,
  {
    nombre: "Marcelo",
    apellido: "Romero",
    edad: 31,
    altura: 178,
    eresDesarrollador: false,
  },
  {
    nombre: "Diego",
    apellido: "Sampayo",
    edad: 29,
    altura: 160,
    eresDesarrollador: false,
  },
];

// console.log(datosGenerales);

const ordenadaPorEdad = datosGenerales.sort((a, b) => a.edad - b.edad);

console.log(miEdad);
