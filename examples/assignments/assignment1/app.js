(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.showMessage = "";

  $scope.validateOrder = function () {
    var messageForDisplay = countMeals($scope.lunchMenu);
    $scope.showMessage = messageForDisplay;
  };

  function countMeals(string) {
    if (string.split(',').length <= 3 && string) {
      return "Enjoy!";
    } else if (string.split(',').length > 3) {
      return "Too much!";
    }
    return "Please enter data first";

  };
}

})();
