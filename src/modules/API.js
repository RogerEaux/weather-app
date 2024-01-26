const getAllWeather = async (location) => {
  const key = '219ec63ed2a0417982e43106241901';

  const unformattedWeather = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`,
  );
  const weather = await unformattedWeather.json();

  console.log(weather);
  return weather;
};

const getWeather = async (location) => {
  const allWeather = await getAllWeather(location);
  const weather = {};
  weather.current = {};

  weather.current.tempC = allWeather.current.temp_c;
  weather.current.tempF = allWeather.current.temp_f;
  weather.current.feelsLikeC = allWeather.current.feelslike_c;
  weather.current.feelsLikeF = allWeather.current.feelslike_f;
  weather.current.humidity = allWeather.current.humidity;
  weather.current.windKPH = allWeather.current.wind_kph;
  weather.current.windMPH = allWeather.current.wind_mph;
  weather.current.condition = allWeather.current.condition.text;
  weather.current.icon = allWeather.current.condition.icon;
  weather.current.city = allWeather.location.name;
  weather.current.region = allWeather.location.region;
  [, weather.current.time] = allWeather.current.last_updated.split(' ');
  weather.current.maxC = allWeather.forecast.forecastday[0].day.maxtemp_c;
  weather.current.maxF = allWeather.forecast.forecastday[0].day.maxtemp_f;
  weather.current.minC = allWeather.forecast.forecastday[0].day.mintemp_c;
  weather.current.minF = allWeather.forecast.forecastday[0].day.mintemp_f;

  return weather;
};

const changeWeather = (location) => {
  getWeather(location).then((weather) => {
    const icon = document.querySelector('.current .icon');
    const temperatureC = document.querySelector('.current .temperatureC');
    const temperatureF = document.querySelector('.current .temperatureF');
    const maxC = document.querySelector('.current .maxC');
    const maxF = document.querySelector('.current .maxF');
    const minC = document.querySelector('.current .minC');
    const minF = document.querySelector('.current .minF');
    const fullLocation = document.querySelector('.current .location');
    const time = document.querySelector('.current .time');

    const condition = document.querySelector('.current .condition');
    const feelsLikeC = document.querySelector('.current .feelsLikeC');
    const feelsLikeF = document.querySelector('.current .feelsLikeF');
    const humidity = document.querySelector('.current .humidity');
    const windKPH = document.querySelector('.current .windKPH');
    const windMPH = document.querySelector('.current .windMPH');

    icon.src = weather.current.icon;
    temperatureC.textContent = `${weather.current.tempC}°C`;
    temperatureF.textContent = `${weather.current.tempF}°F`;
    fullLocation.textContent = `${weather.current.city}, ${weather.current.region}`;
    maxC.textContent = `Max: ${weather.current.maxC}°C`;
    maxF.textContent = `Max: ${weather.current.maxF}°F`;
    minC.textContent = `Min: ${weather.current.minC}°C`;
    minF.textContent = `Min: ${weather.current.minF}°F`;
    time.textContent = weather.current.time;

    condition.textContent = weather.current.condition;
    feelsLikeC.textContent = `Feels Like: ${weather.current.feelsLikeC}°C`;
    feelsLikeF.textContent = `Feels Like: ${weather.current.feelsLikeF}°F`;
    humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    windKPH.textContent = `Wind: ${weather.current.windKPH}KPH`;
    windMPH.textContent = `Wind: ${weather.current.windMPH}MPH`;
  });
};

export default changeWeather;
