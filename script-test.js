let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
  sendApiRequest();
});

async function sendApiRequest() {
  let API_KEY = "8700nxLyClJSqMNiE4xehxpNKRgfsTOP1oUhqS9o";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
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
