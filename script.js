let form = document.querySelector("form");
let search = document.querySelector("#search");
let temp = document.querySelector("p");
let city = document.querySelector("h5");

const getWeather = async (cityComing) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cbca8e9e19msh913fa150994a891p1d1b29jsnc33e2db31fbe",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const URL =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
    cityComing;

  fetch(URL, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerText = response.temp;
      city.innerText = cityComing;
    })
    .catch((err) => console.error(err));
};

form.addEventListener("submit", function (e) {
  console.log(search.value);
  e.preventDefault();
  getWeather(search.value);
});
