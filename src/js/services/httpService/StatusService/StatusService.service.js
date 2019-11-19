(function() {
  "use strict";
  angular.module("StatusService").service("StatusService", StatusService);
  StatusService.$inject = ["http"];
  function StatusService(http) {
    var service = this;
    service.userId = "72fdcd5d-6ec8-4418-b754-ec716f3eba70";
    service.getStatuses = function() {
      return http.get("status/" + service.userId);
    };
  }
})();
