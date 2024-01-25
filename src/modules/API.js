const getAllWeather = async (location) => {
  const key = '219ec63ed2a0417982e43106241901';

  const unformattedWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
  );
  const weather = await unformattedWeather.json();

  return weather;
};

const getWeather = async (location) => {
  const allWeather = await getAllWeather(location);
  const weather = {};

  weather.tempC = allWeather.current.temp_c;
  weather.tempF = allWeather.current.temp_f;
  weather.feelsLikeC = allWeather.current.feelslike_c;
  weather.feelsLikeF = allWeather.current.feelslike_f;
  weather.humidity = allWeather.current.humidity;
  weather.windKPH = allWeather.current.wind_kph;
  weather.windMPH = allWeather.current.wind_mph;
  weather.condition = allWeather.current.condition.text;
  weather.icon = allWeather.current.condition.icon;
  weather.city = allWeather.location.city;
  weather.region = allWeather.location.region;
  [, weather.time] = allWeather.current.last_updated.split(' ');

  console.log(weather);

  return weather;
};

const changeWeather = (location) => {
  getWeather(location).then((weather) => {
    const icon = document.querySelector('.current .icon');
    const temperatureC = document.querySelector('.current .temperatureC');
    const temperatureF = document.querySelector('.current .temperatureF');

    const condition = document.querySelector('.current .condition');
    const feelsLikeC = document.querySelector('.current .feelsLikeC');
    const feelsLikeF = document.querySelector('.current .feelsLikeF');
    const humidity = document.querySelector('.current .humidity');
    const windKPH = document.querySelector('.current .windKPH');
    const windMPH = document.querySelector('.current .windMPH');

    icon.src = weather.icon;
    temperatureC.textContent = `${weather.tempC}°C`;
    temperatureF.textContent = `${weather.tempF}°F`;

    condition.textContent = weather.condition;
    feelsLikeC.textContent = `Feels Like: ${weather.feelsLikeC}°C`;
    feelsLikeF.textContent = `Feels Like: ${weather.feelsLikeF}°F`;
    humidity.textContent = `Humidity: ${weather.humidity}%`;
    windKPH.textContent = `Wind: ${weather.windKPH}KPH`;
    windMPH.textContent = `Wind: ${weather.windMPH}MPH`;
  });
};

export default changeWeather;
