let inputSearch = document.querySelector(".input");
let searchBtn = document.querySelector(".search-image-container");
let city = document.querySelector(".city");
let temperature = document.querySelector(".temp");
let weatherIcon = document.querySelector(".weather-icon");
let weatherDesc = document.querySelector(".weather-desc");
let humidity = document.querySelector(".humidity-attribute");
let wind = document.querySelector(".wind-attribute");
let pressure = document.querySelector(".pressure-attribute");
let feelsLike = document.querySelector(".feels-like-attribute");
let errorMessage = document.querySelector(".error-message");
let crossIcon = document.querySelector(".cross-icon");
let apiKey = "7aef785b3ed7a6b05cb30e446de662db";

inputSearch.focus();

const fetchWeather = async () => {
  try {
    let citySearch = inputSearch.value || "New York";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&lang=en&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === "404" || data.cod === 404) {
      errorMessage.style.right = "20px";
      setTimeout(() => {
        errorMessage.style.right = "-320px";
      }, 3000);
      return;
    }
    let { main, name, weather, wind: windData, sys } = data;
    city.innerText = `${name} , ${sys?.country}`;
    temperature.innerText = `${main?.temp} °C`;
    weatherDesc.innerText = weather[0]?.main;
    weatherIcon.src = `./assets/${weather[0]?.main}.png`;
    feelsLike.innerText = `${main?.feels_like} °C`;
    humidity.innerText = `${main?.humidity} %`;
    pressure.innerText = `${main?.pressure} hpa`;
    wind.innerText = `${windData?.speed} m/s`;
  } catch (err) {
    alert("An error occurred while fetching the weather data.");
    console.error(err);
  }
};

searchBtn.addEventListener("click", fetchWeather);

inputSearch.addEventListener("input", () => {
  if (inputSearch.value.length > 0) {
    crossIcon.style.visibility = "visible";
  } else {
    crossIcon.style.visibility = "hidden";
  }
});
crossIcon.addEventListener("click", () => {
  inputSearch.value = "";
  crossIcon.style.visibility = "hidden";
  inputSearch.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchWeather();
  }
});

fetchWeather();
