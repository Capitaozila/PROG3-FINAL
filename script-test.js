let searchButton = document.querySelector("#btn-search");

searchButton.addEventListener("click", () => {
  sendApiRequest();
});

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

console.log(gerarDataAleatoria());

async function sendApiRequest() {
  let API_KEY = "AswWGpGZ2t1gxVraiqmeC7P3DfOaZiHQnqJyiyUV";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${gerarDataAleatoria()}`
  );
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  // document.querySelector("#content").innerHTML += data.explanation
  document.querySelector("#content").innerHTML += `<img src="${data.url}">`;
  document.querySelector("#content").innerHTML += data.title;
  document.querySelector("#content").innerHTML += data.date;
}

let btnReiniciar = document.querySelector("#btn-reload");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});