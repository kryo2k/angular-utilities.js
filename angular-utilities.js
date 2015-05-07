angular.module("angular-utilties", [])
  /**
   * Provides service hook for angular utilities.
   */
  .service('$utilties', ['$window', function ($window) {
    if($window.utilties === undefined) {
      throw new Error('"utilities.js" has not been loaded yet. This needs to be loaded before invoking this service.')
    }
    return $window.utilties;
  }]);
