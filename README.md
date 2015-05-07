## angular-utilities.js
A port of the utilities.js service to Angular.

### Installation

```bash
bower install angular-utilities.js
```

### Usage

```js

// register module with angular application
angular
.module('MyApplication', [ 'angular-utilties' ])
.factory('MyClass', ['$utilities', function ($utilities) {

  // .. Do something!

}]);
```