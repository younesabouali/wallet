(function() {
  "use strict";

  angular.module("wallet").config(RoutesConfig);
  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise("/login");
    $stateProvider
      .state("login", {
        url: "/login",
        // controller: "loginFormController as $ctrl",
        templateUrl: "src/views/login.html"
      })
      .state("register", {
        url: "/register",
        template: "<register-form></register-form>",
        controller: ""
      })
      .state("main", {
        url: "/main",
        templateUrl: "src/views/main.html",
        controller: ""
      });
  }
})();
