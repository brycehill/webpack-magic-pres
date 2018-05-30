
## Module Mystery Tour

Take a journey with your code as it's transformed from beautifully readable to an uglified hot mess.

1. What is Webpack?
  - Module Bundle Loader
  - Huh?
      It allows us to write things like:
      ```js
      import Header from './header'
      ```
      Without browser's supporting it!

2. Why?
  1. Encapsulation
    - Only expose what you want (privates)
    - No more globals for sharing variables
  2. Dependency Graph
    - KNOW whom is using me

3. History

  - Script Tags
    - Make sure to get that order right!
      ```
        <script src="./myfile.js">
        <script src="./myfile2.js"> <!-- DON'T MOVE THIS -->
        <script src="./myfile32.js">
      ```
    - No dependencies :thumbs_down:

        |
        V

  - CommonJS (Node) http://requirejs.org/docs/commonjs.html
    - Started around 2009? https://groups.google.com/forum/#!forum/commonjs
    - Not built with browser in mind 
    - Syncronous - bad for perf
    - Uses a `require` function
    - Need a server or additional build steps to work in browser (node, browserify)
    - Example
	  ```js
 		// Synchronously load jquery and all of it's dependencies
 	    const $ = require('jquery')
 	    const bar = require('./bar')
		$('button').each(bar).fade()
      ```
 
        |
        V

  - RequireJS (AMD) http://requirejs.org/docs/whyamd.html
	- Based on AMD https://github.com/amdjs/amdjs-api/wiki/AMD
    - Started around the same time as CommonJS
    - Uses a `define` function
    - Works in browser by default, no extra tooling needed
    - Async
	  ```js
        // Dependency List
 	    define(['require', 'jquery'], function(require, $) {
  		  // Returns a function that is your "module"
  	      return function() {
 			const bar = require('./bar')
		    $('button')
			  .each(function(el) {
		 	    bar(el)
			  })
             .fade()
          }
        })
      ```

  - ES Modules https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive
    - Browser creates Module Records (see if webpack does this)
    - Module Records are turned into an Module Instance
    - Loader Spec (HTML Spec for browsers) vs ES Module Spec
      -  The loader fetches the files and controls how modules are. . . loader


4. Module Mystery Tour
  - WTH HAPPENS TO MY CODE
  - Webpack - entry point
    - Loaders - takes a string of content from the file, transforms it, and returns a new string
      - https://webpack.js.org/contribute/writing-a-loader
      - Babel  - example
          `./babel-loader/lib/index.js`
          A very crude version of a babel loader
          ```js
            var babel = require('babel-core')
            var loaderUtils = require('loader-utils')

            module.exports = function(source, inputSourceMap) {
              var options = loaderUtils.getOptions(this) || {}
              var result = babel.transform(source, options)
              var code = _transpile.code,
              // source map
              var map = _transpile.map

              this.callback(null, code, map)
            }
          ```
          ```js
          import { startsWith, favorite } from './apple';

          startsWith('j').map(function (apple) {
            return favorite(apple.type);
          });
          var _extends = Object.assign || 
            function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

          import all from './data/apples.js';

          export var pick = function pick(type) {
            return all.find(function (apple) {
              return apple.type.toLowerCase() == type.toLowerCase();
            });
          };

          export var startsWith = function startsWith(char) {
            return all.filter(function (apple) {
              return new RegExp('^' + char, 'i').test(apple.type);
            });
          };

          export var favorite = function favorite(type) {
            var apple = pick(type);
            return apple ? _extends({}, pick(type), { favorite: true }) : null;
          };
          ```
    - Plugins - more complicated
      - https://webpack.js.org/contribute/writing-a-plugin
    - Output 
      - https://github.com/TheLarkInn/artsy-webpack-tour
      - https://www.youtube.com/watch?v=UNMkLHzofQI
        - module graphs
        - chunk graph
        - optimize
        - concat
        - module ids
        - generate code - crazy
        - build assets (.js files), copy generated code over

5. Future
  - Async Chunks (smart)

