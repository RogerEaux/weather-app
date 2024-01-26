const getAllWeather = async (location) => {
  const key = '219ec63ed2a0417982e43106241901';

  const unformattedWeather = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`,
  );
  const weather = await unformattedWeather.json();

  console.log(weather);
  return weather;
};

const getCurrentWeather = (allWeather) => {
  const current = {};

  [, current.time] = allWeather.current.last_updated.split(' ');
  current.tempC = allWeather.current.temp_c;
  current.tempF = allWeather.current.temp_f;
  current.feelsLikeC = allWeather.current.feelslike_c;
  current.feelsLikeF = allWeather.current.feelslike_f;
  current.precipitation =
    allWeather.forecast.forecastday[0].hour[
      parseInt(current.time.slice(0, 2), 10)
    ].chance_of_rain;
  current.humidity = allWeather.current.humidity;
  current.windKPH = allWeather.current.wind_kph;
  current.windMPH = allWeather.current.wind_mph;
  current.condition = allWeather.current.condition.text;
  current.icon = allWeather.current.condition.icon;
  current.city = allWeather.location.name;
  current.region = allWeather.location.region;

  return current;
};

const getForecastWeather = (allWeather) => {
  const forecast = {};
  const forecastDays = 3;

  forecast.days = [];

  for (let i = 0; i < forecastDays; i += 1) {
    forecast.days.push({});
    forecast.days[i].icon =
      allWeather.forecast.forecastday[i].day.condition.icon;
    forecast.days[i].maxC = allWeather.forecast.forecastday[i].day.maxtemp_c;
    forecast.days[i].maxF = allWeather.forecast.forecastday[i].day.maxtemp_f;
    forecast.days[i].minC = allWeather.forecast.forecastday[i].day.mintemp_c;
    forecast.days[i].minF = allWeather.forecast.forecastday[i].day.mintemp_f;
    forecast.days[i].precipitation =
      allWeather.forecast.forecastday[i].day.daily_chance_of_rain;
    forecast.days[i].humidity =
      allWeather.forecast.forecastday[i].day.avghumidity;
    forecast.days[i].maxWindKPH =
      allWeather.forecast.forecastday[i].day.maxwind_kph;
    forecast.days[i].maxWindMPH =
      allWeather.forecast.forecastday[i].day.maxwind_mph;
  }

  return forecast;
};

const getWeather = async (location) => {
  const allWeather = await getAllWeather(location);
  const current = getCurrentWeather(allWeather);
  const forecast = getForecastWeather(allWeather);
  const weather = { current, forecast };

  return weather;
};

const changeCurrentMini = (weather) => {
  const icon = document.querySelector('.current .icon');
  const temperatureC = document.querySelector('.current .temperatureC');
  const temperatureF = document.querySelector('.current .temperatureF');
  const condition = document.querySelector('.current .condition');
  const fullLocation = document.querySelector('.current .location');
  const time = document.querySelector('.current .time');

  icon.src = weather.current.icon;
  temperatureC.textContent = `${weather.current.tempC}°C`;
  temperatureF.textContent = `${weather.current.tempF}°F`;
  condition.textContent = weather.current.condition;
  fullLocation.textContent = `${weather.current.city}, ${weather.current.region}`;
  time.textContent = weather.current.time;
};

const changeCurrentDetails = (weather) => {
  const feelsLikeC = document.querySelector('.current .feelsLikeC');
  const feelsLikeF = document.querySelector('.current .feelsLikeF');
  const precipitation = document.querySelector('.current .precipitation');
  const humidity = document.querySelector('.current .humidity');
  const windKPH = document.querySelector('.current .windKPH');
  const windMPH = document.querySelector('.current .windMPH');

  feelsLikeC.textContent = `Feels Like: ${weather.current.feelsLikeC}°C`;
  feelsLikeF.textContent = `Feels Like: ${weather.current.feelsLikeF}°F`;
  precipitation.textContent = `Precipitation: ${weather.current.precipitation}%`;
  humidity.textContent = `Humidity: ${weather.current.humidity}%`;
  windKPH.textContent = `Wind: ${weather.current.windKPH}KPH`;
  windMPH.textContent = `Wind: ${weather.current.windMPH}MPH`;
};

const changeForecastMaxMin = (weather) => {
  weather.forecast.days.forEach((day, index) => {
    const icon = document.querySelector(`.forecast .day${index} .icon`);
    const maxC = document.querySelector(`.forecast .day${index} .maxC`);
    const maxF = document.querySelector(`.forecast .day${index} .maxF`);
    const minC = document.querySelector(`.forecast .day${index} .minC`);
    const minF = document.querySelector(`.forecast .day${index} .minF`);

    icon.src = day.icon;
    maxC.textContent = `Max: ${day.maxC}°C`;
    maxF.textContent = `Max: ${day.maxF}°F`;
    minC.textContent = `Min: ${day.minC}°C`;
    minF.textContent = `Min: ${day.minF}°F`;
  });
};

const changeForecastDetails = (weather) => {
  weather.forecast.days.forEach((day, index) => {
    const precipitation = document.querySelector(
      `.forecast .day${index} .precipitation`,
    );
    const humidity = document.querySelector(`.forecast .day${index} .humidity`);
    const maxWindKPH = document.querySelector(
      `.forecast .day${index} .maxWindKPH`,
    );
    const maxWindMPH = document.querySelector(
      `.forecast .day${index} .maxWindMPH`,
    );
    precipitation.textContent = `Precipitation: ${day.precipitation}%`;
    humidity.textContent = `Humidity: ${day.humidity}%`;
    maxWindKPH.textContent = `Max wind: ${day.maxWindKPH}KPH`;
    maxWindMPH.textContent = `Max wind: ${day.maxWindMPH}MPH`;
  });
};

const changeWeather = (location) => {
  getWeather(location).then((weather) => {
    console.log(weather);
    changeCurrentMini(weather);
    changeCurrentDetails(weather);
    changeForecastMaxMin(weather);
    changeForecastDetails(weather);
  });
};

export default changeWeather;
