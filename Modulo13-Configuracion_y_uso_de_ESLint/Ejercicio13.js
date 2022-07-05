/* Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal */

const nombre = 'Martin';
const apellido = "Martincorena";
const estudiante = nombre.concat(` `).concat(apellido);

const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const estudianteLength = estudiante.length;

const inicialNombre = nombre.substring(0, 1);

const finalApellido = apellido.substring(apellido.length - 1, apellido.length);

const estudianteSinEspacios = estudiante.replace(/ /g, "");

const nombreEnEstudiante = estudiante.includes(nombre);

console.log(estudianteMayus);
