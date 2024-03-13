(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Taras";

  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Taras likes trains";
  };

  $scope.driveTaras = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
