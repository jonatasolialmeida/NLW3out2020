// create map
const map = L.map("mapid").setView([-22.7447868, -43.475422], 16);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon  layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo  layer
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da ultima imagem adicionar
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // limpar o campo antes de adicionar ao container de imagens
  newFieldContainer.children[0].value = "";
  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // limpar o valor do campo clicando no (X)
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o valor do campo
  span.parentNode.remove();
}

// troca do sim e não
function toggleSelect(event) {

    // retirar a class .active (dos botões)
    document.querySelectorAll(".button-select button")
    .forEach(function(button) { // ou // .forEach( button => button.classList.remove('active') )  // Função avançada
        button.classList.remove('active')
    })
    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

// atualizar o meu input hidden com o valor selecionado
const input = document.querySelector('[name="open_on_weekends"]')

input.value = button.dataset.value
// verificar se sim ou não

}

//  Estudar uma forma de lembrar ao usuário, que el precisa clicar no mapa 
// para enviar o formulário 

// para isso, preciso validar se lat e lng estao preenchidos
// segue abaixo inicio de código

function validate(event) {

const needsLatAndLng = false;
if(needsLatAndLng) {// se for verdadeiro(true), vai aparecer a mensagem, se for falso(falze) vai enviar
event.preventDefault()
  alert('Selecione um ponto no mapa')

  // pode ser que tenha alguma coisa a ver com o código abaixo
  const fields = req.body

  // validar se todos os campos estão preenchidos
  // if(Object.values(fields).includes('')) {
  //     return res.send('Todos os campos devem ser preenchidos!')
  // }

  // o cdigo acima foi usado em pages.js

}
}

