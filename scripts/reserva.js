
let habitacion = [
	{
		id : 1,
		nombre : "Standard",
		precio : 40,
		equipments : ['televisor','baño', 'wifi','refrigerador', 'electric kettle']
	},
	{
		id : 2,
		nombre : "double",
		precio : 50,
		equipments : ['televisor','baño', 'wifi','refrigerador', 'electric kettle','paseos a caballo','spa' ]
	},
	{
		id : 3,
		nombre : "familiar",
		precio : 60,
		equipments : ['televisor','baño', 'wifi','refrigerador', 'electric kettle','paseos a caballo','spa','skii', 'pase gratis a actividades' ]
	},
	{
		id : 4,
		nombre : "suit",
		precio : 90,
		equipments : ['televisor','baño', 'wifi','refrigerador', 'electric kettle','vista panoramica','paseos a caballo','spa','skii', 'pase gratis a actividades', 'desayuno incluido' ]
	},
]

window.onload=function(){
let datosCheckIn = localStorage.getItem("checkin")
document.getElementById("check-in-datos").innerHTML = datosCheckIn;
let datosCheckOut = localStorage.getItem("checkout")
document.getElementById("check-out-datos").innerHTML = datosCheckOut;
let diasTotal = localStorage.getItem("dateTotal")
document.getElementById("dias-datos").innerHTML = diasTotal;
};

// anime.js
anime({
	targets: '.titulo-elige',
	left: '240px',
	backgroundColor: '#FFF',
	width: '50%', 
	easing: 'easeInOutQuad',
	delay: 6000,
	direction: 'reverse',
	loop: true
  });

function selectCabaña(id){
let i = 0
while(!(habitacion[i].id == id)){
i++
}
document.getElementById("respuesta").innerText = "Total: $" + habitacion[i].precio * localStorage.getItem("invitados") * localStorage.getItem("dateTotal")  
document.getElementById("hab-nombre").innerText = habitacion[i].nombre

};

function continuarReservacion(){
let i = 0
 if (document.getElementById("hab-nombre").innerText ==! habitacion[i].nombre){
	swal("ups! one step left to do :D")
	.then(() => {
		swal(`Please, click on the button "Book" to select the wooden cottages of your preference `);
	  });
 } else {
 document.getElementById('payment').style.display = 'block'

};
};




// window.onload=function(){
// let nombre = document.getElementById("name");
// let apellido = document.getElementById("last-name");
// let address = document.getElementById("inputAddress")
// let city = document.getElementById("inputCity")
// let email = document.getElementById("email")
// let phone = document.getElementById("phone")
// let postal = document.getElementById("postal-code")
// let state = document.getElementById("state")
// let userName = document.getElementById("username")
// let cardNumber = document.getElementById("card-number")
// let mm = document.getElementById("mm")
// let yy = document.getElementById("yy")
// let expiration = document.getElementById("expiration")
// const send = document.getElementById("send")
// }






// window.onload=function(){