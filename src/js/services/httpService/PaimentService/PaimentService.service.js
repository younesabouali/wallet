(function() {
  "use strict";
  angular.module("PaimentService").service("PaimentService", PaimentService);
  PaimentService.$inject = ["http", "jwtHelper"];
  function PaimentService(http, jwtHelper) {
    var service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = function() {
      return http.get("paiments/" + tokenPayload.id);
    };
  }
})();
