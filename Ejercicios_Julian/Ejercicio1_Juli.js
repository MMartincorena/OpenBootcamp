const dataPrueba = [1, 2, 3, 4, 5, "Hola", "Martin"];
// analizeList(dataPrueba) => {odd: [2, 4], noOdd: [1, 3, 5], others: ["Hola", "Martin"]};

function analizeList(listaElementos) {
  return {
    odd: listaElementos
      .filter((element) => typeof element === "number")
      .filter((element) => element % 2 === 0),
    noOdd: listaElementos
      .filter((element) => typeof element === "number")
      .filter((element) => element % 2 === 1),
    other: listaElementos
      .filter((element) => typeof element !== "number")
  };
}

console.log(analizeList(dataPrueba));
