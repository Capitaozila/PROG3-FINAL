window.addEventListener("load", gerarDatas);

function gerarDatas() {
  const datas = [];
  for (var i = 0; i < 8; i++) {
    const data = gerarDataAleatoria(new Date(1995, 6, 1), new Date());
    datas.push(data);
  }

  datas.forEach(function (data) {
    sendApiRequest(data);
  });
  console.log(datas);
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

async function sendApiRequest(date) {
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
  console.log(data);
  let url = "";
  if (data.media_type == "video") {
    url = "https://apod.nasa.gov/apod/calendar/S_220201.jpg";
  } else {
    url = data.url;
  }

  const column = document.createElement("div");
  column.classList.add("column");

  column.innerHTML = `
    <div class="card">
        <img id="myBtn" src="${url}" alt="${data.title}">
     
      <div class="title">
        <h3>Name</h3>
        <h3>${data.title}</h3>
      </div>
      <div class="date">
        <h4>Date</h4>
        <h4 id="date">${data.date}</h4>
      </div>
    </div>
  `;
  row.appendChild(column);

  column.addEventListener("click", function () {
    const date = this.querySelector("#date").textContent;

    console.log(date);
  });
}

let btnReiniciar = document.querySelector("#btn-reload");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});
