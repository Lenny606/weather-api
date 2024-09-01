
// const fs = require('fs');
// const path = require('/.env');

function loadEnv() {
    const envPath = path.resolve(process.cwd(), '.env');
    const envVars = {};

    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        const lines = envFile.split('\n');

        for (const line of lines) {
            const [key, value] = line.split('=');
            if (key && value) {
                envVars[key.trim()] = value.trim();
            }
        }
    } else {
        console.warn('.env file not found');
    }

    return envVars;
}
// const env = loadEnv();

const apiKey = '';
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');
const locationInput = document.getElementById('location-input');
const getWeatherButton = document.getElementById('get-weather');

const getWeather = async (city) => {
    const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    
    try {
        // First, get the coordinates for the city
        const geocodeResponse = await fetch(geocodeUrl);
        const geocodeData = await geocodeResponse.json();
        
        if (geocodeData.length === 0) {
            throw new Error('City not found');
        }

        const { lat, lon } = geocodeData[0];

        // Now get the weather data
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData)
        displayWeather(weatherData);
        errorMessage.textContent = '';
        
    } catch (e) {
        console.error(e);
        weatherInfo.innerHTML = '';
        errorMessage.textContent = `Error: ${e.message}`;
    }
};

const displayWeather = (data) => {
    weatherInfo.innerHTML = `
        <div class="weather-item"><span>Temperature:</span> <span>${data.main.temp}°C</span></div>
        <div class="weather-item"><span>Feels like:</span> <span>${data.main.feels_like}°C</span></div>
        <div class="weather-item"><span>Humidity:</span> <span>${data.main.humidity}%</span></div>
        <div class="weather-item"><span>Wind speed:</span> <span>${data.wind.speed} m/s</span></div>
        <div class="weather-item"><span>Weather:</span> <span>${data.weather[0].description}</span></div>
    `;
};

getWeatherButton.addEventListener('click', () => {
    const city = locationInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        errorMessage.textContent = 'Please enter a city name';
    }
});

locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeatherButton.click();
    }
});


