const search = document.querySelector('.search-bar');
const locationBtn = document.querySelector('.locationBtn');
const API_KEY = 'b7270111b906f7d2166340066ffd8c8f';


document.querySelector('.weather-box').style.display = 'none';
async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.querySelector('.cityname').textContent = data.name;
        document.querySelector('.chancesofrain').innerHTML = `<p>${data.weather[0].description}</p>`
        document.querySelector('.temp').innerHTML = `<p>${data.main.temp}</p>`+'°C';
        document.querySelector('.wind').textContent = data.wind.speed + ' km/h';
        document.querySelector('.humadity').textContent = data.main.humidity + '%';
        document.querySelector('.weatherimg').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Optionally display an error message to the user
        // location.textContent = 'Unable to retrieve weather data.';
    }
}


async function getweatherByCords(lat, lon){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.querySelector('.cityname').textContent = data.name;
        document.querySelector('.chancesofrain').innerHTML = `<p>${data.weather[0].description}</p>`
        document.querySelector('.temp').innerHTML = `<p>${data.main.temp} °C</p>`;
        document.querySelector('.wind').textContent = data.wind.speed + ' km/h';
        document.querySelector('.humadity').textContent = data.main.humidity + '%';
        document.querySelector('.weatherimg').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Optionally display an error message to the user
        // location.textContent = 'Unable to retrieve weather data.';
    }

}



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        location.textContent = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    getweatherByCords(position.coords.latitude , position.coords.longitude);
}


locationBtn.addEventListener('click', ()=>{
    getLocation()
    search.value = '';
    document.querySelector('.weather-box').style.display = 'block';

});

search.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { // Use e.key for better readability
        const searchValue = search.value;
        getWeather(searchValue);
        document.querySelector('.weather-box').style.display = 'block';
    }
});
