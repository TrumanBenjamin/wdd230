const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('header nav');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// Weather API
function fetchWeatherData() {

    const apiKey = '87301d110ab031ce1e2589211b8f3ddb';
    const latitude = 43.8231;
    const longitude = -111.7924; 

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureKelvin = data.main.temp;
            const temperatureFahrenheit = (temperatureKelvin - 273.15) * 9/5 + 32;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

            const weatherHtml = `
                <p>Temperature: ${temperatureFahrenheit.toFixed(1)}°F</p>
                <p>Description: ${description}</p>
                <img src="${iconUrl}" alt="Weather Icon">
            `;

            document.getElementById('weatherInfo').innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = '<p>Error fetching weather data</p>';
        });
}
window.onload = fetchWeatherData;

