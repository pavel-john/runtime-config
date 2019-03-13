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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: init, get, getPublicConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPublicConfig\", function() { return getPublicConfig; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var convict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! convict */ \"convict\");\n/* harmony import */ var convict__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(convict__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar props = {\n  config: null,\n  publicConfig: {}\n}; // Define a schema\n\nvar schema = {\n  env: {\n    doc: \"The application environment.\",\n    format: [\"production\", \"development\", \"test\"],\n    default: \"production\",\n    env: \"NODE_ENV\"\n  },\n  port: {\n    doc: \"The port to bind.\",\n    format: \"port\",\n    default: 8080,\n    env: \"PORT\",\n    arg: \"port\",\n    public: true\n  },\n  client: {\n    value1: {\n      doc: \"Client value 1.\",\n      format: \"String\",\n      default: \"I'm value 1.\",\n      env: \"CLIENT_VALUE_1\",\n      public: true\n    },\n    value2: {\n      doc: \"Client value 2.\",\n      format: \"String\",\n      default: \"I'm value 2.\",\n      env: \"CLIENT_VALUE_2\",\n      public: true\n    }\n  },\n  value3: {\n    doc: \"Value 3.\",\n    format: \"String\",\n    default: \"I'm value 3 - private.\",\n    env: \"CLIENT_VALUE_3\",\n    public: false\n  }\n};\n\nvar selectPublic = function selectPublic(node) {\n  var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  // is the current node a leave (no descendants with public variables)?\n  var leave = true; // resulting object after filtering out private variables\n\n  var filtered = {};\n\n  for (var key in node) {\n    if (node.hasOwnProperty(key) && _typeof(node[key]) === 'object') {\n      // recurrent call\n      var child = selectPublic(node[key], [].concat(_toConsumableArray(address), [key]));\n\n      if (child != null) {\n        leave = false;\n        filtered[key] = child;\n      }\n    }\n  } // if the subtree is a leave\n\n\n  if (leave) {\n    // if it is a public variable, return value, return null otherwise\n    return node.public === true ? props.config.get(address.join('.')) : null;\n  } else {\n    // return subtree containing only public variables\n    return filtered;\n  }\n};\n\nvar init = function init(configDirPath) {\n  // Use config schema\n  props.config = convict__WEBPACK_IMPORTED_MODULE_1___default()(schema); // Load environment dependent configuration\n\n  var env = props.config.get('env');\n  var configPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(configDirPath, \"\".concat(env, \".json\"));\n  console.log(\"Using config file: \".concat(configPath));\n  props.config.loadFile(configPath); // Perform validation\n\n  props.config.validate({\n    allowed: 'strict'\n  });\n  props.publicConfig = selectPublic(schema);\n};\nvar get = function get(name) {\n  return props.config.get(name);\n};\nvar getPublicConfig = function getPublicConfig() {\n  return props.publicConfig || {};\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/runtimeConfigMiddleware.js":
/*!****************************************!*\
  !*** ./src/runtimeConfigMiddleware.js ***!
  \****************************************/
/*! exports provided: buildHandleRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildHandleRequest\", function() { return buildHandleRequest; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\nvar buildHandleRequest = function buildHandleRequest() {\n  return function (request, response) {\n    try {\n      response.send(\"__runtimeConfig = \".concat(JSON.stringify(_config__WEBPACK_IMPORTED_MODULE_1__[\"getPublicConfig\"]()), \";\"));\n    } catch (error) {\n      console.error(error);\n      response.status(500).send('Unable to send configuration.');\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/runtimeConfigMiddleware.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _runtimeConfigMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtimeConfigMiddleware */ \"./src/runtimeConfigMiddleware.js\");\n\n\n\n // common root directory to client and server\n\nvar rootPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '../../');\nvar publicPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(rootPath, '/client/build');\nvar configDirPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(rootPath, '/server/config');\nconsole.log(configDirPath); // initialize configuration\n\n_config__WEBPACK_IMPORTED_MODULE_2__[\"init\"](configDirPath);\nvar express = express__WEBPACK_IMPORTED_MODULE_0___default()(); // runtime configuration middlewarte\n\nexpress.get(/\\/runtimeConfig.js$/, _runtimeConfigMiddleware__WEBPACK_IMPORTED_MODULE_3__[\"buildHandleRequest\"]()); // static file server\n\nexpress.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(publicPath));\nvar port = _config__WEBPACK_IMPORTED_MODULE_2__[\"get\"]('port');\nexpress.listen(port, function () {\n  console.log(\"Server set to publish static files from: \".concat(publicPath));\n  console.log(\"Listening at http://localhost:\".concat(port, \"/\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "convict":
/*!**************************!*\
  !*** external "convict" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"convict\");\n\n//# sourceURL=webpack:///external_%22convict%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });