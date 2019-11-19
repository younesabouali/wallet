(function() {
  "use strict";
  angular.module("PaimentService").service("PaimentService", PaimentService);
  PaimentService.$inject = ["http"];
  function PaimentService(http) {
    var service = this;
    service.userId = "72fdcd5d-6ec8-4418-b754-ec716f3eba70";

    service.get = function() {
      return http.get("paiments/" + service.userId);
    };
  }
})();
