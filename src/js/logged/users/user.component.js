(function() {
  "use strict";
  angular.module("User").component("user", {
    templateUrl: "/src/js/logged/users/user.template.html",
    controller: userController
  });
  userController.$inject = ["UserService"];
  function userController(UserService) {
    const $ctrl = this;
    UserService.get().then(function(res) {
      $ctrl.data = res.data;
    });
  }
})();
