## angular-utilities.js
A port of the utilities.js service to Angular.

### Installation

```bash
bower install angular-utilities.js
```

### Example Usage

```js

// register module with angular application
angular
.module('MyApplication', [
  'angular-utilities'  // include Angular module dependency
])
.factory('MyClass', ['$utilities', function ($utilities) {

  var
  PROP_DATE = '_date';

  function MyClass (date) {
    this[PROP_DATE] = new Date();
    this.date = date;
  }

  Object.defineProperties(MyClass.prototype, {
    date: {
      get: $utilities.getter(PROP_DATE),
      set: $utilities.setterDate(PROP_DATE),
    }
  });

  return MyClass;
}]);
```

### Methods
For more information about the methods exposed in $utilities class, please see the
[utilities.js](https://github.com/kryo2k/utils.js) github page.