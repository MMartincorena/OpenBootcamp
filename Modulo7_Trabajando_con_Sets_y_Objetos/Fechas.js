/* 
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos) 
*/

const fechaHoy = new Date();

const fechaNacimiento = new Date("7/9/1992");

const masTarde = (()=>{
    if(fechaHoy.getTime() > fechaNacimiento.getTime()){
        return  console.log("Si lo es");
    }else{
        return  console.log("No lo es");
    }
})

masTarde();

let dia = fechaNacimiento.getDate();
let mes = fechaNacimiento.getMonth()+1;
let anio = fechaNacimiento.getFullYear();

console.log(dia, mes, anio)