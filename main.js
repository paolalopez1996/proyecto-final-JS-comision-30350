Date.prototype.isValid = function () {
	// If the date object is invalid it
	// will return 'NaN' on getTime()
	// and NaN is never equal to itself.
	return this.getTime() === this.getTime()
}

//variables y constructores
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


document.addEventListener(
	"DOMContentLoaded",
	function () {
        /*COMIENZO DEL SISTEMA DE RESERVA*/
		/*DOM*/
		let boton2 = document.getElementById("boton2")
		let fechaIni = document.getElementById("timeStart")
		let fechaFin = document.getElementById("timeEnd")
		// let capturarPersonas = parseInt(document.getElementById("invitados"))
		let capturarHabitacion = document.getElementById("selectHabitacion")
		let diff = document.getElementById("daysDiscount")
		let diasDesc = document.getElementById("daysDiscount")
        diasDesc.disabled = true;
		/*OBTENER FECHAS*/
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

		/*GUARDE FECHAS EN EL LOCAL*/
		localStorage.setItem("checkin",fechaIni.value);
		localStorage.setItem("checkout", fechaFin.value); 
	        /*SACAR TOTAL DE DIAS*/
			let timeStart = new Date(fechaIni.value);
			let timeEnd= new Date(fechaFin.value);	console.log(timeStart, timeEnd)
			if (timeEnd > timeStart) {
				let diff = timeEnd.getTime() - timeStart.getTime()
				document.getElementById("daysDiscount").value = Math.round(
				diff / (1000 * 60 * 60 * 24) 
				)
			/*GUARDAR EL TOTAL DE DIAS EN EL LOCALSTORAGE*/
			let dias = localStorage.setItem("dias", diasDesc.value)
			} else if (timeEnd != null && timeEnd < timeStart) {
			document.getElementById("daysDiscount").value = 0
			alert("La fecha final de la promoción debe ser mayor a la fecha inicial")
			}
		}
		 
	       boton2.addEventListener("click", (e) => {
		 	e.preventDefault()
			if (diasDesc.value === "") {
			alert("POR FAVOT INGRESE FECHA DE LLEGADA Y SALIDA")
			} else if (document.getElementById("selectHabitacion").value === "Open this select menu") {
				alert("SELECIONA EL TIPO DE HABITACION")
		} else {
		    obtenerInvitados()
			calcular();
		}
		
		})
		//  OBTENER PASAJEROS
		function obtenerInvitados() {
	    pasajeroTotal = document.getElementById("invitados");
	    localStorage.setItem("invitados", pasajeroTotal.value)
        }
		

             //AQUI SACO EL PRESUPUESTO TOTAL.
			 function calcular() {
				let operacion = document.getElementById("respuesta")
				pasajeroTotal = document.getElementById("invitados");
				let capturarPersonas = parseInt(document.getElementById("invitados").value)
				let capturarHabitacion = document.getElementById("selectHabitacion").value
				let diff = document.getElementById("daysDiscount").value
				let fechaIni = document.getElementById("timeStart")
				let fechaFin = document.getElementById("timeEnd")
				//AQUI SACO EL PRESUPUESTO TOTAL.
				
					if (capturarHabitacion == "basica") {
						let operacion = document.getElementById("respuesta")
						operacion = capturarPersonas * diff * prod1.precio;
						localStorage.setItem("result", operacion.value)
						respuesta.innerHTML = `   INVITADOS: ${capturarPersonas},  DIAS: ${diff},  \n
						 TOTAL: ${operacion}`;
					} else if (capturarHabitacion == "doble") {
						operacion = capturarPersonas * diff * prod2.precio;
						localStorage.setItem("result", operacion.value)
						respuesta.innerHTML = `   INVITADOS: ${capturarPersonas},  DIAS: ${diff}, \n 
						TOTAL: ${operacion}`;
					} else if (capturarHabitacion == "familiar") {
						operacion = capturarPersonas * diff *prod3.precio;
						localStorage.setItem("result", operacion.value)
						respuesta.innerHTML = `   INVITADOS: ${capturarPersonas},  DIAS: ${diff}, \n
						 TOTAL: ${operacion}`;
					} else if (capturarHabitacion == "suit") {
						operacion = capturarPersonas * diff * prod4.precio;
						localStorage.setItem("result", operacion.value)
						respuesta.innerHTML = ` INVITADOS: ${capturarPersonas},  DIAS: ${diff}, \n 
						TOTAL: ${operacion}`;
					}
					



				let checkInR = document.getElementById("check-in-r")
                let checkOutR = document.getElementById("check-out-r")
                checkInR.innerText = localStorage.getItem("checkin")
                checkOutR.innerText = localStorage.getItem("checkout")
				
				
				
				/*GUARDAR EN EL STORAGE*/
				/*Guardando los datos en el LocalStorage*/

				let  productos = new habitacion(diff, capturarHabitacion, capturarPersonas, operacion)
				let stringStorage =  JSON.stringify(productos)
				localStorage.setItem("productos", stringStorage)
				localStorage.getItem("productos");
				let datos = JSON.parse(stringStorage)	 
 
		}
	
		
		   
         

	},
	false
)