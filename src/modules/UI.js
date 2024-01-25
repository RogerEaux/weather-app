import heavyWeather from '../images/weather.svg';

const createHeader = () => {
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const headerContainer = document.createElement('div');

  logo.src = heavyWeather;
  title.textContent = 'Weather Report';

  headerContainer.append(logo, title);
  header.append(headerContainer);

  return header;
};

const createMain = () => {
  const main = document.createElement('main');

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
