// feito por Luis Henrique Sousa Brasil

window.addEventListener("load", gerarDatas);

function gerarDatas() {
  const datas = [];
  for (var i = 0; i < 8; i++) {
    const data = gerarDataAleatoria(new Date(1995, 6, 1), new Date());
    datas.push(data);
  }

  datas.forEach(function (data) {
    enviarApiRequest(data);
  });
  // console.log(datas);
}
function gerarDataAleatoria(start, end) {
  var d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

async function enviarApiRequest(date) {
  let API_KEY = "AswWGpGZ2t1gxVraiqmeC7P3DfOaZiHQnqJyiyUV";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
  );
  let data = await response.json();
  // console.log(data);
  useApiData(data);
}

const row = document.querySelector(".row");
function useApiData(data) {
  // console.log(data);
  let url = "";
  if (data.media_type == "video") {
    url = "https://apod.nasa.gov/apod/calendar/S_220201.jpg";
  } else {
    url = data.url;
  }

  const column = document.createElement("div");
  column.classList.add("column");

  column.innerHTML = `
    <div class="card" onclick="abreModal(this)">
        <img id="myBtn" src="${url}" alt="${data.title}">
     
      <div class="title">
        <h3>Title: </h3>
        <h3>" ${data.title} "</h3>
      </div>
      <div class="date">
        <h4>Date: </h4>
        <h4 id="date">${data.date}</h4>
      </div>
    </div>
  `;
  row.appendChild(column);

  column.addEventListener("click", function () {
    const date = this.querySelector("#date").textContent;

    // console.log(date);
    buscarInformacoesImg(date);
  });
}

//funções para preenche o modal aberto com as informações da imagem e data selecionada
function buscarInformacoesImg(date) {
  var req = new XMLHttpRequest();
  const dateTime = date;
  var url = `https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk&date=${dateTime}`;

  req.open("GET", url);
  req.send();

  req.addEventListener("load", function () {
    if (req.status == 200 && req.readyState == 4) {
      var response = JSON.parse(req.responseText);
      colocarInformacoesNoModal(response);
    }
  });
}

function clearFields() {
  document.getElementById("modal-img").src = "";
  document.getElementById("info-title").textContent = "";
  document.getElementById("info-date").textContent = "";
  document.getElementById("info-explanation").textContent = "";
  document.getElementById("info-copyright").textContent = "";
}

function colocarInformacoesNoModal(response) {
  // console.log(response);
  let url = "";
  if (response.media_type == "video") {
    url = response.url;
    document.getElementById("modal-img").style.display = "none";
    document.getElementById("video").src = url;
  } else {
    url = response.hdurl;
    document.getElementById("video").style.display = "none";
    document.getElementById("modal-img").src = url;
  }

  document.getElementById("info-title").textContent = response.title;
  document.getElementById("info-date").textContent = response.date;
  document.getElementById("info-explanation").textContent =
    response.explanation;
  document.getElementById("info-copyright").textContent =
    response.copyright ?? "Copyright não fornecido pela API";
}

let btnReiniciar = document.querySelector("#btn-reload");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});

// modal close and open

const modal = document.getElementById("modal");
const closeModalButton = document.querySelector(".close");

function abreModal() {
  modal.style.display = "block";
}

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
  clearFields();
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    clearFields();
  }
});

// feito por Luis Henrique Sousa Brasil
