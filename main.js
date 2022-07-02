
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

	//anime.js
	anime({
		targets: '.welcome',
		width: '60%', 
	   easing:'linear',
	   direction: 'alternate',
	   scale: 1,
	   loop: 3
	  });

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
		(timeEnd != null && timeEnd < timeStart) ? swal("UUPS!", "The check-out  must be a date that pass after check-in!", "error") :
		console.log(timeStart, timeEnd) //ver fechas en consola
		}
		//validacion
	    boton.addEventListener('click', (e) => {
		e.preventDefault()
		obtenerInvitados();
		if (diasDesc.value === "")  {
		swal("upps!", "...the dates of check-in and check-out are required ", "error");
		} else if (document.getElementById("invitados").value === "Open this select menu") {
		swal("upps!", "...Please indicate the number of guests. :)", "error");
		}else{
		window.location.href = "reserva.html"
		}	
	
	})
	
//creo variable  que tendra los datos de la api
let divPadre = document.getElementById('resultPerson');
//leo la api
	fetch('https://randomuser.me/api/?results=3&nat=AU,BR,CA')
	  .then(response => response.json()) // como fetch me devuelve un objeto Response, tengo que decir que el cuerpo de lo devuelva como JSON
	  .then(user => {
		user.results.forEach(person => {
			const div = document.createElement('div') //creo un elemento
            divPadre.append(div)
		//muestro los usuarios
		div.innerHTML = ` <div class="col card-contenido">
			<div class="card">
			<div class="card-body">
			  <img src="${person.picture.large}" class="card-img-top" alt="...">
			  <h5 class="card-title">${person.name.first}, ${person.name.last}</h5>
			  <small>${person.location.city}, ${person.location.country}</small>
				 <br>
	          <span class="card-star"><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span><i class="fa fa-star" aria-hidden="true"></i></span></span>
			  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			</div>
		  </div>
		</div>`
			
		});
});


// el siguiente codigo  me da error CORS request not HTTP al intentar llamar un jsonlocal

fetch("data.JSON")
.then((res) => {res.json()})
.then((data) => {console.log(data)})

// let roomEquip = document.getElementById('roomEquipment');
// fetch( 'datos.json')
// .then((resp)=> resp.json())
// .then ( (data) => console.log(data))
// const equipments = data =>{
// data.forEach((producto) => {
// const listaEquipos = document.createElement('li')
// listaEquipos.innerHTML = `${producto.nombre} y ${producto.equipments}`

// roomEquip.append(listaEquipos)

// });
// };
	},
	false
)



