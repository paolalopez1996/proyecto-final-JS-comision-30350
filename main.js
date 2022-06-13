Date.prototype.isValid = function () {
	// If the date object is invalid it
	// will return 'NaN' on getTime()
	// and NaN is never equal to itself.
	return this.getTime() === this.getTime()
}

let operacion = []
//costo de habitaciones
const habitaciones = [
    {habitacionBasica: 40,
    habitacionDoble: 50,
    habitacionFamiliar: 60,
    habitacionSuit: 90
    }
]
 class habitacion{
	constructor(dias, habitacion, invitados, operacion, precio) {
		this.dias = dias
		this.habitacion = habitacion
		this.invitado = invitados
		this.operacion= operacion
		this.precio = precio
		
	}
}
 let prod1 = new habitacion( 5, "basica",4, 405,40)
 let prod2 = new habitacion( 5, "doble",4, 5025,50)
 let prod3 = new habitacion( 5, "familiar",4, 660,60)
 let prod4 = new habitacion( 5, "suit" ,4, 90,90)
let productos = [prod1, prod2, prod3, prod4];
let equipments = [
	"televisor",
	"baño",
	"wifi",
	"paseos a caballo",
	"skii",
	"spa",
	"desayunos",
	"refrigerador",
	"electric kettle",
]
 let productoStr =  JSON.stringify(productos);
 console.log(productoStr)
localStorage.setItem('productos', productoStr)
 console.log(JSON.parse(localStorage.getItem('productos')))
//JOSE NARDULLI:
/*Declare una variable que tiene el valor de la diferencia de dias y tambien aproveche para deshabilitarla asi nadie
podra escribir alli*/
let diasDesc = document.getElementById("daysDiscount")
diasDesc.disabled = true;
document.addEventListener(
	"DOMContentLoaded",
	function () {
		//DOM
		//creé un elemento li  y lo rellene con los elementos del array equipments.
		//(aparece casi al finalizar la pagina)
		let roomEquipment = document.getElementById("roomEquipment")
		equipments.forEach((item) => {
			const li = document.createElement("li")
			li.textContent = item
			roomEquipment.append(li)
			li.className = "listaEquipments"
		})

		//DOM/EVENTOS: boton click para obtener info del proyecto
		function cambiar() {
			document.getElementById("laskatitulo").innerHTML =
				"BIENVENIDO. ESTE ES UN SISTEMA DE RESERVACION DE CABAÑAS EN EL HOTEL LASKA. TE BRINDAREMOS UN PRESUPUESTO DEPENDIENDO DEL NUMERO DE PERSONAS, DE NOCHES Y QUE TIPO DE HABITACION DESEAS. GRACIAS POR ELEGIRNOS!"
		}
		document.getElementById("boton1").onclick = function () {
			cambiar()
		}

		/*EJECUTAR PROGRAMA*/
		 let boton2 = document.getElementById("boton2")

		/*decidi cambiar la logica de calcular dia discount la hice una funcion independiente que 
regresa un valor solo cuando la fecha de inicio y la fecha final tienen un valor
*/

		let fechaIni = document.getElementById("timeStart")
		let fechaFin = document.getElementById("timeEnd")

		fechaIni.addEventListener("change", () => {
			if (!(fechaFin.value == undefined)) {
				calculardiasDiscount()
			}
		})
		fechaFin.addEventListener("change", () => {
			if (!(fechaIni.value == undefined)) {
				calculardiasDiscount()
			}
		})

		function calculardiasDiscount() {
			let timeStart = new Date(document.getElementById("timeStart").value)
			let timeEnd = new Date(document.getElementById("timeEnd").value)
			
			console.log(timeStart, timeEnd)
			if (timeEnd > timeStart) {
				let diff = timeEnd.getTime() - timeStart.getTime()
				document.getElementById("daysDiscount").value = Math.round(
					diff / (1000 * 60 * 60 * 24)
				) /*SACAR EL TOTAL REDONDEADO*/
				/*LA VARIABLE diffTotal es la que estoy usando para multiplicar con el numero de personas y habitacion*/
			} else if (timeEnd != null && timeEnd < timeStart) {
				document.getElementById("daysDiscount").value = 0
				alert("La fecha final de la promoción debe ser mayor a la fecha inicial")
			}
		}
     
		boton2.addEventListener("click", (e) => {
			e.preventDefault()
			//Jose Nardulli: hago validaciones
			//JN: valido que dias de descuento no este vacio
			if (diasDesc.value === "") {
				alert("dale crack hay que colocar una fecha de inicio y una de final")
			} else if (document.getElementById("selectHabitacion").value === "Open this select menu") {
				alert("tambien hay que meter un costo")
			} else {
				calcular() 
				
			}
		})
		
		    function calcular() {
            let operacion = document.getElementById("respuesta")
			let capturarPersonas = parseInt(document.getElementById("invitados").value)
			let capturarHabitacion = document.getElementById("selectHabitacion").value
			let diff = document.getElementById("daysDiscount").value
			let fechaIni = document.getElementById("timeStart")
			let fechaFin = document.getElementById("timeEnd")
            //AQUI SACO EL PRESUPUESTO TOTAL.
			
				if (capturarHabitacion == "basica") {
					operacion = capturarPersonas * diff * prod1.precio;
					let newEquipmentsBasica = equipments.slice(0, 2)
                    respuesta.innerHTML = `   INVITADOS: ${capturarPersonas}  NOCHES: ${diff}  TOTAL: ${operacion}`;

				} else if (capturarHabitacion == "doble") {
					operacion = capturarPersonas * diff * prod2.precio;
					let newEquipmentsDoble = equipments.slice(0, 3)
                    respuesta.innerHTML = `   INVITADOS: ${capturarPersonas}  NOCHES: ${diff}  TOTAL: ${operacion}`;
				} else if (capturarHabitacion == "familiar") {
					operacion = capturarPersonas * diff *prod3.precio;
					let newEquipmentsFamiliar = equipments.slice(0, 4)
                    respuesta.innerHTML = `   INVITADOS: ${capturarPersonas}  NOCHES: ${diff}  TOTAL: ${operacion}`;
				} else if (capturarHabitacion == "suit") {
					operacion = capturarPersonas * diff * prod4.precio;
                    respuesta.innerHTML = ` INVITADOS: ${capturarPersonas}  NOCHES: ${diff}  TOTAL: ${operacion}`;
				}
					/*GUARDAR EN EL STORAGE*/
				/*Guardando los datos en el LocalStorage*/
				let  productos = new habitacion(diff, capturarHabitacion, capturarPersonas, operacion)
				let stringStorage =  JSON.stringify(productos)
				localStorage.setItem("productos", stringStorage)
				localStorage.getItem("productos");
				let datos = JSON.parse(stringStorage)
				// document.getElementById("diasguardados").textContent = datos.dias;
				document.getElementById("datos_guardados").innerHTML = datos;	 
 
		}
	
		
		   
         

	},
	false
)
