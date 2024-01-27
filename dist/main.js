/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Cloud.otf */ "./src/fonts/Cloud.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/conditions/clear.jpg */ "./src/images/conditions/clear.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/conditions/cloudy.jpg */ "./src/images/conditions/cloudy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/conditions/foggy.jpg */ "./src/images/conditions/foggy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/conditions/snowy.jpg */ "./src/images/conditions/snowy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/conditions/snowier.jpg */ "./src/images/conditions/snowier.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/conditions/rainy.jpg */ "./src/images/conditions/rainy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/conditions/rainier.jpg */ "./src/images/conditions/rainier.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: Cloudy;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

:root {
  font-family: Helvetica, Arial, sans-serif;
  --dark-blue: #31255a;
  --blue: #75b4e3;
  --light-blue: #8fe0ff;
  --error-blue: #54416d;
  --shadow: 0px 0px 8px var(--dark-blue);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
  flex-direction: column;
  display: flex;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: linear-gradient(white, var(--light-blue), var(--blue));
  font-family: Cloudy;
}

header > div {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.2rem;
  color: var(--dark-blue);
}

header > div > img {
  height: 75px;
  width: auto;
}

header > button {
  align-self: center;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark-blue);
  background: none;
  margin-right: 4rem;
  border: none;
  cursor: pointer;
}

header > button:hover {
  filter: brightness(160%);
}

header > button:active {
  filter: brightness(240%);
}

main {
  flex: 1;
  display: grid;
  grid-template:
    'input' 2rem
    'current' max-content
    'forecast' max-content;
  gap: 32px;
  padding: 16px;
  background: linear-gradient(
    var(--blue) 10%,
    var(--light-blue) 25%,
    white,
    var(--light-blue) 75%,
    var(--blue) 90%
  );
}

.search {
  width: 80%;
  grid-area: input;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 6rem;
  gap: 4px;
}

.search > * {
  padding: 4px;
  border-radius: 5px;
}

.search input {
  outline: none;
  border: 2px solid var(--blue);
  box-shadow: var(--shadow);
}

.search input:focus {
  border: 2px solid var(--dark-blue);
}

.search button {
  font-weight: 700;
  border: none;
  color: var(--light-blue);
  background-color: var(--dark-blue);
  cursor: pointer;
}

.search button:hover {
  filter: brightness(160%);
}

.search button:active {
  filter: brightness(240%);
}

.search .error {
  color: var(--light-blue);
  background-color: var(--error-blue);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px;
}

.current {
  display: flex;
  align-self: center;
  justify-self: center;
  gap: 8px;
  padding: 8px;
  border: 2px solid var(--blue);
  border-radius: 5px;
  box-shadow: var(--shadow);
  background-size: cover;
}

.current > * {
  align-self: center;
}

.mini {
  display: grid;
  grid-template:
    'tempCon' 1fr
    'condition' max-content
    'location' max-content
    'time' max-content / 1fr;
  gap: 4px;
  padding: 16px;
}

.mini .temp {
  grid-area: tempCon;
  display: grid;
  grid-template: 'icon temp';
  align-items: center;
  gap: 8px;
}

.mini .icon {
  transform: scale(1.6);
  grid-area: icon;
}

.mini .temperatureC,
.mini .temperatureF {
  grid-area: temp;
  font-size: 2.5rem;
  justify-self: end;
}

.mini .condition,
.mini .location,
.mini .time {
  justify-self: end;
}

.mini .condition {
  grid-area: condition;
}

.mini .location {
  grid-area: location;
}

.mini .time {
  grid-area: time;
}

.current .details {
  display: grid;
  grid-template:
    'feels' 1fr
    'precipitation' 1fr
    'humidity' 1fr
    'wind' 1fr;
  align-items: center;
  gap: 12px;
  padding: 16px;
}

.current .details .feelsLikeC,
.current .details .feelsLikeF {
  grid-area: feels;
}

.current .details .windKPH,
.current .details .windMPH {
  grid-area: wind;
}

.forecast {
  grid-area: forecast;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  gap: 32px;
}

.day {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  font-size: 0.9rem;
  color: var(--dark-blue);
  padding: 8px;
  border: 2px solid var(--blue);
  border-radius: 5px;
  box-shadow: var(--shadow);
  background-size: cover;
}

.day .dayName {
  font-size: 1.2rem;
  padding: 16px;
  padding-bottom: 0;
}

.maxMin {
  display: grid;
  grid-template:
    'icon max' 1fr
    'icon min' 1fr;
  align-items: center;
  gap: 4px;
  padding: 16px;
}

.maxMin .icon {
  transform: scale(1.2);
  grid-area: icon;
}

.maxMin .maxC,
.maxMin .maxF {
  grid-area: max;
}

.maxMin .minC,
.maxMin .minF {
  grid-area: min;
}

.day .details {
  display: grid;
  grid-template:
    'precipitation' 1fr
    'humidity' 1fr
    'wind' 1fr;
  align-items: center;
  gap: 12px;
  padding: 16px;
  padding-top: 0;
}

.day .details .precipitation {
  grid-area: precipitation;
}

.day .details .humidity {
  grid-area: humidity;
}

.day .details .maxWindKPH,
.day .details .maxWindMPH {
  grid-area: wind;
}

.hidden {
  visibility: hidden;
}

footer {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  font-family: Cloudy;
  padding: 16px;
  color: var(--dark-blue);
  background: linear-gradient(var(--blue), var(--light-blue), white);
}

.faded {
  filter: blur(8px);
}

.heavy {
  position: absolute;
  height: 100%;
  width: 100%;
  animation: standCall 3s ease 1;
}

.heavy img {
  position: absolute;
  height: 100px;
  z-index: 2;
}

.heavy :first-child {
  height: 100%;
  width: 100%;
  z-index: 1;
}

.heavy :nth-child(2) {
  top: 20vh;
  left: 3vw;
  animation: menacing3 1.5s ease infinite;
}

.heavy :nth-child(3) {
  top: 35vh;
  left: 13vw;
  animation: menacing2 1.5s ease infinite;
}

.heavy :nth-child(4) {
  top: 1vh;
  left: 70vw;
  animation: menacing1 1.5s ease infinite;
}

.heavy :nth-child(5) {
  top: 15vh;
  left: 77vw;
  animation: menacing3 1.5s ease infinite;
}

.heavy :nth-child(6) {
  top: 30vh;
  left: 84vw;
  animation: menacing3 1.5s ease infinite;
}

.heavy :nth-child(7) {
  top: 70vh;
  left: 34vw;
  animation: menacing2 1.5s ease infinite;
}

.heavy :nth-child(8) {
  top: 77vh;
  left: 48vw;
  animation: menacing1 1.5s ease infinite;
}

