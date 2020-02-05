const form = document.querySelector(".form");
const userInput = [];

form.addEventListener("submit", getWeather => {
  getWeather.preventDefault();

  userInput = getWeather.target.city.value;

  form.reset();
});

let result = axios
  .get(
    "api.openweathermap.org/data/2.5/weather?q=userInput?api_key=<e04949a56ead3435fef7d751c5e2d4a5>"
  )
  .then(response => {
    shows = response.data;
    console.log(shows);
    addData(shows);
  });
