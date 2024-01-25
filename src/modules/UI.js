import weatherReport from '../images/weather.svg';

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

const createWeatherMini = () => {
  const miniContainer = document.createElement('div');
  const icon = document.createElement('img');
  const temperatureC = document.createElement('p');
  const temperatureF = document.createElement('p');

  miniContainer.classList = 'mini';
  icon.classList = 'icon';
  temperatureC.classList = 'temperatureC';
  temperatureF.classList = 'temperatureF';

  miniContainer.append(icon, temperatureC, temperatureF);

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
  condition.classList = 'detail condition';
  feelsLikeC.classList = 'detail feelsLikeC';
  feelsLikeF.classList = 'detail feelsLikeF';
  humidity.classList = 'detail humidity';
  windKPH.classList = 'detail windKPH';
  windMPH.classList = 'detail windMPH';

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
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');
  const currentWeather = createCurrentWeather();

  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('id', 'search-input');
  searchInput.setAttribute('placeholder', 'Enter a city name');
  searchButton.textContent = 'Get weather';

  main.append(searchInput, searchButton, currentWeather);

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
