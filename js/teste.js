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

// // obter a URL atual da página
// const urlAtual = window.location.href;

// // obter a URL da imagem atual, se ela existir no DOM
// const urlImagemAtual = document.querySelector('img')?.src;

// // exibir as URLs no console
// console.log('URL atual:', urlAtual);
// console.log('URL da imagem atual:', urlImagemAtual);