(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', lovesFilter)
.filter('truth', truthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope,lovesFilter) {
  $scope.name = "Taras";

  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    var msg = "Taras likes trains";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Taras likes trains";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.driveTaras = function () {
    $scope.stateOfBeing = "fed";
  };
}

function lovesFilter() {
  return function(input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function truthFilter() {
  return function(input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}

})();
