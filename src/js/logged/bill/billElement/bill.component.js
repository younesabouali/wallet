(function() {
  "use strict";
  angular.module("bill").component("bill", {
    templateUrl: "/src/js/logged/bill/billElement/bill.template.html",
    controller: billController,
    bindings: {
      item: "<",
      onRemove: "&"
    }
  });
  function billController() {
    const $ctrl = this;
  }
})();
