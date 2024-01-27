import changeWeather from './modules/API';
import createContent from './modules/UI';
import './style.css';

const defaultCity = 'Guadalajara';

createContent();
changeWeather(defaultCity);
