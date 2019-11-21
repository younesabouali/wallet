(function() {
  "use strict";
  angular.module("httpFactory", []).factory(httpFactory);
  httpFactory.$inject = ["$http"];
  function httpFactory($http) {
    var service = this;
    service.userId = "72fdcd5d-6ec8-4418-b754-ec716f3eba70";
  }
})();
