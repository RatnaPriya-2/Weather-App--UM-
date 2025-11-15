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

// Automatically focus on input when page loads
inputSearch.focus();

const fetchWeather = async () => {
  try {
    // If input is empty, default to "New York"
    let citySearch = inputSearch.value || "New York";

    // API request URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&lang=en&appid=${apiKey}`;

    // Fetching weather data
    let response = await fetch(url);
    let data = await response.json();

    // Show error message if city is not found
    if (data.cod === "404" || data.cod === 404) {
      errorMessage.style.right = "20px";
      setTimeout(() => {
        errorMessage.style.right = "-320px";
      }, 2000);
      return; // Stop execution
    }

    // Destructure required data
    let { main, name, weather, wind: windData, sys } = data;

    // Update UI with weather data
    city.innerText = `${name} , ${sys?.country}`;
    temperature.innerText = `${main?.temp} °C`;
    weatherDesc.innerText = weather[0]?.main;
    weatherIcon.src = `./assets/${weather[0]?.main}.png`;
    feelsLike.innerText = `${main?.feels_like} °C`;
    humidity.innerText = `${main?.humidity} %`;
    pressure.innerText = `${main?.pressure} hpa`;
    wind.innerText = `${windData?.speed} m/s`;
  } catch (err) {
    // If network/API fails
    alert("An error occurred while fetching the weather data.");
    console.error(err);
  }
};

// Click search button → fetch weather
searchBtn.addEventListener("click", fetchWeather);

// Show cross icon only when user types
inputSearch.addEventListener("input", () => {
  if (inputSearch.value.length > 0) {
    crossIcon.style.visibility = "visible";
  } else {
    crossIcon.style.visibility = "hidden";
  }
});

// Clear input when clicking cross icon
crossIcon.addEventListener("click", () => {
  inputSearch.value = "";
  crossIcon.style.visibility = "hidden";
  inputSearch.focus();
});

// Press Enter → fetch weather
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchWeather();
  }
});

// Fetch weather by default when page loads
fetchWeather();
