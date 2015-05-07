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

### Methods
For more information about the methods exposed in $utilities class, please see the
[utilities.js](https://github.com/kryo2k/utils.js) github page.