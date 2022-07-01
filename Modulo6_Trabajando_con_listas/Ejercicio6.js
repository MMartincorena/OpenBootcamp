/* 
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
*/
let ListCompra = ["agua", "coca", "limon", "carne", "sal"];
ListCompra.push("Aceite de girasol");
ListCompra.pop("Aceite de girasol");
/*
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) 
*/

Peliculas = [
  {
    titulo: "Last Evolution",
    director: "Kakashi",
    fecha: new Date("20-3-1999"),
  },
  {
    titulo: "El guerrero legendario",
    director: "Ahashi",
    fecha: new Date("22-8-2022"),
  },
  {
    titulo: "El 6to Hokage",
    director: "Akira",
    fecha: new Date("5-2-2020"),
  },
];

const Post = Peliculas.filter((x) => {
  x.fecha > new Date("01-01-2010");
});

const listaDirectores = Peliculas.map((x) => x.director);
const listaTitulos = Peliculas.map((x) => x.titulo);

const DirectTitulo = listaDirectores.concat(listaTitulos);
const DirectTitulo2 = [...listaDirectores, ...listaTitulos];

console.log(Post);
