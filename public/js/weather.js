
let chosenLat; //Height
let chosenLon; //Width

const map = L.map("map").setView([0, 0], 0);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
        maxZoom:19,
    }
).addTo(map);

let marker;

map.on('click', e =>
{
    chosenLat = e.latlng.lat.toFixed(4);
    chosenLon = e.latlng.lng.toFixed(4);
    if (marker) marker.remove();
    marker = L.marker([chosenLat, chosenLon]).addTo(map);
    console.log(chosenLat, chosenLon);
});

async function fetchWeatherData(){
    try {
        const weatherReq = await fetch("http://localhost:3000/api/vaer/fetchWeather",
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ chosenLat, chosenLon })
            });
        const weatherRes = await weatherReq.json();
        console.log(weatherRes);
        const weatherDiv = document.getElementById('weatherData');
        weatherDiv.innerHTML = '';
        const weatherElement = document.createElement('div');
        weatherElement.className = 'vaer';
        weatherElement.style.display = "block";
        weatherElement.innerHTML =
            `
            <h1>Forecast</h1>
            <p>Time: ${weatherRes.vaerInfo.time}</p>
            <p>Temperature: ${weatherRes.vaerInfo.temperature}</p>
            <p>Weather: ${weatherRes.vaerInfo.next1hSymbol}</p>
            <p>Rain: ${weatherRes.vaerInfo.precipitationAmountNext1h}</p>
            <p>Wind speed: ${weatherRes.vaerInfo.windSpeed}</p>
            `;
        weatherDiv.appendChild(weatherElement);
    } catch (error) {
        console.log("could not retrieve weather data")
    }
}
