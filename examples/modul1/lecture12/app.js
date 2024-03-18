(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope,$filter) {
  $scope.name = "Taras";
  $scope.trainCost = .45;

  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Taras likes trains";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.driveTaras = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
