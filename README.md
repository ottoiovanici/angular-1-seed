# Angular-1 seed project
Personal seed for quick angular-1 bootstrap

## Includes
* AngularJS v1.6.3
* JQuery
* Boostrap v3
* AngularUI Router
  * https://github.com/angular-ui/ui-router
* Lodash library
* Angular Boostrap for components written in pure AngularJS 
  * https://github.com/angular-ui/bootstrap
  * Demo: https://angular-ui.github.io/bootstrap/

## Installation
`install npm`  
`install bower`  
`install gulp`

### Install dependencies
`bower install`  
`npm install`

## Usage
`gulp` -> Default: runs dev (development) tasks  
`gulp dev` -> runs dev (development) tasks
* builds:
  * assets-scripts.js
  * assets-styles.css 
* watch for changes on: 
  * sass
  * app. JS files
  * app. templates
* livereload start on localhost:8015

`gulp dev-build` -> compiles all assets to dist folder
* assets-scripts.js
* assets-styles.js
* app-bundle.js
* templates.js
 
`gulp prod-build` -> compile and minify all assets to dist folder
* assets-scripts.js
* assets-styles.js
* app-bundle.js
* templates.js
  
`gulp sass` -> compiles sass  
`gulp live-reload-dev` -> starts webserver on localhost:8015

## Trap for young players
* in `app.js` file, `angular.module('templates', []);` should be loaded BEFORE the main module
