/* 
Crea un nuevo proyecto de Node

- Configura el proyecto para utilizar los módulos de ES6
- Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
- En el entrypoint index.js, importa el módulo controller.js
- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde */

import {suma} from "./controller.js"
import chalk from 'chalk';

console.log(suma(1,2));
console.log(suma(4,5));


// libreria chalk, hace que los resultados de consola, aparezcan con estilos.
console.log(chalk.bold.green(suma(4,5)));

// ejemplo de uso
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
