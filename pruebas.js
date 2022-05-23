
// resultadoNoche = 0
// let resultado = 0;
// let habitacionBasica = 40;
// let habitacionDoble = 50;
// let habitacionFamiliar = 60;
// let habitacionSuit = 90 ;
// document.addEventListener('DOMContentLoaded', function() {

// const validarPersonas = (personas) => {

// let resultadoPersonas = prompt("ingrese el numero de personas");
// resultadoPersonas = personas;
// if (resultadoPersonas> 0 && resultadoPersonas<= 8){

// return true;

// }else if (resultadoPersonas <= 0 || resultadoPersonas== " ") {

// return alert("ingrese un numero valido. max 8 personas por habitacion");

// }
// else {

// alert("lo siento, numero de personas maximo por habitacion 8");

// }
// }

// const numeroNoches = (noches) => {
// let resultadoNoche = prompt("ingrese el numero de noches");
// resultadoNoche  = noches;
// if (resultadoNoche > 0){

//     return true;
 
// } else {
// alert("ingrese numero valido")
    
// }
// }

// while(resultadoPersonas == true && resultadoNoche == true){
// function tipoDeHabitacion(habitaciones){
  
//  let seleccionHabitacion = prompt('1-habitacion basica, 2-habitacion doble, 3-habitacion familiar, 4-habitacion suit');
// seleccionHabitacion =habitaciones;
// if(seleccionHabitacion == 1){

//  resultado = personas * habitacionBasica * noches;

// return  alert (`costo de habitacion basica: ${habitacionBasica}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `);

// } else if (seleccionHabitacion == 2) {

//      resultado = personas * habitacionDoble * noches;
//     return alert(`Costo de habitacion Doble ${habitacionDoble}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `)

// } else if (seleccionHabitacion == 3) {
    
//     resultado = personas * habitacionFamiliar * noches;
//    return alert (`Costo habitacion Familiar ${habitacionFamiliar}, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `);

// }else if (seleccionHabitacion== 4) {
    
//    resultado = personas * habitacionSuit * noches;
// return  alert (`Costo habitacion Suit ${habitacionSuit}, para ${resultadoPersonas} personas,por ${resultadoNoche}: ${resultado}$ (precio total) }`);

// } else  {
//     return  alert("error, ingrese un numero valido");
// }

// };

// numeroPersonas();
// numeroNoches();
// tipoDeHabitacion();

// }
// }, false);
let resultado = 0;
//costo de habitaciones
const habitaciones = {
    habitacionBasica: 40,
    habitacionDoble: 50,
    habitacionFamiliar: 60,
    habitacionSuit: 90
}
document.addEventListener('DOMContentLoaded', function() {
function reserva() {

let resultadoPersonas = prompt("ingrese el numero de personas"); //preguntar numero de personas 

if (resultadoPersonas >= 1 && resultadoPersonas <= 8){

alert ('bienvenidos');

} else {
    alert("numero maximo 8 personas. refresca la pagina para volver a empezar")
    
    return console.error();
}
let resultadoNoche = prompt("ingrese el numero de noches"); // preguntar numero de noches
if (resultadoNoche == resultadoNoche){

    resultadoNoche;
} else {
    alert("ingrese solo numeros. refresca la pagina para volver a empezar")
    
    return console.error();
}
//costo de habitaciones
const habitaciones = {
    habitacionBasica: 40,
    habitacionDoble: 50,
    habitacionFamiliar: 60,
    habitacionSuit: 90
}
for (let tipoDeHabitacion in habitaciones) {
//preguntar que tipo de habitacion
let tipoDeHabitacion = prompt('1-habitacion basica (40$),  2-habitacion doble (50$),  3-habitacion familiar (60$), 4-habitacion suit (90$)');

if( tipoDeHabitacion == 1){

 resultado = resultadoPersonas * habitaciones.habitacionBasica * resultadoNoche;

return  alert (`costo de habitacion basica: ${habitaciones.habitacionBasica}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `);

} else if (tipoDeHabitacion == 2) {

     resultado = resultadoPersonas *habitaciones.habitacionDoble * resultadoNoche;
    return alert(`Costo de habitacion Doble ${habitaciones.habitacionDoble}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `)

} else if (tipoDeHabitacion == 3) {
    
    resultado = resultadoPersonas * habitaciones.habitacionFamiliar * resultadoNoche;
   return alert (`Costo habitacion Familiar ${habitaciones.habitacionFamiliar}, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `);

}else if (tipoDeHabitacion == 4) {
    
   resultado = resultadoPersonas * habitaciones.habitacionSuit  * resultadoNoche;
return  alert (`Costo habitacion Suit ${habitaciones.habitacionSuit}, para ${resultadoPersonas} personas,por ${resultadoNoche}: ${resultado}$ (precio total) }`);

} else  {
    return  alert("error, ingrese un numero valido");
}
}
}
reserva();

}, false);