.clear {
  color: var(--light-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.cloudy {
  color: var(--dark-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.foggy {
  color: var(--dark-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.snowy {
  color: var(--dark-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.snowier {
  color: var(--dark-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

.rainy {
  color: var(--dark-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

.rainier {
  color: var(--light-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

@keyframes standCall {
  0% {
    transform: translateX(-100%);
  }

  30% {
    transform: translateX(0%);
  }

  70% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes menacing1 {
  0% {
    transform: scale(0.7);
  }

  25% {
    transform: scale(1.5);
  }

  50% {
    transform: scale(0.7);
  }

  75% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(0.7);
  }
}

@keyframes menacing2 {
  0% {
    transform: scale(1.5);
  }

  25% {
    transform: scale(0.7);
  }

  50% {
    transform: scale(1.5);
  }

  75% {
    transform: scale(0.7);
  }

  100% {
    transform: scale(1.5);
  }
}

@keyframes menacing3 {
  0% {
    transform: scale(1.5);
  }

  33% {
    transform: scale(0.7);
  }

  45% {
    transform: scale(1.5);
  }

  66% {
    transform: scale(0.7);
  }

  100% {
    transform: scale(1.5);
  }
}

@media (max-width: 600px) {
  .current {
    flex-direction: column;
  }

  .heavy img {
    width: 66px;
  }

  .heavy :first-child {
    width: 140%;
    top: 10vh;
    left: -30vw;
  }

  header > button {
    margin-right: 1rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: Cloudy;\n  src: url(./fonts/Cloud.otf);\n}\n\n:root {\n  font-family: Helvetica, Arial, sans-serif;\n  --dark-blue: #31255a;\n  --blue: #75b4e3;\n  --light-blue: #8fe0ff;\n  --error-blue: #54416d;\n  --shadow: 0px 0px 8px var(--dark-blue);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  height: 100vh;\n  flex-direction: column;\n  display: flex;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  background: linear-gradient(white, var(--light-blue), var(--blue));\n  font-family: Cloudy;\n}\n\nheader > div {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  font-size: 1.2rem;\n  color: var(--dark-blue);\n}\n\nheader > div > img {\n  height: 75px;\n  width: auto;\n}\n\nheader > button {\n  align-self: center;\n  font-family: inherit;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--dark-blue);\n  background: none;\n  margin-right: 4rem;\n  border: none;\n  cursor: pointer;\n}\n\nheader > button:hover {\n  filter: brightness(160%);\n}\n\nheader > button:active {\n  filter: brightness(240%);\n}\n\nmain {\n  flex: 1;\n  display: grid;\n  grid-template:\n    'input' 2rem\n    'current' max-content\n    'forecast' max-content;\n  gap: 32px;\n  padding: 16px;\n  background: linear-gradient(\n    var(--blue) 10%,\n    var(--light-blue) 25%,\n    white,\n    var(--light-blue) 75%,\n    var(--blue) 90%\n  );\n}\n\n.search {\n  width: 80%;\n  grid-area: input;\n  justify-self: center;\n  display: grid;\n  grid-template-columns: 1fr 6rem;\n  gap: 4px;\n}\n\n.search > * {\n  padding: 4px;\n  border-radius: 5px;\n}\n\n.search input {\n  outline: none;\n  border: 2px solid var(--blue);\n  box-shadow: var(--shadow);\n}\n\n.search input:focus {\n  border: 2px solid var(--dark-blue);\n}\n\n.search button {\n  font-weight: 700;\n  border: none;\n  color: var(--light-blue);\n  background-color: var(--dark-blue);\n  cursor: pointer;\n}\n\n.search button:hover {\n  filter: brightness(160%);\n}\n\n.search button:active {\n  filter: brightness(240%);\n}\n\n.search .error {\n  color: var(--light-blue);\n  background-color: var(--error-blue);\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 6px;\n}\n\n.current {\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  gap: 8px;\n  padding: 8px;\n  border: 2px solid var(--blue);\n  border-radius: 5px;\n  box-shadow: var(--shadow);\n  background-size: cover;\n}\n\n.current > * {\n  align-self: center;\n}\n\n.mini {\n  display: grid;\n  grid-template:\n    'tempCon' 1fr\n    'condition' max-content\n    'location' max-content\n    'time' max-content / 1fr;\n  gap: 4px;\n  padding: 16px;\n}\n\n.mini .temp {\n  grid-area: tempCon;\n  display: grid;\n  grid-template: 'icon temp';\n  align-items: center;\n  gap: 8px;\n}\n\n.mini .icon {\n  transform: scale(1.6);\n  grid-area: icon;\n}\n\n.mini .temperatureC,\n.mini .temperatureF {\n  grid-area: temp;\n  font-size: 2.5rem;\n  justify-self: end;\n}\n\n.mini .condition,\n.mini .location,\n.mini .time {\n  justify-self: end;\n}\n\n.mini .condition {\n  grid-area: condition;\n}\n\n.mini .location {\n  grid-area: location;\n}\n\n.mini .time {\n  grid-area: time;\n}\n\n.current .details {\n  display: grid;\n  grid-template:\n    'feels' 1fr\n    'precipitation' 1fr\n    'humidity' 1fr\n    'wind' 1fr;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n}\n\n.current .details .feelsLikeC,\n.current .details .feelsLikeF {\n  grid-area: feels;\n}\n\n.current .details .windKPH,\n.current .details .windMPH {\n  grid-area: wind;\n}\n\n.forecast {\n  grid-area: forecast;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  justify-content: center;\n  gap: 32px;\n}\n\n.day {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: center;\n  font-size: 0.9rem;\n  color: var(--dark-blue);\n  padding: 8px;\n  border: 2px solid var(--blue);\n  border-radius: 5px;\n  box-shadow: var(--shadow);\n  background-size: cover;\n}\n\n.day .dayName {\n  font-size: 1.2rem;\n  padding: 16px;\n  padding-bottom: 0;\n}\n\n.maxMin {\n  display: grid;\n  grid-template:\n    'icon max' 1fr\n    'icon min' 1fr;\n  align-items: center;\n  gap: 4px;\n  padding: 16px;\n}\n\n.maxMin .icon {\n  transform: scale(1.2);\n  grid-area: icon;\n}\n\n.maxMin .maxC,\n.maxMin .maxF {\n  grid-area: max;\n}\n\n.maxMin .minC,\n.maxMin .minF {\n  grid-area: min;\n}\n\n.day .details {\n  display: grid;\n  grid-template:\n    'precipitation' 1fr\n    'humidity' 1fr\n    'wind' 1fr;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  padding-top: 0;\n}\n\n.day .details .precipitation {\n  grid-area: precipitation;\n}\n\n.day .details .humidity {\n  grid-area: humidity;\n}\n\n.day .details .maxWindKPH,\n.day .details .maxWindMPH {\n  grid-area: wind;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-family: Cloudy;\n  padding: 16px;\n  color: var(--dark-blue);\n  background: linear-gradient(var(--blue), var(--light-blue), white);\n}\n\n.faded {\n  filter: blur(8px);\n}\n\n.heavy {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  animation: standCall 3s ease 1;\n}\n\n.heavy img {\n  position: absolute;\n  height: 100px;\n  z-index: 2;\n}\n\n.heavy :first-child {\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.heavy :nth-child(2) {\n  top: 20vh;\n  left: 3vw;\n  animation: menacing3 1.5s ease infinite;\n}\n\n.heavy :nth-child(3) {\n  top: 35vh;\n  left: 13vw;\n  animation: menacing2 1.5s ease infinite;\n}\n\n.heavy :nth-child(4) {\n  top: 1vh;\n  left: 70vw;\n  animation: menacing1 1.5s ease infinite;\n}\n\n.heavy :nth-child(5) {\n  top: 15vh;\n  left: 77vw;\n  animation: menacing3 1.5s ease infinite;\n}\n\n.heavy :nth-child(6) {\n  top: 30vh;\n  left: 84vw;\n  animation: menacing3 1.5s ease infinite;\n}\n\n.heavy :nth-child(7) {\n  top: 70vh;\n  left: 34vw;\n  animation: menacing2 1.5s ease infinite;\n}\n\n.heavy :nth-child(8) {\n  top: 77vh;\n  left: 48vw;\n  animation: menacing1 1.5s ease infinite;\n}\n\n.clear {\n  color: var(--light-blue);\n  background-image: url(./images/conditions/clear.jpg);\n}\n\n.cloudy {\n  color: var(--dark-blue);\n  background-image: url(./images/conditions/cloudy.jpg);\n}\n\n.foggy {\n  color: var(--dark-blue);\n  background-image: url(./images/conditions/foggy.jpg);\n}\n\n.snowy {\n  color: var(--dark-blue);\n  background-image: url(./images/conditions/snowy.jpg);\n}\n\n.snowier {\n  color: var(--dark-blue);\n  background-image: url(./images/conditions/snowier.jpg);\n}\n\n.rainy {\n  color: var(--dark-blue);\n  background-image: url(./images/conditions/rainy.jpg);\n}\n\n.rainier {\n  color: var(--light-blue);\n  background-image: url(./images/conditions/rainier.jpg);\n}\n\n@keyframes standCall {\n  0% {\n    transform: translateX(-100%);\n  }\n\n  30% {\n    transform: translateX(0%);\n  }\n\n  70% {\n    transform: translateX(0%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n@keyframes menacing1 {\n  0% {\n    transform: scale(0.7);\n  }\n\n  25% {\n    transform: scale(1.5);\n  }\n\n  50% {\n    transform: scale(0.7);\n  }\n\n  75% {\n    transform: scale(1.5);\n  }\n\n  100% {\n    transform: scale(0.7);\n  }\n}\n\n@keyframes menacing2 {\n  0% {\n    transform: scale(1.5);\n  }\n\n  25% {\n    transform: scale(0.7);\n  }\n\n  50% {\n    transform: scale(1.5);\n  }\n\n  75% {\n    transform: scale(0.7);\n  }\n\n  100% {\n    transform: scale(1.5);\n  }\n}\n\n@keyframes menacing3 {\n  0% {\n    transform: scale(1.5);\n  }\n\n  33% {\n    transform: scale(0.7);\n  }\n\n  45% {\n    transform: scale(1.5);\n  }\n\n  66% {\n    transform: scale(0.7);\n  }\n\n  100% {\n    transform: scale(1.5);\n  }\n}\n\n@media (max-width: 600px) {\n  .current {\n    flex-direction: column;\n  }\n\n  .heavy img {\n    width: 66px;\n  }\n\n  .heavy :first-child {\n    width: 140%;\n    top: 10vh;\n    left: -30vw;\n  }\n\n  header > button {\n    margin-right: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/audios/weatherReport1.wav":
/*!***************************************!*\
  !*** ./src/audios/weatherReport1.wav ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "31f1a1eb67c84adca08e9e4c67b4d48c.wav");

/***/ }),

/***/ "./src/audios/weatherReport2.wav":
/*!***************************************!*\
  !*** ./src/audios/weatherReport2.wav ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "036707c803ce5f463e400a0542bdf960.wav");

/***/ }),

/***/ "./src/audios/weatherReport3.wav":
/*!***************************************!*\
  !*** ./src/audios/weatherReport3.wav ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a423d88a5635095ee43fbe4726149b8e.wav");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_heavy_weather_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/heavy-weather.jpg */ "./src/images/heavy-weather.jpg");
/* harmony import */ var _images_menacing_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/menacing.png */ "./src/images/menacing.png");
/* harmony import */ var _audios_weatherReport1_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audios/weatherReport1.wav */ "./src/audios/weatherReport1.wav");
/* harmony import */ var _audios_weatherReport2_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audios/weatherReport2.wav */ "./src/audios/weatherReport2.wav");
/* harmony import */ var _audios_weatherReport3_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../audios/weatherReport3.wav */ "./src/audios/weatherReport3.wav");






const getAllWeather = async (location) => {
  const key = '219ec63ed2a0417982e43106241901';

  const unformattedWeather = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`,
  );
  const weather = await unformattedWeather.json();

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
  current.code = allWeather.current.condition.code;
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
    forecast.days[i].code =
      allWeather.forecast.forecastday[i].day.condition.code;
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

const determineBackground = (code) => {
  const clear = [1000];
  const cloudy = [1003, 1006];
  const foggy = [1135, 1147];
  const snowy = [1066, 1069, 1072, 1114, 1117, 1210, 1213, 1255, 1261, 1279];
  const snowier = [1216, 1219, 1222, 1225, 1237, 1258, 1264, 1282];
  const rainy = [
    1150, 1153, 1168, 1171, 1180, 1183, 1198, 1204, 1240, 1249, 1273,
  ];

  if (clear.includes(code)) {
    return 'clear';
  }
  if (cloudy.includes(code)) {
    return 'cloudy';
  }
  if (foggy.includes(code)) {
    return 'foggy';
  }
  if (snowy.includes(code)) {
    return 'snowy';
  }
  if (snowier.includes(code)) {
    return 'snowier';
  }
  if (rainy.includes(code)) {
    return 'rainy';
  }

  return 'rainier';
};

const changeCurrentMini = (weather) => {
  const current = document.querySelector('.current');
  const icon = document.querySelector('.current .icon');
  const temperatureC = document.querySelector('.current .temperatureC');
  const temperatureF = document.querySelector('.current .temperatureF');
  const condition = document.querySelector('.current .condition');
  const fullLocation = document.querySelector('.current .location');
  const time = document.querySelector('.current .time');

  current.classList = `current ${determineBackground(weather.current.code)}`;
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
    const forecastDay = document.querySelector(`.forecast .day${index}`);
    const icon = document.querySelector(`.forecast .day${index} .icon`);
    const maxC = document.querySelector(`.forecast .day${index} .maxC`);
    const maxF = document.querySelector(`.forecast .day${index} .maxF`);
    const minC = document.querySelector(`.forecast .day${index} .minC`);
    const minF = document.querySelector(`.forecast .day${index} .minF`);

    forecastDay.classList = `day day${index} ${determineBackground(day.code)}`;
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

const showError = () => {
  const error = document.querySelector('.error');

  error.classList.toggle('hidden');
  setTimeout(() => {
    error.classList.toggle('hidden');
  }, 2500);
};

const showWeatherReport = () => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const img = document.createElement('img');
  const heavy = document.createElement('div');
  const audio = document.createElement('audio');
  const audios = [_audios_weatherReport1_wav__WEBPACK_IMPORTED_MODULE_2__["default"], _audios_weatherReport2_wav__WEBPACK_IMPORTED_MODULE_3__["default"], _audios_weatherReport3_wav__WEBPACK_IMPORTED_MODULE_4__["default"]];
  const chosenAudio = document.createElement('source');

  heavy.classList = 'heavy';
  img.src = _images_heavy_weather_jpg__WEBPACK_IMPORTED_MODULE_0__;
  header.classList.toggle('faded');
  main.classList.toggle('faded');
  footer.classList.toggle('faded');
  chosenAudio.setAttribute('type', 'audio/wav');
  chosenAudio.src = audios[Math.floor(Math.random() * 3)];

  audio.setAttribute('autoplay', '');
  audio.append(chosenAudio);
  heavy.append(img);
  for (let i = 0; i < 7; i += 1) {
    const menacingImg = document.createElement('img');

    menacingImg.src = _images_menacing_png__WEBPACK_IMPORTED_MODULE_1__;

    heavy.append(menacingImg);
  }
  heavy.append(audio);
  body.append(heavy);

  setTimeout(() => {
    header.classList.toggle('faded');
    main.classList.toggle('faded');
    footer.classList.toggle('faded');
    body.removeChild(heavy);
  }, 3000);
};

const changeWeather = (location) => {
  getWeather(location)
    .then((weather) => {
      changeCurrentMini(weather);
      changeCurrentDetails(weather);
      changeForecastMaxMin(weather);
      changeForecastDetails(weather);
      showWeatherReport();
    })
    .catch(() => {
      showError();
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeWeather);


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_weather_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/weather.svg */ "./src/images/weather.svg");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ "./src/modules/API.js");



const createHeader = () => {
  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const CtoF = document.createElement('button');

  logo.src = _images_weather_svg__WEBPACK_IMPORTED_MODULE_0__;
  title.textContent = 'Weather Report';
  CtoF.textContent = 'C/F';
  CtoF.addEventListener('click', () => {
    const units = document.querySelectorAll('.unit');

    units.forEach((unit) => {
      unit.classList.toggle('hidden');
    });
  });

  headerContainer.append(logo, title);
  header.append(headerContainer, CtoF);

  return header;
};

const createSearch = () => {
  const search = document.createElement('div');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');
  const error = document.createElement('p');

  search.classList = 'search';
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('id', 'search-input');
  searchInput.setAttribute('placeholder', 'Enter a city name');
  searchButton.textContent = 'Get weather';
  searchButton.addEventListener('click', () => {
    const input = document.getElementById('search-input');
    (0,_API__WEBPACK_IMPORTED_MODULE_1__["default"])(input.value);
    input.value = '';
  });
  error.classList = 'hidden error';
  error.textContent = 'Please enter a valid city';

  search.append(searchInput, searchButton, error);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContent);


/***/ }),

/***/ "./src/fonts/Cloud.otf":
/*!*****************************!*\
  !*** ./src/fonts/Cloud.otf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0559a6daf6fe251f2f90.otf";

/***/ }),

/***/ "./src/images/conditions/clear.jpg":
/*!*****************************************!*\
  !*** ./src/images/conditions/clear.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e8c2b510f97b3ae90c8.jpg";

/***/ }),

/***/ "./src/images/conditions/cloudy.jpg":
/*!******************************************!*\
  !*** ./src/images/conditions/cloudy.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "857e9b184f3744d7903a.jpg";

/***/ }),

/***/ "./src/images/conditions/foggy.jpg":
/*!*****************************************!*\
  !*** ./src/images/conditions/foggy.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3c56aa5fc01537d11fe.jpg";

/***/ }),

/***/ "./src/images/conditions/rainier.jpg":
/*!*******************************************!*\
  !*** ./src/images/conditions/rainier.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bc26a22c45ce8118a15.jpg";

/***/ }),

/***/ "./src/images/conditions/rainy.jpg":
/*!*****************************************!*\
  !*** ./src/images/conditions/rainy.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd677505817edfc18a11.jpg";

/***/ }),

/***/ "./src/images/conditions/snowier.jpg":
/*!*******************************************!*\
  !*** ./src/images/conditions/snowier.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d34bd501830a1ff57e1.jpg";

/***/ }),

/***/ "./src/images/conditions/snowy.jpg":
/*!*****************************************!*\
  !*** ./src/images/conditions/snowy.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f25f99df119dc2985d6a.jpg";

/***/ }),

/***/ "./src/images/heavy-weather.jpg":
/*!**************************************!*\
  !*** ./src/images/heavy-weather.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4633932bbe234f206edd.jpg";

/***/ }),

/***/ "./src/images/menacing.png":
/*!*********************************!*\
  !*** ./src/images/menacing.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff22a9cea97f803f94e7.png";

/***/ }),

/***/ "./src/images/weather.svg":
/*!********************************!*\
  !*** ./src/images/weather.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e9c377115c6f935d1a1.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/API */ "./src/modules/API.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const defaultCity = 'Guadalajara';

(0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_API__WEBPACK_IMPORTED_MODULE_0__["default"])(defaultCity);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0QywySUFBa0Q7QUFDOUYsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsMklBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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LEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFhO0FBQ2pCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL043QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNEO0FBQ3BCOztBQUVyQjs7QUFFQSx1REFBYTtBQUNiLHdEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdWRpb3Mvd2VhdGhlclJlcG9ydDEud2F2Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2F1ZGlvcy93ZWF0aGVyUmVwb3J0Mi53YXYiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXVkaW9zL3dlYXRoZXJSZXBvcnQzLndhdiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DbG91ZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb25kaXRpb25zL2NsZWFyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbmRpdGlvbnMvY2xvdWR5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbmRpdGlvbnMvZm9nZ3kuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY29uZGl0aW9ucy9zbm93eS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb25kaXRpb25zL3Nub3dpZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY29uZGl0aW9ucy9yYWlueS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb25kaXRpb25zL3JhaW5pZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBDbG91ZHk7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG46cm9vdCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAtLWRhcmstYmx1ZTogIzMxMjU1YTtcbiAgLS1ibHVlOiAjNzViNGUzO1xuICAtLWxpZ2h0LWJsdWU6ICM4ZmUwZmY7XG4gIC0tZXJyb3ItYmx1ZTogIzU0NDE2ZDtcbiAgLS1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpKTtcbiAgZm9udC1mYW1pbHk6IENsb3VkeTtcbn1cblxuaGVhZGVyID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbmhlYWRlciA+IGRpdiA+IGltZyB7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbmhlYWRlciA+IGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaGVhZGVyID4gYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDE2MCUpO1xufVxuXG5oZWFkZXIgPiBidXR0b246YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDI0MCUpO1xufVxuXG5tYWluIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAnaW5wdXQnIDJyZW1cbiAgICAnY3VycmVudCcgbWF4LWNvbnRlbnRcbiAgICAnZm9yZWNhc3QnIG1heC1jb250ZW50O1xuICBnYXA6IDMycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB2YXIoLS1ibHVlKSAxMCUsXG4gICAgdmFyKC0tbGlnaHQtYmx1ZSkgMjUlLFxuICAgIHdoaXRlLFxuICAgIHZhcigtLWxpZ2h0LWJsdWUpIDc1JSxcbiAgICB2YXIoLS1ibHVlKSA5MCVcbiAgKTtcbn1cblxuLnNlYXJjaCB7XG4gIHdpZHRoOiA4MCU7XG4gIGdyaWQtYXJlYTogaW5wdXQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2cmVtO1xuICBnYXA6IDRweDtcbn1cblxuLnNlYXJjaCA+ICoge1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNlYXJjaCBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xufVxuXG4uc2VhcmNoIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuLnNlYXJjaCBidXR0b24ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxNjAlKTtcbn1cblxuLnNlYXJjaCBidXR0b246YWN0aXZlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDI0MCUpO1xufVxuXG4uc2VhcmNoIC5lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jdXJyZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmN1cnJlbnQgPiAqIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubWluaSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgJ3RlbXBDb24nIDFmclxuICAgICdjb25kaXRpb24nIG1heC1jb250ZW50XG4gICAgJ2xvY2F0aW9uJyBtYXgtY29udGVudFxuICAgICd0aW1lJyBtYXgtY29udGVudCAvIDFmcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5taW5pIC50ZW1wIHtcbiAgZ3JpZC1hcmVhOiB0ZW1wQ29uO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAnaWNvbiB0ZW1wJztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5taW5pIC5pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xuICBncmlkLWFyZWE6IGljb247XG59XG5cbi5taW5pIC50ZW1wZXJhdHVyZUMsXG4ubWluaSAudGVtcGVyYXR1cmVGIHtcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5taW5pIC5jb25kaXRpb24sXG4ubWluaSAubG9jYXRpb24sXG4ubWluaSAudGltZSB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ubWluaSAuY29uZGl0aW9uIHtcbiAgZ3JpZC1hcmVhOiBjb25kaXRpb247XG59XG5cbi5taW5pIC5sb2NhdGlvbiB7XG4gIGdyaWQtYXJlYTogbG9jYXRpb247XG59XG5cbi5taW5pIC50aW1lIHtcbiAgZ3JpZC1hcmVhOiB0aW1lO1xufVxuXG4uY3VycmVudCAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgJ2ZlZWxzJyAxZnJcbiAgICAncHJlY2lwaXRhdGlvbicgMWZyXG4gICAgJ2h1bWlkaXR5JyAxZnJcbiAgICAnd2luZCcgMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jdXJyZW50IC5kZXRhaWxzIC5mZWVsc0xpa2VDLFxuLmN1cnJlbnQgLmRldGFpbHMgLmZlZWxzTGlrZUYge1xuICBncmlkLWFyZWE6IGZlZWxzO1xufVxuXG4uY3VycmVudCAuZGV0YWlscyAud2luZEtQSCxcbi5jdXJyZW50IC5kZXRhaWxzIC53aW5kTVBIIHtcbiAgZ3JpZC1hcmVhOiB3aW5kO1xufVxuXG4uZm9yZWNhc3Qge1xuICBncmlkLWFyZWE6IGZvcmVjYXN0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMnB4O1xufVxuXG4uZGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5kYXkgLmRheU5hbWUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5tYXhNaW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOlxuICAgICdpY29uIG1heCcgMWZyXG4gICAgJ2ljb24gbWluJyAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubWF4TWluIC5pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBncmlkLWFyZWE6IGljb247XG59XG5cbi5tYXhNaW4gLm1heEMsXG4ubWF4TWluIC5tYXhGIHtcbiAgZ3JpZC1hcmVhOiBtYXg7XG59XG5cbi5tYXhNaW4gLm1pbkMsXG4ubWF4TWluIC5taW5GIHtcbiAgZ3JpZC1hcmVhOiBtaW47XG59XG5cbi5kYXkgLmRldGFpbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOlxuICAgICdwcmVjaXBpdGF0aW9uJyAxZnJcbiAgICAnaHVtaWRpdHknIDFmclxuICAgICd3aW5kJyAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5kYXkgLmRldGFpbHMgLnByZWNpcGl0YXRpb24ge1xuICBncmlkLWFyZWE6IHByZWNpcGl0YXRpb247XG59XG5cbi5kYXkgLmRldGFpbHMgLmh1bWlkaXR5IHtcbiAgZ3JpZC1hcmVhOiBodW1pZGl0eTtcbn1cblxuLmRheSAuZGV0YWlscyAubWF4V2luZEtQSCxcbi5kYXkgLmRldGFpbHMgLm1heFdpbmRNUEgge1xuICBncmlkLWFyZWE6IHdpbmQ7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogQ2xvdWR5O1xuICBwYWRkaW5nOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWJsdWUpLCB2YXIoLS1saWdodC1ibHVlKSwgd2hpdGUpO1xufVxuXG4uZmFkZWQge1xuICBmaWx0ZXI6IGJsdXIoOHB4KTtcbn1cblxuLmhlYXZ5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb246IHN0YW5kQ2FsbCAzcyBlYXNlIDE7XG59XG5cbi5oZWF2eSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5oZWF2eSA6Zmlyc3QtY2hpbGQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVhdnkgOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogMjB2aDtcbiAgbGVmdDogM3Z3O1xuICBhbmltYXRpb246IG1lbmFjaW5nMyAxLjVzIGVhc2UgaW5maW5pdGU7XG59XG5cbi5oZWF2eSA6bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiAzNXZoO1xuICBsZWZ0OiAxM3Z3O1xuICBhbmltYXRpb246IG1lbmFjaW5nMiAxLjVzIGVhc2UgaW5maW5pdGU7XG59XG5cbi5oZWF2eSA6bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiAxdmg7XG4gIGxlZnQ6IDcwdnc7XG4gIGFuaW1hdGlvbjogbWVuYWNpbmcxIDEuNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmhlYXZ5IDpudGgtY2hpbGQoNSkge1xuICB0b3A6IDE1dmg7XG4gIGxlZnQ6IDc3dnc7XG4gIGFuaW1hdGlvbjogbWVuYWNpbmczIDEuNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmhlYXZ5IDpudGgtY2hpbGQoNikge1xuICB0b3A6IDMwdmg7XG4gIGxlZnQ6IDg0dnc7XG4gIGFuaW1hdGlvbjogbWVuYWNpbmczIDEuNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmhlYXZ5IDpudGgtY2hpbGQoNykge1xuICB0b3A6IDcwdmg7XG4gIGxlZnQ6IDM0dnc7XG4gIGFuaW1hdGlvbjogbWVuYWNpbmcyIDEuNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmhlYXZ5IDpudGgtY2hpbGQoOCkge1xuICB0b3A6IDc3dmg7XG4gIGxlZnQ6IDQ4dnc7XG4gIGFuaW1hdGlvbjogbWVuYWNpbmcxIDEuNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmNsZWFyIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi5jbG91ZHkge1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4uZm9nZ3kge1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4uc25vd3kge1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG4uc25vd2llciB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5cbi5yYWlueSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG59XG5cbi5yYWluaWVyIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG59XG5cbkBrZXlmcmFtZXMgc3RhbmRDYWxsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cblxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cblxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtZW5hY2luZzEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG5cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbWVuYWNpbmcyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxuXG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1lbmFjaW5nMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cblxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuXG4gIDQ1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG5cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jdXJyZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmhlYXZ5IGltZyB7XG4gICAgd2lkdGg6IDY2cHg7XG4gIH1cblxuICAuaGVhdnkgOmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogMTQwJTtcbiAgICB0b3A6IDEwdmg7XG4gICAgbGVmdDogLTMwdnc7XG4gIH1cblxuICBoZWFkZXIgPiBidXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGtFQUFrRTtFQUNsRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2I7OzswQkFHd0I7RUFDeEIsU0FBUztFQUNULGFBQWE7RUFDYjs7Ozs7O0dBTUM7QUFDSDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFD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cUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDbG91ZHk7XFxuICBzcmM6IHVybCguL2ZvbnRzL0Nsb3VkLm90Zik7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgLS1kYXJrLWJsdWU6ICMzMTI1NWE7XFxuICAtLWJsdWU6ICM3NWI0ZTM7XFxuICAtLWxpZ2h0LWJsdWU6ICM4ZmUwZmY7XFxuICAtLWVycm9yLWJsdWU6ICM1NDQxNmQ7XFxuICAtLXNoYWRvdzogMHB4IDBweCA4cHggdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLWJsdWUpKTtcXG4gIGZvbnQtZmFtaWx5OiBDbG91ZHk7XFxufVxcblxcbmhlYWRlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbmhlYWRlciA+IGRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuaGVhZGVyID4gYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgPiBidXR0b246aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDE2MCUpO1xcbn1cXG5cXG5oZWFkZXIgPiBidXR0b246YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyNDAlKTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdpbnB1dCcgMnJlbVxcbiAgICAnY3VycmVudCcgbWF4LWNvbnRlbnRcXG4gICAgJ2ZvcmVjYXN0JyBtYXgtY29udGVudDtcXG4gIGdhcDogMzJweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHZhcigtLWJsdWUpIDEwJSxcXG4gICAgdmFyKC0tbGlnaHQtYmx1ZSkgMjUlLFxcbiAgICB3aGl0ZSxcXG4gICAgdmFyKC0tbGlnaHQtYmx1ZSkgNzUlLFxcbiAgICB2YXIoLS1ibHVlKSA5MCVcXG4gICk7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2cmVtO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zZWFyY2ggPiAqIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5zZWFyY2ggYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoIGJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTYwJSk7XFxufVxcblxcbi5zZWFyY2ggYnV0dG9uOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjQwJSk7XFxufVxcblxcbi5zZWFyY2ggLmVycm9yIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLWJsdWUpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4uY3VycmVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5jdXJyZW50ID4gKiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5taW5pIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAndGVtcENvbicgMWZyXFxuICAgICdjb25kaXRpb24nIG1heC1jb250ZW50XFxuICAgICdsb2NhdGlvbicgbWF4LWNvbnRlbnRcXG4gICAgJ3RpbWUnIG1heC1jb250ZW50IC8gMWZyO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ubWluaSAudGVtcCB7XFxuICBncmlkLWFyZWE6IHRlbXBDb247XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogJ2ljb24gdGVtcCc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5taW5pIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG59XFxuXFxuLm1pbmkgLnRlbXBlcmF0dXJlQyxcXG4ubWluaSAudGVtcGVyYXR1cmVGIHtcXG4gIGdyaWQtYXJlYTogdGVtcDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5taW5pIC5jb25kaXRpb24sXFxuLm1pbmkgLmxvY2F0aW9uLFxcbi5taW5pIC50aW1lIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ubWluaSAuY29uZGl0aW9uIHtcXG4gIGdyaWQtYXJlYTogY29uZGl0aW9uO1xcbn1cXG5cXG4ubWluaSAubG9jYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXG59XFxuXFxuLm1pbmkgLnRpbWUge1xcbiAgZ3JpZC1hcmVhOiB0aW1lO1xcbn1cXG5cXG4uY3VycmVudCAuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2ZlZWxzJyAxZnJcXG4gICAgJ3ByZWNpcGl0YXRpb24nIDFmclxcbiAgICAnaHVtaWRpdHknIDFmclxcbiAgICAnd2luZCcgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5jdXJyZW50IC5kZXRhaWxzIC5mZWVsc0xpa2VDLFxcbi5jdXJyZW50IC5kZXRhaWxzIC5mZWVsc0xpa2VGIHtcXG4gIGdyaWQtYXJlYTogZmVlbHM7XFxufVxcblxcbi5jdXJyZW50IC5kZXRhaWxzIC53aW5kS1BILFxcbi5jdXJyZW50IC5kZXRhaWxzIC53aW5kTVBIIHtcXG4gIGdyaWQtYXJlYTogd2luZDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGdyaWQtYXJlYTogZm9yZWNhc3Q7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDIwMHB4KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4uZGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmRheSAuZGF5TmFtZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLm1heE1pbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2ljb24gbWF4JyAxZnJcXG4gICAgJ2ljb24gbWluJyAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ubWF4TWluIC5pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG59XFxuXFxuLm1heE1pbiAubWF4QyxcXG4ubWF4TWluIC5tYXhGIHtcXG4gIGdyaWQtYXJlYTogbWF4O1xcbn1cXG5cXG4ubWF4TWluIC5taW5DLFxcbi5tYXhNaW4gLm1pbkYge1xcbiAgZ3JpZC1hcmVhOiBtaW47XFxufVxcblxcbi5kYXkgLmRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdwcmVjaXBpdGF0aW9uJyAxZnJcXG4gICAgJ2h1bWlkaXR5JyAxZnJcXG4gICAgJ3dpbmQnIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEycHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5kYXkgLmRldGFpbHMgLnByZWNpcGl0YXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBwcmVjaXBpdGF0aW9uO1xcbn1cXG5cXG4uZGF5IC5kZXRhaWxzIC5odW1pZGl0eSB7XFxuICBncmlkLWFyZWE6IGh1bWlkaXR5O1xcbn1cXG5cXG4uZGF5IC5kZXRhaWxzIC5tYXhXaW5kS1BILFxcbi5kYXkgLmRldGFpbHMgLm1heFdpbmRNUEgge1xcbiAgZ3JpZC1hcmVhOiB3aW5kO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IENsb3VkeTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1ibHVlKSwgdmFyKC0tbGlnaHQtYmx1ZSksIHdoaXRlKTtcXG59XFxuXFxuLmZhZGVkIHtcXG4gIGZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4uaGVhdnkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbmltYXRpb246IHN0YW5kQ2FsbCAzcyBlYXNlIDE7XFxufVxcblxcbi5oZWF2eSBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5oZWF2eSA6Zmlyc3QtY2hpbGQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVhdnkgOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDIwdmg7XFxuICBsZWZ0OiAzdnc7XFxuICBhbmltYXRpb246IG1lbmFjaW5nMyAxLjVzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbi5oZWF2eSA6bnRoLWNoaWxkKDMpIHtcXG4gIHRvcDogMzV2aDtcXG4gIGxlZnQ6IDEzdnc7XFxuICBhbmltYXRpb246IG1lbmFjaW5nMiAxLjVzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbi5oZWF2eSA6bnRoLWNoaWxkKDQpIHtcXG4gIHRvcDogMXZoO1xcbiAgbGVmdDogNzB2dztcXG4gIGFuaW1hdGlvbjogbWVuYWNpbmcxIDEuNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYXZ5IDpudGgtY2hpbGQoNSkge1xcbiAgdG9wOiAxNXZoO1xcbiAgbGVmdDogNzd2dztcXG4gIGFuaW1hdGlvbjogbWVuYWNpbmczIDEuNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYXZ5IDpudGgtY2hpbGQoNikge1xcbiAgdG9wOiAzMHZoO1xcbiAgbGVmdDogODR2dztcXG4gIGFuaW1hdGlvbjogbWVuYWNpbmczIDEuNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYXZ5IDpudGgtY2hpbGQoNykge1xcbiAgdG9wOiA3MHZoO1xcbiAgbGVmdDogMzR2dztcXG4gIGFuaW1hdGlvbjogbWVuYWNpbmcyIDEuNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYXZ5IDpudGgtY2hpbGQoOCkge1xcbiAgdG9wOiA3N3ZoO1xcbiAgbGVmdDogNDh2dztcXG4gIGFuaW1hdGlvbjogbWVuYWNpbmcxIDEuNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmNsZWFyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jb25kaXRpb25zL2NsZWFyLmpwZyk7XFxufVxcblxcbi5jbG91ZHkge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY29uZGl0aW9ucy9jbG91ZHkuanBnKTtcXG59XFxuXFxuLmZvZ2d5IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvbmRpdGlvbnMvZm9nZ3kuanBnKTtcXG59XFxuXFxuLnNub3d5IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvbmRpdGlvbnMvc25vd3kuanBnKTtcXG59XFxuXFxuLnNub3dpZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY29uZGl0aW9ucy9zbm93aWVyLmpwZyk7XFxufVxcblxcbi5yYWlueSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jb25kaXRpb25zL3JhaW55LmpwZyk7XFxufVxcblxcbi5yYWluaWVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jb25kaXRpb25zL3JhaW5pZXIuanBnKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzdGFuZENhbGwge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1lbmFjaW5nMSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbWVuYWNpbmcyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtZW5hY2luZzMge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuXFxuICAzMyUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuXFxuICA2NiUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jdXJyZW50IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5oZWF2eSBpbWcge1xcbiAgICB3aWR0aDogNjZweDtcXG4gIH1cXG5cXG4gIC5oZWF2eSA6Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogMTQwJTtcXG4gICAgdG9wOiAxMHZoO1xcbiAgICBsZWZ0OiAtMzB2dztcXG4gIH1cXG5cXG4gIGhlYWRlciA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxZjFhMWViNjdjODRhZGNhMDhlOWU0YzY3YjRkNDhjLndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMzY3MDdjODAzY2U1ZjQ2M2U0MDBhMDU0MmJkZjk2MC53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTQyM2Q4OGE1NjM1MDk1ZWU0M2ZiZTQ3MjYxNDliOGUud2F2XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaGVhdnlXZWF0aGVyIGZyb20gJy4uL2ltYWdlcy9oZWF2eS13ZWF0aGVyLmpwZyc7XG5pbXBvcnQgbWVuYWNpbmcgZnJvbSAnLi4vaW1hZ2VzL21lbmFjaW5nLnBuZyc7XG5pbXBvcnQgd2VhdGhlclJlcG9ydDEgZnJvbSAnLi4vYXVkaW9zL3dlYXRoZXJSZXBvcnQxLndhdic7XG5pbXBvcnQgd2VhdGhlclJlcG9ydDIgZnJvbSAnLi4vYXVkaW9zL3dlYXRoZXJSZXBvcnQyLndhdic7XG5pbXBvcnQgd2VhdGhlclJlcG9ydDMgZnJvbSAnLi4vYXVkaW9zL3dlYXRoZXJSZXBvcnQzLndhdic7XG5cbmNvbnN0IGdldEFsbFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3Qga2V5ID0gJzIxOWVjNjNlZDJhMDQxNzk4MmU0MzEwNjI0MTkwMSc7XG5cbiAgY29uc3QgdW5mb3JtYXR0ZWRXZWF0aGVyID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7a2V5fSZxPSR7bG9jYXRpb259JmRheXM9M2AsXG4gICk7XG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCB1bmZvcm1hdHRlZFdlYXRoZXIuanNvbigpO1xuXG4gIHJldHVybiB3ZWF0aGVyO1xufTtcblxuY29uc3QgZ2V0Q3VycmVudFdlYXRoZXIgPSAoYWxsV2VhdGhlcikgPT4ge1xuICBjb25zdCBjdXJyZW50ID0ge307XG5cbiAgWywgY3VycmVudC50aW1lXSA9IGFsbFdlYXRoZXIuY3VycmVudC5sYXN0X3VwZGF0ZWQuc3BsaXQoJyAnKTtcbiAgY3VycmVudC50ZW1wQyA9IGFsbFdlYXRoZXIuY3VycmVudC50ZW1wX2M7XG4gIGN1cnJlbnQudGVtcEYgPSBhbGxXZWF0aGVyLmN1cnJlbnQudGVtcF9mO1xuICBjdXJyZW50LmZlZWxzTGlrZUMgPSBhbGxXZWF0aGVyLmN1cnJlbnQuZmVlbHNsaWtlX2M7XG4gIGN1cnJlbnQuZmVlbHNMaWtlRiA9IGFsbFdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgY3VycmVudC5wcmVjaXBpdGF0aW9uID1cbiAgICBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbXG4gICAgICBwYXJzZUludChjdXJyZW50LnRpbWUuc2xpY2UoMCwgMiksIDEwKVxuICAgIF0uY2hhbmNlX29mX3JhaW47XG4gIGN1cnJlbnQuaHVtaWRpdHkgPSBhbGxXZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGN1cnJlbnQud2luZEtQSCA9IGFsbFdlYXRoZXIuY3VycmVudC53aW5kX2twaDtcbiAgY3VycmVudC53aW5kTVBIID0gYWxsV2VhdGhlci5jdXJyZW50LndpbmRfbXBoO1xuICBjdXJyZW50LmNvbmRpdGlvbiA9IGFsbFdlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgY3VycmVudC5pY29uID0gYWxsV2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBjdXJyZW50LmNvZGUgPSBhbGxXZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XG4gIGN1cnJlbnQuY2l0eSA9IGFsbFdlYXRoZXIubG9jYXRpb24ubmFtZTtcbiAgY3VycmVudC5yZWdpb24gPSBhbGxXZWF0aGVyLmxvY2F0aW9uLnJlZ2lvbjtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbmNvbnN0IGdldEZvcmVjYXN0V2VhdGhlciA9IChhbGxXZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0ID0ge307XG4gIGNvbnN0IGZvcmVjYXN0RGF5cyA9IDM7XG5cbiAgZm9yZWNhc3QuZGF5cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzOyBpICs9IDEpIHtcbiAgICBmb3JlY2FzdC5kYXlzLnB1c2goe30pO1xuICAgIGZvcmVjYXN0LmRheXNbaV0uaWNvbiA9XG4gICAgICBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBmb3JlY2FzdC5kYXlzW2ldLmNvZGUgPVxuICAgICAgYWxsV2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmNvZGU7XG4gICAgZm9yZWNhc3QuZGF5c1tpXS5tYXhDID0gYWxsV2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jO1xuICAgIGZvcmVjYXN0LmRheXNbaV0ubWF4RiA9IGFsbFdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZjtcbiAgICBmb3JlY2FzdC5kYXlzW2ldLm1pbkMgPSBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2M7XG4gICAgZm9yZWNhc3QuZGF5c1tpXS5taW5GID0gYWxsV2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mO1xuICAgIGZvcmVjYXN0LmRheXNbaV0ucHJlY2lwaXRhdGlvbiA9XG4gICAgICBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICBmb3JlY2FzdC5kYXlzW2ldLmh1bWlkaXR5ID1cbiAgICAgIGFsbFdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z2h1bWlkaXR5O1xuICAgIGZvcmVjYXN0LmRheXNbaV0ubWF4V2luZEtQSCA9XG4gICAgICBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh3aW5kX2twaDtcbiAgICBmb3JlY2FzdC5kYXlzW2ldLm1heFdpbmRNUEggPVxuICAgICAgYWxsV2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4d2luZF9tcGg7XG4gIH1cblxuICByZXR1cm4gZm9yZWNhc3Q7XG59O1xuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IGFsbFdlYXRoZXIgPSBhd2FpdCBnZXRBbGxXZWF0aGVyKGxvY2F0aW9uKTtcbiAgY29uc3QgY3VycmVudCA9IGdldEN1cnJlbnRXZWF0aGVyKGFsbFdlYXRoZXIpO1xuICBjb25zdCBmb3JlY2FzdCA9IGdldEZvcmVjYXN0V2VhdGhlcihhbGxXZWF0aGVyKTtcbiAgY29uc3Qgd2VhdGhlciA9IHsgY3VycmVudCwgZm9yZWNhc3QgfTtcblxuICByZXR1cm4gd2VhdGhlcjtcbn07XG5cbmNvbnN0IGRldGVybWluZUJhY2tncm91bmQgPSAoY29kZSkgPT4ge1xuICBjb25zdCBjbGVhciA9IFsxMDAwXTtcbiAgY29uc3QgY2xvdWR5ID0gWzEwMDMsIDEwMDZdO1xuICBjb25zdCBmb2dneSA9IFsxMTM1LCAxMTQ3XTtcbiAgY29uc3Qgc25vd3kgPSBbMTA2NiwgMTA2OSwgMTA3MiwgMTExNCwgMTExNywgMTIxMCwgMTIxMywgMTI1NSwgMTI2MSwgMTI3OV07XG4gIGNvbnN0IHNub3dpZXIgPSBbMTIxNiwgMTIxOSwgMTIyMiwgMTIyNSwgMTIzNywgMTI1OCwgMTI2NCwgMTI4Ml07XG4gIGNvbnN0IHJhaW55ID0gW1xuICAgIDExNTAsIDExNTMsIDExNjgsIDExNzEsIDExODAsIDExODMsIDExOTgsIDEyMDQsIDEyNDAsIDEyNDksIDEyNzMsXG4gIF07XG5cbiAgaWYgKGNsZWFyLmluY2x1ZGVzKGNvZGUpKSB7XG4gICAgcmV0dXJuICdjbGVhcic7XG4gIH1cbiAgaWYgKGNsb3VkeS5pbmNsdWRlcyhjb2RlKSkge1xuICAgIHJldHVybiAnY2xvdWR5JztcbiAgfVxuICBpZiAoZm9nZ3kuaW5jbHVkZXMoY29kZSkpIHtcbiAgICByZXR1cm4gJ2ZvZ2d5JztcbiAgfVxuICBpZiAoc25vd3kuaW5jbHVkZXMoY29kZSkpIHtcbiAgICByZXR1cm4gJ3Nub3d5JztcbiAgfVxuICBpZiAoc25vd2llci5pbmNsdWRlcyhjb2RlKSkge1xuICAgIHJldHVybiAnc25vd2llcic7XG4gIH1cbiAgaWYgKHJhaW55LmluY2x1ZGVzKGNvZGUpKSB7XG4gICAgcmV0dXJuICdyYWlueSc7XG4gIH1cblxuICByZXR1cm4gJ3JhaW5pZXInO1xufTtcblxuY29uc3QgY2hhbmdlQ3VycmVudE1pbmkgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5pY29uJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC50ZW1wZXJhdHVyZUMnKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLnRlbXBlcmF0dXJlRicpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAuY29uZGl0aW9uJyk7XG4gIGNvbnN0IGZ1bGxMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5sb2NhdGlvbicpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLnRpbWUnKTtcblxuICBjdXJyZW50LmNsYXNzTGlzdCA9IGBjdXJyZW50ICR7ZGV0ZXJtaW5lQmFja2dyb3VuZCh3ZWF0aGVyLmN1cnJlbnQuY29kZSl9YDtcbiAgaWNvbi5zcmMgPSB3ZWF0aGVyLmN1cnJlbnQuaWNvbjtcbiAgdGVtcGVyYXR1cmVDLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5jdXJyZW50LnRlbXBDfcKwQ2A7XG4gIHRlbXBlcmF0dXJlRi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuY3VycmVudC50ZW1wRn3CsEZgO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uO1xuICBmdWxsTG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmN1cnJlbnQuY2l0eX0sICR7d2VhdGhlci5jdXJyZW50LnJlZ2lvbn1gO1xuICB0aW1lLnRleHRDb250ZW50ID0gd2VhdGhlci5jdXJyZW50LnRpbWU7XG59O1xuXG5jb25zdCBjaGFuZ2VDdXJyZW50RGV0YWlscyA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGZlZWxzTGlrZUMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAuZmVlbHNMaWtlQycpO1xuICBjb25zdCBmZWVsc0xpa2VGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLmZlZWxzTGlrZUYnKTtcbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5wcmVjaXBpdGF0aW9uJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLmh1bWlkaXR5Jyk7XG4gIGNvbnN0IHdpbmRLUEggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAud2luZEtQSCcpO1xuICBjb25zdCB3aW5kTVBIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLndpbmRNUEgnKTtcblxuICBmZWVsc0xpa2VDLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlci5jdXJyZW50LmZlZWxzTGlrZUN9wrBDYDtcbiAgZmVlbHNMaWtlRi50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXIuY3VycmVudC5mZWVsc0xpa2VGfcKwRmA7XG4gIHByZWNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBgUHJlY2lwaXRhdGlvbjogJHt3ZWF0aGVyLmN1cnJlbnQucHJlY2lwaXRhdGlvbn0lYDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlci5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICB3aW5kS1BILnRleHRDb250ZW50ID0gYFdpbmQ6ICR7d2VhdGhlci5jdXJyZW50LndpbmRLUEh9S1BIYDtcbiAgd2luZE1QSC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3dlYXRoZXIuY3VycmVudC53aW5kTVBIfU1QSGA7XG59O1xuXG5jb25zdCBjaGFuZ2VGb3JlY2FzdE1heE1pbiA9ICh3ZWF0aGVyKSA9PiB7XG4gIHdlYXRoZXIuZm9yZWNhc3QuZGF5cy5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3REYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QgLmRheSR7aW5kZXh9YCk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdCAuZGF5JHtpbmRleH0gLmljb25gKTtcbiAgICBjb25zdCBtYXhDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0IC5kYXkke2luZGV4fSAubWF4Q2ApO1xuICAgIGNvbnN0IG1heEYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QgLmRheSR7aW5kZXh9IC5tYXhGYCk7XG4gICAgY29uc3QgbWluQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdCAuZGF5JHtpbmRleH0gLm1pbkNgKTtcbiAgICBjb25zdCBtaW5GID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0IC5kYXkke2luZGV4fSAubWluRmApO1xuXG4gICAgZm9yZWNhc3REYXkuY2xhc3NMaXN0ID0gYGRheSBkYXkke2luZGV4fSAke2RldGVybWluZUJhY2tncm91bmQoZGF5LmNvZGUpfWA7XG4gICAgaWNvbi5zcmMgPSBkYXkuaWNvbjtcbiAgICBtYXhDLnRleHRDb250ZW50ID0gYE1heDogJHtkYXkubWF4Q33CsENgO1xuICAgIG1heEYudGV4dENvbnRlbnQgPSBgTWF4OiAke2RheS5tYXhGfcKwRmA7XG4gICAgbWluQy50ZXh0Q29udGVudCA9IGBNaW46ICR7ZGF5Lm1pbkN9wrBDYDtcbiAgICBtaW5GLnRleHRDb250ZW50ID0gYE1pbjogJHtkYXkubWluRn3CsEZgO1xuICB9KTtcbn07XG5cbmNvbnN0IGNoYW5nZUZvcmVjYXN0RGV0YWlscyA9ICh3ZWF0aGVyKSA9PiB7XG4gIHdlYXRoZXIuZm9yZWNhc3QuZGF5cy5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmZvcmVjYXN0IC5kYXkke2luZGV4fSAucHJlY2lwaXRhdGlvbmAsXG4gICAgKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdCAuZGF5JHtpbmRleH0gLmh1bWlkaXR5YCk7XG4gICAgY29uc3QgbWF4V2luZEtQSCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmZvcmVjYXN0IC5kYXkke2luZGV4fSAubWF4V2luZEtQSGAsXG4gICAgKTtcbiAgICBjb25zdCBtYXhXaW5kTVBIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuZm9yZWNhc3QgLmRheSR7aW5kZXh9IC5tYXhXaW5kTVBIYCxcbiAgICApO1xuICAgIHByZWNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBgUHJlY2lwaXRhdGlvbjogJHtkYXkucHJlY2lwaXRhdGlvbn0lYDtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXkuaHVtaWRpdHl9JWA7XG4gICAgbWF4V2luZEtQSC50ZXh0Q29udGVudCA9IGBNYXggd2luZDogJHtkYXkubWF4V2luZEtQSH1LUEhgO1xuICAgIG1heFdpbmRNUEgudGV4dENvbnRlbnQgPSBgTWF4IHdpbmQ6ICR7ZGF5Lm1heFdpbmRNUEh9TVBIYDtcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93RXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG5cbiAgZXJyb3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVycm9yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9LCAyNTAwKTtcbn07XG5cbmNvbnN0IHNob3dXZWF0aGVyUmVwb3J0ID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBoZWF2eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gIGNvbnN0IGF1ZGlvcyA9IFt3ZWF0aGVyUmVwb3J0MSwgd2VhdGhlclJlcG9ydDIsIHdlYXRoZXJSZXBvcnQzXTtcbiAgY29uc3QgY2hvc2VuQXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcblxuICBoZWF2eS5jbGFzc0xpc3QgPSAnaGVhdnknO1xuICBpbWcuc3JjID0gaGVhdnlXZWF0aGVyO1xuICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbiAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlZCcpO1xuICBmb290ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbiAgY2hvc2VuQXVkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2F1ZGlvL3dhdicpO1xuICBjaG9zZW5BdWRpby5zcmMgPSBhdWRpb3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyldO1xuXG4gIGF1ZGlvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJyk7XG4gIGF1ZGlvLmFwcGVuZChjaG9zZW5BdWRpbyk7XG4gIGhlYXZ5LmFwcGVuZChpbWcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgIGNvbnN0IG1lbmFjaW5nSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBtZW5hY2luZ0ltZy5zcmMgPSBtZW5hY2luZztcblxuICAgIGhlYXZ5LmFwcGVuZChtZW5hY2luZ0ltZyk7XG4gIH1cbiAgaGVhdnkuYXBwZW5kKGF1ZGlvKTtcbiAgYm9keS5hcHBlbmQoaGVhdnkpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlZCcpO1xuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGhlYXZ5KTtcbiAgfSwgMzAwMCk7XG59O1xuXG5jb25zdCBjaGFuZ2VXZWF0aGVyID0gKGxvY2F0aW9uKSA9PiB7XG4gIGdldFdlYXRoZXIobG9jYXRpb24pXG4gICAgLnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICAgIGNoYW5nZUN1cnJlbnRNaW5pKHdlYXRoZXIpO1xuICAgICAgY2hhbmdlQ3VycmVudERldGFpbHMod2VhdGhlcik7XG4gICAgICBjaGFuZ2VGb3JlY2FzdE1heE1pbih3ZWF0aGVyKTtcbiAgICAgIGNoYW5nZUZvcmVjYXN0RGV0YWlscyh3ZWF0aGVyKTtcbiAgICAgIHNob3dXZWF0aGVyUmVwb3J0KCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgc2hvd0Vycm9yKCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VXZWF0aGVyO1xuIiwiaW1wb3J0IHdlYXRoZXJSZXBvcnQgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXIuc3ZnJztcbmltcG9ydCBjaGFuZ2VXZWF0aGVyIGZyb20gJy4vQVBJJztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBDdG9GID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgbG9nby5zcmMgPSB3ZWF0aGVyUmVwb3J0O1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdXZWF0aGVyIFJlcG9ydCc7XG4gIEN0b0YudGV4dENvbnRlbnQgPSAnQy9GJztcbiAgQ3RvRi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB1bml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bml0Jyk7XG5cbiAgICB1bml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICB1bml0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9KTtcblxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kKGxvZ28sIHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJDb250YWluZXIsIEN0b0YpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBzZWFyY2guY2xhc3NMaXN0ID0gJ3NlYXJjaCc7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWlucHV0Jyk7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgYSBjaXR5IG5hbWUnKTtcbiAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gJ0dldCB3ZWF0aGVyJztcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xuICAgIGNoYW5nZVdlYXRoZXIoaW5wdXQudmFsdWUpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH0pO1xuICBlcnJvci5jbGFzc0xpc3QgPSAnaGlkZGVuIGVycm9yJztcbiAgZXJyb3IudGV4dENvbnRlbnQgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgY2l0eSc7XG5cbiAgc2VhcmNoLmFwcGVuZChzZWFyY2hJbnB1dCwgc2VhcmNoQnV0dG9uLCBlcnJvcik7XG5cbiAgcmV0dXJuIHNlYXJjaDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRlbXBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB0ZW1wZXJhdHVyZUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICB0ZW1wQ29udGFpbmVyLmNsYXNzTGlzdCA9ICd0ZW1wJztcbiAgaWNvbi5jbGFzc0xpc3QgPSAnaWNvbic7XG4gIHRlbXBlcmF0dXJlQy5jbGFzc0xpc3QgPSAndW5pdCB0ZW1wZXJhdHVyZUMnO1xuICB0ZW1wZXJhdHVyZUYuY2xhc3NMaXN0ID0gJ3VuaXQgaGlkZGVuIHRlbXBlcmF0dXJlRic7XG5cbiAgdGVtcENvbnRhaW5lci5hcHBlbmQoaWNvbiwgdGVtcGVyYXR1cmVDLCB0ZW1wZXJhdHVyZUYpO1xuXG4gIHJldHVybiB0ZW1wQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlTWluaUNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgbWluaUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIG1pbmlDb250YWluZXIuY2xhc3NMaXN0ID0gJ21pbmknO1xuICBjb25kaXRpb24uY2xhc3NMaXN0ID0gJ2NvbmRpdGlvbic7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdCA9ICdsb2NhdGlvbic7XG4gIHRpbWUuY2xhc3NMaXN0ID0gJ3RpbWUnO1xuXG4gIG1pbmlDb250YWluZXIuYXBwZW5kKGNyZWF0ZVRlbXBDb250YWluZXIoKSwgY29uZGl0aW9uLCBsb2NhdGlvbiwgdGltZSk7XG5cbiAgcmV0dXJuIG1pbmlDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVDdXJyZW50RGV0YWlsc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGZlZWxzTGlrZUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGZlZWxzTGlrZUYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB3aW5kS1BIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB3aW5kTVBIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGRldGFpbHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ2RldGFpbHMnO1xuXG4gIGZlZWxzTGlrZUMuY2xhc3NMaXN0ID0gJ3VuaXQgZmVlbHNMaWtlQyc7XG4gIGZlZWxzTGlrZUYuY2xhc3NMaXN0ID0gJ3VuaXQgaGlkZGVuIGZlZWxzTGlrZUYnO1xuICBwcmVjaXBpdGF0aW9uLmNsYXNzTGlzdCA9ICdwcmVjaXBpdGF0aW9uJztcbiAgaHVtaWRpdHkuY2xhc3NMaXN0ID0gJ2h1bWlkaXR5JztcbiAgd2luZEtQSC5jbGFzc0xpc3QgPSAndW5pdCB3aW5kS1BIJztcbiAgd2luZE1QSC5jbGFzc0xpc3QgPSAndW5pdCBoaWRkZW4gd2luZE1QSCc7XG5cbiAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgZmVlbHNMaWtlQyxcbiAgICBmZWVsc0xpa2VGLFxuICAgIHByZWNpcGl0YXRpb24sXG4gICAgaHVtaWRpdHksXG4gICAgd2luZEtQSCxcbiAgICB3aW5kTVBILFxuICApO1xuXG4gIHJldHVybiBkZXRhaWxzQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlQ3VycmVudFdlYXRoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY3VycmVudFdlYXRoZXIuY2xhc3NMaXN0ID0gJ2N1cnJlbnQnO1xuICBjdXJyZW50V2VhdGhlci5hcHBlbmQoY3JlYXRlTWluaUNvbnRhaW5lcigpLCBjcmVhdGVDdXJyZW50RGV0YWlsc0NvbnRhaW5lcigpKTtcblxuICByZXR1cm4gY3VycmVudFdlYXRoZXI7XG59O1xuXG5jb25zdCBjcmVhdGVNYXhNaW5Db250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1heE1pbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IG1heEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1heEYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1pbkMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1pbkYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgbWF4TWluQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdtYXhNaW4nO1xuICBpY29uLmNsYXNzTGlzdCA9ICdpY29uJztcbiAgbWF4Qy5jbGFzc0xpc3QgPSAndW5pdCBtYXhDJztcbiAgbWF4Ri5jbGFzc0xpc3QgPSAndW5pdCBoaWRkZW4gbWF4Ric7XG4gIG1pbkMuY2xhc3NMaXN0ID0gJ3VuaXQgbWluQyc7XG4gIG1pbkYuY2xhc3NMaXN0ID0gJ3VuaXQgaGlkZGVuIG1pbkYnO1xuXG4gIG1heE1pbkNvbnRhaW5lci5hcHBlbmQoaWNvbiwgbWF4QywgbWF4RiwgbWluQywgbWluRik7XG5cbiAgcmV0dXJuIG1heE1pbkNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0RGV0YWlsc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhdmVyYWdlSHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1heFdpbmRDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBtYXhXaW5kRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBkZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdkZXRhaWxzJztcbiAgYXZlcmFnZUh1bWlkaXR5LmNsYXNzTGlzdCA9ICdodW1pZGl0eSc7XG4gIHByZWNpcGl0YXRpb24uY2xhc3NMaXN0ID0gJ3ByZWNpcGl0YXRpb24nO1xuICBtYXhXaW5kQy5jbGFzc0xpc3QgPSAndW5pdCBtYXhXaW5kS1BIJztcbiAgbWF4V2luZEYuY2xhc3NMaXN0ID0gJ3VuaXQgaGlkZGVuIG1heFdpbmRNUEgnO1xuXG4gIGRldGFpbHNDb250YWluZXIuYXBwZW5kKHByZWNpcGl0YXRpb24sIGF2ZXJhZ2VIdW1pZGl0eSwgbWF4V2luZEMsIG1heFdpbmRGKTtcblxuICByZXR1cm4gZGV0YWlsc0NvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcmVjYXN0Q29udGFpbmVyID0gKGluZGV4KSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0ID0gYGRheSBkYXkke2luZGV4fWA7XG4gIGRheS5jbGFzc0xpc3QgPSAnZGF5TmFtZSc7XG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIGRheS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICBkYXkudGV4dENvbnRlbnQgPSAnVG9tb3Jyb3cnO1xuICB9IGVsc2Uge1xuICAgIGRheS50ZXh0Q29udGVudCA9ICdUaGUgZnV0dXJlJztcbiAgfVxuXG4gIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZChcbiAgICBkYXksXG4gICAgY3JlYXRlTWF4TWluQ29udGFpbmVyKCksXG4gICAgY3JlYXRlRm9yZWNhc3REZXRhaWxzQ29udGFpbmVyKCksXG4gICk7XG5cbiAgcmV0dXJuIGZvcmVjYXN0Q29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlRm9yZWNhc3RXZWF0aGVyID0gKCkgPT4ge1xuICBjb25zdCBmb3JlY2FzdGVXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZvcmVjYXN0RGF5cyA9IDM7XG5cbiAgZm9yZWNhc3RlV2VhdGhlci5jbGFzc0xpc3QgPSAnZm9yZWNhc3QnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzOyBpICs9IDEpIHtcbiAgICBmb3JlY2FzdGVXZWF0aGVyLmFwcGVuZChjcmVhdGVGb3JlY2FzdENvbnRhaW5lcihpKSk7XG4gIH1cblxuICByZXR1cm4gZm9yZWNhc3RlV2VhdGhlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgbWFpbi5hcHBlbmQoY3JlYXRlU2VhcmNoKCksIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKCksIGNyZWF0ZUZvcmVjYXN0V2VhdGhlcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29weS50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMyAnO1xuICBuYW1lLnRleHRDb250ZW50ID0gJ1JvZ2VyRWF1eCc7XG4gIGZvb3Rlci5hcHBlbmQoY29weSwgbmFtZSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgYm9keS5hcHBlbmQoY3JlYXRlSGVhZGVyKCksIGNyZWF0ZU1haW4oKSwgY3JlYXRlRm9vdGVyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNoYW5nZVdlYXRoZXIgZnJvbSAnLi9tb2R1bGVzL0FQSSc7XG5pbXBvcnQgY3JlYXRlQ29udGVudCBmcm9tICcuL21vZHVsZXMvVUknO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGRlZmF1bHRDaXR5ID0gJ0d1YWRhbGFqYXJhJztcblxuY3JlYXRlQ29udGVudCgpO1xuY2hhbmdlV2VhdGhlcihkZWZhdWx0Q2l0eSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=