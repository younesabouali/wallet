(function() {
  "use strict";
  angular.module("http", []).service("http", http);
  http.$inject = ["$http"];
  function http($http) {
    const http = this;
    http.url = "http://localhost:3020/api/";
    http.get = function(details) {
      return $http({
        method: "GET",
        url: http.url + details
      });
    };
    http.post = function(details) {
      return $http({
        method: "POST",
        url: http.url + details.link,
        body: details.body
      });
    };
  }
})();
