function gerarDataAleatoria() {
  // Obtenha um ano aleatório entre 1970 e o ano atual
  const anoAleatorio =
    Math.floor(Math.random() * (new Date().getFullYear() - 2001 + 1)) + 2001;

  // Obtenha um mês aleatório entre 0 e 11 (janeiro é 0)
  const mesAleatorio = Math.floor(Math.random() * 12);

  // Obtenha um dia aleatório entre 1 e 28/30/31, dependendo do mês
  const diaAleatorio =
    Math.floor(
      Math.random() * new Date(anoAleatorio, mesAleatorio + 1, 0).getDate()
    ) + 1;

  // Crie uma nova data com os valores aleatórios
  const dataAleatoria = new Date(anoAleatorio, mesAleatorio, diaAleatorio);

  // Armazene a data em uma variável
  const minhaData = dataAleatoria.toISOString().substring(0, 10);

  // Retorne a data
  return minhaData;
}

// console.log(gerarDataAleatoria());

var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
    document.getElementById("copyright").textContent = response.copyright;
  }
})

// const container = document.querySelector('.container');
// const linkNasaImagem = "https://source.unsplash.com/random/";
// const rows = 2;

// for(let i = 0; i < rows * 4; i++) {
//     const img = document.createElement('img');
//     img.src = `${linkNasaImagem}${getRandomSize()}`;
//     container.appendChild(img);
// }

// function getRandomSize() {
//     return `${getRandomNr()}x${getRandomNr()}`;
// }

// function getRandomNr() {
//     return Math.floor(Math.random() * 10) + 300;
// }

// let btnReiniciar = document.querySelector("#btn-reload");
// btnReiniciar.addEventListener("click", function () {
//     location.reload();
// });