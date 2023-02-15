window.addEventListener('load', gerarDatas)

function gerarDatas(){
  const datas = []
  for(var i = 0; i < 8; i++){
    const data = gerarDataAleatoria()
    datas.push(data)

  }

  datas.forEach(function(data){
    sendApiRequest(data)
  })
  console.log(datas)


}


function gerarDataAleatoria() {
  // ANO
  const anoAleatorio =
    Math.floor(Math.random() * (new Date().getFullYear() - 2001 + 1)) + 2001;

  // MÊS
  const mesAleatorio = Math.floor(Math.random() * 12);

  // DIA
  const diaAleatorio =
    Math.floor(
      Math.random() * new Date(anoAleatorio, mesAleatorio + 1, 0).getDate()
    ) + 1;
  const dataAleatoria = new Date(anoAleatorio, mesAleatorio, diaAleatorio);
  const minhaData = dataAleatoria.toISOString().substring(0, 10);
  return minhaData;
}

// console.log(gerarDataAleatoria());

async function sendApiRequest(date) {
  let API_KEY = "AswWGpGZ2t1gxVraiqmeC7P3DfOaZiHQnqJyiyUV";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
  );
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  document.querySelector("#content").innerHTML += `<img src="${data.url}">`;
  document.querySelector("#content").innerHTML += data.title;
  document.querySelector("#content").innerHTML += data.date;
}

let btnReiniciar = document.querySelector("#btn-reload");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});