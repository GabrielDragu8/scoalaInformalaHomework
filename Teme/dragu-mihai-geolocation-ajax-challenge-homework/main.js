const findMyLocationWeather = () => {
  const displayWeather = (data) => {
    document.querySelector('.title').innerText = 'Weather in you area';
    const { temp, humidity, wind_speed} = data.current;
    const { icon ,description} = data.current.weather[0];
    console.log(icon,description,temp,humidity,wind_speed);
    document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    const fahrenheit = (temp*9/5) + 32;
    document.querySelector('.temp').innerText = Math.round(temp) + "°C" + " / " + Math.round(fahrenheit) + "°F";
    document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
    document.querySelector('.wind-speed').innerText = "Wind speed: " + wind_speed + "km/h";
  }
  
  const succes = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=40548cc5b12a46ee9418e263dd707583`;
    fetch(apiUrl).then((response) => response.json()).then(data => {
      displayWeather(data);
      console.log(data);
    })
    .catch(error => {
      
      console.error('Error fetching weather data:', error);
    });
  }
  
  const error = () => {
    document.querySelector('.title').innerText = "If you don't want, then you don't want. :)";
    console.log('error');
  }
  navigator.geolocation.getCurrentPosition(succes, error);
}

findMyLocationWeather();






