const API_KEY = "c70646a23d6c4a7b45776063137d4e99";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector(".weather__city");
        const weather = document.querySelector(".weather__weather");
        const temp = document.querySelector(".weather__temp");
        city.innerText = data.name;
        const weatherValue = data.weather[0].main;
        temp.innerText = `${Math.floor(data.main.temp)}°`;

        let weatherIconClassName;
        switch (weatherValue) {
            case 'Clear':
                weather.classList.add('fa-solid', 'fa-sun');
                break;
            case 'Clouds':
                weather.classList.add('fa-solid', 'fa-cloud');
                break;
            case 'Rain':
                weather.classList.add('fa-solid', 'fa-umbrella');
                break;
            case 'Drizzle':
                weather.classList.add('fa-solid', 'fa-cloud-rain');
                break;
            case 'Thunderstorm':
                weather.classList.add('fa-solid', 'fa-cloud-bolt');
                break;
            case 'Snow':
                weather.classList.add('fa-regular', 'fa-snowflake');
                break;
            default:
                weather.classList.add('fa-solid', 'fa-sun');
        }
    });
}

function onGeoError(){
    alert("위치 정보를 얻는 데 실패했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);