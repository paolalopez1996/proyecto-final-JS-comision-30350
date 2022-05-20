resultadoNoche = 0
let resultado = 0;

function reserva() {

let resultadoPersonas = prompt("ingrese el numero de personas");

if (resultadoPersonas > 0 && resultadoPersonas <= 8){

alert ('bienvenidos');

}else if (resultadoPersonas <= 0 || resultadoPersonas == " ") {

return alert("ingrese un numero valido. max 8 personas por habitacion");

}
else {

alert("lo siento, numero de personas maximo por habitacion 8");

}

let resultadoNoche = prompt("ingrese el numero de noches");
if (resultadoNoche <= 20){

    resultadoNoche;

 } else {

     alert("num maximo de noches: 25")
    
}

let habitacionBasica = 40;
let habitacionDoble = 50;
let habitacionFamiliar = 60;
let habitacionSuit = 90 ;

let seleccionHabitacion = prompt('1-habitacion basica, 2-habitacion doble, 3-habitacion familiar, 4-habitacion suit');

if( seleccionHabitacion == 1){

 resultado = resultadoPersonas * habitacionBasica * resultadoNoche;

return  alert (`costo de habitacion basica: ${habitacionBasica}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `);

} else if (seleccionHabitacion == 2) {

     resultado = resultadoPersonas * habitacionDoble * resultadoNoche;
    return alert(`Costo de habitacion Doble ${habitacionDoble}$, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `)

} else if (seleccionHabitacion == 3) {
    
    resultado = resultadoPersonas * habitacionFamiliar * resultadoNoche;
   return alert (`Costo habitacion Familiar ${habitacionFamiliar}, para ${resultadoPersonas} personas, por ${resultadoNoche} noches: ${resultado}$ (precio total) `);

}else if (seleccionHabitacion == 4) {
    
   resultado = resultadoPersonas * habitacionSuit * resultadoNoche;
return  alert (`Costo habitacion Suit ${habitacionSuit}, para ${resultadoPersonas} personas,por ${resultadoNoche}: ${resultado}$ (precio total) }`);

} else  {
    return  alert("error, ingrese un numero valido");
}
}

reserva();





