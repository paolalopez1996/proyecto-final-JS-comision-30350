let resultado = 0;
let resultadoPersonas = [];
let resultadoNoche = [];
//costo de habitaciones
const habitaciones = [
    {habitacionBasica: 40,
    habitacionDoble: 50,
    habitacionFamiliar: 60,
    habitacionSuit: 90
    }
]
let equipments = ['televisor','baño', 'wifi', 'paseos a caballo', 'skii', 'spa', 'desayunos', 'refrigerador', 'electric kettle'];


document.addEventListener('DOMContentLoaded', function() {
//DOM
//creé un elemento li  y lo rellene con los elementos del array equipments.
//(aparece casi al finalizar la pagina)
let roomEquipment = document.getElementById("roomEquipment");
equipments.forEach(item => {
const li = document.createElement("li")
li.textContent = item
roomEquipment.append(li)
li.className = 'listaEquipments'
})

//DOM/EVENTOS: boton click para obtener info
    function cambiar (){
        document.getElementById('laskatitulo').innerHTML = "BIENVENIDO. ESTE ES UN SISTEMA DE RESERVACION DE CABAÑAS EN EL HOTEL LASKA. TE BRINDAREMOS UN PRESUPUESTO DEPENDIENDO DEL NUMERO DE PERSONAS, DE NOCHES Y QUE TIPO DE HABITACION DESEAS. GRACIAS POR ELEGIRNOS!";
    }
    document.getElementById('boton1').onclick = function(){
        cambiar();
    }
// //preguntar numero de personas 
function validarPersonas(){
    let preguntarPersonas = prompt("ingrese numero de personas (debe ser menor a 8)")
    if (preguntarPersonas >= 1 && preguntarPersonas <= 8) {
        resultadoPersonas.push(preguntarPersonas)
        return validarNoches();
    }  else {
        alert("Número maximo 8 personas, ingrese un numero válido")
        console.error();
    }
}  
validarPersonas();
// preguntar numero de noches
function validarNoches(){
    let preguntarNoches = prompt("ingrese el numero de noches"); 
    if (preguntarNoches <= 365){
      resultadoNoche.push(preguntarNoches);
        return reserva();
    } else {
        alert("Ingrese un número válido")
        console.error();
    }
}

//ejecutar programa
function reserva() {
habitaciones.forEach(habitacion => {
//preguntar que tipo de habitacion
let tipoDeHabitacion = prompt('1-habitacion basica (40$),  2-habitacion doble (50$),  3-habitacion familiar (60$), 4-habitacion suit (90$)');
if( tipoDeHabitacion == 1 ){
let newEquipmentsBasica = equipments.slice(0,2)
resultado = resultadoPersonas * habitacion["habitacionBasica"] * resultadoNoche;  //CALCULO DE PRECIO
//RESPUESTA total
return  alert (`costo de habitacion basica: ${habitacion["habitacionBasica"]}$, 
para ${resultadoPersonas} personas \n por ${resultadoNoche} noches. \n total = ${resultado}$
\n INCLUYE: ${newEquipmentsBasica}`);

} else if ( tipoDeHabitacion == 2) {
let newEquipmentsDoble = equipments.slice(0,3)
resultado = resultadoPersonas * habitacion["habitacionDoble"] * resultadoNoche;
return alert(`Costo de habitacion Doble ${habitacion["habitacionDoble"]}$ \n para ${resultadoPersonas} personas \n por ${resultadoNoche} noches.  \n total =  ${resultado}$  \n INCLUYE: ${newEquipmentsDoble} `)

} else if ( tipoDeHabitacion == 3) {
    let newEquipmentsFamiliar = equipments.slice(0,4)
    resultado = resultadoPersonas * habitacion["habitacionFamiliar"] * resultadoNoche;
   return alert (`Costo habitacion Familiar ${ habitacion["habitacionFamiliar"]}$ \n para ${resultadoPersonas} personas \n por ${resultadoNoche} noches.  \n total  ${resultado}$  \n INCLUYE: ${newEquipmentsFamiliar} `);

}else if ( tipoDeHabitacion == 4) {  
resultado = resultadoPersonas * habitacion["habitacionSuit"] * resultadoNoche;
return  alert (`Costo habitacion Suit ${habitacion["habitacionSuit"]}$ \n para ${resultadoPersonas} personas \n por ${resultadoNoche} noches.  \n total  ${resultado}$ \n INCLUYE: ${equipments}`);

} else  {
    return  alert("error, ingrese un numero valido");
}
});
}

}, false);

