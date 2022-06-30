
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

// el siguiente codigo comentado es una ruta relativa me da error CORS request not HTTP

let roomEquip = document.getElementById('roomEquipment');
fetch('datos.json')
.then((resp)=> resp.json())
.then ( (data) => equipments(data))
const equipments = data =>{
data.forEach((producto) => {
const listaEquipos = document.createElement('li')
listaEquipos.innerHTML = `${producto.nombre} y ${producto.equipments}`

roomEquip.append(listaEquipos)

});
};



