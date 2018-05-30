;(function(modules) {
  // webpackBootstrap
  // The module cache
  var installedModules = {}

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }
    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      // Loaded Flag
      l: false,
      exports: {}
    })

    // Execute the module function <-- See below!
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    // Uses fance Function.prototype.call syntax
    // modules[moduleId](module, module.exports, __webpack_require__)

    // Flag the module as loaded
    module.l = true

    // Return the exports of the module
    return module.exports
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules
  // expose the module cache
  __webpack_require__.c = installedModules

  // define getter function for harmony exports
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      })
    }
  }

  // define __esModule on exports
  __webpack_require__.r = function(exports) {
    Object.defineProperty(exports, '__esModule', { value: true })
  }

  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default']
          }
        : function getModuleExports() {
            return module
          }
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }

  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  __webpack_require__.p = ''

  /**
   * 1. Load entry module and return exports
   *
   * This is where it all gets started!!
   * 
   */
  return __webpack_require__((__webpack_require__.s = './src/index.js'))
})({
  /**
   * 1. Start here
   * 
   * This is a map of module identifiers (string paths in this case) to a function.
   * 
   * the function "loads" the module using the magic `__webpack__require__` function
   * and adds the code to the exports object (__webpack_exports__)
   */
  './src/apple.js': function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    /**
     * Adds `__esModule property to the exports object
     */
    __webpack_require__.r(__webpack_exports__);
    /**
     * __webpack_require__.d checks for module in cache and creates entry
     * {
     *   // This function is really a getter, but basic idea:
     *   pick: function () { return pick }
     * }
     * 
     * NOTE: It is mutating `__webpack_exports__` which gets passed around everywhere.
     */
    __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
    __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
    __webpack_require__.d(__webpack_exports__, "favorite", function() { return favorite; });

    /**
     * This is the actual transpiled code
     * 
     * You'll notice that the import statement has been replaced with `__webpack_require__`
     */
    var _data_apples_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/data/apples.js");
    // Remember this code from before? From Babel?
    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
    var pick = function pick(type) {  return _data_apples_js__WEBPACK_IMPORTED_MODULE_0__["default"].find(function (apple) {    return apple.type.toLowerCase() == type.toLowerCase();  });};var startsWith = function startsWith(char) {  return _data_apples_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (apple) {    return new RegExp('^\\' + char, 'i').test(apple.type);  });};
    var favorite = function favorite(type) {var apple = pick(type);  return apple ? _extends({}, pick(type), { favorite: true }) : null;};
  },

  './src/data/apples.js': function( module, __webpack_exports__, __webpack_require__) {
    'use strict'
    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ([{}])
  },

  './src/index.js': function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    __webpack_require__.r(__webpack_exports__);
    var _apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple */ "./src/apple.js");
    Object(_apple__WEBPACK_IMPORTED_MODULE_0__["startsWith"])('j').map(function (apple) {
      return Object(_apple__WEBPACK_IMPORTED_MODULE_0__["favorite"])(apple.type);});
  }
})
