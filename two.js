// let resultado = 0;
// let resultadoPersonas = [];
// let resultadoNoche = [];
let operacion = [];
//costo de habitaciones
// const habitaciones = [
//     {habitacionBasica: 40,
//     habitacionDoble: 50,
//     habitacionFamiliar: 60,
//     habitacionSuit: 90
//     }
// ]
class Producto {
	constructor( nombre, precio) {
		this.nombre = nombre
		this.precio = precio
	}
}

const prod1 = new Producto( "basica", 40)
const prod2 = new Producto( "doble", 50)
const prod3 = new Producto("familiar", 60)
const prod4 = new Producto( "suit", 90)

const productos = [prod1, prod2, prod3];

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
    let capturarNoches = parseInt(document.getElementById('check-in').value);
    let capturarHabitacion = document.getElementById('selectHabitacion').value;
    let operacion = [];
    //   habitaciones.find(habitacion => {
        if(capturarHabitacion == "basica"){
            operacion =  capturarPersonas * capturarNoches *  prod1.precio;
            let newEquipmentsBasica = equipments.slice(0,2)
            alert(`costo de habitacion basica: ${prod1.precio}$ \n invitados: ${capturarPersonas} \n noches ${capturarNoches} \n total ${operacion}$
            \n incluye: ${newEquipmentsBasica} `)
            } 
            else if (capturarHabitacion == "doble"){
                
                operacion =  capturarPersonas * capturarNoches * prod2.precio; 
                let newEquipmentsDoble = equipments.slice(0,3)
                alert(` Costo de habitacion Doble ${prod2.precio}$ \n invitados: ${capturarPersonas} \n noches ${capturarNoches} \n total ${operacion}$
                \n incluye: ${newEquipmentsDoble} `)
            }
            else if (capturarHabitacion == "familiar"){
                
                operacion =  capturarPersonas * capturarNoches * prod3.precio; 
                let newEquipmentsFamiliar = equipments.slice(0,4)
                alert(`Costo habitacion Familiar ${prod3.precio}$ \n invitados: ${capturarPersonas} \n noches ${capturarNoches} \n total ${operacion}$
                \n incluye: ${newEquipmentsFamiliar} `)
            } 
            else if (capturarHabitacion == "suit"){
               
                operacion =  capturarPersonas * capturarNoches * prod4.precio;
                alert(`Costo habitacion Suit ${prod4.precio}$ \n invitados: ${capturarPersonas} \n noches ${capturarNoches} \n total ${operacion}$
                \n incluye: ${equipments} `);
            }
        
        //   });
        
    }
calcular();
}, false);
