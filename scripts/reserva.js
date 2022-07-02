
let habitacion = [
	{
		id : 1,
		nombre : "Standard",
		precio : 40,
	},
	{
		id : 2,
		nombre : "double",
		precio : 50,
	},
	{
		id : 3,
		nombre : "family",
		precio : 60,
	},
	{
		id : 4,
		nombre : "Big family",
		precio : 90,
	},
]
//mostrar datos en pantalla
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

//enviar los datos del formulario  con emailJS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_6igvx0m';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Information';
	  swal('Sent!');;
    }, (err) => {
      btn.value = 'Send Information';
      alert(JSON.stringify(err));
    });
});

let datosForm = document.getElementById('agregarDatos')
let URL = 'https://coder30350-default-rtdb.firebaseio.com/'
datosForm.addEventListener('submit', (e) =>{
e.preventDefault
fetch(URL + `formulario.json`,{
method: 'POST',
body: JSON.stringify({name:'standard'}),
headers:{'Content-Type': 'application/json;charset=UTF-8'}
})
.then((res) => {res.json()})
.then((data) => {console.log(data)})
})



