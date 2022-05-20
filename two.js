let resultadoNoche = 0
let resultado = 0;

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





