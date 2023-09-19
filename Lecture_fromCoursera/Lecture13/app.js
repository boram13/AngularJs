(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);
    
    MsgController.$inject = ['$scope', 'lovesFilter'];
    //lovesFilter in this case is injected
    function MsgController($scope, lovesFilter) {
      $scope.stateOfBeing = "hungry";
    
      $scope.sayMessage = function () {
        var msg = "Yaakov likes to eat healthy snacks at night!";
        return msg;
      };
    
      $scope.sayLovesMessage = function () {
        //use of the love filter 
        var msg = "Yaakov likes to eat healthy snacks at night!";
        msg = lovesFilter(msg)
        return msg;
      };
    
      $scope.feedYaakov = function () {
        $scope.stateOfBeing = "fed";
      };
    }
    
    function LovesFilter() {
      return function (input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
      };
    }
    
    function TruthFilter() {
      return function (input, target, replace) {
        input = input || "";
        input = input.replace(target, replace);
        return input;
      }
    }
    
    })();