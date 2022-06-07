
// let resultado = 0;
// let resultadoPersonas = [];
// let resultadoNoche = [];
let operacion = [];
//costo de habitaciones
const habitaciones = [
    {habitacionBasica: 40,
    habitacionDoble: 50,
    habitacionFamiliar: 60,
    habitacionSuit: 90
    }
]
let equipments = ['televisor','baño', 'wifi', 'paseos a caballo', 'skii', 'spa', 'desayunos', 'refrigerador', 'electric kettle'];
let diffTotal;

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

//DOM/EVENTOS: boton click para obtener info del proyecto
    function cambiar (){
        document.getElementById('laskatitulo').innerHTML = "BIENVENIDO. ESTE ES UN SISTEMA DE RESERVACION DE CABAÑAS EN EL HOTEL LASKA. TE BRINDAREMOS UN PRESUPUESTO DEPENDIENDO DEL NUMERO DE PERSONAS, DE NOCHES Y QUE TIPO DE HABITACION DESEAS. GRACIAS POR ELEGIRNOS!";
    }
    document.getElementById('boton1').onclick = function(){
        cambiar();
    }

/*EJECUTAR PROGRAMA*/  
let boton2 = document.getElementById('boton2');
boton2.addEventListener("click", ()=> {calcular()} )

function calcular (){
    let capturarPersonas = parseInt(document.getElementById('invitados').value);
    let capturarHabitacion = document.getElementById('selectHabitacion').value;
    let timeStart = new Date(document.getElementById("timeStart").value);
    let timeEnd = new Date(document.getElementById("timeEnd").value);
    let diffTotal;
    let operacion = [];

    if (timeEnd > timeStart)   
    { 
        let  diff = timeEnd.getTime() - timeStart.getTime();
        let diffTotal = Math.round(diff / (1000 * 60 * 60 * 24)); /*SACAR EL TOTAL REDONDEADO*/
        /*LA VARIABLE diffTotal es la que estoy usando para multiplicar con el numero de personas y habitacion*/
    
    }else if (timeEnd != null && timeEnd < timeStart) {
        
        alert("La fecha final de la promoción debe ser mayor a la fecha inicial");
    }
    habitaciones.forEach(habitacion => {
    if(capturarHabitacion == "basica"){
    operacion =  capturarPersonas * diffTotal * habitacion["habitacionBasica"];
    let newEquipmentsBasica = equipments.slice(0,2)
    alert(`costo de habitacion basica: ${habitacion["habitacionBasica"]}$ \n invitados: ${capturarPersonas} \n noches ${diffTotal} \n total ${operacion}$
    \n incluye: ${newEquipmentsBasica} `)
    } 
    else if (capturarHabitacion == "doble"){
        operacion =  capturarPersonas * diffTotal * habitacion["habitacionDoble"]; 
        let newEquipmentsDoble = equipments.slice(0,3)
        alert(` Costo de habitacion Doble ${habitacion["habitacionDoble"]}$ \n invitados: ${capturarPersonas} \n noches ${diffTotal} \n total ${operacion}$
        \n incluye: ${newEquipmentsDoble} `)
    }
    else if (capturarHabitacion == "familiar"){
        operacion =  capturarPersonas *  diffTotal* habitacion["habitacionFamiliar"]; 
        let newEquipmentsFamiliar = equipments.slice(0,4)
        alert(`Costo habitacion Familiar ${ habitacion["habitacionFamiliar"]}$ \n invitados: ${capturarPersonas} \n noches ${diffTotal} \n total ${operacion}$
        \n incluye: ${newEquipmentsFamiliar} `)
    } 
    else if (capturarHabitacion == "suit"){
        operacion =  capturarPersonas * diffTotal * habitacion["habitacionSuit"];
        alert(`Costo habitacion Suit ${habitacion["habitacionSuit"]}$ \n invitados: ${capturarPersonas} \n noches ${diffTotal} \n total ${operacion}$
        \n incluye: ${equipments} `);
    }
});
}

calcular();
}, false);