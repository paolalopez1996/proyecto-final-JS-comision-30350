
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
let guest = localStorage.getItem("invitados")
document.getElementById("guests").innerHTML = guest;
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

//saco el presupuesto total segun el tipo de cabaña
function selectCabaña(id){
let i = 0
while(!(habitacion[i].id == id)){
i++
}
document.getElementById("respuesta").innerText = "Total: $" + habitacion[i].precio * localStorage.getItem("invitados") * localStorage.getItem("dateTotal")  
document.getElementById("hab-nombre").innerText = habitacion[i].nombre

};

//aparece el formulario de pago una vez seleccionado el tipo de cabaña
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