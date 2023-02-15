const container = document.querySelector(".container");
const linkNasaImagem = "https://source.unsplash.com/random/";
const rows = 2;

for (let i = 0; i < rows * 4; i++) {
  const img = document.createElement("img");
  img.src = `${linkNasaImagem}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

let btnReiniciar = document.querySelector("#btn-reload");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});
