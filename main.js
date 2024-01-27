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

  heavy.classList = 'heavy';
  img.src = _images_heavy_weather_jpg__WEBPACK_IMPORTED_MODULE_0__;
  header.classList.toggle('faded');
  main.classList.toggle('faded');
  footer.classList.toggle('faded');

  heavy.append(img);
  for (let i = 0; i < 7; i += 1) {
    const menacingImg = document.createElement('img');

    menacingImg.src = _images_menacing_png__WEBPACK_IMPORTED_MODULE_1__;

    heavy.append(menacingImg);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0Qyx5SUFBaUQ7QUFDN0YsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0QywySUFBa0Q7QUFDOUYsNENBQTRDLHVJQUFnRDtBQUM1Riw0Q0FBNEMsMklBQWtEO0FBQzlGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvTjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ0Q7QUFDcEI7O0FBRXJCOztBQUVBLHVEQUFhO0FBQ2Isd0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0Nsb3VkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbmRpdGlvbnMvY2xlYXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY29uZGl0aW9ucy9jbG91ZHkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY29uZGl0aW9ucy9mb2dneS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb25kaXRpb25zL3Nub3d5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbmRpdGlvbnMvc25vd2llci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb25kaXRpb25zL3JhaW55LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbmRpdGlvbnMvcmFpbmllci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IENsb3VkeTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbjpyb290IHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIC0tZGFyay1ibHVlOiAjMzEyNTVhO1xuICAtLWJsdWU6ICM3NWI0ZTM7XG4gIC0tbGlnaHQtYmx1ZTogIzhmZTBmZjtcbiAgLS1lcnJvci1ibHVlOiAjNTQ0MTZkO1xuICAtLXNoYWRvdzogMHB4IDBweCA4cHggdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkpO1xuICBmb250LWZhbWlseTogQ2xvdWR5O1xufVxuXG5oZWFkZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuaGVhZGVyID4gZGl2ID4gaW1nIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuaGVhZGVyID4gYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oZWFkZXIgPiBidXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTYwJSk7XG59XG5cbmhlYWRlciA+IGJ1dHRvbjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjQwJSk7XG59XG5cbm1haW4ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOlxuICAgICdpbnB1dCcgMnJlbVxuICAgICdjdXJyZW50JyBtYXgtY29udGVudFxuICAgICdmb3JlY2FzdCcgbWF4LWNvbnRlbnQ7XG4gIGdhcDogMzJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHZhcigtLWJsdWUpIDEwJSxcbiAgICB2YXIoLS1saWdodC1ibHVlKSAyNSUsXG4gICAgd2hpdGUsXG4gICAgdmFyKC0tbGlnaHQtYmx1ZSkgNzUlLFxuICAgIHZhcigtLWJsdWUpIDkwJVxuICApO1xufVxuXG4uc2VhcmNoIHtcbiAgd2lkdGg6IDgwJTtcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZyZW07XG4gIGdhcDogNHB4O1xufVxuXG4uc2VhcmNoID4gKiB7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2VhcmNoIGlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG59XG5cbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xufVxuXG4uc2VhcmNoIGJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2ggYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDE2MCUpO1xufVxuXG4uc2VhcmNoIGJ1dHRvbjphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjQwJSk7XG59XG5cbi5zZWFyY2ggLmVycm9yIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1ibHVlKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLmN1cnJlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY3VycmVudCA+ICoge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5taW5pIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAndGVtcENvbicgMWZyXG4gICAgJ2NvbmRpdGlvbicgbWF4LWNvbnRlbnRcbiAgICAnbG9jYXRpb24nIG1heC1jb250ZW50XG4gICAgJ3RpbWUnIG1heC1jb250ZW50IC8gMWZyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLm1pbmkgLnRlbXAge1xuICBncmlkLWFyZWE6IHRlbXBDb247XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6ICdpY29uIHRlbXAnO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLm1pbmkgLmljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNik7XG4gIGdyaWQtYXJlYTogaWNvbjtcbn1cblxuLm1pbmkgLnRlbXBlcmF0dXJlQyxcbi5taW5pIC50ZW1wZXJhdHVyZUYge1xuICBncmlkLWFyZWE6IHRlbXA7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLm1pbmkgLmNvbmRpdGlvbixcbi5taW5pIC5sb2NhdGlvbixcbi5taW5pIC50aW1lIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5taW5pIC5jb25kaXRpb24ge1xuICBncmlkLWFyZWE6IGNvbmRpdGlvbjtcbn1cblxuLm1pbmkgLmxvY2F0aW9uIHtcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcbn1cblxuLm1pbmkgLnRpbWUge1xuICBncmlkLWFyZWE6IHRpbWU7XG59XG5cbi5jdXJyZW50IC5kZXRhaWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAnZmVlbHMnIDFmclxuICAgICdwcmVjaXBpdGF0aW9uJyAxZnJcbiAgICAnaHVtaWRpdHknIDFmclxuICAgICd3aW5kJyAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmN1cnJlbnQgLmRldGFpbHMgLmZlZWxzTGlrZUMsXG4uY3VycmVudCAuZGV0YWlscyAuZmVlbHNMaWtlRiB7XG4gIGdyaWQtYXJlYTogZmVlbHM7XG59XG5cbi5jdXJyZW50IC5kZXRhaWxzIC53aW5kS1BILFxuLmN1cnJlbnQgLmRldGFpbHMgLndpbmRNUEgge1xuICBncmlkLWFyZWE6IHdpbmQ7XG59XG5cbi5mb3JlY2FzdCB7XG4gIGdyaWQtYXJlYTogZm9yZWNhc3Q7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyMDBweCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMycHg7XG59XG5cbi5kYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmRheSAuZGF5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLm1heE1pbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgJ2ljb24gbWF4JyAxZnJcbiAgICAnaWNvbiBtaW4nIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5tYXhNaW4gLmljb24ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIGdyaWQtYXJlYTogaWNvbjtcbn1cblxuLm1heE1pbiAubWF4Qyxcbi5tYXhNaW4gLm1heEYge1xuICBncmlkLWFyZWE6IG1heDtcbn1cblxuLm1heE1pbiAubWluQyxcbi5tYXhNaW4gLm1pbkYge1xuICBncmlkLWFyZWE6IG1pbjtcbn1cblxuLmRheSAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgJ3ByZWNpcGl0YXRpb24nIDFmclxuICAgICdodW1pZGl0eScgMWZyXG4gICAgJ3dpbmQnIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmRheSAuZGV0YWlscyAucHJlY2lwaXRhdGlvbiB7XG4gIGdyaWQtYXJlYTogcHJlY2lwaXRhdGlvbjtcbn1cblxuLmRheSAuZGV0YWlscyAuaHVtaWRpdHkge1xuICBncmlkLWFyZWE6IGh1bWlkaXR5O1xufVxuXG4uZGF5IC5kZXRhaWxzIC5tYXhXaW5kS1BILFxuLmRheSAuZGV0YWlscyAubWF4V2luZE1QSCB7XG4gIGdyaWQtYXJlYTogd2luZDtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBDbG91ZHk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tYmx1ZSksIHZhcigtLWxpZ2h0LWJsdWUpLCB3aGl0ZSk7XG59XG5cbi5mYWRlZCB7XG4gIGZpbHRlcjogYmx1cig4cHgpO1xufVxuXG4uaGVhdnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogc3RhbmRDYWxsIDNzIGVhc2UgMTtcbn1cblxuLmhlYXZ5IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgei1pbmRleDogMjtcbn1cblxuLmhlYXZ5IDpmaXJzdC1jaGlsZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oZWF2eSA6bnRoLWNoaWxkKDIpIHtcbiAgdG9wOiAyMHZoO1xuICBsZWZ0OiAzdnc7XG4gIGFuaW1hdGlvbjogbWVuYWNpbmczIDEuNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmhlYXZ5IDpudGgtY2hpbGQoMykge1xuICB0b3A6IDM1dmg7XG4gIGxlZnQ6IDEzdnc7XG4gIGFuaW1hdGlvbjogbWVuYWNpbmcyIDEuNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuLmhlYXZ5IDpudGgtY2hpbGQoNCkge1xuICB0b3A6IDF2aDtcbiAgbGVmdDogNzB2dztcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzEgMS41cyBlYXNlIGluZmluaXRlO1xufVxuXG4uaGVhdnkgOm50aC1jaGlsZCg1KSB7XG4gIHRvcDogMTV2aDtcbiAgbGVmdDogNzd2dztcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzMgMS41cyBlYXNlIGluZmluaXRlO1xufVxuXG4uaGVhdnkgOm50aC1jaGlsZCg2KSB7XG4gIHRvcDogMzB2aDtcbiAgbGVmdDogODR2dztcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzMgMS41cyBlYXNlIGluZmluaXRlO1xufVxuXG4uaGVhdnkgOm50aC1jaGlsZCg3KSB7XG4gIHRvcDogNzB2aDtcbiAgbGVmdDogMzR2dztcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzIgMS41cyBlYXNlIGluZmluaXRlO1xufVxuXG4uaGVhdnkgOm50aC1jaGlsZCg4KSB7XG4gIHRvcDogNzd2aDtcbiAgbGVmdDogNDh2dztcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzEgMS41cyBlYXNlIGluZmluaXRlO1xufVxuXG4uY2xlYXIge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLmNsb3VkeSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5mb2dneSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbi5zbm93eSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbi5zbm93aWVyIHtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cblxuLnJhaW55IHtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbn1cblxuLnJhaW5pZXIge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTtcbn1cblxuQGtleWZyYW1lcyBzdGFuZENhbGwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1lbmFjaW5nMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cblxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG5cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtZW5hY2luZzIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG5cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbWVuYWNpbmczIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxuXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG5cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cblxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmN1cnJlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuaGVhdnkgaW1nIHtcbiAgICB3aWR0aDogNjZweDtcbiAgfVxuXG4gIC5oZWF2eSA6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxNDAlO1xuICAgIHRvcDogMTB2aDtcbiAgICBsZWZ0OiAtMzB2dztcbiAgfVxuXG4gIGhlYWRlciA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2Isa0VB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RDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5REFBc0Q7QUFDeEQ7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IENsb3VkeTtcXG4gIHNyYzogdXJsKC4vZm9udHMvQ2xvdWQub3RmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAtLWRhcmstYmx1ZTogIzMxMjU1YTtcXG4gIC0tYmx1ZTogIzc1YjRlMztcXG4gIC0tbGlnaHQtYmx1ZTogIzhmZTBmZjtcXG4gIC0tZXJyb3ItYmx1ZTogIzU0NDE2ZDtcXG4gIC0tc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tYmx1ZSkpO1xcbiAgZm9udC1mYW1pbHk6IENsb3VkeTtcXG59XFxuXFxuaGVhZGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuaGVhZGVyID4gZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgPiBidXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciA+IGJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTYwJSk7XFxufVxcblxcbmhlYWRlciA+IGJ1dHRvbjphY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDI0MCUpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2lucHV0JyAycmVtXFxuICAgICdjdXJyZW50JyBtYXgtY29udGVudFxcbiAgICAnZm9yZWNhc3QnIG1heC1jb250ZW50O1xcbiAgZ2FwOiAzMnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdmFyKC0tYmx1ZSkgMTAlLFxcbiAgICB2YXIoLS1saWdodC1ibHVlKSAyNSUsXFxuICAgIHdoaXRlLFxcbiAgICB2YXIoLS1saWdodC1ibHVlKSA3NSUsXFxuICAgIHZhcigtLWJsdWUpIDkwJVxcbiAgKTtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICB3aWR0aDogODAlO1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZyZW07XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNlYXJjaCA+ICoge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuLnNlYXJjaCBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2ggYnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxNjAlKTtcXG59XFxuXFxuLnNlYXJjaCBidXR0b246YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyNDAlKTtcXG59XFxuXFxuLnNlYXJjaCAuZXJyb3Ige1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3ItYmx1ZSk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbi5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmN1cnJlbnQgPiAqIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1pbmkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICd0ZW1wQ29uJyAxZnJcXG4gICAgJ2NvbmRpdGlvbicgbWF4LWNvbnRlbnRcXG4gICAgJ2xvY2F0aW9uJyBtYXgtY29udGVudFxcbiAgICAndGltZScgbWF4LWNvbnRlbnQgLyAxZnI7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5taW5pIC50ZW1wIHtcXG4gIGdyaWQtYXJlYTogdGVtcENvbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAnaWNvbiB0ZW1wJztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLm1pbmkgLmljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbn1cXG5cXG4ubWluaSAudGVtcGVyYXR1cmVDLFxcbi5taW5pIC50ZW1wZXJhdHVyZUYge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm1pbmkgLmNvbmRpdGlvbixcXG4ubWluaSAubG9jYXRpb24sXFxuLm1pbmkgLnRpbWUge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5taW5pIC5jb25kaXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBjb25kaXRpb247XFxufVxcblxcbi5taW5pIC5sb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbn1cXG5cXG4ubWluaSAudGltZSB7XFxuICBncmlkLWFyZWE6IHRpbWU7XFxufVxcblxcbi5jdXJyZW50IC5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnZmVlbHMnIDFmclxcbiAgICAncHJlY2lwaXRhdGlvbicgMWZyXFxuICAgICdodW1pZGl0eScgMWZyXFxuICAgICd3aW5kJyAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLmN1cnJlbnQgLmRldGFpbHMgLmZlZWxzTGlrZUMsXFxuLmN1cnJlbnQgLmRldGFpbHMgLmZlZWxzTGlrZUYge1xcbiAgZ3JpZC1hcmVhOiBmZWVscztcXG59XFxuXFxuLmN1cnJlbnQgLmRldGFpbHMgLndpbmRLUEgsXFxuLmN1cnJlbnQgLmRldGFpbHMgLndpbmRNUEgge1xcbiAgZ3JpZC1hcmVhOiB3aW5kO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgZ3JpZC1hcmVhOiBmb3JlY2FzdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjAwcHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMycHg7XFxufVxcblxcbi5kYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZGF5IC5kYXlOYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG5cXG4ubWF4TWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnaWNvbiBtYXgnIDFmclxcbiAgICAnaWNvbiBtaW4nIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5tYXhNaW4gLmljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbn1cXG5cXG4ubWF4TWluIC5tYXhDLFxcbi5tYXhNaW4gLm1heEYge1xcbiAgZ3JpZC1hcmVhOiBtYXg7XFxufVxcblxcbi5tYXhNaW4gLm1pbkMsXFxuLm1heE1pbiAubWluRiB7XFxuICBncmlkLWFyZWE6IG1pbjtcXG59XFxuXFxuLmRheSAuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ3ByZWNpcGl0YXRpb24nIDFmclxcbiAgICAnaHVtaWRpdHknIDFmclxcbiAgICAnd2luZCcgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXFxuLmRheSAuZGV0YWlscyAucHJlY2lwaXRhdGlvbiB7XFxuICBncmlkLWFyZWE6IHByZWNpcGl0YXRpb247XFxufVxcblxcbi5kYXkgLmRldGFpbHMgLmh1bWlkaXR5IHtcXG4gIGdyaWQtYXJlYTogaHVtaWRpdHk7XFxufVxcblxcbi5kYXkgLmRldGFpbHMgLm1heFdpbmRLUEgsXFxuLmRheSAuZGV0YWlscyAubWF4V2luZE1QSCB7XFxuICBncmlkLWFyZWE6IHdpbmQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogQ2xvdWR5O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWJsdWUpLCB2YXIoLS1saWdodC1ibHVlKSwgd2hpdGUpO1xcbn1cXG5cXG4uZmFkZWQge1xcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcbi5oZWF2eSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFuaW1hdGlvbjogc3RhbmRDYWxsIDNzIGVhc2UgMTtcXG59XFxuXFxuLmhlYXZ5IGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmhlYXZ5IDpmaXJzdC1jaGlsZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5oZWF2eSA6bnRoLWNoaWxkKDIpIHtcXG4gIHRvcDogMjB2aDtcXG4gIGxlZnQ6IDN2dztcXG4gIGFuaW1hdGlvbjogbWVuYWNpbmczIDEuNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYXZ5IDpudGgtY2hpbGQoMykge1xcbiAgdG9wOiAzNXZoO1xcbiAgbGVmdDogMTN2dztcXG4gIGFuaW1hdGlvbjogbWVuYWNpbmcyIDEuNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYXZ5IDpudGgtY2hpbGQoNCkge1xcbiAgdG9wOiAxdmg7XFxuICBsZWZ0OiA3MHZ3O1xcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzEgMS41cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uaGVhdnkgOm50aC1jaGlsZCg1KSB7XFxuICB0b3A6IDE1dmg7XFxuICBsZWZ0OiA3N3Z3O1xcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzMgMS41cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uaGVhdnkgOm50aC1jaGlsZCg2KSB7XFxuICB0b3A6IDMwdmg7XFxuICBsZWZ0OiA4NHZ3O1xcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzMgMS41cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uaGVhdnkgOm50aC1jaGlsZCg3KSB7XFxuICB0b3A6IDcwdmg7XFxuICBsZWZ0OiAzNHZ3O1xcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzIgMS41cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uaGVhdnkgOm50aC1jaGlsZCg4KSB7XFxuICB0b3A6IDc3dmg7XFxuICBsZWZ0OiA0OHZ3O1xcbiAgYW5pbWF0aW9uOiBtZW5hY2luZzEgMS41cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvbmRpdGlvbnMvY2xlYXIuanBnKTtcXG59XFxuXFxuLmNsb3VkeSB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jb25kaXRpb25zL2Nsb3VkeS5qcGcpO1xcbn1cXG5cXG4uZm9nZ3kge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY29uZGl0aW9ucy9mb2dneS5qcGcpO1xcbn1cXG5cXG4uc25vd3kge1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY29uZGl0aW9ucy9zbm93eS5qcGcpO1xcbn1cXG5cXG4uc25vd2llciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9jb25kaXRpb25zL3Nub3dpZXIuanBnKTtcXG59XFxuXFxuLnJhaW55IHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvbmRpdGlvbnMvcmFpbnkuanBnKTtcXG59XFxuXFxuLnJhaW5pZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2NvbmRpdGlvbnMvcmFpbmllci5qcGcpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN0YW5kQ2FsbCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbWVuYWNpbmcxIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtZW5hY2luZzIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuXFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1lbmFjaW5nMyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG5cXG4gIDMzJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gIH1cXG5cXG4gIDY2JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmN1cnJlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmhlYXZ5IGltZyB7XFxuICAgIHdpZHRoOiA2NnB4O1xcbiAgfVxcblxcbiAgLmhlYXZ5IDpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiAxNDAlO1xcbiAgICB0b3A6IDEwdmg7XFxuICAgIGxlZnQ6IC0zMHZ3O1xcbiAgfVxcblxcbiAgaGVhZGVyID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBoZWF2eVdlYXRoZXIgZnJvbSAnLi4vaW1hZ2VzL2hlYXZ5LXdlYXRoZXIuanBnJztcbmltcG9ydCBtZW5hY2luZyBmcm9tICcuLi9pbWFnZXMvbWVuYWNpbmcucG5nJztcblxuY29uc3QgZ2V0QWxsV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCBrZXkgPSAnMjE5ZWM2M2VkMmEwNDE3OTgyZTQzMTA2MjQxOTAxJztcblxuICBjb25zdCB1bmZvcm1hdHRlZFdlYXRoZXIgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtrZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcbiAgKTtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHVuZm9ybWF0dGVkV2VhdGhlci5qc29uKCk7XG5cbiAgcmV0dXJuIHdlYXRoZXI7XG59O1xuXG5jb25zdCBnZXRDdXJyZW50V2VhdGhlciA9IChhbGxXZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnQgPSB7fTtcblxuICBbLCBjdXJyZW50LnRpbWVdID0gYWxsV2VhdGhlci5jdXJyZW50Lmxhc3RfdXBkYXRlZC5zcGxpdCgnICcpO1xuICBjdXJyZW50LnRlbXBDID0gYWxsV2VhdGhlci5jdXJyZW50LnRlbXBfYztcbiAgY3VycmVudC50ZW1wRiA9IGFsbFdlYXRoZXIuY3VycmVudC50ZW1wX2Y7XG4gIGN1cnJlbnQuZmVlbHNMaWtlQyA9IGFsbFdlYXRoZXIuY3VycmVudC5mZWVsc2xpa2VfYztcbiAgY3VycmVudC5mZWVsc0xpa2VGID0gYWxsV2VhdGhlci5jdXJyZW50LmZlZWxzbGlrZV9mO1xuICBjdXJyZW50LnByZWNpcGl0YXRpb24gPVxuICAgIGFsbFdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltcbiAgICAgIHBhcnNlSW50KGN1cnJlbnQudGltZS5zbGljZSgwLCAyKSwgMTApXG4gICAgXS5jaGFuY2Vfb2ZfcmFpbjtcbiAgY3VycmVudC5odW1pZGl0eSA9IGFsbFdlYXRoZXIuY3VycmVudC5odW1pZGl0eTtcbiAgY3VycmVudC53aW5kS1BIID0gYWxsV2VhdGhlci5jdXJyZW50LndpbmRfa3BoO1xuICBjdXJyZW50LndpbmRNUEggPSBhbGxXZWF0aGVyLmN1cnJlbnQud2luZF9tcGg7XG4gIGN1cnJlbnQuY29uZGl0aW9uID0gYWxsV2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjdXJyZW50Lmljb24gPSBhbGxXZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGN1cnJlbnQuY29kZSA9IGFsbFdlYXRoZXIuY3VycmVudC5jb25kaXRpb24uY29kZTtcbiAgY3VycmVudC5jaXR5ID0gYWxsV2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuICBjdXJyZW50LnJlZ2lvbiA9IGFsbFdlYXRoZXIubG9jYXRpb24ucmVnaW9uO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuY29uc3QgZ2V0Rm9yZWNhc3RXZWF0aGVyID0gKGFsbFdlYXRoZXIpID0+IHtcbiAgY29uc3QgZm9yZWNhc3QgPSB7fTtcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gMztcblxuICBmb3JlY2FzdC5kYXlzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXM7IGkgKz0gMSkge1xuICAgIGZvcmVjYXN0LmRheXMucHVzaCh7fSk7XG4gICAgZm9yZWNhc3QuZGF5c1tpXS5pY29uID1cbiAgICAgIGFsbFdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGZvcmVjYXN0LmRheXNbaV0uY29kZSA9XG4gICAgICBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uY29kZTtcbiAgICBmb3JlY2FzdC5kYXlzW2ldLm1heEMgPSBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2M7XG4gICAgZm9yZWNhc3QuZGF5c1tpXS5tYXhGID0gYWxsV2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mO1xuICAgIGZvcmVjYXN0LmRheXNbaV0ubWluQyA9IGFsbFdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYztcbiAgICBmb3JlY2FzdC5kYXlzW2ldLm1pbkYgPSBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2Y7XG4gICAgZm9yZWNhc3QuZGF5c1tpXS5wcmVjaXBpdGF0aW9uID1cbiAgICAgIGFsbFdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgIGZvcmVjYXN0LmRheXNbaV0uaHVtaWRpdHkgPVxuICAgICAgYWxsV2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZnaHVtaWRpdHk7XG4gICAgZm9yZWNhc3QuZGF5c1tpXS5tYXhXaW5kS1BIID1cbiAgICAgIGFsbFdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHdpbmRfa3BoO1xuICAgIGZvcmVjYXN0LmRheXNbaV0ubWF4V2luZE1QSCA9XG4gICAgICBhbGxXZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh3aW5kX21waDtcbiAgfVxuXG4gIHJldHVybiBmb3JlY2FzdDtcbn07XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgYWxsV2VhdGhlciA9IGF3YWl0IGdldEFsbFdlYXRoZXIobG9jYXRpb24pO1xuICBjb25zdCBjdXJyZW50ID0gZ2V0Q3VycmVudFdlYXRoZXIoYWxsV2VhdGhlcik7XG4gIGNvbnN0IGZvcmVjYXN0ID0gZ2V0Rm9yZWNhc3RXZWF0aGVyKGFsbFdlYXRoZXIpO1xuICBjb25zdCB3ZWF0aGVyID0geyBjdXJyZW50LCBmb3JlY2FzdCB9O1xuXG4gIHJldHVybiB3ZWF0aGVyO1xufTtcblxuY29uc3QgZGV0ZXJtaW5lQmFja2dyb3VuZCA9IChjb2RlKSA9PiB7XG4gIGNvbnN0IGNsZWFyID0gWzEwMDBdO1xuICBjb25zdCBjbG91ZHkgPSBbMTAwMywgMTAwNl07XG4gIGNvbnN0IGZvZ2d5ID0gWzExMzUsIDExNDddO1xuICBjb25zdCBzbm93eSA9IFsxMDY2LCAxMDY5LCAxMDcyLCAxMTE0LCAxMTE3LCAxMjEwLCAxMjEzLCAxMjU1LCAxMjYxLCAxMjc5XTtcbiAgY29uc3Qgc25vd2llciA9IFsxMjE2LCAxMjE5LCAxMjIyLCAxMjI1LCAxMjM3LCAxMjU4LCAxMjY0LCAxMjgyXTtcbiAgY29uc3QgcmFpbnkgPSBbXG4gICAgMTE1MCwgMTE1MywgMTE2OCwgMTE3MSwgMTE4MCwgMTE4MywgMTE5OCwgMTIwNCwgMTI0MCwgMTI0OSwgMTI3MyxcbiAgXTtcblxuICBpZiAoY2xlYXIuaW5jbHVkZXMoY29kZSkpIHtcbiAgICByZXR1cm4gJ2NsZWFyJztcbiAgfVxuICBpZiAoY2xvdWR5LmluY2x1ZGVzKGNvZGUpKSB7XG4gICAgcmV0dXJuICdjbG91ZHknO1xuICB9XG4gIGlmIChmb2dneS5pbmNsdWRlcyhjb2RlKSkge1xuICAgIHJldHVybiAnZm9nZ3knO1xuICB9XG4gIGlmIChzbm93eS5pbmNsdWRlcyhjb2RlKSkge1xuICAgIHJldHVybiAnc25vd3knO1xuICB9XG4gIGlmIChzbm93aWVyLmluY2x1ZGVzKGNvZGUpKSB7XG4gICAgcmV0dXJuICdzbm93aWVyJztcbiAgfVxuICBpZiAocmFpbnkuaW5jbHVkZXMoY29kZSkpIHtcbiAgICByZXR1cm4gJ3JhaW55JztcbiAgfVxuXG4gIHJldHVybiAncmFpbmllcic7XG59O1xuXG5jb25zdCBjaGFuZ2VDdXJyZW50TWluaSA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCcpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLmljb24nKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLnRlbXBlcmF0dXJlQycpO1xuICBjb25zdCB0ZW1wZXJhdHVyZUYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAudGVtcGVyYXR1cmVGJyk7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5jb25kaXRpb24nKTtcbiAgY29uc3QgZnVsbExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLmxvY2F0aW9uJyk7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAudGltZScpO1xuXG4gIGN1cnJlbnQuY2xhc3NMaXN0ID0gYGN1cnJlbnQgJHtkZXRlcm1pbmVCYWNrZ3JvdW5kKHdlYXRoZXIuY3VycmVudC5jb2RlKX1gO1xuICBpY29uLnNyYyA9IHdlYXRoZXIuY3VycmVudC5pY29uO1xuICB0ZW1wZXJhdHVyZUMudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmN1cnJlbnQudGVtcEN9wrBDYDtcbiAgdGVtcGVyYXR1cmVGLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5jdXJyZW50LnRlbXBGfcKwRmA7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIuY3VycmVudC5jb25kaXRpb247XG4gIGZ1bGxMb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuY3VycmVudC5jaXR5fSwgJHt3ZWF0aGVyLmN1cnJlbnQucmVnaW9ufWA7XG4gIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmN1cnJlbnQudGltZTtcbn07XG5cbmNvbnN0IGNoYW5nZUN1cnJlbnREZXRhaWxzID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgZmVlbHNMaWtlQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC5mZWVsc0xpa2VDJyk7XG4gIGNvbnN0IGZlZWxzTGlrZUYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAuZmVlbHNMaWtlRicpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQgLnByZWNpcGl0YXRpb24nKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAuaHVtaWRpdHknKTtcbiAgY29uc3Qgd2luZEtQSCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50IC53aW5kS1BIJyk7XG4gIGNvbnN0IHdpbmRNUEggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudCAud2luZE1QSCcpO1xuXG4gIGZlZWxzTGlrZUMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHt3ZWF0aGVyLmN1cnJlbnQuZmVlbHNMaWtlQ33CsENgO1xuICBmZWVsc0xpa2VGLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlci5jdXJyZW50LmZlZWxzTGlrZUZ9wrBGYDtcbiAgcHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke3dlYXRoZXIuY3VycmVudC5wcmVjaXBpdGF0aW9ufSVgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIHdpbmRLUEgudGV4dENvbnRlbnQgPSBgV2luZDogJHt3ZWF0aGVyLmN1cnJlbnQud2luZEtQSH1LUEhgO1xuICB3aW5kTVBILnRleHRDb250ZW50ID0gYFdpbmQ6ICR7d2VhdGhlci5jdXJyZW50LndpbmRNUEh9TVBIYDtcbn07XG5cbmNvbnN0IGNoYW5nZUZvcmVjYXN0TWF4TWluID0gKHdlYXRoZXIpID0+IHtcbiAgd2VhdGhlci5mb3JlY2FzdC5kYXlzLmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBmb3JlY2FzdERheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdCAuZGF5JHtpbmRleH1gKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0IC5kYXkke2luZGV4fSAuaWNvbmApO1xuICAgIGNvbnN0IG1heEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QgLmRheSR7aW5kZXh9IC5tYXhDYCk7XG4gICAgY29uc3QgbWF4RiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdCAuZGF5JHtpbmRleH0gLm1heEZgKTtcbiAgICBjb25zdCBtaW5DID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0IC5kYXkke2luZGV4fSAubWluQ2ApO1xuICAgIGNvbnN0IG1pbkYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QgLmRheSR7aW5kZXh9IC5taW5GYCk7XG5cbiAgICBmb3JlY2FzdERheS5jbGFzc0xpc3QgPSBgZGF5IGRheSR7aW5kZXh9ICR7ZGV0ZXJtaW5lQmFja2dyb3VuZChkYXkuY29kZSl9YDtcbiAgICBpY29uLnNyYyA9IGRheS5pY29uO1xuICAgIG1heEMudGV4dENvbnRlbnQgPSBgTWF4OiAke2RheS5tYXhDfcKwQ2A7XG4gICAgbWF4Ri50ZXh0Q29udGVudCA9IGBNYXg6ICR7ZGF5Lm1heEZ9wrBGYDtcbiAgICBtaW5DLnRleHRDb250ZW50ID0gYE1pbjogJHtkYXkubWluQ33CsENgO1xuICAgIG1pbkYudGV4dENvbnRlbnQgPSBgTWluOiAke2RheS5taW5GfcKwRmA7XG4gIH0pO1xufTtcblxuY29uc3QgY2hhbmdlRm9yZWNhc3REZXRhaWxzID0gKHdlYXRoZXIpID0+IHtcbiAgd2VhdGhlci5mb3JlY2FzdC5kYXlzLmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuZm9yZWNhc3QgLmRheSR7aW5kZXh9IC5wcmVjaXBpdGF0aW9uYCxcbiAgICApO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0IC5kYXkke2luZGV4fSAuaHVtaWRpdHlgKTtcbiAgICBjb25zdCBtYXhXaW5kS1BIID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuZm9yZWNhc3QgLmRheSR7aW5kZXh9IC5tYXhXaW5kS1BIYCxcbiAgICApO1xuICAgIGNvbnN0IG1heFdpbmRNUEggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5mb3JlY2FzdCAuZGF5JHtpbmRleH0gLm1heFdpbmRNUEhgLFxuICAgICk7XG4gICAgcHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IGBQcmVjaXBpdGF0aW9uOiAke2RheS5wcmVjaXBpdGF0aW9ufSVgO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RheS5odW1pZGl0eX0lYDtcbiAgICBtYXhXaW5kS1BILnRleHRDb250ZW50ID0gYE1heCB3aW5kOiAke2RheS5tYXhXaW5kS1BIfUtQSGA7XG4gICAgbWF4V2luZE1QSC50ZXh0Q29udGVudCA9IGBNYXggd2luZDogJHtkYXkubWF4V2luZE1QSH1NUEhgO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcblxuICBlcnJvci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZXJyb3IuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0sIDI1MDApO1xufTtcblxuY29uc3Qgc2hvd1dlYXRoZXJSZXBvcnQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGhlYXZ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaGVhdnkuY2xhc3NMaXN0ID0gJ2hlYXZ5JztcbiAgaW1nLnNyYyA9IGhlYXZ5V2VhdGhlcjtcbiAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGVkJyk7XG4gIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZWQnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGVkJyk7XG5cbiAgaGVhdnkuYXBwZW5kKGltZyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgY29uc3QgbWVuYWNpbmdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIG1lbmFjaW5nSW1nLnNyYyA9IG1lbmFjaW5nO1xuXG4gICAgaGVhdnkuYXBwZW5kKG1lbmFjaW5nSW1nKTtcbiAgfVxuICBib2R5LmFwcGVuZChoZWF2eSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGVkJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlZCcpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QudG9nZ2xlKCdmYWRlZCcpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQoaGVhdnkpO1xuICB9LCAzMDAwKTtcbn07XG5cbmNvbnN0IGNoYW5nZVdlYXRoZXIgPSAobG9jYXRpb24pID0+IHtcbiAgZ2V0V2VhdGhlcihsb2NhdGlvbilcbiAgICAudGhlbigod2VhdGhlcikgPT4ge1xuICAgICAgY2hhbmdlQ3VycmVudE1pbmkod2VhdGhlcik7XG4gICAgICBjaGFuZ2VDdXJyZW50RGV0YWlscyh3ZWF0aGVyKTtcbiAgICAgIGNoYW5nZUZvcmVjYXN0TWF4TWluKHdlYXRoZXIpO1xuICAgICAgY2hhbmdlRm9yZWNhc3REZXRhaWxzKHdlYXRoZXIpO1xuICAgICAgc2hvd1dlYXRoZXJSZXBvcnQoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBzaG93RXJyb3IoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZVdlYXRoZXI7XG4iLCJpbXBvcnQgd2VhdGhlclJlcG9ydCBmcm9tICcuLi9pbWFnZXMvd2VhdGhlci5zdmcnO1xuaW1wb3J0IGNoYW5nZVdlYXRoZXIgZnJvbSAnLi9BUEknO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IEN0b0YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBsb2dvLnNyYyA9IHdlYXRoZXJSZXBvcnQ7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1dlYXRoZXIgUmVwb3J0JztcbiAgQ3RvRi50ZXh0Q29udGVudCA9ICdDL0YnO1xuICBDdG9GLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuaXQnKTtcblxuICAgIHVuaXRzLmZvckVhY2goKHVuaXQpID0+IHtcbiAgICAgIHVuaXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmQobG9nbywgdGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kKGhlYWRlckNvbnRhaW5lciwgQ3RvRik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHNlYXJjaC5jbGFzc0xpc3QgPSAnc2VhcmNoJztcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtaW5wdXQnKTtcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBhIGNpdHkgbmFtZScpO1xuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnR2V0IHdlYXRoZXInO1xuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XG4gICAgY2hhbmdlV2VhdGhlcihpbnB1dC52YWx1ZSk7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfSk7XG4gIGVycm9yLmNsYXNzTGlzdCA9ICdoaWRkZW4gZXJyb3InO1xuICBlcnJvci50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBjaXR5JztcblxuICBzZWFyY2guYXBwZW5kKHNlYXJjaElucHV0LCBzZWFyY2hCdXR0b24sIGVycm9yKTtcblxuICByZXR1cm4gc2VhcmNoO1xufTtcblxuY29uc3QgY3JlYXRlVGVtcENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHRlbXBDb250YWluZXIuY2xhc3NMaXN0ID0gJ3RlbXAnO1xuICBpY29uLmNsYXNzTGlzdCA9ICdpY29uJztcbiAgdGVtcGVyYXR1cmVDLmNsYXNzTGlzdCA9ICd1bml0IHRlbXBlcmF0dXJlQyc7XG4gIHRlbXBlcmF0dXJlRi5jbGFzc0xpc3QgPSAndW5pdCBoaWRkZW4gdGVtcGVyYXR1cmVGJztcblxuICB0ZW1wQ29udGFpbmVyLmFwcGVuZChpY29uLCB0ZW1wZXJhdHVyZUMsIHRlbXBlcmF0dXJlRik7XG5cbiAgcmV0dXJuIHRlbXBDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVNaW5pQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBtaW5pQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgbWluaUNvbnRhaW5lci5jbGFzc0xpc3QgPSAnbWluaSc7XG4gIGNvbmRpdGlvbi5jbGFzc0xpc3QgPSAnY29uZGl0aW9uJztcbiAgbG9jYXRpb24uY2xhc3NMaXN0ID0gJ2xvY2F0aW9uJztcbiAgdGltZS5jbGFzc0xpc3QgPSAndGltZSc7XG5cbiAgbWluaUNvbnRhaW5lci5hcHBlbmQoY3JlYXRlVGVtcENvbnRhaW5lcigpLCBjb25kaXRpb24sIGxvY2F0aW9uLCB0aW1lKTtcblxuICByZXR1cm4gbWluaUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUN1cnJlbnREZXRhaWxzQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgZmVlbHNMaWtlQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZmVlbHNMaWtlRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHdpbmRLUEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHdpbmRNUEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgZGV0YWlsc0NvbnRhaW5lci5jbGFzc0xpc3QgPSAnZGV0YWlscyc7XG5cbiAgZmVlbHNMaWtlQy5jbGFzc0xpc3QgPSAndW5pdCBmZWVsc0xpa2VDJztcbiAgZmVlbHNMaWtlRi5jbGFzc0xpc3QgPSAndW5pdCBoaWRkZW4gZmVlbHNMaWtlRic7XG4gIHByZWNpcGl0YXRpb24uY2xhc3NMaXN0ID0gJ3ByZWNpcGl0YXRpb24nO1xuICBodW1pZGl0eS5jbGFzc0xpc3QgPSAnaHVtaWRpdHknO1xuICB3aW5kS1BILmNsYXNzTGlzdCA9ICd1bml0IHdpbmRLUEgnO1xuICB3aW5kTVBILmNsYXNzTGlzdCA9ICd1bml0IGhpZGRlbiB3aW5kTVBIJztcblxuICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZChcbiAgICBmZWVsc0xpa2VDLFxuICAgIGZlZWxzTGlrZUYsXG4gICAgcHJlY2lwaXRhdGlvbixcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kS1BILFxuICAgIHdpbmRNUEgsXG4gICk7XG5cbiAgcmV0dXJuIGRldGFpbHNDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVDdXJyZW50V2VhdGhlciA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QgPSAnY3VycmVudCc7XG4gIGN1cnJlbnRXZWF0aGVyLmFwcGVuZChjcmVhdGVNaW5pQ29udGFpbmVyKCksIGNyZWF0ZUN1cnJlbnREZXRhaWxzQ29udGFpbmVyKCkpO1xuXG4gIHJldHVybiBjdXJyZW50V2VhdGhlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1heE1pbkNvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgbWF4TWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbWF4QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbWF4RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbWluQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbWluRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBtYXhNaW5Db250YWluZXIuY2xhc3NMaXN0ID0gJ21heE1pbic7XG4gIGljb24uY2xhc3NMaXN0ID0gJ2ljb24nO1xuICBtYXhDLmNsYXNzTGlzdCA9ICd1bml0IG1heEMnO1xuICBtYXhGLmNsYXNzTGlzdCA9ICd1bml0IGhpZGRlbiBtYXhGJztcbiAgbWluQy5jbGFzc0xpc3QgPSAndW5pdCBtaW5DJztcbiAgbWluRi5jbGFzc0xpc3QgPSAndW5pdCBoaWRkZW4gbWluRic7XG5cbiAgbWF4TWluQ29udGFpbmVyLmFwcGVuZChpY29uLCBtYXhDLCBtYXhGLCBtaW5DLCBtaW5GKTtcblxuICByZXR1cm4gbWF4TWluQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlRm9yZWNhc3REZXRhaWxzQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGF2ZXJhZ2VIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbWF4V2luZEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1heFdpbmRGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGRldGFpbHNDb250YWluZXIuY2xhc3NMaXN0ID0gJ2RldGFpbHMnO1xuICBhdmVyYWdlSHVtaWRpdHkuY2xhc3NMaXN0ID0gJ2h1bWlkaXR5JztcbiAgcHJlY2lwaXRhdGlvbi5jbGFzc0xpc3QgPSAncHJlY2lwaXRhdGlvbic7XG4gIG1heFdpbmRDLmNsYXNzTGlzdCA9ICd1bml0IG1heFdpbmRLUEgnO1xuICBtYXhXaW5kRi5jbGFzc0xpc3QgPSAndW5pdCBoaWRkZW4gbWF4V2luZE1QSCc7XG5cbiAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmQocHJlY2lwaXRhdGlvbiwgYXZlcmFnZUh1bWlkaXR5LCBtYXhXaW5kQywgbWF4V2luZEYpO1xuXG4gIHJldHVybiBkZXRhaWxzQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlRm9yZWNhc3RDb250YWluZXIgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICBmb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QgPSBgZGF5IGRheSR7aW5kZXh9YDtcbiAgZGF5LmNsYXNzTGlzdCA9ICdkYXlOYW1lJztcbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgZGF5LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgIGRheS50ZXh0Q29udGVudCA9ICdUb21vcnJvdyc7XG4gIH0gZWxzZSB7XG4gICAgZGF5LnRleHRDb250ZW50ID0gJ1RoZSBmdXR1cmUnO1xuICB9XG5cbiAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kKFxuICAgIGRheSxcbiAgICBjcmVhdGVNYXhNaW5Db250YWluZXIoKSxcbiAgICBjcmVhdGVGb3JlY2FzdERldGFpbHNDb250YWluZXIoKSxcbiAgKTtcblxuICByZXR1cm4gZm9yZWNhc3RDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JlY2FzdFdlYXRoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcmVjYXN0ZVdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZm9yZWNhc3REYXlzID0gMztcblxuICBmb3JlY2FzdGVXZWF0aGVyLmNsYXNzTGlzdCA9ICdmb3JlY2FzdCc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXM7IGkgKz0gMSkge1xuICAgIGZvcmVjYXN0ZVdlYXRoZXIuYXBwZW5kKGNyZWF0ZUZvcmVjYXN0Q29udGFpbmVyKGkpKTtcbiAgfVxuXG4gIHJldHVybiBmb3JlY2FzdGVXZWF0aGVyO1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBtYWluLmFwcGVuZChjcmVhdGVTZWFyY2goKSwgY3JlYXRlQ3VycmVudFdlYXRoZXIoKSwgY3JlYXRlRm9yZWNhc3RXZWF0aGVyKCkpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb3B5LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzICc7XG4gIG5hbWUudGV4dENvbnRlbnQgPSAnUm9nZXJFYXV4JztcbiAgZm9vdGVyLmFwcGVuZChjb3B5LCBuYW1lKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBib2R5LmFwcGVuZChjcmVhdGVIZWFkZXIoKSwgY3JlYXRlTWFpbigpLCBjcmVhdGVGb290ZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY2hhbmdlV2VhdGhlciBmcm9tICcuL21vZHVsZXMvQVBJJztcbmltcG9ydCBjcmVhdGVDb250ZW50IGZyb20gJy4vbW9kdWxlcy9VSSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgZGVmYXVsdENpdHkgPSAnR3VhZGFsYWphcmEnO1xuXG5jcmVhdGVDb250ZW50KCk7XG5jaGFuZ2VXZWF0aGVyKGRlZmF1bHRDaXR5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==