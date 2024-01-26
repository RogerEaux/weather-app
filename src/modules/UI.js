import weatherReport from '../images/weather.svg';
import changeWeather from './API';

const createHeader = () => {
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const headerContainer = document.createElement('div');

  logo.src = weatherReport;
  title.textContent = 'Weather Report';

  headerContainer.append(logo, title);
  header.append(headerContainer);

  return header;
};

const createSearch = () => {
  const search = document.createElement('div');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');

  search.classList = 'search';
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('id', 'search-input');
  searchInput.setAttribute('placeholder', 'Enter a city name');
  searchButton.textContent = 'Get weather';
  searchButton.addEventListener('click', () => {
    const input = document.getElementById('search-input');
    changeWeather(input.value);
    input.value = '';
  });

  search.append(searchInput, searchButton);

  return search;
};

const createTempContainer = () => {
  const tempContainer = document.createElement('div');
  const icon = document.createElement('img');
  const temperatureC = document.createElement('p');
  const temperatureF = document.createElement('p');

  tempContainer.classList = 'temp';
  icon.classList = 'icon';
  temperatureC.classList = 'temperatureC';
  temperatureF.classList = 'temperatureF';

  tempContainer.append(icon, temperatureC, temperatureF);

  return tempContainer;
};

const createWeatherMini = () => {
  const miniContainer = document.createElement('div');
  const condition = document.createElement('p');
  const location = document.createElement('p');
  const time = document.createElement('p');

  miniContainer.classList = 'mini';
  condition.classList = 'condition';
  location.classList = 'location';
  time.classList = 'time';

  miniContainer.append(createTempContainer(), condition, location, time);

  return miniContainer;
};

const createDetailsContainer = () => {
  const detailsContainer = document.createElement('div');

  const feelsLikeC = document.createElement('p');
  const feelsLikeF = document.createElement('p');
  const precipitation = document.createElement('p');
  const humidity = document.createElement('p');
  const windKPH = document.createElement('p');
  const windMPH = document.createElement('p');

  detailsContainer.classList = 'details';

  feelsLikeC.classList = 'feelsLikeC';
  feelsLikeF.classList = 'feelsLikeF';
  precipitation.classList = 'precipitation';
  humidity.classList = 'humidity';
  windKPH.classList = 'windKPH';
  windMPH.classList = 'windMPH';

  detailsContainer.append(
    feelsLikeC,
    feelsLikeF,
    precipitation,
    humidity,
    windKPH,
    windMPH,
  );

  return detailsContainer;
};

const createCurrentWeather = () => {
  const currentWeather = document.createElement('div');

  currentWeather.classList = 'current';
  currentWeather.append(createWeatherMini(), createDetailsContainer());

  return currentWeather;
};

const createMaxMinContainer = () => {
  const maxMinContainer = document.createElement('div');
  const icon = document.createElement('img');
  const maxC = document.createElement('p');
  const maxF = document.createElement('p');
  const minC = document.createElement('p');
  const minF = document.createElement('p');

  maxMinContainer.classList = 'maxMin';
  icon.classList = 'icon';
  maxC.classList = 'maxC';
  maxF.classList = 'maxF';
  minC.classList = 'minC';
  minF.classList = 'minF';

  maxMinContainer.append(icon, maxC, maxF, minC, minF);

  return maxMinContainer;
};

const createForecastContainer = () => {
  const forecastContainer = document.createElement('div');

  forecastContainer.classList = 'day';

  forecastContainer.append(createMaxMinContainer());

  return forecastContainer;
};

const createForecastWeather = () => {
  const forecasteWeather = document.createElement('div');

  forecasteWeather.classList = 'forecast';

  forecasteWeather.append(
    createForecastContainer(),
    createForecastContainer(),
    createForecastContainer(),
  );

  return forecasteWeather;
};

const createMain = () => {
  const main = document.createElement('main');

  main.append(createSearch(), createCurrentWeather(), createForecastWeather());

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  const name = document.createElement('p');

  copy.textContent = 'Copyright © 2023 ';
  name.textContent = 'RogerEaux';
  footer.append(copy, name);

  return footer;
};

const createContent = () => {
  const body = document.querySelector('body');

  body.append(createHeader(), createMain(), createFooter());
};

export default createContent;
