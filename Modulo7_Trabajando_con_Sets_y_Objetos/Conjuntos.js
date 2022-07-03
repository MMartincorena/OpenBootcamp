/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

const setFamilia = new Set();

setFamilia.add("Susana");
setFamilia.add("Mariano");
setFamilia.add("Martin");

console.log(setFamilia)

setFamilia.add("Martin");

setFamilia.add("JavaScript");
 

console.log(setFamilia)