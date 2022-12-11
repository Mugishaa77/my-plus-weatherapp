let now = new Date ();

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


let presentDay = document.querySelector(".day");
presentDay.innerHTML = currentDay;

let hours = now.getHours();

let minutes = now.getMinutes();


let currentTime = document.querySelector(".date");
currentTime.innerHTML = hours + ":" + minutes;

function search(event) {
  event.preventDefault();
  let apiKey = "9219390dd657b91d9e5236012585e598";
  let cityName = "Nairobi";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

}

  