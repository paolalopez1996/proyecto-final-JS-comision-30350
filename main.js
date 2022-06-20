Date.prototype.isValid = function () {
	// If the date object is invalid it
	// will return 'NaN' on getTime()
	// and NaN is never equal to itself.
	return this.getTime() === this.getTime()
}
document.addEventListener(
	"DOMContentLoaded",
	function () {
	/*variables del DOM*/
		let fechaIni = document.getElementById("timeStart")
		let fechaFin = document.getElementById("timeEnd")
		let diasDesc = document.getElementById("daysDiscount")
		let pasajeroTotal = document.getElementById("invitados");
		const boton = document.getElementById('boton');
        diasDesc.disabled = true;

	//capturar numero de pasajeros
        function obtenerInvitados() {
			pasajeroTotal = document.getElementById("invitados");
			localStorage.setItem("invitados", pasajeroTotal.value)
			}
	/*OBTENER FECHAS*/
		fechaIni.addEventListener("change", () => {
			fechaFin.value !== undefined ?  calculardiasDiscount() : console.log("undefined");
		})
		fechaFin.addEventListener("change", () => {
			fechaIni.value !== undefined ?  calculardiasDiscount() : console.log("undefined");
		})
		function calculardiasDiscount() {
	/*GUARDE FECHAS EN EL LOCAL*/
		localStorage.setItem("checkin",fechaIni.value);
		localStorage.setItem("checkout", fechaFin.value);
	/*SACAR TOTAL DE DIAS*/
		let timeStart = new Date(fechaIni.value);
		let timeEnd= new Date(fechaFin.value);	
		if (timeEnd > timeStart){
			diff = timeEnd.getTime() - timeStart.getTime();
			document.getElementById("daysDiscount").value = Math.round(
			diff / (1000 * 60 * 60 * 24));
			localStorage.setItem("dateTotal", diasDesc.value)
		}
		(timeEnd != null && timeEnd < timeStart) ? swal("UUPS!", "LA FECHA FINAL DEBE SER MAYOR A LA FECHA INICIAL!", "error") :
		console.log(timeStart, timeEnd) //ver fechas en consola
		}
	    boton.addEventListener('click', (e) => {
		e.preventDefault()
		obtenerInvitados();
		if (diasDesc.value === "")  {
			swal("upps!", "...por favor indicanos las fechas de llegada y salida", "error");
		} else if (document.getElementById("invitados").value === "Open this select menu") {
			swal("upps!", "...por favor indicanos el numero de invitados :)", "error");
		}else{
		window.location.href = "reserva.html"
		}	
	})
	},
	false
)

