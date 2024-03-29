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
    $ctrl.btn = "show Paiments";
    $ctrl.toggle = function() {
      if ($ctrl.show === true) {
        $ctrl.btn = "show Paiments";
      } else {
        $ctrl.btn = "hide Paiments";
      }
      $ctrl.show = !$ctrl.show;
    };
    $ctrl.remove = function(id) {
      PaimentService.delete(id).then(function(res) {
        console.log(res);
      });
    };
  }
})();
