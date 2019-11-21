(function() {
  "use strict";
  angular.module("BillService").service("BillService", BillService);
  BillService.$inject = ["http", "jwtHelper"];
  function BillService(http, jwtHelper) {
    const service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = function() {
      return http.get("bills/" + tokenPayload.id);
    };
  }
})();
