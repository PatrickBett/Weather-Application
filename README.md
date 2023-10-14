# Weather App
This is a simple weather app that allows users to search for the current weather in a specific city. It utilizes the OpenWeatherMap API to fetch weather data and displays it on the webpage.

## How to Use
Enter the name of the city you want to know the weather for in the input field.
Click the "Search" button or press "ENTER" to fetch and display the weather data.
The app will show the city name, current date, weather conditions, temperature, maximum and minimum temperature, wind speed, humidity, and pressure.
The app also displays the sunrise and sunset times for the specified city.
## Technologies Used
HTML: Structure of the webpage.
CSS: Styling for the webpage elements.
JavaScript: Logic for fetching weather data and displaying it dynamically on the webpage.
OpenWeatherMap API: Used to fetch weather data based on the city name provided by the user.
## Code Explanation
The JavaScript code provided in this repository fetches weather data from the OpenWeatherMap API and dynamically displays it on the webpage. Here's a brief overview of the key functions and features in the code:

fetchData(cityName): Function to fetch weather data for the specified city using the OpenWeatherMap API.

getCityName(event): Event listener function that gets the city name from the input field and calls the fetchData function to fetch weather data when the user clicks the "Search" button or presses "ENTER".

displayData(weatherdata): Function to display the fetched weather data on the webpage. It updates various elements on the webpage with the relevant weather information.

## Event Listeners:

Click: Click event listener is added to the search button to trigger the getCityName function when clicked.

DOMContentLoaded: Event listener to toggle the visibility of the weather container. When the page loads, the weather container is hidden. Clicking the search button will display the weather container.

Mouseover: An event listener is added to the divweatherContainer element, listening for the mouseover event. When the user hovers over the element, the provided function is executed.

Mouseout: An event listener is added to the divweatherContainer element, listening for the mouseout event. When the user moves the mouse away from the element, the provided function is executed

### Important Note
Please make sure to replace '4ac86df4f18613e348b72e2f16a8bbaf' with your actual OpenWeatherMap API key in the apiKey variable to make API requests successfully.