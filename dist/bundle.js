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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar counterForLoad = 0;\n\nvar getInput = function getInput(event) {\n  event.preventDefault();\n  counterForLoad++;\n\n  if (counterForLoad > 1) {\n    var output = document.querySelector('#output');\n    var repoBox = document.querySelector('.repo-box');\n    output.remove();\n    repoBox.remove();\n    counterForLoad = 0;\n  }\n\n  var input = document.getElementById(\"input\").value;\n\n  var getRepo =\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var response, thirdDiv, repo;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"https://api.github.com/users/\".concat(input, \"/repos\")).then(function (data) {\n                return data.json();\n              })[\"catch\"](function (err) {\n                return err.message;\n              });\n\n            case 2:\n              response = _context.sent;\n              console.log(response);\n\n              if (response) {\n                thirdDiv = document.createElement('div');\n                thirdDiv.className = 'repo-box';\n                document.querySelector('.container').appendChild(thirdDiv);\n                repo = document.createElement('h4');\n                repo.innerHTML = \"Repositories\";\n                document.querySelector('.repo-box').appendChild(repo);\n                response.map(function (item, index) {\n                  var info = document.createElement('div');\n                  info.id = \"info\".concat(index);\n                  info.className = \"info-box\";\n                  document.querySelector('.repo-box').appendChild(info);\n                  var repoName = document.createElement('p');\n                  repoName.innerHTML = response[index].name;\n                  repoName.className = \"list\";\n                  document.querySelector(\"#info\".concat(index)).appendChild(repoName);\n                  var starImage = document.createElement('img');\n                  starImage.className = \"icon\";\n                  starImage.src = \"../images/star.png\";\n                  document.querySelector(\"#info\".concat(index)).appendChild(starImage);\n                  var starCount = document.createElement('p');\n                  starCount.innerHTML = response[index].stargazers_count;\n                  document.querySelector(\"#info\".concat(index)).appendChild(starCount);\n                  var forkImage = document.createElement('img');\n                  forkImage.className = \"icon\";\n                  forkImage.src = \"../images/fork.png\";\n                  document.querySelector(\"#info\".concat(index)).appendChild(forkImage);\n                  var forkCount = document.createElement('p');\n                  forkCount.innerHTML = response[index].forks_count;\n                  document.querySelector(\"#info\".concat(index)).appendChild(forkCount);\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getRepo() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  function getUserInfo() {\n    return _getUserInfo.apply(this, arguments);\n  }\n\n  function _getUserInfo() {\n    _getUserInfo = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2() {\n      var response, warning, outputBox, _outputBox, firstDiv, secondDiv, image, user, name, bio;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return fetch(\"https://api.github.com/users/\".concat(input)).then(function (data) {\n                return data.json();\n              })[\"catch\"](function (err) {\n                return err.message;\n              });\n\n            case 2:\n              response = _context2.sent;\n\n              if (response.message === \"Not Found\") {\n                warning = document.createElement('p');\n                outputBox = document.createElement('div');\n                outputBox.id = \"output\";\n                outputBox.className = \"warning\";\n                document.querySelector('.container').appendChild(outputBox);\n                warning.innerHTML = \"User not found\";\n                document.getElementById('output').appendChild(warning);\n              } else {\n                _outputBox = document.createElement('div');\n                _outputBox.id = \"output\";\n                document.querySelector('.container').appendChild(_outputBox);\n                firstDiv = document.createElement('div');\n                firstDiv.className = 'image-box';\n                document.getElementById('output').appendChild(firstDiv);\n                secondDiv = document.createElement('div');\n                secondDiv.className = 'text-box';\n                document.getElementById('output').appendChild(secondDiv);\n                image = document.createElement('img');\n                image.src = response.avatar_url;\n                image.className = \"user-image\";\n                document.querySelector('.image-box').appendChild(image);\n                user = document.createElement('P');\n                user.innerHTML = '@' + response.login;\n                document.querySelector('.text-box').appendChild(user);\n                name = document.createElement('h3');\n                name.innerHTML = response.name;\n                document.querySelector('.text-box').appendChild(name);\n                bio = document.createElement('P');\n                bio.innerHTML = response.bio;\n                document.querySelector('.text-box').appendChild(bio);\n                getRepo();\n              }\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _getUserInfo.apply(this, arguments);\n  }\n\n  getUserInfo();\n  counterForLoad = 1;\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });