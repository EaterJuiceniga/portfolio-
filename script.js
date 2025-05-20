// Static weather data for demonstration
const weatherData = [
  {
    city: "New York",
    icon: "weather-sunny.svg",
    temp: "22°C",
    condition: "Sunny",
    humidity: "45%",
    wind: "10 km/h"
  },
  {
    city: "London",
    icon: "weather-cloudy.svg",
    temp: "16°C",
    condition: "Cloudy",
    humidity: "57%",
    wind: "8 km/h"
  },
  {
    city: "Tokyo",
    icon: "weather-rainy.svg",
    temp: "19°C",
    condition: "Rainy",
    humidity: "70%",
    wind: "13 km/h"
  }
];

let currentIndex = 0;

function updateWeatherUI(data) {
  document.querySelector('.weather-city').textContent = data.city;
  document.getElementById('weatherIcon').src = data.icon;
  document.getElementById('weatherIcon').alt = data.condition;
  document.getElementById('weatherTemp').textContent = data.temp;
  document.getElementById('weatherCondition').textContent = data.condition;
  document.getElementById('weatherHumidity').textContent = data.humidity;
  document.getElementById('weatherWind').textContent = data.wind;
}

document.getElementById('changeCity').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % weatherData.length;
  updateWeatherUI(weatherData[currentIndex]);
});

// Initial render
updateWeatherUI(weatherData[currentIndex]);