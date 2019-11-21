(function() {
  "use strict";
  angular.module("ClientService").service("ClientService", ClientService);
  ClientService.$inject = ["http", "jwtHelper"];
  function ClientService(http, jwtHelper) {
    const service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = function() {
      return http.get("clients/" + tokenPayload.id);
    };
  }
})();
