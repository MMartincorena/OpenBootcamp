// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 1;

for (let i = 1; i < lista.length; i++) {
  num = num * i;
  console.log(num);
}
