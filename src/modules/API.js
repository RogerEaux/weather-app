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

  weather.temp_c = allWeather.current.temp_c;
  weather.temp_f = allWeather.current.temp_f;
  weather.feelsLike_c = allWeather.current.feelsLike_c;
  weather.feelsLike_f = allWeather.current.feelsLike_f;
  weather.humidity = allWeather.current.humidity;
  weather.wind_kph = allWeather.current.wind_kph;
  weather.wind_mph = allWeather.current.wind_mph;
  weather.condition = allWeather.current.condition.text;
  weather.icon = allWeather.current.condition.icon.substring(2);
  weather.name = allWeather.location.name;

  return weather;
};

export default getWeather;
