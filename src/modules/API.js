const getWeather = async () => {
  const location = prompt('Give location');
  const key = '219ec63ed2a0417982e43106241901';

  const unformattedWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
  );
  const weather = await unformattedWeather.json();

  console.log(weather);
};

export default getWeather;
