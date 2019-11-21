// (function() {
//   "use strict";
//   angular
//     .module("wallet")
//     .controller("loginFormController", loginFormController);
//   loginFormController.$inject = ["UserService", "jwtHelper"];
//   function loginFormController(UserService, jwtHelper) {
//     const $ctrl = this;
//     $ctrl.login = function() {
//       UserService.login({
//         email: $ctrl.body.email,
//         password: $ctrl.body.password
//       }).then(res => ($ctrl.data = res));
//     };
//   }
// })();
