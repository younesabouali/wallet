(function() {
  "use strict";
  angular.module("UserService").service("UserService", UserService);

  UserService.$inject = ["http"];
  function UserService(http) {
    var service = this;
    service.userId = "72fdcd5d-6ec8-4418-b754-ec716f3eba70";
    service.get = function() {
      return http.get("users/" + service.userId);
    };
    service.post = function(body) {
      return http.post({ link: "users/", body });
    };
  }
})();
