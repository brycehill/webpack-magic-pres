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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/*! exports provided: pick, startsWith, favorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pick\", function() { return pick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startsWith\", function() { return startsWith; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favorite\", function() { return favorite; });\n/* harmony import */ var _data_apples_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/apples.js */ \"./src/data/apples.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nvar pick = function pick(type) {\n  return _data_apples_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(function (apple) {\n    return apple.type.toLowerCase() == type.toLowerCase();\n  });\n};\n\nvar startsWith = function startsWith(char) {\n  return _data_apples_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter(function (apple) {\n    return new RegExp('^' + char, 'i').test(apple.type);\n  });\n};\n\nvar favorite = function favorite(type) {\n  var apple = pick(type);\n  return apple ? _extends({}, pick(type), { favorite: true }) : null;\n};\n\n//# sourceURL=webpack:///./src/apple.js?");

/***/ }),

/***/ "./src/data/apples.js":
/*!****************************!*\
  !*** ./src/data/apples.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  id: \"0_Jackson's Seedling\",\n  type: \"Jackson's Seedling\",\n  description: 'A synonym for Gladstone.'\n}, {\n  id: '2_James Grieve',\n  type: 'James Grieve',\n  description: 'Proof that supermarket apples are no longer bland and boring, Jazz has crisp flesh with a superb rich peardrop flavor.'\n}, {\n  id: '4_Jazz™',\n  type: 'Jazz™',\n  description: 'A synonym for Jefferies.'\n}, {\n  id: '6_Jefferies',\n  type: 'Jefferies',\n  description: 'An attractive unpretentious apple, crisp and refreshing, nice flavour but rather bland.'\n}, {\n  id: '7_Jefferis',\n  type: 'Jefferis',\n  description: 'An old English apple variety, possibly from Devon / Cornwall, possibly a cider apple variety.'\n}, {\n  id: '8_Jersey Mac',\n  type: 'Jersey Mac',\n  description: 'Solid medium fruit, orange red streaked color. Flesh is yellowish white and fine grained.'\n}, {\n  id: '9_Jester',\n  type: 'Jester',\n  description: 'Medium size, bright red, fully or nearly fully colored. Flavor is Jonathan-like, but less acid. Keeps 10 weeks.'\n}, {\n  id: '11_Johnny Voun',\n  type: 'Johnny Voun',\n  description: 'Conical shaped apple with streaky red blush, crackled with russet that masks large tan lenticels. Light Yellow green flesh. Very juicy and sweet, tempered with a little tartness.'\n}, {\n  id: '12_Jonadel',\n  type: 'Jonadel',\n  description: 'As the name suggests, Jonagrimes is a cross between Jonathan and Grimes Golden.'\n}, {\n  id: '13_Jonafree',\n  type: 'Jonafree',\n  description: 'The perfect combination of sugar and spice - taste of Red Delicious and the tart freshness of Jonathan. A crisp texture makes it ideal for eating, cooking or fresh eating. Keeps extremely well. 2½ to 3 inch fruit is bright red with yellow under color.'\n}, {\n  id: '15_Jonagold',\n  type: 'Jonagold',\n  description: 'Flavor similar to Jonathan'\n}, {\n  id: '17_Jonagored',\n  type: 'Jonagored',\n  description: \"It has the crisper texture of the Baldwin combined with the Jonathan's distinctive aromatic flavor, and is a brighter red than either.\"\n}, {\n  id: '19_Jonagrimes',\n  type: 'Jonagrimes',\n  description: 'One of the lesser-known McIntosh-style apples.'\n}, {\n  id: '20_Jonalicious',\n  type: 'Jonalicious',\n  description: 'A synonym for September Wonder Fuji.'\n}, {\n  id: '22_Jonamac',\n  type: 'Jonamac',\n  description: 'A new bi-coloured apple from Switzerland, quite similar to Elstar in appearance.'\n}, {\n  id: '0_Aceymac',\n  type: 'Aceymac',\n  description: 'Resembles McIntosh in taste, appearance, shape, and flesh. Slightly firmer than McIntosh. Aceymac may be Spartan with new name.'\n}, {\n  id: \"1_Adams's Pearmain\",\n  type: \"Adams's Pearmain\",\n  description: \"Classic Victorian 'pearmain' shape apple with a nutty sweet flavour.\"\n}, {\n  id: '3_Adanac',\n  type: 'Adanac',\n  description: 'A red-fleshed apple variety from the USA, sometimes known as Hidden Rose® or Aerlies Red Flesh.'\n}, {\n  id: '4_Airlie Red Flesh',\n  type: 'Airlie Red Flesh',\n  description: 'One of the best early-season apples, better known in the USA than Europe, but would appeal to European tastes too.'\n}, {\n  id: '5_Akane',\n  type: 'Akane',\n  description: 'An heirloom apple variety from Sweden, quite widely grown in Scandanavia, very handsome fruit.'\n}, {\n  id: '7_Akero',\n  type: 'Akero',\n  description: 'A synonym for Newtown Pippin.'\n}, {\n  id: '9_Albany Beauty',\n  type: 'Albany Beauty',\n  description: 'An old and attractive culinary apple, cooks to a puree.'\n}, {\n  id: '10_Albermarle Pippin',\n  type: 'Albermarle Pippin',\n  description: 'A large traditional English cooking apple.'\n}, {\n  id: '12_Alderman',\n  type: 'Alderman',\n  description: 'An old russeted variety from Ireland, and as the name suggests, a good keeper.'\n}, {\n  id: '14_Alexander',\n  type: 'Alexander',\n  description: 'A red-fleshed apple variety.'\n}, {\n  id: '15_Alfriston',\n  type: 'Alfriston',\n  description: 'A sweet modern apple variety from western Canada, quite similar to Golden Delicious. Discovered as a chance seedling in an orchard in British Columbia.'\n}, {\n  id: '17_Alkmene',\n  type: 'Alkmene',\n  description: 'An excellent early eating apple, also good for cooking. Medium size, yellow-green fruit is flushed and streaked red to purple red. Sweet, very juicy flesh.'\n}, {\n  id: \"19_Allen's Everlasting\",\n  type: \"Allen's Everlasting\",\n  description: 'A very early season Golden Delicious style apple variety from Israel, noted for its very low chill requirement of less than 300 hours.'\n}, {\n  id: '20_Allington Pippin',\n  type: 'Allington Pippin',\n  description: 'A popular English culinary apple, which keeps its shape when cooked.'\n}, {\n  id: '22_Almata',\n  type: 'Almata',\n  description: 'A culinary apple from the Ukraine, possibly a more colored form of Antonovka.'\n}, {\n  id: '24_Ambrosia',\n  type: 'Ambrosia',\n  description: 'Very unusual oblate (flattened) shape looking like a rounded star from the end. A little larger than the Lady apple. Excellent flavor - aromatic with sufficient acid and a sweet fruity taste.'\n}, {\n  id: '26_American Mother',\n  type: 'American Mother',\n  description: 'An old apple variety from Ireland, with a flavor reminiscent of bananas.'\n}, {\n  id: '28_American Summer Pearmain',\n  type: 'American Summer Pearmain',\n  description: 'A long-keeping tart apple from Arkansas, USA - which goes almost black in storage.'\n}, {\n  id: '30_Ananas Reinette',\n  type: 'Ananas Reinette',\n  description: 'An attractive yellow/green apple with some red/orange flush. Shares its name with an old Gloucestershire (UK) pear variety.'\n}, {\n  id: '32_Anna',\n  type: 'Anna',\n  description: 'A high quality russet-style variety, sharper than Egremont Russet, with a rich flavour and occasionally a hint of lemon.'\n}, {\n  id: '34_Annie Elizabeth',\n  type: 'Annie Elizabeth',\n  description: 'An attractive and popular mid-season culinary apple, very versatile in the kitchen, cooks to a puree.'\n}, {\n  id: '36_Antonovka',\n  type: 'Antonovka',\n  description: 'Bright red blush over yellow-green. Keeps better than Golden Delicious.'\n}, {\n  id: '0_Baddow Pippin',\n  type: 'Baddow Pippin',\n  description: \"A synonym for D'Arcy Spice.\"\n}, {\n  id: '2_Bailey Sweet',\n  type: 'Bailey Sweet',\n  description: 'A very popular old American apple variety, widely grown for culinary use, and a good keeper.'\n}, {\n  id: '3_Baldwin',\n  type: 'Baldwin',\n  description: 'Large, green with red blush. Coarse, hard flesh. Subacid. Winter keeper, keeping several months without refrigeration. Excellent cooking apple.'\n}, {\n  id: '5_Ballarat Seedling',\n  type: 'Ballarat Seedling',\n  description: 'Discovered growing on an island off the coast of North Wales, and considered very disease-resistant.'\n}, {\n  id: '6_Balsam',\n  type: 'Balsam',\n  description: 'An attractive old English cooking apple.'\n}, {\n  id: '7_Bardsey',\n  type: 'Bardsey',\n  description: 'Medium to large fruit with an intense solid dark red skin. Lasts 3 months in storage.'\n}, {\n  id: '9_Barnack Beauty',\n  type: 'Barnack Beauty',\n  description: 'A modern red-fleshed apple variety with a good flavour, developed in Germany, and also known as Tickled Pink.'\n}, {\n  id: '11_Barry',\n  type: 'Barry',\n  description: 'Fruit is yellow splashed with red. Short storage period.'\n}, {\n  id: \"12_Baumann's Reinette\",\n  type: \"Baumann's Reinette\",\n  description: 'A popular English garden apple from the Victorian era, one of the first to ripen.'\n}, {\n  id: '14_Baya Marisa®',\n  type: 'Baya Marisa®',\n  description: 'Bedan is a traditional French bittersweet cider variety.'\n}, {\n  id: '16_Beacon',\n  type: 'Beacon',\n  description: 'A relatively unknown English 19th century dessert apple.'\n}, {\n  id: '17_Beautiful Arcade',\n  type: 'Beautiful Arcade',\n  description: 'A popular old dual-purpose apple from the Netherlands.'\n}, {\n  id: '18_Beauty of Bath',\n  type: 'Beauty of Bath',\n  description: 'Very good flavored Mac-type.'\n}, {\n  id: '20_Beauty of Hampshire',\n  type: 'Beauty of Hampshire',\n  description: 'Once a commercial variety in US. Large, attractive fruit. Bright red over yellow. Firm, coarse flesh. Not particularly flavorful. Winter keeper.'\n}, {\n  id: '22_Bedan',\n  type: 'Bedan',\n  description: 'A popular Swiss apple variety, although not well-known elsewhere'\n}, {\n  id: '23_Bedfordshire Foundling',\n  type: 'Bedfordshire Foundling',\n  description: 'Late keeping eating apple. Flesh rather dry with sweet pleasant flavor.'\n}, {\n  id: '24_Beeley Pippin',\n  type: 'Beeley Pippin',\n  description: 'A very rare English apple from the town of Beverley in East Yorkshire, can be seen at the Beverley Millenium Orchard.'\n}]);\n\n//# sourceURL=webpack:///./src/data/apples.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple */ \"./src/apple.js\");\n\n\nObject(_apple__WEBPACK_IMPORTED_MODULE_0__[\"startsWith\"])('j').map(function (apple) {\n  return Object(_apple__WEBPACK_IMPORTED_MODULE_0__[\"favorite\"])(apple.type);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });