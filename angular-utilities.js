angular.module("angular-utilities", [])
  /**
   * Provides service hook for angular utilities.
   */
  .service('$utilities', ['$window', function ($window) {
    if($window.utilities === undefined) {
      throw new Error('"utilities.js" has not been loaded yet. This needs to be loaded before invoking this service.')
    }
    return $window.utilities;
  }]);
