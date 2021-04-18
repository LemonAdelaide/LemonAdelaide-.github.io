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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/ts/startup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/ts/application.ts":
/*!********************************!*\
  !*** ../src/ts/application.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Application {\r\n    static async initialize() {\r\n        window.addEventListener(\"DOMContentLoaded\", async () => {\r\n            document.body.classList.add(\"doTrans\");\r\n            const delay = 5000;\r\n            let scenes = (await Promise.resolve().then(() => __webpack_require__(/*! ./scenes/starting */ \"../src/ts/scenes/starting.ts\"))).default;\r\n            let nextScene = scenes[0];\r\n            doThing();\r\n            setInterval(() => {\r\n                doThing();\r\n            }, delay);\r\n            function doThing() {\r\n                document.body.style.backgroundColor = nextScene.background;\r\n                document.body.style.setProperty(\"--text-shadow-color\", nextScene.shadow);\r\n                const elements = document.querySelectorAll(\".foreground\");\r\n                elements.forEach((element) => element.style.color = nextScene.foreground);\r\n                const scenes2 = scenes;\r\n                scenes2.slice(scenes2.indexOf(nextScene), 1);\r\n                nextScene = getRandomFromArray(scenes2);\r\n            }\r\n            function getRandomFromArray(array) {\r\n                return array[Math.floor(Math.random() * array.length)];\r\n            }\r\n        });\r\n    }\r\n}\r\nexports.default = Application;\r\n\n\n//# sourceURL=webpack:///../src/ts/application.ts?");

/***/ }),

/***/ "../src/ts/classes/scene.ts":
/*!**********************************!*\
  !*** ../src/ts/classes/scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Scene {\r\n    constructor(foreground, shadow, background) {\r\n        this.foreground = foreground;\r\n        this.shadow = shadow;\r\n        this.background = background;\r\n    }\r\n}\r\nexports.default = Scene;\r\n\n\n//# sourceURL=webpack:///../src/ts/classes/scene.ts?");

/***/ }),

/***/ "../src/ts/scenes/starting.ts":
/*!************************************!*\
  !*** ../src/ts/scenes/starting.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst scene_1 = __webpack_require__(/*! ./../classes/scene */ \"../src/ts/classes/scene.ts\");\r\nconst scenes = [];\r\nscenes.push(new scene_1.default(\"rgb(255, 255, 255)\", \"rgb(183, 123, 130)\", \"rgb(248, 211, 135)\"));\r\nscenes.push(new scene_1.default(\"rgb(255, 255, 0)\", \"rgb(255, 153, 102)\", \"rgb(255, 255, 204)\"));\r\nscenes.push(new scene_1.default(\"rgb(0, 204, 255)\", \"rgb(255, 153, 255)\", \"rgb(255, 77, 77)\"));\r\nscenes.push(new scene_1.default(\"rgb(51, 153, 255)\", \"rgb(0, 51, 204)\", \"rgb(0, 0, 102)\"));\r\nscenes.push(new scene_1.default(\"rgb(0, 102, 0)\", \"rgb(51, 204, 51)\", \"rgb(51, 153, 102)\"));\r\nscenes.push(new scene_1.default(\"rgb(255, 153, 153)\", \"rgb(255, 0, 0)\", \"rgb(29,0,0)\"));\r\nscenes.push(new scene_1.default(\"rgb(170, 128, 255)\", \"rgb(255, 153, 221)\", \"rgb(77, 210, 255)\"));\r\nscenes.push(new scene_1.default(\"rgb(255, 102, 0)\", \"rgb(255, 153, 51)\", \"rgb(0, 153, 204)\"));\r\nscenes.push(new scene_1.default(\"rgb(255, 0, 0)\", \"rgb(255, 255, 255)\", \"rgb(0, 51, 204)\"));\r\nscenes.push(new scene_1.default(\"rgb(102, 102, 255)\", \"rgb(204, 153, 255)\", \"rgb(102, 0, 204)\"));\r\nexports.default = scenes;\r\n\n\n//# sourceURL=webpack:///../src/ts/scenes/starting.ts?");

/***/ }),

/***/ "../src/ts/startup.ts":
/*!****************************!*\
  !*** ../src/ts/startup.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst application_1 = __webpack_require__(/*! ./application */ \"../src/ts/application.ts\");\r\napplication_1.default.initialize();\r\n\n\n//# sourceURL=webpack:///../src/ts/startup.ts?");

/***/ })

/******/ });