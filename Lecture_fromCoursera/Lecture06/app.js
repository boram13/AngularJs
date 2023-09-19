(function () {
    'use strict';
    
    angular.module('NameCalculator', [])
    
    .controller('NameCalculatorController', function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0; //initial 0
    
      $scope.displayNumeric = function () {
        //get the total value
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };
    
    
      function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringValue += string.charCodeAt(i);
        }
    
        return totalStringValue;
      }
    
    });
    
    
    })();