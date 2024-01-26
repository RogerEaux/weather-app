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

const createMaxMinContainer = () => {
  const maxMinContainer = document.createElement('div');
  const maxC = document.createElement('p');
  const maxF = document.createElement('p');
  const minC = document.createElement('p');
  const minF = document.createElement('p');

  maxMinContainer.classList = 'maxMin';
  maxC.classList = 'maxC';
  maxF.classList = 'maxF';
  minC.classList = 'minC';
  minF.classList = 'minF';

  maxMinContainer.append(maxC, maxF, minC, minF);

  return maxMinContainer;
};

const createTempContainer = () => {
  const tempContainer = document.createElement('div');
  const icon = document.createElement('img');
  const temperatureC = document.createElement('p');
  const temperatureF = document.createElement('p');
  const maxMinContainer = createMaxMinContainer();

  tempContainer.classList = 'temp';
  icon.classList = 'icon';
  temperatureC.classList = 'temperatureC';
  temperatureF.classList = 'temperatureF';

  tempContainer.append(icon, temperatureC, temperatureF, maxMinContainer);

  return tempContainer;
};

const createWeatherMini = () => {
  const miniContainer = document.createElement('div');
  const tempContainer = createTempContainer();
  const location = document.createElement('p');
  const time = document.createElement('p');

  miniContainer.classList = 'mini';

  location.classList = 'location';
  time.classList = 'time';

  miniContainer.append(tempContainer, location, time);

  return miniContainer;
};

const createCurrentWeather = () => {
  const currentWeather = document.createElement('div');
  const detailsContainer = document.createElement('div');
  const condition = document.createElement('p');
  const feelsLikeC = document.createElement('p');
  const feelsLikeF = document.createElement('p');
  const humidity = document.createElement('p');
  const windKPH = document.createElement('p');
  const windMPH = document.createElement('p');

  currentWeather.classList = 'current';
  detailsContainer.classList = 'details';
  condition.classList = 'condition';
  feelsLikeC.classList = 'feelsLikeC';
  feelsLikeF.classList = 'feelsLikeF';
  humidity.classList = 'humidity';
  windKPH.classList = 'windKPH';
  windMPH.classList = 'windMPH';

  detailsContainer.append(
    condition,
    feelsLikeC,
    feelsLikeF,
    humidity,
    windKPH,
    windMPH,
  );
  currentWeather.append(createWeatherMini(), detailsContainer);

  return currentWeather;
};

const createMain = () => {
  const main = document.createElement('main');
  const search = document.createElement('div');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');
  const currentWeather = createCurrentWeather();

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
  main.append(search, currentWeather);

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
