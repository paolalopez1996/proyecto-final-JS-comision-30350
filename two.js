let resultado = 0;
//costo de habitaciones
const habitaciones = [
    { habitacionBasica: 40,},
    {habitacionDoble: 50,},
    { habitacionFamiliar: 60,},
    {habitacionSuit: 90},
]
document.addEventListener('DOMContentLoaded', function() {
    alert("BIENVENIDO. ESTE ES UN SISTEMA DE RESERVACION DE CABAÑAS EN EL HOTEL LASKA. TE BRINDAREMOS UN PRESUPUESTO DEPENDIENDO DEL NUMERO DE PERSONAS, DE NOCHES Y QUE TIPO DE HABITACION DESEAS. (LOS PRECIOS SON EN DOLARES) (MAXIMO POR CABAÑA 8 PERSONAS) GRACIAS POR ELEGIRNOS!!!♣♦");
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
const habitaciones = [
    { "habitacionBasica": 40,
      "habitacionDoble": 50,
      "habitacionFamiliar": 60,
      "habitacionSuit": 90
    }
]

for (let habitacion of habitaciones) {
//preguntar que tipo de habitacion
let tipoDeHabitacion = prompt('1-habitacion basica (40$),  2-habitacion doble (50$),  3-habitacion familiar (60$), 4-habitacion suit (90$)');

if( tipoDeHabitacion == 1){


 resultado = resultadoPersonas * habitacion["habitacionBasica"] * resultadoNoche; 


 return  alert (`costo de habitacion basica: ${habitacion["habitacionBasica"]}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total)`);



} else if (tipoDeHabitacion == 2) {

     resultado = resultadoPersonas * habitacion["habitacionDoble"] * resultadoNoche;
    return alert(`Costo de habitacion Doble ${habitacion["habitacionDoble"]}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `)

} else if (tipoDeHabitacion == 3) {
    
    resultado = resultadoPersonas * habitacion["habitacionFamiliar"] * resultadoNoche;
   return alert (`Costo habitacion Familiar ${ habitacion["habitacionFamiliar"]}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `);

}else if (tipoDeHabitacion == 4) {
    
   resultado = resultadoPersonas * habitacion["habitacionSuit"] * resultadoNoche;
return  alert (`Costo habitacion Suit ${habitacion["habitacionSuit"]}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) }`);

} else  {
    return  alert("error, ingrese un numero valido");
}
}
}
reserva();




}, false);
