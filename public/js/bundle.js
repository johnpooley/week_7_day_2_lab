/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/user/OneDrive/g17/codeclan_work/week_7/day_2/lab/node_modules/vue/dist/vue.esm.js'\");\n\n//# sourceURL=webpack:///./node_modules/vue/dist/vue.esm.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () =>{\n  new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    el: \"#app\",\n    data:{\n      countries: [],\n      runningTotal:0,\n      selectedCountry: null\n    },\n    mounted(){\n      this.fetchCountry();\n      // this.totalPopulation;\n    },\n\n    computed: {\n      totalPopulation: function() {\n        return this.countries.reduce((runningTotal, country)=> runningTotal + country.population, 0);\n\n      },\n\n    },\n\n    methods: {\n      fetchCountry: function () {\n        fetch('https://restcountries.eu/rest/v2/all')\n        .then(response => response.json())\n        .then(data => this.countries=data)\n        // .then(this.countries.reduce((runningTotal, country)=> {\n        //   return runningTotal + country.population;\n        // }, 0) = totalPopulation)\n        // .then( this.countries.reduce((runningTotal, country) => {\n        //   runningTotal += country.population},0)\n        // )\n      },\n      calcTotalPopulation: function() {\n        return this.countries.reduce((runningTotal, country)=> {\n          return runningTotal + country.population;\n        }, 0);\n      },\n      // totalPopulation: function(){\n      //   fetch('https://restcountries.eu/rest/v2/all')\n      //   .then(response => response.json())\n      //   .then( data => data=data.reduce((runningTotal, country) =>{\n      //     return runningTotal + country.population;\n      //   }, 0))\n\n      selectedCountries: function() {\n        return this.counries.filter((country) => {\n          country == selectedCountry;\n        })\n      }\n\n\n    }\n  })\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });