let now = new Date();
console.log(now);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Thursday",
  "Saturday"
];

let currentDay = days[now.getDay()];
console.log(currentDay);

let presentDay = document.querySelector(".day");
presentDay.innerHTML = currentDay;

let hours = now.getHours();
console.log(hours);

let minutes = now.getMinutes();
console.log(minutes);

let currentTime = document.querySelector(".date");
currentTime.innerHTML = hours + ":" + minutes;

function searchButton(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#field");

  let city = document.querySelector("#ccity");
  city.innerHTML = searchResult.value;
}

let form = document.querySelector("#searching");
form.addEventListener("submit", searchButton);

function showTemperature(response) {
  let searchResult = response.main.data.temperature;
  console.log(searchResult);

  let currentTemp = document.querySelector(".class");
  currentTemp.innerHTML = searchResult;
  let apiKey = "9219390dd657b91d9e5236012585e598";
  let cityName = document.querySelector("#field.value");
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&unit=metric";
}
axios.get(apiUrl).then(showTemperature);
