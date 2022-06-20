
let habitacion = [
	{
		id : 1,
		nombre : "basica",
		precio : 40,
		equipments : ['televisor','baño', 'wifi','refrigerador', 'electric kettle']
	},
	{
		id : 2,
		nombre : "doble",
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
function selectCabaña(id){
let i = 0
while(!(habitacion[i].id == id)){
i++
}
document.getElementById("respuesta").innerText = "Total: $" + habitacion[i].precio * localStorage.getItem("invitados") * localStorage.getItem("dateTotal")  
document.getElementById("hab-nombre").innerText = habitacion[i].nombre
let datosCheckIn = localStorage.getItem("checkin")
document.getElementById("check-in-datos").innerHTML = datosCheckIn;
let datosCheckOut = localStorage.getItem("checkout")
document.getElementById("check-out-datos").innerHTML = datosCheckOut;
let diasTotal = localStorage.getItem("dateTotal")
document.getElementById("dias-datos").innerHTML = diasTotal;
}
