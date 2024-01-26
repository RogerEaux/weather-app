import weatherReport from '../images/weather.svg';
import changeWeather from './API';

const handleChangeTempUnits = () => {
  const units = document.querySelectorAll('.unit');

  units.forEach((unit) => {
    unit.classList.toggle('hidden');
  });
};

const createHeader = () => {
  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const CtoF = document.createElement('button');

  logo.src = weatherReport;
  title.textContent = 'Weather Report';
  CtoF.textContent = 'C/F';
  CtoF.addEventListener('click', handleChangeTempUnits);

  headerContainer.append(logo, title);
  header.append(headerContainer, CtoF);

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
  temperatureC.classList = 'unit temperatureC';
  temperatureF.classList = 'unit hidden temperatureF';

  tempContainer.append(icon, temperatureC, temperatureF);

  return tempContainer;
};

const createMiniContainer = () => {
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

const createCurrentDetailsContainer = () => {
  const detailsContainer = document.createElement('div');

  const feelsLikeC = document.createElement('p');
  const feelsLikeF = document.createElement('p');
  const precipitation = document.createElement('p');
  const humidity = document.createElement('p');
  const windKPH = document.createElement('p');
  const windMPH = document.createElement('p');

  detailsContainer.classList = 'details';

  feelsLikeC.classList = 'unit feelsLikeC';
  feelsLikeF.classList = 'unit hidden feelsLikeF';
  precipitation.classList = 'precipitation';
  humidity.classList = 'humidity';
  windKPH.classList = 'unit windKPH';
  windMPH.classList = 'unit hidden windMPH';

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
  currentWeather.append(createMiniContainer(), createCurrentDetailsContainer());

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
  maxC.classList = 'unit maxC';
  maxF.classList = 'unit hidden maxF';
  minC.classList = 'unit minC';
  minF.classList = 'unit hidden minF';

  maxMinContainer.append(icon, maxC, maxF, minC, minF);

  return maxMinContainer;
};

const createForecastDetailsContainer = () => {
  const detailsContainer = document.createElement('div');
  const averageHumidity = document.createElement('p');
  const precipitation = document.createElement('p');
  const maxWindC = document.createElement('p');
  const maxWindF = document.createElement('p');

  detailsContainer.classList = 'details';
  averageHumidity.classList = 'humidity';
  precipitation.classList = 'precipitation';
  maxWindC.classList = 'unit maxWindKPH';
  maxWindF.classList = 'unit hidden maxWindMPH';

  detailsContainer.append(precipitation, averageHumidity, maxWindC, maxWindF);

  return detailsContainer;
};

const createForecastContainer = (index) => {
  const forecastContainer = document.createElement('div');
  const day = document.createElement('h2');

  forecastContainer.classList = `day day${index}`;
  day.classList = 'dayName';
  if (index === 0) {
    day.textContent = 'Today';
  } else if (index === 1) {
    day.textContent = 'Tomorrow';
  } else {
    day.textContent = 'The future';
  }

  forecastContainer.append(
    day,
    createMaxMinContainer(),
    createForecastDetailsContainer(),
  );

  return forecastContainer;
};

const createForecastWeather = () => {
  const forecasteWeather = document.createElement('div');
  const forecastDays = 3;

  forecasteWeather.classList = 'forecast';

  for (let i = 0; i < forecastDays; i += 1) {
    forecasteWeather.append(createForecastContainer(i));
  }

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
