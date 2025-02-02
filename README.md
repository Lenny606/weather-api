# Weather App

## Overview

This Weather App is a simple, user-friendly web application that allows users to check the current weather conditions for any city. It uses the OpenWeatherMap API to fetch real-time weather data and presents it in a clean, easy-to-read format.

## Features

- City-based weather search
- Displays current temperature, feels-like temperature, humidity, wind speed, and weather description
- Responsive design suitable for both desktop and mobile devices
- Error handling for invalid city names or API issues

## Technologies Used

- HTML5
- CSS3 (inline styles for simplicity)
- JavaScript (ES6+)
- Fetch API for making HTTP requests
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a text editor.
3. Replace `'YOUR_API_KEY_HERE'` in the JavaScript section with your actual OpenWeatherMap API key.
4. Save the file and open it in a web browser.
5. Enter a city name in the input field and click "Get Weather" or press Enter.

## Getting an API Key

To use this Weather App, you need an API key from OpenWeatherMap. Here's how to get one:

1. Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account.
2. Once logged in, go to your API keys section.
3. Generate a new API key.
4. Copy this key and replace `'YOUR_API_KEY_HERE'` in the `index.html` file.

## Project Structure

- `index.html`: Contains the HTML structure, inline CSS, and JavaScript for the application.

## API Endpoints Used

- Geocoding API: `http://api.openweathermap.org/geo/1.0/direct`
  - Used to convert city names to geographic coordinates.
- Current Weather Data API: `https://api.openweathermap.org/data/2.5/weather`
  - Used to fetch current weather data based on coordinates.

## JavaScript Functionality

The app includes the following key functions:

- `getWeather(city)`: Fetches weather data for the given city.
- `displayWeather(data)`: Updates the UI with the fetched weather data.

It also includes event listeners for the "Get Weather" button and Enter key press in the input field.

## Styling

The project uses inline CSS for styling, including:
- Responsive design with a maximum width for larger screens
- Centered content layout
- Styled input and button with hover effects
- Clean display of weather information

## Learning Objectives

This project demonstrates:
1. How to interact with external APIs using JavaScript
2. How to handle and display data received from an API
3. Basic error handling in API requests
4. How to create a responsive design with CSS
5. How to use event listeners for improved user interaction

## Extending the Project

Here are some ideas to enhance this project:

1. Add a 5-day forecast
2. Implement geolocation to automatically detect the user's city
3. Add weather icons to represent different weather conditions
4. Create a toggle for switching between Celsius and Fahrenheit
5. Add more detailed weather information (e.g., pressure, visibility)
6. Implement a dark mode toggle

## Resources

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [MDN Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info: Network Requests](https://javascript.info/network)

Enjoy using the Weather App!