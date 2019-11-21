(function() {
  "use strict";
  angular.module("paimentList").component("paimentList", {
    templateUrl: "/src/js/logged/paiment/paimentList/paimentList.template.html",
    controller: paimentListController
  });
  paimentListController.$inject = ["PaimentService"];
  function paimentListController(PaimentService) {
    const $ctrl = this;
    PaimentService.get().then(function(res) {
      $ctrl.data = res.data;
    });
    $ctrl.btn = "show";
    $ctrl.toggle = function() {
      if ($ctrl.show === true) {
        $ctrl.btn = "show";
      } else {
        $ctrl.btn = "hide";
      }
      $ctrl.show = !$ctrl.show;
    };
  }
})();
