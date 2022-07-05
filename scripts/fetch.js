//index section "users calification"
let divPadre = document.getElementById('resultPerson');
	fetch('https://randomuser.me/api/?results=3&nat=AU,BR,CA')
	  .then(response => response.json()) // lo devuelvo como JSON
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

//----//
//JSON local "equipments"
let roomEquip = document.getElementById('roomEquipment');
fetch('data.JSON')
  .then(function (resp) {
    return resp;
  })
  .then(function (data) {
    return data.json();
  })
  .then(function (Normal) {
    const html = Normal.map(
      (data) => {
	  const listaEquipos = document.createElement('div')
	  listaEquipos.innerHTML += `<div class="container accordion accordion-flush" id="accordionFlushExample">
	  <div class="accordion-item">
		<h2 class="accordion-header" id="flush-headingOne">
		  <button class="accordion-button center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
			${data.nombre}
		  </button>
		</h2>
		<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
		  <div class="accordion-body services-body">${data.equipments[0]} <i class="fa-solid fa-people-robbery"></i></div>
          <div class="accordion-body">${data.equipments[1]}  <i class="fa-solid fa-bed"></i></div>
          <div class="accordion-body">${data.equipments[2]} <i class="fa-solid fa-house-chimney-window"></i></div>
          <div class="accordion-body ">${data.services} <i class="fa-solid fa-person-skiing"></i></div>
		</div>
	  </div>
	</div>
	 `
	roomEquip.append(listaEquipos)
	   });
  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });

//----//
//enviar los datos del formulario  usando EMAILJS
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
